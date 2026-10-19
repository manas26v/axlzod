import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { contactCopy } from "@/content/pages";
import { ContactSection } from "@/components/ContactSection";
import { FaqList } from "@/components/FaqList";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us — Book a Free 45-Minute Consultation",
  description:
    "Book a free 45-minute strategy consultation with a senior architect. We reply within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Contact", path: "/contact" }]} eyebrow="Contact" title="Let's Build Something Extraordinary" intro={contactCopy.intro}>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-navy-100">
          {contactCopy.assurances.map((a) => (
            <li key={a} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-orange" aria-hidden="true" />
              {a}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-navy-100">
          <strong className="text-paper">Who you will meet. </strong>
          {contactCopy.whoYouMeet}
        </p>
      </PageHero>

      <ContactSection title="Tell us about the project" eyebrow="Start here" />

      <Section tone="light" labelledBy="faq">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeader id="faq" eyebrow="FAQ" title="Before you reach out" />
          <FaqList faqs={contactCopy.faqs} />
        </div>
      </Section>
    </>
  );
}
