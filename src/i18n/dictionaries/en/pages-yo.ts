import { routes } from "@/lib/routes"
import type { PageData } from "../../types"

export const yo: PageData = {
  name: "Yves Oloume SARL",
  metaTitle: "Yves Oloume SARL: construction and sale of prefabricated buildings",
  metaDescription:
    "Yves Oloume SARL, an Oloum Group company: prefabricated buildings, construction works, renovation, 15 racking solutions and converted containers in Douala since 2010.",
  hero: {
    eyebrow: "Group company",
    badge: "Builds and sells",
    title: "Yves Oloume SARL, *build and sell*.",
    text: "Since 2010, the group's founding company has designed, built and sold prefabricated buildings, and delivered your construction and logistics projects.",
    image: "craneInstallation",
    imageAlt: "Yves Oloume SARL module being lifted into place by crane",
    entity: "yo",
    ctas: [
      { label: "Request a quote", href: routes.quote },
      { label: "View our projects", href: routes.projects, variant: "light" },
    ],
  },
  blocks: [
    {
      type: "intro",
      eyebrow: "Two divisions, one company",
      text: "Yves Oloume SARL operates through two divisions, like two companies within a company. The first develops prefabricated buildings. The second builds, renovates and organises your storage spaces. Together, they cover construction works, building and logistics.",
      sub: "Business model: sales and services. Prefer to rent? Bella Location, our sister company, offers the same buildings for rent.",
    },
    {
      type: "cards",
      eyebrow: "The two divisions",
      title: "Choose *your division*.",
      columns: 2,
      items: [
        { icon: "building", tag: "Division 1", title: "Prefabricated buildings", text: "Offices, homes, sanitary units, camps, canteens, bungalows, warehouses and storage modules, delivered empty or fully equipped.", image: "officeBuilding", href: routes.prefab },
        { icon: "hardhat", tag: "Division 2", title: "Construction & Logistics", text: "Construction works, building renovation, 15 racking solutions, strapping and shipping container conversions.", image: "warehouse", href: routes.logistics },
      ],
    },
    {
      type: "stats",
      tone: "red",
      items: [
        { value: "2010", label: "Year founded" },
        { value: "8", label: "Types of buildings and modules" },
        { value: "15", label: "Racking solutions" },
        { value: "48h", label: "To receive your quote" },
      ],
    },
    {
      type: "split",
      eyebrow: "Our expertise",
      title: "From design *to installation*.",
      text: [
        "Our teams manage your project from A to Z: advice, design, drawings, manufacturing, transport, assembly and after-sales service.",
        "Our Douala workshop prepares the modules while your site is being prepared. The result: an operational building in a few weeks.",
      ],
      bullets: ["In-house design office", "Manufacturing and assembly workshop", "Truck fleet and lifting crane", "After-sales service and maintenance contracts"],
      image: "moduleAssembly",
      imageAlt: "Module assembly in the Yves Oloume SARL workshop",
    },
    {
      type: "cards",
      eyebrow: "The full offer",
      title: "What we *deliver*.",
      columns: 3,
      items: [
        { icon: "building", title: "Prefabricated buildings", text: "8 families of buildings and modules, custom-designed.", href: routes.prefab },
        { icon: "hardhat", title: "Construction and renovation", text: "Conventional construction works and refurbishment of existing buildings.", href: routes.btp },
        { icon: "shelves", title: "Shelving & racking", text: "15 solutions to equip warehouses, offices, shops and cold rooms.", href: routes.shelving },
        { icon: "container", title: "Converted containers", text: "Offices, shops, homes and plant rooms in shipping containers.", href: routes.containers },
        { icon: "box", title: "Strapping", text: "Securing your loads and parcels for storage and transport.", href: routes.logistics },
        { icon: "tools", title: "Maintenance", text: "Annual maintenance contracts for your buildings and racking.", href: routes.logistics },
      ],
    },
    {
      type: "sister",
      eyebrow: "Temporary need?",
      title: "These buildings are also available *to rent*.",
      text: "For a building site, an event or a temporary extension, Bella Location rents you the same building, with transport and maintenance included.",
      cta: { label: "Discover Bella Location", href: routes.bella },
      image: "modularUnits",
      entity: "bella",
    },
  ],
}

