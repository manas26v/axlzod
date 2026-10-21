import { ImageResponse } from "next/og";
import { brandColors as c } from "./brand-colors";
import { site } from "./site";

export const ogSize = { width: 1200, height: 630 };

/** Shared Open Graph card: light canvas with a soft lilac wash, charcoal type. */
export function renderOg({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: c.panel,
          color: c.ink,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 30, fontWeight: 700, letterSpacing: 6 }}>
          <div style={{ width: 16, height: 16, borderRadius: 8, background: c.lilac }} />
          {site.name.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 26, color: c.muted }}>{eyebrow}</div>
          <div style={{ fontSize: title.length > 60 ? 56 : 68, fontWeight: 700, lineHeight: 1.06, maxWidth: 1050 }}>{title}</div>
          {subtitle && <div style={{ fontSize: 28, color: c.muted, maxWidth: 1000 }}>{subtitle}</div>}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: c.muted,
            borderTop: `1px solid ${c.line}`,
            paddingTop: 20,
          }}
        >
          <span>{site.tagline}</span>
          <span>{site.url.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
