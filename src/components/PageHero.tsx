import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Container, Eyebrow } from "./ui";

/** Light editorial hero used on every inner page. Holds the page's single <h1>. */
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
    <section className="bg-canvas text-ink">
      <Container className="pt-12 pb-16 sm:pt-16 sm:pb-24">
        <Breadcrumbs items={crumbs} />
        <div className="mt-14 sm:mt-20">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="mt-5 max-w-5xl text-[2.6rem] leading-[1.02] font-semibold sm:text-6xl lg:text-7xl">{title}</h1>
        </div>
        {(intro || children) && (
          <div className="mt-12 grid gap-8 border-t border-line pt-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            {intro && <p className="max-w-2xl text-lg text-muted">{intro}</p>}
            {children && <div className="flex flex-wrap gap-3 lg:justify-end">{children}</div>}
          </div>
        )}
      </Container>
    </section>
  );
}
