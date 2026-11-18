import { routes } from "@/lib/routes"
import type { PageData } from "../../types"

export const projects: PageData = {
  name: "Projects",
  metaTitle: "Projects: prefabricated buildings, construction, rental",
  metaDescription:
    "Modular offices, site camps, warehouses, converted containers, renovations and rentals: projects delivered by Oloum Group companies across Cameroon.",
  hero: {
    eyebrow: "Projects",
    title: "Buildings that are *very real*.",
    text: "Offices, site camps, warehouses, housing, containers, rentals: a selection of projects delivered by the group's companies.",
    image: "modularComplex",
    imageAlt: "Modular complex delivered by the group",
    entity: "group",
  },
  blocks: [
    { type: "projects", filters: true },
    {
      type: "stats",
      tone: "ink",
      items: [
        { value: "650+", label: "Buildings and modules delivered" },
        { value: "120+", label: "Warehouses equipped" },
        { value: "10", label: "Regions of Cameroon" },
        { value: "300+", label: "Clients served" },
      ],
    },
    {
      type: "quotes",
      eyebrow: "Testimonials",
      title: "In *their words*.",
      items: [
        {
          quote: "Our eight classrooms were delivered during the holidays. When term started, the pupils noticed nothing, except brand-new, air-conditioned classrooms.",
          author: "Head Teacher",
          role: "Private education · Yaoundé",
        },
        {
          quote: "The container office for our mobile branch was delivered turnkey, with solar power. It has been running for two years without a single incident.",
          author: "Network Manager",
          role: "Banking · West region",
        },
      ],
    },
  ],
}

export const news: PageData = {
  name: "News",
  metaTitle: "News, advice and behind the scenes",
  metaDescription:
    "Group news, advice on choosing between buying and renting, equipping your warehouse or preparing a site camp: the latest from Oloum Group.",
  hero: {
    eyebrow: "News",
    title: "Life *at the group*.",
    text: "What's new, practical advice and behind the scenes on our sites and in our workshops.",
    image: "team",
    imageAlt: "Group team at a site meeting",
    entity: "group",
  },
  blocks: [{ type: "news" }],
}

export const faq: PageData = {
  name: "FAQ",
  metaTitle: "Frequently asked questions",
  metaDescription:
    "Buying or renting, lead times, prices, delivery, warranties, racking, containers, the Factory: answers to frequently asked questions about Oloum Group and its companies.",
  hero: {
    eyebrow: "FAQ",
    title: "All your questions, *our answers*.",
    text: "Can't find your answer? Message us on WhatsApp and we will reply quickly.",
    image: "engineer",
    imageAlt: "Group adviser",
    entity: "group",
    ctas: [{ label: "Ask a question", href: routes.contact }],
  },
  blocks: [
    {
      type: "faq",
      eyebrow: "The group",
      title: "Oloum Group and *its companies*.",
      items: [
        ["What is Oloum Group?", "The group that brings together Yves Oloume SARL (construction and sales), Bella Location (rental) and the Factory project (production), around prefabricated buildings."],
        ["Whom should I contact?", "Simply contact the group: we forward your request to the right company. You can also contact each company directly."],
        ["Where are you based?", "At 114 Rue Joffre, Akwa, Douala. We work in all ten regions of Cameroon."],
      ],
    },
    {
      type: "faq",
      eyebrow: "Buying",
      title: "With *Yves Oloume SARL*.",
      items: [
        ["What is the delivery lead time?", "From 4 to 12 weeks depending on size and equipment, from approval of the drawings."],
        ["What warranties do you offer?", "10 years on the structure, 2 years on equipment, and an optional maintenance contract."],
        ["Can the building cope with the climate?", "Yes: insulation, ventilation and roofing are designed for heat, humidity and heavy rain."],
        ["Do you offer staged payments?", "Yes, depending on the project: usually a deposit on order, a payment on delivery and the balance on handover."],
      ],
    },
    {
      type: "faq",
      eyebrow: "Renting",
      title: "With *Bella Location*.",
      items: [
        ["What is the minimum period?", "One week for sanitary units and events, one month for offices and site camps."],
        ["What does the rent include?", "The building, its installation and its maintenance. Transport is included in Douala for short-term rentals and quoted elsewhere."],
        ["Can I buy the building I rent?", "Yes, with the long-term plan: part of the rent paid is deducted from the price."],
      ],
    },
    {
      type: "faq",
      eyebrow: "Construction & Logistics",
      title: "Construction, racking *and containers*.",
      items: [
        ["Do you also do conventional construction?", "Yes, from structural work to finishes, as well as renovation of existing buildings."],
        ["How many racking solutions do you offer?", "Fifteen, from office shelving to cantilever racking, for every sector."],
        ["Can I rent a converted container?", "Yes: containers are sold by Yves Oloume SARL and rented by Bella Location."],
      ],
    },
  ],
}

