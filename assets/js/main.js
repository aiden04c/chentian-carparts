(function () {
  const data = window.CHENTIAN_SITE;
  const state = {
    filter: "all",
    query: "",
  };

  const partsGrid = document.querySelector("#parts-grid");
  const carsGrid = document.querySelector("#cars-grid");
  const partsEmpty = document.querySelector("#parts-empty");
  const carsEmpty = document.querySelector("#cars-empty");
  const searchInput = document.querySelector("#stock-search");
  const filterButtons = document.querySelectorAll(".segment-button");

  const contactPhone = document.querySelector("#contact-phone");
  const contactWechat = document.querySelector("#contact-wechat");
  const contactAddress = document.querySelector("#contact-address");
  const contactHours = document.querySelector("#contact-hours");
  const phoneLink = document.querySelector("#phone-link");
  const smsLink = document.querySelector("#sms-link");

  const textFromItem = (item) => Object.values(item).flat().join(" ").toLowerCase();

  function matches(item, type) {
    const typeVisible = state.filter === "all" || state.filter === type;
    const queryVisible = !state.query || textFromItem(item).includes(state.query);
    return typeVisible && queryVisible;
  }

  function metaRows(item) {
    if (item.type === "parts") {
      return [
        ["适配", item.fitment],
        ["成色", item.condition],
        ["来源", item.source],
      ];
    }

    return [
      ["车型", item.model],
      ["车况", item.condition],
      ["手续", item.status],
    ];
  }

  function cardTemplate(item) {
    const rows = metaRows(item)
      .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
      .join("");

    const tags = item.tags.map((tag) => `<span>${tag}</span>`).join("");
    const action = item.type === "parts" ? "询问此配件" : "咨询此车辆";

    return `
      <article class="card">
        <div class="card-media">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
        </div>
        <div class="card-body">
          <div class="card-topline">
            <span class="badge ${item.type}">${item.category}</span>
            <span class="price">${item.price}</span>
          </div>
          <h3>${item.title}</h3>
          <dl class="meta-list">${rows}</dl>
          <div class="tag-row" aria-label="库存标签">${tags}</div>
          <a class="card-action" href="#contact">${action}</a>
        </div>
      </article>
    `;
  }

  function render() {
    const visibleParts = data.parts.filter((item) => matches(item, "parts"));
    const visibleCars = data.cars.filter((item) => matches(item, "cars"));

    partsGrid.innerHTML = visibleParts.map(cardTemplate).join("");
    carsGrid.innerHTML = visibleCars.map(cardTemplate).join("");

    partsEmpty.hidden = visibleParts.length > 0;
    carsEmpty.hidden = visibleCars.length > 0;

    document.querySelector("#parts").hidden = state.filter === "cars" && visibleParts.length === 0;
    document.querySelector("#cars").hidden = state.filter === "parts" && visibleCars.length === 0;
  }

  function bindFilters() {
    searchInput.addEventListener("input", (event) => {
      state.query = event.target.value.trim().toLowerCase();
      render();
    });

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        state.filter = button.dataset.filter;
        filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
        render();
      });
    });
  }

  function renderContact() {
    contactPhone.textContent = data.contact.phone;
    contactWechat.textContent = data.contact.wechat;
    contactAddress.textContent = data.contact.address;
    contactHours.textContent = data.contact.hours;

    phoneLink.href = `tel:${data.contact.phoneHref}`;
    smsLink.href = `sms:${data.contact.phoneHref}`;
  }

  document.querySelector("#year").textContent = new Date().getFullYear();
  renderContact();
  bindFilters();
  render();
})();
