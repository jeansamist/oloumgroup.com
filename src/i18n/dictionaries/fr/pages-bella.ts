import { routes } from "@/lib/routes"
import type { PageData } from "../../types"

export const bella: PageData = {
  name: "Bella Location",
  metaTitle: "Bella Location : location de bâtiments préfabriqués au Cameroun",
  metaDescription:
    "Bella Location, entité d'Oloum Group, loue des bâtiments préfabriqués pour vos chantiers, événements et besoins temporaires : transport, installation et maintenance compris.",
  hero: {
    eyebrow: "Entité du groupe",
    badge: "Loue",
    title: "Un bâtiment, *le temps qu'il vous faut*.",
    text: "Bella Location est spécialisée dans la location de bâtiments préfabriqués. Vous disposez de l'espace dont vous avez besoin, sans l'acheter.",
    image: "modularUnits",
    imageAlt: "Modules préfabriqués disponibles à la location",
    entity: "bella",
    ctas: [
      { label: "Voir le catalogue", href: routes.catalogue },
      { label: "Nos formules", href: routes.plans, variant: "light" },
    ],
  },
  blocks: [
    {
      type: "intro",
      eyebrow: "Pourquoi Bella Location",
      text: "Un chantier de six mois, un festival d'un week-end, une équipe qui s'agrandit en attendant de nouveaux locaux, une urgence humanitaire : certains besoins ne durent pas. Bella Location vous loue le bâtiment adapté, livré, installé et entretenu, le temps nécessaire.",
    },
    {
      type: "cards",
      eyebrow: "Les avantages",
      title: "Louer, *c'est plus simple*.",
      columns: 4,
      items: [
        { icon: "key", title: "Pas d'investissement lourd", text: "Un loyer mensuel prévisible au lieu d'un achat : votre trésorerie reste disponible pour votre cœur de métier." },
        { icon: "calendar", title: "Une durée sur mesure", text: "De 1 semaine à 36 mois et plus, avec prolongation possible à tout moment." },
        { icon: "truck", title: "Tout compris", text: "Transport, installation, raccordements, maintenance et démontage en fin de contrat." },
        { icon: "check", title: "Option d'achat", text: "Vous changez d'avis ? Une partie des loyers versés est déduite du prix d'achat." },
      ],
    },
    {
      type: "stats",
      tone: "red",
      items: [
        { value: "350+", label: "Modules dans le parc locatif" },
        { value: "72h", label: "Délai de livraison à Douala" },
        { value: "1", label: "Semaine de durée minimale" },
        { value: "95%", label: "De clients qui renouvellent" },
      ],
    },
    {
      type: "cards",
      eyebrow: "À louer",
      title: "Ce que vous *pouvez louer*.",
      lead: "Un aperçu du parc. Le catalogue complet détaille dimensions, équipements et usages.",
      columns: 3,
      items: [
        { icon: "building", title: "Bureaux de chantier", text: "Du bureau individuel à la salle de réunion de 20 places.", image: "officeWing", href: routes.catalogue },
        { icon: "users", title: "Bases-vie", text: "Dortoirs, réfectoires, infirmeries et sanitaires pour vos équipes.", image: "site", href: routes.catalogue },
        { icon: "shield", title: "Sanitaires", text: "Blocs sanitaires, douches et toilettes autonomes.", image: "toilets", href: routes.catalogue },
        { icon: "container", title: "Stockage", text: "Conteneurs et modules de stockage sécurisés.", image: "containerOffice", href: routes.catalogue },
        { icon: "box", title: "Cantines", text: "Réfectoires équipés de 20 à 120 couverts.", image: "interior", href: routes.catalogue },
        { icon: "spark", title: "Événementiel", text: "Loges, kiosques, accueil, billetterie.", image: "modularWalkway", href: routes.catalogue },
      ],
    },
    {
      type: "chips",
      eyebrow: "Pour qui",
      title: "Ils louent *chez nous*.",
      items: [
        { icon: "hardhat", title: "Chantiers BTP et mines", text: "Pour la durée du marché" },
        { icon: "spark", title: "Événements", text: "De 1 jour à quelques semaines" },
        { icon: "building", title: "Entreprises en extension", text: "En attendant de nouveaux locaux" },
        { icon: "globe", title: "ONG et projets publics", text: "Déploiements rapides" },
      ],
    },
    {
      type: "steps",
      eyebrow: "Comment ça marche",
      title: "Louer *en 4 étapes*.",
      steps: [
        { title: "Vous décrivez votre besoin", text: "Type de bâtiment, nombre de modules, lieu et durée." },
        { title: "Nous vérifions la disponibilité", text: "Et vous envoyons une offre ferme sous 24 h ouvrées." },
        { title: "Nous livrons et installons", text: "En 72 h à Douala, sous 7 jours dans le reste du pays." },
        { title: "Nous récupérons le bâtiment", text: "En fin de contrat : démontage, transport retour et état des lieux." },
      ],
    },
    {
      type: "faq",
      eyebrow: "FAQ",
      title: "Questions sur *la location*.",
      items: [
        ["Quelle est la durée minimale ?", "Une semaine pour les sanitaires et l'événementiel, un mois pour les bureaux et bases-vie."],
        ["La maintenance est-elle incluse ?", "Oui, pendant toute la durée de la location : interventions sous 48 h en cas de problème."],
        ["Faut-il verser une caution ?", "Oui, un dépôt de garantie équivalent à un mois de loyer, restitué en fin de contrat après l'état des lieux."],
        ["Livrez-vous partout au Cameroun ?", "Oui. Le transport est calculé selon la distance depuis notre parc de Douala."],
        ["Bella Location loue-t-elle d'autres équipements ?", "Le parc comprend aujourd'hui des bâtiments préfabriqués et des conteneurs. Rayonnages et engins sont à l'étude."],
      ],
    },
    {
      type: "sister",
      eyebrow: "Besoin durable ?",
      title: "Achetez plutôt *chez Yves Oloume SARL*.",
      text: "Pour un usage de plus de deux ans, l'achat devient souvent plus intéressant. Même qualité, même équipe, conçu sur mesure.",
      cta: { label: "Découvrir Yves Oloume SARL", href: routes.yo },
      image: "officeBuilding",
      entity: "yo",
    },
  ],
}

