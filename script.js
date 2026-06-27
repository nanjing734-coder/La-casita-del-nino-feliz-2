const WHATSAPP_NUMBER = "51932038617";
const STORAGE_KEY = "casitaCart2";

const productGroups = [
  {
    id: "bicicletas",
    name: "Bicicletas",
    badge: "Aros 12, 16 y 20",
    art: "bike",
    image: "assets/bicicletas/aro-16.webp",
    summary: "Bicicletas para primeras rutas, paseo diario y regalos por edad.",
    description: "Modelos para diferentes edades, alturas y estilos de uso.",
    models: [
      { id: "aro-12", name: "Bicicleta aro 12", price: 400, tag: "Aro 12", detail: "Bicicleta infantil para primeras rutas, paseo diario y regalos por edad.", image: "assets/bicicletas/aro-12.webp" },
      { id: "aro-16", name: "Bicicleta aro 16", price: 460, tag: "Aro 16", detail: "Bicicleta infantil para primeras rutas, paseo diario y regalos por edad.", image: "assets/bicicletas/aro-16.webp" },
      { id: "aro-20", name: "Bicicleta aro 20", price: 500, tag: "Aro 20", detail: "Bicicleta infantil para primeras rutas, paseo diario y regalos por edad.", image: "assets/bicicletas/aro-20.webp" }
    ]
  },
  {
    id: "carritos-bateria",
    name: "Carro a batería",
    badge: "Eléctrico infantil",
    art: "car",
    image: "assets/carro-bateria.webp",
    summary: "Auto eléctrico para niños con diseño deportivo y detalles de paseo.",
    description: "Auto eléctrico infantil con luces, música, control remoto o accesorios según stock.",
    models: [
      { id: "carro-bateria", name: "Carro a batería infantil", price: 1400, tag: "Eléctrico", detail: "Auto eléctrico para niños con diseño deportivo y detalles de paseo." }
    ]
  },
  {
    id: "triciclos",
    name: "Triciclos",
    badge: "Paseo y aprendizaje",
    art: "trike",
    image: "assets/triciclo.webp",
    summary: "Triciclos firmes para acompañar los primeros paseos.",
    description: "Modelos con canastilla, toldo o guía parental según disponibilidad.",
    models: [
      { id: "triciclo", name: "Triciclo infantil", price: 240, tag: "Paseo", detail: "Triciclo firme para acompañar los primeros paseos." }
    ]
  },
  {
    id: "coches",
    name: "Coches",
    badge: "Bebé y paseo",
    art: "stroller",
    image: "assets/coches.webp",
    summary: "Coches para bebé, plegables y cómodos para el día a día.",
    description: "Alternativas ligeras, tipo cuna o con más accesorios para salidas largas.",
    models: [
      { id: "coche", name: "Coche para bebé", price: 200, tag: "Paseo", detail: "Coche para bebé, plegable y cómodo para el día a día." }
    ]
  },
  {
    id: "scooters",
    name: "Scooters",
    badge: "3 ruedas y plegables",
    art: "scooter",
    image: "assets/scooter.webp",
    summary: "Scooters infantiles para equilibrio, diversión y movimiento.",
    description: "Modelos de 3 ruedas para iniciar y plegables para niños con más práctica.",
    models: [
      { id: "scooter", name: "Scooter infantil", price: 170, tag: "Movimiento", detail: "Scooter infantil para equilibrio, diversión y movimiento." }
    ]
  },
  {
    id: "patines",
    name: "Patines",
    badge: "Ajustables",
    art: "skates",
    image: "assets/patines.webp",
    summary: "Patines infantiles con tallas regulables y diseños coloridos.",
    description: "Opciones para iniciar en patinaje con ruedas firmes y buen ajuste.",
    models: [
      { id: "patines", name: "Patines infantiles", price: 230, tag: "Ajustables", detail: "Patines infantiles con tallas regulables y diseños coloridos." }
    ]
  },
  {
    id: "mesitas-comer",
    name: "Mesitas de comer",
    badge: "Sillas altas",
    art: "highchair",
    image: "assets/mesita-de-comer.webp",
    summary: "Mesitas y sillas de comer para bebé, seguras y fáciles de limpiar.",
    description: "Opciones plegables, con bandeja y altura cómoda para alimentar al bebé.",
    models: [
      { id: "mesita-comer", name: "Mesita de comer", price: 320, tag: "Bebé", detail: "Mesita o silla de comer para bebé, segura y fácil de limpiar." }
    ]
  },
  {
    id: "twist-car",
    name: "Twist car",
    badge: "Sin batería",
    art: "twist",
    image: "assets/twiscar.webp",
    summary: "Carritos twist para avanzar moviendo el timón, sin pedales ni batería.",
    description: "Divertidos para interiores y superficies lisas, con colores variados.",
    models: [
      { id: "twiscar", name: "Twist car", price: 360, tag: "Sin batería", detail: "Carrito twist para avanzar moviendo el timón, sin pedales ni batería." }
    ]
  },
  {
    id: "andadores",
    name: "Andadores",
    badge: "Bebé",
    art: "walker",
    image: "assets/andador.webp",
    summary: "Andadores para acompañar el movimiento y la estimulación temprana.",
    description: "Modelos con juegos, música o función plegable según disponibilidad.",
    models: [
      { id: "andador", name: "Andador para bebé", price: 360, tag: "Bebé", detail: "Andador para acompañar el movimiento y la estimulación temprana." }
    ]
  },
  {
    id: "corrales",
    name: "Corrales",
    badge: "Plegables",
    art: "playpen",
    image: "assets/corral.webp",
    summary: "Corrales para descanso y juego seguro del bebé.",
    description: "Modelos plegables, con malla ventilada y bolsa de transporte.",
    models: [
      { id: "corral", name: "Corral para bebé", price: 220, tag: "Plegable", detail: "Corral para descanso y juego seguro del bebé." }
    ]
  },
  {
    id: "motos-bateria",
    name: "Motos a batería",
    badge: "Eléctricas",
    art: "moto",
    image: "assets/moto.webp",
    summary: "Motos eléctricas infantiles para pequeños pilotos.",
    description: "Opciones con luces, música y ruedas de apoyo según edad.",
    models: [
      { id: "moto", name: "Moto a batería", price: 650, tag: "Eléctrica", detail: "Moto eléctrica infantil para pequeños pilotos." }
    ]
  },
  {
    id: "mochilas-school",
    name: "Mochilas escolares",
    badge: "Escolar",
    art: "backpack",
    image: "assets/mochila.webp",
    summary: "Mochilas escolares para inicial y primaria.",
    description: "Diseños coloridos, con ruedas o espalda acolchada según stock.",
    models: [
      { id: "mochila", name: "Mochila escolar", price: 100, tag: "Escolar", detail: "Mochila escolar para inicial y primaria." }
    ]
  },
  {
    id: "cobertores",
    name: "Cobertores",
    badge: "Suaves",
    art: "blanket",
    image: "assets/cobertor.webp",
    summary: "Cobertores infantiles para descanso, coche o cuna.",
    description: "Texturas suaves, diseños para bebé y tamaños variados.",
    models: [
      { id: "cobertor", name: "Cobertor infantil", price: 35, tag: "Suave", detail: "Cobertor infantil para descanso, coche o cuna." }
    ]
  }
];