export const prefab: PageData = {
  name: "Prefabricated buildings",
  parent: routes.yo,
  metaTitle: "Prefabricated buildings in Cameroon | Yves Oloume SARL",
  metaDescription:
    "Prefabricated offices, housing, sanitary units, camps, canteens, bungalows, warehouses and storage modules, delivered empty or equipped across Cameroon.",
  hero: {
    eyebrow: "Yves Oloume SARL · Division 1",
    badge: "Builds and sells",
    title: "Prefabricated buildings *for every use*.",
    text: "Design and development of prefabricated buildings and modules, delivered empty or fully equipped, in all ten regions of Cameroon.",
    image: "officeBuilding",
    imageAlt: "Two-storey prefabricated office building",
    entity: "prefab",
    ctas: [{ label: "Request a quote", href: routes.quote }],
  },
  blocks: [
    {
      type: "intro",
      text: "A prefabricated building is manufactured as modules in our workshop, then assembled on your site. Construction is shorter, the budget better controlled, and the building can be extended, relocated or reused.",
    },
    {
      type: "cards",
      eyebrow: "The range",
      title: "Eight families *of buildings*.",
      lead: "Each building is designed around your use, your site and your budget.",
      columns: 4,
      items: [
        { icon: "building", title: "Offices", text: "Ready-to-use workspaces, air-conditioned and cabled, from 15 to more than 2,000 m².", image: "officeWing" },
        { icon: "home", title: "Homes and housing", text: "Comfortable, durable houses and homes with 1 to 5 rooms.", image: "prefabBuilding" },
        { icon: "shield", title: "Sanitary units", text: "Sanitary blocks, showers and toilets for building sites, schools and events.", image: "toilets" },
        { icon: "users", title: "Camps", text: "Complete site camps for 10 to 500 people, on the most remote sites.", image: "site" },
        { icon: "box", title: "Canteens", text: "Equipped dining halls and kitchens, from 20 to 300 covers.", image: "interior" },
        { icon: "home", title: "Bungalows", text: "Stand-alone units for accommodation, reception or leisure.", image: "modularUnits" },
        { icon: "factory", title: "Warehouses", text: "Steel structures of any size, with loading docks and racking.", image: "warehouse" },
        { icon: "container", title: "Storage modules", text: "Compact, secure modules for storing equipment and goods.", image: "containerOffice" },
      ],
    },
    {
      type: "toggle",
      eyebrow: "Empty or equipped",
      title: "Delivered *the way you want*.",
      lead: "Depending on your choice, modules are delivered empty or fully equipped.",
      options: [
        {
          key: "empty",
          label: "Delivered empty",
          title: "The structure, ready to fit out",
          text: "You receive a weathertight, insulated building ready for connection, which you fit out your own way with your own teams or suppliers.",
          points: ["Galvanised steel structure", "Insulated sandwich panels", "Doors and windows fitted", "Electrical conduits in place"],
          image: "prefabBuilding",
        },
        {
          key: "equipped",
          label: "Fully equipped",
          title: "Ready to use on delivery",
          text: "Electrics, air conditioning, plumbing, floor and wall finishes, suspended ceiling, furniture: you move in and work, sleep or serve the very same day.",
          points: ["Electrics, LED lighting, sockets and network", "Air conditioning and ventilation", "Plumbing and sanitary fittings", "Furniture and shelving on request", "Solar panel option"],
          image: "officeOpenSpace",
        },
      ],
    },
    {
      type: "specs",
      eyebrow: "Technical data",
      title: "Designed for *Cameroon's climate*.",
      lead: "The specifications of our standard modules. Every project is the subject of a dedicated study.",
      image: "officeCorridor",
      imageAlt: "Interior corridor of a modular building",
      items: [
        ["Structure", "Hot-dip galvanised steel, bolted assembly"],
        ["Walls", "50 to 100 mm sandwich panels, rock wool or PU insulation"],
        ["Roof", "Insulated steel deck, pitched for heavy rain, sun-shading overhangs"],
        ["Floor", "Treated timber floor or slab, PVC or tile finish"],
        ["Dimensions", "3 × 6 m and 3 × 12 m modules, endlessly combinable"],
        ["Storeys", "Up to ground + 2, external stairs and walkways"],
        ["Lead time", "4 to 12 weeks depending on project size"],
        ["Warranty", "10 years on the structure, 2 years on equipment"],
      ],
    },
    {
      type: "steps",
      eyebrow: "Our method",
      title: "Your building *in 5 steps*.",
      steps: [
        { title: "You describe your need", text: "By phone, WhatsApp or form: use, floor area, site, timeframe." },
        { title: "We design and price it", text: "Drawings, lead time and detailed price within 48 working hours for a standard project." },
        { title: "We manufacture your modules", text: "In the workshop, while your site is being prepared." },
        { title: "We deliver and install", text: "Transport, lifting, assembly and connections by our teams." },
        { title: "We stay by your side", text: "Handover, warranty, maintenance and future extensions." },
      ],
    },
    {
      type: "faq",
      eyebrow: "FAQ",
      title: "Your questions about *prefab*.",
      items: [
        ["Is a prefabricated building sturdy?", "Yes. Our galvanised steel structures are designed to last more than 25 years and withstand wind, heat and heavy rain."],
        ["Do I need a building permit?", "It depends on the use, the floor area and how long the building will stay in place. We help you with the formalities at the local council."],
        ["Can the building be extended later?", "Yes, that is one of the great advantages of modular construction: you add modules as your needs grow."],
        ["What is the price per m²?", "It depends on the finish and equipment. As a guide, allow between 180,000 and 350,000 FCFA/m² for an equipped building."],
      ],
    },
    {
      type: "sister",
      eyebrow: "Temporary need?",
      title: "Rent instead *from Bella Location*.",
      text: "Site offices, site camps, sanitary units and storage available to rent, from one week to several years.",
      cta: { label: "View the rental catalogue", href: routes.catalogue },
      image: "modularWalkway",
      entity: "bella",
    },
  ],
}

