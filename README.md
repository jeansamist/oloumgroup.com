# oloumgroup.com

Site du groupe **Oloum Group** (Yves Oloume SARL · Bella Location · l'Usine). Next.js 16 + React 19 + Tailwind CSS v4, bilingue FR/EN, animations GSAP + Lenis (reprises du site Supplies and Works), couleurs du site Yves Oloume SARL.

```bash
pnpm install
pnpm dev        # http://localhost:3000 → /fr
pnpm build      # build de production (type-check inclus)
pnpm copy       # régénère docs/03-*.md depuis les dictionnaires
```

## Documentation
- `docs/00-presentation-des-entites.md` — document client
- `docs/01-COMPREHENSION-DU-PROJET.md` — le travail et le groupe
- `docs/02-STRUCTURE-ET-ANIMATIONS.md` — plan du site (24 pages), composants, animations
- `docs/03-COPY-DU-SITE.md` / `docs/03-WEBSITE-COPY-EN.md` — copy complète (générée)
- `docs/04-GUIDE-DE-STYLE.md` — couleurs, typo, formes, logos, OG
- `docs/05-A-FOURNIR.md` — **contenu maquetté à valider avec le client**

## Déploiement (Vercel)
Importer le dépôt dans Vercel (framework Next.js détecté). Sans `NEXT_PUBLIC_SITE_URL`, l'URL canonique, le sitemap et les images Open Graph utilisent automatiquement le domaine Vercel ; les previews sont exclues de l'indexation. Quand oloumgroup.com pointe vers Vercel : `NEXT_PUBLIC_SITE_URL=https://www.oloumgroup.com`.

## Images Open Graph
Générées pour chaque page et chaque langue (`opengraph-image.tsx` dans chaque dossier de page, rendu commun dans `src/lib/og.tsx`) : `/{fr|en}/{page}/opengraph-image`.
