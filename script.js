const baseProducts = [
  product("neem", "Neem", 45, "50gm", "Skin Care", "#446b45", "Face pack and scalp care", ["Dandruff", "Face Pack"], "Helps with purifying face packs and scalp-care routines.", "Mix with water, curd, or rose water. Apply briefly and rinse.", "Tulsi, Mulethi, Multani Mitti", "assets/products/neem-powder.png"),
  product("tulsi", "Tulsi", 60, "50gm", "Skin Care", "#568c55", "Herbal face care", ["Face Pack", "Dandruff"], "Useful in herbal skin and scalp routines.", "Mix into a smooth paste and apply after patch testing.", "Neem, Mulethi", "assets/products/tulsi-powder.png"),
  product("amla", "Amla", 45, "50gm", "Hair Care", "#8b9d3f", "Hair care routines", ["Hair Fall"], "Traditional ingredient for hair strength and shine routines.", "Use in a hair pack or blend with Reetha and Shikakai.", "Reetha, Shikakai, Bhringraj", "assets/products/amla-powder.png"),
  product("reetha", "Reetha", 45, "50gm", "Hair Care", "#8a6042", "Natural cleanser", ["Hair Fall"], "Traditional natural cleanser for hair wash mixes.", "Blend with Shikakai and Amla for a wash powder.", "Amla, Shikakai", "assets/products/reetha-powder.png"),
  product("shikakai", "Shikakai", 45, "50gm", "Hair Care", "#9a6b3e", "Traditional hair wash", ["Hair Fall"], "Classic hair wash ingredient for gentle cleansing.", "Mix with Reetha and Amla, then rinse thoroughly.", "Amla, Reetha", "assets/products/shikakai-powder.png"),
  product("bhrami", "Bhrami", 80, "50gm", "Hair Care", "#527b4a", "Hair and scalp care", ["Hair Fall"], "Popular in scalp-care and hair pack routines.", "Add to hair masks with water or aloe gel.", "Bhringraj, Amla", "assets/products/bhrami-powder.png"),
  product("bhrangraj", "Bhringraj", 60, "50gm", "Hair Care", "#315b3b", "Hair care ingredient", ["Hair Fall"], "Traditional hair-care powder for strengthening routines.", "Use in a weekly hair pack with Amla or Hibiscus.", "Amla, Hibiscus", "assets/products/bhringraj-powder.png"),
  product("methi", "Methi", 35, "50gm", "Hair Care", "#c69a3d", "Hair mask routines", ["Dandruff", "Hair Fall"], "Often used in softening hair masks.", "Soak or mix as powder into a paste and rinse well.", "Amla, Hibiscus", "assets/products/methi-powder.png"),
  product("moringa", "Moringa", 80, "50gm", "Herbal", "#5f8a40", "Herbal powder", ["Glow"], "Nutrient-rich herbal powder for natural routines.", "Use in small amounts in face or hair packs.", "Tulsi, Neem", "assets/products/moringa-powder.png"),
  product("hibiscus-flower", "Hibiscus Flower Powder", 120, "50gm", "Floral", "#b6415b", "Hair and floral care", ["Hair Fall", "Floral"], "Floral powder used in hair masks and softening routines.", "Mix with Amla or Bhringraj for hair packs.", "Amla, Bhringraj", "assets/products/hibiscus-flower-powder.png"),
  product("hibiscus-leaves", "Hibiscus Dried Leaves", 100, "50gm", "Floral", "#7d3d50", "Dried botanical", ["Hair Fall", "Floral"], "Dried botanical for herbal preparations.", "Crush or steep as needed for the routine.", "Hibiscus Flower Powder", "assets/products/hibiscus-dried-leaves.png"),
  product("rose-leaves", "Dry Rose Leaves", 80, "50gm", "Floral", "#c36a78", "Floral care", ["Glow", "Floral"], "Floral ingredient for refreshing skin-care routines.", "Use crushed petals in face packs or bath blends.", "Gulab Jal, Mulethi", "assets/products/dry-rose-leaves.png"),
  product("orange-peel", "Orange Peel Powder", 40, "50gm", "Skin Care", "#dc8435", "Face pack ingredient", ["Glow", "Face Pack"], "Brightening-style ingredient for face packs.", "Mix with rose water or curd, then rinse before fully dry.", "Multani Mitti, Gulab Jal", "assets/products/orange-peel-powder.png"),
  product("multani-mitti", "Multani Mitti Powder", 60, "50gm", "Skin Care", "#b99562", "Clay face pack", ["Face Pack", "Glow"], "Classic clay base for face packs.", "Mix with rose water for a smooth paste.", "Gulab Jal, Neem", "assets/products/multani-mitti-powder.png"),
  product("mulethi", "Mulethi Powder", 80, "50gm", "Skin Care", "#d0a856", "Skin care routines", ["Glow", "Face Pack"], "Popular powder for glow-focused face packs.", "Use with rose water or other face pack bases.", "Tulsi, Neem, Rose", "assets/products/mulethi-powder.png"),
  product("rosemary", "Rosemary Leaves", 150, "50gm", "Herbal", "#456e67", "Herbal care", ["Hair Fall"], "Premium herbal ingredient for hair-care routines.", "Use in hair masks or herbal preparations.", "Bhringraj, Amla", "assets/products/rosemary-leaves.png"),
  product("alsi", "Alsi", 35, "50gm", "Herbal", "#b1704a", "Natural powder", ["Hair Fall"], "Natural ingredient used in softening routines.", "Use carefully in blends for texture and slip.", "Methi, Amla", "assets/products/alsi-powder.png"),
  product("beetroot", "Beetroot Powder", 70, "50gm", "Skin Care", "#9b2345", "Natural color and care", ["Glow"], "Adds natural color and freshness to skin-care blends.", "Use a small amount in face packs.", "Rose, Mulethi", "assets/products/beetroot-powder.png"),
  product("gulab-jal", "Gulab Jal", 50, "50ml", "Floral", "#d78a98", "Rose water", ["Glow", "Floral"], "Cooling floral water for face packs.", "Use as the liquid base for powders.", "Multani Mitti, Rose Leaves", "assets/products/gulab-jal.png"),
  product("cucumber", "Cucumber Powder", 70, "50gm", "Skin Care", "#7aa66a", "Cooling face care", ["Face Pack", "Glow"], "Cooling-style powder for refreshing face packs.", "Mix with rose water or plain water.", "Multani Mitti, Mulethi", "assets/products/cucumber-powder.png"),
];

