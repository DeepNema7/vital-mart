// <!-- components.js -->
// Generate rating stars
function getRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Create product card element
function createProductElement(product) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product-card';
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-rating">
                ${getRatingStars(product.rating)}
            </div>
            <button class="btn-add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
    
    // Add click event to show product details
    productDiv.addEventListener('click', (e) => {
        if (!e.target.classList.contains('btn-add-to-cart')) {
            showProductDetail(product.id);
        }
    });
    
    return productDiv;
}

// Render featured products on the home page
function renderFeaturedProducts() {
    const featuredContainer = document.querySelector('#home-page .products-grid');
    featuredContainer.innerHTML = '';
    
    // Show only 4 featured products
    const featuredProducts = products.slice(0, 4);
    
    featuredProducts.forEach(product => {
        const productElement = createProductElement(product);
        featuredContainer.appendChild(productElement);
    });
}

// Render all products on the products page
function renderAllProducts() {
    const productsContainer = document.getElementById('all-products');
    productsContainer.innerHTML = '';
    
    products.forEach(product => {
        const productElement = createProductElement(product);
        productsContainer.appendChild(productElement);
    });
}

// Show product detail page
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const detailPage = document.getElementById('product-detail-page');
    detailPage.innerHTML = `
        <div class="product-detail">
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-detail-info">
                <h2 class="product-detail-title">${product.name}</h2>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-rating">
                    ${getRatingStars(product.rating)}
                </div>
                <p class="product-detail-description">${product.description}</p>
                
                <h4>Features</h4>
                <ul>
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                
                <button class="btn-add-to-cart" style="margin-top: 20px;" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
        <button class="btn btn-primary" style="margin-top: 20px;" onclick="showPage('products')">Back to Products</button>
    `;
    
    showPage('product-detail');
}

// Render cart items
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-message" style="text-align: center; padding: 40px 0;">
                <h3>Your cart is empty</h3>
                <p>Add some products to your cart to see them here</p>
                <button class="btn btn-primary" onclick="showPage('products')">Continue Shopping</button>
            </div>
        `;
        return;
    }
    
    let cartHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.product.price * item.quantity;
        total += itemTotal;
        
        cartHTML += `
            <div class="cart-item">
                <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3 class="cart-item-title">${item.product.name}</h3>
                    <div class="cart-item-price">$${item.product.price.toFixed(2)} x ${item.quantity}</div>
                    <div style="margin-top: 10px;">
                        <button class="btn" onclick="changeQuantity(${item.product.id}, ${item.quantity - 1})">-</button>
                        <span style="margin: 0 10px;">${item.quantity}</span>
                        <button class="btn" onclick="changeQuantity(${item.product.id}, ${item.quantity + 1})">+</button>
                        <button class="btn" style="color: var(--accent); margin-left: 20px;" onclick="removeFromCart(${item.product.id})">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                    </div>
                </div>
                <div style="font-weight: 700;">$${itemTotal.toFixed(2)}</div>
            </div>
        `;
    });
    
    cartHTML += `
        <div class="cart-total">
            Total: $${total.toFixed(2)}
        </div>
        <button class="btn btn-primary" style="width: 100%; margin-top: 20px;" onclick="checkout()">Proceed to Checkout</button>
    `;
    
    cartItemsContainer.innerHTML = cartHTML;
}