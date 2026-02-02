const products = [
    {
        name: "Tip Jar V5",
        priceUSD: 40,
        pricePHP: 3500,
        image: "https://via.placeholder.com/320x180/333/fff?text=Tip+Jar+V5",
        description: "Advanced tip jar system for Roblox games with customizable features.",
        features: ["Customizable UI", "Multiple payment options", "Analytics dashboard", "Auto-save functionality"],
        category: "Monetization",
        tags: ["premium", "featured"],
        rating: "n/a",
        reviews: "n/a",
        sold: "n/a"
    },
    {
        name: "Inventory System",
        priceUSD: 6.72,
        pricePHP: 400,
        image: "https://via.placeholder.com/320x180/333/fff?text=Inventory+System",
        description: "Complete inventory management system for Roblox games.",
        features: ["Item storage", "Drag & drop interface", "Category sorting", "Save/load functionality"],
        category: "Gameplay",
        tags: ["essentials"],
        rating: "n/a",
        reviews: "n/a",
        sold: "n/a"
    },
    {
        name: "Donation UI System",
        priceUSD: 4,
        pricePHP: 200,
        image: "https://via.placeholder.com/320x180/333/fff?text=Donation+UI",
        description: "Professional donation interface for game monetization.",
        features: ["Clean design", "Payment integration", "Thank you messages", "Donation history"],
        category: "Monetization",
        tags: ["beginner-friendly"],
        rating: "n/a",
        reviews: "n/a",
        sold: "n/a"
    },
    {
        name: "Eating System",
        priceUSD: 11.67,
        pricePHP: 700,
        image: "https://via.placeholder.com/320x180/333/fff?text=Eating+System",
        description: "Realistic eating mechanics for Roblox games.",
        features: ["Food consumption", "Health regeneration", "Animation support", "Custom food items"],
        category: "Gameplay",
        tags: ["realistic"],
        rating: "n/a",
        reviews: "n/a",
        sold: "n/a"
    },
    {
        name: "DJ System",
        priceUSD: 20,
        pricePHP: 1150,
        image: "https://via.placeholder.com/320x180/333/fff?text=DJ+System",
        description: "Complete DJ booth system with music controls.",
        features: ["Music playlist", "Volume controls", "Visual effects", "User permissions"],
        category: "Entertainment",
        tags: ["premium", "featured"],
        rating: "n/a",
        reviews: "n/a",
        sold: "n/a"
    },
    {
        name: "TipJar Shop System",
        priceUSD: 8.33,
        pricePHP: 500,
        image: "https://via.placeholder.com/320x180/333/fff?text=TipJar+Shop",
        description: "Integrated shop system with tip jar functionality.",
        features: ["Product catalog", "Purchase history", "Inventory integration", "Admin controls"],
        category: "Monetization",
        tags: ["integrated"],
        rating: "n/a",
        reviews: "n/a",
        sold: "n/a"
    },
    {
        name: "Confession Wall",
        priceUSD: 13,
        pricePHP: 750,
        image: "https://via.placeholder.com/320x180/333/fff?text=Confession+Wall",
        description: "Anonymous confession system for community engagement.",
        features: ["Anonymous posting", "Moderation tools", "Like/vote system", "Report functionality"],
        category: "Social",
        tags: ["community"],
        rating: "n/a",
        reviews: "n/a",
        sold: "n/a"
    },
    {
        name: "Xio's Gear Shop System",
        priceUSD: 8.33,
        pricePHP: 500,
        image: "https://via.placeholder.com/320x180/333/fff?text=Gear+Shop",
        description: "Advanced gear shop with multiple categories.",
        features: ["Gear categories", "Search functionality", "Purchase limits", "Admin management"],
        category: "Gameplay",
        tags: ["advanced"],
        rating: "n/a",
        reviews: "n/a",
        sold: "n/a"
    },
    {
        name: "Offline Donation V1.1",
        priceUSD: 16.67,
        pricePHP: 1000,
        image: "https://via.placeholder.com/320x180/333/fff?text=Offline+Donation",
        description: "Offline donation system for persistent rewards.",
        features: ["Offline tracking", "Reward claiming", "Progress saving", "Notification system"],
        category: "Monetization",
        tags: ["premium"],
        rating: "n/a",
        reviews: "n/a",
        sold: "n/a"
    },
    {
        name: "REPORT UI SYSTEM",
        priceUSD: 7,
        pricePHP: 420,
        image: "https://via.placeholder.com/320x180/333/fff?text=Report+UI",
        description: "Professional reporting interface for game moderation.",
        features: ["Report categories", "Evidence upload", "Status tracking", "Admin dashboard"],
        category: "Moderation",
        tags: ["essentials"],
        rating: "n/a",
        reviews: "n/a",
        sold: "n/a"
    },
    {
        name: "Space Man UI System",
        priceUSD: 10,
        pricePHP: 590,
        image: "https://via.placeholder.com/320x180/333/fff?text=Space+Man+UI",
        description: "Futuristic UI system with space theme.",
        features: ["Animated elements", "Particle effects", "Responsive design", "Customizable colors"],
        category: "UI/UX",
        tags: ["futuristic", "featured"],
        rating: "n/a",
        reviews: "n/a",
        sold: "n/a"
    },
    {
        name: "Rules UI System",
        priceUSD: 4.49,
        pricePHP: 250,
        image: "https://via.placeholder.com/320x180/333/fff?text=Rules+UI",
        description: "Clean rules display system for game lobbies.",
        features: ["Scrollable content", "Search functionality", "Bookmark system", "Admin editing"],
        category: "UI/UX",
        tags: ["beginner-friendly"],
        rating: "n/a",
        reviews: "n/a",
        sold: "n/a"
    },
    {
        name: "ServerList UI System",
        priceUSD: 10,
        pricePHP: 500,
        image: "https://via.placeholder.com/320x180/333/fff?text=ServerList+UI",
        description: "Server browser with advanced filtering options.",
        features: ["Server filtering", "Player count display", "Ping indicators", "Favorite servers"],
        category: "UI/UX",
        tags: ["advanced"],
        rating: "n/a",
        reviews: "n/a",
        sold: "n/a"
    },
    {
        name: "FLIP OR HEAD SYSTEM",
        priceUSD: 15,
        pricePHP: 1000,
        image: "https://via.placeholder.com/320x180/333/fff?text=Flip+or+Head",
        description: "Coin flip game system with betting mechanics.",
        features: ["Betting system", "Animation effects", "Win/loss tracking", "Fair randomization"],
        category: "Entertainment",
        tags: ["gaming"],
        rating: "n/a",
        reviews: "n/a",
        sold: "n/a"
    },
    {
        name: "Gamepass Gifting UI System",
        priceUSD: 30,
        pricePHP: 2000,
        image: "https://via.placeholder.com/320x180/333/fff?text=Gamepass+Gifting",
        description: "Gamepass gifting interface for premium features.",
        features: ["Gift selection", "Recipient search", "Confirmation system", "Gift history"],
        category: "Monetization",
        tags: ["premium", "featured"],
        rating: "n/a",
        reviews: "n/a",
        sold: "n/a"
    },
    // Additional products for more variety
    // Removed: Advanced Leaderboard System, Pet System Pro
];

