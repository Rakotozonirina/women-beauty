/* ================================================================
   WOMEN BEAUTY — script.js
   Vanilla JavaScript E-Commerce Engine
================================================================ */

'use strict';

// ======================== PRODUCT DATA ========================
const PRODUCTS = [
  {
    id: 1,
    name: "Bracelet Aura",
    category: "Bijoux",
    price: 59,
    image: "assets/images/product-bracelet-aura.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=800&fit=crop&q=80",
    description: "Un bracelet en or fin orné d'une perle de culture nacrée. Léger, délicat et parfait pour être porté seul ou superposé.",
    badge: "Nouveau",
    available: true,
    bestseller: false
  },
  {
    id: 2,
    name: "Collier Elise",
    category: "Bijoux",
    price: 89,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop&q=80",
    description: "Collier fin en vermeil avec un pendentif en forme de croissant incrusté de diamants. Élégance minimaliste pour chaque journée.",
    badge: "Best-seller",
    available: true,
    bestseller: true
  },
  {
    id: 3,
    name: "Bougie Ambre",
    category: "Bougies",
    price: 39,
    image: "https://images.unsplash.com/photo-1602178781484-3c12b100da62?w=600&h=800&fit=crop&q=80",
    description: "Notes de bois de santal, ambre doux et vanille. Environ 45 heures de combustion dans un contenant en céramique ivoire réutilisable.",
    badge: "Nouveau",
    available: true,
    bestseller: false
  },
  {
    id: 4,
    name: "Sac Camille",
    category: "Sacs",
    price: 195,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop&q=80",
    description: "Sac en cuir pleine fleur couleur camel avec fermoir en laiton doré. Compartiment principal et deux poches intérieures.",
    badge: "",
    available: true,
    bestseller: true
  },
  {
    id: 5,
    name: "Bague Alma",
    category: "Bijoux",
    price: 75,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&q=80",
    description: "Bague ajustable en argent 925 rhodié avec une pierre de lune cabochon. Pièce unique, fabriquée à la main.",
    badge: "Best-seller",
    available: true,
    bestseller: true
  },
  {
    id: 6,
    name: "Bougie Fleur Blanche",
    category: "Bougies",
    price: 45,
    image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=600&h=800&fit=crop&q=80",
    description: "Notes de magnolia, musc blanc et thé vert. Une fragrance fraîche et florale pour un intérieur lumineux. 50 heures de combustion.",
    badge: "",
    available: true,
    bestseller: true
  },
  {
    id: 7,
    name: "Sac Louise",
    category: "Sacs",
    price: 245,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop&q=80",
    description: "Sac cabas en cuir de veau sable avec anses en bambou. Grand format, idéal pour le quotidien. Intérieur en coton naturel.",
    badge: "Nouveau",
    available: true,
    bestseller: false
  },
  {
    id: 8,
    name: "Bracelet Solene",
    category: "Bijoux",
    price: 69,
    image: "https://images.unsplash.com/photo-1599459183200-59c7687a0c70?w=600&h=800&fit=crop&q=80",
    description: "Bracelet jonc en or 18K avec un motif tressé artisanal. Résistant à l'eau, il devient votre compagnon idéal du quotidien.",
    badge: "",
    available: true,
    bestseller: false
  },
  {
    id: 9,
    name: "Foulard Ivoire",
    category: "Accessoires",
    price: 85,
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&h=800&fit=crop&q=80",
    description: "Carré de soie 100% en twill doux, imprimé floral discret dans des tons ivoire et champagne. Dimensions : 90 x 90 cm.",
    badge: "Nouveau",
    available: true,
    bestseller: false
  },
  {
    id: 10,
    name: "Bougie Rose Pivoine",
    category: "Bougies",
    price: 42,
    image: "https://images.unsplash.com/photo-1610461888750-10bfc601b4a6?w=600&h=800&fit=crop&q=80",
    description: "Alliance délicate de pivoine, de rose de Damas et d'iris. Un bouquet romantique et raffiné pour votre intérieur.",
    badge: "",
    available: true,
    bestseller: false
  },
  {
    id: 11,
    name: "Barrette Perle",
    category: "Accessoires",
    price: 35,
    image: "https://images.unsplash.com/photo-1621541553660-d442a1f9c93d?w=600&h=800&fit=crop&q=80",
    description: "Barrette en métal doré ornée de trois perles de culture nacrées. Accessoire intemporel qui sublime coiffures simples et élaborées.",
    badge: "Best-seller",
    available: true,
    bestseller: true
  },
  {
    id: 12,
    name: "Sac Mini Juliette",
    category: "Sacs",
    price: 165,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop&q=80",
    description: "Mini sac baguette en cuir grainé cognac avec chaîne dorée amovible. Compact et élégant pour les soirées et week-ends.",
    badge: "Nouveau",
    available: true,
    bestseller: false
  }
];

