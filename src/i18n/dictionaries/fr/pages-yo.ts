import { routes } from "@/lib/routes"
import type { PageData } from "../../types"

export const yo: PageData = {
  name: "Yves Oloume SARL",
  metaTitle: "Yves Oloume SARL : construction et vente de bâtiments préfabriqués",
  metaDescription:
    "Yves Oloume SARL, entité d'Oloum Group : bâtiments préfabriqués, construction BTP, rénovation, 15 solutions de rayonnage et conteneurs aménagés à Douala depuis 2010.",
  hero: {
    eyebrow: "Entité du groupe",
    badge: "Construit et vend",
    title: "Yves Oloume SARL, *construire et vendre*.",
    text: "Depuis 2010, l'entreprise historique du groupe conçoit, construit et vend des bâtiments préfabriqués, et réalise vos travaux de construction et de logistique.",
    image: "craneInstallation",
    imageAlt: "Module Yves Oloume SARL posé à la grue",
    entity: "yo",
    ctas: [
      { label: "Demander un devis", href: routes.quote },
      { label: "Voir les réalisations", href: routes.projects, variant: "light" },
    ],
  },
  blocks: [
    {
      type: "intro",
      eyebrow: "Deux pôles, une entreprise",
      text: "Yves Oloume SARL fonctionne avec deux pôles, comme deux sous-entreprises. Le premier développe des bâtiments préfabriqués. Le second construit, rénove et organise vos espaces de stockage. Ensemble, ils couvrent le BTP, la construction et la logistique.",
      sub: "Modèle économique : la vente et les prestations de services. Vous préférez louer ? Bella Location, l'entité sœur, propose les mêmes bâtiments à la location.",
    },
    {
      type: "cards",
      eyebrow: "Les deux pôles",
      title: "Choisissez *votre pôle*.",
      columns: 2,
      items: [
        { icon: "building", tag: "Pôle 1", title: "Bâtiments préfabriqués", text: "Bureaux, habitations, sanitaires, campements, cantines, bungalows, entrepôts et modules de stockage, livrés vides ou entièrement équipés.", image: "officeBuilding", href: routes.prefab },
        { icon: "hardhat", tag: "Pôle 2", title: "Construction & Logistics", text: "Construction BTP, rénovation de bâtiments, 15 solutions de rayonnage, cerclage et aménagement de conteneurs shipping.", image: "warehouse", href: routes.logistics },
      ],
    },
    {
      type: "stats",
      tone: "red",
      items: [
        { value: "2010", label: "Année de création" },
        { value: "8", label: "Types de bâtiments et modules" },
        { value: "15", label: "Solutions de rayonnage" },
        { value: "48h", label: "Pour recevoir votre devis" },
      ],
    },
    {
      type: "split",
      eyebrow: "Notre savoir-faire",
      title: "De l'étude *à l'installation*.",
      text: [
        "Nos équipes gèrent votre projet de A à Z : conseil, conception, plans, fabrication, transport, montage et service après-vente.",
        "Notre atelier de Douala prépare les modules pendant que votre terrain est aménagé. Résultat : un bâtiment opérationnel en quelques semaines.",
      ],
      bullets: ["Bureau d'études intégré", "Atelier de fabrication et d'assemblage", "Flotte de camions et grue de levage", "Service après-vente et contrats d'entretien"],
      image: "moduleAssembly",
      imageAlt: "Assemblage d'un module dans l'atelier d'Yves Oloume SARL",
    },
    {
      type: "cards",
      eyebrow: "Toute l'offre",
      title: "Ce que nous *réalisons*.",
      columns: 3,
      items: [
        { icon: "building", title: "Bâtiments préfabriqués", text: "8 familles de bâtiments et de modules, conçues sur mesure.", href: routes.prefab },
        { icon: "hardhat", title: "Construction et rénovation", text: "Construction BTP classique et remise à neuf de bâtiments existants.", href: routes.btp },
        { icon: "shelves", title: "Rayonnages", text: "15 solutions pour équiper entrepôts, bureaux, commerces et chambres froides.", href: routes.shelving },
        { icon: "container", title: "Conteneurs aménagés", text: "Bureaux, boutiques, logements et locaux techniques en conteneurs maritimes.", href: routes.containers },
        { icon: "box", title: "Cerclage", text: "Sécurisation de vos charges et colis pour le stockage et le transport.", href: routes.logistics },
        { icon: "tools", title: "Maintenance", text: "Contrats d'entretien annuels pour vos bâtiments et vos rayonnages.", href: routes.logistics },
      ],
    },
    {
      type: "sister",
      eyebrow: "Besoin temporaire ?",
      title: "Ces bâtiments existent aussi *à la location*.",
      text: "Pour un chantier, un événement ou une extension provisoire, Bella Location vous loue le même bâtiment, transport et maintenance compris.",
      cta: { label: "Découvrir Bella Location", href: routes.bella },
      image: "modularUnits",
      entity: "bella",
    },
  ],
}

