const PRODUCTS = [
  { id:1,  name:"Pince Cheveux Papillon", desc:"Pince cristal rose et dorée — légère, élégante, s'adapte à tous les cheveux." },
  { id:2,  name:"Gloss Lip", desc:"Lip oil fruité 3-en-1 — Vitamine fraise, Magic Lip Oil rose VE+VC et VC orange." },
  { id:3,  name:"Scrunchies Satin", desc:"Satin lisse, +20 couleurs. Doux sur les cheveux, ne laisse aucune marque." },
  { id:4,  name:"Petits Bandeaux", desc:"Bandeaux colorés multicolores — rose, rouge, vert, bleu, violet, jaune, gris." },
  { id:5,  name:"Bracelets Perles Charms", desc:"Perles transparentes et roses avec charms kawaii — ourson, donut, sucette, cadenas." },
  { id:6,  name:"Bracelets Perles Lollipop", desc:"Bracelets perles roses avec charms sucettes colorées kawaii. Pack de 5." },
  { id:7,  name:"Parfum Bic YARA", desc:"Parfums bic YARA — 4 variantes : blanc, orange, rose foncé, rose clair. Longue tenue." },
  { id:8,  name:"Parfum Vanilla Crush Body Mist", desc:"Body Mist 100ml — caramel salé, pistache et vanille douce. Senteur ensoleillée." },
  { id:9,  name:"Tasty Lip Gloss Romantic May", desc:"Lip gloss tube squeeze — 5 teintes : rose vif, doré, transparent, glacé, nude brun." },
  { id:10, name:"Lip Oil Strawberry", desc:"Lip oil packaging kawaii fraise — hydrate et fait briller les lèvres." },
  { id:11, name:"Fruity Lip Oil Magic Shieglan", desc:"Lip oil fruité Magic — 6 variantes : pastèque, raisin, avocat, fraise, mangue, cerise." },
  { id:12, name:"Masque Visage Botany & Fruits Sadoer", desc:"Masques tissu hydratants Sadoer — Fraise, Avocat, Concombre et Aloe Vera." },
  { id:13, name:"Colliers Pendentifs Dorés", desc:"Chaîne dorée avec pendentifs — +18 modèles : papillon, rose, cœur, croix, guitare..." },
  { id:14, name:"Parure Perles & Logo Doré VD", desc:"Parure 3 pièces — collier perles, bracelet et boucles d'oreilles logo VD doré." },
  { id:15, name:"Parure Perles & Logo DD", desc:"Parure 3 pièces perles nacrées — collier, bracelet et boucles d'oreilles logo DD." },
  { id:16, name:"Parure Perles & Fleurs Cristal", desc:"Parure 3 pièces — collier, bracelet et boucles d'oreilles fleur cristal strass." },
  { id:17, name:"Parure Perles & Noeud Doré", desc:"Parure 3 pièces — collier perles et boucles d'oreilles nœud doré avec perle pendante." },
  { id:18, name:"Body Mist Sol de Janeiro", desc:"Body mist Sol de Janeiro — 5 variantes tropicales N°40, 62, 68, 59, 63." },
  { id:19, name:"Crayon Contour Lèvres e.l.f", desc:"e.l.f Cream Glide Lip Liner — texture crémeuse, tracé précis, teintes brunes chaudes." },
  { id:20, name:"Set Pinces Fleur Frangipanier", desc:"Set 3 pinces — 1 grande pince crabe + 2 barrettes, bleu ciel effet cristal." },
  { id:21, name:"Set Bracelets Perles Rose Kawaii", desc:"Bracelets perles rose nacré avec charms kawaii — ourson, fleur. À superposer." },
  { id:22, name:"Porte-clé Pompon & Gloss Licorne", desc:"Porte-clé 2-en-1 — pompon rose poudré et mini gloss intégré. Pendentif licorne." },
  { id:23, name:"Porte-clé Gloss & Charm Ourson Happy", desc:"Porte-clé 2-en-1 — gloss transparent avec charm ourson kawaii multicolore." },
  { id:24, name:"Grand Bandeau Satin Uni", desc:"Grand bandeau large satin — rose vif et rose poudré. Idéal démaquillage ou soin." },
  { id:25, name:"Set Bracelets Perles Craquelées & Charms", desc:"Bracelets perles craquelées rose — charms My Melody, cœur, glace, mini bouteille." },
  { id:26, name:"Set Skincare Bandeau Bulle & Gants", desc:"Set 2-en-1 — bandeau éponge bulle + gants démaquillants. 7 couleurs. Réutilisable." },
  { id:27, name:"Set Montre Geneva Cadran Noir & Bracelets Camel", desc:"Coffret homme — montre Geneva Quartz cadran noir + bracelet cuir camel + 3 bracelets." },
  { id:28, name:"Set Montre Geneva Cadran Blanc & Bracelets Camel", desc:"Coffret homme — montre Geneva Quartz cadran blanc + bracelet cuir camel + 3 bracelets." },
  { id:29, name:"Set Montre Geneva Cadran Blanc & Bracelets Noir", desc:"Coffret homme — montre Geneva Quartz cadran blanc + bracelet cuir noir + 3 bracelets." },
  { id:30, name:"Set Montre Geneva Cadran Noir Gold & Bracelets Noir", desc:"Coffret homme — montre Geneva cadran noir gold + bracelet cuir noir. Luxueux." },
  { id:31, name:"Coffret Montre Oullva Cadran Doré & Bracelets Rouge", desc:"Coffret femme — montre Oullva cadran doré + 2 bracelets perles craquelées rouges." },
  { id:32, name:"Coffret Montre Oullva Cadran Noir & Bracelets Noires", desc:"Coffret femme — montre Oullva cadran noir + 2 bracelets perles noires avec charm." },
  { id:33, name:"Coffret Montre Oullva Cadran Blanc & Bracelets Caramel", desc:"Coffret femme — montre Oullva cadran blanc + 2 bracelets perles cristal caramel." },
  { id:34, name:"Coffret Montre RRADD Rose & Bracelets Fuchsia", desc:"Coffret femme — montre RRADD carrée rose avec strass + 2 bracelets fuchsia Love." },
  { id:35, name:"Coffret Montre Quartz Bleu & Bracelets Bleues", desc:"Coffret femme — montre Quartz bleu marine + 2 bracelets perles bleues avec charms." },
  { id:36, name:"Set Fashion Jewelry Orange", desc:"Set 3 pièces — bracelet jonc laqué, bague et boucles d'oreilles. Finition orange vif." },
  { id:37, name:"Set Fashion Jewelry Bleu", desc:"Set 3 pièces — bracelet jonc laqué, bague et boucles d'oreilles. Finition bleu royal." },
  { id:38, name:"Set Fashion Jewelry Violet", desc:"Set 3 pièces — bracelet jonc laqué, bague et boucles d'oreilles. Finition violet." },
  { id:39, name:"Set Fashion Jewelry Jaune", desc:"Set 3 pièces — bracelet jonc laqué, bague et boucles d'oreilles. Finition jaune soleil." },
  { id:40, name:"Set Fashion Jewelry Fuchsia", desc:"Set 3 pièces — bracelet jonc laqué, bague et boucles d'oreilles. Finition fuchsia." },
  { id:41, name:"Set Fashion Jewelry Rouge", desc:"Set 3 pièces — bracelet jonc laqué, bague et boucles d'oreilles. Finition rouge passion." },
  { id:42, name:"Pince Crabe Rose Cristal", desc:"Pince crabe en forme de rose sculptée cristal. 2 coloris : bleu ciel et rouge corail." },
  { id:43, name:"Pince Crabe Fleur Cristal Strass", desc:"Pince crabe fleur cristal avec strass. 3 coloris : violet lilas, rose irisé, bleu turquoise." },
  { id:44, name:"Bandeau Dur Côtelé Pastel", desc:"Bandeau dur côtelé stretch — 7 couleurs pastels. Sport, routine beauté ou accessoire." },
  { id:45, name:"Perles en Bois Naturel", desc:"Sachet de perles en bois — blanc ivoire, beige, camel, marron, noir. Idéal DIY." },
  { id:46, name:"Bracelets Girly Perles & Charms Kawaii", desc:"Bracelets perles craquelées rose/jaune avec charms 3D — ourson, lollipop, marguerite." },
  { id:47, name:"Masque Visage MZWE Naturel", desc:"Masque tissu MZWE 25ml — Avocat, Citron, Orange, Coco. Hydratation profonde." },
  { id:48, name:"Patch Anti-Boutons Étoile", desc:"Patches étoile anti-boutons — absorbent sébum, réduisent inflammation. Colorés et discrets." },
  { id:49, name:"Eye Mask Patches Yeux Sadoer", desc:"Patches hydrogel contour yeux Sadoer — Sakura Essence rose et Hyaluronic Acid bleu." },
  { id:50, name:"Masque Lèvres Hydrogel Bioaqua", desc:"Patch hydrogel lèvres Bioaqua — hydrate, repulpe et adoucit intensément." },
  { id:51, name:"Crème Mains Parfumée Segmola", desc:"Crème mains Segmola — 8 senteurs : Myrtille, Rose, Citron, Lavande, Thé vert, Aloe..." },
  { id:52, name:"Rasoir Dermaplaning Sourcils & Visage", desc:"Rasoir dermaplaning — sourcils, duvet, contours. Lame acier. 3 couleurs." },
  { id:53, name:"Parfum Concentré Fidèle Paris", desc:"Concentré de parfum Fidèle Paris 5ml à bille — floral féminin longue tenue." },
];

