import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/content/data";
import { home } from "@/content/pages";
import { concepts } from "@/content/work";
import { CapabilityMap } from "@/components/CapabilityMap";
import { AnimatedConcept } from "@/components/showcase/AnimatedConcept";
import { ConceptBadge, MediaPanel } from "@/components/showcase/showcase";
import { ButtonLink, Container } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: home.seo.title,
  description: home.seo.description,
  path: "/",
  absoluteTitle: true,
});

const goalMarkers = ["bg-blue", "bg-lilac", "bg-lime"];

export default function HomePage() {
  const concept = concepts[0];

  return (
    <>
      {/* Hero: centred oversized statement */}
      <Container className="pt-16 pb-16 text-center sm:pt-28 sm:pb-24">
        <p className="text-sm text-muted">{home.hero.eyebrow}</p>
        <h1 className="mx-auto mt-5 max-w-5xl text-[2.6rem] leading-[1.02] font-semibold sm:text-7xl lg:text-[5.5rem]">
          {home.hero.title}
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted">{home.hero.intro}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/contact">{home.hero.primary}</ButtonLink>
          <ButtonLink href="/services" variant="ghost">
            {home.hero.secondary}
          </ButtonLink>
        </div>
      </Container>

      {/* Wide concept preview */}
      <Container>
        <MediaPanel
          tone="lilac"
          caption="Animated concept, rendered in code. Sample content only."
        >
          <AnimatedConcept />
        </MediaPanel>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <ConceptBadge />
          <Link href={`/work/${concept.slug}`} className="inline-flex items-center gap-2 font-medium underline-offset-4 hover:underline">
            {concept.title}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>

      {/* Services: editorial intro + capability map */}
      <section aria-labelledby="services" className="pt-28 sm:pt-40">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <h2 id="services" className="text-4xl leading-[1.02] font-semibold sm:text-6xl">
              {home.services.title}
            </h2>
            <p className="self-end text-lg text-muted lg:pl-10">{home.studio.body}</p>
          </div>
          <div className="mt-16 sm:mt-20">
            <CapabilityMap />
          </div>
          <ol className="mt-20 border-t border-line">
            {services.map((s, i) => (
              <li key={s.slug} className="border-b border-line">
                <Link
                  href={`/services/${s.slug}`}
                  className="group grid gap-3 py-8 md:grid-cols-[4rem_1fr_1.3fr_auto] md:items-baseline md:gap-8"
                >
                  <span className="text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-2xl font-semibold sm:text-3xl">{s.title}</h3>
                  <p className="text-muted">{s.short}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 group-hover:underline">
                    {s.linkLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Goals */}
      <section aria-labelledby="goals" className="pt-28 sm:pt-40">
        <Container>
          <h2 id="goals" className="max-w-3xl text-4xl font-semibold sm:text-5xl">
            {home.goals.title}
          </h2>
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {home.goals.items.map((g, i) => (
              <li key={g.title} className="border-t border-ink pt-6">
                <span className={`block h-3 w-3 rounded-full ${goalMarkers[i % goalMarkers.length]}`} aria-hidden="true" />
                <h3 className="mt-5 text-2xl font-semibold">{g.title}</h3>
                <p className="mt-3 text-muted">{g.desc}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Agreement */}
      <section aria-labelledby="agreement" className="pt-28 sm:pt-40">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <h2 id="agreement" className="text-4xl font-semibold sm:text-5xl lg:sticky lg:top-28 lg:self-start">
            {home.agreement.title}
          </h2>
          <ol className="border-t border-line">
            {home.agreement.items.map((w, i) => (
              <li key={w.title} className="grid gap-2 border-b border-line py-7 sm:grid-cols-[4rem_1fr]">
                <span className="text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-semibold">{w.title}</h3>
                  <p className="mt-2 text-muted">{w.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Process */}
      <section aria-labelledby="process" className="pt-28 sm:pt-40">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 id="process" className="max-w-3xl text-4xl font-semibold sm:text-5xl">
              {home.process.title}
            </h2>
            <Link href="/process" className="inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline">
              See how we work <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {home.process.steps.map((p, i) => (
              <li key={p.title} className="bg-surface p-7">
                <span className="text-5xl font-semibold tracking-tight">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-8 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.desc}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Studio + CTA */}
      <section aria-labelledby="studio" className="py-28 sm:py-40">
        <Container className="text-center">
          <h2 id="studio" className="mx-auto max-w-4xl text-4xl font-semibold sm:text-6xl">
            {home.studio.title}
          </h2>
          <p className="mx-auto mt-10 text-xl font-semibold">{home.cta.title}</p>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-muted">{home.cta.body}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact">{home.cta.action}</ButtonLink>
            <ButtonLink href="/about" variant="ghost">
              About Axlzod
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