export const prefab: PageData = {
  name: "Bâtiments préfabriqués",
  parent: routes.yo,
  metaTitle: "Bâtiments préfabriqués au Cameroun | Yves Oloume SARL",
  metaDescription:
    "Bureaux, logements, sanitaires, campements, cantines, bungalows, entrepôts et modules de stockage préfabriqués, livrés vides ou équipés partout au Cameroun.",
  hero: {
    eyebrow: "Yves Oloume SARL · Pôle 1",
    badge: "Construit et vend",
    title: "Des bâtiments préfabriqués *pour chaque usage*.",
    text: "Conception et développement de bâtiments et de modules préfabriqués, livrés vides ou entièrement équipés, dans les dix régions du Cameroun.",
    image: "officeBuilding",
    imageAlt: "Bâtiment de bureaux préfabriqué sur deux niveaux",
    entity: "prefab",
    ctas: [{ label: "Demander un devis", href: routes.quote }],
  },
  blocks: [
    {
      type: "intro",
      text: "Un bâtiment préfabriqué est fabriqué en modules dans notre atelier, puis assemblé sur votre terrain. Le chantier est plus court, le budget mieux maîtrisé, et le bâtiment peut être agrandi, déplacé ou réutilisé.",
    },
    {
      type: "cards",
      eyebrow: "La gamme",
      title: "Huit familles *de bâtiments*.",
      lead: "Chaque bâtiment est conçu selon votre usage, votre site et votre budget.",
      columns: 4,
      items: [
        { icon: "building", title: "Bureaux", text: "Espaces de travail prêts à l'emploi, climatisés et câblés, de 15 à plus de 2 000 m².", image: "officeWing" },
        { icon: "home", title: "Habitations et logements", text: "Maisons et logements de 1 à 5 pièces, confortables et durables.", image: "prefabBuilding" },
        { icon: "shield", title: "Sanitaires", text: "Blocs sanitaires, douches et toilettes pour chantiers, écoles et événements.", image: "toilets" },
        { icon: "users", title: "Campements", text: "Bases-vie complètes de 10 à 500 personnes, sur les sites les plus isolés.", image: "site" },
        { icon: "box", title: "Cantines", text: "Réfectoires et cuisines équipés, de 20 à 300 couverts.", image: "interior" },
        { icon: "home", title: "Bungalows", text: "Unités indépendantes pour l'hébergement, l'accueil ou les loisirs.", image: "modularUnits" },
        { icon: "factory", title: "Entrepôts", text: "Structures métalliques à la surface voulue, avec quais et rayonnages.", image: "warehouse" },
        { icon: "container", title: "Modules de stockage", text: "Modules compacts et sécurisés pour ranger matériel et marchandises.", image: "containerOffice" },
      ],
    },
    {
      type: "toggle",
      eyebrow: "Vide ou équipé",
      title: "Livré *comme vous voulez*.",
      lead: "Selon votre choix, les modules sont livrés vides ou entièrement équipés.",
      options: [
        {
          key: "empty",
          label: "Livré vide",
          title: "La structure, prête à aménager",
          text: "Vous recevez un bâtiment clos et couvert, isolé et raccordable, que vous aménagez à votre façon avec vos propres équipes ou fournisseurs.",
          points: ["Structure acier galvanisé", "Panneaux sandwich isolés", "Menuiseries posées", "Gaines électriques en attente"],
          image: "prefabBuilding",
        },
        {
          key: "equipped",
          label: "Entièrement équipé",
          title: "Prêt à l'usage dès la livraison",
          text: "Électricité, climatisation, plomberie, revêtements, faux plafond, mobilier : vous entrez et vous travaillez, dormez ou servez le jour même.",
          points: ["Électricité, éclairage LED, prises et réseau", "Climatisation et ventilation", "Plomberie et sanitaires", "Mobilier et rayonnages sur demande", "Option panneaux solaires"],
          image: "officeOpenSpace",
        },
      ],
    },
    {
      type: "specs",
      eyebrow: "Fiche technique",
      title: "Conçu pour *le climat camerounais*.",
      lead: "Les caractéristiques de nos modules standards. Chaque projet fait l'objet d'une étude dédiée.",
      image: "officeCorridor",
      imageAlt: "Couloir intérieur d'un bâtiment modulaire",
      items: [
        ["Structure", "Acier galvanisé à chaud, assemblage boulonné"],
        ["Murs", "Panneaux sandwich 50 à 100 mm, isolation laine de roche ou PU"],
        ["Toiture", "Bac acier isolé, pente pour fortes pluies, débords anti-soleil"],
        ["Sol", "Plancher bois traité ou dalle, revêtement PVC ou carrelage"],
        ["Dimensions", "Modules de 3 × 6 m et 3 × 12 m, combinables à l'infini"],
        ["Niveaux", "Jusqu'à R+2, escaliers et coursives extérieurs"],
        ["Délai", "4 à 12 semaines selon la taille du projet"],
        ["Garantie", "10 ans sur la structure, 2 ans sur les équipements"],
      ],
    },
    {
      type: "steps",
      eyebrow: "Notre méthode",
      title: "Votre bâtiment *en 5 étapes*.",
      steps: [
        { title: "Vous décrivez votre besoin", text: "Par téléphone, WhatsApp ou formulaire : usage, surface, site, délai." },
        { title: "Nous concevons et chiffrons", text: "Plans, délai et prix détaillé sous 48 h ouvrées pour un projet standard." },
        { title: "Nous fabriquons vos modules", text: "En atelier, pendant que votre terrain est préparé." },
        { title: "Nous livrons et installons", text: "Transport, levage, assemblage et raccordements par nos équipes." },
        { title: "Nous restons à vos côtés", text: "Réception, garantie, maintenance et extensions futures." },
      ],
    },
    {
      type: "faq",
      eyebrow: "FAQ",
      title: "Vos questions sur *le préfabriqué*.",
      items: [
        ["Un bâtiment préfabriqué est-il solide ?", "Oui. Nos structures en acier galvanisé sont conçues pour durer plus de 25 ans et résister au vent, à la chaleur et aux fortes pluies."],
        ["Faut-il un permis de construire ?", "Cela dépend de l'usage, de la surface et de la durée d'implantation. Nous vous accompagnons dans les démarches auprès de la commune."],
        ["Peut-on agrandir le bâtiment plus tard ?", "Oui, c'est l'un des grands avantages du modulaire : vous ajoutez des modules selon vos besoins."],
        ["Quel est le prix au m² ?", "Il dépend de la finition et des équipements. Comptez à titre indicatif entre 180 000 et 350 000 FCFA/m² pour un bâtiment équipé."],
      ],
    },
    {
      type: "sister",
      eyebrow: "Besoin temporaire ?",
      title: "Louez plutôt *chez Bella Location*.",
      text: "Bureaux de chantier, bases-vie, sanitaires et stockage disponibles à la location, de une semaine à plusieurs années.",
      cta: { label: "Voir le catalogue de location", href: routes.catalogue },
      image: "modularWalkway",
      entity: "bella",
    },
  ],
}

