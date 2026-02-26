/* ============================================================
   BOUTIQUE — JavaScript
   Filtres, recherche, tri, vue liste/grille, lazy load
   ============================================================ */
'use strict';

/* ── Catalogue complet (50 produits) ─────────────────────── */
const PRODUCTS = [
  /* === SOINS & BEAUTÉ === */
  { id:1,  name:"Parfum Rose Précieux 50ml",         cat:"soins-beaute",  price:12000, icon:"🌸", badge:"new",  desc:"Fragrance florale envoûtante, longue tenue" },
  { id:2,  name:"Sérum Éclat Vitamine C",            cat:"soins-beaute",  price:8500,  icon:"✨", badge:"hot",  desc:"Illumine et unifie le teint naturellement" },
  { id:3,  name:"Crème Hydratante Karité",           cat:"soins-beaute",  price:6500,  icon:"🧴", badge:null,   desc:"Hydratation intense 24h pour peau douce" },
  { id:4,  name:"Huile Précieuse Argan Bio",         cat:"soins-beaute",  price:9500,  icon:"💧", badge:"new",  desc:"Nourrit, répare et sublime la peau" },
  { id:5,  name:"Masque Purifiant Argile Rose",      cat:"soins-beaute",  price:5500,  icon:"🌺", badge:null,   desc:"Pores affinés, teint lumineux" },
  { id:6,  name:"Parfum Vanille Orientale 30ml",     cat:"soins-beaute",  price:10000, icon:"🌙", badge:null,   desc:"Sillage chaleureux et envoûtant" },
  { id:7,  name:"Lotion Corporelle Rose Dorée",      cat:"soins-beaute",  price:7000,  icon:"🌹", badge:"new",  desc:"Peau satinée et parfumée toute la journée" },
  { id:8,  name:"Gel Nettoyant Doux Aloe Vera",      cat:"soins-beaute",  price:4500,  icon:"🌿", badge:null,   desc:"Nettoie en douceur sans agresser la peau" },
  { id:9,  name:"Eau de Parfum Fleur Blanche",       cat:"soins-beaute",  price:14000, icon:"🤍", badge:"hot",  desc:"Élégance et fraîcheur au quotidien" },
  { id:10, name:"Exfoliant Corps Sucre Vanille",     cat:"soins-beaute",  price:6000,  icon:"🍬", badge:null,   desc:"Gommage doux, peau lisse et douce" },
  { id:11, name:"Crème Contour des Yeux",            cat:"soins-beaute",  price:7500,  icon:"👁️", badge:"new",  desc:"Réduit cernes et gonflements" },
  { id:12, name:"Brume Visage Hydratante",           cat:"soins-beaute",  price:5000,  icon:"💦", badge:null,   desc:"Fix makeup et hydratation instantanée" },
  { id:13, name:"Parfum Boisé Mystère 50ml",         cat:"soins-beaute",  price:13000, icon:"🌲", badge:null,   desc:"Notes profondes et sensuelles" },

  /* === MAQUILLAGE === */
  { id:14, name:"Rouge à Lèvres Velours Nude",       cat:"maquillage",    price:4500,  icon:"💄", badge:"hot",  desc:"Formule longue tenue, ultra confort" },
  { id:15, name:"Gloss Brillant Fraise",             cat:"maquillage",    price:3000,  icon:"💋", badge:"hot",  desc:"Volume et brillance pour des lèvres parfaites" },
  { id:16, name:"Vernis Ongles Rouge Passion",       cat:"maquillage",    price:2500,  icon:"💅", badge:null,   desc:"Formule gel, tenue jusqu'à 10 jours" },
  { id:17, name:"Vernis Ongles Rose Pastel",         cat:"maquillage",    price:2500,  icon:"🩷", badge:"new",  desc:"Couleur douce et féminine, séchage rapide" },
  { id:18, name:"Brillantine Cheveux Satinés",       cat:"maquillage",    price:5500,  icon:"✨", badge:null,   desc:"Brillance et discipline sans alourdir" },
  { id:19, name:"Rouge à Lèvres Corail Vif",        cat:"maquillage",    price:4500,  icon:"🧡", badge:"new",  desc:"Pigmentation intense, couleur éclatante" },
  { id:20, name:"Gloss Lèvres Caramel",              cat:"maquillage",    price:3000,  icon:"🍮", badge:null,   desc:"Douceur et brillance irrésistibles" },
  { id:21, name:"Fond de Teint Lumineux SPF15",      cat:"maquillage",    price:7500,  icon:"🌟", badge:"hot",  desc:"Couvrance modulable, fini naturel" },
  { id:22, name:"Mascara Volume Extrême",            cat:"maquillage",    price:6000,  icon:"👁️", badge:"new",  desc:"Cils longs et volumineux en un geste" },
  { id:23, name:"Poudre Bonne Mine Dorée",           cat:"maquillage",    price:5000,  icon:"✨", badge:null,   desc:"Bonne mine instantanée, effet soleil" },
  { id:24, name:"Vernis Ongles Bordeaux",            cat:"maquillage",    price:2500,  icon:"🍇", badge:null,   desc:"Élégant et sophistiqué pour toutes occasions" },
  { id:25, name:"Brillantine Cheveux Parfumée",      cat:"maquillage",    price:5500,  icon:"💫", badge:"new",  desc:"Soin et parfum pour cheveux brillants" },
  { id:26, name:"Crayon Lèvres Nude Précis",         cat:"maquillage",    price:3500,  icon:"✏️", badge:null,   desc:"Contour parfait, longue tenue" },
  { id:27, name:"Blush Rose Framboise",              cat:"maquillage",    price:4000,  icon:"🌸", badge:"new",  desc:"Joues colorées et rayonnantes" },

  /* === ACCESSOIRES === */
  { id:28, name:"Collier Doré Élégance",            cat:"accessoires",   price:5500,  icon:"📿", badge:"new",  desc:"Finition dorée premium, tendance et féminin" },
  { id:29, name:"Bracelet Perles Naturelles",        cat:"accessoires",   price:6000,  icon:"💍", badge:"hot",  desc:"Perles de qualité, fermeture dorée" },
  { id:30, name:"Serre-tête Fleuri Tendance",        cat:"accessoires",   price:3500,  icon:"🌺", badge:"new",  desc:"Accessoire chic pour coiffures du quotidien" },
  { id:31, name:"Collier Ras-de-Cou Délicat",       cat:"accessoires",   price:7000,  icon:"✨", badge:null,   desc:"Choker fin et élégant pour toutes tenues" },
  { id:32, name:"Bracelet Chaîne Fine Dorée",        cat:"accessoires",   price:5000,  icon:"⛓️", badge:"new",  desc:"Discret, raffiné, toujours en vogue" },
  { id:33, name:"Serre-tête Velours Noir",           cat:"accessoires",   price:3000,  icon:"🖤", badge:null,   desc:"Style vintage chic pour toutes les occasions" },
  { id:34, name:"Boucles d'Oreilles Créoles Dorées",cat:"accessoires",   price:4500,  icon:"🪙", badge:"hot",  desc:"Classique intemporel, grande tendance" },
  { id:35, name:"Collier Pendentif Cœur",           cat:"accessoires",   price:6500,  icon:"❤️", badge:"new",  desc:"Romantique et délicat, cadeau idéal" },
  { id:36, name:"Bracelet Manchette Dorée",         cat:"accessoires",   price:8000,  icon:"🔮", badge:null,   desc:"Statement piece pour un look affirmé" },
  { id:37, name:"Serre-tête Perles Blanches",       cat:"accessoires",   price:4000,  icon:"🤍", badge:"new",  desc:"Élégance et féminité au quotidien" },
  { id:38, name:"Collier Multi-rangs",               cat:"accessoires",   price:9000,  icon:"💎", badge:"hot",  desc:"Superposition chic pour look luxueux" },
  { id:39, name:"Bracelet Jonc Argenté",            cat:"accessoires",   price:5500,  icon:"🌙", badge:null,   desc:"Sobre et élégant, polyvalent" },
  { id:40, name:"Serre-tête Satiné Rose Gold",      cat:"accessoires",   price:3500,  icon:"🌟", badge:"new",  desc:"Couleur tendance rose gold captivante" },

  /* === NOUVEAUTÉS (multi-catégorie, badge=new) === */
  { id:41, name:"Palette Fards à Paupières",        cat:"nouveautes",    price:11000, icon:"🎨", badge:"new",  desc:"12 teintes nude et colorées pour tous looks" },
  { id:42, name:"Coffret Soin Visage Complet",      cat:"nouveautes",    price:18500, icon:"🎁", badge:"new",  desc:"Sérum + crème + masque — routine parfaite" },
  { id:43, name:"Parfum Fruité Summer 30ml",        cat:"nouveautes",    price:9000,  icon:"🍑", badge:"new",  desc:"Fraîcheur estivale en toutes saisons" },
  { id:44, name:"Bracelet Charms Personnalisé",     cat:"nouveautes",    price:7500,  icon:"🌈", badge:"new",  desc:"Compose ton bracelet unique à la carte" },
  { id:45, name:"Rouge à Lèvres Effet Miroir",      cat:"nouveautes",    price:5500,  icon:"🪞", badge:"new",  desc:"Brillance miroir, tenue professionnelle" },
  { id:46, name:"Huile Corps Pailletée",            cat:"nouveautes",    price:8000,  icon:"✨", badge:"new",  desc:"Corps lumineux et irisé pour chaque sortie" },
  { id:47, name:"Serre-tête Coquillages Naturels",  cat:"nouveautes",    price:4500,  icon:"🐚", badge:"new",  desc:"Tendance naturelle, esprit bohème" },
  { id:48, name:"Vernis Semi-permanent Rose Quartz",cat:"nouveautes",    price:4000,  icon:"💎", badge:"new",  desc:"Tenue parfaite jusqu'à 3 semaines" },
  { id:49, name:"Coffret Mini Parfums 3x10ml",      cat:"nouveautes",    price:15000, icon:"🎀", badge:"new",  desc:"Trio de fragrances pour varier les plaisirs" },
  { id:50, name:"Collier Initial Personnalisé",     cat:"nouveautes",    price:8500,  icon:"🔤", badge:"new",  desc:"Ta lettre en pendentif, cadeau unique" },
];

