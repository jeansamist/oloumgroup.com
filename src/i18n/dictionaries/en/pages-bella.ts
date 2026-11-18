import { routes } from "@/lib/routes"
import type { PageData } from "../../types"

export const bella: PageData = {
  name: "Bella Location",
  metaTitle: "Bella Location: prefabricated building rental in Cameroon",
  metaDescription:
    "Bella Location, an Oloum Group company, rents prefabricated buildings for your building sites, events and temporary needs: transport, installation and maintenance included.",
  hero: {
    eyebrow: "Group company",
    badge: "Rents",
    title: "A building, *for as long as you need*.",
    text: "Bella Location specialises in renting prefabricated buildings. You get the space you need, without buying it.",
    image: "modularUnits",
    imageAlt: "Prefabricated modules available to rent",
    entity: "bella",
    ctas: [
      { label: "View the catalogue", href: routes.catalogue },
      { label: "Our plans", href: routes.plans, variant: "light" },
    ],
  },
  blocks: [
    {
      type: "intro",
      eyebrow: "Why Bella Location",
      text: "A six-month building project, a weekend festival, a growing team waiting for new premises, a humanitarian emergency: some needs don't last. Bella Location rents you the right building, delivered, installed and maintained, for as long as necessary.",
    },
    {
      type: "cards",
      eyebrow: "The benefits",
      title: "Renting *is simpler*.",
      columns: 4,
      items: [
        { icon: "key", title: "No heavy investment", text: "A predictable monthly rent instead of a purchase: your cash stays available for your core business." },
        { icon: "calendar", title: "A tailored duration", text: "From 1 week to 36 months and beyond, with extensions possible at any time." },
        { icon: "truck", title: "All inclusive", text: "Transport, installation, connections, maintenance and dismantling at the end of the contract." },
        { icon: "check", title: "Purchase option", text: "Changed your mind? Part of the rent paid is deducted from the purchase price." },
      ],
    },
    {
      type: "stats",
      tone: "red",
      items: [
        { value: "350+", label: "Modules in the rental fleet" },
        { value: "72h", label: "Delivery time in Douala" },
        { value: "1", label: "Week minimum rental" },
        { value: "95%", label: "Of clients who renew" },
      ],
    },
    {
      type: "cards",
      eyebrow: "To rent",
      title: "What you *can rent*.",
      lead: "An overview of the fleet. The full catalogue details dimensions, equipment and uses.",
      columns: 3,
      items: [
        { icon: "building", title: "Site offices", text: "From a single office to a 20-seat meeting room.", image: "officeWing", href: routes.catalogue },
        { icon: "users", title: "Site camps", text: "Dormitories, dining halls, sick bays and sanitary units for your teams.", image: "site", href: routes.catalogue },
        { icon: "shield", title: "Sanitary units", text: "Sanitary blocks, showers and self-contained toilets.", image: "toilets", href: routes.catalogue },
        { icon: "container", title: "Storage", text: "Secure storage containers and modules.", image: "containerOffice", href: routes.catalogue },
        { icon: "box", title: "Canteens", text: "Equipped dining halls from 20 to 120 covers.", image: "interior", href: routes.catalogue },
        { icon: "spark", title: "Events", text: "Dressing rooms, kiosks, reception, ticket offices.", image: "modularWalkway", href: routes.catalogue },
      ],
    },
    {
      type: "chips",
      eyebrow: "Who for",
      title: "They rent *from us*.",
      items: [
        { icon: "hardhat", title: "Construction and mining sites", text: "For the duration of the contract" },
        { icon: "spark", title: "Events", text: "From 1 day to a few weeks" },
        { icon: "building", title: "Growing businesses", text: "While waiting for new premises" },
        { icon: "globe", title: "NGOs and public projects", text: "Rapid deployments" },
      ],
    },
    {
      type: "steps",
      eyebrow: "How it works",
      title: "Renting *in 4 steps*.",
      steps: [
        { title: "You describe your need", text: "Type of building, number of modules, location and duration." },
        { title: "We check availability", text: "And send you a firm offer within 24 working hours." },
        { title: "We deliver and install", text: "Within 72 hours in Douala, within 7 days in the rest of the country." },
        { title: "We collect the building", text: "At the end of the contract: dismantling, return transport and check-out inspection." },
      ],
    },
    {
      type: "faq",
      eyebrow: "FAQ",
      title: "Questions about *renting*.",
      items: [
        ["What is the minimum rental period?", "One week for sanitary units and events, one month for offices and site camps."],
        ["Is maintenance included?", "Yes, for the entire rental period: call-outs within 48 hours if there is a problem."],
        ["Is a deposit required?", "Yes, a security deposit equal to one month's rent, refunded at the end of the contract after the check-out inspection."],
        ["Do you deliver across Cameroon?", "Yes. Transport is calculated according to the distance from our Douala yard."],
        ["Does Bella Location rent other equipment?", "The fleet currently comprises prefabricated buildings and containers. Racking and plant are under consideration."],
      ],
    },
    {
      type: "sister",
      eyebrow: "Long-term need?",
      title: "Buy instead *from Yves Oloume SARL*.",
      text: "For use beyond two years, buying often becomes the better option. Same quality, same team, custom-designed.",
      cta: { label: "Discover Yves Oloume SARL", href: routes.yo },
      image: "officeBuilding",
      entity: "yo",
    },
  ],
}

