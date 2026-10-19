import type { Metadata } from "next";
import { principles } from "@/content/data";
import { about, stats, whyChooseUs } from "@/content/pages";
import { StatsBar } from "@/components/cards";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Eyebrow, Section, SectionHeader } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us — AI-First Technology Consultancy",
  description:
    "Axlzod is an AI-first technology consultancy. Senior teams, transparent delivery and architecture decisions you can defend to your board.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "About us", path: "/about" }]} eyebrow="About us" title={about.title} intro={about.intro}>
        <ButtonLink href="/process" variant="light">
          How we work
        </ButtonLink>
      </PageHero>

      <Section tone="light" labelledBy="story">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeader id="story" eyebrow={about.story.eyebrow} title={about.story.title} />
          </div>
          <div className="space-y-5 text-lg text-ink-70">
            {about.story.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <StatsBar stats={stats} />
        </div>
      </Section>

      <Section tone="dark" labelledBy="inside">
        <SectionHeader id="inside" eyebrow={about.inside.eyebrow} title={about.inside.title} intro={about.inside.intro} onDark />
      </Section>

      <Section tone="mist" labelledBy="journey">
        <SectionHeader id="journey" eyebrow={about.journey.eyebrow} title={about.journey.title} />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {about.journey.steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-line bg-paper p-6">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-orange font-semibold text-ink">{i + 1}</span>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-ink-60">{s.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="navy" labelledBy="values">
        <SectionHeader id="values" eyebrow={about.values.eyebrow} title={about.values.title} onDark />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <li key={p.title} className="rounded-2xl border border-paper/10 bg-navy-800 p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-navy-100">{p.desc}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="light" labelledBy="why">
        <SectionHeader id="why" eyebrow={about.why.eyebrow} title={about.why.title} />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((w, i) => (
            <li key={w.title} className="rounded-2xl border border-line p-6">
              <Eyebrow>{String(i + 1).padStart(2, "0")}</Eyebrow>
              <h3 className="mt-3 text-xl font-semibold">{w.title}</h3>
              <p className="mt-2 text-ink-60">{w.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBanner title={about.cta.title} body={about.cta.body} />
    </>
  );
}
