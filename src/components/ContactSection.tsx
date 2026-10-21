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
          <p className="mt-5 text-lg text-muted">{contactCopy.intro}</p>

          <div className="mt-12 border-t border-line pt-8">
            <h3 className="text-xl font-semibold">{contactCopy.nextSteps.title}</h3>
            <p className="mt-3 text-muted">{contactCopy.nextSteps.body}</p>
            {site.email && (
              <p className="mt-5 flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
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
