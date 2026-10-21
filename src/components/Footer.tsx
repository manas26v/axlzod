import Link from "next/link";
import { services } from "@/content/data";
import { footerCopy } from "@/content/pages";
import { nav, site } from "@/lib/site";
import { Container } from "./ui";
import { Logo } from "./Logo";

const footerServiceLabels: Record<string, string> = {
  "business-websites": "Business websites",
  "product-planning": "Product planning",
  "web-products": "Web products",
  maintenance: "Maintenance",
};

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-wider text-orange">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-smoke transition-colors hover:text-paper">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-charcoal text-paper">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-smoke">{footerCopy.description}</p>
            {site.email && (
              <address className="mt-6 text-sm not-italic text-smoke">
                <a href={`mailto:${site.email}`} className="hover:text-orange">
                  {site.email}
                </a>
              </address>
            )}
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-ink hover:bg-orange-600"
            >
              {footerCopy.action}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-2">
            <Column
              title="Services"
              links={services.map((s) => ({ label: footerServiceLabels[s.slug] ?? s.title, href: `/services/${s.slug}` }))}
            />
            <Column title="Company" links={nav.filter((n) => n.href !== "/services").map((n) => ({ label: n.label, href: n.href }))} />
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-paper/10 pt-8 text-sm text-smoke sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.copyrightYear} {site.name}
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy" className="hover:text-paper">Privacy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-paper">Terms</Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