let currentProduct = null;
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Enhanced Navigation with Smooth Fade Transitions
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const section = this.getAttribute('data-section');
        showSection(section);
    });
});

// Function to update product stats after purchase
function updateProductStats(productIndex) {
    if (products[productIndex].sold === "n/a") {
        products[productIndex].sold = 1;
    } else {
        products[productIndex].sold += 1;
    }
    // Save to localStorage to persist across sessions
    localStorage.setItem('products', JSON.stringify(products));
    // Refresh the display
    loadProducts();
    loadAllProducts();
}

// Function to show review modal after purchase
function showReviewModal(productIndex) {
    const product = products[productIndex];
    const reviewModal = document.createElement('div');
    reviewModal.className = 'modal';
    reviewModal.id = 'review-modal';
    reviewModal.innerHTML = `
        <div class="modal-content review-modal-content">
            <span class="close" onclick="closeReviewModal()">&times;</span>
            <h2><i class="fas fa-star"></i> Rate & Review</h2>
            <div class="review-product-info">
                <img src="${product.image}" alt="${product.name}" class="review-product-image">
                <h3>${product.name}</h3>
            </div>
            <div class="rating-section">
                <h4>Your Rating:</h4>
                <div class="star-rating">
                    <i class="far fa-star" data-rating="1"></i>
                    <i class="far fa-star" data-rating="2"></i>
                    <i class="far fa-star" data-rating="3"></i>
                    <i class="far fa-star" data-rating="4"></i>
                    <i class="far fa-star" data-rating="5"></i>
                </div>
            </div>
            <div class="review-section">
                <h4>Your Review:</h4>
                <textarea id="review-text" placeholder="Share your experience with this product..." rows="4"></textarea>
            </div>
            <div class="review-actions">
                <button class="skip-btn" onclick="closeReviewModal()">Skip</button>
                <button class="submit-review-btn" onclick="submitReview(${productIndex})">Submit Review</button>
            </div>
        </div>
    `;

    document.body.appendChild(reviewModal);
    document.getElementById('review-modal').style.display = 'block';

    // Add star rating functionality
    const stars = document.querySelectorAll('.star-rating i');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', function() {
            selectedRating = parseInt(this.getAttribute('data-rating'));
            stars.forEach((s, index) => {
                if (index < selectedRating) {
                    s.className = 'fas fa-star';
                } else {
                    s.className = 'far fa-star';
                }
            });
        });
    });

    // Store selected rating for submission
    reviewModal.selectedRating = selectedRating;
}

