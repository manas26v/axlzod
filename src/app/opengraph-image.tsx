import { renderOg, ogSize } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.title}`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    eyebrow: site.tagline,
    title: "End-to-end AI & software services for ambitious teams",
    subtitle: "AI consulting · MVPs · Custom ERP & CRM · Web & mobile · Cloud & data",
  });
}
