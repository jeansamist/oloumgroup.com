import { routes } from "@/lib/routes"
import type { PageData } from "../../types"

export const group: PageData = {
  name: "Le groupe",
  metaTitle: "Le groupe : une identité, des métiers distincts",
  metaDescription:
    "Oloum Group réunit Yves Oloume SARL, Bella Location et le futur projet d'usine sous une seule identité, autour du bâtiment préfabriqué au Cameroun.",
  hero: {
    eyebrow: "Le groupe",
    title: "Une seule identité, *des métiers distincts*.",
    text: "Oloum Group a été créé pour réunir nos entreprises sous un même nom, tout en laissant à chacune son domaine, ses équipes et ses clients.",
    image: "team",
    imageAlt: "Les équipes du groupe sur un chantier",
    entity: "group",
    ctas: [
      { label: "Notre histoire", href: routes.history },
      { label: "Nos engagements", href: routes.commitments, variant: "light" },
    ],
  },
  blocks: [
    {
      type: "intro",
      eyebrow: "Notre raison d'être",
      text: "Tout a commencé en 2010 à Akwa, au cœur de Douala, avec Yves Oloume SARL et ses bâtiments préfabriqués. Puis est venue la location, avec Bella Location. Demain viendra la production. Oloum Group donne un nom commun à cette histoire et une vision d'ensemble : construire, louer et, à terme, produire.",
    },
    {
      type: "cards",
      eyebrow: "Mission et vision",
      title: "Ce qui *nous guide*.",
      columns: 3,
      numbered: false,
      items: [
        { icon: "box", tag: "Mission", title: "Rendre le bâtiment accessible", text: "Offrir aux entreprises, administrations et familles un accès simple au bâtiment préfabriqué : à l'achat, à la location, et bientôt fabriqué par nos soins." },
        { icon: "globe", tag: "Vision", title: "Maîtriser toute la chaîne", text: "Devenir d'ici 2030 la référence du bâtiment préfabriqué en Afrique centrale, de la production à l'installation et à la maintenance." },
        { icon: "users", tag: "Ambition", title: "Créer de l'emploi local", text: "Former et employer des techniciens camerounais à chaque étape, de l'atelier au chantier." },
      ],
    },
    { type: "tree" },
    { type: "pillars" },
    {
      type: "stats",
      tone: "ink",
      items: [
        { value: "3", label: "Métiers : construire, louer, produire" },
        { value: "2", label: "Entreprises en activité" },
        { value: "140", label: "Collaborateurs" },
        { value: "15", label: "Années d'expérience" },
      ],
    },
    {
      type: "cards",
      eyebrow: "Nos principes",
      title: "Les mêmes standards, *dans tout le groupe*.",
      columns: 4,
      items: [
        { icon: "users", title: "Un interlocuteur clair", text: "Chaque entité a son domaine. Vous savez toujours à qui vous parlez et qui est responsable de votre projet." },
        { icon: "ruler", title: "La transparence", text: "Des devis détaillés, des délais écrits, aucun frais caché. Ce qui est signé est livré." },
        { icon: "map", title: "La proximité", text: "Des équipes basées à Douala, qui se déplacent partout au Cameroun et répondent sur WhatsApp." },
        { icon: "shield", title: "La durabilité", text: "Des bâtiments réutilisables, déplaçables et conçus pour la chaleur, l'humidité et les fortes pluies." },
      ],
    },
    {
      type: "split",
      eyebrow: "Organisation",
      title: "Un groupe *léger*, des entités autonomes.",
      text: [
        "Le groupe porte les fonctions communes : la stratégie, la qualité et la sécurité, la finance, les ressources humaines, la communication et la relation client.",
        "Les entités gardent la main sur leur métier. Elles disposent de leurs propres équipes commerciales et techniques, de leurs ateliers et de leurs moyens logistiques.",
      ],
      bullets: ["Direction générale du groupe", "Qualité, hygiène, sécurité, environnement", "Finance et achats mutualisés", "Ressources humaines et formation", "Communication et relation client"],
      image: "engineer",
      imageAlt: "Ingénieur du groupe vérifiant des plans sur un chantier",
      cta: { label: "Rencontrer la direction", href: routes.leadership },
    },
    {
      type: "sister",
      eyebrow: "Rejoindre le groupe",
      title: "Nous recrutons des *bâtisseurs*.",
      text: "Techniciens, chefs de chantier, commerciaux, logisticiens : découvrez nos offres et la vie dans le groupe.",
      cta: { label: "Voir les offres", href: routes.careers },
      image: "technicians",
      entity: "group",
    },
  ],
}