function assetFor(groupId, modelId) {
  const group = groupById(groupId);
  const model = modelId ? modelById(groupId, modelId) : null;
  return model?.image || group?.image || null;
}

const state = {
  selected: productGroups[0].id,
  cart: loadCart()
};

const categoryGrid = document.querySelector("#categoryGrid");
const modelGrid = document.querySelector("#modelGrid");
const modelsTitle = document.querySelector("#models-title");
const modelsKicker = document.querySelector("#models-kicker");
const modelsDescription = document.querySelector("#models-description");
const searchInput = document.querySelector("#catalogSearch");
const cartDrawer = document.querySelector("[data-cart-drawer]");
const cartItems = document.querySelector("[data-cart-items]");
const cartEmpty = document.querySelector("[data-cart-empty]");
const cartCount = document.querySelector("[data-cart-count]");
const cartTotal = document.querySelector("[data-cart-total]");
const toast = document.querySelector("[data-toast]");
const localImage = document.querySelector("[data-local-image]");
const localCaption = document.querySelector("[data-local-caption]");

const localPhotos = [
  {
    src: "assets/local/localdentro.webp",
    alt: "Interior del local La Casita del Niño Feliz 2 con productos para niños",
    caption: "Interior del local · Av. Francisco Rosas 126, Huacho"
  },
  {
    src: "assets/local/localder.webp",
    alt: "Vista lateral derecha del local La Casita del Niño Feliz 2",
    caption: "Vista derecha del local · Av. Francisco Rosas 126, Huacho"
  },
  {
    src: "assets/local/localizq.webp",
    alt: "Vista lateral izquierda del local La Casita del Niño Feliz 2",
    caption: "Vista izquierda del local · Av. Francisco Rosas 126, Huacho"
  }
];

