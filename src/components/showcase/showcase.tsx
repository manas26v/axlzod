import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { conceptLabel, type Concept } from "@/content/work";
import { DesktopFrame, PhoneFrame, RequestListScreen, WebsiteScreen } from "./mockups";

type PanelTone = "lilac" | "blue" | "lime" | "neutral";
const panelClass: Record<PanelTone, string> = {
  lilac: "panel-lilac",
  blue: "panel-blue",
  lime: "panel-lime",
  neutral: "panel-neutral",
};

/** The mandatory honesty label for every concept listing and detail. */
export function ConceptBadge({ className = "" }: { className?: string }) {
  return (
    <p className={`inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-3 py-1.5 text-xs font-medium ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-lilac" aria-hidden="true" />
      {conceptLabel}
    </p>
  );
}

/**
 * Wide rounded media panel with a soft accent wash. `caption` is required because the
 * mockups inside are decorative; the caption is what assistive tech reads.
 */
export function MediaPanel({
  children,
  caption,
  tone = "lilac",
  className = "",
}: {
  children: ReactNode;
  caption: string;
  tone?: PanelTone;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className={`overflow-hidden rounded-[1.75rem] ${panelClass[tone]}`}>{children}</div>
      <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}

/** Text beside a close-up media panel; alternate `reverse` to zig-zag down a page. */
export function MediaSplit({
  media,
  children,
  reverse = false,
}: {
  media: ReactNode;
  children: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <div className={reverse ? "lg:order-2" : ""}>{media}</div>
      <div className={reverse ? "lg:order-1" : ""}>{children}</div>
    </div>
  );
}

/** Static composition used on listings: desktop list with a phone overlapping. */
export function ConceptComposition() {
  return (
    <div className="relative px-5 pt-10 pb-0 sm:px-12 sm:pt-14">
      <DesktopFrame className="mr-16 sm:mr-28">
        <RequestListScreen />
      </DesktopFrame>
      <div className="absolute right-5 bottom-[-2rem] w-28 sm:right-12 sm:w-40">
        <PhoneFrame>
          <WebsiteScreen />
        </PhoneFrame>
      </div>
    </div>
  );
}

export function ConceptCard({ concept }: { concept: Concept }) {
  return (
    <article className="group">
      <Link href={`/work/${concept.slug}`} className="block rounded-[1.75rem]">
        <MediaPanel tone="blue" caption="Illustrative screens built for this concept. Sample content only.">
          <div className="pb-8">
            <ConceptComposition />
          </div>
        </MediaPanel>
        <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <ConceptBadge />
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{concept.title}</h2>
            <p className="mt-3 max-w-2xl text-lg text-muted">{concept.short}</p>
          </div>
          <span className="inline-flex items-center gap-2 font-medium underline-offset-4 group-hover:underline">
            Read the concept
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