const combos = [
  combo("hair-strength-blend", "Hair Strength Blend", "Amla + Reetha + Shikakai + Bhringraj + Hibiscus", 80, "#6b7740", "Traditional mix for hair wash and care routines.", ["Hair Fall"], "assets/products/hair-strength-blend.png"),
  combo("clear-skin-blend", "Clear Skin Blend", "Tulsi + Neem + Mulethi", 70, "#537d55", "Herbal blend for simple face pack routines.", ["Face Pack", "Glow"], "assets/products/clear-skin-blend.png"),
  combo("dried-botanicals", "Dried Botanicals", "Dried Leaves", 90, "#ad5363", "Natural dried leaves for herbal preparations.", ["Floral"], "assets/products/dried-leaves.png"),
];

function product(id, name, price, unit, category, color, note, concerns, benefits, usage, pairs, image = "") {
  return { id, name, price, unit, category, color, note, concerns, benefits, usage, pairs, image, type: "product" };
}

function combo(id, label, name, price, color, note, concerns, image = "") {
  return {
    id,
    label,
    name,
    price,
    unit: "50gm",
    category: "Combo",
    color,
    note,
    concerns,
    benefits: "Ready blend for customers who want a simple starting point.",
    usage: "Use as a routine mix after patch testing.",
    pairs: "Gulab Jal, water, or curd depending on routine.",
    image,
    type: "combo",
  };
}

