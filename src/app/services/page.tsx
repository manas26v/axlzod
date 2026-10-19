import type { Metadata } from "next";
import { services } from "@/content/data";
import { servicesPage } from "@/content/pages";
import { ServiceCard } from "@/components/cards";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Eyebrow, Section, SectionHeader } from "@/components/ui";
import { servicesBySlugs } from "@/lib/content";
import { buildMetadata, itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "AI & Software Development Services",
  description:
    "Twelve services spanning AI consulting, MVP and product engineering, custom ERP and CRM, web, mobile and SaaS development, cloud, data and technology strategy.",
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
          <ButtonLink href="/contact">Book Demo</ButtonLink>
          <ButtonLink href="/process" variant="light">
            How we work
          </ButtonLink>
        </div>
      </PageHero>

      <Section tone="mist" labelledBy="layers">
        <SectionHeader id="layers" title={servicesPage.layers.title} intro={servicesPage.layers.intro} />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {servicesPage.layers.items.map((l) => (
            <article key={l.title} className="rounded-2xl border border-line bg-paper p-8">
              <Eyebrow>{l.eyebrow}</Eyebrow>
              <h3 className="mt-4 text-2xl font-semibold">{l.title}</h3>
              <p className="mt-3 text-ink-60">{l.copy}</p>
              <p className="mt-6 border-t border-line pt-4 text-sm font-semibold text-charcoal">{l.meta}</p>
            </article>
          ))}
        </div>
      </Section>

      {servicesPage.groups.map((g, gi) => (
        <Section key={g.eyebrow} tone={gi % 2 ? "mist" : "light"} labelledBy={`group-${gi}`}>
          <SectionHeader id={`group-${gi}`} eyebrow={g.eyebrow} title={g.title} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {servicesBySlugs(g.slugs).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Section>
      ))}

      <Section tone="dark" labelledBy="feel">
        <SectionHeader id="feel" eyebrow={servicesPage.feel.eyebrow} title={servicesPage.feel.title} intro={servicesPage.feel.intro} onDark />
      </Section>

      <CtaBanner title={servicesPage.cta.title} body={servicesPage.cta.body} />
    </>
  );
}