export const catalogue: PageData = {
  name: "Catalogue de location",
  parent: routes.bella,
  metaTitle: "Catalogue de location : bureaux, bases-vie, sanitaires | Bella Location",
  metaDescription:
    "Bureaux de chantier, dortoirs, réfectoires, blocs sanitaires, conteneurs de stockage, postes de garde : le catalogue de location de Bella Location.",
  hero: {
    eyebrow: "Bella Location",
    badge: "Loue",
    title: "Le catalogue *de location*.",
    text: "Des modules prêts à partir, entretenus et contrôlés entre chaque location. Choisissez, combinez, nous livrons.",
    image: "modularWalkway",
    imageAlt: "Modules de location alignés sur un site",
    entity: "bella",
    ctas: [{ label: "Demander une disponibilité", href: routes.quote }],
  },
  blocks: [
    {
      type: "table",
      eyebrow: "Modules disponibles",
      title: "Le parc *en un coup d'œil*.",
      lead: "Tarifs indicatifs hors transport, pour une location de 1 à 6 mois.",
      head: ["Module", "Dimensions", "Capacité", "Équipements", "À partir de"],
      rows: [
        ["Bureau individuel", "3 × 2,4 m", "1 à 2 postes", "Clim, électricité, bureau", "95 000 FCFA / mois"],
        ["Bureau de chantier", "6 × 2,4 m", "3 à 4 postes", "Clim, électricité, réseau", "150 000 FCFA / mois"],
        ["Salle de réunion", "12 × 2,4 m", "12 à 20 places", "Clim, table, écran", "260 000 FCFA / mois"],
        ["Dortoir", "6 × 2,4 m", "4 lits", "Clim, lits, armoires", "160 000 FCFA / mois"],
        ["Réfectoire", "12 × 2,4 m", "40 couverts", "Tables, bancs, évier", "280 000 FCFA / mois"],
        ["Bloc sanitaire", "6 × 2,4 m", "4 WC + 4 douches", "Chauffe-eau, lavabos", "190 000 FCFA / mois"],
        ["Toilette autonome", "1,2 × 1,2 m", "1 cabine", "Vidange hebdomadaire", "35 000 FCFA / semaine"],
        ["Conteneur de stockage", "20 pieds", "≈ 33 m³", "Ventilation, cadenas", "70 000 FCFA / mois"],
        ["Poste de garde", "2,4 × 2,4 m", "1 à 2 agents", "Clim, guichet", "80 000 FCFA / mois"],
      ],
      note: "Tarifs de démonstration, à valider. Remises dégressives au-delà de 6 mois et de 10 modules.",
    },
    {
      type: "cards",
      eyebrow: "Packs",
      title: "Des ensembles *prêts à partir*.",
      columns: 3,
      items: [
        { icon: "hardhat", tag: "Pack chantier", title: "Chantier 20 personnes", text: "2 bureaux de chantier, 1 réfectoire, 1 bloc sanitaire, 1 conteneur de stockage.", image: "site" },
        { icon: "users", tag: "Pack base-vie", title: "Base-vie 50 personnes", text: "13 dortoirs, 2 réfectoires, 3 blocs sanitaires, 1 infirmerie, 2 bureaux.", image: "modularComplex" },
        { icon: "spark", tag: "Pack événement", title: "Événement 2 000 personnes", text: "20 toilettes autonomes, 2 blocs sanitaires, 2 loges, 1 poste d'accueil.", image: "toilets" },
      ],
    },
    {
      type: "split",
      eyebrow: "Qualité du parc",
      title: "Chaque module *contrôlé* entre deux locations.",
      text: [
        "À chaque retour, nos équipes nettoient, inspectent et réparent le module : structure, étanchéité, électricité, climatisation, sanitaires.",
        "Un module ne repart qu'après validation de la check-list de contrôle signée par le responsable du parc.",
      ],
      bullets: ["Nettoyage et désinfection", "Contrôle électrique", "Révision de la climatisation", "Vérification de l'étanchéité"],
      image: "officeCorridor",
      imageAlt: "Intérieur d'un module contrôlé",
      cta: { label: "Voir les formules", href: routes.plans },
    },
  ],
}

