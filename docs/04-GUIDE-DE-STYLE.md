# Oloum Group – Guide de style

> L'idée en une phrase : **la rigueur d'un bureau d'études, la chaleur d'un chantier camerounais.** Des titres massifs, des lignes techniques fines, du rouge profond et une seule touche ambre.

Trois mots : **Solide · Clair · Chaleureux.**

## 1. Couleurs (reprises du site Yves Oloume SARL)

| Nom | Hex | Rôle |
|---|---|---|
| **Rouge Oloum** | `#920F15` | Couleur principale : bandes, chiffres, liens, eyebrows |
| **Rouge profond** | `#6E0B10` | Texte sur ambre, menu mobile, survols |
| **Ambre** | `#FCAE42` | Seul accent : CTA, surlignage, états actifs, barre de progression |
| **Encre** | `#1A1A1A` | Texte, bandes sombres |
| **Nuit** | `#111111` | Fond des sections sombres et des images OG |
| **Béton** | `#F3F4F6` | Fonds de section clairs |
| **Ligne** | `#D9DADE` | Bordures, séparateurs |
| **Gris texte** | `#666666` | Texte secondaire |
| **Blanc** | `#FFFFFF` | Fond principal |

**Repère par entité** (pastille, filet, badge — jamais un fond complet) :
- Oloum Group : Rouge `#920F15`
- Yves Oloume SARL : Rouge profond `#6E0B10` + ambre
- Bella Location : Ambre `#FCAE42`
- L'Usine : Encre `#1A1A1A`, traits en pointillés

**Proportions** : 60 % blanc/béton · 30 % encre et rouge · 10 % ambre maximum.

**Contraste** : ✅ Rouge profond sur ambre · Ambre sur encre · Blanc sur rouge · Encre sur blanc. ❌ Jamais d'ambre en texte sur fond blanc : sur fond clair l'ambre est un **remplissage** (surlignage, pastille, bouton).

## 2. Typographie

| Rôle | Police | Graisses |
|---|---|---|
| Titres | **Archivo** (variable) | 750–800, interlignage 1.02–1.1, approche −0.035 em |
| Texte | **IBM Plex Sans** | 400 texte, 500 labels, 600 boutons |
| Eyebrows, numéros, données | **IBM Plex Mono** | 500–600, MAJUSCULES, +0.1 em |

**La signature : le surlignage ambre.** Dans chaque titre, un ou deux mots (`*mots*` dans la copy) reçoivent une barre ambre de 60 % à 92 % de la hauteur du texte, qui se dessine de gauche à droite. Sur fond sombre, le mot est simplement en ambre.

**Eyebrow** : Plex Mono 12 px, rouge, précédé d'un petit carré ambre : `■ NOS ENTITÉS`.

## 3. Formes

- **Angles francs** : rayon 2 px sur les boutons et les cartes (héritage Yves Oloume, esprit construction). Les images de grande taille ont 0 à 4 px.
- **Boutons** : ambre, texte rouge profond, carré rouge profond à droite avec une flèche ↗ qui tourne au survol ; remplissage encre qui monte.
- **Cartes** : blanc, filet 1 px `#D9DADE`, numérotation `01` en Plex Mono, filet ambre qui se dessine en bas au survol.
- **Lignes techniques** : grille de 32 / 80 px à 4–6 % d'opacité, comme un plan. Repères d'angle (petites équerres) sur les images.
- **Séparateurs** : ✦ et `·` (Construire ✦ Louer ✦ Produire).
- **Grain** léger sur les sections sombres.

## 4. Motifs de marque

1. **L'organigramme** : nœuds rectangulaires reliés par des traits fins, l'entité active en ambre.
2. **Le module** : un carré isométrique simple (3 faces) qui sert de motif et de marque maquette.
3. **La bande de piliers** : Construire ✦ Louer ✦ Produire, en Archivo, sur ambre.
4. **Le plan** : grille fine et cotes, utilisé sur le teaser Usine.

## 5. Logos (provisoires)

Tant que les logos ne sont pas fournis, le composant `Logo` affiche une **marque maquette** : un module isométrique (trois faces rouge / rouge profond / ambre) + le nom en Archivo. Chaque entité a sa variante (`EntityMark`) avec ses initiales (`YO`, `BL`, `U`). Pour intégrer les vrais logos, remplacer le contenu de `src/components/ui/Logo.tsx` ; rien d'autre à modifier.

## 6. Photographie

- Photos réelles des réalisations (déjà fournies pour Yves Oloume SARL).
- Traitement : légère désaturation (`saturate(.75) contrast(1.06)`), couleur pleine au survol, voile encre 0 → 75 % sous le texte.
- Bella Location et l'Usine n'ont pas encore de photos propres : on réutilise les modules et le chantier, à remplacer.

## 7. Mouvement

- Durées : 0,2 s (micro), 0,5 s (éléments), 0,9 s (sections).
- Courbes : `expo.out` pour les apparitions, `power2.inOut` pour les transitions.
- Titres : lignes qui montent derrière un masque (décalage 0,09 s). Surlignage qui se dessine après.
- Rideaux : ambre puis rouge pour le loader ; rouge pour les transitions de page.
- Tout est remplacé par des fondus simples avec `prefers-reduced-motion`.

## 8. Images de partage (Open Graph, 1200 × 630)

Fond Nuit `#111111` + grille fine ; bande verticale rouge à gauche ; marque maquette en haut ; titre de la page en Archivo ExtraBold blanc (60–72 px) avec un mot en ambre ; pastille de l'entité ; pied : *Construire ✦ Louer ✦ Produire* et `oloumgroup.com` en Plex Mono.

## 9. À faire / à éviter

| ✅ | ❌ |
|---|---|
| Un seul accent ambre, utilisé avec intention | Ambre partout ou nouvelles couleurs vives |
| Archivo + Plex Sans + Plex Mono | D'autres polices |
| Angles francs, filets fins | Ombres dures, dégradés arc-en-ciel |
| Vraies photos de chantiers | Banques d'images génériques |
| Placeholders visibles tant qu'une info manque | Chiffres ou témoignages inventés |
