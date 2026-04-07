// api/og.js
const PRODUCTS = require('./products-data');

export default function handler(req, res) {
  const { id } = req.query;
  const p = PRODUCTS.find(p => String(p.id) === String(id));

  if (!p) return res.redirect('/boutique.html');

  const base = 'https://juliette-s-cosmetics-shop.vercel.app';
  const imgId = String(p.id).padStart(2, '0');
  const imgURL = `${base}/images/produits/prod-${imgId}.jpg`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(`<!DOCTYPE html><html lang="fr"><head>
    <meta charset="UTF-8"/>
    <meta property="og:title" content="${p.name} — Juliette's Cosmetics Shop"/>
    <meta property="og:description" content="${p.desc}"/>
    <meta property="og:image" content="${imgURL}"/>
    <meta property="og:url" content="${base}/produit.html?id=${id}"/>
    <meta property="og:type" content="product"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta http-equiv="refresh" content="0; url=${base}/produit.html?id=${id}"/>
  </head><body>Redirection...</body></html>`);
}