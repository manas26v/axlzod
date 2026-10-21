import type { Metadata } from "next";
import { services } from "@/content/data";
import { home } from "@/content/pages";
import { ServiceCard } from "@/components/cards";
import { CtaBanner } from "@/components/CtaBanner";
import { ButtonLink, Container, Eyebrow, Section, SectionHeader, TextLink } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: home.seo.title,
  description: home.seo.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-charcoal-700/70 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-10 h-96 w-96 rounded-full bg-orange/20 blur-3xl" />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-4xl">
            <Eyebrow onDark>{home.hero.eyebrow}</Eyebrow>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">{home.hero.title}</h1>
            <p className="mt-6 max-w-xl text-lg text-smoke">{home.hero.intro}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/contact">{home.hero.primary}</ButtonLink>
              <ButtonLink href="/services" variant="light">
                {home.hero.secondary}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Goals */}
      <Section tone="light" labelledBy="goals">
        <SectionHeader id="goals" title={home.goals.title} />
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {home.goals.items.map((g) => (
            <li key={g.title} className="flex flex-col rounded-2xl border border-line bg-paper p-8">
              <h3 className="text-2xl font-semibold">{g.title}</h3>
              <p className="mt-3 text-ink-60">{g.desc}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Services */}
      <Section tone="mist" labelledBy="services">
        <SectionHeader id="services" title={home.services.title} action={<TextLink href="/services">All services</TextLink>} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </Section>

      {/* What you agree to */}
      <Section tone="charcoal" labelledBy="agreement">
        <SectionHeader id="agreement" title={home.agreement.title} onDark />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {home.agreement.items.map((w, i) => (
            <li key={w.title} className="rounded-2xl border border-paper/10 bg-charcoal-800 p-6">
              <span className="font-display text-sm text-orange">
                {String(i + 1).padStart(2, "0")} / {String(home.agreement.items.length).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{w.title}</h3>
              <p className="mt-2 text-smoke">{w.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Process */}
      <Section tone="light" labelledBy="process">
        <SectionHeader id="process" title={home.process.title} action={<TextLink href="/process">See how we work</TextLink>} />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {home.process.steps.map((p, i) => (
            <li key={p.title} className="rounded-2xl border border-line bg-paper p-5">
              <span className="font-display text-3xl font-semibold text-orange">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm text-ink-60">{p.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* New studio */}
      <Section tone="dark" labelledBy="studio">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeader id="studio" title={home.studio.title} onDark />
          <div className="space-y-8">
            <p className="text-lg text-smoke">{home.studio.body}</p>
            <TextLink href="/about" onDark>
              About Axlzod
            </TextLink>
          </div>
        </div>
      </Section>

      <CtaBanner title={home.cta.title} body={home.cta.body} action={home.cta.action} />
    </>
  );
}
