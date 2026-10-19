import { renderOg, ogSize } from "@/lib/og";
import { getIndustry } from "@/lib/content";
import { site } from "@/lib/site";
import { industries } from "@/content/data";

export function generateStaticParams() {
  return industries.map((x) => ({ slug: x.slug }));
}

export const alt = site.name;
export const size = ogSize;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getIndustry(slug);
  if (!s) return renderOg({ eyebrow: site.name, title: site.title });
  return renderOg({ eyebrow: `${s.label}`, title: s.headline, subtitle: s.short });
}
