/* ============================================================
   BOUTIQUE — JavaScript
   Filtres, recherche, tri, vue liste/grille, lazy load
   ============================================================ */
'use strict';

/* ── Catalogue complet (53 produits réels) ────────────────── */
const PRODUCTS = [

  /* === ACCESSOIRES === */
  { id:1,  name:"Pince Cheveux Papillon",                    cat:"accessoires", price:500,  icon:"🦋", badge:null,   desc:"Pince cristal rose et dorée — légère, élégante, s'adapte à tous les cheveux." },
  { id:3,  name:"Scrunchies Satin",                          cat:"accessoires", price:500,  icon:"🎀", badge:null,   desc:"Satin lisse, +20 couleurs. Doux sur les cheveux, ne laisse aucune marque." },
  { id:4,  name:"Petits Bandeaux",                           cat:"accessoires", price:400,  icon:"🌈", badge:null,   desc:"Bandeaux colorés multicolores — rose, rouge, vert, bleu, violet, jaune, gris." },
  { id:5,  name:"Bracelets Perles Charms",                   cat:"accessoires", price:500,  icon:"📿", badge:"hot",  desc:"Perles transparentes et roses avec charms kawaii — ourson, donut, sucette, cadenas." },
  { id:6,  name:"Bracelets Perles Lollipop",                 cat:"accessoires", price:1500, icon:"🍭", badge:null,   desc:"Bracelets perles roses avec charms sucettes colorées kawaii. Pack de 5." },
  { id:13, name:"Colliers Pendentifs Dorés",                 cat:"accessoires", price:1000, icon:"💛", badge:"new",  desc:"Chaîne dorée avec pendentifs — +18 modèles : papillon, rose, cœur, croix, guitare..." },
  { id:14, name:"Parure Perles & Logo Doré VD",              cat:"accessoires", price:5000, icon:"💎", badge:null,   desc:"Parure 3 pièces — collier perles, bracelet et boucles d'oreilles logo VD doré." },
  { id:15, name:"Parure Perles & Logo DD",                   cat:"accessoires", price:5000, icon:"💎", badge:null,   desc:"Parure 3 pièces perles nacrées — collier, bracelet et boucles d'oreilles logo DD." },
  { id:16, name:"Parure Perles & Fleurs Cristal",            cat:"accessoires", price:5000, icon:"🌸", badge:null,   desc:"Parure 3 pièces — collier, bracelet et boucles d'oreilles fleur cristal strass." },
  { id:17, name:"Parure Perles & Nœud Doré",                cat:"accessoires", price:5000, icon:"🎀", badge:null,   desc:"Parure 3 pièces — collier perles et boucles d'oreilles nœud doré avec perle pendante." },
  { id:20, name:"Set Pinces Fleur Frangipanier",             cat:"accessoires", price:1000, icon:"🌺", badge:null,   desc:"Set 3 pinces — 1 grande pince crabe + 2 barrettes, bleu ciel effet cristal." },
  { id:21, name:"Set Bracelets Perles Rose Kawaii",          cat:"accessoires", price:1500, icon:"🐻", badge:null,   desc:"Bracelets perles rose nacré avec charms kawaii — ourson, fleur. À superposer." },
  { id:22, name:"Porte-clé Pompon & Gloss Licorne",         cat:"accessoires", price:1500, icon:"🦄", badge:null,   desc:"Porte-clé 2-en-1 — pompon rose poudré et mini gloss intégré. Pendentif licorne." },
  { id:23, name:"Porte-clé Gloss & Charm Ourson Happy",     cat:"accessoires", price:1500, icon:"🐻", badge:null,   desc:"Porte-clé 2-en-1 — gloss transparent avec charm ourson kawaii multicolore." },
  { id:24, name:"Grand Bandeau Satin Uni",                   cat:"accessoires", price:600,  icon:"🩷", badge:null,   desc:"Grand bandeau large satin — rose vif et rose poudré. Idéal démaquillage ou soin." },
  { id:25, name:"Set Bracelets Perles Craquelées & Charms", cat:"accessoires", price:2500, icon:"🍦", badge:null,   desc:"Bracelets perles craquelées rose — charms My Melody, cœur, glace, mini bouteille." },
  { id:27, name:"Set Montre Geneva Cadran Noir & Bracelets Cuir Camel",  cat:"accessoires", price:5000, icon:"⌚", badge:null, desc:"Coffret homme — montre Geneva Quartz cadran noir + bracelet cuir camel + 3 bracelets." },
  { id:28, name:"Set Montre Geneva Cadran Blanc & Bracelets Cuir Camel", cat:"accessoires", price:5000, icon:"⌚", badge:null, desc:"Coffret homme — montre Geneva Quartz cadran blanc + bracelet cuir camel + 3 bracelets." },
  { id:29, name:"Set Montre Geneva Cadran Blanc & Bracelets Cuir Noir",  cat:"accessoires", price:5000, icon:"⌚", badge:null, desc:"Coffret homme — montre Geneva Quartz cadran blanc + bracelet cuir noir + 3 bracelets." },
  { id:30, name:"Set Montre Geneva Cadran Noir Gold & Bracelets Cuir Noir", cat:"accessoires", price:5000, icon:"⌚", badge:null, desc:"Coffret homme — montre Geneva Quartz cadran noir gold + bracelet cuir noir. Luxueux." },
  { id:31, name:"Coffret Montre Oullva Cadran Doré & Bracelets Rouge",  cat:"accessoires", price:5000, icon:"❤️", badge:null, desc:"Coffret femme — montre Oullva cadran doré + 2 bracelets perles craquelées rouges." },
  { id:32, name:"Coffret Montre Oullva Cadran Noir & Bracelets Noires", cat:"accessoires", price:5000, icon:"🖤", badge:null, desc:"Coffret femme — montre Oullva cadran noir + 2 bracelets perles noires avec charm." },
  { id:33, name:"Coffret Montre Oullva Cadran Blanc & Bracelets Caramel", cat:"accessoires", price:5000, icon:"🤎", badge:null, desc:"Coffret femme — montre Oullva cadran blanc + 2 bracelets perles cristal caramel." },
  { id:34, name:"Coffret Montre RRADD Rose & Bracelets Fuchsia",        cat:"accessoires", price:5000, icon:"🩷", badge:"hot", desc:"Coffret femme — montre RRADD carrée rose avec strass + 2 bracelets fuchsia Love." },
  { id:35, name:"Coffret Montre Quartz Bleu & Bracelets Bleues",        cat:"accessoires", price:5000, icon:"💙", badge:null, desc:"Coffret femme — montre Quartz bleu marine + 2 bracelets perles bleues avec charms." },
  { id:36, name:"Set Fashion Jewelry Orange",   cat:"accessoires", price:2000, icon:"🧡", badge:null, desc:"Set 3 pièces — bracelet jonc laqué, bague et boucles d'oreilles. Finition orange vif." },
  { id:37, name:"Set Fashion Jewelry Bleu",     cat:"accessoires", price:2000, icon:"💙", badge:null, desc:"Set 3 pièces — bracelet jonc laqué, bague et boucles d'oreilles. Finition bleu royal." },
  { id:38, name:"Set Fashion Jewelry Violet",   cat:"accessoires", price:2000, icon:"💜", badge:null, desc:"Set 3 pièces — bracelet jonc laqué, bague et boucles d'oreilles. Finition violet." },
  { id:39, name:"Set Fashion Jewelry Jaune",    cat:"accessoires", price:2000, icon:"💛", badge:null, desc:"Set 3 pièces — bracelet jonc laqué, bague et boucles d'oreilles. Finition jaune soleil." },
  { id:40, name:"Set Fashion Jewelry Fuchsia",  cat:"accessoires", price:2000, icon:"🩷", badge:null, desc:"Set 3 pièces — bracelet jonc laqué, bague et boucles d'oreilles. Finition fuchsia." },
  { id:41, name:"Set Fashion Jewelry Rouge",    cat:"accessoires", price:2000, icon:"❤️", badge:null, desc:"Set 3 pièces — bracelet jonc laqué, bague et boucles d'oreilles. Finition rouge passion." },
  { id:42, name:"Pince Crabe Rose Cristal",     cat:"accessoires", price:500,  icon:"🌹", badge:"new", desc:"Pince crabe en forme de rose sculptée cristal. 2 coloris : bleu ciel et rouge corail." },
  { id:43, name:"Pince Crabe Fleur Cristal Strass", cat:"accessoires", price:500, icon:"🌸", badge:null, desc:"Pince crabe fleur cristal avec strass. 3 coloris : violet lilas, rose irisé, bleu turquoise." },
  { id:44, name:"Bandeau Dur Côtelé Pastel",    cat:"accessoires", price:1000, icon:"🌈", badge:null, desc:"Bandeau dur côtelé stretch — 7 couleurs pastels. Sport, routine beauté ou accessoire." },
  { id:45, name:"Perles en Bois Naturel",       cat:"accessoires", price:500,  icon:"🪵", badge:null, desc:"Sachet de perles en bois — blanc ivoire, beige, camel, marron, noir. Idéal DIY." },
  { id:46, name:"Bracelets Girly Perles & Charms Kawaii", cat:"accessoires", price:500, icon:"🌼", badge:null, desc:"Bracelets perles craquelées rose/jaune avec charms 3D — ourson, lollipop, marguerite." },

  /* === BEAUTÉ & SOINS === */
  { id:2,  name:"Gloss Lip",                           cat:"soins-beaute", price:1000, icon:"💋", badge:null,   desc:"Lip oil fruité 3-en-1 — Vitamine fraise, Magic Lip Oil rose VE+VC et VC orange." },
  { id:7,  name:"Parfum Bic YARA",                     cat:"soins-beaute", price:1000, icon:"🌸", badge:null,   desc:"Parfums bic YARA — 4 variantes : blanc, orange, rose foncé, rose clair. Longue tenue." },
  { id:8,  name:"Parfum Vanilla Crush Body Mist",      cat:"soins-beaute", price:1300, icon:"🍦", badge:"new",  desc:"Body Mist 100ml — caramel salé, pistache et vanille douce. Senteur ensoleillée." },
  { id:9,  name:"Tasty Lip Gloss Romantic May",        cat:"soins-beaute", price:500,  icon:"✨", badge:null,   desc:"Lip gloss tube squeeze — 5 teintes : rose vif, doré, transparent, glacé, nude brun." },
  { id:10, name:"Lip Oil Strawberry",                  cat:"soins-beaute", price:1000, icon:"🍓", badge:null,   desc:"Lip oil packaging kawaii fraise — hydrate et fait briller les lèvres." },
  { id:11, name:"Fruity Lip Oil Magic Shieglan",       cat:"soins-beaute", price:1000, icon:"🍉", badge:null,   desc:"Lip oil fruité Magic — 6 variantes : pastèque, raisin, avocat, fraise, mangue, cerise." },
  { id:12, name:"Masque Visage Botany & Fruits Sadoer",cat:"soins-beaute", price:300,  icon:"🥑", badge:null,   desc:"Masques tissu hydratants Sadoer — Fraise, Avocat, Concombre et Aloe Vera." },
  { id:18, name:"Body Mist Sol de Janeiro",            cat:"soins-beaute", price:1000, icon:"🌺", badge:"hot",  desc:"Body mist Sol de Janeiro — 5 variantes tropicales N°40, 62, 68, 59, 63." },
  { id:19, name:"Crayon Contour Lèvres e.l.f",        cat:"soins-beaute", price:250,  icon:"✏️", badge:null,   desc:"e.l.f Cream Glide Lip Liner — texture crémeuse, tracé précis, teintes brunes chaudes." },
  { id:26, name:"Set Skincare Bandeau Bulle & Gants",  cat:"soins-beaute", price:2700, icon:"🫧", badge:null,   desc:"Set 2-en-1 — bandeau éponge bulle + gants démaquillants. 7 couleurs. Réutilisable." },
  { id:47, name:"Masque Visage MZWE Naturel",          cat:"soins-beaute", price:250,  icon:"🌿", badge:null,   desc:"Masque tissu MZWE 25ml — Avocat, Citron, Orange, Coco. Hydratation profonde." },
  { id:48, name:"Patch Anti-Boutons Étoile",           cat:"soins-beaute", price:500,  icon:"⭐", badge:null,   desc:"Patches étoile anti-boutons — absorbent sébum, réduisent inflammation. Colorés et discrets." },
  { id:49, name:"Eye Mask Patches Yeux Sadoer",        cat:"soins-beaute", price:250,  icon:"👁️", badge:null,   desc:"Patches hydrogel contour yeux Sadoer — Sakura Essence (rose) et Hyaluronic Acid (bleu)." },
  { id:50, name:"Masque Lèvres Hydrogel Bioaqua",      cat:"soins-beaute", price:250,  icon:"💋", badge:null,   desc:"Patch hydrogel lèvres Bioaqua — hydrate, repulpe et adoucit intensément." },
  { id:51, name:"Crème Mains Parfumée Segmola",        cat:"soins-beaute", price:500,  icon:"🌸", badge:"new",  desc:"Crème mains Segmola — 8 senteurs : Myrtille, Rose, Citron, Lavande, Thé vert, Aloe..." },
  { id:52, name:"Rasoir Dermaplaning Sourcils & Visage",cat:"soins-beaute",price:500,  icon:"✨", badge:null,   desc:"Rasoir dermaplaning — sourcils, duvet, contours. Lame acier. 3 couleurs." },
  { id:53, name:"Parfum Concentré Fidèle Paris",       cat:"soins-beaute", price:500,  icon:"🌸", badge:"hot",  desc:"Concentré de parfum Fidèle Paris 5ml à bille — floral féminin longue tenue." },
];

