import { renderOg, ogSize } from "@/lib/og";
import { getCaseStudy } from "@/lib/content";
import { site } from "@/lib/site";
import { caseStudies } from "@/content/data";

export function generateStaticParams() {
  return caseStudies.map((x) => ({ slug: x.slug }));
}

export const alt = site.name;
export const size = ogSize;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getCaseStudy(slug);
  if (!s) return renderOg({ eyebrow: site.name, title: site.title });
  return renderOg({ eyebrow: `${s.tag} case study`, title: s.title, subtitle: s.summary });
}