export const logistics: PageData = {
  name: "Construction & Logistics",
  parent: routes.yo,
  metaTitle: "Construction & Logistics: construction, racking and services | Yves Oloume SARL",
  metaDescription:
    "Construction works, building renovation, 15 racking solutions, strapping and shipping container conversions in Douala and across Cameroon.",
  hero: {
    eyebrow: "Yves Oloume SARL · Division 2",
    badge: "Builds and sells",
    title: "Build, renovate, *store*.",
    text: "The Construction & Logistics division brings together our construction projects, our racking solutions and our logistics services, to build and organise your spaces.",
    image: "warehouse",
    imageAlt: "Warehouse fitted with racking",
    entity: "logistics",
    ctas: [{ label: "Request a quote", href: routes.quote }],
  },
  blocks: [
    {
      type: "intro",
      text: "A building has to be well built, then well used. This division takes care of both: construction and renovation on one side, organising your storage spaces and flows on the other.",
    },
    {
      type: "cards",
      eyebrow: "Our three businesses",
      title: "One division, *three businesses*.",
      columns: 3,
      items: [
        { icon: "hardhat", tag: "Construction", title: "Construction and renovation", text: "Conventional construction works, from structural work to finishes, and renovation of existing buildings.", image: "worker", href: routes.btp },
        { icon: "shelves", tag: "Storage", title: "15 racking solutions", text: "To equip every part of a business: offices, archives, shops, warehouses, cold rooms.", image: "warehouse", href: routes.shelving },
        { icon: "container", tag: "Services", title: "Strapping and containers", text: "Load strapping, shipping container conversions, racking installation and maintenance.", image: "containerOffice", href: routes.containers },
      ],
    },
    {
      type: "index",
      eyebrow: "Services",
      title: "Our logistics *services*.",
      items: [
        { title: "Strapping", text: "Securing your loads, pallets and parcels with steel or polyester strapping, in our workshop or on your site.", tags: ["Pallets", "Export", "Industry"] },
        { title: "Shipping container conversion", text: "Converting 20- and 40-foot shipping containers into offices, homes, shops or plant rooms.", tags: ["Offices", "Shops", "Housing"] },
        { title: "Racking installation", text: "Installed by our technicians, with load signs and an installation report.", tags: ["Safety", "Standards"] },
        { title: "Inspection and maintenance", text: "Annual inspection of your racking, replacement of damaged parts and upright protectors.", tags: ["Annual contract"] },
        { title: "Warehouse layout", text: "Flow analysis, aisle layout, goods-in and dispatch areas, signage.", tags: ["Study", "Drawings"] },
        { title: "Transport and lifting", text: "Delivery by our trucks and crane lifting for your modules, containers and structures.", tags: ["Trucks", "Crane"] },
      ],
      note: "Other services are available on request: contact us for any specific need.",
    },
    {
      type: "stats",
      tone: "ink",
      items: [
        { value: "15", label: "Racking solutions" },
        { value: "120+", label: "Warehouses equipped" },
        { value: "40", label: "Containers converted per year" },
        { value: "10", label: "Years of structural warranty" },
      ],
    },
    {
      type: "sister",
      eyebrow: "Building new?",
      title: "Discover our *prefabricated buildings*.",
      text: "Warehouses, offices and storage modules designed by the Prefabricated buildings division, delivered empty or equipped.",
      cta: { label: "View the prefab division", href: routes.prefab },
      image: "officeBuilding",
      entity: "prefab",
    },
  ],
}