// Function to close review modal
function closeReviewModal() {
    const modal = document.getElementById('review-modal');
    if (modal) {
        modal.remove();
    }
}

// Function to submit review
function submitReview(productIndex) {
    const rating = document.querySelector('.star-rating .fas').length || 0;
    const reviewText = document.getElementById('review-text').value.trim();

    if (rating === 0) {
        showNotification('Please select a rating', 'error');
        return;
    }

    // Update product rating and reviews
    const product = products[productIndex];
    if (product.rating === "n/a") {
        product.rating = rating;
        product.reviews = 1;
    } else {
        // Calculate new average rating
        const currentTotal = product.rating * product.reviews;
        product.reviews += 1;
        product.rating = (currentTotal + rating) / product.reviews;
        product.rating = parseFloat(product.rating.toFixed(1));
    }

    // Save to localStorage
    localStorage.setItem('products', JSON.stringify(products));

    // Refresh display
    loadProducts();
    loadAllProducts();

    showNotification('Thank you for your review!', 'success');
    closeReviewModal();
}

function showSection(sectionId) {
    // Prevent multiple clicks during transition
    if (document.body.classList.contains('transitioning')) {
        return;
    }

    document.body.classList.add('transitioning');

    // Get current active section
    const currentSection = document.querySelector('.section.active');
    const targetSection = document.getElementById(sectionId);

    if (currentSection === targetSection) {
        document.body.classList.remove('transitioning');
        return;
    }

    // Remove active classes from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to target nav link
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');

    // Fade out current section
    if (currentSection) {
        currentSection.style.opacity = '0';
        currentSection.style.transform = 'translateY(-20px)';
        currentSection.addEventListener('transitionend', function fadeOutHandler() {
            currentSection.removeEventListener('transitionend', fadeOutHandler);
            currentSection.classList.remove('active');
            currentSection.style.opacity = '';
            currentSection.style.transform = '';

            // Fade in target section
            fadeInSection(targetSection);
        }, { once: true });
    } else {
        // No current section, just fade in target
        fadeInSection(targetSection);
    }
}

function fadeInSection(section) {
    section.classList.add('active');
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';

    // Force reflow
    section.offsetHeight;

    // Fade in with smooth transition
    section.style.opacity = '1';
    section.style.transform = 'translateY(0)';

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Remove transition lock after animation completes
    setTimeout(() => {
        document.body.classList.remove('transitioning');
    }, 600);
}

// Update cart and wishlist counts
function updateCounts() {
    document.getElementById('wishlist-count').textContent = wishlist.length;
    document.getElementById('cart-count').textContent = cart.length;
}

