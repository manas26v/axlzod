import Link from "next/link";
import { site } from "@/lib/site";

// Placeholder wordmark — swap for the real logo when it's ready.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label={`${site.name} home`} className={`inline-flex items-center gap-2 ${className}`}>
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-orange font-display text-lg font-bold text-ink">
        A
      </span>
      <span className="font-display text-xl font-semibold tracking-tight">
        axl<span className="text-orange">zod</span>
      </span>
    </Link>
  );
}
