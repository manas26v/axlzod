import Link from "next/link";
import type { CSSProperties } from "react";
import { services } from "@/content/data";

// Concentric "capability map": the four Axlzod services sit in the inner ring as black pills;
// the outer ring lists work each service already describes on its page. On small screens
// the same lists flow as wrapped pills and the rings are hidden.

const inner: Record<string, { label: string; x: string; y: string; marker: string }> = {
  "business-websites": { label: "business websites", x: "35%", y: "40%", marker: "bg-blue rounded-full" },
  "product-planning": { label: "product planning", x: "50%", y: "26%", marker: "bg-lime rounded-sm rotate-45" },
  "web-products": { label: "web products", x: "65%", y: "40%", marker: "bg-lilac rounded-sm" },
  maintenance: { label: "maintenance", x: "50%", y: "64%", marker: "bg-rose rounded-full" },
};

const outer = [
  { label: "services explained", x: "17%", y: "32%" },
  { label: "enquiry path", x: "15%", y: "66%" },
  { label: "user journey", x: "83%", y: "32%" },
  { label: "acceptance criteria", x: "84%", y: "66%" },
  { label: "updates & checks", x: "32%", y: "84%" },
  { label: "handover", x: "68%", y: "84%" },
];

const place = (x: string, y: string) => ({ "--x": x, "--y": y }) as CSSProperties;
const positioned = "lg:absolute lg:left-[var(--x)] lg:top-[var(--y)] lg:-translate-x-1/2 lg:-translate-y-1/2";

export function CapabilityMap() {
  return (
    <div className="relative mx-auto w-full max-w-5xl lg:aspect-[16/10]">
      <div aria-hidden="true" className="absolute inset-0 hidden lg:block">
        <span className="ring-dotted absolute top-1/2 left-1/2 aspect-square h-[100%] -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <span className="ring-dotted absolute top-1/2 left-1/2 aspect-square h-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <span className="absolute top-1/2 right-[9%] left-[9%] border-t border-dotted border-line-strong" />
        <span className="absolute top-1/2 left-[2%] flex -translate-y-1/2 items-center gap-2 text-lg font-medium text-ink">
          Websites <span className="h-2 w-2 rounded-full bg-ink" />
        </span>
        <span className="absolute top-1/2 right-[2%] flex -translate-y-1/2 items-center gap-2 text-lg font-medium text-ink">
          <span className="h-2 w-2 rounded-full bg-ink" /> Products
        </span>
        <span className="absolute top-[8%] left-1/2 -translate-x-1/2 text-center text-lg leading-tight font-medium text-ink">
          Where we
          <br />
          start
        </span>
      </div>

      <h3 className="sr-only">Core services</h3>
      <ul className="flex flex-wrap gap-2.5">
        {services.map((s) => {
          const p = inner[s.slug];
          return (
            <li key={s.slug} className={positioned} style={place(p.x, p.y)}>
              <Link
                href={`/services/${s.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-action px-4 py-2 text-base whitespace-nowrap text-action-ink transition-colors hover:bg-action-hover lg:text-lg"
              >
                <span className={`h-2.5 w-2.5 ${p.marker}`} aria-hidden="true" />
                {p.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <h3 className="mt-8 text-sm text-muted lg:sr-only">What the services cover</h3>
      <ul className="mt-3 flex flex-wrap gap-2 lg:mt-0">
        {outer.map((o) => (
          <li
            key={o.label}
            className={`rounded-full border border-line-strong bg-canvas px-4 py-1.5 text-sm whitespace-nowrap text-muted lg:text-base ${positioned}`}
            style={place(o.x, o.y)}
          >
            {o.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