// Load products
function loadProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    products.forEach((product, index) => {
        const isInWishlist = wishlist.includes(index);
        const isInCart = cart.includes(index);

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <button class="wishlist-btn-card ${isInWishlist ? 'active' : ''}" onclick="toggleWishlist(${index})">
                <i class="fas fa-heart"></i>
            </button>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                ${generateStars(product.rating)}
                <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
            </div>
            <p class="product-price">USD: $${product.priceUSD} | PHP: ₱${product.pricePHP}</p>
            <p class="product-sold">${product.sold} sold</p>
            <div class="card-actions">
                <button class="add-to-cart-btn ${isInCart ? 'added' : ''}" onclick="toggleCart(${index})">
                    <i class="fas fa-${isInCart ? 'check' : 'shopping-cart'}"></i>
                    ${isInCart ? 'In Cart' : 'Add to Cart'}
                </button>
                <button class="buy-btn" onclick="openModal(${index})">View Details</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }

    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }

    return stars;
}

function toggleWishlist(index) {
    const indexInWishlist = wishlist.indexOf(index);
    if (indexInWishlist > -1) {
        wishlist.splice(indexInWishlist, 1);
    } else {
        wishlist.push(index);
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateCounts();
    loadProducts(); // Refresh to update button states
}

function toggleCart(index) {
    const indexInCart = cart.indexOf(index);
    if (indexInCart > -1) {
        cart.splice(indexInCart, 1);
    } else {
        cart.push(index);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCounts();
    loadProducts(); // Refresh to update button states
}

// Modal functions
function openModal(index) {
    currentProduct = products[index];
    document.getElementById('modal-image').src = currentProduct.image;
    document.getElementById('modal-name').textContent = currentProduct.name;
    document.getElementById('modal-description').textContent = currentProduct.description;
    document.getElementById('modal-price-usd').textContent = currentProduct.priceUSD;
    document.getElementById('modal-price-php').textContent = currentProduct.pricePHP;

    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = '';
    currentProduct.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    document.getElementById('product-modal').style.display = 'block';

    // Add event listener for close button
    document.querySelector('#product-modal .close').addEventListener('click', closeModal);

    // Reset payment options
    document.querySelectorAll('input[name="payment"]').forEach(radio => {
        radio.checked = false;
    });
    document.getElementById('paypal-button-container').style.display = 'none';
    document.getElementById('gcash-details').style.display = 'none';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
    currentProduct = null;
}

// Payment options
document.querySelectorAll('input[name="payment"]').forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.value === 'paypal') {
            document.getElementById('paypal-button-container').style.display = 'block';
            document.getElementById('gcash-details').style.display = 'none';
            renderPayPalButton();
        } else if (this.value === 'gcash') {
            document.getElementById('paypal-button-container').style.display = 'none';
            document.getElementById('gcash-details').style.display = 'block';
        }
    });
});

// Webhook function
async function sendPurchaseWebhook(productName, paymentMethod, amount) {
    const webhookUrl = 'https://discord.com/api/webhooks/1461208681591869520/ZpXZxD1AmMlLpM6uhE7r8kQONZkV4m3gHtL20hX-u1OED5YAdVzpiav5J0Z_BZBRW3cA';

    const embed = {
        title: 'New Purchase!',
        color: 0x00ff00,
        fields: [
            {
                name: 'Product',
                value: productName,
                inline: true
            },
            {
                name: 'Payment Method',
                value: paymentMethod,
                inline: true
            },
            {
                name: 'Amount',
                value: amount,
                inline: true
            },
            {
                name: 'Timestamp',
                value: new Date().toISOString(),
                inline: false
            }
        ],
        footer: {
            text: 'Xio Assets Shop'
        }
    };

    try {
        await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                embeds: [embed]
            })
        });
    } catch (error) {
        console.error('Webhook error:', error);
    }
}

