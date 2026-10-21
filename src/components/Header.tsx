"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { nav } from "@/lib/site";
import { Logo } from "./Logo";

// Contact is the pill on the right, so the centred list omits it.
const centreNav = nav.filter((n) => n.href !== "/contact");

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 bg-canvas/90 text-ink backdrop-blur supports-[backdrop-filter]:bg-canvas/75">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-full focus:bg-action focus:px-4 focus:py-2 focus:text-action-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto] items-center px-5 sm:px-8 md:grid-cols-[1fr_auto_1fr]">
        <Logo />
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {centreNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`text-[0.95rem] underline-offset-[6px] transition-colors hover:underline ${
                    isActive(item.href) ? "text-ink underline" : "text-ink/80"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-end gap-3">
          <Link
            href="/contact"
            aria-current={isActive("/contact") ? "page" : undefined}
            className="hidden items-center gap-1.5 rounded-full bg-action px-5 py-2.5 text-[0.95rem] font-medium text-action-ink transition-colors hover:bg-action-hover sm:inline-flex"
          >
            Contact
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line md:hidden" onClick={() => setOpen(false)}>
          <ul className="px-5 py-4">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-line last:border-0">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="block py-3 text-2xl font-semibold tracking-tight"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
