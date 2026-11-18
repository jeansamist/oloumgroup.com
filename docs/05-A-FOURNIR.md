# Oloum Group – Contenu maquetté à valider avec le client

Le site est rempli de **contenu de démonstration réaliste** pour montrer le rendu final. Tout ce qui suit est **inventé** et doit être confirmé, corrigé ou supprimé avec le client. Le texte se modifie dans `src/i18n/dictionaries/fr/*.ts` (puis `en/*.ts`), et `pnpm copy` régénère les fichiers de copy.

Un mention « Contenu de démonstration — à valider » est affichée sur le site sous les réalisations, témoignages, équipe et articles (`common.mockNote`) : la retirer avant la mise en ligne.

## Faits confirmés (document client + site Yves Oloume)
- Structure du groupe : Yves Oloume SARL (2 pôles), Bella Location, l'Usine (projet futur)
- Yves Oloume SARL : créée en 2010, 114 Rue Joffre, Akwa, Douala, +237 676 31 33 33, info@yves-oloume.com
- Les 8 types de bâtiments, livrés vides ou équipés ; 9 des 15 rayonnages ; cerclage ; aménagement de conteneurs ; construction BTP et rénovation
- Bella Location loue des bâtiments préfabriqués

## Identité
- [ ] **Logos** (SVG) d'Oloum Group, Yves Oloume SARL, Bella Location, l'Usine → remplacer `src/components/ui/Logo.tsx` (`Logo`, `ModuleMark`, `EntityMark`) et la marque dans `src/lib/og.tsx` + `src/app/icon.svg`
- [ ] Forme juridique, capital (10 000 000 FCFA inventé), RCCM, NIU → `pages-other.ts` (mentions légales)

## Chiffres inventés
- [ ] 650+ bâtiments livrés · 140 collaborateurs · 300+ clients · 120+ entrepôts équipés · 40 conteneurs/an
- [ ] Bella Location : 350+ modules, livraison 72 h, 95 % de renouvellement, durée minimale, caution
- [ ] Délai de devis 48 h · délais 4 à 12 semaines · garantie 10 ans structure / 2 ans équipements
- [ ] Prix indicatif 180 000 – 350 000 FCFA/m² (FAQ préfabriqué)
- [ ] **Tarifs du catalogue de location** (tableau complet) et packs
- [ ] Engagements : 92 % recrutement local, 5 réutilisations par module, 100 % formés

## Histoire et personnes
- [ ] Frise : 2012, 2014, 2016, 2018, 2020 (Bella Location), 2023, 2026 (création du groupe) — seule l'année 2010 est confirmée
- [ ] Comité de direction : seul « Yves Oloume, Fondateur et Président » est nommé (à confirmer) ; les 5 autres postes sont génériques
- [ ] Photos des dirigeants (monogrammes en attendant)

## Projets, témoignages, articles, offres
- [ ] Les **14 réalisations** (titres, villes, années, descriptions) — photos réelles d'Yves Oloume, légendes inventées
- [ ] Les **5 témoignages**
- [ ] Les **4 articles** d'actualité (dates et contenus)
- [ ] Les **6 offres d'emploi**

## Offre
- [ ] Les 6 rayonnages ajoutés pour compléter la gamme de 15 (palettes conventionnel, accumulation, mezzanine, pneus, archives, galvanisé extérieur)
- [ ] Rayonnages : fabriqués ou revendus ? (le site dit « fabricants partenaires »)
- [ ] Services ajoutés : montage, inspection, aménagement d'entrepôt, transport et levage
- [ ] Liste des équipements « entièrement équipé » et fiche technique (dimensions, épaisseurs, R+2…)
- [ ] Bella Location : loue-t-elle aussi conteneurs / rayonnages / engins ? Transport et maintenance inclus ? Option d'achat ?
- [ ] Conteneurs : surfaces et délais indicatifs

## L'Usine (entièrement projeté)
- [ ] Produits (panneaux sandwich, modules, rayonnages), calendrier (2026 → 2030), surface 8 000 m², 300 modules/an, 80 emplois
- [ ] Niveau d'annonce souhaité : teaser seulement ?

## Contact
- [ ] E-mail du groupe `contact@oloumgroup.com` (proposé) ; téléphone et e-mail de Bella Location (`+237 6XX…`, `contact@bella-location.cm` inventés) ; `usine@oloumgroup.com`
- [ ] Le siège du groupe est-il bien au 114 Rue Joffre ?
- [ ] Réseaux sociaux

## Photos
- [ ] Photos propres à Bella Location, aux rayonnages (la photo `warehouse.jpg` montre une coursive, pas un entrepôt), au projet d'usine, à l'équipe

## Technique
- [ ] Brancher oloumgroup.com sur le projet Vercel puis définir `NEXT_PUBLIC_SITE_URL=https://www.oloumgroup.com`
- [ ] Formulaires : aujourd'hui sans serveur (e-mail pré-rempli ou WhatsApp). Choisir un service d'envoi si besoin
- [ ] Newsletter : brancher un outil d'e-mailing (`components/layout/FooterParts.tsx`)