export const history: PageData = {
  name: "Notre histoire",
  parent: routes.group,
  metaTitle: "Notre histoire : de 2010 à Oloum Group",
  metaDescription:
    "De la création d'Yves Oloume SARL à Akwa en 2010 au lancement de Bella Location, d'Oloum Group et du projet d'usine : l'histoire d'un groupe camerounais du bâtiment.",
  hero: {
    eyebrow: "Notre histoire",
    title: "Quinze ans à *construire autrement*.",
    text: "D'un atelier à Akwa à un groupe présent dans les dix régions du Cameroun : les étapes qui ont fait Oloum Group.",
    image: "moduleAssembly",
    imageAlt: "Assemblage d'un module préfabriqué en atelier",
    entity: "group",
  },
  blocks: [
    {
      type: "intro",
      text: "Notre conviction n'a pas changé depuis le premier jour : chaque entreprise, administration ou famille doit pouvoir disposer rapidement d'un bâtiment fiable, sans attendre des mois de chantier. Tout le reste, la location, les rayonnages, la rénovation et bientôt l'usine, en découle.",
    },
    {
      type: "timeline",
      eyebrow: "Repères",
      title: "Les grandes *étapes*.",
      items: [
        { year: "2010", title: "Création d'Yves Oloume SARL", text: "L'entreprise s'installe au 114 Rue Joffre, à Akwa, et livre ses premiers bureaux modulaires à Douala." },
        { year: "2012", title: "Premières bases-vie", text: "Les grands chantiers routiers et portuaires nous confient leurs campements : dortoirs, cantines, sanitaires." },
        { year: "2014", title: "Lancement de la construction BTP", text: "L'entreprise élargit son offre à la construction classique et à la rénovation de bâtiments." },
        { year: "2016", title: "Rayonnages et logistique", text: "Création de l'offre de rayonnage et des services de cerclage : naissance du futur pôle Construction & Logistics." },
        { year: "2018", title: "Premiers conteneurs aménagés", text: "Bureaux, boutiques et logements créés à partir de conteneurs maritimes recyclés." },
        { year: "2020", title: "Naissance de Bella Location", text: "Face à la demande croissante de bâtiments temporaires, la location devient une entreprise à part entière." },
        { year: "2023", title: "Cap des 500 bâtiments livrés", text: "Le groupe dépasse les 500 bâtiments et modules livrés dans les dix régions du pays." },
        { year: "2026", title: "Création d'Oloum Group", text: "Les entreprises se réunissent sous une seule identité. Le projet d'usine est lancé." },
        { year: "2028", title: "Mise en service de l'Usine", text: "Objectif : produire nos panneaux, modules et rayonnages au Cameroun." },
      ],
    },
    {
      type: "split",
      eyebrow: "Le fondateur",
      title: "Une entreprise *familiale*, une ambition de groupe.",
      text: [
        "Oloum Group porte le nom de la famille qui l'a fondé. Ce nom est un engagement : chaque bâtiment livré engage notre réputation et celle de nos équipes.",
        "Le groupe reste fidèle à cette culture : des décisions rapides, des responsables accessibles, une relation directe avec chaque client.",
      ],
      image: "engineer",
      imageAlt: "Le fondateur du groupe sur un chantier",
      cta: { label: "Rencontrer la direction", href: routes.leadership },
    },
    {
      type: "gallery",
      eyebrow: "Archives",
      title: "Quelques *images* de notre parcours.",
      items: [
        { image: "moduleAssembly", caption: "Assemblage en atelier" },
        { image: "technicians", caption: "Nos techniciens au montage" },
        { image: "site", caption: "Une de nos premières bases-vie" },
        { image: "containerOffice", caption: "Premier conteneur bureau" },
        { image: "officeWing", caption: "Bureaux modulaires climatisés" },
        { image: "craneInstallation", caption: "Pose à la grue" },
      ],
    },
  ],
}

