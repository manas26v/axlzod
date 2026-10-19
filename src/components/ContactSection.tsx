import { Mail, MapPin, Phone } from "lucide-react";
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

          <h3 className="mt-10 text-lg font-semibold">What we’ll do next?</h3>
          <ol className="mt-4 space-y-4">
            {contactCopy.nextSteps.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy text-sm font-semibold text-paper">
                  {i + 1}
                </span>
                <span className="pt-1 text-ink-70">{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-2xl bg-navy p-6 text-paper">
            <p className="font-semibold">Senior architect</p>
            <p className="text-sm text-navy-100">Joins every first conversation</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-orange" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="hover:text-orange">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-orange" aria-hidden="true" />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-orange">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-orange" aria-hidden="true" />
                {site.address.street}, {site.address.city}, {site.address.regionShort}, {site.address.country}
              </li>
            </ul>
          </div>
        </div>
        <ContactForm consent={contactCopy.consent} />
      </div>
    </Section>
  );
}