export const btp: PageData = {
  name: "Construction and renovation",
  parent: routes.logistics,
  metaTitle: "Construction works and building renovation in Douala | Yves Oloume SARL",
  metaDescription:
    "Conventional construction, structural work, finishing work, extensions and building renovation in Douala and across Cameroon by Yves Oloume SARL.",
  hero: {
    eyebrow: "Construction & Logistics",
    badge: "Builds and sells",
    title: "Build and renovate, *in masonry too*.",
    text: "When prefab is not enough, our construction teams take over: conventional construction, extensions and renovation of existing buildings.",
    image: "worker",
    imageAlt: "Worker on a construction site",
    entity: "logistics",
    ctas: [{ label: "Request a quote", href: routes.quote }],
  },
  blocks: [
    {
      type: "intro",
      text: "Masonry or prefab? With us, you don't have to choose your contractor based on the technique. We advise you on the best solution, then we deliver it.",
    },
    {
      type: "cards",
      eyebrow: "Construction works",
      title: "From structural work *to finishes*.",
      columns: 3,
      items: [
        { icon: "ruler", title: "Studies and drawings", text: "Surveys, construction drawings, quantity take-offs and works schedule." },
        { icon: "hardhat", title: "Structural work", text: "Earthworks, foundations, masonry, reinforced concrete, roof framing." },
        { icon: "tools", title: "Finishing work", text: "Electrics, plumbing, joinery, tiling, painting, suspended ceilings." },
        { icon: "building", title: "Extensions", text: "Extending existing buildings, in masonry or modular construction." },
        { icon: "factory", title: "Industrial buildings", text: "Steel-framed halls, workshops and warehouses." },
        { icon: "home", title: "Fencing and external works", text: "Fencing, roads, utilities, car parks and landscaping." },
      ],
    },
    {
      type: "split",
      eyebrow: "Renovation",
      title: "Bringing *your buildings* back to life.",
      text: [
        "Façades, roofs, waterproofing, electrics, sanitary facilities: we refurbish your buildings, while occupied if necessary.",
        "We organise the works by zone so that your business keeps running throughout.",
      ],
      bullets: ["Free on-site assessment", "Electrical compliance upgrades", "Waterproofing and roofing", "Interior refit", "Works in occupied buildings"],
      image: "technicians",
      imageAlt: "Technicians renovating a building",
      reverse: true,
    },
    {
      type: "steps",
      eyebrow: "How it works",
      title: "A project *well run*.",
      steps: [
        { title: "Visit and assessment", text: "We come to see the site and understand your constraints." },
        { title: "Quote and schedule", text: "An item-by-item estimate and a written schedule." },
        { title: "Works", text: "A dedicated site manager and a weekly progress meeting with you." },
        { title: "Handover", text: "Final inspection, clearing of snags and warranties." },
      ],
    },
  ],
}

