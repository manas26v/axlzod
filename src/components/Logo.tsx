import Link from "next/link";
import { site } from "@/lib/site";

// Spaced uppercase wordmark with a small marker; placeholder until the real logo is ready.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={`inline-flex items-center gap-2 text-[1.05rem] font-semibold uppercase tracking-[0.18em] ${className}`}
    >
      <span className="h-2 w-2 rounded-full bg-lilac" aria-hidden="true" />
      {site.name}
    </Link>
  );
}
