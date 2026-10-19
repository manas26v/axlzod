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
        <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">This page doesn’t exist</h1>
        <p className="mt-4 text-smoke">The link may be broken, or the page may have moved.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/services" variant="light">
            Browse services
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