// PayPal integration
function renderPayPalButton() {
    const container = document.getElementById('paypal-button-container');
    container.innerHTML = '';

    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: currentProduct.priceUSD.toString()
                    },
                    description: currentProduct.name
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('Payment completed! Create a ticket in our Discord server to claim your file.');
                sendPurchaseWebhook(currentProduct.name, 'PayPal', `$${currentProduct.priceUSD}`);
                closeModal();
            });
        },
        onError: function(err) {
            console.error('PayPal error:', err);
            alert('Payment failed. Please try again.');
        }
    }).render('#paypal-button-container');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('product-modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Search and filter functionality
let searchTerm = '';
let sortBy = 'name';
let filterCategory = 'all';

function searchProducts() {
    searchTerm = document.getElementById('search-input').value.toLowerCase();
    loadProducts();
}

function sortProducts(criteria) {
    sortBy = criteria;
    loadProducts();
}

function filterProducts(category) {
    filterCategory = category;
    loadProducts();
}

// Enhanced load products with search, sort, filter
function loadProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    let filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                            product.description.toLowerCase().includes(searchTerm);
        return matchesSearch;
    });

    // Sort products
    filteredProducts.sort((a, b) => {
        switch(sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'price-low':
                return a.priceUSD - b.priceUSD;
            case 'price-high':
                return b.priceUSD - a.priceUSD;
            default:
                return 0;
        }
    });

    filteredProducts.forEach((product, index) => {
        const isInWishlist = wishlist.includes(index);
        const isInCart = cart.includes(index);

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <button class="wishlist-btn-card ${isInWishlist ? 'active' : ''}" onclick="toggleWishlist(${index})">
                <i class="fas fa-heart"></i>
            </button>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">USD: $${product.priceUSD} | PHP: ₱${product.pricePHP}</p>
            <div class="card-actions">
                <button class="add-to-cart-btn ${isInCart ? 'added' : ''}" onclick="addToCartAndOpen(${index})">
                    <i class="fas fa-${isInCart ? 'check' : 'shopping-cart'}"></i>
                    ${isInCart ? 'In Cart' : 'Add to Cart'}
                </button>
                <button class="buy-btn" onclick="openModal(${index})">View Details</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Load all products for the "All" tab
function loadAllProducts() {
    const grid = document.getElementById('all-products-grid');
    grid.innerHTML = '';

    let filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                            product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
        return matchesSearch && matchesCategory;
    });

    // Sort products
    filteredProducts.sort((a, b) => {
        switch(sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'price-low':
                return a.priceUSD - b.priceUSD;
            case 'price-high':
                return b.priceUSD - a.priceUSD;
            default:
                return 0;
        }
    });

    filteredProducts.forEach((product) => {
        const originalIndex = products.indexOf(product);
        const isInWishlist = wishlist.includes(originalIndex);
        const isInCart = cart.includes(originalIndex);

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <button class="wishlist-btn-card ${isInWishlist ? 'active' : ''}" onclick="toggleWishlist(${originalIndex})">
                <i class="fas fa-heart"></i>
            </button>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                ${generateStars(product.rating)}
                <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
            </div>
            <p class="product-price">USD: $${product.priceUSD} | PHP: ₱${product.pricePHP}</p>
            <p class="product-sold">${product.sold} sold</p>
            <div class="card-actions">
                <button class="add-to-cart-btn ${isInCart ? 'added' : ''}" onclick="addToCartAndOpen(${originalIndex})">
                    <i class="fas fa-${isInCart ? 'check' : 'shopping-cart'}"></i>
                    ${isInCart ? 'In Cart' : 'Add to Cart'}
                </button>
                <button class="buy-btn" onclick="openModal(${originalIndex})">View Details</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Function to add to cart and open cart modal
function addToCartAndOpen(index) {
    const indexInCart = cart.indexOf(index);
    if (indexInCart > -1) {
        // Already in cart, just open cart
        showCart();
    } else {
        // Add to cart and open cart
        cart.push(index);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCounts();
        loadProducts();
        loadAllProducts();
        showCart();
    }
}

// Category filter for "All" tab
function filterByCategory(category) {
    filterCategory = category;
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    loadAllProducts();
}

// Cart functionality
function showCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        return;
    }

    let total = 0;
    cart.forEach(index => {
        const product = products[index];
        total += product.priceUSD;

        const item = document.createElement('div');
        item.className = 'cart-item';
        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${product.name}</h4>
                <p>$${product.priceUSD}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(item);
    });

    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
    document.getElementById('cart-modal').style.display = 'block';
}

function removeFromCart(index) {
    const cartIndex = cart.indexOf(index);
    if (cartIndex > -1) {
        cart.splice(cartIndex, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCounts();
        showCart();
    }
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Calculate total
    const total = cart.reduce((sum, index) => sum + products[index].priceUSD, 0);

    // Create checkout modal
    const checkoutModal = document.createElement('div');
    checkoutModal.className = 'modal';
    checkoutModal.id = 'checkout-modal';
    checkoutModal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeCheckoutModal()">&times;</span>
            <h2>Checkout</h2>
            <div class="checkout-items">
                ${cart.map(index => `
                    <div class="checkout-item">
                        <span>${products[index].name}</span>
                        <span>$${products[index].priceUSD}</span>
                    </div>
                `).join('')}
            </div>
            <div class="checkout-total">
                <strong>Total: $${total.toFixed(2)}</strong>
            </div>
            <div class="payment-options">
                <div class="payment-option">
                    <input type="radio" id="checkout-paypal" name="checkout-payment" value="paypal">
                    <label for="checkout-paypal">PayPal</label>
                </div>
                <div class="payment-option">
                    <input type="radio" id="checkout-gcash" name="checkout-payment" value="gcash">
                    <label for="checkout-gcash">GCash</label>
                </div>
            </div>
            <div id="checkout-paypal-container"></div>
            <div id="checkout-gcash-details" style="display: none;">
                <h4>Send to GCash</h4>
                <p class="gcash-number">09649025996</p>
                <p>Total Amount: ₱${(total * 58).toFixed(0)}</p>
                <button id="confirm-checkout-gcash" class="back-btn">Confirm Purchase</button>
            </div>
        </div>
    `;

    document.body.appendChild(checkoutModal);
    document.getElementById('checkout-modal').style.display = 'block';

    // Add event listeners for checkout payment options
    document.querySelectorAll('input[name="checkout-payment"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'paypal') {
                document.getElementById('checkout-paypal-container').style.display = 'block';
                document.getElementById('checkout-gcash-details').style.display = 'none';
                renderCheckoutPayPalButton(total);
            } else if (this.value === 'gcash') {
                document.getElementById('checkout-paypal-container').style.display = 'none';
                document.getElementById('checkout-gcash-details').style.display = 'block';
            }
        });
    });

    // Add event listener for GCash confirm
    document.getElementById('confirm-checkout-gcash').addEventListener('click', function() {
        alert('Purchase confirmed! Thank you for your order.');
        sendPurchaseWebhook(`Cart (${cart.length} items)`, 'GCash', `₱${(total * 58).toFixed(0)}`);
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCounts();
        closeCheckoutModal();
        document.getElementById('cart-modal').style.display = 'none';
    });
}

function renderCheckoutPayPalButton(total) {
    const container = document.getElementById('checkout-paypal-container');
    container.innerHTML = '';

    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: total.toFixed(2)
                    },
                    description: `Cart checkout - ${cart.length} items`
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                showNotification('Payment completed! Thank you for your purchase.', 'success');
                // Update stats for all items in cart
                cart.forEach(index => updateProductStats(index));
                sendPurchaseWebhook(`Cart (${cart.length} items)`, 'PayPal', `$${total.toFixed(2)}`);
                cart = [];
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCounts();
                closeCheckoutModal();
                document.getElementById('cart-modal').style.display = 'none';
                // Show review modal for first item (or could show for all)
                if (cart.length > 0) {
                    showReviewModal(cart[0]);
                }
            });
        },
        onError: function(err) {
            console.error('PayPal error:', err);
            showNotification('Payment failed. Please try again.', 'error');
        }
    }).render('#checkout-paypal-container');
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    if (modal) {
        modal.remove();
    }
}

// Wishlist functionality
function showWishlist() {
    const wishlistItems = document.getElementById('wishlist-items');
    wishlistItems.innerHTML = '';

    if (wishlist.length === 0) {
        wishlistItems.innerHTML = '<p>Your wishlist is empty</p>';
        return;
    }

    wishlist.forEach(index => {
        const product = products[index];
        const item = document.createElement('div');
        item.className = 'wishlist-item';
        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="wishlist-item-image">
            <div class="wishlist-item-details">
                <h4>${product.name}</h4>
                <p>$${product.priceUSD}</p>
            </div>
            <div class="wishlist-actions">
                <button class="add-to-cart-btn" onclick="toggleCart(${index}); showWishlist();">Add to Cart</button>
                <button class="remove-btn" onclick="toggleWishlist(${index}); showWishlist();">Remove</button>
            </div>
        `;
        wishlistItems.appendChild(item);
    });

    document.getElementById('wishlist-modal').style.display = 'block';
}