export const logistics: PageData = {
  name: "Construction & Logistics",
  parent: routes.yo,
  metaTitle: "Construction & Logistics : BTP, rayonnages et services | Yves Oloume SARL",
  metaDescription:
    "Construction BTP, rénovation de bâtiments, 15 solutions de rayonnage, cerclage et aménagement de conteneurs maritimes à Douala et partout au Cameroun.",
  hero: {
    eyebrow: "Yves Oloume SARL · Pôle 2",
    badge: "Construit et vend",
    title: "Construire, rénover, *stocker*.",
    text: "Le pôle Construction & Logistics réunit nos chantiers BTP, nos solutions de rayonnage et nos services logistiques, pour bâtir et organiser vos espaces.",
    image: "warehouse",
    imageAlt: "Entrepôt équipé de rayonnages",
    entity: "logistics",
    ctas: [{ label: "Demander un devis", href: routes.quote }],
  },
  blocks: [
    {
      type: "intro",
      text: "Un bâtiment doit être bien construit, puis bien utilisé. Ce pôle s'occupe des deux : la construction et la rénovation d'un côté, l'organisation de vos espaces de stockage et de vos flux de l'autre.",
    },
    {
      type: "cards",
      eyebrow: "Nos trois métiers",
      title: "Un pôle, *trois métiers*.",
      columns: 3,
      items: [
        { icon: "hardhat", tag: "Construction", title: "Construction et rénovation", text: "Construction BTP classique, du gros œuvre aux finitions, et rénovation de bâtiments existants.", image: "worker", href: routes.btp },
        { icon: "shelves", tag: "Stockage", title: "15 solutions de rayonnage", text: "Pour équiper tous les secteurs de l'entreprise : bureaux, archives, commerces, entrepôts, chambres froides.", image: "warehouse", href: routes.shelving },
        { icon: "container", tag: "Services", title: "Cerclage et conteneurs", text: "Cerclage de charges, aménagement de conteneurs shipping, montage et maintenance de rayonnages.", image: "containerOffice", href: routes.containers },
      ],
    },
    {
      type: "index",
      eyebrow: "Prestations de services",
      title: "Nos *services* logistiques.",
      items: [
        { title: "Cerclage", text: "Sécurisation de vos charges, palettes et colis par feuillard acier ou polyester, en atelier ou sur votre site.", tags: ["Palettes", "Export", "Industrie"] },
        { title: "Aménagement de conteneurs shipping", text: "Transformation de conteneurs maritimes 20 et 40 pieds en bureaux, logements, boutiques ou locaux techniques.", tags: ["Bureaux", "Boutiques", "Logements"] },
        { title: "Montage de rayonnages", text: "Installation par nos techniciens, avec plaques de charge et rapport de montage.", tags: ["Sécurité", "Normes"] },
        { title: "Inspection et maintenance", text: "Contrôle annuel de vos rayonnages, remplacement des pièces endommagées et protections d'échelles.", tags: ["Contrat annuel"] },
        { title: "Aménagement d'entrepôt", text: "Étude des flux, implantation des allées, zones de réception et d'expédition, signalétique.", tags: ["Étude", "Plans"] },
        { title: "Transport et levage", text: "Livraison par nos camions et levage par grue pour vos modules, conteneurs et structures.", tags: ["Camions", "Grue"] },
      ],
      note: "D'autres services sont disponibles sur demande : contactez-nous pour un besoin spécifique.",
    },
    {
      type: "stats",
      tone: "ink",
      items: [
        { value: "15", label: "Solutions de rayonnage" },
        { value: "120+", label: "Entrepôts équipés" },
        { value: "40", label: "Conteneurs aménagés par an" },
        { value: "10", label: "Ans de garantie structure" },
      ],
    },
    {
      type: "sister",
      eyebrow: "Construire neuf ?",
      title: "Découvrez nos *bâtiments préfabriqués*.",
      text: "Entrepôts, bureaux et modules de stockage conçus par le pôle Bâtiments préfabriqués, livrés vides ou équipés.",
      cta: { label: "Voir le pôle préfabriqué", href: routes.prefab },
      image: "officeBuilding",
      entity: "prefab",
    },
  ],
}

