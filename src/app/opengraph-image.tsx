import { renderOg, ogSize } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.title}`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    eyebrow: site.tagline,
    title: "A clearer website. A useful product. A practical next step.",
    subtitle: "Business websites · Product planning · Focused web products · Maintenance",
  });
}
