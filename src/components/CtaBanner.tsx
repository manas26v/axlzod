import { ButtonLink, Container } from "./ui";

export function CtaBanner({
  title,
  body,
  primary = { label: "Book Demo", href: "/contact" },
  secondary = { label: "View our work", href: "/work" },
}: {
  title: string;
  body: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-14 text-paper sm:px-12 lg:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange/25 blur-3xl"
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-navy-100">{body}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href={primary.href}>{primary.label}</ButtonLink>
              <ButtonLink href={secondary.href} variant="light">
                {secondary.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
