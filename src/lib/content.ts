import { services } from "@/content/data";

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const servicesBySlugs = (slugs: string[]) =>
  slugs.map(getService).filter((s): s is NonNullable<typeof s> => !!s);