const els = {
  grid: document.querySelector("#productGrid"),
  comboGrid: document.querySelector("#comboGrid"),
  search: document.querySelector("#productSearch"),
  sort: document.querySelector("#sortProducts"),
  filters: document.querySelectorAll(".filter-btn"),
  concerns: document.querySelectorAll(".concern-btn"),
  cartDrawer: document.querySelector("#cartDrawer"),
  openCart: document.querySelector("#openCart"),
  closeCart: document.querySelector("#closeCart"),
  backdrop: document.querySelector("#drawerBackdrop"),
  cartCount: document.querySelector("#cartCount"),
  orderItems: document.querySelector("#orderItems"),
  orderTotal: document.querySelector("#orderTotal"),
  deliveryZone: document.querySelector("#deliveryZone"),
  discountNote: document.querySelector("#discountNote"),
  whatsapp: document.querySelector("#whatsappOrder"),
  copy: document.querySelector("#copyOrder"),
  clear: document.querySelector("#clearOrder"),
  modal: document.querySelector("#productModal"),
  modalBackdrop: document.querySelector("#modalBackdrop"),
  closeModal: document.querySelector("#closeModal"),
  modalImage: document.querySelector("#modalImage"),
  modalCategory: document.querySelector("#modalCategory"),
  modalTitle: document.querySelector("#modalTitle"),
  modalNote: document.querySelector("#modalNote"),
  modalBenefits: document.querySelector("#modalBenefits"),
  modalUsage: document.querySelector("#modalUsage"),
  modalPairs: document.querySelector("#modalPairs"),
  modalPack: document.querySelector("#modalPack"),
  modalAdd: document.querySelector("#modalAdd"),
  quizConcern: document.querySelector("#quizConcern"),
  quizBudget: document.querySelector("#quizBudget"),
  runQuiz: document.querySelector("#runQuiz"),
  recommendations: document.querySelector("#recommendations"),
  download: document.querySelector("#downloadPriceList"),
  language: document.querySelector("#languageToggle"),
};

const state = {
  filter: "all",
  concern: "all",
  search: "",
  sort: "featured",
  cart: loadMap("pe-cart"),
  favorites: new Set(JSON.parse(localStorage.getItem("pe-favorites") || "[]")),
  modalItemId: null,
  lang: localStorage.getItem("pe-lang") || "en",
};

const whatsappNumber = "918077876739";
const packMultipliers = [
  { label: "50gm", liquid: "50ml", multiplier: 1 },
  { label: "100gm", liquid: "100ml", multiplier: 2 },
  { label: "250gm", liquid: "250ml", multiplier: 5 },
];

const copy = {
  en: {
    heroTitle: "Pure botanicals for everyday care.",
    heroText: "Prakartik Essence brings together herbal powders, dried leaves, floral ingredients, and ready blends for simple routines rooted in nature.",
    exploreProducts: "Explore Products",
    buildRoutine: "Build My Routine",
    navShop: "Shop",
    navCombos: "Combos",
    navQuiz: "Quiz",
    navGuide: "Guide",
    navContact: "Contact",
    heroEyebrow: "Natural hair care, skin care, and herbal routines",
    tagline: "Natural powders and botanicals",
    brand: "Prakartik Essence",
  },
  hi: {
    heroTitle: "हर दिन की देखभाल के लिए प्राकृतिक सामग्री.",
    heroText: "प्राकृतिक पाउडर, सूखे पत्ते, फूलों की सामग्री और आसान हर्बल ब्लेंड.",
    exploreProducts: "Products देखें",
    buildRoutine: "Routine बनाएं",
    navShop: "Shop",
    navCombos: "Combos",
    navQuiz: "Quiz",
    navGuide: "Guide",
    navContact: "Contact",
    heroEyebrow: "Natural hair care, skin care, and herbal routines",
    tagline: "Natural powders and botanicals",
    brand: "Prakartik Essence",
  },
};

function getProducts() {
  return baseProducts.map((item) => ({ ...item }));
}

function allItems() {
  return [...getProducts(), ...combos.map((item) => ({ ...item }))];
}

function findItem(id) {
  return allItems().find((item) => item.id === id);
}

function rupee(amount) {
  return `&#8377;${amount}`;
}

function plainRupee(amount) {
  return `Rs. ${amount}`;
}

