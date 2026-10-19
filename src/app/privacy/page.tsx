import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name}.`,
  path: "/privacy",
});

// TODO: replace with the real legal text before launch.
export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: "Privacy Policy", path: "/privacy" }]} title="Privacy Policy" />
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