// Image fallback handler
function getProductImage(product) {
  return product.image;
}

// ======================== STATE ========================
let cart = JSON.parse(localStorage.getItem('wb_cart') || '[]');
let favorites = JSON.parse(localStorage.getItem('wb_favorites') || '[]');
let currentFilter = 'all';
let currentPriceFilter = null;
let currentSort = 'relevance';
let quickviewQty = 1;
let currentQuickviewProduct = null;
let checkoutStep = 1;
let selectedPayment = 'card';

// ======================== PERSIST STATE ========================
function saveCart() { localStorage.setItem('wb_cart', JSON.stringify(cart)); }
function saveFavorites() { localStorage.setItem('wb_favorites', JSON.stringify(favorites)); }

// ======================== TOAST NOTIFICATIONS ========================
function showToast(message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('toast-show');
    setTimeout(() => {
      toast.classList.remove('toast-show');
      toast.classList.add('toast-hide');
      setTimeout(() => toast.remove(), 350);
    }, 2800);
  });
}

// ======================== HEADER ========================
function initHeader() {
  const header = document.getElementById('site-header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  }, { passive: true });

  // Nav links that filter products
  document.querySelectorAll('[data-filter]').forEach(link => {
    link.addEventListener('click', (e) => {
      const filter = link.dataset.filter;
      if (filter) {
        currentFilter = filter;
        renderProducts();
        updateFilterButtons(filter);
      }
    });
  });
}

// ======================== MOBILE NAV ========================
function initMobileNav() {
  const hamburger = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileOverlay = document.getElementById('mobile-nav-overlay');
  const closeBtn = document.getElementById('mobile-nav-close');

  function openNav() {
    mobileNav.classList.add('open');
    mobileOverlay.classList.add('open');
    mobileNav.removeAttribute('aria-hidden');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    mobileNav.classList.remove('open');
    mobileOverlay.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openNav);
  closeBtn.addEventListener('click', closeNav);
  mobileOverlay.addEventListener('click', closeNav);

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeNav);
  });
}

// ======================== SEARCH ========================
function initSearch() {
  const searchBtn = document.getElementById('search-btn');
  const searchClose = document.getElementById('search-close');
  const searchOverlay = document.getElementById('search-overlay');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  function openSearch() {
    searchOverlay.classList.add('open');
    searchOverlay.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 100);
  }

  function closeSearch() {
    searchOverlay.classList.remove('open');
    searchOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    searchInput.value = '';
    searchResults.innerHTML = '';
  }

  searchBtn.addEventListener('click', openSearch);
  searchClose.addEventListener('click', closeSearch);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (searchOverlay.classList.contains('open')) closeSearch();
      if (document.getElementById('quickview-overlay').classList.contains('open')) closeQuickview();
      if (document.getElementById('checkout-overlay').classList.contains('open')) closeCheckout();
    }
  });

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) { searchResults.innerHTML = ''; return; }

    const results = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );

    if (results.length === 0) {
      searchResults.innerHTML = '<p class="search-empty">Aucun resultat pour cette recherche.</p>';
      return;
    }

    searchResults.innerHTML = results.slice(0, 6).map(p => `
      <div class="search-result-item" role="button" tabindex="0" data-product-id="${p.id}">
        <img src="${getProductImage(p)}" alt="${p.name}" class="search-result-img" onerror="this.src='${p.fallbackImage || p.image}'" />
        <div class="search-result-info">
          <div class="search-result-name">${p.name}</div>
          <div class="search-result-cat">${p.category}</div>
        </div>
        <div class="search-result-price">${p.price} euro</div>
      </div>
    `).join('');

    searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = parseInt(item.dataset.productId);
        const product = PRODUCTS.find(p => p.id === id);
        closeSearch();
        openQuickview(product);
      });
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') item.click();
      });
    });
  });
}

// ======================== FAVORITES ========================
function isFavorite(id) {
  return favorites.some(f => f.id === id);
}

