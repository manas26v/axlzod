import { renderOg, ogSize } from "@/lib/og";
import { getService } from "@/lib/content";
import { site } from "@/lib/site";
import { services } from "@/content/data";

export function generateStaticParams() {
  return services.map((x) => ({ slug: x.slug }));
}

export const alt = site.name;
export const size = ogSize;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return renderOg({ eyebrow: site.name, title: site.title });
  return renderOg({ eyebrow: s.title, title: s.headline, subtitle: s.short });
}
