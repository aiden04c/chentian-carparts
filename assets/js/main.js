// ── i18n ────────────────────────────────────────────────────────────────────
(function () {
  const TRANSLATIONS = {
    en: {
      "topbar-brand": "Chentian Auto Parts",
      "topbar-video": "Video Inspection",
      "topbar-logistics": "Nationwide Shipping",
      "topbar-docs": "Document Verified",
      "brand-name": "Chentian Auto Parts",
      "brand-sub": "陈田拆车件",
      "nav-about": "About",
      "nav-parts": "Car Parts",
      "nav-cars": "Vehicles",
      "nav-contact": "Contact",
      "nav-cta": "Get Quote",
      "hero-eyebrow": "OEM Salvage Parts · Vehicle Listings · Nationwide Delivery",
      "hero-h1": "Chentian Auto Parts",
      "hero-copy": "Based in Guangzhou Chentian auto parts market, we supply engines, transmissions, lighting, body panels, and chassis components — plus collateral vehicle listings with on-site inspection support.",
      "hero-btn-parts": "Browse Parts",
      "hero-btn-cars": "View Vehicles",
      "strip-years": "Years of Experience",
      "strip-video-title": "Video",
      "strip-video-sub": "On-site Inspection",
      "strip-logistics-title": "Logistics",
      "strip-logistics-sub": "Nationwide Delivery",
      "strip-docs-title": "Verified",
      "strip-docs-sub": "Pre-sale Documentation",
      "about-h2": "About Us",
      "about-p1": "Chentian Auto Parts specializes in salvage part supply, parts sourcing, and collateral vehicle consultations. We aggregate in-stock resources from Chentian and surrounding established auto parts channels, covering Japanese, German, American, domestic new-energy, and commercial vehicle models.",
      "about-p2": "Parts are supported by photos, video, part numbers, and condition verification. Vehicle info is subject to on-site inspection. We recommend verifying vehicle origin, ownership, collateral status, and contract terms before any transaction.",
      "svc1-title": "Salvage Part Supply",
      "svc1-desc": "Engines, transmissions, lights, body panels, chassis, and electrical modules.",
      "svc2-title": "Precision Sourcing",
      "svc2-desc": "Match by model, year, displacement, part number, and real photos.",
      "svc3-title": "Vehicle Listings",
      "svc3-desc": "Consult available vehicles, schedule viewings, and verify documentation.",
      "svc4-title": "Logistics & Delivery",
      "svc4-desc": "Crate packaging, whole-vehicle towing, pickup, or dedicated freight lines.",
      "inventory-h2": "Stock & Vehicle Info",
      "search-label": "Search",
      "search-placeholder": "Model, part, year, keyword…",
      "filter-all": "All",
      "filter-parts": "Parts Only",
      "filter-cars": "Vehicles Only",
      "parts-h2": "Salvage Parts Gallery",
      "parts-cta": "Can't find a part? Send a photo for a quote",
      "parts-empty": "No matching parts found — try a different keyword or contact us directly.",
      "cars-h2": "Vehicle Listings",
      "cars-cta": "Schedule a viewing",
      "cars-notice": "Vehicle listings are for consultation only. Please verify documents, contract terms, ownership, and vehicle condition on-site before any transaction.",
      "cars-empty": "No matching vehicles found — try a different keyword or contact us directly.",
      "contact-h2": "Get in Touch",
      "contact-card-title": "Contact Chentian Auto Parts",
      "contact-card-desc": "Send us the model, year, displacement, last 6 digits of the VIN, a parts photo, or your vehicle requirements — we'll reply with stock photos, condition details, and a quote.",
      "contact-call": "Call Us",
      "contact-sms": "Send Requirements",
      "contact-dt-phone": "Phone",
      "contact-dt-wechat": "WeChat",
      "contact-dt-address": "Address",
      "contact-dt-hours": "Hours",
      "footer-copy": "© YEAR Chentian Auto Parts. Product images are for reference only — actual inventory confirmed on-site or by direct communication.",
      "footer-top": "Back to Top",
      "card-fitment": "Fitment",
      "card-condition": "Condition",
      "card-source": "Source",
      "card-model": "Model",
      "card-v-condition": "Condition",
      "card-docs": "Documents",
      "card-action-parts": "Inquire About Part",
      "card-action-cars": "Inquire About Vehicle",
    },
    zh: {
      "topbar-brand": "广州陈田汽车配件资源",
      "topbar-video": "视频验货",
      "topbar-logistics": "全国物流",
      "topbar-docs": "手续核验",
      "brand-name": "陈田拆车件",
      "brand-sub": "Car Parts & Vehicles",
      "nav-about": "公司背景",
      "nav-parts": "拆车件",
      "nav-cars": "抵押车",
      "nav-contact": "联系方式",
      "nav-cta": "立即询价",
      "hero-eyebrow": "原厂拆车件 · 抵押车信息 · 全国发货",
      "hero-h1": "陈田拆车件",
      "hero-copy": "扎根陈田汽车配件流通圈，提供发动机、变速箱、灯具外观件、底盘悬挂件等拆车件资源，同步展示可咨询的抵押车与准现车信息。",
      "hero-btn-parts": "查看车件",
      "hero-btn-cars": "查看抵押车",
      "strip-years": "行业资源沉淀",
      "strip-video-title": "视频",
      "strip-video-sub": "看货验车",
      "strip-logistics-title": "物流",
      "strip-logistics-sub": "全国发货",
      "strip-docs-title": "手续",
      "strip-docs-sub": "交易前核验",
      "about-h2": "公司背景",
      "about-p1": "陈田拆车件专注汽车拆车件供应、车件调配和抵押车信息咨询。我们从陈田及周边成熟汽配渠道整合现货资源，覆盖日系、德系、美系、国产新能源和商用车型常用件。",
      "about-p2": "车件支持图片、视频、零件号和成色确认；车辆信息以实车、手续和现场核验为准。交易前建议核对车辆来源、权属状态、抵押状态及合同条款。",
      "svc1-title": "拆车件供应",
      "svc1-desc": "发动机总成、变速箱、灯具、钣金、底盘、电器模块等。",
      "svc2-title": "精准找件",
      "svc2-desc": "按车型、年份、排量、零件号和实拍图协助匹配。",
      "svc3-title": "抵押车信息",
      "svc3-desc": "展示可咨询车辆，支持预约看车和手续核验。",
      "svc4-title": "物流交付",
      "svc4-desc": "大件木架、整车拖运、到站自提或专线配送。",
      "inventory-h2": "现货与车辆信息",
      "search-label": "搜索",
      "search-placeholder": "车型、配件、年份、关键词",
      "filter-all": "全部",
      "filter-parts": "只看拆车件",
      "filter-cars": "只看抵押车",
      "parts-h2": "拆车件照片与信息",
      "parts-cta": "找不到配件？发图询价",
      "parts-empty": "暂未匹配到拆车件，请换个关键词或直接联系我们。",
      "cars-h2": "抵押车照片与信息",
      "cars-cta": "预约看车",
      "cars-notice": "抵押车信息仅供咨询展示，交易前请现场核验手续、合同条款、权属状态和车辆状态。",
      "cars-empty": "暂未匹配到车辆，请换个关键词或直接联系我们。",
      "contact-h2": "公司联系方式",
      "contact-card-title": "联系陈田拆车件",
      "contact-card-desc": "发车型、年份、排量、车架号后 6 位、零件照片或车辆需求，我们会按现货情况回复图片、成色和报价。",
      "contact-call": "电话咨询",
      "contact-sms": "短信发需求",
      "contact-dt-phone": "电话",
      "contact-dt-wechat": "微信",
      "contact-dt-address": "地址",
      "contact-dt-hours": "营业时间",
      "footer-copy": "© YEAR 陈田拆车件. 页面图片为占位素材，实际库存以现场和沟通确认为准。",
      "footer-top": "返回顶部",
      "card-fitment": "适配",
      "card-condition": "成色",
      "card-source": "来源",
      "card-model": "车型",
      "card-v-condition": "车况",
      "card-docs": "手续",
      "card-action-parts": "询问此配件",
      "card-action-cars": "咨询此车辆",
    },
  };

  let currentLang = "en";

  function applyLang(lang) {
    const t = TRANSLATIONS[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (!t[key]) return;
      if (key === "footer-copy") {
        el.innerHTML = t[key].replace("YEAR", `<span id="year"></span>`);
        const yr = el.querySelector("#year");
        if (yr) yr.textContent = new Date().getFullYear();
      } else {
        el.textContent = t[key];
      }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (t[key]) el.placeholder = t[key];
    });
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    const btn = document.getElementById("lang-toggle");
    if (btn) btn.textContent = lang === "en" ? "中文" : "EN";
    currentLang = lang;
  }

  window.CT_T = (key) => TRANSLATIONS[currentLang][key] || key;

  applyLang("en");
  document.getElementById("lang-toggle").addEventListener("click", () => {
    applyLang(currentLang === "en" ? "zh" : "en");
    if (typeof window.CT_RERENDER === "function") window.CT_RERENDER();
  });
})();

