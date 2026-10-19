import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/content/data";
import { CaseStudyCard, ImpactStats } from "@/components/cards";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Chip, Section, SectionHeader } from "@/components/ui";
import { getCaseStudy, getIndustry, servicesBySlugs } from "@/lib/content";
import { buildMetadata, caseStudyJsonLd } from "@/lib/seo";

// Only the slugs below exist; anything else is a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return buildMetadata({
    title: `${cs.title} — ${cs.tag} Case Study`,
    description: `${cs.summary} Results: ${cs.impact.join(", ")}.`,
    path: `/work/${cs.slug}`,
    image: `/work/${cs.slug}/opengraph-image`,
    type: "article",
    keywords: [`${cs.tag} case study`, ...cs.stack],
  });
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const industry = getIndustry(cs.industry);
  const others = caseStudies.filter((c) => c.slug !== cs.slug);

  return (
    <>
      <JsonLd data={caseStudyJsonLd(cs)} />
      <PageHero
        crumbs={[
          { name: "Case studies", path: "/work" },
          { name: cs.title, path: `/work/${cs.slug}` },
        ]}
        eyebrow={`${cs.tag} case study`}
        title={cs.title}
        intro={cs.summary}
      />

      <Section tone="charcoal" labelledBy="impact">
        <h2 id="impact" className="text-sm font-semibold uppercase tracking-[0.18em] text-orange">
          Business impact
        </h2>
        <div className="mt-6">
          <ImpactStats impact={cs.impact} onDark />
        </div>
        <dl className="mt-12 grid gap-6 border-t border-paper/10 pt-8 sm:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-wider text-smoke">Industry</dt>
            <dd className="mt-1 font-semibold">
              {industry ? (
                <Link href={`/industries/${industry.slug}`} className="hover:text-orange">
                  {industry.label}
                </Link>
              ) : (
                cs.tag
              )}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-smoke">Timeline</dt>
            <dd className="mt-1 font-semibold">{cs.duration}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-smoke">Team</dt>
            <dd className="mt-1 font-semibold">{cs.team}</dd>
          </div>
        </dl>
      </Section>

      <Section tone="light">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-ink p-8 text-paper">
            <h2 className="text-xl font-semibold text-orange">Business challenge</h2>
            <p className="mt-4 text-lg text-smoke">{cs.challenge}</p>
          </div>
          <div className="rounded-2xl border border-line bg-mist p-8">
            <h2 className="text-xl font-semibold text-charcoal">Solution</h2>
            <p className="mt-4 text-lg text-ink-70">{cs.solution}</p>
          </div>
        </div>
      </Section>

      <Section tone="mist" labelledBy="approach">
        <SectionHeader id="approach" eyebrow="Approach" title="How the work unfolded" />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cs.approach.map((a, i) => (
            <li key={a.title} className="rounded-2xl border border-line bg-paper p-6">
              <span className="font-display text-3xl font-semibold text-orange">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm text-ink-60">{a.desc}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal">Technology stack</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {cs.stack.map((t) => (
                <li key={t}>
                  <Chip>{t}</Chip>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal">Services involved</h3>
            <ul className="mt-4 space-y-2">
              {servicesBySlugs(cs.services).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="font-medium text-orange-ink hover:text-ink">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="light" labelledBy="more">
        <SectionHeader id="more" eyebrow="More work" title="Other case studies" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {others.map((c) => (
            <CaseStudyCard key={c.slug} cs={c} />
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Have a similar challenge?"
        body="We will walk you through how this programme was shaped and what a version for your organisation would look like."
      />
    </>
  );
}
