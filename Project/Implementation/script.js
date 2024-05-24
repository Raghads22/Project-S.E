
// Function to add items to cart
function addToCart(itemName, itemImage) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: itemName, image: itemImage });
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'cart.html';
}

// Function to load cart items
function loadCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');

        let itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = item.name;
        itemElement.appendChild(itemImage);

        let itemName = document.createElement('span');
        itemName.textContent = item.name;
        itemElement.appendChild(itemName);

        cartItemsContainer.appendChild(itemElement);
    });
}

// Function to clear cart
document.getElementById('clear-cart-button').onclick = function() {
    localStorage.removeItem('cart');
    loadCartItems();
}

// Function to show order options
document.getElementById('confirm-order-button').onclick = function() {
    document.getElementById('confirm-order-button').style.display = 'none';
    document.getElementById('order-options').style.display = 'block';
};

function showDeliveryOption() {
    document.getElementById('order-options').style.display = 'none';
    document.getElementById('delivery-option').style.display = 'block';
}

function showPickupOption() {
    document.getElementById('order-options').style.display = 'none';
    document.getElementById('pickup-option').style.display = 'block';
}

function confirmDelivery() {
    let phone = document.getElementById('phone').value;
    if (phone) {
        document.getElementById('delivery-option').style.display = 'none';
        document.getElementById('confirmation-text').textContent = 'Your order has been confirmed. We will contact you via phone.';
        document.getElementById('confirmation-message').style.display = 'block';
    } else {
        alert('Please enter a valid phone number.');
    }
}

function confirmPickup(isConvenient) {
    document.getElementById('pickup-option').style.display = 'none';
    if (isConvenient) {
        document.getElementById('confirmation-text').textContent = 'Your order has been confirmed. Please receive them on time.';
        document.getElementById('confirmation-message').style.display = 'block';
    } else {
        document.getElementById('pickup-date-selector').style.display = 'block';
    }
}

function confirmCustomPickup() {
    let pickupDate = document.getElementById('pickup-date').value;
    if (pickupDate) {
        document.getElementById('pickup-date-selector').style.display = 'none';
        document.getElementById('confirmation-text').textContent = 'Your order has been confirmed. Please receive according to the specified date.';
        document.getElementById('confirmation-message').style.display = 'block';
    } else {
        alert('Please select a valid date and time.');
    }
}

// Load cart items when the page loads
if (window.location.pathname.endsWith('cart.html')) {
    loadCartItems();
}

// Modal functionality for login and registration (from previous code)
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}
