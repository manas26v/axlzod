import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Terms",
    description: `Website terms for ${site.name}. These terms are being prepared.`,
    path: "/terms",
  }),
  // Placeholder until the owner supplies operator and commercial facts (docs/content/03-content-audit.md).
  robots: { index: false, follow: true },
};

// TODO: replace with final website terms once the operator, licensing and jurisdiction are confirmed.
export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: "Terms", path: "/terms" }]} title="Terms" />
      <Section tone="light">
        <div className="max-w-2xl space-y-5 text-ink-70">
          <p>These website terms are being prepared and are not yet complete.</p>
          <p>
            Information on this website describes the kinds of work we offer. Any project is governed by a separate
            written proposal and agreement covering its scope, responsibilities and fees.
          </p>
        </div>
      </Section>
    </>
  );
}