/* ── State ────────────────────────────────────────────────── */
let state = {
  cat:    'all',
  query:  '',
  sort:   'default',
  view:   'grid',
  page:   1,
  perPage: 12,
};

const WA = '22893552018';

/* ── Elements ─────────────────────────────────────────────── */
const grid         = document.getElementById('productsGrid');
const emptyState   = document.getElementById('emptyState');
const resultsInfo  = document.getElementById('resultsInfo');
const loadMoreWrap = document.getElementById('loadMoreWrap');
const loadMoreBtn  = document.getElementById('loadMoreBtn');
const searchInput  = document.getElementById('searchInput');
const searchClear  = document.getElementById('searchClear');
const sortSelect   = document.getElementById('sortSelect');

/* ── Helpers ──────────────────────────────────────────────── */
const fmt = (p) => new Intl.NumberFormat('fr-FR').format(p) + ' FCFA';

function buildWALink(product) {
  const msg = `Bonjour Juliette's Cosmetics ! 👋\nJe suis intéressé(e) par :\n*${product.name}*\nPrix : ${fmt(product.price)}\n\nMerci de me donner plus d'informations.`;
  return `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
}

const BADGE_CFG = {
  new:   { label:'Nouveau',    cls:'prod-badge--new' },
  hot:   { label:'Populaire',  cls:'prod-badge--hot' },
  promo: { label:'Promo',      cls:'prod-badge--promo' },
};

const WA_SVG = `<svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

/* ── Filter + Sort logic ──────────────────────────────────── */
function getFiltered() {
  let list = [...PRODUCTS];

  if (state.cat !== 'all') list = list.filter(p => p.cat === state.cat);

  if (state.query) {
    const q = state.query.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    );
  }

  switch (state.sort) {
    case 'price-asc':  list.sort((a,b) => a.price - b.price); break;
    case 'price-desc': list.sort((a,b) => b.price - a.price); break;
    case 'name-asc':   list.sort((a,b) => a.name.localeCompare(b.name)); break;
    case 'new':        list.sort((a,b) => (b.badge==='new'?1:0) - (a.badge==='new'?1:0)); break;
  }

  return list;
}

