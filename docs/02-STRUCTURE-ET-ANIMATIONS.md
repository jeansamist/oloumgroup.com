# Oloum Group – Structure du site et animations

## 1. Principes

1. **Une identité, des métiers distincts.** Le groupe est la porte d'entrée ; chaque entité a sa page, sa couleur de repère et son appel à l'action.
2. **Orienter avant de vendre.** La question clé du visiteur est « à qui je m'adresse ? ». L'organigramme, le méga-menu, la bascule *Acheter / Louer* et le sélecteur du formulaire de contact y répondent.
3. **Construire · Louer · Produire.** Ce triptyque revient dans le hero, la section modèle, le footer et l'image de partage.
4. **Rien d'inventé.** Les manques sont des placeholders visibles (`[…]`), listés dans `05-A-FOURNIR.md`.
5. **Vivant mais sobre.** Les animations de Supplies and Works, désactivées par `prefers-reduced-motion`.

## 2. Plan du site (24 pages + 4 articles, × 2 langues)

| # | Page | URL (identique en `/fr` et `/en`) | Rôle |
|---|---|---|---|
| 1 | Accueil | `/` | Orientation et image du groupe |
| 2 | Le groupe | `/le-groupe` | Raison d'être, mission/vision, organigramme, principes, organisation |
| 3 | Notre histoire | `/le-groupe/histoire` | Frise 2010 → 2028, fondateur, archives |
| 4 | Direction | `/le-groupe/direction` | Comité de direction, gouvernance |
| 5 | Engagements | `/engagements` | Qualité, sécurité, environnement, emploi local |
| 6 | Yves Oloume SARL | `/yves-oloume-sarl` | Entité « construit et vend », ses deux pôles |
| 7 | Bâtiments préfabriqués | `/yves-oloume-sarl/batiments-prefabriques` | 8 familles, vide / équipé, fiche technique, méthode |
| 8 | Construction & Logistics | `/yves-oloume-sarl/construction-logistique` | Pôle 2 : BTP, rayonnages, services |
| 9 | Construction et rénovation | `/yves-oloume-sarl/construction-renovation` | BTP classique, rénovation |
| 10 | Rayonnages | `/yves-oloume-sarl/rayonnages` | Les 15 solutions (liste interactive) |
| 11 | Conteneurs aménagés | `/yves-oloume-sarl/conteneurs-amenages` | Usages, formats 20/40 pieds |
| 12 | Bella Location | `/bella-location` | Entité « loue » |
| 13 | Catalogue de location | `/bella-location/catalogue` | Tableau du parc, packs |
| 14 | Formules | `/bella-location/formules` | Courte durée, chantier, longue durée |
| 15 | L'Usine | `/usine` | Teaser du projet de production, feuille de route |
| 16 | Secteurs | `/secteurs` | 9 secteurs clients |
| 17 | Réalisations | `/realisations` | 14 projets filtrables |
| 18 | Actualités | `/actualites` (+ 4 articles `/actualites/[slug]`) | Blog |
| 19 | Carrières | `/carrieres` | Offres, recrutement |
| 20 | FAQ | `/faq` | Questions par entité |
| 21 | Contact | `/contact` | Sélecteur de besoin → entité, formulaire, carte |
| 22 | Devis | `/devis` | Formulaire en 3 étapes avec récapitulatif |
| 23 | Mentions légales | `/mentions-legales` | Légal |
| 24 | Confidentialité | `/confidentialite` | Données personnelles |
| – | 404 | `/page-introuvable` (interne) | Erreur localisée |

Les pages sont **pilotées par les données** : chaque page du dictionnaire = un hero + une liste de blocs typés (`src/i18n/types.ts`), rendus par `src/components/sections/Blocks.tsx`. Ajouter une section à une page = ajouter un bloc dans le dictionnaire (FR et EN).

Les URL non préfixées redirigent vers `/fr/...` (`src/proxy.ts`). Toute nouvelle page doit être ajoutée à `src/lib/routes.ts`.

### Navigation
- **Header** : transparent sur le hero, devient plein au scroll, se masque en descendant et réapparaît en remontant. Logo · Le groupe · Nos entités (méga-menu) · Contact · bouton *Nous contacter* · FR/EN.
- **Méga-menu** : cartes des entités (avec leur pastille de couleur) + panneau ambre « Acheter ou louer ? ».
- **Mobile** : menu plein écran rouge foncé en rideau, liens géants numérotés.

## 3. Composants globaux et animations (repris de Supplies and Works)