export const btp: PageData = {
  name: "Construction et rénovation",
  parent: routes.logistics,
  metaTitle: "Construction BTP et rénovation de bâtiments à Douala | Yves Oloume SARL",
  metaDescription:
    "Construction classique, gros œuvre, second œuvre, extensions et rénovation de bâtiments à Douala et au Cameroun par Yves Oloume SARL.",
  hero: {
    eyebrow: "Construction & Logistics",
    badge: "Construit et vend",
    title: "Construire et rénover, *en dur aussi*.",
    text: "Quand le préfabriqué ne suffit pas, nos équipes BTP prennent le relais : construction classique, extensions et rénovation de bâtiments existants.",
    image: "worker",
    imageAlt: "Ouvrier sur un chantier de construction",
    entity: "logistics",
    ctas: [{ label: "Demander un devis", href: routes.quote }],
  },
  blocks: [
    {
      type: "intro",
      text: "Construire en dur ou en préfabriqué ? Avec nous, vous n'avez pas à choisir votre prestataire en fonction de la technique. Nous vous conseillons la meilleure solution, puis nous la réalisons.",
    },
    {
      type: "cards",
      eyebrow: "Construction BTP",
      title: "Du gros œuvre *aux finitions*.",
      columns: 3,
      items: [
        { icon: "ruler", title: "Études et plans", text: "Relevés, plans d'exécution, métrés et planning de travaux." },
        { icon: "hardhat", title: "Gros œuvre", text: "Terrassement, fondations, maçonnerie, béton armé, charpente." },
        { icon: "tools", title: "Second œuvre", text: "Électricité, plomberie, menuiseries, carrelage, peinture, faux plafonds." },
        { icon: "building", title: "Extensions", text: "Agrandissement de bâtiments existants, en dur ou en modulaire." },
        { icon: "factory", title: "Bâtiments industriels", text: "Halls, ateliers et entrepôts en structure métallique." },
        { icon: "home", title: "Clôtures et VRD", text: "Clôtures, voiries, réseaux, parkings et aménagements extérieurs." },
      ],
    },
    {
      type: "split",
      eyebrow: "Rénovation",
      title: "Redonner vie *à vos bâtiments*.",
      text: [
        "Façades, toitures, étanchéité, électricité, sanitaires : nous remettons à neuf vos bâtiments, en site occupé si nécessaire.",
        "Nous organisons les travaux par zones pour que votre activité continue pendant le chantier.",
      ],
      bullets: ["Diagnostic gratuit sur site", "Mise aux normes électriques", "Étanchéité et toitures", "Réaménagement intérieur", "Travaux en site occupé"],
      image: "technicians",
      imageAlt: "Techniciens en rénovation de bâtiment",
      reverse: true,
    },
    {
      type: "steps",
      eyebrow: "Déroulé",
      title: "Un chantier *bien mené*.",
      steps: [
        { title: "Visite et diagnostic", text: "Nous venons voir le site et comprendre vos contraintes." },
        { title: "Devis et planning", text: "Un chiffrage poste par poste et un planning écrit." },
        { title: "Travaux", text: "Un chef de chantier dédié et un point hebdomadaire avec vous." },
        { title: "Réception", text: "Visite de fin de chantier, levée des réserves et garanties." },
      ],
    },
  ],
}