export const catalogue: PageData = {
  name: "Rental catalogue",
  parent: routes.bella,
  metaTitle: "Rental catalogue: offices, site camps, sanitary units | Bella Location",
  metaDescription:
    "Site offices, dormitories, dining halls, sanitary blocks, storage containers, guard huts: the Bella Location rental catalogue.",
  hero: {
    eyebrow: "Bella Location",
    badge: "Rents",
    title: "The rental *catalogue*.",
    text: "Modules ready to go, serviced and inspected between every rental. Choose, combine, and we deliver.",
    image: "modularWalkway",
    imageAlt: "Rental modules lined up on a site",
    entity: "bella",
    ctas: [{ label: "Check availability", href: routes.quote }],
  },
  blocks: [
    {
      type: "table",
      eyebrow: "Available modules",
      title: "The fleet *at a glance*.",
      lead: "Indicative prices excluding transport, for a rental of 1 to 6 months.",
      head: ["Module", "Dimensions", "Capacity", "Equipment", "From"],
      rows: [
        ["Single office", "3 × 2.4 m", "1 to 2 desks", "A/C, electrics, desk", "95,000 FCFA / month"],
        ["Site office", "6 × 2.4 m", "3 to 4 desks", "A/C, electrics, network", "150,000 FCFA / month"],
        ["Meeting room", "12 × 2.4 m", "12 to 20 seats", "A/C, table, screen", "260,000 FCFA / month"],
        ["Dormitory", "6 × 2.4 m", "4 beds", "A/C, beds, wardrobes", "160,000 FCFA / month"],
        ["Dining hall", "12 × 2.4 m", "40 covers", "Tables, benches, sink", "280,000 FCFA / month"],
        ["Sanitary block", "6 × 2.4 m", "4 WCs + 4 showers", "Water heater, washbasins", "190,000 FCFA / month"],
        ["Self-contained toilet", "1.2 × 1.2 m", "1 cabin", "Weekly emptying", "35,000 FCFA / week"],
        ["Storage container", "20 feet", "≈ 33 m³", "Ventilation, padlock", "70,000 FCFA / month"],
        ["Guard hut", "2.4 × 2.4 m", "1 to 2 guards", "A/C, service window", "80,000 FCFA / month"],
      ],
      note: "Demo prices, to be confirmed. Sliding-scale discounts beyond 6 months and 10 modules.",
    },
    {
      type: "cards",
      eyebrow: "Packages",
      title: "Sets *ready to go*.",
      columns: 3,
      items: [
        { icon: "hardhat", tag: "Site package", title: "Site for 20 people", text: "2 site offices, 1 dining hall, 1 sanitary block, 1 storage container.", image: "site" },
        { icon: "users", tag: "Camp package", title: "Site camp for 50 people", text: "13 dormitories, 2 dining halls, 3 sanitary blocks, 1 sick bay, 2 offices.", image: "modularComplex" },
        { icon: "spark", tag: "Event package", title: "Event for 2,000 people", text: "20 self-contained toilets, 2 sanitary blocks, 2 dressing rooms, 1 reception point.", image: "toilets" },
      ],
    },
    {
      type: "split",
      eyebrow: "Fleet quality",
      title: "Every module *inspected* between rentals.",
      text: [
        "Each time a module comes back, our teams clean, inspect and repair it: structure, weatherproofing, electrics, air conditioning, sanitary fittings.",
        "A module only goes back out once the inspection checklist has been signed off by the fleet manager.",
      ],
      bullets: ["Cleaning and disinfection", "Electrical inspection", "Air-conditioning service", "Weatherproofing check"],
      image: "officeCorridor",
      imageAlt: "Interior of an inspected module",
      cta: { label: "View the plans", href: routes.plans },
    },
  ],
}