function imageSvg(item, label = item.name) {
  if (item.image) return item.image;
  const isLiquid = item.unit.includes("ml");
  const petal = item.category === "Floral";
  const title = escapeXml(label.split(" ").slice(0, 3).join(" "));
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 300">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#fff8eb"/><stop offset="1" stop-color="#edf4e9"/>
        </linearGradient>
        <radialGradient id="powder" cx="50%" cy="45%" r="55%">
          <stop offset="0" stop-color="${lighten(item.color, 38)}"/><stop offset="1" stop-color="${item.color}"/>
        </radialGradient>
      </defs>
      <rect width="420" height="300" rx="22" fill="url(#bg)"/>
      <circle cx="70" cy="65" r="34" fill="${lighten(item.color, 55)}" opacity=".55"/>
      <circle cx="345" cy="235" r="46" fill="${lighten(item.color, 48)}" opacity=".42"/>
      ${isLiquid ? bottleShape(item.color) : bowlShape(item.color)}
      ${petal ? petals(item.color) : leaves(item.color)}
      <text x="210" y="262" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="800" fill="#213026">${title}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function bowlShape(color) {
  return `
    <ellipse cx="210" cy="170" rx="110" ry="28" fill="#8f6648" opacity=".28"/>
    <path d="M105 130h210c-7 72-48 105-105 105s-98-33-105-105z" fill="#c99b63"/>
    <ellipse cx="210" cy="130" rx="105" ry="34" fill="#e4c28b"/>
    <ellipse cx="210" cy="124" rx="82" ry="24" fill="url(#powder)"/>
    <circle cx="178" cy="115" r="9" fill="${lighten(color, 30)}" opacity=".85"/>
    <circle cx="232" cy="119" r="7" fill="${lighten(color, 25)}" opacity=".75"/>
    <circle cx="205" cy="107" r="5" fill="#fff" opacity=".22"/>`;
}

function bottleShape(color) {
  return `
    <ellipse cx="210" cy="225" rx="68" ry="18" fill="#8f6648" opacity=".22"/>
    <rect x="174" y="84" width="72" height="142" rx="24" fill="#f7dce1" stroke="${color}" stroke-width="5"/>
    <rect x="190" y="54" width="40" height="42" rx="10" fill="${color}"/>
    <rect x="183" y="132" width="54" height="56" rx="10" fill="#fff" opacity=".72"/>
    <text x="210" y="166" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="800" fill="${color}">GULAB</text>`;
}

function leaves(color) {
  return `
    <path d="M92 104c50-24 76 12 80 34-42 8-72-5-80-34z" fill="${lighten(color, 20)}"/>
    <path d="M324 95c-47-12-70 20-74 45 39 2 67-15 74-45z" fill="${lighten(color, 12)}"/>
    <path d="M90 104c32 11 58 19 83 34" stroke="#fff" stroke-width="4" opacity=".55"/>
    <path d="M324 95c-29 18-49 30-74 45" stroke="#fff" stroke-width="4" opacity=".55"/>`;
}

function petals(color) {
  return `
    <g transform="translate(88 78)">
      <ellipse cx="20" cy="42" rx="18" ry="34" fill="${lighten(color, 14)}" transform="rotate(-32 20 42)"/>
      <ellipse cx="58" cy="36" rx="20" ry="35" fill="${lighten(color, 30)}" transform="rotate(24 58 36)"/>
      <ellipse cx="42" cy="66" rx="22" ry="32" fill="${color}" transform="rotate(76 42 66)"/>
    </g>
    <g transform="translate(285 68) scale(.75)">
      <ellipse cx="20" cy="42" rx="18" ry="34" fill="${lighten(color, 14)}" transform="rotate(-32 20 42)"/>
      <ellipse cx="58" cy="36" rx="20" ry="35" fill="${lighten(color, 30)}" transform="rotate(24 58 36)"/>
      <ellipse cx="42" cy="66" rx="22" ry="32" fill="${color}" transform="rotate(76 42 66)"/>
    </g>`;
}

function lighten(hex, amount) {
  const raw = hex.replace("#", "");
  const num = parseInt(raw, 16);
  const r = Math.min(255, (num >> 16) + amount);
  const g = Math.min(255, ((num >> 8) & 255) + amount);
  const b = Math.min(255, (num & 255) + amount);
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
}

function escapeXml(value) {
  return value.replace(/[<>&"']/g, (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" }[char]));
}

