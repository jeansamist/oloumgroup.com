import { routes } from "@/lib/routes"
import type { PageData } from "../../types"

export const group: PageData = {
  name: "The group",
  metaTitle: "The group: one identity, distinct businesses",
  metaDescription:
    "Oloum Group brings Yves Oloume SARL, Bella Location and the future factory project together under one identity, built around prefabricated buildings in Cameroon.",
  hero: {
    eyebrow: "The group",
    title: "One identity, *distinct businesses*.",
    text: "Oloum Group was created to bring our companies together under one name, while leaving each its own field, teams and clients.",
    image: "team",
    imageAlt: "The group's teams on a building site",
    entity: "group",
    ctas: [
      { label: "Our history", href: routes.history },
      { label: "Our commitments", href: routes.commitments, variant: "light" },
    ],
  },
  blocks: [
    {
      type: "intro",
      eyebrow: "Our purpose",
      text: "It all began in 2010 in Akwa, in the heart of Douala, with Yves Oloume SARL and its prefabricated buildings. Then came rental, with Bella Location. Tomorrow will come production. Oloum Group gives this story a shared name and an overall vision: to build, to rent and, in time, to produce.",
    },
    {
      type: "cards",
      eyebrow: "Mission and vision",
      title: "What *guides us*.",
      columns: 3,
      numbered: false,
      items: [
        { icon: "box", tag: "Mission", title: "Making buildings accessible", text: "Giving businesses, government bodies and families simple access to prefabricated buildings: to buy, to rent, and soon manufactured by us." },
        { icon: "globe", tag: "Vision", title: "Mastering the whole chain", text: "To become, by 2030, the benchmark for prefabricated buildings in Central Africa, from production through to installation and maintenance." },
        { icon: "users", tag: "Ambition", title: "Creating local jobs", text: "Training and employing Cameroonian technicians at every stage, from the workshop to the site." },
      ],
    },
    { type: "tree" },
    { type: "pillars" },
    {
      type: "stats",
      tone: "ink",
      items: [
        { value: "3", label: "Businesses: build, rent, produce" },
        { value: "2", label: "Operating companies" },
        { value: "140", label: "Employees" },
        { value: "15", label: "Years of experience" },
      ],
    },
    {
      type: "cards",
      eyebrow: "Our principles",
      title: "The same standards, *across the group*.",
      columns: 4,
      items: [
        { icon: "users", title: "A clear point of contact", text: "Each company has its own field. You always know who you are speaking to and who is responsible for your project." },
        { icon: "ruler", title: "Transparency", text: "Detailed quotes, written lead times, no hidden costs. What is signed is delivered." },
        { icon: "map", title: "Proximity", text: "Teams based in Douala who travel across Cameroon and answer on WhatsApp." },
        { icon: "shield", title: "Durability", text: "Reusable, relocatable buildings designed for heat, humidity and heavy rain." },
      ],
    },
    {
      type: "split",
      eyebrow: "Organisation",
      title: "A *lean* group, autonomous companies.",
      text: [
        "The group handles shared functions: strategy, quality and safety, finance, human resources, communications and client relations.",
        "The companies stay in charge of their own business. They have their own sales and technical teams, their own workshops and their own logistics resources.",
      ],
      bullets: ["Group executive management", "Quality, health, safety, environment", "Shared finance and purchasing", "Human resources and training", "Communications and client relations"],
      image: "engineer",
      imageAlt: "Group engineer checking plans on a building site",
      cta: { label: "Meet the leadership", href: routes.leadership },
    },
    {
      type: "sister",
      eyebrow: "Join the group",
      title: "We are hiring *builders*.",
      text: "Technicians, site managers, sales staff, logistics specialists: explore our vacancies and life in the group.",
      cta: { label: "View vacancies", href: routes.careers },
      image: "technicians",
      entity: "group",
    },
  ],
}