// Enhanced modal close functions
function closeCartModal() {
    document.getElementById('cart-modal').style.display = 'none';
}

function closeWishlistModal() {
    document.getElementById('wishlist-modal').style.display = 'none';
}



// Enhanced initialization with loading animation
document.addEventListener('DOMContentLoaded', function() {
    // Show loading screen
    showLoadingScreen();

    // Initialize components
    setTimeout(() => {
        document.getElementById('cart-btn').addEventListener('click', showCart);
        document.getElementById('wishlist-btn').addEventListener('click', showWishlist);



        // Add search functionality with debounce
        const searchInput = document.getElementById('search-input');
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                searchProducts();
                loadAllProducts();
            }, 300);
        });

        // Add keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                searchInput.focus();
            }
        });

        loadProducts();
        loadAllProducts();
        updateCounts();
        showSection('home');



        // Hide loading screen
        hideLoadingScreen();
    }, 1000);
});

// Loading screen functions
function showLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-content">
            <div class="loading-spinner"></div>
            <h3>Loading Xio Assets Shop...</h3>
        </div>
    `;
    loadingScreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--primary-bg);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        opacity: 1;
        transition: opacity 0.5s ease;
    `;
    document.body.appendChild(loadingScreen);
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }
}

// Enhanced notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#5865F2'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        display: flex;
        align-items: center;
        gap: 10px;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Enhanced cart and wishlist functions with notifications