| Élément | Comportement | Fichier |
|---|---|---|
| Loader de marque | Logo + compteur 000 → 100, puis rideau ambre puis rouge qui se lèvent. Une fois par session. | `components/layout/Loader.tsx` |
| Transition de page | Rideau rouge avec le nom de la page, balayé vers le haut | `components/motion/PageTransition.tsx` |
| Défilement fluide | Lenis, synchronisé au ticker GSAP | `components/motion/SmoothScroll.tsx` |
| Directeur d'animations | Attributs `data-*` lus par GSAP (voir § 4) | `components/motion/MotionDirector.tsx` |
| Curseur | Point + anneau, état « Voir » sur les images, « Glisser » sur le scroller | `components/layout/Cursor.tsx` |
| Barre de progression | Ligne ambre en haut de page | `components/layout/ScrollProgress.tsx` |
| Boutons | Remplissage qui monte au survol, pastille flèche qui tourne, magnétiques sur les CTA | `components/ui/Button.tsx` |
| Cartes | Inclinaison 3D + halo qui suit le curseur | `components/ui/TiltCard.tsx` |
| Marquee | Bandeau infini, pause au survol | `components/ui/Marquee.tsx` |
| Footer | CTA magnétique, marquee « Construire ✦ Louer ✦ Produire », wordmark géant dont la graisse suit le curseur, retour en haut avec anneau de progression | `components/layout/Footer.tsx` |

## 4. Attributs d'animation (pour les Server Components)

| Attribut | Effet |
|---|---|
| `data-reveal` | Fondu + montée à l'entrée |
| `data-reveal="stagger"` | Idem, enfant par enfant |
| `data-reveal="clip"` | Image révélée par un masque bas → haut, léger dézoom |
| `data-split` | Titre révélé ligne par ligne derrière un masque |
| `data-words` | Paragraphe dont les mots s'allument au scroll |
| `data-parallax="0.15"` | L'enfant `[data-parallax-inner]` dérive au scroll |
| `data-count` | Le nombre s'incrémente à l'apparition |
| `.mark-anim` | Surlignage ambre qui se dessine |

## 5. Sections signatures

1. **Hero accueil** : diaporama de photos du client en fondu enchaîné avec zoom lent, parallaxe au curseur, grille technique en filigrane, mot tournant *construire / louer / produire* surligné, boutons magnétiques, preuves, indicateur de scroll.
2. **Organigramme interactif** (`GroupTree`) : la maison mère puis trois branches ; les connecteurs se dessinent au scroll, les nœuds apparaissent en cascade ; au survol d'une entité, sa branche s'allume et les autres s'estompent. L'Usine est en pointillés avec un badge « Bientôt ».
3. **Entités en défilement horizontal épinglé** (`EntityScroller`) : desktop, le scroll vertical fait avancer quatre grandes cartes ; l'image se révèle au survol. Mobile : cartes empilées.
4. **Construire · Louer · Produire** (`ModelPillars`) : bande sombre épinglée, une ligne ambre relie les trois piliers qui s'allument un à un.
5. **Acheter / Louer** (`BuyOrRent`) : bascule animée (pastille glissante) qui change le contenu, l'image et l'entité recommandée.
6. **Compteurs** sur fond rouge.
7. **Galerie « Sur le terrain »** : grille d'images révélées par masque, légende au survol, curseur « Voir ».
8. **Teaser Usine** : fond encre, grain, plan de fabrication stylisé dont les lignes se dessinent.
9. **Liste des rayonnages** (`IndexList`) : liste numérotée 01–15, chaque ligne se remplit au survol.
10. **Vide / Équipé** : même composant de bascule que *Acheter / Louer*.
11. **Processus** : cartes empilées collantes (sticky).

## 6. Gabarit des pages entités

1. Hero de page : fil d'Ariane, badge du rôle (« Construit et vend », « Loue », « Bientôt »), titre, texte, image en parallaxe, marque de l'entité.
2. Introduction mot par mot.
3. Corps : 2 à 4 sections (grilles, bascule, liste, processus).
4. Renvoi vers l'entité sœur (acheter ↔ louer).
5. FAQ si utile.
6. CTA final + footer.

## 7. SEO et partage

- `generateMetadata` sur chaque page via `buildMetadata()` (titre, description, canonique, hreflang FR/EN + x-default).
- **Image Open Graph générée par page et par langue** (`opengraph-image.tsx` dans chaque dossier, rendu partagé dans `src/lib/og.tsx`) : fond encre, bande rouge, titre de la page en Archivo, pastille de l'entité, signature *Construire · Louer · Produire*, domaine.
- JSON-LD : `Organization` (Oloum Group) avec `subOrganization` (Yves Oloume SARL, Bella Location), `WebSite`, `BreadcrumbList` sur les pages internes.
- `sitemap.xml`, `robots.txt` (bloque les previews Vercel), `manifest.webmanifest`, favicon SVG.

## 8. Règles techniques

- Next.js 16 App Router, Server Components par défaut, `"use client"` uniquement pour l'interactivité.
- Contenu dans `src/i18n/dictionaries` (FR = source et type, EN typé contre FR).
- Images locales importées statiquement (`next/image`, `placeholder="blur"`).
- Accessibilité : lien d'évitement, focus visibles, `aria-*` sur menus et bascules, contraste AA, `prefers-reduced-motion`.
- Hébergement Vercel ; `NEXT_PUBLIC_SITE_URL` à renseigner quand oloumgroup.com sera branché.
