import type { Metadata } from "next";
import { caseStudies, industries, processPhases, services, techGroups, testimonials } from "@/content/data";
import { clients, contactCopy, highlights, home, stats, whyChooseUs } from "@/content/pages";
import { CaseStudyCard, IndustryCard, ServiceCard, StatsBar, TechGrid, TestimonialCard } from "@/components/cards";
import { ContactSection } from "@/components/ContactSection";
import { Icon } from "@/components/Icon";
import { ButtonLink, CheckList, Container, Eyebrow, Section, SectionHeader, TextLink } from "@/components/ui";
import { featuredServiceSlugs, servicesBySlugs } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: `${site.title} | ${site.name}`,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  const featured = servicesBySlugs(featuredServiceSlugs);
  const [lead, ...otherCases] = caseStudies;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-charcoal-700/70 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-10 h-96 w-96 rounded-full bg-orange/20 blur-3xl" />
        <Container className="relative grid gap-14 py-20 sm:py-28 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          <div>
            <Eyebrow onDark>{home.hero.eyebrow}</Eyebrow>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              End-to-end <span className="text-orange">AI &amp; software</span> services for ambitious teams
            </h1>
            <p className="mt-6 max-w-xl text-lg text-smoke">{home.hero.intro}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/contact">Book Demo</ButtonLink>
              <ButtonLink href="/work" variant="light">
                View our work
              </ButtonLink>
            </div>
          </div>

          {/* Placeholder dashboard visual — replace with the animated version later */}
          <div className="rounded-3xl border border-paper/10 bg-charcoal p-6 shadow-2xl" aria-hidden="true">
            <div className="flex flex-wrap gap-2">
              {home.hero.layers.map((l) => (
                <span key={l} className="rounded-full bg-paper/10 px-3 py-1 text-xs text-smoke">
                  {l}
                </span>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {home.hero.metrics.map((m) => (
                <div key={m.label} className="rounded-2xl bg-charcoal-800 p-5">
                  <p className="text-xs uppercase tracking-wider text-smoke">{m.label}</p>
                  <p className="mt-2 font-display text-4xl font-semibold text-orange">{m.value}</p>
                  {m.note && <p className="mt-1 text-xs text-smoke">{m.note}</p>}
                </div>
              ))}
            </div>
            <div className="mt-4 flex h-24 items-end gap-1.5 rounded-2xl bg-charcoal-800 p-4">
              {[30, 45, 38, 60, 52, 70, 64, 82, 76, 94].map((h, i) => (
                <span key={i} className="flex-1 rounded-t bg-orange/80" style={{ height: `${h}%` }} />
              ))}
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs text-smoke">
              <span className="h-2 w-2 rounded-full bg-orange" /> live
            </p>
          </div>
        </Container>
      </section>

      {/* Trusted by */}
      <section aria-labelledby="trusted" className="border-b border-line bg-paper py-12">
        <Container>
          <h2 id="trusted" className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-ink-60">
            {home.trusted.title}
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-6 text-center sm:grid-cols-4 lg:grid-cols-8">
            {clients.map((c) => (
              <li key={c} className="font-display text-base font-semibold text-charcoal/70">
                {c}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Stats */}
      <Section tone="light">
        <p className="mb-10 max-w-2xl text-lg text-ink-60">{home.trusted.sub}</p>
        <StatsBar stats={stats} />
      </Section>

      {/* Why it matters */}
      <Section tone="dark" labelledBy="why-matters">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeader id="why-matters" eyebrow={home.why.eyebrow} title={home.why.title} onDark />
          <div className="space-y-8">
            <p className="text-lg text-smoke">{home.why.body}</p>
            <CheckList items={home.why.points} onDark />
          </div>
        </div>
      </Section>

      {/* Integrated approach */}
      <Section tone="mist" labelledBy="approach">
        <SectionHeader id="approach" eyebrow={home.approach.eyebrow} title={home.approach.title} intro={home.approach.intro} />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {home.approach.pillars.map((p) => (
            <article key={p.title} className="flex flex-col rounded-2xl border border-line bg-paper p-8">
              <Eyebrow>{p.eyebrow}</Eyebrow>
              <h3 className="mt-4 text-2xl font-semibold">{p.title}</h3>
              <p className="mt-3 flex-1 text-ink-60">{p.copy}</p>
              <div className="mt-6">
                <CheckList items={p.points} />
              </div>
              <p className="mt-6 border-t border-line pt-4 font-display font-semibold text-charcoal">{p.stat}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section tone="light" labelledBy="services">
        <SectionHeader
          id="services"
          eyebrow={home.services.eyebrow}
          title={home.services.title}
          intro={home.services.intro}
          action={<TextLink href="/services">All {services.length} services</TextLink>}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </Section>

      {/* Why choose us */}
      <Section tone="charcoal" labelledBy="choose">
        <SectionHeader
          id="choose"
          eyebrow={home.chooseUs.eyebrow}
          title={home.chooseUs.title}
          intro={home.chooseUs.intro}
          onDark
          action={<TextLink href="/about" onDark>More about how we work</TextLink>}
        />
        <ul className="mt-10 flex flex-wrap gap-3">
          {highlights.map((h) => (
            <li key={h.title} className="inline-flex items-center gap-2 rounded-full bg-paper/10 px-4 py-2 text-sm">
              <Icon name={h.icon} className="h-4 w-4 text-orange" />
              <span className="font-semibold">{h.title}</span>
              <span className="text-smoke">— {h.desc}</span>
            </li>
          ))}
        </ul>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((w, i) => (
            <li key={w.title} className="rounded-2xl border border-paper/10 bg-charcoal-800 p-6">
              <span className="font-display text-sm text-orange">
                {String(i + 1).padStart(2, "0")} / {String(whyChooseUs.length).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{w.title}</h3>
              <p className="mt-2 text-smoke">{w.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Inside the work */}
      <Section tone="light" labelledBy="inside">
        <SectionHeader id="inside" eyebrow={home.inside.eyebrow} title={home.inside.title} intro={home.inside.intro} />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {home.inside.frames.map((f, i) => (
            <li
              key={f}
              className={`flex aspect-[4/5] items-end rounded-2xl p-5 font-display text-lg font-semibold ${
                i % 2 ? "bg-charcoal text-paper" : "bg-ink text-paper"
              }`}
            >
              {/* Image placeholder — drop studio photos here later */}
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg text-ink-70">{home.inside.note}</p>
          <TextLink href="/process">See how we work</TextLink>
        </div>
      </Section>

      {/* Process */}
      <Section tone="mist" labelledBy="process">
        <SectionHeader
          id="process"
          eyebrow={home.process.eyebrow}
          title={home.process.title}
          action={<TextLink href="/process">See the full process</TextLink>}
        />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {processPhases.map((p) => (
            <li key={p.n} className="rounded-2xl border border-line bg-paper p-5">
              <span className="font-display text-3xl font-semibold text-orange">{p.n}</span>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-xs font-medium text-charcoal">{p.duration}</p>
              <p className="mt-3 text-sm text-ink-60">{p.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Industries */}
      <Section tone="charcoal" labelledBy="industries">
        <SectionHeader
          id="industries"
          eyebrow="Industries"
          title={home.industries.title}
          intro={home.industries.intro}
          onDark
          action={<TextLink href="/industries" onDark>Explore industry expertise</TextLink>}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <IndustryCard key={ind.slug} industry={ind} />
          ))}
        </div>
      </Section>

      {/* Case studies */}
      <Section tone="light" labelledBy="work">
        <SectionHeader
          id="work"
          eyebrow={home.work.eyebrow}
          title={home.work.title}
          action={<TextLink href="/work">All case studies</TextLink>}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <CaseStudyCard cs={lead} featured />
          <div className="grid gap-6">
            {otherCases.map((cs) => (
              <CaseStudyCard key={cs.slug} cs={cs} />
            ))}
          </div>
        </div>
      </Section>

      {/* Tech stack */}
      <Section tone="mist" labelledBy="tech">
        <SectionHeader
          id="tech"
          eyebrow={home.tech.eyebrow}
          title={home.tech.title}
          intro={home.tech.intro}
          action={<TextLink href="/technology">How we choose technology</TextLink>}
        />
        <div className="mt-12">
          <TechGrid groups={techGroups} />
        </div>
      </Section>

      {/* Testimonials */}
      <Section tone="dark" labelledBy="testimonials">
        <SectionHeader id="testimonials" eyebrow="Testimonials" title={home.testimonials.title} onDark />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </Section>

      <ContactSection title={contactCopy.title} />
    </>
  );
}
