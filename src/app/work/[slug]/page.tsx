import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { concepts, getConcept, type ConceptChapter } from "@/content/work";
import { home } from "@/content/pages";
import { AnimatedConcept } from "@/components/showcase/AnimatedConcept";
import { ConceptBadge, MediaPanel, MediaSplit } from "@/components/showcase/showcase";
import {
  DesktopFrame,
  PhoneFrame,
  QuoteSummaryScreen,
  RequestFormScreen,
  RequestListScreen,
  WebsiteScreen,
} from "@/components/showcase/mockups";
import { ButtonLink, Container } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return concepts.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const concept = getConcept(slug);
  if (!concept) return {};
  return buildMetadata({
    title: concept.seoTitle,
    description: concept.seoDescription,
    path: `/work/${concept.slug}`,
    image: `/work/${concept.slug}/opengraph-image`,
  });
}

function Chapter({ chapter, index }: { chapter: ConceptChapter; index: number }) {
  return (
    <div>
      <p className="text-sm text-muted">
        {String(index + 1).padStart(2, "0")} ·{" "}
        <Link href={chapter.serviceHref} className="underline underline-offset-4 hover:text-ink">
          {chapter.service}
        </Link>
      </p>
      <h2 id={`chapter-${chapter.id}`} className="mt-4 text-3xl font-semibold sm:text-4xl">
        {chapter.title}
      </h2>
      <div className="mt-5 space-y-4 text-lg text-muted">
        {chapter.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export default async function ConceptPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const concept = getConcept(slug);
  if (!concept) notFound();

  const [plan, website, product, care] = concept.chapters;

  return (
    <article>
      {/* Intro */}
      <Container className="pt-12 sm:pt-20">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/work" className="underline-offset-4 hover:underline">
            Work
          </Link>{" "}
          / <span aria-current="page">Concept</span>
        </nav>
        <ConceptBadge className="mt-8" />
        <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] sm:text-7xl">{concept.headline}</h1>
        <div className="mt-10 grid gap-10 border-t border-line pt-10 lg:grid-cols-[1fr_1.1fr]">
          <p className="text-lg text-muted">{concept.intro}</p>
          <dl className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {concept.facts.map((f) => (
              <div key={f.label} className="border-b border-line py-3">
                <dt className="text-sm text-muted">{f.label}</dt>
                <dd className="mt-1 font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      {/* Wide animated preview */}
      <Container className="mt-16 sm:mt-24">
        <MediaPanel
          tone="lilac"
          caption="Animated concept, rendered in code: a quote request moving from the website to the team’s list and back to the customer. Sample content only."
        >
          <AnimatedConcept />
        </MediaPanel>
      </Container>

      {/* Chapter 1: plan, with a real scope board */}
      <Container className="mt-24 sm:mt-36">
        <MediaSplit
          media={
            <MediaPanel tone="neutral" caption="The agreed first scope, with later options kept separate.">
              <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-10">
                <div className="rounded-2xl bg-surface p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold">
                    <span className="h-2 w-2 rounded-full bg-lime" aria-hidden="true" /> First release
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li>Quote request path</li>
                    <li>Internal request list</li>
                    <li>Quote summary for the customer</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-dashed border-line-strong p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold">
                    <span className="h-2 w-2 rounded-full bg-line-strong" aria-hidden="true" /> Later options
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    <li>Online payments</li>
                    <li>Scheduling</li>
                    <li>Accounting integration</li>
                  </ul>
                </div>
              </div>
            </MediaPanel>
          }
        >
          <Chapter chapter={plan} index={0} />
        </MediaSplit>
      </Container>

      {/* Chapter 2: website, phone close-ups */}
      <Container className="mt-24 sm:mt-36">
        <MediaSplit
          reverse
          media={
            <MediaPanel tone="lime" caption="Phone views of the public website and the quote request step.">
              <div className="grid grid-cols-2 gap-4 px-6 pt-10 pb-0 sm:gap-6 sm:px-12 sm:pt-14">
                <PhoneFrame className="translate-y-6">
                  <WebsiteScreen />
                </PhoneFrame>
                <PhoneFrame className="-translate-y-2">
                  <RequestFormScreen />
                </PhoneFrame>
              </div>
            </MediaPanel>
          }
        >
          <Chapter chapter={website} index={1} />
        </MediaSplit>
      </Container>

      {/* Chapter 3: product, desktop close-up */}
      <Container className="mt-24 sm:mt-36">
        <MediaSplit
          media={
            <MediaPanel tone="blue" caption="Desktop view of the internal request list, with statuses marked by colour and text.">
              <div className="px-6 pt-10 pb-10 sm:px-10 sm:pt-12">
                <DesktopFrame>
                  <RequestListScreen />
                </DesktopFrame>
              </div>
            </MediaPanel>
          }
        >
          <Chapter chapter={product} index={2} />
        </MediaSplit>
      </Container>

      {/* Wide triptych */}
      <Container className="mt-24 sm:mt-36">
        <MediaPanel tone="lilac" caption="The customer’s journey on a phone: website, request and quote summary.">
          <div className="mx-auto grid max-w-3xl grid-cols-3 gap-3 px-5 pt-12 sm:gap-8 sm:px-10 sm:pt-20">
            <PhoneFrame className="translate-y-8">
              <WebsiteScreen />
            </PhoneFrame>
            <PhoneFrame>
              <RequestFormScreen />
            </PhoneFrame>
            <PhoneFrame className="translate-y-8">
              <QuoteSummaryScreen />
            </PhoneFrame>
          </div>
        </MediaPanel>
      </Container>

      {/* Chapter 4: care */}
      <Container className="mt-24 sm:mt-36">
        <div className="mx-auto max-w-3xl">
          <Chapter chapter={care} index={3} />
        </div>
      </Container>

      {/* Conceptual vs functional */}
      <Container className="mt-24 sm:mt-36">
        <section aria-labelledby="honesty" className="border-t border-line pt-12">
          <h2 id="honesty" className="text-3xl font-semibold sm:text-4xl">
            What is conceptual, and what is real
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {[
              { title: "Conceptual", items: concept.conceptual, dot: "bg-lilac" },
              { title: "Functional on this page", items: concept.functional, dot: "bg-lime" },
            ].map((col) => (
              <div key={col.title}>
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <span className={`h-2.5 w-2.5 rounded-full ${col.dot}`} aria-hidden="true" />
                  {col.title}
                </h3>
                <ul className="mt-4 divide-y divide-line border-y border-line">
                  {col.items.map((item) => (
                    <li key={item} className="py-3 text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </Container>

      {/* CTA */}
      <Container className="py-24 text-center sm:py-36">
        <ConceptBadge />
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold sm:text-6xl">{home.cta.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">{home.cta.body}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/contact">{home.cta.action}</ButtonLink>
          <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-semibold hover:border-ink">
            Explore services <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </article>
  );
}