/* ── State ────────────────────────────────────────────────── */
let state = {
  cat:     'all',
  query:   '',
  sort:    'default',
  view:    'grid',
  page:    1,
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
  new:   { label:'Nouveau',   cls:'prod-badge--new' },
  hot:   { label:'Populaire', cls:'prod-badge--hot' },
  promo: { label:'Promo',     cls:'prod-badge--promo' },
};

const WA_SVG = `<svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

/* ── Filter + Sort logic ──────────────────────────────────── */
function getFiltered() {
  let list = [...PRODUCTS];
  if (state.cat !== 'all') list = list.filter(p => p.cat === state.cat);
  if (state.query) {
    const q = state.query.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
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
  const badge  = p.badge ? `<span class="prod-badge ${BADGE_CFG[p.badge].cls}">${BADGE_CFG[p.badge].label}</span>` : '';
  const waLink = buildWALink(p);
  const imgId  = String(p.id).padStart(2, '0');
  return `
  <div class="prod-card" data-id="${p.id}">
    <div class="prod-img">
      <img src="images/produits/prod-${imgId}.jpg"
           alt="${p.name}"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
           loading="lazy" />
      <div style="display:none;position:absolute;inset:0;align-items:center;justify-content:center;font-size:3.5rem;background:linear-gradient(135deg,#FDE8EE,#F0E6DA);">
        <span>${p.icon}</span>
      </div>
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
  'soins-beaute': 'Beauté & Soins',
  'accessoires':  'Accessoires',
};