function toggleFavorite(product) {
  const idx = favorites.findIndex(f => f.id === product.id);
  if (idx >= 0) {
    favorites.splice(idx, 1);
    saveFavorites();
    updateFavoritesCount();
    showToast('Produit retire de vos favoris.');
    return false;
  } else {
    favorites.push(product);
    saveFavorites();
    updateFavoritesCount();
    showToast('Ajoute a vos favoris.');
    return true;
  }
}

function updateFavoritesCount() {
  const el = document.getElementById('favorites-count');
  if (el) {
    el.textContent = favorites.length;
    el.classList.remove('badge-pop');
    void el.offsetWidth;
    el.classList.add('badge-pop');
  }
  renderFavorites();
  // Update all fav buttons
  document.querySelectorAll('.product-fav-btn').forEach(btn => {
    const id = parseInt(btn.dataset.productId);
    btn.classList.toggle('active', isFavorite(id));
  });
}

function initFavorites() {
  const favBtn = document.getElementById('favorites-btn');
  const favClose = document.getElementById('favorites-close');
  const favOverlay = document.getElementById('favorites-overlay');

  favBtn.addEventListener('click', () => {
    document.getElementById('favorites-drawer').classList.add('open');
    favOverlay.classList.add('open');
    document.getElementById('favorites-drawer').removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
    renderFavorites();
  });

  function closeFavs() {
    document.getElementById('favorites-drawer').classList.remove('open');
    favOverlay.classList.remove('open');
    document.getElementById('favorites-drawer').setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  favClose.addEventListener('click', closeFavs);
  favOverlay.addEventListener('click', closeFavs);
  updateFavoritesCount();
}

function renderFavorites() {
  const container = document.getElementById('favorites-items');
  if (!container) return;

  if (favorites.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        <p>Vos favoris sont vides.</p>
      </div>`;
    return;
  }

  container.innerHTML = favorites.map(p => `
    <div class="cart-item" data-fav-id="${p.id}">
      <img src="${getProductImage(p)}" alt="${p.name}" class="cart-item-img" onerror="this.src='${p.fallbackImage || p.image}'" />
      <div>
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-price">${p.price} euro</div>
        <button class="cart-item-remove fav-remove-btn" data-product-id="${p.id}">Retirer</button>
        <button class="fav-add-to-cart" data-product-id="${p.id}">Ajouter au panier</button>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.fav-remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.productId);
      const product = PRODUCTS.find(p => p.id === id);
      if (product) toggleFavorite(product);
    });
  });

  container.querySelectorAll('.fav-add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.productId);
      const product = PRODUCTS.find(p => p.id === id);
      if (product) addToCart(product);
    });
  });
}

// ======================== CART ========================
function getCartItemCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function updateCartCount() {
  const el = document.getElementById('cart-count');
  if (el) {
    el.textContent = getCartItemCount();
    el.classList.remove('badge-pop');
    void el.offsetWidth;
    el.classList.add('badge-pop');
  }
  renderCart();
}

function addToCart(product, qty = 1) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  saveCart();
  updateCartCount();
  showToast('Ajoute au panier !');

  // Briefly open cart
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  drawer.classList.add('open');
  overlay.classList.add('open');
  drawer.removeAttribute('aria-hidden');
  document.body.style.overflow = 'hidden';
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartCount();
  showToast('Produit retire du panier.');
}

function updateCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(id);
      return;
    }
    saveCart();
    updateCartCount();
  }
}

function initCart() {
  const cartBtn = document.getElementById('cart-btn');
  const cartClose = document.getElementById('cart-close');
  const cartOverlay = document.getElementById('cart-overlay');

  cartBtn.addEventListener('click', () => {
    document.getElementById('cart-drawer').classList.add('open');
    cartOverlay.classList.add('open');
    document.getElementById('cart-drawer').removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
    renderCart();
  });

  function closeCart() {
    document.getElementById('cart-drawer').classList.remove('open');
    cartOverlay.classList.remove('open');
    document.getElementById('cart-drawer').setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  document.getElementById('checkout-btn').addEventListener('click', () => {
    closeCart();
    openCheckout();
  });

  updateCartCount();
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        <p>Votre panier est vide.</p>
      </div>`;
    if (totalEl) totalEl.textContent = '0 euro';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item" data-cart-id="${item.id}">
      <img src="${getProductImage(item)}" alt="${item.name}" class="cart-item-img" onerror="this.src='${item.fallbackImage || item.image}'" />
      <div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price} euro</div>
        <div class="cart-item-qty">
          <button class="qty-btn" data-action="minus" data-id="${item.id}" aria-label="Diminuer la quantite">&#8722;</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" data-action="plus" data-id="${item.id}" aria-label="Augmenter la quantite">&#43;</button>
        </div>
      </div>
      <button class="cart-item-remove" data-remove-id="${item.id}" aria-label="Supprimer ${item.name}">&#10005;</button>
    </div>
  `).join('');

  if (totalEl) totalEl.textContent = getCartTotal() + ' euro';

  container.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const action = btn.dataset.action;
      updateCartQty(id, action === 'plus' ? 1 : -1);
    });
  });

  container.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.removeId);
      removeFromCart(id);
    });
  });
}

