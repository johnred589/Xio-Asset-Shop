require('dotenv').config();
const express = require('express');
const session = require('express-session');
const paypal = require('paypal-rest-sdk');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 8000;

// Security middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'", "https://www.paypal.com", "https://www.paypalobjects.com"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdnjs.cloudflare.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdnjs.cloudflare.com"],
            imgSrc: ["'self'", "data:", "https://via.placeholder.com", "https://cdn.discordapp.com"],
            connectSrc: ["'self'", "https://api.paypal.com", "https://api.sandbox.paypal.com", "https://discord.com"]
        }
    }
}));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// Middleware
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS || ['http://localhost:8000', 'http://127.0.0.1:8000'],
    credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.static(path.join(__dirname), {
    maxAge: '1d',
    etag: true
}));

// Session configuration with better security
app.use(session({
    secret: process.env.SESSION_SECRET || 'xio-assets-shop-secret-key-2024',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        sameSite: 'lax'
    },
    name: 'xio-session'
}));

// PayPal configuration with validation
if (!process.env.PAYPAL_CLIENT_ID || !process.env.PAYPAL_CLIENT_SECRET) {
    console.error('❌ PayPal credentials not found. Please set PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET in your .env file');
    process.exit(1);
}

paypal.configure({
    'mode': process.env.PAYPAL_MODE || 'sandbox',
    'client_id': process.env.PAYPAL_CLIENT_ID,
    'client_secret': process.env.PAYPAL_CLIENT_SECRET
});

// Routes
app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/about-us', (req, res) => {
    res.sendFile(path.join(__dirname, 'about-us.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'services.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});



// PayPal payment creation with improved error handling
app.post('/api/paypal/create-payment', async (req, res) => {
    try {
        const { amount, description, productId, quantity = 1 } = req.body;

        // Validate input
        if (!amount || !description || !productId) {
            return res.status(400).json({ error: 'Missing required fields: amount, description, productId' });
        }

        if (isNaN(amount) || amount <= 0) {
            return res.status(400).json({ error: 'Invalid amount' });
        }

        const totalAmount = (parseFloat(amount) * quantity).toFixed(2);

        const create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": `${process.env.BASE_URL || `http://localhost:${PORT}`}/api/paypal/success`,
                "cancel_url": `${process.env.BASE_URL || `http://localhost:${PORT}`}/api/paypal/cancel`
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": description.substring(0, 127), // PayPal limit
                        "sku": productId,
                        "price": amount,
                        "currency": "USD",
                        "quantity": quantity
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": totalAmount,
                    "details": {
                        "subtotal": totalAmount,
                        "tax": "0.00",
                        "shipping": "0.00"
                    }
                },
                "description": description.substring(0, 127)
            }]
        };

        paypal.payment.create(create_payment_json, (error, payment) => {
            if (error) {
                console.error('PayPal payment creation error:', error);
                return res.status(500).json({
                    error: 'Payment creation failed',
                    details: process.env.NODE_ENV === 'development' ? error : undefined
                });
            }

            // Store payment details in session
            req.session.paymentId = payment.id;
            req.session.paymentAmount = totalAmount;
            req.session.productId = productId;

            // Find approval URL
            const approval_url = payment.links.find(link => link.rel === 'approval_url');
            if (!approval_url) {
                return res.status(500).json({ error: 'Failed to get PayPal approval URL' });
            }

            res.json({
                approval_url: approval_url.href,
                payment_id: payment.id
            });
        });

    } catch (error) {
        console.error('PayPal create payment error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// PayPal success with improved handling
app.get('/api/paypal/success', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.session.paymentId;
    const expectedAmount = req.session.paymentAmount;

    if (!paymentId || !payerId) {
        return res.redirect('/home?payment=error&reason=missing_params');
    }

    // Get payment details first to verify amount
    paypal.payment.get(paymentId, (error, payment) => {
        if (error) {
            console.error('PayPal get payment error:', error);
            return res.redirect('/home?payment=error&reason=payment_not_found');
        }

        const actualAmount = payment.transactions[0].amount.total;

        const execute_payment_json = {
            "payer_id": payerId,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": actualAmount
                }
            }]
        };

        paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
            if (error) {
                console.error('PayPal payment execution error:', error);
                return res.redirect('/home?payment=failed&reason=execution_error');
            }

            // Clear session data
            delete req.session.paymentId;
            delete req.session.paymentAmount;
            delete req.session.productId;

            // Send Discord webhook notification
            const amount = payment.transactions[0].amount.total;
            sendPurchaseWebhook(req.user.username, 'PayPal', amount, 'USD');

            res.redirect('/home?payment=success&amount=' + amount);
        });
    });
});

// PayPal cancel
app.get('/api/paypal/cancel', (req, res) => {
    res.redirect('/home?payment=cancelled');
});

// GCash payment (simulated)
app.post('/api/gcash/payment', (req, res) => {
    const { amount, description } = req.body;

    // Simulate GCash payment processing
    setTimeout(() => {
        // Send Discord webhook notification
        sendPurchaseWebhook('Anonymous User', 'GCash', amount, 'PHP');
        res.json({ success: true, message: 'Payment processed successfully' });
    }, 2000);
});

// Discord webhook function
async function sendPurchaseWebhook(username, paymentMethod, amount, currency) {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) return;

    const embed = {
        title: '🎉 New Purchase!',
        color: 0x00ff00,
        fields: [
            {
                name: '👤 Customer',
                value: username,
                inline: true
            },
            {
                name: '💳 Payment Method',
                value: paymentMethod,
                inline: true
            },
            {
                name: '💰 Amount',
                value: `${currency} ${amount}`,
                inline: true
            },
            {
                name: '⏰ Timestamp',
                value: new Date().toISOString(),
                inline: false
            }
        ],
        footer: {
            text: 'Xio Assets Shop'
        }
    };

    try {
        await axios.post(webhookUrl, {
            embeds: [embed]
        });
    } catch (error) {
        console.error('Webhook error:', error);
    }
}



// Start server
app.listen(PORT, () => {
    console.log(`🚀 Xio Assets Shop server running on http://localhost:${PORT}`);
    console.log(`📱 Make sure to set up your environment variables in .env file`);
});
