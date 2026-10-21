import type { MetadataRoute } from "next";
import { services } from "@/content/data";
import { concepts } from "@/content/work";
import { absoluteUrl } from "@/lib/site";

// Bump when content changes meaningfully so crawlers re-fetch.
const lastModified = new Date("2026-10-21");

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  });

  // Privacy and terms are placeholders until the owner supplies operator and processing facts,
  // so they stay out of the sitemap (see docs/content/03-content-audit.md).
  return [
    page("/", 1, "weekly"),
    page("/services", 0.9),
    ...services.map((s) => page(`/services/${s.slug}`, 0.9)),
    page("/work", 0.7),
    ...concepts.map((c) => page(`/work/${c.slug}`, 0.6)),
    page("/process", 0.7),
    page("/about", 0.7),
    page("/contact", 0.8),
  ];
}
