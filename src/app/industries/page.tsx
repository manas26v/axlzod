import type { Metadata } from "next";
import { industries } from "@/content/data";
import { industriesPage } from "@/content/pages";
import { IndustryCard } from "@/components/cards";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Section, SectionHeader } from "@/components/ui";
import { buildMetadata, itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "Sector expertise in healthcare, fintech, manufacturing, retail, logistics, ESG, education and real estate, with the compliance and scale each demands.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={itemListJsonLd(
          "Industries",
          industries.map((i) => ({ name: i.label, path: `/industries/${i.slug}` })),
        )}
      />
      <PageHero crumbs={[{ name: "Industries", path: "/industries" }]} eyebrow="Industries" title={industriesPage.title} intro={industriesPage.intro}>
        <ButtonLink href="/work" variant="light">
          View case studies
        </ButtonLink>
      </PageHero>

      <Section tone="charcoal" labelledBy="sectors">
        <SectionHeader
          id="sectors"
          eyebrow="Eight sectors"
          title="Challenges, solutions and standards for each sector"
          onDark
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <IndustryCard key={i.slug} industry={i} />
          ))}
        </div>
      </Section>

      <Section tone="light" labelledBy="shipped">
        <SectionHeader
          id="shipped"
          eyebrow={industriesPage.shipped.eyebrow}
          title={industriesPage.shipped.title}
          intro={industriesPage.shipped.intro}
        />
      </Section>

      <CtaBanner title={industriesPage.cta.title} body={industriesPage.cta.body} />
    </>
  );
}