export const history: PageData = {
  name: "Our history",
  parent: routes.group,
  metaTitle: "Our history: from 2010 to Oloum Group",
  metaDescription:
    "From the founding of Yves Oloume SARL in Akwa in 2010 to the launch of Bella Location, Oloum Group and the factory project: the story of a Cameroonian construction group.",
  hero: {
    eyebrow: "Our history",
    title: "Fifteen years of *building differently*.",
    text: "From a workshop in Akwa to a group active in all ten regions of Cameroon: the milestones that made Oloum Group.",
    image: "moduleAssembly",
    imageAlt: "Assembly of a prefabricated module in the workshop",
    entity: "group",
  },
  blocks: [
    {
      type: "intro",
      text: "Our conviction has not changed since day one: every business, public body or family should be able to get a reliable building quickly, without waiting months for construction. Everything else, rental, racking, renovation and soon the factory, follows from that.",
    },
    {
      type: "timeline",
      eyebrow: "Milestones",
      title: "The key *milestones*.",
      items: [
        { year: "2010", title: "Yves Oloume SARL is founded", text: "The company sets up at 114 Rue Joffre, Akwa, and delivers its first modular offices in Douala." },
        { year: "2012", title: "First site camps", text: "Major road and port projects entrust us with their camps: dormitories, canteens, sanitary units." },
        { year: "2014", title: "Launch of construction works", text: "The company extends its offer to conventional construction and building renovation." },
        { year: "2016", title: "Racking and logistics", text: "Launch of the racking offer and strapping services: the birth of the future Construction & Logistics division." },
        { year: "2018", title: "First converted containers", text: "Offices, shops and homes created from recycled shipping containers." },
        { year: "2020", title: "Bella Location is born", text: "With growing demand for temporary buildings, rental becomes a company in its own right." },
        { year: "2023", title: "500 buildings delivered", text: "The group passes 500 buildings and modules delivered across the country's ten regions." },
        { year: "2026", title: "Oloum Group is created", text: "The companies come together under one identity. The factory project is launched." },
        { year: "2028", title: "The Factory comes on stream", text: "Goal: to produce our panels, modules and racking in Cameroon." },
      ],
    },
    {
      type: "split",
      eyebrow: "The founder",
      title: "A *family* business, a group ambition.",
      text: [
        "Oloum Group bears the name of the family that founded it. That name is a commitment: every building delivered puts our reputation, and that of our teams, on the line.",
        "The group remains true to this culture: quick decisions, approachable managers and a direct relationship with every client.",
      ],
      image: "engineer",
      imageAlt: "The group's founder on a building site",
      cta: { label: "Meet the leadership", href: routes.leadership },
    },
    {
      type: "gallery",
      eyebrow: "Archives",
      title: "A few *images* from our journey.",
      items: [
        { image: "moduleAssembly", caption: "Workshop assembly" },
        { image: "technicians", caption: "Our technicians during assembly" },
        { image: "site", caption: "One of our first site camps" },
        { image: "containerOffice", caption: "Our first container office" },
        { image: "officeWing", caption: "Air-conditioned modular offices" },
        { image: "craneInstallation", caption: "Crane installation" },
      ],
    },
  ],
}

export const leadership: PageData = {
  name: "Leadership",
  parent: routes.group,
  metaTitle: "Leadership and governance",
  metaDescription: "The leaders of Oloum Group and its companies: Yves Oloume SARL, Bella Location and the factory project.",
  hero: {
    eyebrow: "Leadership",
    title: "The women and men *at the helm*.",
    text: "A tight-knit leadership team with field experience, personally overseeing the group's major projects.",
    image: "team",
    imageAlt: "The group's leadership team",
    entity: "group",
  },
  blocks: [
    {
      type: "people",
      eyebrow: "Executive committee",
      title: "Our leadership *team*.",
      lead: "Each company is led by a dedicated manager, who meets monthly as part of the group's executive committee.",
      items: [
        { name: "Yves Oloume", role: "Founder and Chairman", entity: "group", bio: "Founder of Yves Oloume SARL in 2010, he sets the group's vision and strategy and personally oversees the factory project." },
        { name: "Chief Executive Officer", role: "Group Chief Executive Officer", entity: "group", bio: "He coordinates the companies, support functions and the group's key accounts." },
        { name: "Chief Operating Officer", role: "Director, Yves Oloume SARL", entity: "yo", bio: "She runs the company's two divisions: prefabricated buildings and Construction & Logistics." },
        { name: "Rental Manager", role: "Director, Bella Location", entity: "bella", bio: "He manages the rental fleet, contracts and maintenance of rented buildings." },
        { name: "Industrial Project Manager", role: "Head of the factory project", entity: "usine", bio: "An industrial engineer, he leads the studies and the choice of site and equipment for the Factory." },
        { name: "QHSE Manager", role: "Quality, health, safety, environment", entity: "group", bio: "She sets the quality and safety standards shared by all the companies." },
      ],
    },
    {
      type: "cards",
      eyebrow: "Governance",
      title: "How the group *makes decisions*.",
      columns: 3,
      items: [
        { icon: "users", title: "Executive committee", text: "Once a month: results, major projects, safety and investments for each company." },
        { icon: "shield", title: "Quality and safety committee", text: "Every quarter: client feedback, incidents, site audits and improvement plans." },
        { icon: "calendar", title: "Annual review", text: "Every year: the group's strategy, budget and roadmap, including progress on the Factory." },
      ],
    },
  ],
}

