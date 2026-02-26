/* ============================================================
   JULIETTE'S COSMETICS SHOP — Main JavaScript
   ============================================================ */
'use strict';

const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

function handleNavScroll() {
  if (!navbar) return;
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
    navbar.classList.remove('transparent');
  } else {
    navbar.classList.remove('scrolled');
    if (navbar.dataset.transparent === 'true') navbar.classList.add('transparent');
  }
}

if (navbar) {
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();
}

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

function setActiveNavLink() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) link.classList.add('active');
  });
}
setActiveNavLink();

/* ── Scroll Reveal — robuste, jamais de disparition ─────── */
function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (!els.length) return;

  // Si l'élément est déjà dans le viewport au chargement, on le rend visible immédiatement
  els.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // On déconnecte l'élément après l'avoir rendu visible — il ne peut plus disparaître
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  els.forEach(el => {
    // Ne pas observer les éléments déjà visibles
    if (!el.classList.contains('visible')) {
      observer.observe(el);
    }
  });
}

// Lancer dès que possible
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal);
} else {
  initReveal();
}

// Sécurité supplémentaire : forcer tout visible après 1.5s quoi qu'il arrive
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
      el.classList.add('visible');
    });
  }, 1500);
});

/* ── WhatsApp Float ───────────────────────────────────────── */
const WA_NUMBER = '22893552018';
const WA_DEFAULT_MSG = "Bonjour Juliette's Cosmetics ! 👋 Je voudrais avoir plus d'informations sur vos produits.";

function buildWhatsAppLink(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message || WA_DEFAULT_MSG)}`;
}
window.buildWhatsAppLink = buildWhatsAppLink;
window.WA_NUMBER = WA_NUMBER;

document.addEventListener('DOMContentLoaded', () => {
  const floatBtn = document.querySelector('.whatsapp-float-btn');
  if (floatBtn) floatBtn.addEventListener('click', () => window.open(buildWhatsAppLink(), '_blank'));

  const track = document.querySelector('.ticker-track');
  if (track) track.innerHTML += track.innerHTML;
});

/* ── Smooth scroll ────────────────────────────────────────── */
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;
  const href = anchor.getAttribute('href');
  if (href === '#') return;
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  }
});

window.formatPrice = (price) => new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';

















