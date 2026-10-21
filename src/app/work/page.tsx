import type { Metadata } from "next";
import { concepts, workPage } from "@/content/work";
import { ConceptCard } from "@/components/showcase/showcase";
import { Container } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: workPage.seo.title,
  description: workPage.seo.description,
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <Container className="pt-16 pb-14 text-center sm:pt-24">
        <p className="text-sm text-muted">{workPage.eyebrow}</p>
        <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-semibold leading-[1.02] sm:text-7xl">{workPage.title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">{workPage.intro}</p>
      </Container>
      <Container className="pb-24 sm:pb-32">
        <ul className="space-y-20">
          {concepts.map((c) => (
            <li key={c.slug}>
              <ConceptCard concept={c} />
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
