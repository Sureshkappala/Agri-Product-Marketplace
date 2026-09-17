/* ==========================================================================
   AGRI PRODUCT MARKETPLACE - CORE JAVASCRIPT ENGINE
   Pure Vanilla JS (ES6+), LocalStorage Persistent
   ========================================================================== */

// 1. CENTRAL DATA STORE
const AgriData = {
  categories: [
    { id: 'seeds', name: 'Seeds', desc: 'High-germination vegetable, cereal, grain and flower seeds.', img: 'assets/images/cat-seeds.webp', count: '140+ Products' },
    { id: 'fertilizers', name: 'Fertilizers', desc: 'Bio-composts, slow-release NPK, and organic soil amendments.', img: 'assets/images/cat-fertilizers.webp', count: '85+ Products' },
    { id: 'pesticides', name: 'Pesticides', desc: 'Cold-pressed botanical neem oils and bio-fungicides.', img: 'assets/images/cat-pesticides.webp', count: '60+ Products' },
    { id: 'tools', name: 'Farming Tools', desc: 'Ergonomic hand trowels, pruning shears, weeders, and spades.', img: 'assets/images/cat-tools.webp', count: '110+ Products' },
    { id: 'equipment', name: 'Equipment', desc: 'Tumbling composters, backpack sprayers, and aerators.', img: 'assets/images/cat-equipment.webp', count: '45+ Products' },
    { id: 'organic', name: 'Organic Products', desc: 'Certified organic bio-inputs, worm castings, and herbal teas.', img: 'assets/images/cat-organic.webp', count: '90+ Products' },
    { id: 'produce', name: 'Fresh Produce', desc: 'Direct-from-farm fresh harvested organic greens and vegetables.', img: 'assets/images/cat-produce.webp', count: '150+ Products' },
    { id: 'irrigation', name: 'Irrigation', desc: 'Solar automated micro-drip kits, misters, and drip pipes.', img: 'assets/images/cat-irrigation.webp', count: '38+ Products' },
    { id: 'feed', name: 'Animal Feed', desc: 'Non-GMO pasture forage blends, nutrient licks, and grain feed.', img: 'assets/images/cat-feed.webp', count: '55+ Products' }
  ],
  products: [
    {
      id: 1,
      name: "Organic Heirloom Vegetable Seed Kit",
      category: "seeds",
      categoryName: "Seeds",
      price: 24.99,
      oldPrice: 32.00,
      unit: "pack of 15 varieties",
      rating: 4.9,
      reviews: 128,
      seller: "GreenValley Farms",
      sellerId: 1,
      image: "assets/images/prod-veg-seeds.webp",
      badge: "Sale",
      inStock: true,
      stockCount: 85,
      brand: "EarthGrow Heritage",
      suitableCrops: "Tomato, Pepper, Carrot, Spinach, Radish",
      packSize: "15 Seed Packets (500 seeds total)",
      usage: "Kitchen Gardening & Micro-farming",
      origin: "Oregon, USA",
      description: "Non-GMO, chemical-free heirloom vegetable seed collection curated for high yield and disease resistance across diverse climates."
    },
    {
      id: 2,
      name: "Bio-Enriched Organic Compost Fertilizer",
      category: "fertilizers",
      categoryName: "Fertilizers",
      price: 38.50,
      oldPrice: 45.00,
      unit: "25 kg bag",
      rating: 4.8,
      reviews: 94,
      seller: "EcoRoots Agrotech",
      sellerId: 2,
      image: "assets/images/prod-organic-fertilizer.webp",
      badge: "Organic",
      inStock: true,
      stockCount: 120,
      brand: "BioRich Organics",
      suitableCrops: "All Vegetables, Orchards & Field Crops",
      packSize: "25 kg woven sack",
      usage: "50-100g per square meter during soil preparation",
      origin: "California, USA",
      description: "100% natural, pathogen-free microbial compost rich in humic acids and slow-release nitrogen, phosphorus, and potassium."
    },
    {
      id: 3,
      name: "Ergonomic Carbon-Steel Gardening Hand Tools",
      category: "tools",
      categoryName: "Farming Tools",
      price: 49.99,
      oldPrice: 65.00,
      unit: "set of 4 tools",
      rating: 4.9,
      reviews: 210,
      seller: "AgriCraft Hardware",
      sellerId: 3,
      image: "assets/images/prod-garden-tools.webp",
      badge: "Popular",
      inStock: true,
      stockCount: 45,
      brand: "IronSprout Pro",
      suitableCrops: "Gardens, Nurseries, Greenhouses",
      packSize: "Trowel, Transplanter, Weeder, Hand Rake",
      usage: "Soil aeration, planting, root weeding",
      origin: "Lancaster, USA",
      description: "Heavy-duty rust-resistant carbon steel hand tools with non-slip ash wood handles engineered for ergonomic durability."
    },
    {
      id: 4,
      name: "Automated Solar Drip Irrigation Starter Kit",
      category: "irrigation",
      categoryName: "Irrigation",
      price: 119.00,
      oldPrice: 145.00,
      unit: "complete kit (50m)",
      rating: 4.7,
      reviews: 62,
      seller: "AquaYield Systems",
      sellerId: 4,
      image: "assets/images/prod-drip-kit.webp",
      badge: "Top Rated",
      inStock: true,
      stockCount: 28,
      brand: "HydroDrop Tech",
      suitableCrops: "Row crops, orchards, greenhouse beds",
      packSize: "50m main pipe + 40 adjustable emitters + solar timer",
      usage: "Connects to standard outdoor faucet or water tank",
      origin: "Washington, USA",
      description: "Precision water-saving drip system with solar timer controller to deliver 70% water savings directly to crop root zones."
    },
    {
      id: 5,
      name: "Pro-Grade 16L Backpack Farm Sprayer",
      category: "equipment",
      categoryName: "Equipment",
      price: 64.99,
      oldPrice: 79.99,
      unit: "16 Liters",
      rating: 4.6,
      reviews: 87,
      seller: "AgriCraft Hardware",
      sellerId: 3,
      image: "assets/images/prod-sprayer.webp",
      badge: "Sale",
      inStock: true,
      stockCount: 35,
      brand: "FarmShield",
      suitableCrops: "Field crops, vineyards, fruit orchards",
      packSize: "16L tank with brass telescopic wand",
      usage: "Liquid fertilizer and botanical spray application",
      origin: "USA",
      description: "High-pressure diaphragm backpack sprayer with padded ergonomic straps, leak-proof brass nozzle, and lockable trigger."
    },
    {
      id: 6,
      name: "Cold-Pressed Neem Oil Botanical Pesticide",
      category: "pesticides",
      categoryName: "Pesticides",
      price: 29.50,
      oldPrice: 36.00,
      unit: "1 Liter bottle",
      rating: 4.8,
      reviews: 145,
      seller: "EcoRoots Agrotech",
      sellerId: 2,
      image: "assets/images/prod-organic-pesticide.webp",
      badge: "Organic",
      inStock: true,
      stockCount: 90,
      brand: "NeemSafe Pure",
      suitableCrops: "Vegetables, berries, citrus, ornamentals",
      packSize: "1000 ml concentrate",
      usage: "Dilute 5ml per 1L water with mild surfactant",
      origin: "California, USA",
      description: "Pure cold-pressed active neem oil that prevents fungal infestations, aphids, whiteflies, and spider mites naturally."
    },
    {
      id: 7,
      name: "Fresh Farm Harvest Organic Vegetable Box",
      category: "produce",
      categoryName: "Fresh Produce",
      price: 34.00,
      oldPrice: 40.00,
      unit: "8 kg curated box",
      rating: 5.0,
      reviews: 310,
      seller: "Sunrise Organic Pastures",
      sellerId: 5,
      image: "assets/images/prod-fresh-veggies.webp",
      badge: "Fresh Today",
      inStock: true,
      stockCount: 40,
      brand: "Sunrise Fields",
      suitableCrops: "Direct Farm Consumption",
      packSize: "8 kg seasonal vegetables",
      usage: "Farm-to-table fresh culinary use",
      origin: "Colorado, USA",
      description: "Harvested within 24 hours of delivery: heirloom tomatoes, sweet peppers, baby spinach, zucchini, and crunchy cucumbers."
    },
    {
      id: 8,
      name: "Digital 4-in-1 Soil pH & Moisture Tester",
      category: "tools",
      categoryName: "Farming Tools",
      price: 39.99,
      oldPrice: 48.00,
      unit: "1 digital device",
      rating: 4.7,
      reviews: 112,
      seller: "AquaYield Systems",
      sellerId: 4,
      image: "assets/images/prod-soil-tester.webp",
      badge: "Smart Agri",
      inStock: true,
      stockCount: 55,
      brand: "SoilSense Lab",
      suitableCrops: "All field soils and greenhouse substrates",
      packSize: "1 probe device with LCD backlit display",
      usage: "Instant reading of pH, moisture, sunlight & temperature",
      origin: "Washington, USA",
      description: "Accurate multiparameter agricultural soil probe with high precision sensor to optimize fertilization and irrigation cycles."
    },
    {
      id: 9,
      name: "Certified High-Yield Winter Wheat Seeds",
      category: "seeds",
      categoryName: "Seeds",
      price: 52.00,
      oldPrice: 60.00,
      unit: "20 kg bag",
      rating: 4.8,
      reviews: 78,
      seller: "GreenValley Farms",
      sellerId: 1,
      image: "assets/images/prod-wheat-seeds.webp",
      badge: "Certified",
      inStock: true,
      stockCount: 60,
      brand: "GoldenGrain Bio",
      suitableCrops: "Extensive Field Farming",
      packSize: "20 kg certified treated sack",
      usage: "120-150 kg per hectare seed rate",
      origin: "Oregon, USA",
      description: "High-protein winter wheat seed with drought resilience and exceptional tillering capacity for commercial harvests."
    },
    {
      id: 10,
      name: "Heavy-Duty Tumbling Compost Bin (140L)",
      category: "equipment",
      categoryName: "Equipment",
      price: 98.00,
      oldPrice: 125.00,
      unit: "140 Liter tumbler",
      rating: 4.9,
      reviews: 83,
      seller: "EcoRoots Agrotech",
      sellerId: 2,
      image: "assets/images/prod-compost-bin.webp",
      badge: "Eco Pick",
      inStock: true,
      stockCount: 22,
      brand: "CycleBio Systems",
      suitableCrops: "Farm & Garden Waste Recycling",
      packSize: "140L dual-chamber UV-stabilized drum",
      usage: "Rotates easily to produce compost in 4-6 weeks",
      origin: "California, USA",
      description: "Dual-chamber tumbling composter with internal mixing fins and galvanized steel frame for continuous zero-odor composting."
    },
    {
      id: 11,
      name: "Titanium Bypass Orchard Pruning Shears",
      category: "tools",
      categoryName: "Farming Tools",
      price: 31.99,
      oldPrice: 42.00,
      unit: "1 pair with holster",
      rating: 4.9,
      reviews: 167,
      seller: "AgriCraft Hardware",
      sellerId: 3,
      image: "assets/images/prod-pruning-shears.webp",
      badge: "Heavy Duty",
      inStock: true,
      stockCount: 70,
      brand: "PrecisionCut Pro",
      suitableCrops: "Fruit trees, vines, shrubs, roses",
      packSize: "8.5 inch shears + leather holster",
      usage: "Clean cuts up to 25mm diameter branches",
      origin: "Lancaster, USA",
      description: "SK5 titanium-coated steel blades with shock-absorbing spring and safety lock for effortless, plant-friendly pruning."
    },
    {
      id: 12,
      name: "Indoor Vertical NFT Hydroponic Growing Kit",
      category: "organic",
      categoryName: "Organic Products",
      price: 189.00,
      oldPrice: 220.00,
      unit: "36-plant vertical system",
      rating: 4.8,
      reviews: 54,
      seller: "Sunrise Organic Pastures",
      sellerId: 5,
      image: "assets/images/prod-hydroponic-kit.webp",
      badge: "Premium",
      inStock: true,
      stockCount: 15,
      brand: "AeroLeaf Grow",
      suitableCrops: "Lettuce, herbs, strawberries, bok choy",
      packSize: "36 net pots + submersible pump + reservoir",
      usage: "Circulates nutrient solution automatically with timer",
      origin: "Colorado, USA",
      description: "Food-grade PVC vertical hydroponics system delivering 3x faster growth rates without synthetic soil pesticides."
    }
  ],
  farmers: [
    {
      id: 1,
      name: "Robert MacIntyre",
      farmName: "GreenValley Farms",
      location: "Willamette Valley, Oregon",
      category: "Heirloom Seeds & Grains",
      rating: 4.9,
      productsCount: 28,
      experience: "24 Years",
      sales: "1,840+ Orders",
      verified: true,
      image: "assets/images/farmer-1.webp",
      bio: "Third-generation farmer dedicated to heritage non-GMO grain and vegetable seed preservation with chemical-free regenerative crop cycles."
    },
    {
      id: 2,
      name: "Elena Rostova",
      farmName: "EcoRoots Agrotech",
      location: "Sonoma County, California",
      category: "Organic Fertilizers & Compost",
      rating: 4.8,
      productsCount: 19,
      experience: "14 Years",
      sales: "3,210+ Orders",
      verified: true,
      image: "assets/images/farmer-2.webp",
      bio: "Agricultural microbiologist producing balanced bio-fertilizers and cold-pressed botanical pest repellents for certified organic growers."
    },
    {
      id: 3,
      name: "Arthur Jenkins",
      farmName: "AgriCraft Hardware",
      location: "Lancaster, Pennsylvania",
      category: "Farming Tools & Equipment",
      rating: 4.9,
      productsCount: 42,
      experience: "30 Years",
      sales: "4,590+ Orders",
      verified: true,
      image: "assets/images/farmer-3.webp",
      bio: "Blacksmith and mechanical innovator designing durable, lifetime-warrantied agricultural hand tools and spray systems."
    },
    {
      id: 4,
      name: "Sarah Chen",
      farmName: "AquaYield Systems",
      location: "Yakima Valley, Washington",
      category: "Precision Irrigation & Soil Tech",
      rating: 4.7,
      productsCount: 16,
      experience: "11 Years",
      sales: "1,420+ Orders",
      verified: true,
      image: "assets/images/farmer-4.webp",
      bio: "Irrigation engineer helping farmers cut water consumption by 50-70% with solar-automated micro-drip kits and real-time soil probes."
    },
    {
      id: 5,
      name: "David Kimani",
      farmName: "Sunrise Organic Pastures",
      location: "Boulder, Colorado",
      category: "Fresh Produce & Hydroponics",
      rating: 5.0,
      productsCount: 35,
      experience: "16 Years",
      sales: "5,180+ Orders",
      verified: true,
      image: "assets/images/farmer-5.webp",
      bio: "Pioneer in vertical sustainable agriculture supplying crisp fresh greens, herbs, and turn-key hydroponic kits for local food sovereignty."
    },
    {
      id: 6,
      name: "Maria Gonzalez",
      farmName: "Tierra Sana Botanicals",
      location: "Santa Fe, New Mexico",
      category: "Herbal Care & Animal Feed",
      rating: 4.8,
      productsCount: 22,
      experience: "19 Years",
      sales: "2,150+ Orders",
      verified: true,
      image: "assets/images/farmer-6.webp",
      bio: "Specialist in non-GMO pasture forage blends, mineral licks, and organic companion planting seed mixes."
    }
  ],
  testimonials: [
    {
      name: "Marcus Holloway",
      role: "Commercial Orchardist, WA",
      avatar: "assets/images/user-1.webp",
      rating: 5,
      product: "Solar Drip Irrigation Starter Kit",
      text: "The AquaYield drip kit transformed our 3-acre berry farm. We halved our water bill and saw a 22% increase in fruit size in just one season. Fast delivery and exceptional farmer support!"
    },
    {
      name: "Claire Beauchamp",
      role: "Urban Farm Owner, CA",
      avatar: "assets/images/user-2.webp",
      rating: 5,
      product: "Bio-Enriched Compost & Heirloom Seeds",
      text: "Every seed packet from GreenValley had a 95%+ germination rate. The marketplace makes it so easy to buy direct from real farmers who stand behind their soil science and crop genetics."
    },
    {
      name: "Harrison Vance",
      role: "Organic Vegetable Grower, PA",
      avatar: "assets/images/user-3.webp",
      rating: 5,
      product: "Carbon-Steel Garden Tools & Neem Oil",
      text: "Purchased the hand tools and organic neem spray 6 months ago. The build quality is unmatched and the marketplace checkout was flawless. Highly recommended to every serious farmer."
    }
  ]
};

