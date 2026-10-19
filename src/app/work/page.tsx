import type { Metadata } from "next";
import { caseStudies } from "@/content/data";
import { stats, workPage } from "@/content/pages";
import { CaseStudyCard, StatsBar } from "@/components/cards";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Section, SectionHeader } from "@/components/ui";
import { buildMetadata, itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies & Our Work",
  description:
    "Case studies with measured business impact: AI underwriting, custom ERP, HIPAA-ready patient platforms and more.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={itemListJsonLd(
          "Case studies",
          caseStudies.map((c) => ({ name: c.title, path: `/work/${c.slug}` })),
        )}
      />
      <PageHero crumbs={[{ name: "Case studies", path: "/work" }]} eyebrow="Case studies" title={workPage.title} intro={workPage.intro}>
        <ButtonLink href="/services" variant="light">
          Browse services
        </ButtonLink>
      </PageHero>

      <Section tone="charcoal" labelledBy="headline">
        <h2 id="headline" className="text-sm font-semibold uppercase tracking-[0.18em] text-orange">
          Headline results
        </h2>
        <dl className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {workPage.headline.map((h) => (
            <div key={h.label} className="flex flex-col-reverse rounded-2xl bg-charcoal-800 p-6">
              <dt className="mt-2 text-sm text-smoke">
                <span className="block font-semibold text-paper">{h.label}</span>
                {h.context}
              </dt>
              <dd className="font-display text-5xl font-semibold text-orange">{h.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-14">
          <StatsBar stats={stats} onDark />
        </div>
      </Section>

      <Section tone="light" labelledBy="cases">
        <SectionHeader id="cases" eyebrow={workPage.behind.eyebrow} title={workPage.behind.title} intro={workPage.behind.intro} />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} cs={cs} />
          ))}
        </div>
      </Section>

      <Section tone="mist" labelledBy="value">
        <SectionHeader id="value" eyebrow={workPage.value.eyebrow} title={workPage.value.title} intro={workPage.value.intro} />
      </Section>

      <CtaBanner title={workPage.cta.title} body={workPage.cta.body} secondary={{ label: "Browse services", href: "/services" }} />
    </>
  );
}
