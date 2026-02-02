#!/usr/bin/env python3
"""
Simple HTTP Server for Xio Assets Shop
Serves static files and provides basic routing
"""

import http.server
import socketserver
import os
import json
from urllib.parse import urlparse, parse_qs
import cgi
import sys

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        """Handle GET requests"""
        parsed_path = urlparse(self.path)

        # Route handling
        if parsed_path.path == '/':
            self.serve_file('index.html', 'text/html')
        elif parsed_path.path == '/dashboard':
            self.serve_file('dashboard.html', 'text/html')
        elif parsed_path.path.startswith('/api/'):
            self.handle_api_get(parsed_path)
        else:
            # Serve static files
            super().do_GET()

    def do_POST(self):
        """Handle POST requests"""
        parsed_path = urlparse(self.path)

        if parsed_path.path.startswith('/api/'):
            self.handle_api_post(parsed_path)
        else:
            self.send_error(404, "Not Found")

    def serve_file(self, filename, content_type):
        """Serve a static file"""
        try:
            with open(os.path.join(DIRECTORY, filename), 'rb') as f:
                self.send_response(200)
                self.send_header('Content-type', content_type)
                self.end_headers()
                self.wfile.write(f.read())
        except FileNotFoundError:
            self.send_error(404, "File not found")

    def handle_api_get(self, parsed_path):
        """Handle API GET requests"""
        if parsed_path.path == '/api/user':
            # Mock user data (in real app, this would authenticate)
            user_data = {
                "id": "123456789",
                "username": "testuser",
                "discriminator": "1234",
                "avatar": None,
                "email": "test@example.com"
            }
            self.send_json_response(user_data)
        else:
            self.send_error(404, "API endpoint not found")

    def handle_api_post(self, parsed_path):
        """Handle API POST requests"""
        if parsed_path.path == '/api/paypal/create-payment':
            self.handle_paypal_create_payment()
        elif parsed_path.path == '/api/gcash/payment':
            self.handle_gcash_payment()
        else:
            self.send_error(404, "API endpoint not found")

    def handle_paypal_create_payment(self):
        """Mock PayPal payment creation"""
        try:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))

            # Mock PayPal response
            response = {
                "approval_url": f"http://localhost:{PORT}/paypal-mock?payment_id=mock_{data.get('productId', 'unknown')}",
                "payment_id": f"mock_{data.get('productId', 'unknown')}"
            }

            self.send_json_response(response)
        except Exception as e:
            self.send_json_response({"error": str(e)}, 400)

    def handle_gcash_payment(self):
        """Mock GCash payment"""
        try:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))

            # Mock successful payment
            response = {
                "success": True,
                "message": "Payment processed successfully",
                "transaction_id": f"gcash_mock_{data.get('amount', '0')}"
            }

            self.send_json_response(response)
        except Exception as e:
            self.send_json_response({"error": str(e)}, 400)

    def send_json_response(self, data, status=200):
        """Send JSON response"""
        self.send_response(status)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))

    def do_OPTIONS(self):
        """Handle CORS preflight requests"""
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def log_message(self, format, *args):
        """Custom logging"""
        print(f"[HTTP] {format % args}")

def run_server():
    """Run the HTTP server"""
    with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
        print(f"🚀 Xio Assets Shop Python server running on http://localhost:{PORT}")
        print("📁 Serving files from:", DIRECTORY)
        print("🔧 API endpoints available:")
        print("   GET  /api/user")
        print("   POST /api/paypal/create-payment")
        print("   POST /api/gcash/payment")
        print("\nPress Ctrl+C to stop the server")

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Server stopped")
            httpd.shutdown()

if __name__ == '__main__':
    run_server()
