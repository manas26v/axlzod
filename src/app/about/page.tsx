import type { Metadata } from "next";
import { principles } from "@/content/data";
import { about } from "@/content/pages";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Section, SectionHeader } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: about.seo.title,
  description: about.seo.description,
  path: "/about",
  absoluteTitle: true,
});

export default function AboutPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "About", path: "/about" }]} eyebrow="About" title={about.title} intro={about.intro}>
        <ButtonLink href="/process" variant="light">
          How we work
        </ButtonLink>
      </PageHero>

      <Section tone="light" labelledBy="why">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeader id="why" title={about.why.title} />
          <p className="text-lg text-ink-70">{about.why.body}</p>
        </div>
      </Section>

      <Section tone="charcoal" labelledBy="values">
        <SectionHeader id="values" title={about.values.title} onDark />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <li key={p.title} className="rounded-2xl border border-paper/10 bg-charcoal-800 p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-smoke">{p.desc}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="mist" labelledBy="help">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeader id="help" title={about.help.title} />
          <p className="text-lg text-ink-70">{about.help.body}</p>
        </div>
      </Section>

      <CtaBanner title="Have a project in mind?" action={about.cta.action} />
    </>
  );
}