// ======================== PRODUCT RENDERING ========================
function getFilteredProducts() {
  let products = [...PRODUCTS];

  // Category filter
  if (currentFilter !== 'all') {
    products = products.filter(p => p.category === currentFilter);
  }

  // Price filter
  if (currentPriceFilter) {
    const [min, max] = currentPriceFilter.split('-').map(v => v === '+' ? Infinity : parseInt(v));
    if (currentPriceFilter === '200+') {
      products = products.filter(p => p.price > 200);
    } else {
      const parts = currentPriceFilter.split('-');
      products = products.filter(p => p.price >= parseInt(parts[0]) && p.price <= parseInt(parts[1]));
    }
  }

  // Sort
  switch (currentSort) {
    case 'price-asc':  products.sort((a, b) => a.price - b.price); break;
    case 'price-desc': products.sort((a, b) => b.price - a.price); break;
    case 'newest':     products.sort((a, b) => (b.badge === 'Nouveau' ? 1 : 0) - (a.badge === 'Nouveau' ? 1 : 0)); break;
    default: break;
  }

  return products;
}

function renderProductCard(product, isBestseller = false) {
  const fav = isFavorite(product.id);
  const badge = product.badge || (isBestseller && product.bestseller ? 'Best-seller' : '');
  const badgeClass = badge === 'Nouveau' ? 'badge-new' : badge === 'Best-seller' ? 'badge-bestseller' : '';
  const imgSrc = getProductImage(product);
  const fallback = product.fallbackImage || product.image;

  return `
    <article class="product-card reveal-scale" data-product-id="${product.id}">
      <div class="product-card-img-wrap">
        <img src="${imgSrc}" alt="${product.name} — ${product.category}" loading="lazy" width="400" height="533"
          onerror="this.src='${fallback}'" />
        ${badge ? `<span class="product-badge ${badgeClass}">${badge}</span>` : ''}
        <button class="product-fav-btn ${fav ? 'active' : ''}" data-product-id="${product.id}" aria-label="${fav ? 'Retirer des' : 'Ajouter aux'} favoris">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${fav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        <button class="product-quickview-btn" data-product-id="${product.id}" aria-label="Apercu de ${product.name}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          Apercu rapide
        </button>
      </div>
      <div class="product-info">
        <div class="product-cat">${product.category}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-price">${product.price} euro</div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  const products = getFilteredProducts();

  if (products.length === 0) {
    grid.innerHTML = '<p style="text-align:center;color:var(--color-taupe);padding:3rem;grid-column:1/-1;">Aucun produit correspondant a ce filtre.</p>';
    return;
  }

  grid.innerHTML = products.map(p => renderProductCard(p)).join('');
  bindProductCardEvents(grid);
  initRevealObserver();
}

function renderBestsellers() {
  const grid = document.getElementById('bestsellers-grid');
  if (!grid) return;

  const bestsellers = PRODUCTS.filter(p => p.bestseller).slice(0, 4);
  grid.innerHTML = bestsellers.map(p => renderProductCard(p, true)).join('');
  bindProductCardEvents(grid);
  initRevealObserver();
}

function bindProductCardEvents(container) {
  container.querySelectorAll('.product-fav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.productId);
      const product = PRODUCTS.find(p => p.id === id);
      if (!product) return;
      const added = toggleFavorite(product);
      btn.classList.toggle('active', added);
      const svg = btn.querySelector('svg');
      if (svg) svg.setAttribute('fill', added ? 'currentColor' : 'none');
      btn.classList.remove('heart-pop');
      void btn.offsetWidth;
      btn.classList.add('heart-pop');
    });
  });

  container.querySelectorAll('.product-quickview-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.productId);
      const product = PRODUCTS.find(p => p.id === id);
      if (product) openQuickview(product);
    });
  });
}

// ======================== FILTERS ========================
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
  const priceBtns = document.querySelectorAll('.filter-btn[data-price]');
  const sortSelect = document.getElementById('sort-select');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentFilter = btn.dataset.filter;
      updateFilterButtons(currentFilter);
      renderProducts();
    });
  });

  priceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
        currentPriceFilter = null;
      } else {
        priceBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        currentPriceFilter = btn.dataset.price;
      }
      renderProducts();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      currentSort = sortSelect.value;
      renderProducts();
    });
  }
}

function updateFilterButtons(activeFilter) {
  document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
    const isActive = btn.dataset.filter === activeFilter;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

// ======================== QUICK VIEW ========================
function openQuickview(product) {
  currentQuickviewProduct = product;
  quickviewQty = 1;
  const overlay = document.getElementById('quickview-overlay');
  const content = document.getElementById('quickview-content');
  const fav = isFavorite(product.id);
  const imgSrc = getProductImage(product);
  const fallback = product.fallbackImage || product.image;

  content.innerHTML = `
    <img src="${imgSrc}" alt="${product.name}" class="quickview-img" onerror="this.src='${fallback}'" />
    <div class="quickview-details">
      <div class="quickview-cat">${product.category}</div>
      <h2 class="quickview-name">${product.name}</h2>
      <div class="quickview-price">${product.price} euro</div>
      <p class="quickview-desc">${product.description}</p>
      <div class="quickview-qty">
        <span class="quickview-qty-label">Quantite</span>
        <div class="quickview-qty-ctrl">
          <button class="quickview-qty-btn" id="qv-minus" aria-label="Diminuer">&#8722;</button>
          <span class="quickview-qty-val" id="qv-qty">1</span>
          <button class="quickview-qty-btn" id="qv-plus" aria-label="Augmenter">&#43;</button>
        </div>
      </div>
      <div class="quickview-actions">
        <button class="btn-primary btn-full" id="qv-add-to-cart">Ajouter au panier</button>
        <button class="btn-fav-qv ${fav ? 'active' : ''}" id="qv-fav-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${fav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          ${fav ? 'Dans vos favoris' : 'Ajouter aux favoris'}
        </button>
      </div>
    </div>
  `;

  document.getElementById('qv-minus').addEventListener('click', () => {
    if (quickviewQty > 1) {
      quickviewQty--;
      document.getElementById('qv-qty').textContent = quickviewQty;
    }
  });

  document.getElementById('qv-plus').addEventListener('click', () => {
    quickviewQty++;
    document.getElementById('qv-qty').textContent = quickviewQty;
  });

  document.getElementById('qv-add-to-cart').addEventListener('click', () => {
    addToCart(product, quickviewQty);
    closeQuickview();
  });

  document.getElementById('qv-fav-btn').addEventListener('click', (e) => {
    const btn = e.currentTarget;
    const added = toggleFavorite(product);
    btn.classList.toggle('active', added);
    const svg = btn.querySelector('svg');
    if (svg) svg.setAttribute('fill', added ? 'currentColor' : 'none');
    btn.querySelector('svg').nextSibling.textContent = added ? ' Dans vos favoris' : ' Ajouter aux favoris';
  });

  overlay.classList.add('open');
  overlay.removeAttribute('aria-hidden');
  document.body.style.overflow = 'hidden';
}

function closeQuickview() {
  const overlay = document.getElementById('quickview-overlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initQuickview() {
  document.getElementById('quickview-close').addEventListener('click', closeQuickview);
  document.getElementById('quickview-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeQuickview();
  });
}

// ======================== CHECKOUT ========================
function openCheckout() {
  if (cart.length === 0) {
    showToast('Votre panier est vide.');
    return;
  }
  checkoutStep = 1;
  const overlay = document.getElementById('checkout-overlay');
  overlay.classList.add('open');
  overlay.removeAttribute('aria-hidden');
  document.body.style.overflow = 'hidden';
  renderCheckoutStep();
}

function closeCheckout() {
  const overlay = document.getElementById('checkout-overlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function updateStepIndicator() {
  document.querySelectorAll('.checkout-step-dot').forEach(dot => {
    const step = parseInt(dot.dataset.step);
    dot.classList.toggle('active', step <= checkoutStep);
  });
}

function renderCheckoutStep() {
  const container = document.getElementById('checkout-form-container');
  updateStepIndicator();

  if (checkoutStep === 1) {
    container.innerHTML = `
      <h3 class="checkout-form-title">Vos informations</h3>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label" for="co-prenom">Prenom</label>
          <input class="form-input" type="text" id="co-prenom" placeholder="Marie" autocomplete="given-name" />
        </div>
        <div class="form-group">
          <label class="form-label" for="co-nom">Nom</label>
          <input class="form-input" type="text" id="co-nom" placeholder="Dupont" autocomplete="family-name" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="co-email">Email</label>
        <input class="form-input" type="email" id="co-email" placeholder="marie@example.com" autocomplete="email" />
      </div>
      <div class="form-group">
        <label class="form-label" for="co-tel">Telephone</label>
        <input class="form-input" type="tel" id="co-tel" placeholder="+33 6 12 34 56 78" autocomplete="tel" />
      </div>
      <div class="checkout-nav">
        <span></span>
        <button class="btn-primary" id="co-next-1">Continuer &rarr;</button>
      </div>`;
    document.getElementById('co-next-1').addEventListener('click', () => {
      checkoutStep = 2; renderCheckoutStep();
    });
  } else if (checkoutStep === 2) {
    container.innerHTML = `
      <h3 class="checkout-form-title">Adresse de livraison</h3>
      <div class="form-group">
        <label class="form-label" for="co-addr">Adresse</label>
        <input class="form-input" type="text" id="co-addr" placeholder="12 rue de la Paix" autocomplete="street-address" />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label" for="co-city">Ville</label>
          <input class="form-input" type="text" id="co-city" placeholder="Paris" autocomplete="address-level2" />
        </div>
        <div class="form-group">
          <label class="form-label" for="co-cp">Code postal</label>
          <input class="form-input" type="text" id="co-cp" placeholder="75001" autocomplete="postal-code" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="co-pays">Pays</label>
        <select class="form-input" id="co-pays" autocomplete="country">
          <option>France</option>
          <option>Belgique</option>
          <option>Suisse</option>
          <option>Luxembourg</option>
        </select>
      </div>
      <div class="checkout-nav">
        <button class="btn-outline" id="co-prev-2">&larr; Retour</button>
        <button class="btn-primary" id="co-next-2">Continuer &rarr;</button>
      </div>`;
    document.getElementById('co-prev-2').addEventListener('click', () => { checkoutStep = 1; renderCheckoutStep(); });
    document.getElementById('co-next-2').addEventListener('click', () => { checkoutStep = 3; renderCheckoutStep(); });
  } else if (checkoutStep === 3) {
    container.innerHTML = `
      <h3 class="checkout-form-title">Paiement</h3>
      <div class="cart-subtotal" style="margin-bottom:1.5rem;padding-bottom:1.5rem;border-bottom:1px solid var(--color-border);">
        <span>Total de la commande</span>
        <span style="color:var(--color-champagne)">${getCartTotal()} euro</span>
      </div>
      <div class="payment-methods">
        <label class="payment-method selected" id="pm-card">
          <input type="radio" name="payment" value="card" checked />
          <span class="payment-icon">💳</span>
          <span class="payment-label">Carte bancaire</span>
        </label>
        <label class="payment-method" id="pm-apple">
          <input type="radio" name="payment" value="apple" />
          <span class="payment-icon">🍎</span>
          <span class="payment-label">Apple Pay</span>
        </label>
        <label class="payment-method" id="pm-paypal">
          <input type="radio" name="payment" value="paypal" />
          <span class="payment-icon">🅿</span>
          <span class="payment-label">PayPal</span>
        </label>
      </div>
      <div id="card-fields">
        <div class="form-group">
          <label class="form-label" for="co-card">Numero de carte</label>
          <input class="form-input" type="text" id="co-card" placeholder="4242 4242 4242 4242" maxlength="19" />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="co-exp">Expiration</label>
            <input class="form-input" type="text" id="co-exp" placeholder="MM/AA" maxlength="5" />
          </div>
          <div class="form-group">
            <label class="form-label" for="co-cvv">CVV</label>
            <input class="form-input" type="text" id="co-cvv" placeholder="123" maxlength="3" />
          </div>
        </div>
      </div>
      <div class="checkout-nav">
        <button class="btn-outline" id="co-prev-3">&larr; Retour</button>
        <button class="btn-primary" id="co-pay">Confirmer la commande</button>
      </div>`;

    document.querySelectorAll('input[name="payment"]').forEach(input => {
      input.addEventListener('change', () => {
        document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
        input.closest('.payment-method').classList.add('selected');
      });
    });

    document.getElementById('co-prev-3').addEventListener('click', () => { checkoutStep = 2; renderCheckoutStep(); });
    document.getElementById('co-pay').addEventListener('click', () => {
      const orderNum = 'WB-' + Math.floor(Math.random() * 900000 + 100000);
      container.innerHTML = `
        <div class="checkout-success">
          <div class="checkout-success-icon">&#10003;</div>
          <h3 class="checkout-success-title">Merci pour votre commande !</h3>
          <p class="checkout-success-num">Commande n° ${orderNum}</p>
          <p class="checkout-success-msg">
            Votre commande a bien ete confirmee. Vous recevrez un email de confirmation dans quelques instants.
            <br><br>
            Livraison estimee : 2-3 jours ouvrables.
          </p>
          <button class="btn-primary" style="margin-top:2rem" id="co-close-success">Fermer</button>
        </div>`;
      cart = [];
      saveCart();
      updateCartCount();
      document.querySelectorAll('.checkout-step-dot span').forEach(span => {
        span.parentElement.classList.add('active');
      });
      document.getElementById('co-close-success').addEventListener('click', closeCheckout);
    });
  }
}

function initCheckout() {
  document.getElementById('checkout-modal-close').addEventListener('click', closeCheckout);
  document.getElementById('checkout-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeCheckout();
  });
}

// ======================== NEWSLETTER ========================
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value.trim();
    const errorEl = document.getElementById('newsletter-error');
    const successEl = document.getElementById('newsletter-success');

    errorEl.textContent = '';
    successEl.textContent = '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorEl.textContent = 'Veuillez entrer une adresse email valide.';
      return;
    }

    successEl.textContent = 'Merci, vous etes bien inscrite. Bienvenue dans notre univers !';
    document.getElementById('newsletter-email').value = '';
    showToast('Inscription confirmee !');
  });
}

// ======================== SCROLL REVEAL ========================
function initRevealObserver() {
  const elements = document.querySelectorAll('.reveal-up:not(.revealed), .reveal-scale:not(.revealed)');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add('revealed'));
  }
}

// ======================== HERO CAROUSEL ========================
function initHeroCarousel() {
  const slides = Array.from(document.querySelectorAll('.hero-media .hero-img'));
  const controls = Array.from(document.querySelectorAll('.hero-carousel-dot'));

  if (slides.length < 2 || slides.length !== controls.length) {
    throw new Error('Le carrousel du hero doit avoir une commande par image.');
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeIndex = 0;
  let timerId;

  const showSlide = (index) => {
    activeIndex = index;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('is-active', slideIndex === activeIndex);
      controls[slideIndex].classList.toggle('is-active', slideIndex === activeIndex);
      controls[slideIndex].setAttribute('aria-pressed', String(slideIndex === activeIndex));
    });
  };

  const stopAutoplay = () => {
    window.clearInterval(timerId);
    timerId = undefined;
  };

  const startAutoplay = () => {
    stopAutoplay();
    if (!reducedMotion.matches && !document.hidden) {
      timerId = window.setInterval(() => {
        showSlide((activeIndex + 1) % slides.length);
      }, 6000);
    }
  };

  controls.forEach((control, index) => {
    control.addEventListener('click', () => {
      showSlide(index);
      startAutoplay();
    });
  });

  document.addEventListener('visibilitychange', startAutoplay);
  reducedMotion.addEventListener('change', startAutoplay);
  startAutoplay();
}

// ======================== INIT ALL ========================
function init() {
  initHeader();
  initHeroCarousel();
  initMobileNav();
  initSearch();
  initFavorites();
  initCart();
  initQuickview();
  initCheckout();
  initFilters();
  initNewsletter();

  renderProducts();
  renderBestsellers();
  initRevealObserver();

  // Init hero reveals with delay
  setTimeout(() => {
    document.querySelectorAll('.hero-text-wrap .reveal-up').forEach(el => {
      el.classList.add('revealed');
    });
  }, 200);
}

document.addEventListener('DOMContentLoaded', init);
