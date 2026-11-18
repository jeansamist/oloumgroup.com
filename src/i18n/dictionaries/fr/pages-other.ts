import { routes } from "@/lib/routes"
import type { PageData } from "../../types"

export const projects: PageData = {
  name: "Réalisations",
  metaTitle: "Réalisations : bâtiments préfabriqués, BTP, location",
  metaDescription:
    "Bureaux modulaires, bases-vie, entrepôts, conteneurs aménagés, rénovations et locations : les réalisations des entités d'Oloum Group partout au Cameroun.",
  hero: {
    eyebrow: "Réalisations",
    title: "Des bâtiments *bien réels*.",
    text: "Bureaux, bases-vie, entrepôts, logements, conteneurs, locations : une sélection de projets livrés par les entités du groupe.",
    image: "modularComplex",
    imageAlt: "Complexe modulaire livré par le groupe",
    entity: "group",
  },
  blocks: [
    { type: "projects", filters: true },
    {
      type: "stats",
      tone: "ink",
      items: [
        { value: "650+", label: "Bâtiments et modules livrés" },
        { value: "120+", label: "Entrepôts équipés" },
        { value: "10", label: "Régions du Cameroun" },
        { value: "300+", label: "Clients accompagnés" },
      ],
    },
    {
      type: "quotes",
      eyebrow: "Témoignages",
      title: "Ils en *parlent*.",
      items: [
        {
          quote: "Nos huit salles de classe ont été livrées pendant les vacances. À la rentrée, les élèves n'ont rien remarqué, sauf des classes neuves et climatisées.",
          author: "Directeur d'établissement",
          role: "Enseignement privé · Yaoundé",
        },
        {
          quote: "Le conteneur bureau de notre agence mobile a été livré clé en main, avec l'alimentation solaire. Il tourne depuis deux ans sans incident.",
          author: "Responsable du réseau",
          role: "Banque · Ouest",
        },
      ],
    },
  ],
}

export const news: PageData = {
  name: "Actualités",
  metaTitle: "Actualités, conseils et coulisses",
  metaDescription:
    "Nouveautés du groupe, conseils pour choisir entre achat et location, bien équiper son entrepôt ou préparer une base-vie : les actualités d'Oloum Group.",
  hero: {
    eyebrow: "Actualités",
    title: "La vie *du groupe*.",
    text: "Nouveautés, conseils pratiques et coulisses de nos chantiers et de nos ateliers.",
    image: "team",
    imageAlt: "Équipe du groupe en réunion de chantier",
    entity: "group",
  },
  blocks: [{ type: "news" }],
}

export const faq: PageData = {
  name: "FAQ",
  metaTitle: "Questions fréquentes",
  metaDescription:
    "Achat ou location, délais, prix, livraison, garanties, rayonnages, conteneurs, Usine : les réponses aux questions fréquentes sur Oloum Group et ses entités.",
  hero: {
    eyebrow: "FAQ",
    title: "Toutes vos questions, *nos réponses*.",
    text: "Vous ne trouvez pas votre réponse ? Écrivez-nous sur WhatsApp, nous répondons rapidement.",
    image: "engineer",
    imageAlt: "Conseiller du groupe",
    entity: "group",
    ctas: [{ label: "Poser une question", href: routes.contact }],
  },
  blocks: [
    {
      type: "faq",
      eyebrow: "Le groupe",
      title: "Oloum Group et *ses entités*.",
      items: [
        ["Qu'est-ce qu'Oloum Group ?", "Le groupe qui réunit Yves Oloume SARL (construction et vente), Bella Location (location) et le projet d'Usine (production), autour du bâtiment préfabriqué."],
        ["À qui dois-je m'adresser ?", "Au groupe, simplement : nous transmettons votre demande à la bonne entité. Vous pouvez aussi contacter directement chaque entité."],
        ["Où êtes-vous situés ?", "Au 114 Rue Joffre, à Akwa, Douala. Nous intervenons dans les dix régions du Cameroun."],
      ],
    },
    {
      type: "faq",
      eyebrow: "Acheter",
      title: "Avec *Yves Oloume SARL*.",
      items: [
        ["Quel est le délai de livraison ?", "De 4 à 12 semaines selon la taille et les équipements, à compter de la validation des plans."],
        ["Quelles garanties ?", "10 ans sur la structure, 2 ans sur les équipements, et un contrat d'entretien en option."],
        ["Le bâtiment supporte-t-il le climat ?", "Oui : isolation, ventilation et toitures sont conçues pour la chaleur, l'humidité et les fortes pluies."],
        ["Proposez-vous le paiement échelonné ?", "Oui, selon le projet : en général un acompte à la commande, un paiement à la livraison et un solde à la réception."],
      ],
    },
    {
      type: "faq",
      eyebrow: "Louer",
      title: "Avec *Bella Location*.",
      items: [
        ["Quelle durée minimale ?", "Une semaine pour les sanitaires et l'événementiel, un mois pour les bureaux et bases-vie."],
        ["Que comprend le loyer ?", "Le bâtiment, son installation et sa maintenance. Le transport est inclus à Douala pour la courte durée et chiffré ailleurs."],
        ["Puis-je acheter le bâtiment loué ?", "Oui, avec la formule longue durée : une partie des loyers est déduite du prix."],
      ],
    },
    {
      type: "faq",
      eyebrow: "Construction & Logistics",
      title: "BTP, rayonnages *et conteneurs*.",
      items: [
        ["Faites-vous aussi de la construction classique ?", "Oui, du gros œuvre aux finitions, ainsi que la rénovation de bâtiments existants."],
        ["Combien de solutions de rayonnage proposez-vous ?", "Quinze, du rayonnage de bureau au cantilever, pour tous les secteurs."],
        ["Peut-on louer un conteneur aménagé ?", "Oui : les conteneurs sont vendus par Yves Oloume SARL et loués par Bella Location."],
      ],
    },
  ],
}