export const leadership: PageData = {
  name: "Direction",
  parent: routes.group,
  metaTitle: "Direction et gouvernance",
  metaDescription: "Les dirigeants d'Oloum Group et de ses entités : Yves Oloume SARL, Bella Location et le projet d'usine.",
  hero: {
    eyebrow: "Direction",
    title: "Les femmes et les hommes *qui dirigent*.",
    text: "Une équipe de direction resserrée, issue du terrain, qui suit personnellement les grands projets du groupe.",
    image: "team",
    imageAlt: "L'équipe de direction du groupe",
    entity: "group",
  },
  blocks: [
    {
      type: "people",
      eyebrow: "Comité de direction",
      title: "Notre *équipe* de direction.",
      lead: "Chaque entité est dirigée par un responsable dédié, réuni chaque mois au sein du comité de direction du groupe.",
      items: [
        { name: "Yves Oloume", role: "Fondateur et Président", entity: "group", bio: "Fondateur d'Yves Oloume SARL en 2010, il fixe la vision et la stratégie du groupe et suit personnellement le projet d'usine." },
        { name: "Directeur général", role: "Directeur général du groupe", entity: "group", bio: "Il coordonne les entités, les fonctions support et les grands comptes du groupe." },
        { name: "Directrice d'exploitation", role: "Directrice, Yves Oloume SARL", entity: "yo", bio: "Elle pilote les deux pôles de l'entreprise : bâtiments préfabriqués et Construction & Logistics." },
        { name: "Responsable location", role: "Directeur, Bella Location", entity: "bella", bio: "Il gère le parc locatif, les contrats et la maintenance des bâtiments loués." },
        { name: "Chef de projet industriel", role: "Responsable du projet d'usine", entity: "usine", bio: "Ingénieur industriel, il conduit les études, le choix du site et des équipements de l'Usine." },
        { name: "Responsable QHSE", role: "Qualité, hygiène, sécurité, environnement", entity: "group", bio: "Elle définit les standards de qualité et de sécurité communs à toutes les entités." },
      ],
    },
    {
      type: "cards",
      eyebrow: "Gouvernance",
      title: "Comment le groupe *prend ses décisions*.",
      columns: 3,
      items: [
        { icon: "users", title: "Comité de direction", text: "Une fois par mois : résultats, grands projets, sécurité et investissements de chaque entité." },
        { icon: "shield", title: "Comité qualité et sécurité", text: "Chaque trimestre : retours clients, incidents, audits de chantier et plans d'amélioration." },
        { icon: "calendar", title: "Revue annuelle", text: "Chaque année : stratégie, budget et feuille de route du groupe, dont l'avancement de l'Usine." },
      ],
    },
  ],
}

