import { Plus } from "lucide-react";
import type { Faq } from "@/content/types";
import { faqJsonLd } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

/** Accessible, JS-free accordion + FAQPage structured data. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <div className="divide-y divide-line border-y border-line">
        {faqs.map((f) => (
          <details key={f.q} className="group p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium [&::-webkit-details-marker]:hidden">
              {f.q}
              <Plus
                className="h-5 w-5 shrink-0 text-orange-ink transition-transform group-open:rotate-45"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 text-ink-60">{f.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