function toggleWishlist(index) {
    const indexInWishlist = wishlist.indexOf(index);
    if (indexInWishlist > -1) {
        wishlist.splice(indexInWishlist, 1);
        showNotification('Removed from wishlist', 'info');
    } else {
        wishlist.push(index);
        showNotification('Added to wishlist', 'success');
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateCounts();
    loadProducts();
    loadAllProducts();
}

function toggleCart(index) {
    const indexInCart = cart.indexOf(index);
    if (indexInCart > -1) {
        cart.splice(indexInCart, 1);
        showNotification('Removed from cart', 'info');
    } else {
        cart.push(index);
        showNotification('Added to cart', 'success');
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCounts();
    loadProducts();
    loadAllProducts();
}

// Enhanced modal animations
function openModal(index) {
    currentProduct = products[index];
    document.getElementById('modal-image').src = currentProduct.image;
    document.getElementById('modal-name').textContent = currentProduct.name;
    document.getElementById('modal-description').textContent = currentProduct.description;
    document.getElementById('modal-price-usd').textContent = currentProduct.priceUSD;
    document.getElementById('modal-price-php').textContent = currentProduct.pricePHP;

    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = '';
    currentProduct.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        li.style.animation = `slideInLeft 0.5s ease ${currentProduct.features.indexOf(feature) * 0.1}s both`;
        featuresList.appendChild(li);
    });

    const modal = document.getElementById('product-modal');
    modal.style.display = 'block';
    modal.style.opacity = '0';
    modal.style.transform = 'scale(0.9)';

    setTimeout(() => {
        modal.style.opacity = '1';
        modal.style.transform = 'scale(1)';
    }, 10);

    // Add event listener for close button
    document.querySelector('#product-modal .close').addEventListener('click', closeModal);

    // Reset payment options
    document.querySelectorAll('input[name="payment"]').forEach(radio => {
        radio.checked = false;
    });
    document.getElementById('paypal-button-container').style.display = 'none';
    document.getElementById('gcash-details').style.display = 'none';
}

function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.style.opacity = '0';
    modal.style.transform = 'scale(0.9)';
    setTimeout(() => {
        modal.style.display = 'none';
        currentProduct = null;
    }, 300);
}