function renderProducts() {
  let items = getProducts().filter((item) => {
    const matchesFilter =
      state.filter === "all" ||
      item.category === state.filter ||
      (state.filter === "favorites" && state.favorites.has(item.id));
    const matchesConcern = state.concern === "all" || item.concerns.includes(state.concern);
    const matchesSearch =
      item.name.toLowerCase().includes(state.search) ||
      item.category.toLowerCase().includes(state.search) ||
      item.concerns.join(" ").toLowerCase().includes(state.search);
    return matchesFilter && matchesConcern && matchesSearch;
  });

  items = sortItems(items);

  if (!items.length) {
    els.grid.innerHTML = `<div class="empty-state">No products match this selection.</div>`;
    return;
  }

  els.grid.innerHTML = items.map(productCard).join("");
}

function sortItems(items) {
  return [...items].sort((a, b) => {
    if (state.sort === "priceLow") return a.price - b.price;
    if (state.sort === "priceHigh") return b.price - a.price;
    if (state.sort === "name") return a.name.localeCompare(b.name);
    return baseProducts.findIndex((item) => item.id === a.id) - baseProducts.findIndex((item) => item.id === b.id);
  });
}

function productCard(item) {
  const isFav = state.favorites.has(item.id);
  return `
    <article class="product-card">
      <button class="favorite-btn ${isFav ? "active" : ""}" type="button" data-fav="${item.id}" title="Favorite">${isFav ? "♥" : "♡"}</button>
      <img class="product-image ${item.image ? "real-product-image" : ""}" src="${imageSvg(item)}" alt="${item.name} product image" />
      <div class="product-top">
        <span class="product-dot" style="background:${item.color}; box-shadow:0 0 0 6px ${item.color}1c"></span>
        <span class="category">${item.category}</span>
      </div>
      <h3>${item.name}</h3>
      <p>${item.note}</p>
      <div class="tags">${item.concerns.map((tag) => `<span>${tag}</span>`).join("")}</div>
      <div class="product-bottom">
        <div class="price">${rupee(item.price)} <small>/ ${item.unit}</small></div>
        <button class="add-btn" type="button" data-add="${item.id}">Add</button>
      </div>
      <div class="card-actions">
        <button class="quick-view" type="button" data-view="${item.id}">Quick view</button>
        <a class="quick-view" href="product.html?id=${item.id}">Details</a>
      </div>
    </article>`;
}

function renderCombos() {
  els.comboGrid.innerHTML = combos
    .map(
      (item) => `
        <article class="combo-card">
          <img class="combo-image" src="${imageSvg(item, item.label)}" alt="${item.label} image" />
          <span>${item.label}</span>
          <h3>${item.name}</h3>
          <p>${item.note}</p>
          <button class="combo-add" type="button" data-add="${item.id}">Add ${rupee(item.price)}</button>
        </article>`,
    )
    .join("");
}

function addToCart(id, pack = defaultPack(findItem(id)), quantity = 1) {
  const item = findItem(id);
  if (!item) return;
  const key = `${id}:${pack.label}`;
  const current = state.cart.get(key);
  state.cart.set(key, {
    key,
    id,
    pack,
    quantity: current ? current.quantity + quantity : quantity,
  });
  saveCart();
  renderCart();
  openCart();
}

function defaultPack(item) {
  const option = packMultipliers[0];
  return {
    label: item.unit.includes("ml") ? option.liquid : option.label,
    multiplier: option.multiplier,
  };
}

