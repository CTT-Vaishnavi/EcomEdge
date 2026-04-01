
        // ===== DATA =====
        const categories = [
            { id: 'electronics', name: 'Electronics', icon: '💻', count: 45 },
            { id: 'fashion', name: 'Fashion', icon: '👕', count: 80 },
            { id: 'home', name: 'Home & Living', icon: '🏠', count: 60 },
            { id: 'sports', name: 'Sports', icon: '⚽', count: 35 },
            { id: 'books', name: 'Books', icon: '📚', count: 55 },
            { id: 'beauty', name: 'Beauty', icon: '💄', count: 40 },
            { id: 'food', name: 'Food & Drink', icon: '🍕', count: 30 },
            { id: 'toys', name: 'Toys & Games', icon: '🎮', count: 25 },
            { id: 'travel', name: 'Travel', icon: '✈️', count: 20 },
            { id: 'pets', name: 'Pets', icon: '🐾', count: 18 },
        ];

        const allProducts = [
            // Electronics
            { id: 1, cat: 'electronics', name: 'Pro Laptop 15"', icon: '💻', price: 1299, oldPrice: 1599, stars: 4.8, reviews: 312, badge: 'sale', desc: 'High-performance laptop with 16GB RAM, RTX 4060, and 1TB SSD. Perfect for professionals and gamers.', new: false },
            { id: 2, cat: 'electronics', name: 'Wireless Earbuds', icon: '🎧', price: 89, oldPrice: null, stars: 4.7, reviews: 891, badge: 'top', desc: 'Premium sound quality with active noise cancellation and 30hr battery life.', new: true },
            { id: 3, cat: 'electronics', name: 'Smart Watch Pro', icon: '⌚', price: 249, oldPrice: 299, stars: 4.6, reviews: 543, badge: 'sale', desc: 'Health tracking, GPS, heart rate monitor, and 5-day battery.', new: false },
            { id: 4, cat: 'electronics', name: '4K OLED TV 55"', icon: '📺', price: 799, oldPrice: 999, stars: 4.9, reviews: 210, badge: 'sale', desc: 'Stunning 4K OLED display with Dolby Vision and 120Hz refresh rate.', new: false },
            { id: 5, cat: 'electronics', name: 'Gaming Controller', icon: '🎮', price: 69, oldPrice: null, stars: 4.5, reviews: 670, badge: null, desc: 'Wireless gaming controller compatible with PC, PS5, and Xbox.', new: true },
            { id: 6, cat: 'electronics', name: 'Portable SSD 1TB', icon: '💾', price: 109, oldPrice: 139, stars: 4.7, reviews: 430, badge: 'sale', desc: 'Ultra-fast USB-C portable SSD with 1050MB/s transfer speed.', new: false },

            // Fashion
            { id: 7, cat: 'fashion', name: 'Classic Denim Jacket', icon: '🧥', price: 89, oldPrice: null, stars: 4.5, reviews: 234, badge: 'new', desc: 'Timeless denim jacket made from premium cotton. Available in blue, black, and grey.', new: true },
            { id: 8, cat: 'fashion', name: 'Running Sneakers', icon: '👟', price: 129, oldPrice: 169, stars: 4.8, reviews: 567, badge: 'sale', desc: 'Lightweight and breathable running shoes with advanced cushioning technology.', new: false },
            { id: 9, cat: 'fashion', name: 'Silk Summer Dress', icon: '👗', price: 79, oldPrice: null, stars: 4.6, reviews: 189, badge: 'new', desc: 'Elegant floral silk dress perfect for summer occasions.', new: true },
            { id: 10, cat: 'fashion', name: 'Leather Wallet', icon: '👛', price: 45, oldPrice: 60, stars: 4.4, reviews: 788, badge: 'sale', desc: 'Slim genuine leather wallet with RFID blocking technology.', new: false },
            { id: 11, cat: 'fashion', name: 'Sunglasses UV400', icon: '🕶️', price: 55, oldPrice: null, stars: 4.3, reviews: 312, badge: null, desc: 'Polarized UV400 sunglasses with lightweight titanium frame.', new: false },
            { id: 12, cat: 'fashion', name: 'Hoodie Comfort Plus', icon: '👕', price: 65, oldPrice: null, stars: 4.7, reviews: 445, badge: 'new', desc: 'Ultra-soft cotton hoodie with kangaroo pocket and ribbed cuffs.', new: true },

            // Home
            { id: 13, cat: 'home', name: 'Coffee Maker Pro', icon: '☕', price: 149, oldPrice: 199, stars: 4.8, reviews: 678, badge: 'sale', desc: 'Premium drip coffee maker with programmable timer and thermal carafe.', new: false },
            { id: 14, cat: 'home', name: 'Air Purifier 360°', icon: '🌬️', price: 199, oldPrice: null, stars: 4.9, reviews: 321, badge: 'top', desc: 'HEPA H13 air purifier covering up to 400 sq ft with real-time air quality display.', new: false },
            { id: 15, cat: 'home', name: 'Smart LED Bulbs (4pk)', icon: '💡', price: 39, oldPrice: 55, stars: 4.5, reviews: 1200, badge: 'sale', desc: 'WiFi-enabled RGB LED bulbs controllable via app or voice assistant.', new: false },
            { id: 16, cat: 'home', name: 'Bamboo Cutting Board', icon: '🍳', price: 35, oldPrice: null, stars: 4.4, reviews: 567, badge: 'new', desc: 'Eco-friendly bamboo cutting board with juice groove and anti-slip feet.', new: true },
            { id: 17, cat: 'home', name: 'Throw Blanket Luxury', icon: '🛋️', price: 69, oldPrice: 89, stars: 4.7, reviews: 234, badge: 'sale', desc: 'Super soft sherpa fleece throw blanket, 50"x60", machine washable.', new: false },

            // Sports
            { id: 18, cat: 'sports', name: 'Yoga Mat Premium', icon: '🧘', price: 55, oldPrice: null, stars: 4.8, reviews: 890, badge: 'top', desc: 'Non-slip 6mm thick yoga mat with alignment lines and carrying strap.', new: false },
            { id: 19, cat: 'sports', name: 'Resistance Bands Set', icon: '🏋️', price: 29, oldPrice: 45, stars: 4.6, reviews: 1100, badge: 'sale', desc: 'Set of 5 resistance bands (10-50 lbs) with door anchor and handles.', new: false },
            { id: 20, cat: 'sports', name: 'Football Pro', icon: '⚽', price: 45, oldPrice: null, stars: 4.5, reviews: 345, badge: null, desc: 'FIFA-approved match ball with 32-panel design and butyl bladder.', new: true },
            { id: 21, cat: 'sports', name: 'Cycling Helmet', icon: '🚴', price: 89, oldPrice: 115, stars: 4.7, reviews: 289, badge: 'sale', desc: 'Lightweight aerodynamic cycling helmet with 18 ventilation ports.', new: false },

            // Books
            { id: 22, cat: 'books', name: 'Design Thinking', icon: '📘', price: 25, oldPrice: null, stars: 4.9, reviews: 430, badge: 'top', desc: 'The bestselling guide to creative problem solving and human-centered design.', new: false },
            { id: 23, cat: 'books', name: 'Python Mastery', icon: '📗', price: 35, oldPrice: 45, stars: 4.8, reviews: 678, badge: 'sale', desc: 'Complete Python programming guide from beginner to advanced with real projects.', new: false },
            { id: 24, cat: 'books', name: 'The Art of Finance', icon: '📕', price: 22, oldPrice: null, stars: 4.6, reviews: 234, badge: 'new', desc: 'Accessible guide to personal finance, investing, and building wealth.', new: true },

            // Beauty
            { id: 25, cat: 'beauty', name: 'Vitamin C Serum', icon: '🧴', price: 38, oldPrice: 55, stars: 4.8, reviews: 1560, badge: 'sale', desc: 'Brightening vitamin C serum with hyaluronic acid and niacinamide.', new: false },
            { id: 26, cat: 'beauty', name: 'Rose Perfume 50ml', icon: '🌹', price: 75, oldPrice: null, stars: 4.7, reviews: 234, badge: 'new', desc: 'Luxurious floral eau de parfum with notes of rose, peach, and vanilla.', new: true },
            { id: 27, cat: 'beauty', name: 'Electric Face Cleanser', icon: '✨', price: 119, oldPrice: 149, stars: 4.6, reviews: 445, badge: 'sale', desc: 'Sonic facial cleansing brush with 3 speed modes and waterproof design.', new: false },

            // Food
            { id: 28, cat: 'food', name: 'Premium Coffee Beans', icon: '☕', price: 22, oldPrice: null, stars: 4.9, reviews: 780, badge: 'top', desc: 'Single-origin Ethiopian coffee beans, medium roast, 500g.', new: false },
            { id: 29, cat: 'food', name: 'Organic Honey 1kg', icon: '🍯', price: 18, oldPrice: 25, stars: 4.8, reviews: 567, badge: 'sale', desc: 'Raw organic wildflower honey, unfiltered and unheated.', new: false },
            { id: 30, cat: 'food', name: 'Protein Powder 2kg', icon: '💪', price: 55, oldPrice: null, stars: 4.7, reviews: 890, badge: 'new', desc: 'Whey protein isolate with 25g protein per serving, chocolate flavor.', new: true },

            // Toys
            { id: 31, cat: 'toys', name: 'LEGO Creator Set', icon: '🧱', price: 65, oldPrice: 85, stars: 4.9, reviews: 1230, badge: 'sale', desc: '3-in-1 creator set with 900+ pieces. Build a sports car, plane, or boat.', new: false },
            { id: 32, cat: 'toys', name: 'RC Racing Car', icon: '🏎️', price: 89, oldPrice: null, stars: 4.6, reviews: 345, badge: 'new', desc: '1:16 scale remote control car with 30km/h top speed and 2.4GHz control.', new: true },

            // Travel
            { id: 33, cat: 'travel', name: 'Travel Backpack 40L', icon: '🎒', price: 115, oldPrice: 149, stars: 4.8, reviews: 670, badge: 'sale', desc: 'Waterproof 40L travel backpack with USB charging port and laptop compartment.', new: false },
            { id: 34, cat: 'travel', name: 'Neck Pillow Memory Foam', icon: '😴', price: 28, oldPrice: null, stars: 4.5, reviews: 1100, badge: null, desc: 'Ergonomic memory foam travel pillow with machine washable cover.', new: false },

            // Pets
            { id: 35, cat: 'pets', name: 'Smart Pet Feeder', icon: '🐕', price: 79, oldPrice: 99, stars: 4.7, reviews: 456, badge: 'sale', desc: 'Automatic pet feeder with app control, 4L capacity, and meal scheduling.', new: false },
            { id: 36, cat: 'pets', name: 'Cat Scratching Post', icon: '🐈', price: 35, oldPrice: null, stars: 4.6, reviews: 234, badge: 'new', desc: 'Sisal rope cat scratching post with cozy plush top perch, 60cm tall.', new: true },
        ];

        // ===== STATE =====
        let cart = JSON.parse(localStorage.getItem('sn_cart') || '[]');
        let wishlist = JSON.parse(localStorage.getItem('sn_wish') || '[]');
        let activeCat = null;
        let activeFilter = 'all';
        let activeSort = 'default';
        let currentPage = 1;
        const PER_PAGE = 12;
        let currentProducts = [...allProducts];

        // ===== INIT =====
        function init() {
            renderCategories();
            renderProducts();
            updateBadges();
        }

        function saveData() {
            localStorage.setItem('sn_cart', JSON.stringify(cart));
            localStorage.setItem('sn_wish', JSON.stringify(wishlist));
        }

        // ===== CATEGORIES =====
        function renderCategories() {
            const g = document.getElementById('catsGrid');
            g.innerHTML = categories.map(c => `
    <div class="cat-card ${activeCat === c.id ? 'active' : ''}" onclick="setCat('${c.id}', this)">
      <div class="cat-icon">${c.icon}</div>
      <div class="cat-name">${c.name}</div>
      <div class="cat-count">${c.count} items</div>
    </div>
  `).join('');
        }

        function setCat(id, el) {
            activeCat = activeCat === id ? null : id;
            currentPage = 1;
            renderCategories();
            renderProducts();
            if (activeCat) document.getElementById('allProductsSection').scrollIntoView({ behavior: 'smooth' });
        }

        function clearCatFilter() {
            activeCat = null;
            currentPage = 1;
            renderCategories();
            renderProducts();
        }

        // ===== FILTERS & SORT =====
        function setFilter(f, el) {
            activeFilter = f;
            currentPage = 1;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            el.classList.add('active');
            renderProducts();
        }

        function setSort(v) {
            activeSort = v;
            currentPage = 1;
            renderProducts();
        }

        function handleSearch(q) {
            activeCat = null;
            currentPage = 1;
            renderCategories();
            renderProducts(q.toLowerCase());
        }

        // ===== PRODUCTS =====
        function getFiltered(query = '') {
            let products = [...allProducts];
            if (activeCat) products = products.filter(p => p.cat === activeCat);
            if (query) products = products.filter(p =>
                p.name.toLowerCase().includes(query) || p.cat.toLowerCase().includes(query)
            );
            if (activeFilter === 'new') products = products.filter(p => p.new);
            if (activeFilter === 'sale') products = products.filter(p => p.badge === 'sale' || p.oldPrice);
            if (activeFilter === 'top') products = products.filter(p => p.stars >= 4.7);

            if (activeSort === 'low') products.sort((a, b) => a.price - b.price);
            if (activeSort === 'high') products.sort((a, b) => b.price - a.price);
            if (activeSort === 'rating') products.sort((a, b) => b.stars - a.stars);
            return products;
        }

        function renderProducts(query = '') {
            const filtered = getFiltered(query);
            currentProducts = filtered;
            const title = activeCat
                ? categories.find(c => c.id === activeCat)?.name + ' Products'
                : query ? `Results for "${query}"` : 'All Products';
            document.getElementById('productsTitle').textContent = title;

            const start = (currentPage - 1) * PER_PAGE;
            const page = filtered.slice(start, start + PER_PAGE);

            const g = document.getElementById('productsGrid');
            if (page.length === 0) {
                g.innerHTML = '<p style="color:var(--muted);grid-column:1/-1;padding:2rem">No products found.</p>';
            } else {
                g.innerHTML = page.map(p => productCard(p)).join('');
            }
            renderPagination(filtered.length);
        }

        function productCard(p) {
            const wished = wishlist.includes(p.id);
            const badgeMap = { sale: 'sale', new: 'new', top: '' };
            const badgeLabel = p.badge === 'sale' ? '🏷 Sale' : p.badge === 'new' ? '✨ New' : p.badge === 'top' ? '⭐ Top' : '';
            return `
    <div class="product-card" onclick="openModal(${p.id})">
      ${badgeLabel ? `<div class="product-badge ${p.badge}">${badgeLabel}</div>` : ''}
      <button class="product-wish ${wished ? 'active' : ''}" onclick="toggleWish(event,${p.id})">${wished ? '❤️' : '🤍'}</button>
      <div class="product-img">${p.icon}</div>
      <div class="product-body">
        <div class="product-cat">${categories.find(c => c.id === p.cat)?.name || p.cat}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-stars">${'★'.repeat(Math.round(p.stars))}${'☆'.repeat(5 - Math.round(p.stars))}<span>(${p.reviews})</span></div>
        <div class="product-footer">
          <div class="product-price">₹${(p.price * 83).toLocaleString('en-IN')} ${p.oldPrice ? `<s>₹${(p.oldPrice * 83).toLocaleString('en-IN')}</s>` : ''}</div>
          <button class="add-cart" onclick="addToCart(event,${p.id})">+</button>
        </div>
      </div>
    </div>
  `;
        }

        function renderPagination(total) {
            const pages = Math.ceil(total / PER_PAGE);
            const c = document.getElementById('pagination');
            if (pages <= 1) { c.innerHTML = ''; return; }
            let html = '';
            for (let i = 1; i <= pages; i++) {
                html += `<button class="pg-btn ${i === currentPage ? 'active' : ''}" onclick="goPage2(${i})">${i}</button>`;
            }
            c.innerHTML = html;
        }

        function goPage2(n) {
            currentPage = n;
            renderProducts(document.getElementById('searchInput').value.toLowerCase());
            document.getElementById('allProductsSection').scrollIntoView({ behavior: 'smooth' });
        }

        // ===== CART =====
        function addToCart(e, id) {
            e.stopPropagation();
            const existing = cart.find(i => i.id === id);
            if (existing) existing.qty++;
            else { const p = allProducts.find(x => x.id === id); cart.push({ ...p, qty: 1 }); }
            saveData(); updateBadges(); renderCart();
            showToast('✓ Added to cart!');
        }

        function removeFromCart(id) {
            cart = cart.filter(i => i.id !== id);
            saveData(); updateBadges(); renderCart();
        }

        function changeQty(id, delta) {
            const item = cart.find(i => i.id === id);
            if (!item) return;
            item.qty += delta;
            if (item.qty <= 0) removeFromCart(id);
            else { saveData(); renderCart(); }
        }

        function renderCart() {
            const el = document.getElementById('cartItems');
            const footer = document.getElementById('cartFooter');
            if (cart.length === 0) {
                el.innerHTML = `<div class="cart-empty"><div class="big">🛒</div><p>Your cart is empty</p></div>`;
                footer.innerHTML = '';
                return;
            }
            el.innerHTML = cart.map(i => `
    <div class="cart-item">
      <div class="cart-item-img">${i.icon}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${i.name}</div>
        <div class="cart-item-cat">₹${(i.price * 83).toLocaleString('en-IN')} each</div>
        <div class="cart-item-actions">
          <button class="qty-btn" onclick="changeQty(${i.id},-1)">−</button>
          <span class="qty-num">${i.qty}</span>
          <button class="qty-btn" onclick="changeQty(${i.id},1)">+</button>
          <button class="remove-btn" onclick="removeFromCart(${i.id})">🗑 Remove</button>
        </div>
      </div>
      <div class="cart-item-price">₹${(i.price * i.qty * 83).toLocaleString('en-IN')}</div>
    </div>
  `).join('');

            const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
            const shipping = subtotal > 50 ? 0 : 5;
            const total = subtotal + shipping;
            footer.innerHTML = `
    <div class="cart-row"><span>Subtotal</span><span>₹${(subtotal * 83).toLocaleString('en-IN')}</span></div>
    <div class="cart-row"><span>Shipping</span><span>${shipping === 0 ? '<span style="color:var(--green)">FREE</span>' : '₹' + (shipping * 83).toLocaleString('en-IN')}</span></div>
    <div class="cart-row total"><span>Total</span><span style="color:var(--accent)">₹${(total * 83).toLocaleString('en-IN')}</span></div>
    <button class="checkout-btn" onclick="checkout()">Proceed to Checkout →</button>
  `;
        }

        function openCart() { document.getElementById('cartSidebar').classList.add('open'); document.getElementById('overlay').classList.add('open'); renderCart(); }
        function closeCart() { document.getElementById('cartSidebar').classList.remove('open'); document.getElementById('overlay').classList.remove('open'); }

        function checkout() {
            showToast('🎉 Order placed successfully!');
            cart = []; saveData(); updateBadges(); renderCart();
            setTimeout(closeCart, 800);
        }

        // ===== WISHLIST =====
        function toggleWish(e, id) {
            e.stopPropagation();
            if (wishlist.includes(id)) {
                wishlist = wishlist.filter(i => i !== id);
                showToast('💔 Removed from wishlist');
            } else {
                wishlist.push(id);
                showToast('❤️ Added to wishlist!');
            }
            saveData(); updateBadges(); renderProducts(document.getElementById('searchInput').value.toLowerCase());
        }

        function renderWishlist() {
            const g = document.getElementById('wishlistGrid');
            const empty = document.getElementById('wishlistEmpty');
            const items = allProducts.filter(p => wishlist.includes(p.id));
            if (items.length === 0) {
                g.innerHTML = '';
                empty.style.display = 'block';
            } else {
                empty.style.display = 'none';
                g.innerHTML = items.map(p => productCard(p)).join('');
            }
        }

        // ===== BADGES =====
        function updateBadges() {
            const cartCount = cart.reduce((s, i) => s + i.qty, 0);
            document.getElementById('cartBadge').textContent = cartCount;
            const wb = document.getElementById('wishBadge');
            wb.textContent = wishlist.length;
            wb.style.display = wishlist.length ? 'flex' : 'none';
        }

        // ===== MODAL =====
        function openModal(id) {
            const p = allProducts.find(x => x.id === id);
            if (!p) return;
            const catName = categories.find(c => c.id === p.cat)?.name || p.cat;
            document.getElementById('modalContent').innerHTML = `
    <div class="modal-img">${p.icon}</div>
    <div class="modal-body">
      <div class="modal-cat">${catName}</div>
      <div class="modal-name">${p.name}</div>
      <div class="modal-stars">${'★'.repeat(Math.round(p.stars))}${'☆'.repeat(5 - Math.round(p.stars))} <span style="color:var(--muted);font-size:0.85rem">${p.stars} · ${p.reviews} reviews</span></div>
      <div class="modal-desc">${p.desc}</div>
      <div class="modal-price-row">
        <div class="modal-price">₹${(p.price * 83).toLocaleString('en-IN')}</div>
        ${p.oldPrice ? `<div style="color:var(--muted);text-decoration:line-through;font-size:1rem">₹${(p.oldPrice * 83).toLocaleString('en-IN')}</div>` : ''}
        ${p.oldPrice ? `<div style="background:var(--red);color:#fff;border-radius:6px;padding:3px 8px;font-size:0.8rem;font-weight:700">${Math.round((1 - p.price / p.oldPrice) * 100)}% OFF</div>` : ''}
      </div>
      <div class="modal-actions">
        <button class="modal-add" onclick="addToCart(event,${p.id});closeModal()">🛒 Add to Cart</button>
        <button class="btn-outline" onclick="toggleWish(event,${p.id})">${wishlist.includes(p.id) ? '❤️ Wishlisted' : '♡ Wishlist'}</button>
      </div>
    </div>
  `;
            document.getElementById('modalOverlay').classList.add('open');
        }

        function closeModal() { document.getElementById('modalOverlay').classList.remove('open'); }
        function handleModalClick(e) { if (e.target === document.getElementById('modalOverlay')) closeModal(); }

        // ===== PAGES =====
        function goPage(name) {
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.getElementById(name + 'Page').classList.add('active');
            if (name === 'wishlist') renderWishlist();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // ===== TOAST =====
        function showToast(msg) {
            const c = document.getElementById('toastContainer');
            const t = document.createElement('div');
            t.className = 'toast'; t.textContent = msg;
            c.appendChild(t);
            setTimeout(() => t.remove(), 2400);
        }

        // ===== PROMO =====
        function copyCode(el) {
            navigator.clipboard?.writeText('SHOP20').catch(() => { });
            el.textContent = '✓ Copied!';
            setTimeout(() => el.textContent = 'SHOP20', 1800);
            showToast('📋 Code SHOP20 copied!');
        }

        // ===== START =====
        init();