export const contact: PageData = {
  name: "Contact",
  metaTitle: "Contact : Douala, Akwa",
  metaDescription:
    "Contactez Oloum Group à Douala : construction, achat ou location de bâtiments préfabriqués, rayonnages, conteneurs. Nous vous orientons vers la bonne entité.",
  noCta: true,
  hero: {
    eyebrow: "Contact",
    title: "Parlons de *votre projet*.",
    text: "Choisissez l'entité concernée ou laissez-nous vous orienter. Réponse sous 48 h ouvrées, souvent bien avant sur WhatsApp.",
    image: "officeOpenSpace",
    imageAlt: "Bureaux du groupe à Douala",
    entity: "group",
  },
  blocks: [{ type: "contact" }],
}

export const quote: PageData = {
  name: "Demande de devis",
  metaTitle: "Demande de devis gratuit",
  metaDescription:
    "Demandez un devis gratuit pour l'achat ou la location d'un bâtiment préfabriqué, un chantier BTP, un rayonnage ou un conteneur aménagé. Réponse sous 48 h.",
  noCta: true,
  hero: {
    eyebrow: "Devis gratuit",
    title: "Votre devis *en 3 étapes*.",
    text: "Quelques informations suffisent pour recevoir une proposition chiffrée sous 48 h ouvrées. Gratuit et sans engagement.",
    image: "moduleAssembly",
    imageAlt: "Module en cours d'assemblage",
    entity: "group",
  },
  blocks: [{ type: "quote" }],
}

export const legal: PageData = {
  name: "Mentions légales",
  metaTitle: "Mentions légales",
  metaDescription: "Mentions légales du site oloumgroup.com : éditeur, hébergeur, propriété intellectuelle.",
  hero: {
    eyebrow: "Légal",
    title: "Mentions *légales*.",
    text: "Informations sur l'éditeur et l'hébergeur du site oloumgroup.com.",
    image: "officeCorridor",
    imageAlt: "Couloir de bureaux",
    entity: "group",
  },
  blocks: [
    {
      type: "legal",
      updated: "Dernière mise à jour : novembre 2026",
      sections: [
        { title: "Éditeur", text: ["Oloum Group, société à responsabilité limitée (forme à confirmer), au capital de 10 000 000 FCFA.", "Siège : 114 Rue Joffre, Akwa, BP 18629 Douala, Cameroun.", "RCCM : RC/DLA/2026/B/0000 · NIU : M000000000000X (à compléter).", "Téléphone : +237 676 31 33 33 · E-mail : contact@oloumgroup.com."] },
        { title: "Directeur de la publication", text: ["Yves Oloume, Président d'Oloum Group."] },
        { title: "Hébergement", text: ["Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com."] },
        { title: "Propriété intellectuelle", text: ["Les textes, photographies, logos et éléments graphiques de ce site sont la propriété d'Oloum Group ou de ses entités. Toute reproduction sans autorisation écrite est interdite."] },
        { title: "Responsabilité", text: ["Les informations du site sont fournies à titre indicatif. Les caractéristiques, délais et prix sont confirmés dans chaque devis."] },
      ],
    },
  ],
}

export const privacy: PageData = {
  name: "Confidentialité",
  metaTitle: "Politique de confidentialité",
  metaDescription: "Comment Oloum Group collecte, utilise et protège vos données personnelles sur oloumgroup.com.",
  hero: {
    eyebrow: "Légal",
    title: "Vos données, *protégées*.",
    text: "Ce que nous collectons, pourquoi, et vos droits.",
    image: "officeCorridor",
    imageAlt: "Couloir de bureaux",
    entity: "group",
  },
  blocks: [
    {
      type: "legal",
      updated: "Dernière mise à jour : novembre 2026",
      sections: [
        { title: "Données collectées", text: ["Uniquement celles que vous nous transmettez via les formulaires, e-mail ou WhatsApp : nom, coordonnées, entreprise, description du projet."] },
        { title: "Utilisation", text: ["Elles servent exclusivement à répondre à votre demande et, si vous l'acceptez, à vous envoyer la lettre du groupe. Elles ne sont jamais vendues."] },
        { title: "Partage au sein du groupe", text: ["Votre demande peut être transmise à l'entité concernée (Yves Oloume SARL, Bella Location) pour y répondre."] },
        { title: "Durée de conservation", text: ["Trois ans après notre dernier échange, sauf obligation légale contraire."] },
        { title: "Cookies", text: ["Le site n'utilise aucun cookie publicitaire ni de suivi. Seul un stockage technique de session évite de rejouer l'animation d'ouverture."] },
        { title: "Vos droits", text: ["Vous pouvez demander l'accès, la rectification ou la suppression de vos données à contact@oloumgroup.com."] },
      ],
    },
  ],
}
