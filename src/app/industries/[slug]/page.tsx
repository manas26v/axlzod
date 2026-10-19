import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries } from "@/content/data";
import { CaseStudyCard, IndustryCard, ServiceCard } from "@/components/cards";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Chip, Section, SectionHeader } from "@/components/ui";
import { caseStudiesForIndustry, getIndustry, servicesBySlugs } from "@/lib/content";
import { buildMetadata, industryJsonLd } from "@/lib/seo";

// Only the slugs below exist; anything else is a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return buildMetadata({
    title: `${industry.label} Software Development`,
    description: `${industry.headline}. ${industry.short}`,
    path: `/industries/${industry.slug}`,
    image: `/industries/${industry.slug}/opengraph-image`,
    keywords: [`${industry.label} software development`, ...industry.compliance, ...industry.solutions.map((s) => s.title)],
  });
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const related = caseStudiesForIndustry(industry.slug);
  const others = industries.filter((i) => i.slug !== industry.slug).slice(0, 4);

  return (
    <>
      <JsonLd data={industryJsonLd(industry)} />
      <PageHero
        crumbs={[
          { name: "Industries", path: "/industries" },
          { name: industry.label, path: `/industries/${industry.slug}` },
        ]}
        eyebrow={industry.label}
        title={industry.headline}
        intro={industry.short}
      >
        <div className="flex flex-wrap items-center gap-4">
          <ButtonLink href="/contact">Book Demo</ButtonLink>
          <ButtonLink href="/services" variant="light">
            Browse services
          </ButtonLink>
        </div>
      </PageHero>

      <Section tone="light">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <p className="text-xl text-ink-70">{industry.overview}</p>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-navy">Standards we build to</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {industry.compliance.map((c) => (
                <li key={c}>
                  <Chip>{c}</Chip>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="mist" labelledBy="challenge">
        <SectionHeader id="challenge" eyebrow="From challenge to solution" title={`What slows ${industry.label} teams down, and how we fix it`} />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.6fr]">
          <div className="rounded-2xl bg-ink p-8 text-paper">
            <h3 className="text-lg font-semibold text-orange">Challenges</h3>
            <ul className="mt-5 space-y-4">
              {industry.challenges.map((c) => (
                <li key={c} className="border-l-2 border-orange pl-4 text-navy-100">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">How we help</h3>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {industry.solutions.map((s) => (
                <li key={s.title} className="rounded-2xl border border-line bg-paper p-6">
                  <h4 className="font-semibold">{s.title}</h4>
                  <p className="mt-2 text-sm text-ink-60">{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="light" labelledBy="services-used">
        <SectionHeader id="services-used" eyebrow="Services" title="Services most used here" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicesBySlugs(industry.services).map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="mist" labelledBy="proof">
          <SectionHeader id="proof" eyebrow="Proof" title={`${industry.label} case studies`} />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {related.map((cs) => (
              <CaseStudyCard key={cs.slug} cs={cs} />
            ))}
          </div>
        </Section>
      )}

      <Section tone="navy" labelledBy="other">
        <SectionHeader id="other" eyebrow="Explore" title="Other industries" onDark />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((i) => (
            <IndustryCard key={i.slug} industry={i} />
          ))}
        </div>
      </Section>

      <CtaBanner
        title={`Building in ${industry.label}?`}
        body="Book a free session with an architect who has shipped in your sector. We will bring relevant patterns, pitfalls and a realistic plan."
      />
    </>
  );
}