/* ── Render card HTML ─────────────────────────────────────── */
function cardHTML(p) {
  const badge = p.badge ? `<span class="prod-badge ${BADGE_CFG[p.badge].cls}">${BADGE_CFG[p.badge].label}</span>` : '';
  const waLink = buildWALink(p);
  return `
  <div class="prod-card" data-id="${p.id}">
    <div class="prod-img">
      <span>${p.icon}</span>
      ${badge}
      <a href="${waLink}" target="_blank" class="prod-wa-btn" title="Commander via WhatsApp">${WA_SVG}</a>
    </div>
    <div class="prod-body">
      <p class="prod-cat">${CAT_LABELS[p.cat] || p.cat}</p>
      <p class="prod-name">${p.name}</p>
      <p class="prod-desc">${p.desc}</p>
      <div class="prod-footer">
        <span class="prod-price">${fmt(p.price)}</span>
        <a href="${waLink}" target="_blank" class="prod-order-btn">Commander →</a>
      </div>
    </div>
  </div>`;
}

const CAT_LABELS = {
  'soins-beaute': 'Soins & Beauté',
  'maquillage':   'Maquillage',
  'accessoires':  'Accessoires',
  'nouveautes':   'Nouveautés',
};

/* ── Render grid ──────────────────────────────────────────── */
function render() {
  const filtered = getFiltered();
  const total    = filtered.length;
  const shown    = Math.min(state.page * state.perPage, total);
  const slice    = filtered.slice(0, shown);

  // Results info
  resultsInfo.innerHTML = total > 0
    ? `<strong>${total}</strong> produit${total > 1 ? 's' : ''} trouvé${total > 1 ? 's' : ''}${state.query ? ` pour "<em>${state.query}</em>"` : ''}`
    : '';

  // Empty state
  if (total === 0) {
    grid.innerHTML = '';
    emptyState.style.display = 'block';
    loadMoreWrap.style.display = 'none';
    return;
  }

  emptyState.style.display = 'none';

  // Animate out then in
  grid.style.opacity = '0';
  grid.style.transform = 'translateY(8px)';

  setTimeout(() => {
    grid.innerHTML = slice.map(cardHTML).join('');
    grid.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    grid.style.opacity = '1';
    grid.style.transform = 'translateY(0)';

    // Add prod-desc style if not present
    document.querySelectorAll('.prod-desc').forEach(el => {
      el.style.cssText = 'font-size:0.8rem;color:var(--text-light);margin-bottom:10px;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;';
    });
  }, 150);

  // Load more button
  loadMoreWrap.style.display = shown < total ? 'block' : 'none';
}

