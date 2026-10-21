import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

// Every tone renders on the light canvas; non-"light" tones add a hairline to separate sections.
// The dark names are kept so existing pages need no changes.
type Tone = "light" | "mist" | "charcoal" | "dark";
const toneClass: Record<Tone, string> = {
  light: "",
  mist: "border-t border-line",
  charcoal: "border-t border-line",
  dark: "border-t border-line",
};

export function Section({
  children,
  tone = "light",
  id,
  className = "",
  labelledBy,
}: {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`bg-canvas py-20 text-ink sm:py-32 ${className}`}>
      <Container>
        <div className={`${toneClass[tone]} ${tone === "light" ? "" : "pt-16 sm:pt-20"}`}>{children}</div>
      </Container>
    </section>
  );
}

/** `onDark` is accepted for compatibility; all sections are light in this theme. */
export function Eyebrow({ children }: { children: ReactNode; onDark?: boolean }) {
  return (
    <p className="inline-flex items-center gap-2 text-sm text-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-lilac" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  id,
  as: Tag = "h2",
  action,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  id?: string;
  onDark?: boolean;
  as?: "h1" | "h2";
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Tag id={id} className="mt-3 text-4xl leading-[1.05] font-semibold sm:text-5xl">
          {title}
        </Tag>
        {intro && <p className="mt-5 text-lg text-muted">{intro}</p>}
      </div>
      {action}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost" | "light";
const buttonClass: Record<ButtonVariant, string> = {
  primary: "bg-action text-action-ink hover:bg-action-hover",
  secondary: "bg-surface-muted text-ink hover:bg-line",
  ghost: "border border-line-strong text-ink hover:border-ink",
  light: "border border-line-strong text-ink hover:border-ink",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${buttonClass[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode; onDark?: boolean }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-1.5 font-medium text-ink underline-offset-4 hover:underline">
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}

export function Chip({ children }: { children: ReactNode; onDark?: boolean }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line-strong px-3 py-1 text-xs font-medium text-ink">
      {children}
    </span>
  );
}

export function CheckList({ items }: { items: string[]; onDark?: boolean }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <li key={item} className="flex gap-3 py-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lilac" aria-hidden="true" />
          <span className="text-muted">{item}</span>
        </li>
      ))}
    </ul>
  );
}
