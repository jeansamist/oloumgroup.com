# Oloum Group – Compréhension du projet

Document de cadrage. Il résume **le travail demandé** (1) et **le groupe** (2) avant d'écrire la copy, la structure et le style. Source : `00-presentation-des-entites.md` (document client) et le site déjà livré pour Yves Oloume SARL.

---

## 1. Le travail demandé

| Point | Décision |
|---|---|
| Livrable | Site vitrine du groupe : **oloumgroup.com** |
| Rôle du site | Réunir les entités **sous une seule identité**, tout en gardant **chaque secteur clairement distinct**. C'est la « maison mère » qui oriente le visiteur vers la bonne entité. |
| Langues | Français par défaut (`/fr`), anglais (`/en`), comme le site Yves Oloume |
| Technologies | Identiques aux deux projets de référence : **Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + TypeScript**. Animations reprises de Supplies and Works : **GSAP (ScrollTrigger, SplitText) + Lenis**. |
| Organisation du code | Celle du site Yves Oloume : `src/`, dictionnaires `fr.ts` / `en.ts`, `proxy.ts` pour les langues, `buildMetadata()`, JSON-LD |
| Animations | Celles de Supplies and Works : loader de marque, rideau entre les pages, curseur personnalisé, titres révélés ligne par ligne, texte coloré mot par mot, cartes en défilement horizontal épinglé, piliers épinglés reliés par une ligne, compteurs, boutons magnétiques, cartes 3D, marquee, wordmark géant dans le footer, barre de progression |
| Couleurs | **Celles du site Yves Oloume** : rouge `#920F15`, rouge foncé `#6E0B10`, ambre `#FCAE42`, encre `#1A1A1A`, béton `#F3F4F6` |
| Hébergement | **Vercel** pour l'instant. L'URL du site est déduite automatiquement de Vercel ; il suffira de renseigner `NEXT_PUBLIC_SITE_URL=https://www.oloumgroup.com` quand le domaine sera branché. |
| Images de partage | **Images Open Graph générées** pour chaque page et chaque langue (1200 × 630), aux couleurs du groupe |
| Logos | **Maquettés** pour l'instant (composant unique `Logo` / `EntityMark`), à remplacer quand le client les fournira |
| Copy | Il n'existe pas de texte : il est écrit dans `03-COPY-DU-SITE.md`, sans chiffre ni référence inventés. Tout ce qui est incertain est entre `[CROCHETS]` et s'affiche comme une pastille « à compléter » sur le site. |

---

## 2. Le groupe

### 2.1 La promesse

> **Construire, louer et, à terme, produire.**

Le groupe ne vend pas un produit de plus : il couvre **toute la vie d'un bâtiment préfabriqué**. On peut l'acheter (Yves Oloume SARL), le louer (Bella Location) et, demain, il sera fabriqué par le groupe (l'Usine).

### 2.2 L'arbre du groupe

```
                         OLOUM GROUP
                 une identité, plusieurs métiers
                              │
      ┌───────────────────────┼─────────────────────────┐
      │                       │                         │
 YVES OLOUME SARL        BELLA LOCATION              L'USINE
 Construit et vend          Loue                  Fabriquera
 (vente + services)       (location)            (projet futur)
      │
  ┌───┴────────────────────────────┐
  │                                │
 Pôle Développeur de           Pôle Construction
 bâtiments préfabriqués        & Logistics
  · Bureaux                     · Construction BTP
  · Habitations / logements     · Rénovation de bâtiments
  · Sanitaires                  · 15 solutions de rayonnage
  · Campements                  · Cerclage
  · Cantines                    · Aménagement de conteneurs shipping
  · Bungalows                   · Autres services [à compléter]
  · Entrepôts
  · Modules de stockage
  → livrés vides ou entièrement équipés
```

### 2.3 Ce qui relie les entités

- **Un même produit, deux modèles** : le bâtiment préfabriqué est **vendu** par Yves Oloume SARL et **loué** par Bella Location. Le site doit rendre ce choix évident (« Acheter ou louer ? »).
- **Une chaîne complète** : l'Usine viendra compléter l'ensemble par la production.
- **Un ancrage** : Douala (Akwa), Cameroun ; Yves Oloume SARL existe depuis 2010.

### 2.4 Ce que chaque entité doit garder

| Entité | Message principal | Action attendue du visiteur |
|---|---|---|
| Yves Oloume SARL – Préfabriqué | Des bâtiments modulaires pour chaque usage, livrés vides ou équipés | Demander un devis |
| Yves Oloume SARL – Construction & Logistics | Construire, rénover, stocker : BTP, rayonnages, cerclage, conteneurs | Demander un devis / un conseil rayonnage |
| Bella Location | Un bâtiment préfabriqué disponible sans investissement lourd | Demander une disponibilité |
| L'Usine | La prochaine étape du groupe | Être informé |

### 2.5 Faits confirmés que l'on peut utiliser

- Yves Oloume SARL : créée en **2010**, à **Akwa, Douala** (114 Rue Joffre), tél. **+237 676 31 33 33**, `info@yves-oloume.com` (site existant).
- **8 types** de bâtiments et modules préfabriqués (liste ci-dessus).
- **15 solutions de rayonnage**, dont 9 nommées.
- Deux pôles chez Yves Oloume SARL, trois entités dans le groupe (dont une en projet).

### 2.6 Points ouverts (repris du document client)

Ils sont affichés sur le site comme placeholders et listés dans `05-A-FOURNIR.md` :

1. Bella Location loue-t-elle aussi d'autres équipements (conteneurs, rayonnages, engins) ?
2. Les rayonnages : fabriqués ou revendus ? Rattachement confirmé à Construction & Logistics ?
3. Liste complète des services d'Yves Oloume SARL.
4. L'Usine : produits, calendrier, niveau d'annonce (le site la **teaser** sans rien promettre).
5. Coordonnées propres au groupe et à Bella Location, logos, dirigeants.
