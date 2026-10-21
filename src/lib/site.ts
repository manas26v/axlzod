// Single source of truth for brand + contact details used across pages, metadata and JSON-LD.
// Unverified owner facts (legal operator, address, phone, enquiry inbox) are intentionally absent.
// See docs/content/03-content-audit.md before adding any of them.
export const site = {
  name: "Axlzod",
  tagline: "Websites, software and practical advice",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://axlzod.com").replace(/\/$/, ""),
  title: "Business Websites & Web Products",
  description:
    "Business websites, product planning and focused web applications for small businesses. Explore Axlzod’s approach to scope, delivery and handover.",
  /**
   * Monitored enquiry inbox. Keep null until the owner confirms the address is live and monitored;
   * while null, the contact form is disabled and no mailto links are rendered.
   */
  email: null as string | null,
  locale: "en_IN",
  copyrightYear: 2026,
  keywords: [
    "business website development",
    "small business website",
    "website planning",
    "product planning",
    "web application development",
    "client portal development",
    "website maintenance",
    "Axlzod",
  ],
  social: [] as string[], // e.g. "https://www.linkedin.com/company/axlzod"
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "How we work", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const absoluteUrl = (path = "/") => `${site.url}${path === "/" ? "" : path}`;
