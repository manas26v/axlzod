import type { Metadata } from "next";
import { techGroups } from "@/content/data";
import { technologyPage as t } from "@/content/pages";
import { TechGrid } from "@/components/cards";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Eyebrow, Section, SectionHeader } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Technology Stack — React, Next.js, Node, Python, AWS & AI",
  description:
    "Our technology stack across frontend, backend, data, cloud and AI, and the principles we use to choose tools for each client's context.",
  path: "/technology",
  keywords: techGroups.flatMap((g) => g.items),
});

export default function TechnologyPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Technology stack", path: "/technology" }]} eyebrow="Technology stack" title={t.title} intro={t.intro}>
        <ButtonLink href="/services" variant="light">
          Browse services
        </ButtonLink>
      </PageHero>

      <Section tone="navy" labelledBy="reference">
        <SectionHeader id="reference" eyebrow="Reference architecture" title={t.layers.title} intro={t.layers.intro} onDark />
        <ol className="mt-12 space-y-3">
          {t.reference.map((r) => (
            <li
              key={r.layer}
              className="grid gap-3 rounded-2xl border border-paper/10 bg-navy-800 p-5 sm:grid-cols-[180px_1fr_auto] sm:items-center"
            >
              <span className="font-display text-lg font-semibold text-orange">{r.layer}</span>
              <span className="text-navy-100">{r.tools}</span>
              <ul className="flex flex-wrap gap-2">
                {r.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-paper/10 px-3 py-1 text-xs">
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="light">
        <div className="grid gap-6 lg:grid-cols-3">
          {t.layers.items.map((l) => (
            <article key={l.title} className="rounded-2xl border border-line p-8">
              <Eyebrow>{l.eyebrow}</Eyebrow>
              <h3 className="mt-4 text-2xl font-semibold">{l.title}</h3>
              <p className="mt-3 text-ink-60">{l.copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="mist" labelledBy="stack">
        <SectionHeader id="stack" eyebrow="The stack" title="What we build with" />
        <div className="mt-12">
          <TechGrid groups={techGroups} />
        </div>
      </Section>

      <Section tone="dark" labelledBy="choose">
        <SectionHeader id="choose" eyebrow={t.choose.eyebrow} title={t.choose.title} intro={t.choose.intro} onDark />
        <ol className="mt-12 grid gap-3 sm:grid-cols-5">
          {t.choose.flow.map((f, i) => (
            <li
              key={f.title}
              className={`rounded-2xl p-5 ${i === 0 || i === t.choose.flow.length - 1 ? "bg-orange text-ink" : "border border-paper/15 bg-navy"}`}
            >
              <h3 className="font-semibold">{f.title}</h3>
              <p className={`mt-1 text-sm ${i === 0 || i === t.choose.flow.length - 1 ? "text-ink/80" : "text-navy-100"}`}>{f.desc}</p>
            </li>
          ))}
        </ol>
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.choose.principles.map((p) => (
            <li key={p.title}>
              <h3 className="text-lg font-semibold text-orange">{p.title}</h3>
              <p className="mt-2 text-navy-100">{p.desc}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="light" labelledBy="practice">
        <SectionHeader id="practice" eyebrow={t.practice.eyebrow} title={t.practice.title} intro={t.practice.intro} />
      </Section>

      <CtaBanner title={t.cta.title} body={t.cta.body} />
    </>
  );
}
