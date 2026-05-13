function peRupee(amount) {
  return `&#8377;${amount}`;
}

function peLighten(hex, amount) {
  const raw = hex.replace("#", "");
  const num = parseInt(raw, 16);
  const r = Math.min(255, (num >> 16) + amount);
  const g = Math.min(255, ((num >> 8) & 255) + amount);
  const b = Math.min(255, (num & 255) + amount);
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
}

function peImageSvg(item, label = item.name) {
  if (item.image) return item.image;
  const safeLabel = label.split(" ").slice(0, 3).join(" ").replace(/[<>&"']/g, "");
  const isLiquid = item.unit.includes("ml");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 300">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#fff8eb"/><stop offset="1" stop-color="#edf4e9"/>
        </linearGradient>
        <radialGradient id="powder" cx="50%" cy="45%" r="55%">
          <stop offset="0" stop-color="${peLighten(item.color, 38)}"/><stop offset="1" stop-color="${item.color}"/>
        </radialGradient>
      </defs>
      <rect width="420" height="300" rx="22" fill="url(#bg)"/>
      <circle cx="70" cy="65" r="34" fill="${peLighten(item.color, 55)}" opacity=".55"/>
      <circle cx="345" cy="235" r="46" fill="${peLighten(item.color, 48)}" opacity=".42"/>
      ${
        isLiquid
          ? `<ellipse cx="210" cy="225" rx="68" ry="18" fill="#8f6648" opacity=".22"/><rect x="174" y="84" width="72" height="142" rx="24" fill="#f7dce1" stroke="${item.color}" stroke-width="5"/><rect x="190" y="54" width="40" height="42" rx="10" fill="${item.color}"/><rect x="183" y="132" width="54" height="56" rx="10" fill="#fff" opacity=".72"/>`
          : `<ellipse cx="210" cy="170" rx="110" ry="28" fill="#8f6648" opacity=".28"/><path d="M105 130h210c-7 72-48 105-105 105s-98-33-105-105z" fill="#c99b63"/><ellipse cx="210" cy="130" rx="105" ry="34" fill="#e4c28b"/><ellipse cx="210" cy="124" rx="82" ry="24" fill="url(#powder)"/>`
      }
      <path d="M92 104c50-24 76 12 80 34-42 8-72-5-80-34z" fill="${peLighten(item.color, 20)}"/>
      <path d="M324 95c-47-12-70 20-74 45 39 2 67-15 74-45z" fill="${peLighten(item.color, 12)}"/>
      <text x="210" y="262" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="800" fill="#213026">${safeLabel}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function peHeader(active = "") {
  const items = [
    ["index.html", "Home"],
    ["shop.html", "Shop"],
    ["about.html", "About"],
    ["guide.html", "Guide"],
    ["policies.html", "Policies"],
    ["contact.html", "Contact"],
  ];
  return `
    <header class="site-header">
      <a class="brand" href="index.html">
        <span class="brand-mark">PE</span>
        <span><strong>Prakartik Essence</strong><small>Natural powders and botanicals</small></span>
      </a>
      <nav class="nav" aria-label="Primary navigation">
        ${items.map(([href, label]) => `<a class="${active === label ? "active" : ""}" href="${href}">${label}</a>`).join("")}
      </nav>
      <div class="header-actions">
        <a class="cart-trigger" href="index.html#products">Order</a>
      </div>
    </header>`;
}

function peContactBlock() {
  return `
    <section class="contact-section inner-contact">
      <div class="section-heading">
        <p class="eyebrow">Contact</p>
        <h2>Ready to order or enquire?</h2>
        <p>Use WhatsApp for orders or write to any official business email.</p>
      </div>
      <div class="contact-layout">
        <div class="contact-card highlight"><span>WhatsApp</span><strong>8077876739</strong><a class="btn btn-primary" href="https://wa.me/918077876739" target="_blank" rel="noopener">Chat on WhatsApp</a></div>
        <div class="contact-card"><span>Instagram</span><strong>@prakartikessence025</strong><a class="btn btn-secondary" href="https://www.instagram.com/prakartikessence025/" target="_blank" rel="noopener">Open Instagram</a></div>
        <div class="email-card"><span>Business emails</span><div class="email-list">
          <a href="mailto:ankit@prakartikessence.com">ankit@prakartikessence.com</a>
          <a href="mailto:nirbhayagarwal@prakartikessence.com">nirbhayagarwal@prakartikessence.com</a>
          <a href="mailto:contact@prakartikessence.com">contact@prakartikessence.com</a>
          <a href="mailto:info@prakartikessence.com">info@prakartikessence.com</a>
          <a href="mailto:support@prakartikessence.com">support@prakartikessence.com</a>
        </div></div>
      </div>
    </section>`;
}