export const shelving: PageData = {
  name: "Shelving & racking",
  parent: routes.logistics,
  metaTitle: "Shelving & racking: 15 storage solutions | Yves Oloume SARL",
  metaDescription:
    "Heavy-duty, office, adjustable, mobile, food-grade, live storage, high-performance, cantilever… 15 shelving and racking solutions installed by Yves Oloume SARL.",
  hero: {
    eyebrow: "Construction & Logistics",
    badge: "Builds and sells",
    title: "15 racking solutions, *for every sector*.",
    text: "From the archives of an office to the pallets of a 10,000 m² warehouse: a complete range, designed, delivered and installed by our technicians.",
    image: "warehouse",
    imageAlt: "Warehouse fitted with pallet racking",
    entity: "logistics",
    ctas: [{ label: "Request a study", href: routes.quote }],
  },
  blocks: [
    {
      type: "index",
      eyebrow: "The range",
      title: "Our *15 solutions*.",
      lead: "Hover over a solution to see its uses.",
      image: "warehouse",
      items: [
        { title: "Heavy-duty shelving", text: "Sturdy, high-capacity shelving for heavy and bulky loads.", tags: ["Industry", "Workshops"] },
        { title: "Office shelving", text: "For binders, archives and supplies; discreet and modular.", tags: ["Offices", "Archives"] },
        { title: "Adjustable shelving", text: "Reconfigures as your needs change: adjustable shelves, easy extensions.", tags: ["Retail", "SMEs"] },
        { title: "Mobile shelving", text: "Mounted on rails, it eliminates unnecessary aisles and doubles storage capacity.", tags: ["Archives", "Libraries"] },
        { title: "Food-grade shelving", text: "Stainless steel or epoxy, meeting hygiene standards for kitchens and cold rooms.", tags: ["Catering", "Food processing"] },
        { title: "Light live storage", text: "Cartons slide by gravity: first in, first out.", tags: ["Order picking"] },
        { title: "Medium and heavy live storage", text: "The same principle for pallets, on rollers.", tags: ["Distribution", "Industry"] },
        { title: "High-performance racking", text: "For great heights and very heavy loads.", tags: ["Large warehouses"] },
        { title: "Adjustable cantilever racking", text: "For long products: tubes, profiles, timber, pipes.", tags: ["Building materials", "Hardware"] },
        { title: "Selective pallet racking", text: "The standard solution for pallets, with direct access to every location.", tags: ["Logistics"] },
        { title: "Drive-in racking", text: "Forklifts drive into the racking: maximum density for uniform products.", tags: ["Beverages", "Cold storage"] },
        { title: "Storage mezzanine", text: "Add a floor to your warehouse and double the usable area.", tags: ["Warehouses", "Workshops"] },
        { title: "Tyre racking", text: "Designed to store tyres flat or upright.", tags: ["Garages", "Distribution"] },
        { title: "Archive shelving", text: "Archive boxes, suspension files and registers, all easy to reach.", tags: ["Public administration", "Banks"] },
        { title: "Outdoor galvanised racking", text: "Resists humidity and bad weather for open-air storage.", tags: ["Ports", "Building sites"] },
      ],
      note: "Demo range: the exact list of the 15 product lines is to be confirmed with the supplier.",
    },
    {
      type: "steps",
      eyebrow: "Our support",
      title: "From study *to installation*.",
      steps: [
        { title: "Visit and survey", text: "Dimensions, clear height, floor, forklift access and flows." },
        { title: "Study and 2D layout", text: "Layout, number of locations, permissible loads." },
        { title: "Delivery and installation", text: "By our technicians, with load signs and protectors." },
        { title: "Annual inspection", text: "Inspection and maintenance to keep the installation safe." },
      ],
    },
    {
      type: "faq",
      eyebrow: "FAQ",
      title: "Questions about *shelving and racking*.",
      items: [
        ["Do you manufacture your racking?", "Today, our racking comes from selected partner manufacturers. Tomorrow, part of the range will be produced by the group's Factory."],
        ["Can you take over an existing installation?", "Yes. We inspect, repair and extend existing installations, whatever the brand."],
        ["How long does a complete warehouse take?", "Allow 3 to 6 weeks between layout approval and completion of installation, depending on size."],
      ],
    },
  ],
}