// 2. CART MANAGER
const AgriCart = {
  getCart() {
    try {
      const items = localStorage.getItem('agri_cart');
      return items ? JSON.parse(items) : [
        { id: 1, quantity: 2 },
        { id: 3, quantity: 1 }
      ];
    } catch (e) {
      return [];
    }
  },
  saveCart(cart) {
    localStorage.setItem('agri_cart', JSON.stringify(cart));
    this.updateBadges();
  },
  addItem(productId, qty = 1) {
    let cart = this.getCart();
    const existing = cart.find(item => item.id === Number(productId));
    if (existing) {
      existing.quantity += qty;
    } else {
      cart.push({ id: Number(productId), quantity: qty });
    }
    this.saveCart(cart);
    const prod = AgriData.products.find(p => p.id === Number(productId));
    showToast(`Added ${prod ? prod.name : 'product'} to cart!`, 'success');
  },
  updateQuantity(productId, qty) {
    let cart = this.getCart();
    const item = cart.find(i => i.id === Number(productId));
    if (item) {
      item.quantity = Math.max(1, qty);
      this.saveCart(cart);
    }
  },
  removeItem(productId) {
    let cart = this.getCart();
    cart = cart.filter(i => i.id !== Number(productId));
    this.saveCart(cart);
    showToast('Item removed from cart', 'info');
  },
  clear() {
    localStorage.removeItem('agri_cart');
    this.updateBadges();
  },
  getCount() {
    return this.getCart().reduce((sum, item) => sum + item.quantity, 0);
  },
  getDetailedItems() {
    const cart = this.getCart();
    return cart.map(item => {
      const prod = AgriData.products.find(p => p.id === item.id) || {
        id: item.id,
        name: 'Agricultural Product',
        price: 25.00,
        seller: 'Verified Seller',
        image: 'assets/images/prod-veg-seeds.webp',
        unit: 'unit'
      };
      return {
        ...prod,
        quantity: item.quantity,
        total: (prod.price * item.quantity).toFixed(2)
      };
    });
  },
  getTotals(discountCode = '') {
    const items = this.getDetailedItems();
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 75 || subtotal === 0 ? 0 : 9.99;
    let discount = 0;
    if (discountCode.trim().toUpperCase() === 'HARVEST10') {
      discount = subtotal * 0.10;
    } else if (discountCode.trim().toUpperCase() === 'FARM20') {
      discount = subtotal * 0.20;
    }
    const total = Math.max(0, subtotal - discount + shipping);
    return {
      subtotal: subtotal.toFixed(2),
      shipping: shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2),
      shippingNum: shipping,
      discount: discount.toFixed(2),
      total: total.toFixed(2),
      count: items.reduce((s, i) => s + i.quantity, 0)
    };
  },
  calculateTotals(discountCode = '') {
    return this.getTotals(discountCode);
  },
  updateBadges() {
    const count = this.getCount();
    document.querySelectorAll('.cart-count-badge').forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });
  },
  updateCartBadges() {
    this.updateBadges();
  }
};