export const shelving: PageData = {
  name: "Rayonnages",
  parent: routes.logistics,
  metaTitle: "Rayonnages : 15 solutions de stockage | Yves Oloume SARL",
  metaDescription:
    "Rayonnage record, de bureau, évolutif, mobile, alimentaire, dynamique, haute performance, cantilever… 15 solutions de rayonnage installées par Yves Oloume SARL.",
  hero: {
    eyebrow: "Construction & Logistics",
    badge: "Construit et vend",
    title: "15 solutions de rayonnage, *pour tous les secteurs*.",
    text: "Des archives d'un bureau aux palettes d'un entrepôt de 10 000 m² : une gamme complète, étudiée, livrée et montée par nos techniciens.",
    image: "warehouse",
    imageAlt: "Entrepôt équipé de rayonnages à palettes",
    entity: "logistics",
    ctas: [{ label: "Demander une étude", href: routes.quote }],
  },
  blocks: [
    {
      type: "index",
      eyebrow: "La gamme",
      title: "Nos *15 solutions*.",
      lead: "Survolez une solution pour voir ses usages.",
      image: "warehouse",
      items: [
        { title: "Rayonnage record", text: "Rayonnage robuste à grande capacité, pour les charges lourdes et volumineuses.", tags: ["Industrie", "Ateliers"] },
        { title: "Rayonnage de bureau", text: "Pour les classeurs, archives et fournitures, discret et modulable.", tags: ["Bureaux", "Archives"] },
        { title: "Rayonnage évolutif", text: "Se reconfigure au fil de vos besoins : tablettes réglables, extensions simples.", tags: ["Commerces", "PME"] },
        { title: "Rayonnage mobile", text: "Sur rails, il supprime les allées inutiles et double la capacité de stockage.", tags: ["Archives", "Bibliothèques"] },
        { title: "Rayonnage alimentaire", text: "Inox ou époxy, adapté aux normes d'hygiène des cuisines et chambres froides.", tags: ["Restauration", "Agroalimentaire"] },
        { title: "Stockage dynamique léger", text: "Les cartons glissent par gravité : premier entré, premier sorti.", tags: ["Préparation de commandes"] },
        { title: "Stockage dynamique mi-lourd et lourd", text: "Le même principe pour les palettes, sur rouleaux.", tags: ["Distribution", "Industrie"] },
        { title: "Rayonnage haute performance", text: "Pour les grandes hauteurs et les très fortes charges.", tags: ["Grands entrepôts"] },
        { title: "Cantilever réglable", text: "Pour les produits longs : tubes, profilés, bois, tuyaux.", tags: ["Matériaux", "Quincaillerie"] },
        { title: "Rayonnage à palettes conventionnel", text: "La solution standard pour les palettes, accès direct à chaque emplacement.", tags: ["Logistique"] },
        { title: "Rayonnage à accumulation", text: "Les chariots entrent dans le rayonnage : densité maximale pour produits homogènes.", tags: ["Boissons", "Froid"] },
        { title: "Mezzanine de stockage", text: "Créez un étage dans votre entrepôt et doublez la surface utile.", tags: ["Entrepôts", "Ateliers"] },
        { title: "Rayonnage pour pneus", text: "Conçu pour stocker les pneumatiques à plat ou debout.", tags: ["Garages", "Distribution"] },
        { title: "Rayonnage d'archives", text: "Boîtes d'archives, dossiers suspendus et registres, en accès facile.", tags: ["Administrations", "Banques"] },
        { title: "Rayonnage galvanisé extérieur", text: "Résiste à l'humidité et aux intempéries pour le stockage en plein air.", tags: ["Ports", "Chantiers"] },
      ],
      note: "Gamme de démonstration : la liste exacte des 15 références est à confirmer avec le fournisseur.",
    },
    {
      type: "steps",
      eyebrow: "Notre accompagnement",
      title: "De l'étude *au montage*.",
      steps: [
        { title: "Visite et relevé", text: "Dimensions, hauteur utile, sol, accès des chariots et flux." },
        { title: "Étude et plan 2D", text: "Implantation, nombre d'emplacements, charges admissibles." },
        { title: "Livraison et montage", text: "Par nos techniciens, avec plaques de charge et protections." },
        { title: "Contrôle annuel", text: "Inspection et maintenance pour garder une installation sûre." },
      ],
    },
    {
      type: "faq",
      eyebrow: "FAQ",
      title: "Questions sur *les rayonnages*.",
      items: [
        ["Fabriquez-vous vos rayonnages ?", "Aujourd'hui, nos rayonnages proviennent de fabricants partenaires sélectionnés. Demain, une partie de la gamme sera produite par l'Usine du groupe."],
        ["Pouvez-vous reprendre une installation existante ?", "Oui. Nous inspectons, réparons et complétons les installations existantes, quelle que soit la marque."],
        ["Quel délai pour un entrepôt complet ?", "Comptez 3 à 6 semaines entre la validation du plan et la fin du montage, selon la taille."],
      ],
    },
  ],
}

