document.querySelector("#pageHeader").innerHTML = peHeader("Shop");

const params = new URLSearchParams(location.search);
const id = params.get("id") || "neem";
const items = [...window.PE_PRODUCTS, ...window.PE_COMBOS];
const item = items.find((entry) => entry.id === id) || items[0];
const related = items.filter((entry) => entry.id !== item.id && entry.category === item.category).slice(0, 3);

document.title = `${item.name} | Prakartik Essence`;
document.querySelector("#productDetail").innerHTML = `
  <section class="inner-hero product-detail-hero">
    <div>
      <p class="eyebrow">${item.category}</p>
      <h1>${item.name}</h1>
      <p>${item.note}</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="https://wa.me/918077876739?text=${encodeURIComponent(`Hi Prakartik Essence, I want to enquire about ${item.name}.`)}" target="_blank" rel="noopener">Enquire on WhatsApp</a>
        <a class="btn btn-secondary" href="shop.html">Back to Shop</a>
      </div>
    </div>
    <img class="real-product-image" src="${peImageSvg(item)}" alt="${item.name} product image" />
  </section>
  <section class="detail-page-grid">
    <article><span>Price</span><strong>${peRupee(item.price)} / ${item.unit}</strong></article>
    <article><span>Benefits</span><p>${item.benefits}</p></article>
    <article><span>How to use</span><p>${item.usage}</p></article>
    <article><span>Best paired with</span><p>${item.pairs}</p></article>
    <article><span>Concern tags</span><p>${item.concerns}</p></article>
    <article><span>Safety note</span><p>Patch test before use. Avoid contact with eyes. Stop use if irritation occurs.</p></article>
  </section>
  <section class="section">
    <div class="section-heading"><p class="eyebrow">Related products</p><h2>You may also like.</h2></div>
    <div class="product-grid">
      ${related
        .map(
          (entry) => `<article class="product-card"><img class="product-image real-product-image" src="${peImageSvg(entry)}" alt="${entry.name} image" /><h3>${entry.name}</h3><p>${entry.note}</p><a class="quick-view" href="product.html?id=${entry.id}">View Details</a></article>`,
        )
        .join("")}
    </div>
  </section>
`;
