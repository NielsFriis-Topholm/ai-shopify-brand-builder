# AI Shopify Brand Builder — funnel

To landingssider (statisk HTML/CSS/JS), klar til GitHub + Vercel.

```
index.html        → Side 1: hovedlandingsside / claim-side
secure-spot.html  → Side 2: post opt-in "sikr din plads"-side
styles.css        → Al styling (rediger farver/fonts øverst i :root)
script.js         → FAQ-accordion + video-pladsholdere
vercel.json       → Vercel-konfiguration (nul opsætning)
```

## Rediger indhold
Al tekst står direkte i HTML-filerne. Søg efter `[ ... ]` — det er pladsholdere du skal udfylde (dit navn, tal, screenshots). Farver og fonts ligger i toppen af `styles.css` under `:root`.

Video: erstat blokkene med `data-video` med et rigtigt `<iframe>` (YouTube/Wistia/Vimeo), når du har en VSL.

## Deploy: GitHub + Vercel

**1. Lav repo lokalt og push til GitHub**
```bash
cd ai-shopify-brand-builder
git init
git add .
git commit -m "Initial funnel"
git branch -M main
git remote add origin https://github.com/DIT-BRUGERNAVN/ai-shopify-brand-builder.git
git push -u origin main
```

**2. Deploy på Vercel**
- Gå til vercel.com → "Add New… → Project"
- Importér dit GitHub-repo
- Framework Preset: **Other** (det er en ren statisk side)
- Klik **Deploy** — færdig. Hver ny `git push` deployer automatisk.

Alternativt med Vercel CLI:
```bash
npm i -g vercel
vercel        # preview
vercel --prod # live
```

## ⚠️ Før du går live
- Erstat ALLE resultater, testimonials og indtjeningstal med rigtige, dokumenterbare data. Undgå konkrete indkomstpåstande du ikke kan bevise.
- Brug kun rigtige testimonials med samtykke.
- Tjek at "partner"-logoer kun viser platforme du faktisk samarbejder med.
- Få handelsbetingelser + privatlivspolitik på plads.
