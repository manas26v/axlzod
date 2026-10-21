import { renderOg, ogSize } from "@/lib/og";
import { site } from "@/lib/site";
import { concepts, conceptLabel, getConcept } from "@/content/work";

export function generateStaticParams() {
  return concepts.map((c) => ({ slug: c.slug }));
}

export const alt = site.name;
export const size = ogSize;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getConcept(slug);
  if (!c) return renderOg({ eyebrow: site.name, title: site.title });
  return renderOg({ eyebrow: "Self-initiated concept", title: c.title, subtitle: conceptLabel });
}