export const commitments: PageData = {
  name: "Nos engagements",
  metaTitle: "Nos engagements : qualité, sécurité, environnement",
  metaDescription:
    "Qualité, sécurité des chantiers, environnement, emploi local : les engagements d'Oloum Group et de ses entités au Cameroun.",
  hero: {
    eyebrow: "Engagements",
    title: "Bien construire, *c'est aussi une responsabilité*.",
    text: "Qualité, sécurité, environnement et emploi local : quatre engagements partagés par toutes les entités du groupe.",
    image: "technicians",
    imageAlt: "Techniciens équipés de leurs protections sur un chantier",
    entity: "group",
  },
  blocks: [
    {
      type: "intro",
      text: "Un bâtiment préfabriqué est, par nature, plus sobre qu'une construction classique : moins de déchets, moins de béton, des modules réutilisables. Nous voulons aller plus loin, sur chaque chantier et dans chaque entité.",
    },
    {
      type: "cards",
      eyebrow: "Nos quatre engagements",
      title: "Ce que nous *nous imposons*.",
      columns: 2,
      items: [
        { icon: "check", tag: "Qualité", title: "Un contrôle à chaque étape", text: "Plans validés avant fabrication, contrôle en atelier, réception contradictoire sur site et garantie structure de 10 ans sur les bâtiments vendus." },
        { icon: "hardhat", tag: "Sécurité", title: "Zéro accident comme objectif", text: "Équipements de protection obligatoires, briefing sécurité quotidien sur chantier, levages préparés et habilitations à jour pour tous nos techniciens." },
        { icon: "spark", tag: "Environnement", title: "Construire plus sobre", text: "Modules réutilisés jusqu'à 5 fois en location, conteneurs maritimes recyclés, tri des déchets de chantier et options solaires sur tous nos bâtiments." },
        { icon: "users", tag: "Emploi local", title: "Former au Cameroun", text: "Plus de 9 collaborateurs sur 10 recrutés localement, un programme d'apprentissage en atelier et des partenariats avec les écoles techniques de Douala." },
      ],
    },
    {
      type: "stats",
      tone: "red",
      items: [
        { value: "10", label: "Ans de garantie structure" },
        { value: "5", label: "Réutilisations moyennes d'un module loué" },
        { value: "92%", label: "De collaborateurs recrutés localement" },
        { value: "100%", label: "De techniciens formés à la sécurité" },
      ],
    },
    {
      type: "steps",
      eyebrow: "Sur chaque chantier",
      title: "Notre démarche *qualité et sécurité*.",
      steps: [
        { title: "Analyse des risques", text: "Avant chaque intervention : accès, levage, travail en hauteur, électricité, coactivité." },
        { title: "Briefing quotidien", text: "Chaque matin, l'équipe revoit les tâches du jour et les risques associés." },
        { title: "Contrôle qualité", text: "Une check-list par type de bâtiment, signée par le chef de chantier." },
        { title: "Réception et suivi", text: "Réception avec le client, levée des réserves et suivi après livraison." },
      ],
    },
  ],
}

export const sectors: PageData = {
  name: "Secteurs",
  metaTitle: "Secteurs : les clients que nous équipons",
  metaDescription:
    "BTP, mines, pétrole et gaz, administrations, éducation, santé, ONG, industrie, événementiel : les bâtiments préfabriqués d'Oloum Group pour chaque secteur.",
  hero: {
    eyebrow: "Secteurs",
    title: "Un bâtiment adapté *à chaque secteur*.",
    text: "Des bases-vie pour les grands chantiers aux salles de classe livrées pendant les vacances : nous connaissons les contraintes de votre métier.",
    image: "modularComplex",
    imageAlt: "Complexe modulaire installé pour un client",
    entity: "group",
  },
  blocks: [
    {
      type: "cards",
      eyebrow: "Nos secteurs",
      title: "Ce que nous faisons *pour vous*.",
      columns: 3,
      items: [
        { icon: "hardhat", title: "BTP et génie civil", text: "Bases-vie, bureaux de chantier, sanitaires, magasins et ateliers, à l'achat ou en location pour la durée du marché.", meta: "Bella Location · Yves Oloume SARL", href: routes.catalogue },
        { icon: "factory", title: "Mines, pétrole et gaz", text: "Campements complets en zones isolées : hébergement, cantine, infirmerie, bureaux, énergie solaire.", meta: "Yves Oloume SARL", href: routes.prefab },
        { icon: "building", title: "Administrations et collectivités", text: "Bureaux, guichets, centres d'état civil, extensions rapides de bâtiments publics.", meta: "Yves Oloume SARL", href: routes.prefab },
        { icon: "home", title: "Éducation", text: "Salles de classe, blocs administratifs, internats et sanitaires, livrés pendant les vacances scolaires.", meta: "Yves Oloume SARL", href: routes.prefab },
        { icon: "shield", title: "Santé", text: "Centres de santé, salles de consultation, unités d'isolement et logements pour le personnel.", meta: "Yves Oloume SARL · Bella Location", href: routes.prefab },
        { icon: "globe", title: "ONG et humanitaire", text: "Bureaux, entrepôts et hébergement déployés rapidement, en location avec option d'achat.", meta: "Bella Location", href: routes.plans },
        { icon: "box", title: "Industrie et distribution", text: "Entrepôts métalliques, 15 solutions de rayonnage, cerclage et conteneurs de stockage.", meta: "Construction & Logistics", href: routes.logistics },
        { icon: "spark", title: "Événementiel", text: "Sanitaires, loges, kiosques et bureaux d'accueil loués pour quelques jours.", meta: "Bella Location", href: routes.catalogue },
        { icon: "users", title: "Particuliers", text: "Maisons préfabriquées, studios en conteneur, extensions et rénovation.", meta: "Yves Oloume SARL", href: routes.prefab },
      ],
    },
    { type: "projects", limit: 3 },
  ],
}

