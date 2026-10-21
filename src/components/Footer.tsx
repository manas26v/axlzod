import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/data";
import { footerCopy } from "@/content/pages";
import { nav, site } from "@/lib/site";
import { Container } from "./ui";

const footerServiceLabels: Record<string, string> = {
  "business-websites": "Business websites",
  "product-planning": "Product planning",
  "web-products": "Web products",
  maintenance: "Maintenance",
};

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-sm text-footer-muted">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-[0.95rem] text-footer-ink underline-offset-4 hover:underline">
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
    <footer className="on-dark bg-footer text-footer-ink">
      <Container className="pt-20 pb-10 sm:pt-28">
        <p className="text-sm text-footer-muted">{footerCopy.description}</p>
        <Link
          href="/contact"
          className="group mt-6 inline-flex items-end gap-3 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
        >
          <span className="underline decoration-footer-line decoration-2 underline-offset-[0.18em] transition-colors group-hover:decoration-lilac">
            {footerCopy.action}
          </span>
          <ArrowUpRight
            className="mb-1 h-10 w-10 shrink-0 text-lilac transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-14 sm:w-14"
            aria-hidden="true"
          />
        </Link>
        {site.email && (
          <address className="mt-6 not-italic">
            <a href={`mailto:${site.email}`} className="text-lg underline-offset-4 hover:underline">
              {site.email}
            </a>
          </address>
        )}

        <div className="mt-20 grid gap-10 border-t border-footer-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[1.05rem] font-semibold uppercase tracking-[0.18em]">{site.name}</p>
            <p className="mt-3 max-w-xs text-sm text-footer-muted">{site.tagline}</p>
          </div>
          <Column
            title="Services"
            links={services.map((s) => ({ label: footerServiceLabels[s.slug] ?? s.title, href: `/services/${s.slug}` }))}
          />
          <Column title="Company" links={nav.filter((n) => n.href !== "/services").map((n) => ({ label: n.label, href: n.href }))} />
          <Column
            title="Legal"
            links={[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ]}
          />
        </div>

        <div className="mt-14 border-t border-footer-line pt-6 text-sm text-footer-muted">
          <p>
            © {site.copyrightYear} {site.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
