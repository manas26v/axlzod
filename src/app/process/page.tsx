import type { Metadata } from "next";
import { processPhases } from "@/content/data";
import { processPage } from "@/content/pages";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Section, SectionHeader } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: processPage.seo.title,
  description: processPage.seo.description,
  path: "/process",
});

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Axlzod approaches a project",
  description: processPage.intro,
  url: absoluteUrl("/process"),
  step: processPhases.map((p, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: p.title,
    text: `${p.desc} You receive: ${p.receive}`,
  })),
};

export default function ProcessPage() {
  return (
    <>
      <JsonLd data={howToJsonLd} />
      <PageHero crumbs={[{ name: "How we work", path: "/process" }]} eyebrow="How we work" title={processPage.title} intro={processPage.intro}>
        <ButtonLink href="/contact">{processPage.cta.action}</ButtonLink>
      </PageHero>

      <Section tone="mist" labelledBy="stages">
        <h2 id="stages" className="sr-only">
          Project stages
        </h2>
        <ol className="grid gap-6 md:grid-cols-2">
          {processPhases.map((p) => (
            <li key={p.n} className="flex flex-col rounded-2xl border border-line bg-paper p-6">
              <span className="font-display text-4xl font-semibold text-orange">{p.n}</span>
              <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-ink-60">{p.desc}</p>
              <p className="mt-5 border-t border-line pt-5 text-sm text-ink-70">
                <span className="font-semibold text-charcoal">You receive: </span>
                {p.receive}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="light" labelledBy="shared">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeader id="shared" title={processPage.shared.title} />
          <p className="text-lg text-ink-70">{processPage.shared.body}</p>
        </div>
      </Section>

      <CtaBanner title="Have a project in mind?" action={processPage.cta.action} />
    </>
  );
}
