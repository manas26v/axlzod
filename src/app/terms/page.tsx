import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: `Terms & Conditions for ${site.name}.`,
  path: "/terms",
});

// TODO: replace with the real legal text before launch.
export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: "Terms & Conditions", path: "/terms" }]} title="Terms & Conditions" />
      <Section tone="light">
        <p className="max-w-2xl text-ink-60">
          This page is being prepared. For questions, contact us at{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-orange-ink underline">
            {site.email}
          </a>
          .
        </p>
      </Section>
    </>
  );
}