export const commitments: PageData = {
  name: "Our commitments",
  metaTitle: "Our commitments: quality, safety, environment",
  metaDescription:
    "Quality, site safety, environment, local employment: the commitments of Oloum Group and its companies in Cameroon.",
  hero: {
    eyebrow: "Commitments",
    title: "Building well *is also a responsibility*.",
    text: "Quality, safety, environment and local employment: four commitments shared by every company in the group.",
    image: "technicians",
    imageAlt: "Technicians wearing protective equipment on a building site",
    entity: "group",
  },
  blocks: [
    {
      type: "intro",
      text: "A prefabricated building is, by nature, leaner than conventional construction: less waste, less concrete, reusable modules. We want to go further, on every site and in every company.",
    },
    {
      type: "cards",
      eyebrow: "Our four commitments",
      title: "The standards *we set ourselves*.",
      columns: 2,
      items: [
        { icon: "check", tag: "Quality", title: "Checks at every stage", text: "Plans approved before manufacturing, workshop inspection, joint acceptance on site and a 10-year structural warranty on buildings sold." },
        { icon: "hardhat", tag: "Safety", title: "Zero accidents as the goal", text: "Mandatory protective equipment, a daily safety briefing on site, planned lifting operations and up-to-date certifications for all our technicians." },
        { icon: "spark", tag: "Environment", title: "Building more sustainably", text: "Modules reused up to 5 times in rental, recycled shipping containers, site waste sorting and solar options on all our buildings." },
        { icon: "users", tag: "Local employment", title: "Training in Cameroon", text: "More than 9 in 10 employees recruited locally, a workshop apprenticeship programme and partnerships with Douala's technical schools." },
      ],
    },
    {
      type: "stats",
      tone: "red",
      items: [
        { value: "10", label: "Years of structural warranty" },
        { value: "5", label: "Average reuses of a rented module" },
        { value: "92%", label: "Of employees recruited locally" },
        { value: "100%", label: "Of technicians trained in safety" },
      ],
    },
    {
      type: "steps",
      eyebrow: "On every site",
      title: "Our *quality and safety* approach.",
      steps: [
        { title: "Risk assessment", text: "Before every job: access, lifting, working at height, electrical work, co-activity." },
        { title: "Daily briefing", text: "Every morning, the team reviews the day's tasks and the associated risks." },
        { title: "Quality control", text: "A checklist for each building type, signed off by the site manager." },
        { title: "Handover and follow-up", text: "Handover with the client, clearing of snags and after-delivery follow-up." },
      ],
    },
  ],
}