/* ── Update filter counts ─────────────────────────────────── */
function updateCounts() {
  const cats = ['all', 'soins-beaute', 'maquillage', 'accessoires', 'nouveautes'];
  cats.forEach(cat => {
    const el = document.getElementById(`count-${cat}`);
    if (!el) return;
    const count = cat === 'all'
      ? PRODUCTS.filter(p => state.query ? (p.name+p.desc).toLowerCase().includes(state.query.toLowerCase()) : true).length
      : PRODUCTS.filter(p => p.cat === cat && (state.query ? (p.name+p.desc).toLowerCase().includes(state.query.toLowerCase()) : true)).length;
    el.textContent = count;
  });

  const totalEl = document.getElementById('totalCount');
  if (totalEl) totalEl.textContent = PRODUCTS.length + '+';
}

/* ── Event handlers ───────────────────────────────────────── */

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.cat  = btn.dataset.cat;
    state.page = 1;
    render();
  });
});

// Search
let searchTimer;
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimer);
  const q = searchInput.value.trim();
  searchClear.classList.toggle('visible', q.length > 0);
  searchTimer = setTimeout(() => {
    state.query = q;
    state.page  = 1;
    updateCounts();
    render();
  }, 280);
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchClear.classList.remove('visible');
  state.query = '';
  state.page  = 1;
  updateCounts();
  render();
  searchInput.focus();
});

// Sort
sortSelect.addEventListener('change', () => {
  state.sort = sortSelect.value;
  state.page = 1;
  render();
});

// Load more
loadMoreBtn.addEventListener('click', () => {
  loadMoreBtn.classList.add('loading');
  loadMoreBtn.textContent = 'Chargement…';
  setTimeout(() => {
    state.page++;
    render();
    loadMoreBtn.classList.remove('loading');
    loadMoreBtn.innerHTML = 'Voir plus de produits <svg viewBox="0 0 20 20" fill="currentColor" width="16"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>';
  }, 500);
});

// View toggle (grid / list)
document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.view = btn.dataset.view;
    grid.classList.toggle('list-view', state.view === 'list');
  });
});

// Reset from empty state
window.resetFilters = function() {
  state = { cat:'all', query:'', sort:'default', view:state.view, page:1, perPage:12 };
  searchInput.value = '';
  sortSelect.value  = 'default';
  searchClear.classList.remove('visible');
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.filter-btn[data-cat="all"]').classList.add('active');
  updateCounts();
  render();
};

/* ── URL param: ?cat=xxx ──────────────────────────────────── */
function handleURLParams() {
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get('cat');
  if (catParam) {
    const btn = document.querySelector(`.filter-btn[data-cat="${catParam}"]`);
    if (btn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.cat = catParam;
    }
  }
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  handleURLParams();
  updateCounts();
  render();
});







