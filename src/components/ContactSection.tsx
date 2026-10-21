import { Mail } from "lucide-react";
import { contactCopy } from "@/content/pages";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { Eyebrow, Section } from "./ui";

export function ContactSection({ title, eyebrow = "Contact" }: { title: string; eyebrow?: string }) {
  return (
    <Section tone="mist" id="contact" labelledBy="contact-title">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 id="contact-title" className="mt-3 text-3xl font-semibold sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-ink-60">{contactCopy.intro}</p>

          <div className="mt-10 rounded-2xl bg-charcoal p-6 text-paper">
            <h3 className="font-semibold">{contactCopy.nextSteps.title}</h3>
            <p className="mt-2 text-sm text-smoke">{contactCopy.nextSteps.body}</p>
            {site.email && (
              <p className="mt-5 flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-orange" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="hover:text-orange">
                  {site.email}
                </a>
              </p>
            )}
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
