/* ============================================================
   PRODUIT.JS — Page produit individuelle
   ============================================================ */
'use strict';

const PRODUCTS = [
  { id:1,  name:"Pince Cheveux Papillon",                      cat:"accessoires", price:500,  icon:"🦋", badge:null,  desc:"Pince cristal rose et dorée — légère, élégante, s'adapte à tous les cheveux." },
  { id:3,  name:"Scrunchies Satin",                            cat:"accessoires", price:500,  icon:"🎀", badge:null,  desc:"Satin lisse, +20 couleurs. Doux sur les cheveux, ne laisse aucune marque." },
  { id:4,  name:"Petits Bandeaux",                             cat:"accessoires", price:400,  icon:"🌈", badge:null,  desc:"Bandeaux colorés multicolores — rose, rouge, vert, bleu, violet, jaune, gris." },
  { id:5,  name:"Bracelets Perles Charms",                     cat:"accessoires", price:500,  icon:"📿", badge:"hot", desc:"Perles transparentes et roses avec charms kawaii — ourson, donut, sucette, cadenas." },
  { id:6,  name:"Bracelets Perles Lollipop",                   cat:"accessoires", price:1500, icon:"🍭", badge:null,  desc:"Bracelets perles roses avec charms sucettes colorées kawaii. Pack de 5." },
  { id:13, name:"Colliers Pendentifs Dorés",                   cat:"accessoires", price:1000, icon:"💛", badge:"new", desc:"Chaîne dorée avec pendentifs — +18 modèles : papillon, rose, cœur, croix, guitare..." },
  { id:14, name:"Parure Perles & Logo Doré VD",                cat:"accessoires", price:5000, icon:"💎", badge:null,  desc:"Parure 3 pièces — collier perles, bracelet et boucles d'oreilles logo VD doré." },
  { id:15, name:"Parure Perles & Logo DD",                     cat:"accessoires", price:5000, icon:"💎", badge:null,  desc:"Parure 3 pièces perles nacrées — collier, bracelet et boucles d'oreilles logo DD." },
  { id:16, name:"Parure Perles & Fleurs Cristal",              cat:"accessoires", price:5000, icon:"🌸", badge:null,  desc:"Parure 3 pièces — collier, bracelet et boucles d'oreilles fleur cristal strass." },
  { id:17, name:"Parure Perles & Nœud Doré",                  cat:"accessoires", price:5000, icon:"🎀", badge:null,  desc:"Parure 3 pièces — collier perles et boucles d'oreilles nœud doré avec perle pendante." },
  { id:20, name:"Set Pinces Fleur Frangipanier",               cat:"accessoires", price:1000, icon:"🌺", badge:null,  desc:"Set 3 pinces — 1 grande pince crabe + 2 barrettes, bleu ciel effet cristal." },
  { id:21, name:"Set Bracelets Perles Rose Kawaii",            cat:"accessoires", price:1500, icon:"🐻", badge:null,  desc:"Bracelets perles rose nacré avec charms kawaii — ourson, fleur. À superposer." },
  { id:22, name:"Porte-clé Pompon & Gloss Licorne",            cat:"accessoires", price:1500, icon:"🦄", badge:null,  desc:"Porte-clé 2-en-1 — pompon rose poudré et mini gloss intégré. Pendentif licorne." },
  { id:23, name:"Porte-clé Gloss & Charm Ourson Happy",        cat:"accessoires", price:1500, icon:"🐻", badge:null,  desc:"Porte-clé 2-en-1 — gloss transparent avec charm ourson kawaii multicolore." },
  { id:24, name:"Grand Bandeau Satin Uni",                     cat:"accessoires", price:600,  icon:"🩷", badge:null,  desc:"Grand bandeau large satin — rose vif et rose poudré. Idéal démaquillage ou soin." },
  { id:25, name:"Set Bracelets Perles Craquelées & Charms",    cat:"accessoires", price:2500, icon:"🍦", badge:null,  desc:"Bracelets perles craquelées rose — charms My Melody, cœur, glace, mini bouteille." },
  { id:27, name:"Set Montre Geneva Cadran Noir & Bracelets Camel",    cat:"accessoires", price:5000, icon:"⌚", badge:null, desc:"Coffret homme — montre Geneva Quartz cadran noir + bracelet cuir camel + 3 bracelets." },
  { id:28, name:"Set Montre Geneva Cadran Blanc & Bracelets Camel",   cat:"accessoires", price:5000, icon:"⌚", badge:null, desc:"Coffret homme — montre Geneva Quartz cadran blanc + bracelet cuir camel + 3 bracelets." },
  { id:29, name:"Set Montre Geneva Cadran Blanc & Bracelets Noir",    cat:"accessoires", price:5000, icon:"⌚", badge:null, desc:"Coffret homme — montre Geneva Quartz cadran blanc + bracelet cuir noir + 3 bracelets." },
  { id:30, name:"Set Montre Geneva Cadran Noir Gold & Bracelets Noir",cat:"accessoires", price:5000, icon:"⌚", badge:null, desc:"Coffret homme — montre Geneva cadran noir gold + bracelet cuir noir. Luxueux." },
  { id:31, name:"Coffret Montre Oullva Cadran Doré & Bracelets Rouge", cat:"accessoires", price:5000, icon:"❤️", badge:null, desc:"Coffret femme — montre Oullva cadran doré + 2 bracelets perles craquelées rouges." },
  { id:32, name:"Coffret Montre Oullva Cadran Noir & Bracelets Noires",cat:"accessoires", price:5000, icon:"🖤", badge:null, desc:"Coffret femme — montre Oullva cadran noir + 2 bracelets perles noires avec charm." },
  { id:33, name:"Coffret Montre Oullva Cadran Blanc & Bracelets Caramel",cat:"accessoires",price:5000,icon:"🤎",badge:null, desc:"Coffret femme — montre Oullva cadran blanc + 2 bracelets perles cristal caramel." },
  { id:34, name:"Coffret Montre RRADD Rose & Bracelets Fuchsia",      cat:"accessoires", price:5000, icon:"🩷", badge:"hot", desc:"Coffret femme — montre RRADD carrée rose avec strass + 2 bracelets fuchsia Love." },
  { id:35, name:"Coffret Montre Quartz Bleu & Bracelets Bleues",      cat:"accessoires", price:5000, icon:"💙", badge:null, desc:"Coffret femme — montre Quartz bleu marine + 2 bracelets perles bleues avec charms." },
  { id:36, name:"Set Fashion Jewelry Orange",  cat:"accessoires", price:2000, icon:"🧡", badge:null, desc:"Set 3 pièces — bracelet jonc laqué, bague et boucles d'oreilles. Finition orange vif." },
  { id:37, name:"Set Fashion Jewelry Bleu",    cat:"accessoires", price:2000, icon:"💙", badge:null, desc:"Set 3 pièces — bracelet jonc laqué, bague et boucles d'oreilles. Finition bleu royal." },
  { id:38, name:"Set Fashion Jewelry Violet",  cat:"accessoires", price:2000, icon:"💜", badge:null, desc:"Set 3 pièces — bracelet jonc laqué, bague et boucles d'oreilles. Finition violet." },
  { id:39, name:"Set Fashion Jewelry Jaune",   cat:"accessoires", price:2000, icon:"💛", badge:null, desc:"Set 3 pièces — bracelet jonc laqué, bague et boucles d'oreilles. Finition jaune soleil." },
  { id:40, name:"Set Fashion Jewelry Fuchsia", cat:"accessoires", price:2000, icon:"🩷", badge:null, desc:"Set 3 pièces — bracelet jonc laqué, bague et boucles d'oreilles. Finition fuchsia." },
  { id:41, name:"Set Fashion Jewelry Rouge",   cat:"accessoires", price:2000, icon:"❤️", badge:null, desc:"Set 3 pièces — bracelet jonc laqué, bague et boucles d'oreilles. Finition rouge passion." },
  { id:42, name:"Pince Crabe Rose Cristal",    cat:"accessoires", price:500,  icon:"🌹", badge:"new", desc:"Pince crabe en forme de rose sculptée cristal. 2 coloris : bleu ciel et rouge corail." },
  { id:43, name:"Pince Crabe Fleur Cristal Strass", cat:"accessoires", price:500, icon:"🌸", badge:null, desc:"Pince crabe fleur cristal avec strass. 3 coloris : violet lilas, rose irisé, bleu turquoise." },
  { id:44, name:"Bandeau Dur Côtelé Pastel",   cat:"accessoires", price:1000, icon:"🌈", badge:null, desc:"Bandeau dur côtelé stretch — 7 couleurs pastels. Sport, routine beauté ou accessoire." },
  { id:45, name:"Perles en Bois Naturel",      cat:"accessoires", price:500,  icon:"🪵", badge:null, desc:"Sachet de perles en bois — blanc ivoire, beige, camel, marron, noir. Idéal DIY." },
  { id:46, name:"Bracelets Girly Perles & Charms Kawaii", cat:"accessoires", price:500, icon:"🌼", badge:null, desc:"Bracelets perles craquelées rose/jaune avec charms 3D — ourson, lollipop, marguerite." },
  { id:2,  name:"Gloss Lip",                            cat:"soins-beaute", price:1000, icon:"💋", badge:null,  desc:"Lip oil fruité 3-en-1 — Vitamine fraise, Magic Lip Oil rose VE+VC et VC orange." },
  { id:7,  name:"Parfum Bic YARA",                      cat:"soins-beaute", price:1000, icon:"🌸", badge:null,  desc:"Parfums bic YARA — 4 variantes : blanc, orange, rose foncé, rose clair. Longue tenue." },
  { id:8,  name:"Parfum Vanilla Crush Body Mist",       cat:"soins-beaute", price:1300, icon:"🍦", badge:"new", desc:"Body Mist 100ml — caramel salé, pistache et vanille douce. Senteur ensoleillée." },
  { id:9,  name:"Tasty Lip Gloss Romantic May",         cat:"soins-beaute", price:500,  icon:"✨", badge:null,  desc:"Lip gloss tube squeeze — 5 teintes : rose vif, doré, transparent, glacé, nude brun." },
  { id:10, name:"Lip Oil Strawberry",                   cat:"soins-beaute", price:1000, icon:"🍓", badge:null,  desc:"Lip oil packaging kawaii fraise — hydrate et fait briller les lèvres." },
  { id:11, name:"Fruity Lip Oil Magic Shieglan",        cat:"soins-beaute", price:1000, icon:"🍉", badge:null,  desc:"Lip oil fruité Magic — 6 variantes : pastèque, raisin, avocat, fraise, mangue, cerise." },
  { id:12, name:"Masque Visage Botany & Fruits Sadoer", cat:"soins-beaute", price:300,  icon:"🥑", badge:null,  desc:"Masques tissu hydratants Sadoer — Fraise, Avocat, Concombre et Aloe Vera." },
  { id:18, name:"Body Mist Sol de Janeiro",             cat:"soins-beaute", price:1000, icon:"🌺", badge:"hot", desc:"Body mist Sol de Janeiro — 5 variantes tropicales N°40, 62, 68, 59, 63." },
  { id:19, name:"Crayon Contour Lèvres e.l.f",         cat:"soins-beaute", price:250,  icon:"✏️", badge:null,  desc:"e.l.f Cream Glide Lip Liner — texture crémeuse, tracé précis, teintes brunes chaudes." },
  { id:26, name:"Set Skincare Bandeau Bulle & Gants",   cat:"soins-beaute", price:2700, icon:"🫧", badge:null,  desc:"Set 2-en-1 — bandeau éponge bulle + gants démaquillants. 7 couleurs. Réutilisable." },
  { id:47, name:"Masque Visage MZWE Naturel",           cat:"soins-beaute", price:250,  icon:"🌿", badge:null,  desc:"Masque tissu MZWE 25ml — Avocat, Citron, Orange, Coco. Hydratation profonde." },
  { id:48, name:"Patch Anti-Boutons Étoile",            cat:"soins-beaute", price:500,  icon:"⭐", badge:null,  desc:"Patches étoile anti-boutons — absorbent sébum, réduisent inflammation. Colorés et discrets." },
  { id:49, name:"Eye Mask Patches Yeux Sadoer",         cat:"soins-beaute", price:250,  icon:"👁️", badge:null,  desc:"Patches hydrogel contour yeux Sadoer — Sakura Essence (rose) et Hyaluronic Acid (bleu)." },
  { id:50, name:"Masque Lèvres Hydrogel Bioaqua",       cat:"soins-beaute", price:250,  icon:"💋", badge:null,  desc:"Patch hydrogel lèvres Bioaqua — hydrate, repulpe et adoucit intensément." },
  { id:51, name:"Crème Mains Parfumée Segmola",         cat:"soins-beaute", price:500,  icon:"🌸", badge:"new", desc:"Crème mains Segmola — 8 senteurs : Myrtille, Rose, Citron, Lavande, Thé vert, Aloe..." },
  { id:52, name:"Rasoir Dermaplaning Sourcils & Visage",cat:"soins-beaute", price:500,  icon:"✨", badge:null,  desc:"Rasoir dermaplaning — sourcils, duvet, contours. Lame acier. 3 couleurs." },
  { id:53, name:"Parfum Concentré Fidèle Paris",        cat:"soins-beaute", price:500,  icon:"🌸", badge:"hot", desc:"Concentré de parfum Fidèle Paris 5ml à bille — floral féminin longue tenue." },
];

