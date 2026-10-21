import type { Metadata } from "next";
import { contactCopy } from "@/content/pages";
import { ContactSection } from "@/components/ContactSection";
import { FaqList } from "@/components/FaqList";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: contactCopy.seo.title,
  description: contactCopy.seo.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Contact", path: "/contact" }]} eyebrow="Contact" title={contactCopy.title} intro={contactCopy.intro} />

      <ContactSection title="Tell us about the project" eyebrow="Start here" />

      <Section tone="light" labelledBy="faq">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeader id="faq" eyebrow="FAQ" title={contactCopy.faqTitle} />
          <FaqList faqs={contactCopy.faqs} />
        </div>
      </Section>
    </>
  );
}
