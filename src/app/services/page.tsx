import type { Metadata } from "next";
import { services } from "@/content/data";
import { servicesPage } from "@/content/pages";
import { ServiceCard } from "@/components/cards";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Section, SectionHeader } from "@/components/ui";
import { buildMetadata, itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: servicesPage.seo.title,
  description: servicesPage.seo.description,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={itemListJsonLd(
          "Services",
          services.map((s) => ({ name: s.title, path: `/services/${s.slug}` })),
        )}
      />
      <PageHero crumbs={[{ name: "Services", path: "/services" }]} eyebrow="Services" title={servicesPage.title} intro={servicesPage.intro}>
        <div className="flex flex-wrap gap-4">
          <ButtonLink href="/contact">Discuss your project</ButtonLink>
          <ButtonLink href="/process" variant="light">
            How we work
          </ButtonLink>
        </div>
      </PageHero>

      <Section tone="mist" labelledBy="services">
        <h2 id="services" className="sr-only">
          Services
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </Section>

      <Section tone="light" labelledBy="pricing">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeader id="pricing" title={servicesPage.pricing.title} />
          <p className="text-lg text-ink-70">{servicesPage.pricing.body}</p>
        </div>
      </Section>

      <CtaBanner title={servicesPage.cta.title} body={servicesPage.cta.body} action={servicesPage.cta.action} secondary={null} />
    </>
  );
}