export const containers: PageData = {
  name: "Conteneurs aménagés",
  parent: routes.logistics,
  metaTitle: "Aménagement de conteneurs maritimes au Cameroun | Yves Oloume SARL",
  metaDescription:
    "Bureaux, boutiques, logements, sanitaires et locaux techniques aménagés dans des conteneurs maritimes 20 et 40 pieds par Yves Oloume SARL à Douala.",
  hero: {
    eyebrow: "Construction & Logistics",
    badge: "Construit et vend",
    title: "Un conteneur, *mille usages*.",
    text: "Nous transformons des conteneurs maritimes en bureaux, boutiques, logements et locaux techniques, isolés, climatisés et prêts à l'emploi.",
    image: "containerOffice",
    imageAlt: "Conteneur maritime transformé en bureau",
    entity: "logistics",
    ctas: [{ label: "Demander un devis", href: routes.quote }],
  },
  blocks: [
    {
      type: "intro",
      text: "Robuste, transportable, sécurisé : le conteneur maritime est une base idéale. Nos ateliers le découpent, l'isolent, l'équipent et le livrent prêt à l'emploi, en 20 ou 40 pieds, seul ou assemblé à d'autres.",
    },
    {
      type: "cards",
      eyebrow: "Usages",
      title: "Ce que nous *en faisons*.",
      columns: 3,
      items: [
        { icon: "building", title: "Bureaux et guichets", text: "Agences mobiles, bureaux de chantier, points de vente sécurisés.", image: "containerOffice" },
        { icon: "home", title: "Logements et studios", text: "Studios meublés, chambres de personnel, maisons multi-conteneurs.", image: "containerInterior" },
        { icon: "box", title: "Boutiques et kiosques", text: "Commerces, cafés, points de retrait, ouvrables en façade." },
        { icon: "shield", title: "Sanitaires", text: "Blocs douches et toilettes autonomes ou raccordés." },
        { icon: "factory", title: "Locaux techniques", text: "Salles électriques, groupes électrogènes, ateliers mobiles." },
        { icon: "container", title: "Stockage sécurisé", text: "Conteneurs de stockage ventilés, rayonnés et cadenassables." },
      ],
    },
    {
      type: "table",
      eyebrow: "Formats",
      title: "20 ou 40 pieds, *à vous de voir*.",
      head: ["", "Conteneur 20 pieds", "Conteneur 40 pieds"],
      rows: [
        ["Surface intérieure", "≈ 13 m²", "≈ 28 m²"],
        ["Usages types", "Bureau, studio, boutique, sanitaires", "Open space, logement, salle de réunion"],
        ["Délai d'aménagement", "3 à 4 semaines", "4 à 6 semaines"],
        ["Disponible en location", "Oui, chez Bella Location", "Oui, chez Bella Location"],
      ],
      note: "Valeurs indicatives, à confirmer selon le projet.",
    },
    {
      type: "steps",
      eyebrow: "Fabrication",
      title: "De la cale *à votre terrain*.",
      steps: [
        { title: "Sélection du conteneur", text: "Conteneurs maritimes contrôlés, sans corrosion structurelle." },
        { title: "Découpe et renforts", text: "Ouvertures pour portes et fenêtres, renforts soudés." },
        { title: "Isolation et équipements", text: "Isolation, électricité, climatisation, revêtements." },
        { title: "Livraison et pose", text: "Transport par camion-grue et mise en place sur votre site." },
      ],
    },
  ],
}
