// app.js
// State management
let currentUser = null;
let cart = [];

// DOM elements
const pages = document.querySelectorAll('.page');
const cartCount = document.querySelector('.cart-count');
const notification = document.getElementById('notification');

// Initialize the app
function initApp() {
    renderFeaturedProducts();
    renderAllProducts();
    loadCart();
    checkLoginStatus();
}

// Show a specific page
function showPage(pageId) {
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(`${pageId}-page`).classList.add('active');
    
    // If showing cart page, render cart items
    if (pageId === 'cart') {
        renderCartItems();
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.product.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            product: product,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
        renderCartItems();
    }
}

// Update cart count badge
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Change item quantity in cart
function changeQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    const cartItem = cart.find(item => item.product.id === productId);
    if (cartItem) {
        cartItem.quantity = newQuantity;
        saveCart();
        updateCartCount();
        renderCartItems();
    }
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    saveCart();
    updateCartCount();
    renderCartItems();
    showNotification('Item removed from cart');
}

// Checkout process
function checkout() {
    if (!currentUser) {
        showNotification('Please login to checkout');
        showPage('profile');
        return;
    }
    
    showNotification('Order placed successfully!');
    cart = [];
    saveCart();
    updateCartCount();
    renderCartItems();
    showPage('home');
}

// Show notification
function showNotification(message) {
    notification.textContent = message;
    notification.classList.add('active');
    
    setTimeout(() => {
        notification.classList.remove('active');
    }, 3000);
}

// Filter products based on search input
function filterProducts(searchTerm) {
    const productsContainer = document.getElementById('all-products');
    const productCards = productsContainer.querySelectorAll('.product-card');
    
    const term = searchTerm.toLowerCase();
    
    productCards.forEach(card => {
        const title = card.querySelector('.product-title').textContent.toLowerCase();
        const description = card.querySelector('.product-description').textContent.toLowerCase();
        
        if (title.includes(term) || description.includes(term)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// User login
function loginUser(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (!email || !password) {
        showNotification('Please enter both email and password');
        return;
    }
    
    // Simulate login process
    currentUser = {
        name: email.split('@')[0],
        email: email
    };
    
    // Save to localStorage
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Update UI
    document.getElementById('user-name').textContent = currentUser.name;
    document.getElementById('user-email').textContent = currentUser.email;
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('user-details').style.display = 'block';
    
    showNotification('Login successful!');
}

// Check login status
function checkLoginStatus() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        document.getElementById('user-name').textContent = currentUser.name;
        document.getElementById('user-email').textContent = currentUser.email;
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('user-details').style.display = 'block';
    }
}

// User logout
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('user-details').style.display = 'none';
    
    showNotification('Logged out successfully');
}

// Show register form (simplified)
function showRegisterForm() {
    showNotification('Registration would be implemented here');
}

// Initialize the app when the page loads
window.addEventListener('DOMContentLoaded', initApp);