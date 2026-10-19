import { caseStudies, industries, services } from "@/content/data";

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

export const servicesBySlugs = (slugs: string[]) =>
  slugs.map(getService).filter((s): s is NonNullable<typeof s> => !!s);
export const industriesBySlugs = (slugs: string[]) =>
  slugs.map(getIndustry).filter((i): i is NonNullable<typeof i> => !!i);

/** Case studies that use a given service. */
export const caseStudiesForService = (slug: string) => caseStudies.filter((c) => c.services.includes(slug));
export const caseStudiesForIndustry = (slug: string) => caseStudies.filter((c) => c.industry === slug);

/** Featured on the homepage services grid, in the reference site's order. */
export const featuredServiceSlugs = [
  "ai-consulting",
  "mvp-development",
  "custom-erp",
  "custom-crm",
  "web-development",
  "mobile-development",
  "product-engineering",
  "cloud-devops",
];

/** Splits "6x application throughput" into { value: "6x", label: "application throughput" }. */
export function splitImpact(impact: string) {
  const [value, ...rest] = impact.split(" ");
  return { value, label: rest.join(" ") };
}