export default function handler(req, res) {
  const { id } = req.query;
  const p = PRODUCTS.find(p => String(p.id) === String(id));

  if (!p) {
    res.redirect(302, '/boutique.html');
    return;
  }

  const base = 'https://juliette-s-cosmetics-shop.vercel.app';
  const imgId = String(p.id).padStart(2, '0');
  const imgURL = `${base}/images/produits/prod-${imgId}.jpg`;
  const prodURL = `${base}/produit.html?id=${id}`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache');
  res.status(200).send(`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8"/>
  <meta property="og:title" content="${p.name} — Juliette's Cosmetics Shop"/>
  <meta property="og:description" content="${p.desc}"/>
  <meta property="og:image" content="${imgURL}"/>
  <meta property="og:image:width" content="800"/>
  <meta property="og:image:height" content="800"/>
  <meta property="og:url" content="${prodURL}"/>
  <meta property="og:type" content="product"/>
  <meta property="og:site_name" content="Juliette's Cosmetics Shop"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="${p.name} — Juliette's Cosmetics Shop"/>
  <meta name="twitter:description" content="${p.desc}"/>
  <meta name="twitter:image" content="${imgURL}"/>
  <meta http-equiv="refresh" content="0; url=${prodURL}"/>
</head>
<body>
  <p>Redirection vers le produit...</p>
  <script>window.location.href = "${prodURL}";</script>
</body>
</html>`);
}

