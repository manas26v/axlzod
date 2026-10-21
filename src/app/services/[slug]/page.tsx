import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/data";
import { home } from "@/content/pages";
import { ServiceCard } from "@/components/cards";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, CheckList, Section, SectionHeader } from "@/components/ui";
import { getService } from "@/lib/content";
import { buildMetadata, faqJsonLd, serviceJsonLd } from "@/lib/seo";

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
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
    image: `/services/${service.slug}/opengraph-image`,
  });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      {service.faqs.length > 0 && <JsonLd data={faqJsonLd(service.faqs)} />}
      <PageHero
        crumbs={[
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
        eyebrow={service.title}
        title={service.headline}
        intro={service.intro}
      >
        <div className="flex flex-wrap gap-4">
          <ButtonLink href="/contact">{service.cta}</ButtonLink>
          <ButtonLink href="/process" variant="light">
            How we work
          </ButtonLink>
        </div>
      </PageHero>

      {service.sections.map((sec, i) => (
        <Section key={sec.title} tone={i % 2 ? "mist" : "light"} labelledBy={`section-${i}`}>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeader id={`section-${i}`} title={sec.title} />
            <div className="space-y-6 text-lg text-ink-70">
              {sec.items && <CheckList items={sec.items} />}
              {sec.paragraphs?.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </Section>
      ))}

      {service.faqs.length > 0 && (
        <Section tone={service.sections.length % 2 ? "mist" : "light"} labelledBy="faq">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <SectionHeader id="faq" eyebrow="FAQ" title="Common questions" />
            <FaqList faqs={service.faqs} />
          </div>
        </Section>
      )}

      <Section tone="light" labelledBy="other">
        <SectionHeader id="other" eyebrow="Explore" title="Other services" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {others.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      <CtaBanner title={home.cta.title} body={home.cta.body} action={service.cta} secondary={null} />
    </>
  );
}
