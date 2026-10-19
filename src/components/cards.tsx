import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy, Industry, ProcessPhase, Service, TechGroup, Testimonial } from "@/content/types";
import { serviceBadges } from "@/content/data";
import { splitImpact } from "@/lib/content";
import { Icon } from "./Icon";
import { Chip } from "./ui";

export function ServiceCard({ service, index }: { service: Service; index?: number }) {
  const badge = serviceBadges[service.slug];
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col rounded-2xl border border-line bg-paper p-6 transition-all hover:-translate-y-0.5 hover:border-navy hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-orange">
          <Icon name={service.icon} />
        </span>
        {index !== undefined && <span className="font-display text-sm text-ink-60">{String(index + 1).padStart(2, "0")}</span>}
      </div>
      <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
      {badge && (
        <span className="mt-2 w-fit rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-orange-ink">{badge}</span>
      )}
      <p className="mt-3 flex-1 text-ink-60">{service.short}</p>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-orange-ink">
        Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Link
      href={`/industries/${industry.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-paper/10 bg-navy-800 p-6 text-paper transition-colors hover:border-orange hover:bg-navy-700"
    >
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange text-ink">
        <Icon name={industry.icon} />
      </span>
      <p className="mt-6 text-xs font-medium uppercase tracking-wider text-orange">{industry.compliance.join(" · ")}</p>
      <h3 className="mt-2 text-xl font-semibold">{industry.label}</h3>
      <p className="mt-3 flex-1 text-sm text-navy-100">{industry.short}</p>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-orange">
        Explore {industry.label}
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  );
}

export function ImpactStats({ impact, onDark = false }: { impact: string[]; onDark?: boolean }) {
  return (
    <dl className="grid grid-cols-3 gap-4">
      {impact.map((item) => {
        const { value, label } = splitImpact(item);
        return (
          <div key={item} className="flex flex-col-reverse">
            <dt className={`text-xs ${onDark ? "text-navy-100" : "text-ink-60"}`}>{label}</dt>
            <dd className={`font-display text-2xl font-semibold sm:text-3xl ${onDark ? "text-orange" : "text-navy"}`}>{value}</dd>
          </div>
        );
      })}
    </dl>
  );
}

export function CaseStudyCard({ cs, featured = false }: { cs: CaseStudy; featured?: boolean }) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl p-6 sm:p-8 ${
        featured ? "bg-ink text-paper" : "border border-line bg-paper"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <Chip onDark={featured}>{cs.tag}</Chip>
        <Chip onDark={featured}>{cs.duration}</Chip>
      </div>
      <h3 className={`mt-5 font-semibold ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>
        <Link href={`/work/${cs.slug}`} className="hover:text-orange">
          {cs.title}
        </Link>
      </h3>
      <p className={`mt-3 flex-1 ${featured ? "text-navy-100" : "text-ink-60"}`}>{cs.summary}</p>
      <div className="mt-6">
        <ImpactStats impact={cs.impact} onDark={featured} />
      </div>
      {featured && (
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology stack">
          {cs.stack.map((t) => (
            <li key={t}>
              <Chip onDark>{t}</Chip>
            </li>
          ))}
        </ul>
      )}
      <Link
        href={`/work/${cs.slug}`}
        className={`mt-6 inline-flex items-center gap-1 text-sm font-semibold ${featured ? "text-orange" : "text-orange-ink"}`}
        aria-label={`Read the case study: ${cs.title}`}
      >
        Read the case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}

export function ProcessGrid({ phases }: { phases: ProcessPhase[] }) {
  return (
    <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {phases.map((p) => (
        <li key={p.n} className="flex flex-col rounded-2xl border border-line bg-paper p-6">
          <div className="flex items-center justify-between">
            <span className="font-display text-4xl font-semibold text-orange">{p.n}</span>
            <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy">{p.duration}</span>
          </div>
          <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
          <p className="mt-2 text-ink-60">{p.desc}</p>
          <div className="mt-5 grid gap-5 border-t border-line pt-5 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-navy">Activities</h4>
              <ul className="mt-2 space-y-1.5 text-sm text-ink-70">
                {p.activities.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-navy">Deliverables</h4>
              <ul className="mt-2 space-y-1.5 text-sm text-ink-70">
                {p.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function TechGrid({ groups }: { groups: TechGroup[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {groups.map((g) => (
        <div key={g.group} className="rounded-2xl border border-line bg-paper p-6">
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg font-semibold">{g.group}</h3>
            <span className="text-xs text-ink-60">{g.items.length} tools</span>
          </div>
          <p className="mt-2 text-sm text-ink-60">{g.desc}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {g.items.map((t) => (
              <li key={t}>
                <Chip>{t}</Chip>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function TestimonialCard({ t }: { t: Testimonial }) {
  const initials = t.name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <figure className="flex h-full flex-col rounded-2xl bg-navy-800 p-8 text-paper">
      <blockquote className="flex-1 font-display text-xl leading-relaxed">“{t.quote}”</blockquote>
      <figcaption className="mt-8 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-orange font-semibold text-ink" aria-hidden="true">
          {initials}
        </span>
        <span>
          <span className="block font-semibold">{t.name}</span>
          <span className="block text-sm text-navy-100">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function StatsBar({ stats, onDark = false }: { stats: { value: string; label: string }[]; onDark?: boolean }) {
  return (
    <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col-reverse border-l-2 border-orange pl-5">
          <dt className={`mt-1 text-sm ${onDark ? "text-navy-100" : "text-ink-60"}`}>{s.label}</dt>
          <dd className={`font-display text-4xl font-semibold sm:text-5xl ${onDark ? "text-paper" : "text-navy"}`}>{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
