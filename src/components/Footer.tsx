import Link from "next/link";
import { industries, services } from "@/content/data";
import { site } from "@/lib/site";
import { Container } from "./ui";
import { Logo } from "./Logo";

const build = ["ai-consulting", "mvp-development", "product-engineering", "custom-erp", "custom-crm", "enterprise-software"];
const scale = ["web-development", "mobile-development", "saas-development", "cloud-devops", "data-engineering", "technology-strategy"];

const company = [
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Technology", href: "/technology" },
  { label: "Case studies", href: "/work" },
  { label: "Contact", href: "/contact" },
];

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-wider text-orange">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-navy-100 transition-colors hover:text-paper">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const serviceLinks = (slugs: string[]) =>
  slugs.map((slug) => {
    const s = services.find((x) => x.slug === slug)!;
    return { label: s.title, href: `/services/${s.slug}` };
  });

export function Footer() {
  return (
    <footer className="bg-navy text-paper">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-navy-100">{site.tagline}</p>
            <address className="mt-6 space-y-2 text-sm not-italic text-navy-100">
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-orange">
                  {site.email}
                </a>
              </p>
              <p>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-orange">
                  {site.phone}
                </a>
              </p>
              <p>
                {site.address.street}, {site.address.city},<br />
                {site.address.regionShort}, {site.address.country}
              </p>
            </address>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-ink hover:bg-orange-600"
            >
              Book a free 45-minute session
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            <Column title="Company" links={company} />
            <Column
              title="Industries"
              links={industries.map((i) => ({ label: i.label, href: `/industries/${i.slug}` }))}
            />
            <Column title="Build" links={serviceLinks(build)} />
            <Column title="Scale" links={serviceLinks(scale)} />
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-paper/10 pt-8 text-sm text-navy-100 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.copyrightYear} {site.name}. {site.tagline}
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy" className="hover:text-paper">Privacy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-paper">Terms &amp; Conditions</Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
