
'use strict';

const WA = '22893552018';

/* ── FAQ Accordion ────────────────────────────────────────── */
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-q');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    // Open clicked (if it was closed)
    if (!isOpen) item.classList.add('open');
  });
});

/* ── Animated counters ────────────────────────────────────── */
function animateCounter(el, target, duration = 1500) {
  let start = null;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      animateCounter(el, target);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.chiffre-num[data-target]').forEach(el => {
  counterObserver.observe(el);
});

/* ── Contact Form → WhatsApp ──────────────────────────────── */
const SUBJECT_LABELS = {
  commande:  'Passer une commande',
  info:      'Info sur un produit',
  livraison: 'Question livraison',
  retour:    'Retour / SAV',
  autre:     'Autre',
};

document.getElementById('submitFormBtn')?.addEventListener('click', () => {
  const name    = document.getElementById('fname')?.value.trim();
  const phone   = document.getElementById('fphone')?.value.trim();
  const subject = document.getElementById('fsubject')?.value;
  const message = document.getElementById('fmessage')?.value.trim();

  if (!name || !message) {
    // Shake animation on empty required fields
    ['fname', 'fmessage'].forEach(id => {
      const el = document.getElementById(id);
      if (el && !el.value.trim()) {
        el.style.borderColor = 'var(--rose-deep)';
        el.style.animation = 'shake 0.4s ease';
        setTimeout(() => { el.style.animation = ''; el.style.borderColor = ''; }, 600);
      }
    });
    return;
  }

  const subjectLabel = SUBJECT_LABELS[subject] || subject;
  const waMsg = `Bonjour Juliette's Cosmetics ! 👋\n\n*Nom :* ${name}\n*Téléphone :* ${phone || 'Non renseigné'}\n*Sujet :* ${subjectLabel}\n\n*Message :*\n${message}`;

  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(waMsg)}`, '_blank');
});

// Shake keyframe injection
const style = document.createElement('style');
style.textContent = `
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%       { transform: translateX(-6px); }
  40%       { transform: translateX(6px); }
  60%       { transform: translateX(-4px); }
  80%       { transform: translateX(4px); }
}`;
document.head.appendChild(style);


