"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { contactCopy as c } from "@/content/pages";
import { site } from "@/lib/site";

const field =
  "mt-1.5 block w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-ink-60 focus:border-charcoal focus:outline-none focus:ring-2 focus:ring-orange/40";
const help = "mt-1.5 block text-xs font-normal text-ink-60";

// No backend: submitting opens the visitor's mail client with a draft they must send themselves.
// The form stays disabled until a verified inbox is set in site.email.
// TODO: replace with a server action / API route once an enquiry backend is chosen; only then use
// "Send enquiry" and show a received message after confirmed delivery.
export function ContactForm() {
  const [prepared, setPrepared] = useState(false);
  const email = site.email;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "");
    const subject = `Enquiry: ${get("need") || "New project"} — ${get("company") || get("name")}`;
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Business or organization: ${get("company")}`,
      `What do you need?: ${get("need")}`,
      `Budget range: ${get("budget")}`,
      `Preferred timing: ${get("timing")}`,
      "",
      get("details"),
    ].join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-line bg-paper p-6 shadow-sm sm:p-8">
      <fieldset disabled={!email} className="space-y-5 disabled:opacity-60">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-medium">
            Name
            <input name="name" required autoComplete="name" className={field} />
          </label>
          <label className="block text-sm font-medium">
            Email
            <input name="email" type="email" required autoComplete="email" className={field} />
          </label>
        </div>
        <label className="block text-sm font-medium">
          Business or organization (optional)
          <input name="company" autoComplete="organization" className={field} />
        </label>
        <label className="block text-sm font-medium">
          What do you need?
          <select name="need" defaultValue="" required className={field}>
            <option value="" disabled>
              Select an option
            </option>
            {c.needs.map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium">
          Project details
          <textarea name="details" rows={5} required aria-describedby="details-help" className={field} />
          <span id="details-help" className={help}>
            {c.detailsHelp}
          </span>
        </label>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-medium">
            Budget range (optional)
            <input name="budget" aria-describedby="budget-help" className={field} />
            <span id="budget-help" className={help}>
              {c.budgetHelp}
            </span>
          </label>
          <label className="block text-sm font-medium">
            Preferred timing (optional)
            <input name="timing" className={field} />
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-orange px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-orange-600"
        >
          {c.button}
        </button>
      </fieldset>
      <p className="text-xs text-ink-60" role="status">
        {!email ? c.unavailable : prepared ? c.postNotice : c.preNotice}
      </p>
      <p className="text-xs text-ink-60">
        {c.privacy.replace("See our privacy notice for details.", "")}
        <Link href="/privacy" className="underline hover:text-ink">
          See our privacy notice for details.
        </Link>
      </p>
    </form>
  );
}