export const plans: PageData = {
  name: "Plans and terms",
  parent: routes.bella,
  metaTitle: "Rental plans: short term, site, long term | Bella Location",
  metaDescription:
    "Short-term rental, site rental or long-term rental with a purchase option: Bella Location's rental plans and terms.",
  hero: {
    eyebrow: "Bella Location",
    badge: "Rents",
    title: "Three plans, *one promise*.",
    text: "Whatever the duration, the building is delivered, installed and maintained by our teams.",
    image: "modularComplex",
    imageAlt: "Modular complex on rental",
    entity: "bella",
    ctas: [{ label: "Request an offer", href: routes.quote }],
  },
  blocks: [
    {
      type: "cards",
      eyebrow: "Our plans",
      title: "Choose *your duration*.",
      columns: 3,
      items: [
        { icon: "spark", tag: "Short term", title: "1 day to 1 month", text: "Events, inaugurations, emergencies. Express installation and removal, cleaning included for sanitary units.", meta: "Payment on order" },
        { icon: "hardhat", tag: "Site", title: "1 to 12 months", text: "The plan for construction and mining sites. Monthly maintenance, modules added or removed during the contract.", meta: "Monthly invoicing" },
        { icon: "key", tag: "Long term", title: "12 months and beyond", text: "Office extensions, NGO projects, public bodies. Sliding-scale pricing and a purchase option at the end of the contract.", meta: "Purchase option included" },
      ],
    },
    {
      type: "table",
      eyebrow: "Comparison",
      title: "What is *included*.",
      head: ["", "Short term", "Site", "Long term"],
      rows: [
        ["Delivery and return transport", "Included in Douala", "On quotation", "On quotation"],
        ["Installation and dismantling", "✓", "✓", "✓"],
        ["Maintenance", "—", "Monthly", "Quarterly"],
        ["Breakdown call-out", "Within 24 h", "Within 48 h", "Within 48 h"],
        ["Adding modules during the contract", "—", "✓", "✓"],
        ["Building insurance", "Optional", "Optional", "Included"],
        ["Purchase option", "—", "—", "✓"],
      ],
    },
    {
      type: "cards",
      eyebrow: "Terms",
      title: "The terms, *simply put*.",
      columns: 2,
      items: [
        { icon: "ruler", title: "Security deposit", text: "One month's rent, refunded after the check-out inspection." },
        { icon: "calendar", title: "Extension", text: "Possible at any time, with 15 days' notice." },
        { icon: "map", title: "Ground", text: "Level, accessible to trucks and, where possible, connectable to electricity and water." },
        { icon: "shield", title: "Liability", text: "The tenant is responsible for the building during the rental; insurance can be included." },
      ],
    },
  ],
}

export const usine: PageData = {
  name: "The Factory",
  metaTitle: "The Factory: Oloum Group's production project",
  metaDescription:
    "The Factory is Oloum Group's project for the future: manufacturing sandwich panels, prefabricated modules and racking in Cameroon for Yves Oloume SARL and Bella Location.",
  hero: {
    eyebrow: "Future project",
    badge: "Coming soon",
    title: "The next step: *produce*.",
    text: "The Factory is the group's project for the future. It will complete the whole by producing our panels, our modules and our racking.",
    image: "steel",
    imageAlt: "Steel structures being prepared",
    entity: "usine",
    ctas: [{ label: "Get notified of the launch", href: routes.contact }],
  },
  blocks: [
    {
      type: "intro",
      text: "Today, the group builds, sells and rents. Tomorrow, it will produce. The Factory is the link that will close the loop, from manufacturing through to installation on your site, making the group one of the few players to master the entire prefabricated building chain in Central Africa.",
    },
    {
      type: "cards",
      eyebrow: "What it will produce",
      title: "Three *production* lines.",
      columns: 3,
      items: [
        { icon: "layers", tag: "Line 1", title: "Sandwich panels", text: "Insulated wall and roof panels, suited to a hot, humid climate." },
        { icon: "box", tag: "Line 2", title: "Prefabricated modules", text: "Steel chassis and complete modules for Yves Oloume SARL and Bella Location." },
        { icon: "shelves", tag: "Line 3", title: "Racking", text: "Part of the Construction & Logistics division's racking range." },
      ],
    },
    {
      type: "cards",
      eyebrow: "What it will change",
      title: "Why *produce ourselves*.",
      columns: 4,
      items: [
        { icon: "check", title: "Controlled quality", text: "Every panel and every module inspected in our own workshops." },
        { icon: "clock", title: "Shorter lead times", text: "Fewer imports, less waiting at the port, stock on hand." },
        { icon: "users", title: "Local jobs", text: "Around 80 direct jobs created over time, plus qualifying training." },
        { icon: "globe", title: "Regional reach", text: "Supplying Cameroon and, in time, the whole of Central Africa." },
      ],
    },
    {
      type: "timeline",
      eyebrow: "Roadmap",
      title: "The project *milestones*.",
      items: [
        { year: "2026", title: "Studies and financing", text: "Market study, choice of technologies and financial structuring." },
        { year: "2027", title: "Site and construction", text: "Acquisition of land in an industrial zone and construction of the building." },
        { year: "2028", title: "Commissioning", text: "Installation of the lines, team training and first production runs." },
        { year: "2030", title: "Full capacity", text: "Target: 300 modules and 40,000 m² of panels per year." },
      ],
    },
    {
      type: "teaser",
      eyebrow: "The project in figures",
      title: "A factory *built to last*.",
      text: "Projected figures, which may change as studies progress.",
      cta: { label: "Stay informed", href: routes.contact },
      facts: [
        ["Planned floor area", "8,000 m²"],
        ["Target capacity", "300 modules / year"],
        ["Direct jobs", "≈ 80"],
      ],
    },
  ],
}