export const plans: PageData = {
  name: "Formules et conditions",
  parent: routes.bella,
  metaTitle: "Formules de location : courte durée, chantier, longue durée | Bella Location",
  metaDescription:
    "Location courte durée, location chantier ou longue durée avec option d'achat : les formules et conditions de location de Bella Location.",
  hero: {
    eyebrow: "Bella Location",
    badge: "Loue",
    title: "Trois formules, *une seule promesse*.",
    text: "Quelle que soit la durée, le bâtiment est livré, installé et entretenu par nos équipes.",
    image: "modularComplex",
    imageAlt: "Complexe modulaire en location",
    entity: "bella",
    ctas: [{ label: "Demander une offre", href: routes.quote }],
  },
  blocks: [
    {
      type: "cards",
      eyebrow: "Nos formules",
      title: "Choisissez *votre durée*.",
      columns: 3,
      items: [
        { icon: "spark", tag: "Courte durée", title: "1 jour à 1 mois", text: "Événements, inaugurations, urgences. Installation et retrait express, nettoyage inclus pour les sanitaires.", meta: "Paiement à la commande" },
        { icon: "hardhat", tag: "Chantier", title: "1 à 12 mois", text: "La formule des chantiers BTP et miniers. Maintenance mensuelle, ajout ou retrait de modules en cours de contrat.", meta: "Facturation mensuelle" },
        { icon: "key", tag: "Longue durée", title: "12 mois et plus", text: "Extensions de locaux, projets ONG, administrations. Tarif dégressif et option d'achat en fin de contrat.", meta: "Option d'achat incluse" },
      ],
    },
    {
      type: "table",
      eyebrow: "Comparatif",
      title: "Ce qui est *inclus*.",
      head: ["", "Courte durée", "Chantier", "Longue durée"],
      rows: [
        ["Transport aller et retour", "Inclus à Douala", "Sur devis", "Sur devis"],
        ["Installation et démontage", "✓", "✓", "✓"],
        ["Maintenance", "—", "Mensuelle", "Trimestrielle"],
        ["Intervention en cas de panne", "Sous 24 h", "Sous 48 h", "Sous 48 h"],
        ["Ajout de modules en cours de contrat", "—", "✓", "✓"],
        ["Assurance du bâtiment", "Option", "Option", "Incluse"],
        ["Option d'achat", "—", "—", "✓"],
      ],
    },
    {
      type: "cards",
      eyebrow: "Conditions",
      title: "Les conditions, *simplement*.",
      columns: 2,
      items: [
        { icon: "ruler", title: "Dépôt de garantie", text: "Un mois de loyer, restitué après l'état des lieux de sortie." },
        { icon: "calendar", title: "Prolongation", text: "Possible à tout moment, avec un préavis de 15 jours." },
        { icon: "map", title: "Terrain", text: "Plat, accessible aux camions et, si possible, raccordable à l'électricité et à l'eau." },
        { icon: "shield", title: "Responsabilité", text: "Le locataire assure la garde du bâtiment pendant la location ; l'assurance peut être incluse." },
      ],
    },
  ],
}