// ── Hamburger menu ───────────────────────────────────────────────────────────
(function () {
  const btn = document.getElementById("hamburger");
  const menu = document.querySelector(".header-right");
  if (!btn || !menu) return;

  function close() {
    menu.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = "&#9776;";
  }

  btn.addEventListener("click", () => {
    const opening = !menu.classList.contains("is-open");
    if (opening) {
      menu.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
      btn.innerHTML = "&#10005;";
    } else {
      close();
    }
  });

  // Close when any nav link or CTA is tapped
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));

  // Close when tapping outside the header
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".site-header")) close();
  });
})();

// ── Carousel ─────────────────────────────────────────────────────────────────
(function () {
  const carousel = document.getElementById("about-carousel");
  if (!carousel) return;

  const slides = carousel.querySelectorAll(".carousel-slide");
  const dots = carousel.querySelectorAll(".carousel-dot");
  let idx = 0;

  function goTo(n) {
    slides[idx].classList.remove("active");
    dots[idx].classList.remove("active");
    idx = (n + slides.length) % slides.length;
    slides[idx].classList.add("active");
    dots[idx].classList.add("active");
  }

  carousel.querySelector(".carousel-btn--prev").addEventListener("click", () => goTo(idx - 1));
  carousel.querySelector(".carousel-btn--next").addEventListener("click", () => goTo(idx + 1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => goTo(i)));
})();

// ── Main app ─────────────────────────────────────────────────────────────────
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
    const t = window.CT_T || ((k) => k);
    if (item.type === "parts") {
      return [
        [t("card-fitment"), item.fitment],
        [t("card-condition"), item.condition],
        [t("card-source"), item.source],
      ];
    }
    return [
      [t("card-model"), item.model],
      [t("card-v-condition"), item.condition],
      [t("card-docs"), item.status],
    ];
  }

  function cardTemplate(item) {
    const t = window.CT_T || ((k) => k);
    const rows = metaRows(item)
      .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
      .join("");

    const tags = item.tags.map((tag) => `<span>${tag}</span>`).join("");
    const action = item.type === "parts" ? t("card-action-parts") : t("card-action-cars");

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

  window.CT_RERENDER = render;

  renderContact();
  bindFilters();
  render();
})();