let localPhotoIndex = 0;

function money(value) {
  return `S/ ${value.toLocaleString("es-PE")}`;
}

function loadCart() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item) => modelById(item.groupId, item.modelId) && Number(item.qty) > 0);
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
}

function encodeSvg(svg) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function groupById(groupId) {
  return productGroups.find((group) => group.id === groupId);
}

function modelById(groupId, modelId) {
  return groupById(groupId)?.models.find((model) => model.id === modelId);
}

function paletteFor(groupId) {
  const palettes = {
    bicicletas: ["#0f766e", "#ef5a3c", "#f5b82e"],
    "carritos-bateria": ["#ef4444", "#2563eb", "#111827"],
    triciclos: ["#f97316", "#0f766e", "#f5b82e"],
    coches: ["#2563eb", "#16a34a", "#f5b82e"],
    scooters: ["#14b8a6", "#ef5a3c", "#111827"],
    patines: ["#db2777", "#2563eb", "#f5b82e"],
    "mesitas-comer": ["#16a34a", "#f97316", "#0f766e"],
    "twist-car": ["#ef5a3c", "#0f766e", "#2563eb"],
    andadores: ["#f59e0b", "#0f766e", "#ef5a3c"],
    corrales: ["#2563eb", "#16a34a", "#f97316"],
    "motos-bateria": ["#111827", "#ef4444", "#f5b82e"],
    "mochilas-school": ["#2563eb", "#db2777", "#f5b82e"],
    cobertores: ["#0f766e", "#60a5fa", "#f97316"]
  };
  return palettes[groupId] || ["#0f766e", "#ef5a3c", "#f5b82e"];
}