// Enhanced PayPal integration with better error handling
function renderPayPalButton() {
    const container = document.getElementById('paypal-button-container');
    container.innerHTML = '<div class="loading-spinner" style="margin: 20px auto;"></div>';

    try {
        paypal.Buttons({
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: currentProduct.priceUSD.toString()
                        },
                        description: currentProduct.name
                    }]
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    showNotification('Payment completed successfully!', 'success');
                    updateProductStats(products.indexOf(currentProduct));
                    sendPurchaseWebhook(currentProduct.name, 'PayPal', `$${currentProduct.priceUSD}`);
                    showReviewModal(products.indexOf(currentProduct));
                    closeModal();
                });
            },
            onError: function(err) {
                console.error('PayPal error:', err);
                showNotification('Payment failed. Please try again.', 'error');
            }
        }).render('#paypal-button-container');
    } catch (error) {
        console.error('PayPal render error:', error);
        container.innerHTML = '<p style="color: red;">PayPal is currently unavailable. Please try again later.</p>';
    }
}

// Enhanced search with visual feedback
function searchProducts() {
    searchTerm = document.getElementById('search-input').value.toLowerCase();
    loadProducts();
    loadAllProducts();

    // Show search results count
    const resultsCount = document.querySelectorAll('.product-card').length;
    if (searchTerm) {
        showNotification(`Found ${resultsCount} products matching "${searchTerm}"`, 'info');
    }
}

// Smooth scroll to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Add scroll animations
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.transform = `translateY(${rate}px)`;
    }
});

// Enhanced checkout with validation
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }

    // Calculate total
    const total = cart.reduce((sum, index) => sum + products[index].priceUSD, 0);

    // Create checkout modal with enhanced UI
    const checkoutModal = document.createElement('div');
    checkoutModal.className = 'modal';
    checkoutModal.id = 'checkout-modal';
    checkoutModal.innerHTML = `
        <div class="modal-content checkout-modal-content">
            <span class="close" onclick="closeCheckoutModal()">&times;</span>
            <h2><i class="fas fa-shopping-cart"></i> Checkout</h2>
            <div class="checkout-items">
                ${cart.map(index => `
                    <div class="checkout-item" style="animation: slideInLeft 0.5s ease ${cart.indexOf(index) * 0.1}s both">
                        <span>${products[index].name}</span>
                        <span>$${products[index].priceUSD}</span>
                    </div>
                `).join('')}
            </div>
            <div class="checkout-total">
                <strong>Total: $${total.toFixed(2)}</strong>
            </div>
            <div class="payment-options">
                <div class="payment-option">
                    <input type="radio" id="checkout-paypal" name="checkout-payment" value="paypal">
                    <label for="checkout-paypal"><i class="fab fa-paypal"></i> PayPal</label>
                </div>
                <div class="payment-option">
                    <input type="radio" id="checkout-gcash" name="checkout-payment" value="gcash">
                    <label for="checkout-gcash"><i class="fas fa-mobile-alt"></i> GCash</label>
                </div>
            </div>
            <div id="checkout-paypal-container"></div>
            <div id="checkout-gcash-details" style="display: none;">
                <h4><i class="fas fa-mobile-alt"></i> Send to GCash</h4>
                <p class="gcash-number">09649025996</p>
                <p>Total Amount: ₱${(total * 58).toFixed(0)}</p>
                <button id="confirm-checkout-gcash" class="back-btn"><i class="fas fa-check"></i> Confirm Purchase</button>
            </div>
        </div>
    `;

    document.body.appendChild(checkoutModal);
    document.getElementById('checkout-modal').style.display = 'block';

    // Add event listeners for checkout payment options
    document.querySelectorAll('input[name="checkout-payment"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'paypal') {
                document.getElementById('checkout-paypal-container').style.display = 'block';
                document.getElementById('checkout-gcash-details').style.display = 'none';
                renderCheckoutPayPalButton(total);
            } else if (this.value === 'gcash') {
                document.getElementById('checkout-paypal-container').style.display = 'none';
                document.getElementById('checkout-gcash-details').style.display = 'block';
            }
        });
    });

    // Add event listener for GCash confirm
    document.getElementById('confirm-checkout-gcash').addEventListener('click', function() {
        showNotification('Purchase confirmed! Thank you for your order.', 'success');
        sendPurchaseWebhook(`Cart (${cart.length} items)`, 'GCash', `₱${(total * 58).toFixed(0)}`);
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCounts();
        closeCheckoutModal();
        document.getElementById('cart-modal').style.display = 'none';
    });
}