export const sectors: PageData = {
  name: "Sectors",
  metaTitle: "Sectors: the clients we equip",
  metaDescription:
    "Construction, mining, oil and gas, public administration, education, healthcare, NGOs, industry, events: Oloum Group prefabricated buildings for every sector.",
  hero: {
    eyebrow: "Sectors",
    title: "A building suited *to every sector*.",
    text: "From site camps for major projects to classrooms delivered during the holidays: we understand the constraints of your business.",
    image: "modularComplex",
    imageAlt: "Modular complex installed for a client",
    entity: "group",
  },
  blocks: [
    {
      type: "cards",
      eyebrow: "Our sectors",
      title: "What we do *for you*.",
      columns: 3,
      items: [
        { icon: "hardhat", title: "Construction and civil engineering", text: "Site camps, site offices, sanitary units, stores and workshops, to buy or to rent for the duration of the contract.", meta: "Bella Location · Yves Oloume SARL", href: routes.catalogue },
        { icon: "factory", title: "Mining, oil and gas", text: "Complete camps in remote areas: accommodation, canteen, sick bay, offices, solar power.", meta: "Yves Oloume SARL", href: routes.prefab },
        { icon: "building", title: "Public administration and local authorities", text: "Offices, service counters, civil registry centres, rapid extensions to public buildings.", meta: "Yves Oloume SARL", href: routes.prefab },
        { icon: "home", title: "Education", text: "Classrooms, administration blocks, boarding facilities and sanitary units, delivered during the school holidays.", meta: "Yves Oloume SARL", href: routes.prefab },
        { icon: "shield", title: "Healthcare", text: "Health centres, consulting rooms, isolation units and staff housing.", meta: "Yves Oloume SARL · Bella Location", href: routes.prefab },
        { icon: "globe", title: "NGOs and humanitarian", text: "Offices, warehouses and accommodation deployed quickly, rented with a purchase option.", meta: "Bella Location", href: routes.plans },
        { icon: "box", title: "Industry and distribution", text: "Steel warehouses, 15 racking solutions, strapping and storage containers.", meta: "Construction & Logistics", href: routes.logistics },
        { icon: "spark", title: "Events", text: "Sanitary units, dressing rooms, kiosks and reception offices rented for a few days.", meta: "Bella Location", href: routes.catalogue },
        { icon: "users", title: "Private clients", text: "Prefabricated houses, container studios, extensions and renovation.", meta: "Yves Oloume SARL", href: routes.prefab },
      ],
    },
    { type: "projects", limit: 3 },
  ],
}

export const careers: PageData = {
  name: "Careers",
  metaTitle: "Careers: join Oloum Group",
  metaDescription:
    "Technicians, site managers, sales staff, logistics specialists: join Oloum Group, Yves Oloume SARL and Bella Location in Douala and across Cameroon.",
  hero: {
    eyebrow: "Careers",
    title: "Build *with us*.",
    text: "We are looking for hands-on women and men who take pride in delivering buildings that serve. Training, career growth and team spirit guaranteed.",
    image: "technicians",
    imageAlt: "The group's technicians at work",
    entity: "group",
    ctas: [{ label: "Speculative application", href: routes.contact }],
  },
  blocks: [
    {
      type: "cards",
      eyebrow: "Why join us",
      title: "What *we offer*.",
      columns: 4,
      items: [
        { icon: "tools", title: "Tangible work", text: "Buildings you watch rise from the ground, used every day by thousands of people." },
        { icon: "users", title: "Training", text: "An onboarding programme, safety and technical training, and workshop apprenticeships." },
        { icon: "layers", title: "Career growth", text: "Three companies, dozens of trades: many possible career paths within the group." },
        { icon: "shield", title: "Safety", text: "Equipment provided, clear procedures and a culture that puts safety before deadlines." },
      ],
    },
    {
      type: "jobs",
      eyebrow: "Current vacancies",
      title: "Our *open positions*.",
      apply: "Apply",
      spontaneous: { label: "Send a speculative application", href: routes.contact },
      items: [
        { title: "Modular site manager", entity: "prefab", place: "Douala", contract: "Permanent", text: "You will lead a team of 6 to 12 technicians installing prefabricated buildings across Cameroon." },
        { title: "Racking installation technician", entity: "logistics", place: "Douala", contract: "Permanent", text: "You will install and inspect industrial racking at client sites, in line with safety standards." },
        { title: "B2B rental sales executive", entity: "bella", place: "Douala / Yaoundé", contract: "Permanent", text: "You will grow Bella Location's portfolio among construction companies, NGOs and event organisers." },
        { title: "Welder-fabricator", entity: "prefab", place: "Douala, workshop", contract: "12-month fixed-term", text: "You will assemble the modules' steel structures in the workshop, working from drawings." },
        { title: "Industrial methods engineer", entity: "usine", place: "Douala", contract: "Permanent", text: "You will help design the production lines of the group's future factory." },
        { title: "Logistics and fleet assistant", entity: "bella", place: "Douala", contract: "6-month internship", text: "You will track movements in and out of the rental fleet, inspections and delivery scheduling." },
      ],
    },
    {
      type: "steps",
      eyebrow: "Recruitment",
      title: "How *we recruit*.",
      steps: [
        { title: "Application", text: "Send your CV via the contact form or WhatsApp." },
        { title: "First conversation", text: "A 20-minute call with human resources." },
        { title: "Technical interview", text: "A meeting with your future manager, often on a site or in the workshop." },
        { title: "Onboarding", text: "A welcome week: safety, the group's companies, tools and team." },
      ],
    },
  ],
}