/* ── Render grid ──────────────────────────────────────────── */
function render() {
  const filtered = getFiltered();
  const total    = filtered.length;
  const shown    = Math.min(state.page * state.perPage, total);
  const slice    = filtered.slice(0, shown);

  resultsInfo.innerHTML = total > 0
    ? `<strong>${total}</strong> produit${total > 1 ? 's' : ''} trouvé${total > 1 ? 's' : ''}${state.query ? ` pour "<em>${state.query}</em>"` : ''}`
    : '';

  if (total === 0) {
    grid.innerHTML = '';
    emptyState.style.display = 'block';
    loadMoreWrap.style.display = 'none';
    return;
  }

  emptyState.style.display = 'none';
  grid.style.opacity = '0';
grid.style.transform = 'translateY(8px)';

setTimeout(() => {
  grid.innerHTML = slice.map(cardHTML).join('');
  grid.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  grid.style.opacity = '1';
  grid.style.transform = 'translateY(0)';
  ...
}, 150);

  loadMoreWrap.style.display = shown < total ? 'block' : 'none';
}

/* ── Update filter counts ─────────────────────────────────── */
function updateCounts() {
  const cats = ['all', 'soins-beaute', 'accessoires'];
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
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.cat  = btn.dataset.cat;
    state.page = 1;
    render();
  });
});

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

sortSelect.addEventListener('change', () => {
  state.sort = sortSelect.value;
  state.page = 1;
  render();
});

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

document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.view = btn.dataset.view;
    grid.classList.toggle('list-view', state.view === 'list');
  });
});

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

function handleURLParams() {
  const params   = new URLSearchParams(window.location.search);
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
