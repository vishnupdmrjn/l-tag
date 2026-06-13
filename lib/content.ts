/** Centralised site content so sections stay declarative and easy to edit. */

export const nav = [
  { label: "About", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Showroom", href: "#showroom" },
  { label: "Why L-TAG", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const aboutPillars = [
  {
    title: "Global Sourcing",
    body: "Direct relationships with vetted manufacturers across key textile regions, giving you access to the right product at the right scale.",
  },
  {
    title: "Quality Assurance",
    body: "Every shipment passes structured inspection and compliance checks before it reaches your floor — consistency you can build a brand on.",
  },
  {
    title: "Competitive Pricing",
    body: "Wholesale economics without the markup chain. We negotiate at volume so your margins stay healthy season after season.",
  },
  {
    title: "Reliable Imports",
    body: "End-to-end import handling — documentation, freight, and customs — managed by a team that does this every single day.",
  },
  {
    title: "Retail Partnerships",
    body: "We work as an extension of your buying team, building long-term supply relationships rather than one-off transactions.",
  },
];

export const collections = [
  {
    title: "Women's Fashion",
    description: "Contemporary ready-to-wear, curated for modern retail floors.",
    image: "/img/womens-fashion.jpg",
  },
  {
    title: "Men's Fashion",
    description: "Refined essentials and statement pieces with enduring appeal.",
    image: "/img/mens-fashion.jpg",
  },
  {
    title: "Kids Fashion",
    description: "Playful, durable styling built for fast-moving family retail.",
    image: "/img/kids-fashion.jpg",
  },
];

export const whyFeatures = [
  {
    title: "International Sourcing",
    body: "A global supplier network across multiple textile hubs, sourced and vetted in person.",
  },
  {
    title: "Quality Control",
    body: "Multi-stage inspection on fabric, construction, and finishing before dispatch.",
  },
  {
    title: "Competitive Pricing",
    body: "Volume-negotiated rates that protect your retail margins.",
  },
  {
    title: "Fast Logistics",
    body: "Optimised freight routes and customs handling for dependable lead times.",
  },
  {
    title: "Bulk Order Support",
    body: "Scalable MOQs and flexible production planning for growing accounts.",
  },
  {
    title: "Retail-Ready Collections",
    body: "Labelled, tagged, and packed to your specification — straight to the floor.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Inquiry",
    body: "Share your categories, volumes, and target markets to open the conversation.",
  },
  {
    step: "02",
    title: "Consultation",
    body: "We align on assortment, pricing tiers, timelines, and compliance requirements.",
  },
  {
    step: "03",
    title: "Product Selection",
    body: "Curate from current ranges or develop a tailored capsule with our sourcing team.",
  },
  {
    step: "04",
    title: "Order Confirmation",
    body: "Specifications, samples, and terms are locked with a transparent quotation.",
  },
  {
    step: "05",
    title: "Logistics",
    body: "Production, inspection, freight, and customs are managed end to end.",
  },
  {
    step: "06",
    title: "Delivery",
    body: "Retail-ready goods arrive on schedule, packed to your exact requirements.",
  },
];

export const showroom = {
  city: "Malappuram",
  region: "Kerala, India",
  // TODO: replace with the exact street address + PIN code.
  addressLines: ["L-TAG Showroom", "Malappuram, Kerala"],
  hours: "Mon–Sat · 10:00 AM – 8:00 PM",
  phoneDisplay: "+91 90610 40777",
  phoneHref: "tel:+919061040777",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=L-TAG+Showroom+Malappuram+Kerala",
  // Reasons to visit in person.
  highlights: [
    {
      title: "See the imported stock in person",
      body: "Browse our full range of imported apparel on the floor — feel the fabric, check the fit, and choose exactly what works for you.",
    },
    {
      title: "Curated, ready to take home",
      body: "Every piece is selected from our international sourcing — quality-checked and retail-ready, with new arrivals each season.",
    },
    {
      title: "Personal guidance",
      body: "Our team helps you pick across collections and sizes, whether you're shopping for yourself or buying for your store.",
    },
  ],
};

export const inauguration = {
  eyebrow: "You're Invited",
  title: "Grand Showroom Inauguration",
  // TODO: set the real date once confirmed.
  date: "Opening Soon",
  location: "Malappuram, Kerala",
  blurb:
    "Step into L-TAG's first showroom and explore our imported fashion collection in person.",
  ctaLabel: "Plan Your Visit",
  ctaHref: "#showroom",
  // Drop the poster image at this path (any aspect ratio) to replace the
  // designed placeholder; leave as null to keep the placeholder.
  poster: "/img/showroom-inauguration.png" as string | null,
};

export const businessTypes = [
  "Boutique / Independent Retailer",
  "Department Store",
  "Online Retailer / E-commerce",
  "Distributor / Wholesaler",
  "Fashion Brand / Label",
  "Other",
];

/**
 * WhatsApp number that receives lead-form enquiries, in wa.me format:
 * country code + number, digits only (no "+", spaces, or dashes).
 */
export const whatsappNumber = "919061040777";
