import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/content/types";
import { Icon } from "./Icon";

/** Editorial service entry: hairline top rule, number, icon, no boxed card. */
export function ServiceCard({ service, index }: { service: Service; index?: number }) {
  return (
    <Link href={`/services/${service.slug}`} className="group flex h-full flex-col border-t border-ink pt-6">
      <div className="flex items-center justify-between text-muted">
        <Icon name={service.icon} />
        {index !== undefined && <span className="text-sm">{String(index + 1).padStart(2, "0")}</span>}
      </div>
      <h3 className="mt-8 text-2xl font-semibold">{service.title}</h3>
      <p className="mt-3 flex-1 text-muted">{service.short}</p>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium underline-offset-4 group-hover:underline">
        {service.linkLabel}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
