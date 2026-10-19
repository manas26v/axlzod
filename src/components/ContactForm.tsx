"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/content/data";
import { site } from "@/lib/site";

const field =
  "mt-1.5 block w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-ink-60 focus:border-navy focus:outline-none focus:ring-2 focus:ring-orange/40";

// No backend yet: submitting opens the visitor's mail client with the enquiry pre-filled.
// TODO: replace with a server action / API route (Resend, HubSpot, etc.) when ready.
export function ContactForm({ consent }: { consent: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "");
    const subject = `Enquiry: ${get("service") || "New project"} — ${get("company") || get("name")}`;
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Company: ${get("company")}`,
      `Service: ${get("service")}`,
      "",
      get("details"),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-line bg-paper p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Full name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-medium">
          Work email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <label className="block text-sm font-medium">
        Company
        <input name="company" autoComplete="organization" className={field} />
      </label>
      <label className="block text-sm font-medium">
        Service of interest
        <select name="service" defaultValue="" className={field}>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
          <option>Something else</option>
        </select>
      </label>
      <label className="block text-sm font-medium">
        Project details
        <textarea name="details" rows={5} required className={field} />
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-orange px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-orange-600"
      >
        Book Demo
      </button>
      <p className="text-xs text-ink-60" role="status">
        {sent ? "Thanks — your email app should now be open with your enquiry ready to send." : consent}
      </p>
    </form>
  );
}
