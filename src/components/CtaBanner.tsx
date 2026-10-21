import { ButtonLink, Container } from "./ui";

export function CtaBanner({
  title,
  body,
  action = "Discuss your project",
  secondary = { label: "Explore services", href: "/services" },
}: {
  title: string;
  body?: string;
  action?: string;
  secondary?: { label: string; href: string } | null;
}) {
  return (
    <section className="bg-canvas py-20 sm:py-32">
      <Container>
        <div className="border-t border-line pt-16 text-center sm:pt-24">
          <h2 className="mx-auto max-w-3xl text-4xl leading-[1.05] font-semibold sm:text-6xl">{title}</h2>
          {body && <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">{body}</p>}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact">{action}</ButtonLink>
            {secondary && (
              <ButtonLink href={secondary.href} variant="ghost">
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
