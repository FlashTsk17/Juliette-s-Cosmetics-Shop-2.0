/* ============================================================
   HOME PAGE — JavaScript
   ============================================================ */
'use strict';

const FEATURED_PRODUCTS = [
  { id: 1, name: "Rouge à Lèvres Velours Nude", category: "Maquillage", price: 4500, icon: "💄", badge: "hot" },
  { id: 2, name: "Parfum Rose Précieux 50ml", category: "Soins & Beauté", price: 12000, icon: "🌸", badge: "new" },
  { id: 3, name: "Soin Visage Éclat Naturel", category: "Soins & Beauté", price: 7500, icon: "✨", badge: null },
  { id: 4, name: "Collier Doré Élégance", category: "Accessoires", price: 5500, icon: "📿", badge: "new" },
  { id: 5, name: "Vernis à Ongles Collection", category: "Maquillage", price: 2500, icon: "💅", badge: "promo" },
  { id: 6, name: "Serre-tête Tendance Fleuri", category: "Accessoires", price: 3500, icon: "🌺", badge: null },
  { id: 7, name: "Gloss Brillant Fraise", category: "Maquillage", price: 3000, icon: "💋", badge: "hot" },
  { id: 8, name: "Bracelet Perles Naturelles", category: "Accessoires", price: 6000, icon: "💍", badge: "new" },
];

const BADGE_MAP = {
  new:   { label: "Nouveau", cls: "prod-badge--new" },
  hot:   { label: "Populaire", cls: "prod-badge--hot" },
  promo: { label: "Promo", cls: "prod-badge--promo" },
};

function buildWAMsg(product) {
  return `Bonjour Juliette's Cosmetics ! 👋\nJe suis intéressé(e) par :\n*${product.name}*\nPrix : ${window.formatPrice(product.price)}\n\nPourriez-vous me donner plus d'informations ?`;
}

function createProductCard(p) {
  const badge = p.badge ? `<span class="prod-badge ${BADGE_MAP[p.badge].cls}">${BADGE_MAP[p.badge].label}</span>` : '';
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildWAMsg(p))}`;

  return `
  <div class="prod-card reveal">
    <div class="prod-img">
      <span>${p.icon}</span>
      ${badge}
      <a href="${waLink}" target="_blank" class="prod-wa-btn" title="Commander via WhatsApp">
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
    <div class="prod-body">
      <p class="prod-cat">${p.category}</p>
      <p class="prod-name">${p.name}</p>
      <div class="prod-footer">
        <span class="prod-price">${window.formatPrice(p.price)}</span>
        <a href="${waLink}" target="_blank" class="prod-order-btn">Commander</a>
      </div>
    </div>
  </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('featuredGrid');
  if (grid) {
    grid.innerHTML = FEATURED_PRODUCTS.map(createProductCard).join('');
    // Re-trigger reveal for newly added elements
    setTimeout(() => {
      document.querySelectorAll('.prod-card.reveal').forEach(el => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
        }, { threshold: 0.1 });
        observer.observe(el);
      });
    }, 100);
  }
});
