import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

type Tone = "light" | "mist" | "charcoal" | "dark";
const toneClass: Record<Tone, string> = {
  light: "bg-paper text-ink",
  mist: "bg-mist text-ink",
  charcoal: "bg-charcoal text-paper",
  dark: "bg-ink text-paper",
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
    <section id={id} aria-labelledby={labelledBy} className={`py-16 sm:py-24 ${toneClass[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${
        onDark ? "text-orange" : "text-orange-ink"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  id,
  onDark = false,
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
        {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
        <Tag id={id} className={`mt-3 text-3xl font-semibold sm:text-4xl lg:text-5xl ${onDark ? "text-paper" : "text-ink"}`}>
          {title}
        </Tag>
        {intro && <p className={`mt-4 text-lg ${onDark ? "text-smoke" : "text-ink-60"}`}>{intro}</p>}
      </div>
      {action}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost" | "light";
const buttonClass: Record<ButtonVariant, string> = {
  primary: "bg-orange text-ink hover:bg-orange-600",
  secondary: "bg-charcoal text-paper hover:bg-charcoal-800",
  ghost: "border border-ink/15 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  light: "border border-paper/25 text-paper hover:bg-paper hover:text-ink",
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

export function TextLink({ href, children, onDark = false }: { href: string; children: ReactNode; onDark?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-sm font-semibold ${
        onDark ? "text-orange hover:text-paper" : "text-orange-ink hover:text-ink"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}

export function Chip({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
        onDark ? "bg-paper/10 text-paper" : "bg-fog text-charcoal"
      }`}
    >
      {children}
    </span>
  );
}

export function CheckList({ items, onDark = false }: { items: string[]; onDark?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" aria-hidden="true" />
          <span className={onDark ? "text-smoke" : "text-ink-70"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