export const careers: PageData = {
  name: "Carrières",
  metaTitle: "Carrières : rejoindre Oloum Group",
  metaDescription:
    "Techniciens, chefs de chantier, commerciaux, logisticiens : rejoignez Oloum Group, Yves Oloume SARL et Bella Location à Douala et partout au Cameroun.",
  hero: {
    eyebrow: "Carrières",
    title: "Construisez *avec nous*.",
    text: "Nous cherchons des femmes et des hommes de terrain, fiers de livrer des bâtiments qui servent. Formation, évolution et esprit d'équipe garantis.",
    image: "technicians",
    imageAlt: "Techniciens du groupe au travail",
    entity: "group",
    ctas: [{ label: "Candidature spontanée", href: routes.contact }],
  },
  blocks: [
    {
      type: "cards",
      eyebrow: "Pourquoi nous rejoindre",
      title: "Ce que *nous offrons*.",
      columns: 4,
      items: [
        { icon: "tools", title: "Un métier concret", text: "Des bâtiments que vous voyez sortir de terre, utilisés chaque jour par des milliers de personnes." },
        { icon: "users", title: "La formation", text: "Un parcours d'intégration, des formations sécurité et techniques, et l'apprentissage en atelier." },
        { icon: "layers", title: "L'évolution", text: "Trois entités, des dizaines de métiers : de nombreux parcours possibles à l'intérieur du groupe." },
        { icon: "shield", title: "La sécurité", text: "Des équipements fournis, des procédures claires, et une culture qui place la sécurité avant le délai." },
      ],
    },
    {
      type: "jobs",
      eyebrow: "Offres en cours",
      title: "Nos *postes ouverts*.",
      apply: "Postuler",
      spontaneous: { label: "Envoyer une candidature spontanée", href: routes.contact },
      items: [
        { title: "Chef de chantier modulaire", entity: "prefab", place: "Douala", contract: "CDI", text: "Vous encadrez une équipe de 6 à 12 techniciens pour l'installation de bâtiments préfabriqués partout au Cameroun." },
        { title: "Technicien monteur en rayonnage", entity: "logistics", place: "Douala", contract: "CDI", text: "Vous montez et contrôlez des rayonnages industriels chez nos clients, dans le respect des normes de sécurité." },
        { title: "Commercial location B2B", entity: "bella", place: "Douala / Yaoundé", contract: "CDI", text: "Vous développez le portefeuille de Bella Location auprès des entreprises de BTP, des ONG et des organisateurs d'événements." },
        { title: "Soudeur-assembleur", entity: "prefab", place: "Douala, atelier", contract: "CDD 12 mois", text: "Vous assemblez les structures métalliques des modules en atelier, à partir de plans." },
        { title: "Ingénieur méthodes industrielles", entity: "usine", place: "Douala", contract: "CDI", text: "Vous participez à la conception des lignes de production de la future usine du groupe." },
        { title: "Assistant(e) logistique et parc", entity: "bella", place: "Douala", contract: "Stage 6 mois", text: "Vous suivez les entrées et sorties du parc locatif, les inspections et la planification des livraisons." },
      ],
    },
    {
      type: "steps",
      eyebrow: "Recrutement",
      title: "Comment *nous recrutons*.",
      steps: [
        { title: "Candidature", text: "Envoyez votre CV par le formulaire de contact ou WhatsApp." },
        { title: "Premier échange", text: "Un appel de 20 minutes avec les ressources humaines." },
        { title: "Entretien technique", text: "Une rencontre avec votre futur responsable, souvent sur un chantier ou en atelier." },
        { title: "Intégration", text: "Une semaine d'accueil : sécurité, entités du groupe, outils et équipe." },
      ],
    },
  ],
}