export const containers: PageData = {
  name: "Converted containers",
  parent: routes.logistics,
  metaTitle: "Shipping container conversions in Cameroon | Yves Oloume SARL",
  metaDescription:
    "Offices, shops, homes, sanitary units and plant rooms fitted out in 20- and 40-foot shipping containers by Yves Oloume SARL in Douala.",
  hero: {
    eyebrow: "Construction & Logistics",
    badge: "Builds and sells",
    title: "One container, *a thousand uses*.",
    text: "We convert shipping containers into offices, shops, homes and plant rooms: insulated, air-conditioned and ready to use.",
    image: "containerOffice",
    imageAlt: "Shipping container converted into an office",
    entity: "logistics",
    ctas: [{ label: "Request a quote", href: routes.quote }],
  },
  blocks: [
    {
      type: "intro",
      text: "Sturdy, transportable, secure: the shipping container is an ideal starting point. Our workshops cut, insulate and equip it, then deliver it ready to use, in 20 or 40 feet, on its own or combined with others.",
    },
    {
      type: "cards",
      eyebrow: "Uses",
      title: "What we *make of them*.",
      columns: 3,
      items: [
        { icon: "building", title: "Offices and counters", text: "Mobile branches, site offices, secure points of sale.", image: "containerOffice" },
        { icon: "home", title: "Homes and studios", text: "Furnished studios, staff rooms, multi-container houses.", image: "containerInterior" },
        { icon: "box", title: "Shops and kiosks", text: "Shops, cafés, pick-up points, with opening fronts." },
        { icon: "shield", title: "Sanitary units", text: "Self-contained or connected shower and toilet blocks." },
        { icon: "factory", title: "Plant rooms", text: "Electrical rooms, generator housings, mobile workshops." },
        { icon: "container", title: "Secure storage", text: "Ventilated, shelved and lockable storage containers." },
      ],
    },
    {
      type: "table",
      eyebrow: "Sizes",
      title: "20 or 40 feet, *your call*.",
      head: ["", "20-foot container", "40-foot container"],
      rows: [
        ["Internal floor area", "≈ 13 m²", "≈ 28 m²"],
        ["Typical uses", "Office, studio, shop, sanitary units", "Open-plan office, housing, meeting room"],
        ["Conversion lead time", "3 to 4 weeks", "4 to 6 weeks"],
        ["Available to rent", "Yes, from Bella Location", "Yes, from Bella Location"],
      ],
      note: "Indicative values, to be confirmed for each project.",
    },
    {
      type: "steps",
      eyebrow: "Manufacturing",
      title: "From the ship's hold *to your site*.",
      steps: [
        { title: "Container selection", text: "Inspected shipping containers, free from structural corrosion." },
        { title: "Cutting and reinforcement", text: "Openings for doors and windows, welded reinforcements." },
        { title: "Insulation and fit-out", text: "Insulation, electrics, air conditioning, finishes." },
        { title: "Delivery and placement", text: "Transport by crane truck and positioning on your site." },
      ],
    },
  ],
}
