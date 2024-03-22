let cart = {
    items: [],
    total: 0
};

// Load cart from local storage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCartUI();
        updateCartCount();
    }
});

function addToCart(item, price) {
    cart.items.push({ name: item.name, price: price });
    cart.total += price;

    // Save the updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartUI();
    updateCartCount();
}

function updateCartUI() {
    const cartListElement = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');

    if (cartListElement && totalPriceElement) {
        cartListElement.innerHTML = ''; // Clear the list

        cart.items.forEach((item, index) => {
            const itemElement = document.createElement('li');
            itemElement.classList.add('list-group-item');
            itemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartListElement.appendChild(itemElement);
        });

        totalPriceElement.textContent = cart.total.toFixed(2);
    }
}

function updateCartCount() {
    const cartCountElement = document.querySelector('.badge');
    if (cartCountElement) {
        cartCountElement.textContent = cart.items.length;
    }
}

// Expose the addToCart function to the global scope
window.addToCart = addToCart;

// Your existing cart and addToCart functions



// Rest of your existing JavaScript code