function productSvg(group) {
  const [primary, secondary, accent] = paletteFor(group.id);
  const icon = iconSvg(group.art, primary, secondary, accent);
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 520" role="img" aria-label="${group.name}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#ffffff"/>
          <stop offset="1" stop-color="#eaf7f5"/>
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#10212b" flood-opacity=".16"/>
        </filter>
      </defs>
      <rect width="760" height="520" fill="url(#bg)"/>
      <circle cx="90" cy="80" r="54" fill="${accent}" opacity=".22"/>
      <rect x="585" y="50" width="104" height="104" rx="8" fill="${primary}" opacity=".12"/>
      <path d="M0 402c104-36 201-41 292-15s179 70 275 51c77-16 137-64 193-112v194H0z" fill="${secondary}" opacity=".13"/>
      <g filter="url(#shadow)">${icon}</g>
      <text x="44" y="464" fill="#10212b" font-family="Arial, sans-serif" font-size="44" font-weight="900">${group.name}</text>
    </svg>
  `;
}

function iconSvg(type, primary, secondary, accent) {
  const stroke = `stroke="#10212b" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"`;
  const wheel = (cx, cy, r = 58) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff" ${stroke}/><circle cx="${cx}" cy="${cy}" r="14" fill="${accent}"/>`;

  const icons = {
    bike: `
      <g transform="translate(88 108)">
        ${wheel(170, 250)} ${wheel(430, 250)}
        <path d="M170 250l98-132h120l42 132H302L218 174" fill="none" ${stroke}/>
        <path d="M388 118l48-48h66M270 118l-28-62h72" fill="none" ${stroke}/>
        <path d="M188 174h80" fill="none" stroke="${primary}" stroke-width="26" stroke-linecap="round"/>
      </g>`,
    car: `
      <g transform="translate(92 134)">
        <path d="M92 202l54-108c13-27 36-40 66-40h190c30 0 54 14 70 40l64 108v90H92z" fill="${primary}"/>
        <path d="M180 98h208c20 0 34 9 45 28l28 50H145l24-52c5-11 4-18 11-26z" fill="#dff7ff"/>
        <rect x="58" y="194" width="520" height="112" rx="8" fill="${secondary}"/>
        ${wheel(172, 316, 54)} ${wheel(462, 316, 54)}
        <path d="M92 236h66M470 236h70" fill="none" stroke="${accent}" stroke-width="22" stroke-linecap="round"/>
      </g>`,
    trike: `
      <g transform="translate(96 118)">
        ${wheel(150, 266, 58)} ${wheel(420, 266, 72)} ${wheel(292, 286, 40)}
        <path d="M150 266l122-148h132l16 148M272 118l20 168M245 118h-70M404 118l78-50" fill="none" ${stroke}/>
        <path d="M236 156h132" fill="none" stroke="${primary}" stroke-width="30" stroke-linecap="round"/>
        <rect x="222" y="66" width="110" height="46" rx="8" fill="${accent}"/>
      </g>`,
    stroller: `
      <g transform="translate(128 92)">
        <path d="M130 210c2-95 78-172 172-172 94 0 170 77 172 172z" fill="${primary}"/>
        <path d="M130 210h344v74c0 34-28 62-62 62H192c-34 0-62-28-62-62z" fill="${secondary}"/>
        <path d="M302 38v172M474 210h74l-24 54" fill="none" ${stroke}/>
        ${wheel(218, 376, 42)} ${wheel(414, 376, 42)}
      </g>`,
    scooter: `
      <g transform="translate(138 96)">
        <path d="M388 52v244M388 52h82M172 296h250c42 0 76 34 76 76H146c-44 0-80-36-80-80" fill="none" ${stroke}/>
        <path d="M190 276h230" fill="none" stroke="${primary}" stroke-width="38" stroke-linecap="round"/>
        ${wheel(154, 384, 42)} ${wheel(472, 384, 42)}
        <circle cx="388" cy="52" r="24" fill="${accent}"/>
      </g>`,
    skates: `
      <g transform="translate(132 120)">
        <path d="M90 198V70c0-30 24-54 54-54h124v178h118c58 0 106 48 106 106H172c-46 0-82-44-82-102z" fill="${primary}"/>
        <path d="M146 76h120M146 136h120M140 252h340" fill="none" ${stroke}/>
        ${wheel(176, 326, 34)} ${wheel(284, 326, 34)} ${wheel(392, 326, 34)}
        <path d="M312 194l64-70" fill="none" stroke="${accent}" stroke-width="28" stroke-linecap="round"/>
      </g>`,
    highchair: `
      <g transform="translate(170 84)">
        <rect x="166" y="40" width="190" height="182" rx="8" fill="${primary}"/>
        <rect x="106" y="178" width="310" height="70" rx="8" fill="${accent}"/>
        <path d="M150 248l-52 162M370 248l54 162M190 248v162M330 248v162M120 410h324" fill="none" ${stroke}/>
        <path d="M196 92h130" fill="none" stroke="#fff" stroke-width="18" stroke-linecap="round"/>
      </g>`,
    twist: `
      <g transform="translate(100 126)">
        <path d="M130 220c0-76 62-138 138-138h144c78 0 142 64 142 142v52H130z" fill="${primary}"/>
        <path d="M218 82l52-62h140l48 62" fill="none" ${stroke}/>
        <circle cx="340" cy="110" r="48" fill="#fff" ${stroke}/>
        <path d="M286 196h120" fill="none" stroke="${accent}" stroke-width="26" stroke-linecap="round"/>
        ${wheel(206, 304, 48)} ${wheel(482, 304, 48)}
      </g>`,
    walker: `
      <g transform="translate(132 96)">
        <path d="M120 208h386l-48 160H168z" fill="${primary}"/>
        <path d="M176 112h274c34 0 62 28 62 62v34H114v-34c0-34 28-62 62-62z" fill="${secondary}"/>
        <rect x="206" y="48" width="212" height="94" rx="8" fill="#fff" ${stroke}/>
        <circle cx="248" cy="190" r="18" fill="${accent}"/><circle cx="318" cy="190" r="18" fill="${accent}"/><circle cx="388" cy="190" r="18" fill="${accent}"/>
        ${wheel(182, 392, 34)} ${wheel(444, 392, 34)}
      </g>`,
    playpen: `
      <g transform="translate(112 92)">
        <rect x="82" y="68" width="486" height="298" rx="8" fill="#fff" ${stroke}/>
        <rect x="112" y="96" width="426" height="242" rx="8" fill="${primary}" opacity=".25"/>
        <path d="M152 78v278M216 78v278M280 78v278M344 78v278M408 78v278M472 78v278M82 172h486M82 264h486" fill="none" stroke="${secondary}" stroke-width="14"/>
        <path d="M120 380h410" fill="none" stroke="${accent}" stroke-width="22" stroke-linecap="round"/>
      </g>`,
    moto: `
      <g transform="translate(100 128)">
        ${wheel(174, 284, 62)} ${wheel(478, 284, 62)}
        <path d="M174 284l98-112h120l86 112M272 172l-34-72h126l28 72" fill="none" ${stroke}/>
        <path d="M246 174h190c50 0 90 40 90 90v20H174z" fill="${primary}"/>
        <path d="M386 102l96-58h74" fill="none" ${stroke}/>
        <path d="M260 220h116" fill="none" stroke="${accent}" stroke-width="26" stroke-linecap="round"/>
      </g>`,
    backpack: `
      <g transform="translate(174 72)">
        <path d="M112 134C112 62 170 4 242 4s130 58 130 130v280H112z" fill="${primary}"/>
        <path d="M150 168h184v190H150z" fill="${secondary}"/>
        <path d="M112 154c-58 26-84 92-58 150M372 154c58 26 84 92 58 150M174 78h136M188 254h108" fill="none" ${stroke}/>
        <rect x="182" y="210" width="120" height="100" rx="8" fill="${accent}"/>
      </g>`,
    blanket: `
      <g transform="translate(132 118)">
        <path d="M86 94h386c48 0 86 38 86 86v128H172c-48 0-86-38-86-86z" fill="${primary}"/>
        <path d="M172 308V180c0-48 38-86 86-86h300v214z" fill="${secondary}"/>
        <path d="M226 158h268M226 220h268M226 282h268" fill="none" stroke="#fff" stroke-width="16" stroke-linecap="round" opacity=".8"/>
        <path d="M172 308c0 50 38 90 86 90h300v-90" fill="none" ${stroke}/>
        <circle cx="134" cy="124" r="34" fill="${accent}"/>
      </g>`
  };

  return icons[type] || icons.bike;
}