export const contact: PageData = {
  name: "Contact",
  metaTitle: "Contact: Douala, Akwa",
  metaDescription:
    "Contact Oloum Group in Douala: construction, purchase or rental of prefabricated buildings, racking, containers. We will direct you to the right company.",
  noCta: true,
  hero: {
    eyebrow: "Contact",
    title: "Let's talk about *your project*.",
    text: "Choose the relevant company or let us point you in the right direction. Reply within 48 working hours, often much sooner on WhatsApp.",
    image: "officeOpenSpace",
    imageAlt: "The group's offices in Douala",
    entity: "group",
  },
  blocks: [{ type: "contact" }],
}

export const quote: PageData = {
  name: "Quote request",
  metaTitle: "Request a free quote",
  metaDescription:
    "Request a free quote to buy or rent a prefabricated building, for construction works, racking or a converted container. Reply within 48 hours.",
  noCta: true,
  hero: {
    eyebrow: "Free quote",
    title: "Your quote *in 3 steps*.",
    text: "A few details are all it takes to receive a costed proposal within 48 working hours. Free and with no obligation.",
    image: "moduleAssembly",
    imageAlt: "Module being assembled",
    entity: "group",
  },
  blocks: [{ type: "quote" }],
}

export const legal: PageData = {
  name: "Legal notice",
  metaTitle: "Legal notice",
  metaDescription: "Legal notice for oloumgroup.com: publisher, hosting provider, intellectual property.",
  hero: {
    eyebrow: "Legal",
    title: "Legal *notice*.",
    text: "Information about the publisher and hosting provider of oloumgroup.com.",
    image: "officeCorridor",
    imageAlt: "Office corridor",
    entity: "group",
  },
  blocks: [
    {
      type: "legal",
      updated: "Last updated: November 2026",
      sections: [
        { title: "Publisher", text: ["Oloum Group, limited liability company (legal form to be confirmed), with share capital of 10,000,000 FCFA.", "Head office: 114 Rue Joffre, Akwa, PO Box 18629 Douala, Cameroon.", "RCCM: RC/DLA/2026/B/0000 · NIU: M000000000000X (to be completed).", "Phone: +237 676 31 33 33 · Email: contact@oloumgroup.com."] },
        { title: "Publication director", text: ["Yves Oloume, Chairman of Oloum Group."] },
        { title: "Hosting", text: ["Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States — vercel.com."] },
        { title: "Intellectual property", text: ["The text, photographs, logos and graphic elements on this site are the property of Oloum Group or its companies. Any reproduction without written permission is prohibited."] },
        { title: "Liability", text: ["Information on this site is provided for guidance only. Specifications, lead times and prices are confirmed in each quote."] },
      ],
    },
  ],
}

export const privacy: PageData = {
  name: "Privacy",
  metaTitle: "Privacy policy",
  metaDescription: "How Oloum Group collects, uses and protects your personal data on oloumgroup.com.",
  hero: {
    eyebrow: "Legal",
    title: "Your data, *protected*.",
    text: "What we collect, why, and your rights.",
    image: "officeCorridor",
    imageAlt: "Office corridor",
    entity: "group",
  },
  blocks: [
    {
      type: "legal",
      updated: "Last updated: November 2026",
      sections: [
        { title: "Data collected", text: ["Only the data you send us via forms, email or WhatsApp: name, contact details, company, project description."] },
        { title: "Use", text: ["It is used solely to respond to your request and, if you agree, to send you the group newsletter. It is never sold."] },
        { title: "Sharing within the group", text: ["Your request may be forwarded to the relevant company (Yves Oloume SARL, Bella Location) so that it can respond."] },
        { title: "Retention period", text: ["Three years after our last contact, unless the law requires otherwise."] },
        { title: "Cookies", text: ["This site uses no advertising or tracking cookies. Only technical session storage is used, to avoid replaying the opening animation."] },
        { title: "Your rights", text: ["You can request access to, correction of or deletion of your data by writing to contact@oloumgroup.com."] },
      ],
    },
  ],
}
