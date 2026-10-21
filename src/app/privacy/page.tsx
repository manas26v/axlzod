import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Privacy notice",
    description: `Privacy notice for ${site.name}. This notice is being prepared.`,
    path: "/privacy",
  }),
  // Placeholder until the owner supplies operator and processing facts (docs/content/03-content-audit.md).
  robots: { index: false, follow: true },
};

// TODO: replace with the final notice once the operator, providers, retention and jurisdiction are confirmed.
export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: "Privacy notice", path: "/privacy" }]} title="Privacy notice" />
      <Section tone="light">
        <div className="max-w-2xl space-y-5 text-ink-70">
          <p>This privacy notice is being prepared and is not yet complete.</p>
          <p>
            The enquiry form on this website does not submit information to us. It prepares a draft in your own email
            app, and nothing is shared until you choose to send that email.
          </p>
          <p>We use the information you share to respond to your project enquiry.</p>
        </div>
      </Section>
    </>
  );
}