const WA  = '22893552018';
const fmt = (p) => new Intl.NumberFormat('fr-FR').format(p) + ' FCFA';
const CAT = { 'accessoires':'🎀 Accessoires', 'soins-beaute':'💄 Beauté & Soins' };
const BADGE_LABELS = { new:'Nouveau', hot:'Populaire', promo:'Promo' };
const BADGE_CLS    = { new:'prod-badge--new', hot:'prod-badge--hot', promo:'prod-badge--promo' };

function setMeta(id, content) {
  const el = document.getElementById(id);
  if (el) el.setAttribute('content', content);
}

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id     = parseInt(params.get('id'));
  const p      = PRODUCTS.find(x => x.id === id);

  document.getElementById('produitLoading').style.display = 'none';

  if (!p) {
    document.getElementById('produit404').style.display = 'flex';
    return;
  }

  /* ── Remplir le contenu ─────────────────────────────────── */
  const imgId  = String(p.id).padStart(2, '0');
  const imgSrc = `images/produits/prod-${imgId}.jpg`;
  const pageURL = window.location.href;

  document.getElementById('produitContent').style.display = 'block';
  document.getElementById('page-title').textContent = `${p.name} — Juliette's Cosmetics Shop`;
  document.getElementById('breadcrumb-name').textContent = p.name;

  /* Image */
  const img = document.getElementById('produitImg');
  img.src = imgSrc;
  img.alt = p.name;
  img.onerror = () => {
    img.style.display = 'none';
    document.getElementById('produitFallback').style.display = 'flex';
    document.getElementById('produitEmoji').textContent = p.icon;
  };

  /* Badge */
  if (p.badge) {
    const b = document.getElementById('produitBadge');
    b.textContent = BADGE_LABELS[p.badge];
    b.className   = `produit-badge ${BADGE_CLS[p.badge]}`;
    b.style.display = 'inline-flex';
  }

  /* Textes */
  document.getElementById('produitCat').textContent   = CAT[p.cat] || p.cat;
  document.getElementById('produitName').textContent  = p.name;
  document.getElementById('produitDesc').textContent  = p.desc;
  document.getElementById('produitPrice').textContent = fmt(p.price);

  /* Lien WA */
  const waMsg = `Bonjour Juliette's Cosmetics ! 👋\nJe suis intéressé(e) par :\n*${p.name}*\nPrix : ${fmt(p.price)}\n\nMerci de me donner plus d'informations.`;
  document.getElementById('produitWABtn').href = `https://wa.me/${WA}?text=${encodeURIComponent(waMsg)}`;

  /* ── Open Graph meta ────────────────────────────────────── */
  const ogImg = window.location.origin + window.location.pathname.replace('produit.html', '') + imgSrc;
  const ogDesc = `${p.name} — ${fmt(p.price)} | Juliette's Cosmetics Shop, Lomé`;

  setMeta('og-title',       `${p.name} — Juliette's Cosmetics Shop`);
  setMeta('og-description', ogDesc);
  setMeta('og-image',       ogImg);
  setMeta('og-url',         pageURL);
  setMeta('tw-title',       `${p.name} — Juliette's Cosmetics Shop`);
  setMeta('tw-description', ogDesc);
  setMeta('tw-image',       ogImg);

  /* ── Bouton Partager ────────────────────────────────────── */
  document.getElementById('produitShareBtn').addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({
        title: `${p.name} — Juliette's Cosmetics Shop`,
        text:  `${p.name} à ${fmt(p.price)} 🛍️`,
        url:   pageURL,
      });
    } else {
      navigator.clipboard.writeText(pageURL).then(() => {
        const toast = document.getElementById('copyToast');
        toast.textContent = '🔗 Lien copié !';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
      });
    }
  });
});