function renderCart() {
  const rows = Array.from(state.cart.values());
  const subtotal = rows.reduce((sum, row) => {
    const item = findItem(row.id);
    return sum + (item ? item.price * row.pack.multiplier * row.quantity : 0);
  }, 0);
  const discount = subtotal >= 500 ? Math.round(subtotal * 0.05) : 0;
  const delivery = Number(els.deliveryZone.value || 0);
  const total = Math.max(0, subtotal - discount + delivery);

  els.cartCount.textContent = rows.reduce((sum, row) => sum + row.quantity, 0);
  els.orderTotal.innerHTML = rupee(total);
  els.discountNote.textContent = discount ? `Bulk discount applied: ${plainRupee(discount)} off` : "Add products worth Rs. 500 for a 5% bulk discount estimate.";
  els.whatsapp.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildOrderSummary())}`;

  if (!rows.length) {
    els.orderItems.innerHTML = `<div class="empty-order">Your cart is empty.</div>`;
    return;
  }

  els.orderItems.innerHTML = rows
    .map((row) => {
      const item = findItem(row.id);
      if (!item) return "";
      const lineTotal = item.price * row.pack.multiplier * row.quantity;
      return `
        <div class="order-row">
          <img class="${item.image ? "real-product-image" : ""}" src="${imageSvg(item)}" alt="${item.name} image" />
          <div>
            <strong>${item.name}</strong>
            <span>${row.pack.label} - ${plainRupee(lineTotal)}</span>
          </div>
          <div class="qty-controls">
            <button type="button" data-qty="${row.key}" data-change="-1">-</button>
            <span>${row.quantity}</span>
            <button type="button" data-qty="${row.key}" data-change="1">+</button>
          </div>
        </div>`;
    })
    .join("");
}

function updateQuantity(key, change) {
  const row = state.cart.get(key);
  if (!row) return;
  const next = row.quantity + change;
  if (next <= 0) state.cart.delete(key);
  else state.cart.set(key, { ...row, quantity: next });
  saveCart();
  renderCart();
}

function buildOrderSummary() {
  const rows = Array.from(state.cart.values());
  if (!rows.length) return "Hi Prakartik Essence, I want to enquire about your natural powders.";

  const lines = rows.map((row, index) => {
    const item = findItem(row.id);
    const lineTotal = item.price * row.pack.multiplier * row.quantity;
    return `${index + 1}. ${item.name} - ${row.quantity} x ${row.pack.label} - ${plainRupee(lineTotal)}`;
  });
  const subtotal = rows.reduce((sum, row) => sum + findItem(row.id).price * row.pack.multiplier * row.quantity, 0);
  const discount = subtotal >= 500 ? Math.round(subtotal * 0.05) : 0;
  const delivery = Number(els.deliveryZone.value || 0);
  const total = Math.max(0, subtotal - discount + delivery);

  return [
    "Hi Prakartik Essence, I want to place an order enquiry:",
    "",
    ...lines,
    "",
    `Subtotal: ${plainRupee(subtotal)}`,
    `Discount: ${plainRupee(discount)}`,
    `Delivery estimate: ${plainRupee(delivery)}`,
    `Estimated total: ${plainRupee(total)}`,
    "",
    "Please confirm availability and delivery details.",
  ].join("\n");
}

function openCart() {
  els.cartDrawer.classList.add("open");
  els.cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  els.cartDrawer.classList.remove("open");
  els.cartDrawer.setAttribute("aria-hidden", "true");
}

function openModal(id) {
  const item = findItem(id);
  if (!item) return;
  state.modalItemId = id;
  els.modalImage.src = imageSvg(item);
  els.modalImage.alt = `${item.name} product image`;
  els.modalCategory.textContent = item.category;
  els.modalTitle.textContent = item.name;
  els.modalNote.textContent = `${item.note} - ${plainRupee(item.price)} / ${item.unit}`;
  els.modalBenefits.textContent = item.benefits;
  els.modalUsage.textContent = item.usage;
  els.modalPairs.textContent = item.pairs;
  els.modalPack.innerHTML = packMultipliers
    .map((pack) => {
      const label = item.unit.includes("ml") ? pack.liquid : pack.label;
      return `<option value="${pack.multiplier}" data-label="${label}">${label} - ${plainRupee(item.price * pack.multiplier)}</option>`;
    })
    .join("");
  els.modal.classList.add("open");
  els.modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  els.modal.classList.remove("open");
  els.modal.setAttribute("aria-hidden", "true");
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) state.favorites.delete(id);
  else state.favorites.add(id);
  localStorage.setItem("pe-favorites", JSON.stringify(Array.from(state.favorites)));
  renderProducts();
}

function runQuiz() {
  const concern = els.quizConcern.value;
  const budget = Number(els.quizBudget.value);
  let total = 0;
  const picks = getProducts().filter((item) => item.concerns.includes(concern)).filter((item) => {
    if (total + item.price <= budget) {
      total += item.price;
      return true;
    }
    return false;
  });

  els.recommendations.innerHTML = picks.length
    ? picks
        .map(
          (item) => `
            <article class="recommend-card">
              <img src="${imageSvg(item)}" alt="${item.name} product image" />
              <div>
                <strong>${item.name}</strong>
                <span>${plainRupee(item.price)} / ${item.unit}</span>
              </div>
              <button class="add-btn" type="button" data-add="${item.id}">Add</button>
            </article>`,
        )
        .join("")
    : `<div class="empty-state">No recommendation fits this budget. Try a higher range.</div>`;
}

function downloadPriceList() {
  const lines = [
    "Prakartik Essence Price List",
    "WhatsApp: 8077876739",
    "Instagram: @prakartikessence025",
    "",
    ...allItems().map((item) => `${item.name} - ${plainRupee(item.price)} / ${item.unit}`),
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "prakartik-essence-price-list.txt";
  link.click();
  URL.revokeObjectURL(link.href);
}

function loadMap(key) {
  return new Map(JSON.parse(localStorage.getItem(key) || "[]"));
}

function saveCart() {
  localStorage.setItem("pe-cart", JSON.stringify(Array.from(state.cart.entries())));
}

function applyLanguage() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = copy[state.lang][node.dataset.i18n] || copy.en[node.dataset.i18n] || node.textContent;
  });
  els.language.textContent = state.lang === "en" ? "HI" : "EN";
  localStorage.setItem("pe-lang", state.lang);
}

function wireEvents() {
  els.search.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    renderProducts();
  });
  els.sort.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderProducts();
  });
  els.filters.forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      els.filters.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderProducts();
    });
  });
  els.concerns.forEach((button) => {
    button.addEventListener("click", () => {
      state.concern = button.dataset.concern;
      els.concerns.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderProducts();
    });
  });
  document.body.addEventListener("click", (event) => {
    const add = event.target.closest("[data-add]");
    const view = event.target.closest("[data-view]");
    const fav = event.target.closest("[data-fav]");
    if (add) addToCart(add.dataset.add);
    if (view) openModal(view.dataset.view);
    if (fav) toggleFavorite(fav.dataset.fav);
  });
  els.orderItems.addEventListener("click", (event) => {
    const button = event.target.closest("[data-qty]");
    if (button) updateQuantity(button.dataset.qty, Number(button.dataset.change));
  });
  els.openCart.addEventListener("click", openCart);
  els.closeCart.addEventListener("click", closeCart);
  els.backdrop.addEventListener("click", closeCart);
  els.deliveryZone.addEventListener("change", renderCart);
  els.clear.addEventListener("click", () => {
    state.cart.clear();
    saveCart();
    renderCart();
  });
  els.copy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildOrderSummary());
      els.copy.textContent = "Copied";
    } catch {
      els.copy.textContent = "Copy Not Available";
    }
    window.setTimeout(() => (els.copy.textContent = "Copy Order Summary"), 1400);
  });
  els.closeModal.addEventListener("click", closeModal);
  els.modalBackdrop.addEventListener("click", closeModal);
  els.modalAdd.addEventListener("click", () => {
    const option = els.modalPack.selectedOptions[0];
    addToCart(state.modalItemId, { label: option.dataset.label, multiplier: Number(option.value) });
    closeModal();
  });
  els.runQuiz.addEventListener("click", runQuiz);
  els.recommendations.addEventListener("click", (event) => {
    const add = event.target.closest("[data-add]");
    if (add) addToCart(add.dataset.add);
  });
  els.download.addEventListener("click", downloadPriceList);
  els.language.addEventListener("click", () => {
    state.lang = state.lang === "en" ? "hi" : "en";
    applyLanguage();
  });
}

function initGuideImages() {
  document.querySelector("#guideHairImage").src = imageSvg(findItem("hair-strength-blend"), "Hair Care");
  document.querySelector("#guideSkinImage").src = imageSvg(findItem("clear-skin-blend"), "Face Pack");
  document.querySelector("#guideFloralImage").src = imageSvg(findItem("rose-leaves"), "Floral Care");
}

wireEvents();
applyLanguage();
renderProducts();
renderCombos();
renderCart();
runQuiz();
initGuideImages();
