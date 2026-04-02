/* ============================================================
   HOME PAGE — JavaScript
   ============================================================ */
'use strict';

const FEATURED_PRODUCTS = [
  { id: 5,  name: "Bracelets Perles Charms",               category: "Accessoires",    price: 500,  icon: "📿", badge: "hot"  },
  { id: 8,  name: "Parfum Vanilla Crush Body Mist",        category: "Beauté & Soins", price: 1300, icon: "🍦", badge: "new"  },
  { id: 13, name: "Colliers Pendentifs Dorés",             category: "Accessoires",    price: 1000, icon: "💛", badge: "new"  },
  { id: 18, name: "Body Mist Sol de Janeiro",              category: "Beauté & Soins", price: 1000, icon: "🌺", badge: "hot"  },
  { id: 34, name: "Coffret Montre RRADD Rose & Bracelets", category: "Accessoires",    price: 5000, icon: "🩷", badge: "promo" },
  { id: 42, name: "Pince Crabe Rose Cristal",              category: "Accessoires",    price: 500,  icon: "🌹", badge: "new"  },
  { id: 51, name: "Crème Mains Parfumée Segmola",          category: "Beauté & Soins", price: 500,  icon: "🌸", badge: "new"  },
  { id: 53, name: "Parfum Concentré Fidèle Paris",         category: "Beauté & Soins", price: 500,  icon: "🌸", badge: "hot"  },
];

const BADGE_MAP = {
  new:   { label: "Nouveau",   cls: "prod-badge--new" },
  hot:   { label: "Populaire", cls: "prod-badge--hot" },
  promo: { label: "Promo",     cls: "prod-badge--promo" },
};

function buildWAMsg(product) {
  return `Bonjour Juliette's Cosmetics ! 👋\nJe suis intéressé(e) par :\n*${product.name}*\nPrix : ${window.formatPrice(product.price)}\n\nPourriez-vous me donner plus d'informations ?`;
}

function createProductCard(p) {
  const badge  = p.badge ? `<span class="prod-badge ${BADGE_MAP[p.badge].cls}">${BADGE_MAP[p.badge].label}</span>` : '';
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildWAMsg(p))}`;
  const imgId  = String(p.id).padStart(2, '0');

  return `
  <div class="prod-card reveal">
    <div class="prod-img">
      <img src="images/produits/prod-${imgId}.jpg"
           alt="${p.name}"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
           loading="lazy" />
      <div style="display:none;position:absolute;inset:0;align-items:center;justify-content:center;font-size:3.5rem;background:linear-gradient(135deg,#FDE8EE,#F0E6DA);">
        <span>${p.icon}</span>
      </div>
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