export const usine: PageData = {
  name: "L'Usine",
  metaTitle: "L'Usine : le projet de production d'Oloum Group",
  metaDescription:
    "L'Usine est le projet d'avenir d'Oloum Group : fabriquer au Cameroun panneaux sandwich, modules préfabriqués et rayonnages pour Yves Oloume SARL et Bella Location.",
  hero: {
    eyebrow: "Projet futur",
    badge: "Bientôt",
    title: "La prochaine étape : *produire*.",
    text: "L'Usine est le projet d'avenir du groupe. Elle viendra compléter l'ensemble en assurant la production de nos panneaux, de nos modules et de nos rayonnages.",
    image: "steel",
    imageAlt: "Structures métalliques en préparation",
    entity: "usine",
    ctas: [{ label: "Être informé du lancement", href: routes.contact }],
  },
  blocks: [
    {
      type: "intro",
      text: "Aujourd'hui, le groupe construit, vend et loue. Demain, il produira. L'Usine est le maillon qui fermera la boucle, de la fabrication jusqu'à l'installation chez vous, et fera du groupe l'un des rares acteurs à maîtriser toute la chaîne du bâtiment préfabriqué en Afrique centrale.",
    },
    {
      type: "cards",
      eyebrow: "Ce qu'elle produira",
      title: "Trois lignes *de production*.",
      columns: 3,
      items: [
        { icon: "layers", tag: "Ligne 1", title: "Panneaux sandwich", text: "Panneaux isolés pour murs et toitures, adaptés au climat chaud et humide." },
        { icon: "box", tag: "Ligne 2", title: "Modules préfabriqués", text: "Châssis métalliques et modules complets pour Yves Oloume SARL et Bella Location." },
        { icon: "shelves", tag: "Ligne 3", title: "Rayonnages", text: "Une partie de la gamme de rayonnage du pôle Construction & Logistics." },
      ],
    },
    {
      type: "cards",
      eyebrow: "Ce qu'elle changera",
      title: "Pourquoi *produire nous-mêmes*.",
      columns: 4,
      items: [
        { icon: "check", title: "Une qualité maîtrisée", text: "Chaque panneau et chaque module contrôlé dans nos propres ateliers." },
        { icon: "clock", title: "Des délais réduits", text: "Moins d'importations, moins d'attente au port, des stocks disponibles." },
        { icon: "users", title: "Des emplois locaux", text: "Environ 80 emplois directs créés à terme, et des formations qualifiantes." },
        { icon: "globe", title: "Un rayonnement régional", text: "Fournir le Cameroun et, à terme, toute l'Afrique centrale." },
      ],
    },
    {
      type: "timeline",
      eyebrow: "Feuille de route",
      title: "Les étapes *du projet*.",
      items: [
        { year: "2026", title: "Études et financement", text: "Étude de marché, choix des technologies et montage financier." },
        { year: "2027", title: "Site et construction", text: "Acquisition du terrain en zone industrielle et construction du bâtiment." },
        { year: "2028", title: "Mise en service", text: "Installation des lignes, formation des équipes et premières productions." },
        { year: "2030", title: "Pleine capacité", text: "Objectif : 300 modules et 40 000 m² de panneaux par an." },
      ],
    },
    {
      type: "teaser",
      eyebrow: "Le projet en chiffres",
      title: "Une usine *pensée pour durer*.",
      text: "Chiffres prévisionnels, susceptibles d'évoluer au fil des études.",
      cta: { label: "Être informé", href: routes.contact },
      facts: [
        ["Surface prévue", "8 000 m²"],
        ["Capacité visée", "300 modules / an"],
        ["Emplois directs", "≈ 80"],
      ],
    },
  ],
}