function renderCategories() {
  const term = searchInput.value.trim().toLowerCase();
  const filtered = productGroups.filter((group) => {
    const haystack = `${group.name} ${group.summary} ${group.models.map((model) => model.name).join(" ")}`.toLowerCase();
    return haystack.includes(term);
  });

  categoryGrid.innerHTML = filtered
    .map((group) => {
      const image = assetFor(group.id) || encodeSvg(productSvg(group));
      const active = group.id === state.selected ? " is-active" : "";
      return `
        <button class="category-card${active}" type="button" data-category="${group.id}" aria-label="Ver modelos de ${group.name}">
          <img class="category-art" src="${image}" alt="${group.name}" width="760" height="520" loading="lazy">
          <span class="category-body">
            <span class="category-badge">${group.badge}</span>
            <strong>${group.name}</strong>
            <p>${group.summary}</p>
          </span>
        </button>
      `;
    })
    .join("");

  if (!filtered.length) {
    categoryGrid.innerHTML = `<div class="noscript-list">No encontramos ese producto. Escríbenos por WhatsApp para consultar disponibilidad.</div>`;
  }
}

function renderModels(groupId = state.selected) {
  const group = groupById(groupId) || productGroups[0];
  state.selected = group.id;
  modelsKicker.textContent = `Modelos de ${group.name}`;
  modelsTitle.textContent = group.name;
  modelsDescription.textContent = group.description;
  modelGrid.dataset.count = String(group.models.length);

  modelGrid.innerHTML = group.models
    .map((model) => {
      // intenta usar imagen real si existe en assets, sino usar SVG generado
      const asset = assetFor(group.id, model.id);
      const image = asset ? asset : encodeSvg(productSvg(group));
      return `
        <article class="product-card">
          <img class="product-image" src="${image}" alt="${model.name}" width="760" height="520" loading="lazy">
          <div class="product-body">
            <div>
              <span class="product-tag">${model.tag}</span>
              <h3>${model.name}</h3>
              <p>${model.detail}</p>
            </div>
            <div class="price-line">
              <span>Precio referencial</span>
              <strong>${money(model.price)}</strong>
            </div>
            <div class="product-actions">
              <button class="button primary" type="button" data-add="${group.id}:${model.id}">Agregar</button>
              <button class="button outline" type="button" data-buy="${group.id}:${model.id}">Comprar</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  renderCategories();
}

function addToCart(groupId, modelId, open = true) {
  const model = modelById(groupId, modelId);
  if (!model) return;
  const existing = state.cart.find((item) => item.groupId === groupId && item.modelId === modelId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ groupId, modelId, qty: 1 });
  }
  saveCart();
  renderCart();
  showToast(`${model.name} agregado al carrito.`);
  if (open) openCart();
}

function updateQty(groupId, modelId, delta) {
  const item = state.cart.find((entry) => entry.groupId === groupId && entry.modelId === modelId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter((entry) => !(entry.groupId === groupId && entry.modelId === modelId));
  }
  saveCart();
  renderCart();
}

function removeFromCart(groupId, modelId) {
  state.cart = state.cart.filter((entry) => !(entry.groupId === groupId && entry.modelId === modelId));
  saveCart();
  renderCart();
}

function cartSummary() {
  return state.cart.reduce(
    (summary, item) => {
      const model = modelById(item.groupId, item.modelId);
      if (!model) return summary;
      summary.count += item.qty;
      summary.total += model.price * item.qty;
      return summary;
    },
    { count: 0, total: 0 }
  );
}

function renderCart() {
  const summary = cartSummary();
  cartCount.textContent = summary.count;
  cartTotal.textContent = money(summary.total);

  cartEmpty.classList.toggle("is-visible", state.cart.length === 0);
  cartItems.innerHTML = state.cart
    .map((item) => {
      const group = groupById(item.groupId);
      const model = modelById(item.groupId, item.modelId);
      if (!group || !model) return "";
      const image = assetFor(group.id, model.id) || encodeSvg(productSvg(group));
      return `
        <article class="cart-row">
          <img src="${image}" alt="${model.name}" width="76" height="76" loading="lazy">
          <div>
            <h3>${model.name}</h3>
            <p>${group.name} · ${money(model.price)} referencial</p>
            <div class="cart-controls">
              <span class="quantity">
                <button type="button" data-qty="${group.id}:${model.id}:-1" aria-label="Quitar una unidad">−</button>
                <strong>${item.qty}</strong>
                <button type="button" data-qty="${group.id}:${model.id}:1" aria-label="Agregar una unidad">+</button>
              </span>
              <button class="remove-button" type="button" data-remove="${group.id}:${model.id}">Quitar</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function buildCartMessage() {
  if (!state.cart.length) {
    return "Hola, quiero consultar precios actualizados y stock de productos para niños en La Casita del Niño Feliz 2.";
  }

  const lines = state.cart
    .map((item) => {
      const group = groupById(item.groupId);
      const model = modelById(item.groupId, item.modelId);
      return `- ${item.qty} x ${model.name} (${group.name}) - precio referencial ${money(model.price)}`;
    })
    .join("\n");

  return `Hola, quiero finalizar/consultar este pedido de La Casita del Niño Feliz 2:\n\n${lines}\n\nTotal referencial: ${money(cartSummary().total)}\n\nPor favor confírmenme disponibilidad, colores y precio actualizado.`;
}

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

function buyNow(groupId, modelId) {
  const group = groupById(groupId);
  const model = modelById(groupId, modelId);
  if (!group || !model) return;
  const message = `Hola, quiero comprar o consultar este producto:\n\n${model.name} (${group.name})\nPrecio referencial: ${money(model.price)}\n\n¿Me confirman stock, colores y precio actualizado?`;
  openWhatsApp(message);
}

function openCart() {
  document.body.classList.add("cart-open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  document.body.classList.remove("cart-open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function renderLocalPhoto() {
  if (!localImage || !localCaption) return;
  const photo = localPhotos[localPhotoIndex];
  localImage.src = photo.src;
  localImage.alt = photo.alt;
  localCaption.textContent = photo.caption;
}

function moveLocalPhoto(direction) {
  localPhotoIndex = (localPhotoIndex + direction + localPhotos.length) % localPhotos.length;
  renderLocalPhoto();
}

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-local-prev]")) {
    moveLocalPhoto(-1);
    return;
  }

  if (event.target.closest("[data-local-next]")) {
    moveLocalPhoto(1);
    return;
  }

  const category = event.target.closest("[data-category]");
  if (category) {
    renderModels(category.dataset.category);
    document.querySelector("#modelos").scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${category.dataset.category}`);
    return;
  }

  const add = event.target.closest("[data-add]");
  if (add) {
    const [groupId, modelId] = add.dataset.add.split(":");
    addToCart(groupId, modelId);
    return;
  }

  const buy = event.target.closest("[data-buy]");
  if (buy) {
    const [groupId, modelId] = buy.dataset.buy.split(":");
    buyNow(groupId, modelId);
    return;
  }

  const qty = event.target.closest("[data-qty]");
  if (qty) {
    const [groupId, modelId, delta] = qty.dataset.qty.split(":");
    updateQty(groupId, modelId, Number(delta));
    return;
  }

  const remove = event.target.closest("[data-remove]");
  if (remove) {
    const [groupId, modelId] = remove.dataset.remove.split(":");
    removeFromCart(groupId, modelId);
    return;
  }

  if (event.target.closest("[data-open-cart]")) {
    openCart();
    return;
  }

  if (event.target.closest("[data-close-cart]") || event.target.closest("[data-cart-backdrop]")) {
    closeCart();
    return;
  }

  if (event.target.closest("[data-checkout]")) {
    openWhatsApp(buildCartMessage());
    return;
  }

  if (event.target.closest("[data-clear-cart]")) {
    state.cart = [];
    saveCart();
    renderCart();
    showToast("Carrito vacío.");
    return;
  }

  if (event.target.closest("[data-whatsapp-general]")) {
    event.preventDefault();
    const group = groupById(state.selected);
    openWhatsApp(`Hola, quiero ver precios actualizados y stock de ${group.name} en La Casita del Niño Feliz 2.`);
  }
});

searchInput.addEventListener("input", renderCategories);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeCart();
});

const initialHash = decodeURIComponent(window.location.hash.replace("#", ""));
if (productGroups.some((group) => group.id === initialHash)) {
  state.selected = initialHash;
}

renderCategories();
renderModels(state.selected);
renderCart();
renderLocalPhoto();
initMapEmbed();

function initMapEmbed() {
  const iframe = document.querySelector(".map-wrap iframe[data-map-src]");
  if (!iframe) return;

  const isSearchCrawler = /Googlebot|Google-InspectionTool|GoogleOther|Storebot-Google|bingbot|Slurp|DuckDuckBot/i.test(
    navigator.userAgent
  );
  if (isSearchCrawler) return;

  const mapSrc = iframe.getAttribute("data-map-src");
  if (!mapSrc) return;

  const loadMap = () => {
    if (iframe.getAttribute("src")) return;
    iframe.setAttribute("src", mapSrc);
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadMap();
          observer.disconnect();
        }
      },
      { rootMargin: "240px" }
    );
    observer.observe(iframe);
    return;
  }

  loadMap();
}
