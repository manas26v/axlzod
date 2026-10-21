import type { Metadata } from "next";
import { ButtonLink, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="bg-canvas py-28 text-ink sm:py-40">
      <Container className="text-center">
        <p className="text-sm text-muted">Error 404</p>
        <h1 className="mx-auto mt-5 max-w-4xl text-[2.6rem] leading-[1.02] font-semibold sm:text-7xl">
          This page could not be found.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">Return to the homepage or explore our services.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Go to homepage</ButtonLink>
          <ButtonLink href="/services" variant="ghost">
            Explore services
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
