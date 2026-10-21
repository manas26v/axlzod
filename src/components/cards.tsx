import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/content/types";
import { Icon } from "./Icon";

export function ServiceCard({ service, index }: { service: Service; index?: number }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col rounded-2xl border border-line bg-paper p-6 transition-all hover:-translate-y-0.5 hover:border-charcoal hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-charcoal text-orange">
          <Icon name={service.icon} />
        </span>
        {index !== undefined && <span className="font-display text-sm text-ink-60">{String(index + 1).padStart(2, "0")}</span>}
      </div>
      <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
      <p className="mt-3 flex-1 text-ink-60">{service.short}</p>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-orange-ink">
        {service.linkLabel}{" "}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
