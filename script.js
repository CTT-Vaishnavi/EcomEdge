const products = [
  {id: 1, name: 'Wireless Headphones', price: 59.99, desc: 'High quality stereo sound with noise isolation.', image: 'https://tse3.mm.bing.net/th/id/OIP.ogAqE2laNQwgCD-9g0vmCwHaHa?pid=Api&P=0&h=180'},
  {id: 2, name: 'Smartwatch', price: 129.99, desc: 'Track activity, sleep, and bluetooth notifications.', image: 'https://sp.yimg.com/ib/th?id=OPAC.rObbsIwjfsloEA474C474&o=5&pid=21.1&w=174&h=174'},
  {id: 3, name: 'Portable Speaker', price: 42.5, desc: 'Waterproof, compact, and powerful bass.', image: 'https://tse3.mm.bing.net/th/id/OIP.ve21CF3TGRe_A8CgpyTQ4wHaH4?pid=Api&P=0&h=180'},
  {id: 4, name: 'Fitness Tracker', price: 35.0, desc: 'Heart-rate and steps monitoring with long battery.', image: 'https://tse3.mm.bing.net/th/id/OIP.6by39jx3qSIIMpk9vbytcgEsEs?pid=Api&P=0&h=180'},
  {id: 5, name: 'Bluetooth Earbuds', price: 24.99, desc: 'Comfortable fit with clear call quality.', image: 'https://tse1.mm.bing.net/th/id/OIP.z7ERWUubZLzvso9qGQiBpgHaIC?pid=Api&P=0&h=180'}
];

let cart = {};

const productsEl = document.getElementById('products');
const cartItemsEl = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const clearCartBtn = document.getElementById('clear-cart-btn');
const checkoutSection = document.getElementById('checkout');
const checkoutForm = document.getElementById('checkout-form');
const cancelCheckoutBtn = document.getElementById('cancel-checkout');
const checkoutMessage = document.getElementById('checkout-message');
const currentYearEl = document.getElementById('current-year');

function renderProducts() {
  productsEl.innerHTML = products.map(product => {
    return `
      <article class="product-card" data-id="${product.id}">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-meta">
          <span>${product.name}</span>
          <strong>$${product.price.toFixed(2)}</strong>
        </div>
        <p>${product.desc}</p>
        <button class="primary-btn" data-add="${product.id}">Add to Cart</button>
      </article>
    `;
  }).join('');
}

function renderCart() {
  const items = Object.values(cart);

  if (items.length === 0) {
    cartItemsEl.textContent = 'Cart is empty';
    cartTotalEl.textContent = '0.00';
    checkoutBtn.disabled = true;
    clearCartBtn.disabled = true;
    return;
  }

  cartItemsEl.innerHTML = '';

  let total = 0;

  items.forEach(item => {
    const sub = item.price * item.quantity;
    total += sub;

    const row = document.createElement('div');
    row.className = 'cart-row';
    row.innerHTML = `
      <span>${item.name} x ${item.quantity} ($${sub.toFixed(2)})</span>
      <span>
        <button class="ghost-btn" data-action="decrement" data-id="${item.id}">-</button>
        <button class="ghost-btn" data-action="increment" data-id="${item.id}">+</button>
        <button class="ghost-btn" data-action="remove" data-id="${item.id}">Remove</button>
      </span>
    `;

    cartItemsEl.appendChild(row);
  });

  cartTotalEl.textContent = total.toFixed(2);
  checkoutBtn.disabled = false;
  clearCartBtn.disabled = false;
}

function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return;

  if (!cart[productId]) {
    cart[productId] = {...product, quantity: 0};
  }
  cart[productId].quantity += 1;
  renderCart();
}

function updateCartItem(id, action) {
  const item = cart[id];
  if (!item) return;

  if (action === 'increment') item.quantity += 1;
  if (action === 'decrement') item.quantity = Math.max(1, item.quantity - 1);
  if (action === 'remove') delete cart[id];

  if (item && item.quantity <= 0) delete cart[id];
  renderCart();
}

function clearCart() {
  cart = {};
  renderCart();
  checkoutSection.classList.add('hidden');
  checkoutMessage.textContent = '';
}

function openCheckout() {
  checkoutSection.classList.remove('hidden');
  checkoutMessage.textContent = '';
}

function closeCheckout() {
  checkoutSection.classList.add('hidden');
  checkoutForm.reset();
  checkoutMessage.textContent = '';
}

function submitOrder(event) {
  event.preventDefault();

  if (Object.keys(cart).length === 0) {
    checkoutMessage.textContent = 'Your cart is empty. Add items before checkout.';
    checkoutMessage.style.color = '#b91c1c';
    return;
  }

  const name = document.getElementById('customer-name').value.trim();
  const email = document.getElementById('customer-email').value.trim();
  const address = document.getElementById('customer-address').value.trim();

  if (!name || !email || !address) {
    checkoutMessage.textContent = 'Please fill all fields.';
    checkoutMessage.style.color = '#b91c1c';
    return;
  }

  const order = {
    customer: { name, email, address },
    items: Object.values(cart),
    total: parseFloat(cartTotalEl.textContent)
  };

  console.log('Order placed', order);

  checkoutMessage.textContent = `Order confirmed! Thank you ${name}. Total $${order.total.toFixed(2)}`;
  checkoutMessage.style.color = '#047857';

  clearCart();
  closeCheckout();
}

productsEl.addEventListener('click', event => {
  const addId = event.target.closest('[data-add]')?.getAttribute('data-add');
  if (addId) {
    addToCart(Number(addId));
  }
});

cartItemsEl.addEventListener('click', event => {
  const action = event.target.getAttribute('data-action');
  const id = event.target.getAttribute('data-id');
  if (!action || !id) return;

  updateCartItem(Number(id), action);
});

checkoutBtn.addEventListener('click', openCheckout);
clearCartBtn.addEventListener('click', clearCart);
cancelCheckoutBtn.addEventListener('click', closeCheckout);
checkoutForm.addEventListener('submit', submitOrder);

window.addEventListener('DOMContentLoaded', () => {
  currentYearEl.textContent = new Date().getFullYear();
  renderProducts();
  renderCart();
});
