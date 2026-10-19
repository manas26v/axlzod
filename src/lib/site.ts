// Single source of truth for brand + contact details used across pages, metadata and JSON-LD.
// TODO: replace the contact details below with Axlzod's real email, phone and address.
export const site = {
  name: "Axlzod",
  legalName: "Axlzod",
  tagline: "Human Ambition. Machine Speed.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://axlzod.com").replace(/\/$/, ""),
  title: "End-to-End AI & Software Services",
  description:
    "End-to-end AI and software services: AI consulting, MVP development, custom ERP and CRM, web and mobile apps, SaaS, cloud and DevOps, data engineering. Human Ambition. Machine Speed.",
  email: "info@axlzod.com",
  phone: "+91 88962 07864",
  address: {
    street: "Indra Nagar",
    city: "Lucknow",
    region: "Uttar Pradesh",
    regionShort: "UP",
    country: "India",
    countryCode: "IN",
  },
  locale: "en_IN",
  copyrightYear: 2026,
  keywords: [
    "AI consulting",
    "AI transformation",
    "MVP development",
    "custom ERP development",
    "custom CRM development",
    "web application development",
    "mobile app development",
    "SaaS development",
    "cloud and DevOps consulting",
    "data engineering",
    "product engineering",
    "software development company India",
    "Axlzod",
  ],
  social: [] as string[], // e.g. "https://www.linkedin.com/company/axlzod"
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "Company", href: "/about" },
] as const;

export const absoluteUrl = (path = "/") => `${site.url}${path === "/" ? "" : path}`;
