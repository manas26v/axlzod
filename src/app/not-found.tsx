import type { Metadata } from "next";
import { ButtonLink, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="bg-ink py-32 text-paper">
      <Container className="text-center">
        <p className="font-display text-8xl font-semibold text-orange">404</p>
        <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">This page could not be found.</h1>
        <p className="mt-4 text-smoke">Return to the homepage or explore our services.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/">Go to homepage</ButtonLink>
          <ButtonLink href="/services" variant="light">
            Explore services
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
