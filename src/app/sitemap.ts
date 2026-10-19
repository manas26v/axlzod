import type { MetadataRoute } from "next";
import { caseStudies, industries, services } from "@/content/data";
import { absoluteUrl } from "@/lib/site";

// Bump when content changes meaningfully so crawlers re-fetch.
const lastModified = new Date("2026-10-19");

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1, "weekly"),
    page("/services", 0.9, "weekly"),
    page("/industries", 0.8),
    page("/work", 0.8, "weekly"),
    page("/about", 0.7),
    page("/process", 0.7),
    page("/technology", 0.7),
    page("/contact", 0.8),
    ...services.map((s) => page(`/services/${s.slug}`, 0.9)),
    ...industries.map((i) => page(`/industries/${i.slug}`, 0.8)),
    ...caseStudies.map((c) => page(`/work/${c.slug}`, 0.7)),
    page("/privacy", 0.2, "yearly"),
    page("/terms", 0.2, "yearly"),
  ];
}
