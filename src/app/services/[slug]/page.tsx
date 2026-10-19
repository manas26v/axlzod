import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/data";
import { CaseStudyCard, ServiceCard } from "@/components/cards";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, CheckList, Chip, Eyebrow, Section, SectionHeader } from "@/components/ui";
import { caseStudiesForService, getService, industriesBySlugs } from "@/lib/content";
import { buildMetadata, serviceJsonLd } from "@/lib/seo";
import Link from "next/link";

// Only the slugs below exist; anything else is a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: `${service.headline}. ${service.short}`,
    path: `/services/${service.slug}`,
    image: `/services/${service.slug}/opengraph-image`,
    keywords: [service.title, ...service.capabilities.map((c) => c.title)],
  });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = caseStudiesForService(service.slug);
  const industries = industriesBySlugs(service.industries);
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <PageHero
        crumbs={[
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
        eyebrow={service.title}
        title={service.headline}
        intro={service.short}
      >
        <div className="flex flex-wrap gap-4">
          <ButtonLink href="/contact">Book Demo</ButtonLink>
          <ButtonLink href="/work" variant="light">
            See related work
          </ButtonLink>
        </div>
      </PageHero>

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Eyebrow>Overview</Eyebrow>
            <h2 className="sr-only">Overview</h2>
            <div className="mt-4 space-y-5 text-lg text-ink-70">
              {service.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <h3 className="mt-12 text-xl font-semibold">Outcomes you can expect</h3>
            <div className="mt-4">
              <CheckList items={service.outcomes} />
            </div>
            <h3 className="mt-12 text-xl font-semibold">Industries served</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link href={`/industries/${i.slug}`} className="hover:opacity-80">
                    <Chip>{i.label}</Chip>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <aside className="h-fit rounded-2xl bg-navy p-8 text-paper">
            <h2 className="text-xl font-semibold">What you get</h2>
            <div className="mt-6">
              <CheckList items={service.deliverables} onDark />
            </div>
          </aside>
        </div>
      </Section>

        <Section tone="dark" labelledBy="how">
          <SectionHeader id="how" eyebrow="How it works" title="From first conversation to running system" onDark />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-paper/10 bg-navy-800 p-6">
                <span className="font-display text-3xl font-semibold text-orange">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-navy-100">{s.desc}</p>
              </li>
            ))}
          </ol>
        </Section>

      <Section tone="mist" labelledBy="capabilities">
        <SectionHeader id="capabilities" eyebrow="Capabilities" title={`What we do under ${service.title}`} />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {service.capabilities.map((c, i) => (
            <li key={c.title} className="rounded-2xl border border-line bg-paper p-6">
              <span className="font-display text-sm font-semibold text-orange-ink">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-ink-60">{c.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      {related.length > 0 && (
        <Section tone="light" labelledBy="proof">
          <SectionHeader id="proof" eyebrow="Proof" title="Related case studies" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {related.map((cs) => (
              <CaseStudyCard key={cs.slug} cs={cs} />
            ))}
          </div>
        </Section>
      )}

      <Section tone="mist" labelledBy="faq">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeader id="faq" eyebrow="FAQ" title="Questions we hear most" />
          <FaqList faqs={service.faqs} />
        </div>
      </Section>

      <Section tone="light" labelledBy="other">
        <SectionHeader id="other" eyebrow="Explore" title="Other services" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {others.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      <CtaBanner
        title={`Ready to talk about ${service.title.toLowerCase()}?`}
        body="Book a free 45-minute session with a senior architect. We will map your situation to a delivery shape and an honest estimate."
      />
    </>
  );
}
