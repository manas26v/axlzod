import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Container, Eyebrow } from "./ui";

/** Dark hero used on every inner page. Holds the page's single <h1>. */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  intro,
  children,
}: {
  crumbs: { name: string; path: string }[];
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-charcoal-700/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 left-1/3 h-80 w-80 rounded-full bg-orange/20 blur-3xl"
      />
      <Container className="relative py-16 sm:py-24">
        <Breadcrumbs items={crumbs} />
        <div className="mt-10 max-w-4xl">
          {eyebrow && <Eyebrow onDark>{eyebrow}</Eyebrow>}
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl lg:text-6xl">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-lg text-smoke">{intro}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