// 3. WISHLIST MANAGER
const AgriWishlist = {
  getWishlist() {
    try {
      const items = localStorage.getItem('agri_wishlist');
      return items ? JSON.parse(items) : [2, 7];
    } catch (e) {
      return [];
    }
  },
  saveWishlist(list) {
    localStorage.setItem('agri_wishlist', JSON.stringify(list));
    this.updateBadges();
  },
  toggle(productId) {
    let list = this.getWishlist();
    const id = Number(productId);
    const prod = AgriData.products.find(p => p.id === id);
    if (list.includes(id)) {
      list = list.filter(item => item !== id);
      this.saveWishlist(list);
      showToast(`Removed ${prod ? prod.name : 'product'} from wishlist`, 'info');
      return false;
    } else {
      list.push(id);
      this.saveWishlist(list);
      showToast(`Saved ${prod ? prod.name : 'product'} to wishlist!`, 'success');
      return true;
    }
  },
  toggleItem(productId) {
    return this.toggle(productId);
  },
  has(productId) {
    return this.getWishlist().includes(Number(productId));
  },
  updateBadges() {
    const count = this.getWishlist().length;
    document.querySelectorAll('.wishlist-count-badge').forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });
    document.querySelectorAll('.btn-wishlist').forEach(btn => {
      const pid = Number(btn.getAttribute('data-id'));
      if (this.has(pid)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
};

// 4. TOAST NOTIFICATIONS
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type === 'error' ? 'toast-error' : ''}`;
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      ${type === 'error' ? '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>' : '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>'}
    </svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// 5. QUICK VIEW MODAL
function openQuickView(productId) {
  const prod = AgriData.products.find(p => p.id === Number(productId));
  if (!prod) return;
  
  let modal = document.getElementById('quickViewModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quickViewModal';
    modal.className = 'modal-backdrop';
    document.body.appendChild(modal);
  }
  
  modal.innerHTML = `
    <div class="modal-dialog">
      <button class="modal-close-btn" onclick="closeModal('quickViewModal')">&times;</button>
      <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 2rem;">
        <div>
          <img src="${prod.image}" alt="${prod.name}" style="width:100%; border-radius:12px; height:320px; object-fit:cover;">
        </div>
        <div>
          <span class="badge-category">${prod.categoryName}</span>
          <h2 style="font-size:1.5rem; margin:0.5rem 0 0.35rem 0;">${prod.name}</h2>
          <div style="font-size:0.85rem; color:var(--gray-600); margin-bottom:0.75rem;">Seller: <a href="farmer-store.html" style="font-weight:700; color:var(--earth-brown);">${prod.seller}</a></div>
          <div style="font-size:1.6rem; font-weight:800; color:var(--forest-green); margin-bottom:0.85rem;">$${prod.price.toFixed(2)} <span style="font-size:0.85rem; color:var(--gray-500); font-weight:normal;">/ ${prod.unit}</span></div>
          <p style="font-size:0.9rem; color:var(--gray-700); margin-bottom:1.25rem;">${prod.description}</p>
          <div style="background:var(--cream-surface); padding:0.75rem 1rem; border-radius:8px; font-size:0.825rem; margin-bottom:1.25rem;">
            <strong>Suitable for:</strong> ${prod.suitableCrops}<br>
            <strong>Origin:</strong> ${prod.origin}
          </div>
          <div style="display:flex; gap:0.75rem;">
            <button class="btn btn-primary" onclick="AgriCart.addItem(${prod.id}); closeModal('quickViewModal');" style="flex:1;">Add to Cart</button>
            <a href="product-details.html" class="btn btn-outline" style="flex:1;">Full Details</a>
          </div>
        </div>
      </div>
    </div>
  `;
  modal.classList.add('active');
  document.body.classList.add('drawer-open');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.classList.remove('drawer-open');
  }
}

// 6. UI INITIALIZER
document.addEventListener('DOMContentLoaded', () => {
  // Sticky Navbar
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile Navigation Drawer
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerBackdrop = document.querySelector('.mobile-drawer-backdrop');
  const drawerCloseBtn = document.querySelector('.mobile-drawer-close');

  function openMobileNav() {
    mobileDrawer?.classList.add('active');
    drawerBackdrop?.classList.add('active');
    hamburgerBtn?.classList.add('active');
    document.body.classList.add('drawer-open');
  }

  function closeMobileNav() {
    mobileDrawer?.classList.remove('active');
    drawerBackdrop?.classList.remove('active');
    hamburgerBtn?.classList.remove('active');
    document.body.classList.remove('drawer-open');
  }

  hamburgerBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (mobileDrawer?.classList.contains('active')) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  drawerCloseBtn?.addEventListener('click', closeMobileNav);
  drawerBackdrop?.addEventListener('click', closeMobileNav);

  document.querySelectorAll('.mobile-drawer-links a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // Global Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileNav();
      closeModal('quickViewModal');
      closeDashboardDrawer();
    }
  });

  // Dashboard Sidebar Drawer
  const dbToggleBtn = document.querySelector('.db-sidebar-toggle');
  const dbSidebar = document.querySelector('.dashboard-sidebar');
  
  function openDashboardDrawer() {
    dbSidebar?.classList.add('active');
    drawerBackdrop?.classList.add('active');
    document.body.classList.add('drawer-open');
  }
  
  function closeDashboardDrawer() {
    dbSidebar?.classList.remove('active');
    if (!mobileDrawer?.classList.contains('active')) {
      drawerBackdrop?.classList.remove('active');
      document.body.classList.remove('drawer-open');
    }
  }

  dbToggleBtn?.addEventListener('click', openDashboardDrawer);
  document.querySelectorAll('.db-nav-item').forEach(link => {
    link.addEventListener('click', closeDashboardDrawer);
  });

  // Number Counter Animation
  const statNumbers = document.querySelectorAll('.stat-num[data-target]');
  if (statNumbers.length > 0) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = Number(entry.target.getAttribute('data-target'));
          const suffix = entry.target.getAttribute('data-suffix') || '';
          let count = 0;
          const step = Math.max(1, Math.ceil(target / 40));
          const updateCount = () => {
            count += step;
            if (count < target) {
              entry.target.innerText = count + suffix;
              requestAnimationFrame(updateCount);
            } else {
              entry.target.innerText = target + suffix;
            }
          };
          updateCount();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statNumbers.forEach(stat => counterObserver.observe(stat));
  }

  // Smooth Scroll Reveal Animation for Cards & Content Modules
  const revealTargets = document.querySelectorAll('.product-card, .category-card, .farmer-card, .quality-pillar-card, .bundle-card-luxury, .step-card, .stat-box, .testimonial-card, .reveal-on-scroll');
  if (revealTargets.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

    revealTargets.forEach((el, index) => {
      el.classList.add('reveal-on-scroll');
      el.style.transitionDelay = `${(index % 4) * 0.08}s`;
      revealObserver.observe(el);
    });
  }

  // Testimonial Slider
  const track = document.querySelector('.testimonial-track');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  const dots = document.querySelectorAll('.slider-dot');
  let currentSlide = 0;
  const totalSlides = dots.length;

  function updateSlider(index) {
    if (!track) return;
    currentSlide = (index + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  prevBtn?.addEventListener('click', () => updateSlider(currentSlide - 1));
  nextBtn?.addEventListener('click', () => updateSlider(currentSlide + 1));
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => updateSlider(i));
  });

  if (track && totalSlides > 1) {
    setInterval(() => updateSlider(currentSlide + 1), 6000);
  }

  // Newsletter Form
  const newsletterForm = document.querySelector('.newsletter-form');
  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const val = emailInput ? emailInput.value.trim() : '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(val)) {
      showToast('Thank you for subscribing to farm updates!', 'success');
      if (emailInput) emailInput.value = '';
    } else {
      showToast('Please enter a valid email address.', 'error');
    }
  });

  // Product Gallery & Zoom
  const mainImage = document.querySelector('.main-product-img');
  const thumbs = document.querySelectorAll('.thumb-item');
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const newSrc = thumb.getAttribute('data-img');
      if (mainImage && newSrc) {
        mainImage.src = newSrc;
      }
    });
  });

  const mainImgContainer = document.querySelector('.main-image-container');
  if (mainImgContainer && mainImage) {
    mainImgContainer.addEventListener('mousemove', (e) => {
      const rect = mainImgContainer.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      mainImage.style.transformOrigin = `${x}% ${y}%`;
      mainImage.style.transform = 'scale(1.4)';
    });
    mainImgContainer.addEventListener('mouseleave', () => {
      mainImage.style.transformOrigin = 'center center';
      mainImage.style.transform = 'scale(1)';
    });
  }

  // Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const pane = document.getElementById(target);
      if (pane) pane.classList.add('active');
    });
  });

  // Farmer Directory Search and Region Filter
  const farmerSearch = document.getElementById('farmerSearchInput');
  const regionBtns = document.querySelectorAll('.filter-region-btn');
  const farmerCards = document.querySelectorAll('#farmersGrid > .card');

  function filterFarmers() {
    const q = (farmerSearch ? farmerSearch.value : '').toLowerCase().trim();
    const activeBtn = document.querySelector('.filter-region-btn.active');
    const region = activeBtn ? activeBtn.textContent.toLowerCase() : 'all';

    farmerCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const matchesSearch = !q || text.includes(q);
      const matchesRegion = region.includes('all') ||
        (region.includes('pacific') && (text.includes('or') || text.includes('wa') || text.includes('oregon') || text.includes('washington'))) ||
        (region.includes('california') && (text.includes('ca') || text.includes('california'))) ||
        (region.includes('midwest') && (text.includes('ia') || text.includes('iowa') || text.includes('midwest') || text.includes('heartland'))) ||
        (region.includes('appalachian') && (text.includes('nc') || text.includes('carolina') || text.includes('appalachian')));

      card.style.display = (matchesSearch && matchesRegion) ? 'flex' : 'none';
    });
  }

  if (farmerSearch) {
    farmerSearch.addEventListener('input', filterFarmers);
  }

  if (regionBtns.length > 0) {
    regionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        regionBtns.forEach(b => {
          b.classList.remove('active', 'btn-primary');
          b.classList.add('btn-outline');
        });
        btn.classList.remove('btn-outline');
        btn.classList.add('active', 'btn-primary');
        filterFarmers();
      });
    });
  }

  // Update Badges
  AgriCart.updateBadges();
  AgriWishlist.updateBadges();
});

// 7. FORM VALIDATION UTILITY
const AgriValidator = {
  isName(name) {
    return typeof name === 'string' && /^[A-Za-z\s'-]{2,50}$/.test(name.trim());
  },
  validateName(name) {
    return this.isName(name);
  },
  isPhone10(mobile) {
    if (typeof mobile !== 'string') return false;
    const clean = mobile.replace(/\D/g, '');
    return clean.length === 10;
  },
  validateMobile(mobile) {
    return this.isPhone10(mobile);
  },
  isEmail(email) {
    return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  },
  validateEmail(email) {
    return this.isEmail(email);
  },
  isPostal(code) {
    return typeof code === 'string' && /^\d{4,10}$/.test(code.trim());
  },
  validatePostal(code) {
    return this.isPostal(code);
  },
  isNotEmpty(val) {
    return typeof val === 'string' && val.trim().length > 0;
  },
  validatePassword(pass) {
    return typeof pass === 'string' && pass.length >= 6;
  },
  showError(element) {
    if (!element) return;
    element.classList.add('is-invalid');
    const parent = element.closest('.form-group') || element.parentElement;
    if (parent) {
      const errorEl = parent.querySelector('.form-error');
      if (errorEl) errorEl.style.display = 'block';
    }
  },
  hideError(element) {
    if (!element) return;
    element.classList.remove('is-invalid');
    const parent = element.closest('.form-group') || element.parentElement;
    if (parent) {
      const errorEl = parent.querySelector('.form-error');
      if (errorEl) errorEl.style.display = 'none';
    }
  },
  setError(fieldId, errorMsg) {
    const input = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}-error`);
    if (input) input.classList.add('is-invalid');
    if (errorEl) {
      errorEl.textContent = errorMsg;
      errorEl.classList.add('active');
    }
  },
  clearError(fieldId) {
    const input = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}-error`);
    if (input) input.classList.remove('is-invalid');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.remove('active');
    }
  },
  initInputFormatters() {
    // 1. Name fields: strictly allow alphabets and spaces only (strip all digits and special chars)
    const nameSelectors = [
      '#regFullName', '#contactName', '#checkoutFullName',
      '#settingFullName', '#setFarmerName'
    ].join(',');
    
    document.querySelectorAll(nameSelectors).forEach(input => {
      input.addEventListener('keydown', (e) => {
        // Allow control keys (backspace, tab, enter, delete, arrows, ctrl/cmd combos)
        if (e.ctrlKey || e.metaKey || e.altKey || ['Backspace', 'Tab', 'Enter', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key)) {
          return;
        }
        // Block numbers and invalid symbols
        if (!/^[A-Za-z\s'-]$/.test(e.key)) {
          e.preventDefault();
        }
      });

      input.addEventListener('input', () => {
        const cleaned = input.value.replace(/[^A-Za-z\s'-]/g, '');
        if (input.value !== cleaned) {
          input.value = cleaned;
        }
        if (input.value.trim().length > 0) {
          if (!AgriValidator.isName(input.value)) {
            AgriValidator.showError(input);
          } else {
            AgriValidator.hideError(input);
          }
        }
      });

      input.addEventListener('paste', (e) => {
        setTimeout(() => {
          input.value = input.value.replace(/[^A-Za-z\s'-]/g, '');
        }, 0);
      });
    });

    // 2. Mobile phone fields: strictly allow digits only, max 10 characters (strip all letters)
    const phoneSelectors = [
      '#regPhone', '#contactPhone', '#checkoutPhone', 'input[type="tel"]'
    ].join(',');

    document.querySelectorAll(phoneSelectors).forEach(input => {
      input.setAttribute('maxlength', '10');
      input.setAttribute('inputmode', 'numeric');
      input.setAttribute('pattern', '[0-9]*');

      input.addEventListener('keydown', (e) => {
        // Allow control keys
        if (e.ctrlKey || e.metaKey || e.altKey || ['Backspace', 'Tab', 'Enter', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key)) {
          return;
        }
        // Block alphabets and non-digits
        if (!/^[0-9]$/.test(e.key)) {
          e.preventDefault();
        }
      });

      input.addEventListener('input', () => {
        const cleaned = input.value.replace(/\D/g, '').slice(0, 10);
        if (input.value !== cleaned) {
          input.value = cleaned;
        }
        if (input.value.trim().length > 0) {
          if (!AgriValidator.isPhone10(input.value)) {
            AgriValidator.showError(input);
          } else {
            AgriValidator.hideError(input);
          }
        }
      });

      input.addEventListener('paste', (e) => {
        setTimeout(() => {
          input.value = input.value.replace(/\D/g, '').slice(0, 10);
        }, 0);
      });
    });
  }
};

// Auto-run input formatters on page readiness
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => AgriValidator.initInputFormatters());
} else {
  AgriValidator.initInputFormatters();
}

// 8. GLOBAL EXPORTS
window.AgriData = AgriData;
window.AgriCart = AgriCart;
window.AgriWishlist = AgriWishlist;
window.AgriToast = { show: (msg, type) => showToast(msg, type) };
window.AgriValidator = AgriValidator;
window.showToast = showToast;
window.openQuickView = openQuickView;
window.closeModal = closeModal;
