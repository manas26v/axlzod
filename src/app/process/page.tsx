import type { Metadata } from "next";
import { processPhases } from "@/content/data";
import { processPage } from "@/content/pages";
import { ProcessGrid } from "@/components/cards";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Eyebrow, Section, SectionHeader } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Our Process — Six-Phase Software Delivery Model",
  description:
    "A six-phase delivery model refined over 120+ launches: Discover, Strategize, Design, Develop, Deploy and Scale, with clear activities and deliverables at each step.",
  path: "/process",
});

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Axlzod delivers software",
  description: processPage.intro,
  url: absoluteUrl("/process"),
  step: processPhases.map((p, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: p.title,
    text: `${p.desc} Deliverables: ${p.deliverables.join(", ")}.`,
  })),
};

export default function ProcessPage() {
  return (
    <>
      <JsonLd data={howToJsonLd} />
      <PageHero crumbs={[{ name: "Process", path: "/process" }]} eyebrow="Process" title={processPage.title} intro={processPage.intro}>
        <ButtonLink href="/about" variant="light">
          Meet the team
        </ButtonLink>
      </PageHero>

      <Section tone="mist" labelledBy="roadmap">
        <SectionHeader id="roadmap" eyebrow="The roadmap" title={processPage.roadmapTitle} />
        <div className="mt-12">
          <ProcessGrid phases={processPhases} />
        </div>
      </Section>

      <Section tone="dark" labelledBy="layers">
        <SectionHeader id="layers" title={processPage.layers.title} intro={processPage.layers.intro} onDark />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {processPage.layers.items.map((l) => (
            <article key={l.title} className="rounded-2xl border border-paper/10 bg-charcoal p-8">
              <Eyebrow onDark>{l.eyebrow}</Eyebrow>
              <h3 className="mt-4 text-2xl font-semibold">{l.title}</h3>
              <p className="mt-3 text-smoke">{l.copy}</p>
              <p className="mt-6 text-sm font-semibold text-orange">{l.meta}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="light" labelledBy="models">
        <SectionHeader id="models" eyebrow={processPage.models.eyebrow} title={processPage.models.title} intro={processPage.models.intro} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processPage.models.items.map((m) => (
            <article key={m.title} className="flex flex-col rounded-2xl border border-line p-6">
              <span className="w-fit rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-ink">{m.duration}</span>
              <h3 className="mt-4 text-xl font-semibold">{m.title}</h3>
              <p className="mt-2 text-ink-60">{m.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="mist" labelledBy="sprint">
        <SectionHeader id="sprint" eyebrow={processPage.sprint.eyebrow} title={processPage.sprint.title} intro={processPage.sprint.intro} />
      </Section>

      <CtaBanner title={processPage.cta.title} body={processPage.cta.body} />
    </>
  );
}
