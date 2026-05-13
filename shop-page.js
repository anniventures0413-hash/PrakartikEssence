document.querySelector("#pageHeader").innerHTML = peHeader("Shop");

const products = [...window.PE_PRODUCTS, ...window.PE_COMBOS];
const grid = document.querySelector("#shopGrid");
const search = document.querySelector("#shopSearch");
const sort = document.querySelector("#shopSort");

function renderShop() {
  const query = search.value.trim().toLowerCase();
  let items = products.filter((item) =>
    [item.name, item.category, item.note, item.concerns].join(" ").toLowerCase().includes(query),
  );
  if (sort.value === "low") items.sort((a, b) => a.price - b.price);
  if (sort.value === "high") items.sort((a, b) => b.price - a.price);
  if (sort.value === "name") items.sort((a, b) => a.name.localeCompare(b.name));
  grid.innerHTML = items
    .map(
      (item) => `
        <article class="product-card">
          <img class="product-image real-product-image" src="${peImageSvg(item)}" alt="${item.name} image" />
          <div class="product-top"><span class="product-dot" style="background:${item.color}"></span><span class="category">${item.category}</span></div>
          <h3>${item.name}</h3>
          <p>${item.note}</p>
          <div class="tags">${item.concerns.split(", ").map((tag) => `<span>${tag}</span>`).join("")}</div>
          <div class="product-bottom"><div class="price">${peRupee(item.price)} <small>/ ${item.unit}</small></div><a class="add-btn" href="product.html?id=${item.id}">View</a></div>
        </article>`,
    )
    .join("");
}

search.addEventListener("input", renderShop);
sort.addEventListener("change", renderShop);
renderShop();
