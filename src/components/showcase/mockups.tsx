import type { ReactNode } from "react";

// Purpose-built illustrative UI for the quotation-workflow concept. All content is sample
// content; prices are drawn as neutral bars so no figure can be mistaken for real data.
// The frames are decorative: callers must describe them in a figcaption or nearby text.

export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative aspect-[9/18.5] w-full overflow-hidden rounded-[1.75rem] border border-line bg-surface p-1.5 shadow-device ${className}`}
    >
      <div className="h-full overflow-hidden rounded-[1.4rem] bg-surface">{children}</div>
    </div>
  );
}

export function DesktopFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden rounded-2xl border border-line bg-surface shadow-device-lg ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="ml-4 h-5 flex-1 rounded-full bg-surface-muted" />
      </div>
      {children}
    </div>
  );
}

function Bar({ w = "w-full", tone = "bg-surface-muted" }: { w?: string; tone?: string }) {
  return <span className={`block h-2 rounded-full ${w} ${tone}`} />;
}

function MiniNav() {
  return (
    <div className="flex items-center justify-between border-b border-line px-3 py-2.5">
      <span className="flex items-center gap-1.5 text-[0.6rem] font-semibold tracking-wide">
        <span className="h-2.5 w-2.5 rounded-sm bg-blue" />
        Example Co.
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="block h-0.5 w-3.5 bg-ink" />
        <span className="block h-0.5 w-3.5 bg-ink" />
        <span className="block h-0.5 w-3.5 bg-ink" />
      </span>
    </div>
  );
}

export function WebsiteScreen() {
  return (
    <div className="flex h-full flex-col">
      <MiniNav />
      <div className="flex flex-1 flex-col gap-2 p-3">
        <p className="text-[1.05rem] font-semibold leading-[1.1] tracking-tight">Know what the job will cost before we start.</p>
        <Bar w="w-11/12" />
        <Bar w="w-9/12" />
        <span className="mt-2 inline-flex w-fit rounded-full bg-action px-3 py-1.5 text-[0.55rem] font-semibold text-action-ink">
          Request a quote
        </span>
        <div className="mt-auto grid grid-cols-2 gap-1.5">
          <span className="h-14 rounded-lg bg-lilac/40" />
          <span className="h-14 rounded-lg bg-blue/40" />
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, active = false }: { label: string; value?: string; active?: boolean }) {
  return (
    <div>
      <span className="text-[0.55rem] text-muted">{label}</span>
      <span
        className={`mt-0.5 flex h-6 items-center rounded-md border px-2 text-[0.6rem] ${
          active ? "border-ink" : "border-line"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

export function RequestFormScreen() {
  return (
    <div className="flex h-full flex-col">
      <MiniNav />
      <div className="flex flex-1 flex-col gap-2 p-3">
        <span className="text-[0.55rem] text-muted">Step 2 of 3</span>
        <p className="text-[0.85rem] font-semibold leading-tight">Tell us about the job</p>
        <Field label="Job type" value="Repair" />
        <Field label="Area / postcode" value="Sample area" />
        <Field label="Preferred timing" value="Next two weeks" active />
        <div className="rounded-md border border-dashed border-line-strong p-2 text-center text-[0.55rem] text-muted">
          Add a photo (optional)
        </div>
        <span className="mt-auto rounded-full bg-action py-2 text-center text-[0.6rem] font-semibold text-action-ink">Review request</span>
      </div>
    </div>
  );
}

const statusTone: Record<string, string> = {
  New: "bg-blue",
  Reviewing: "bg-lilac",
  "Quote sent": "bg-rose",
  Accepted: "bg-lime",
};

export function StatusDot({ status }: { status: string }) {
  return <span className={`inline-block h-2 w-2 rounded-full ${statusTone[status] ?? "bg-line-strong"}`} />;
}

export function RequestListScreen({ highlightStatus }: { highlightStatus?: string }) {
  const rows = [
    { name: "Request 104", type: "Repair", status: highlightStatus ?? "Reviewing" },
    { name: "Request 103", type: "Installation", status: "New" },
    { name: "Request 102", type: "Inspection", status: "Quote sent" },
    { name: "Request 101", type: "Repair", status: "Accepted" },
  ];
  return (
    <div className="grid min-h-[16rem] grid-cols-[8rem_1fr] text-[0.7rem] sm:grid-cols-[10rem_1fr]">
      <div className="space-y-2 border-r border-line p-4">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em]">Example Co.</p>
        <p className="mt-3 rounded-md bg-surface-muted px-2 py-1.5 font-medium">Requests</p>
        <p className="px-2 py-1.5 text-muted">Quotes</p>
        <p className="px-2 py-1.5 text-muted">Settings</p>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">Quote requests</p>
          <span className="rounded-full border border-line px-2.5 py-1 text-[0.6rem]">Sample data</span>
        </div>
        <ul className="mt-3 divide-y divide-line">
          {rows.map((r, i) => (
            <li
              key={r.name}
              className={`grid grid-cols-[1fr_auto] items-center gap-2 py-2.5 sm:grid-cols-[1fr_6rem_6.5rem] ${
                i === 0 ? "-mx-2 rounded-md bg-surface-muted px-2" : ""
              }`}
            >
              <span className="font-medium">{r.name}</span>
              <span className="hidden text-muted sm:block">{r.type}</span>
              <span className="flex items-center gap-1.5 transition-all duration-500">
                <StatusDot status={r.status} />
                {r.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function QuoteSummaryScreen({ accepted = false }: { accepted?: boolean }) {
  return (
    <div className="flex h-full flex-col">
      <MiniNav />
      <div className="flex flex-1 flex-col gap-2.5 p-3">
        <span className="flex items-center gap-1.5 text-[0.55rem] text-muted">
          <StatusDot status={accepted ? "Accepted" : "Quote sent"} />
          {accepted ? "Accepted" : "Quote ready"}
        </span>
        <p className="text-[0.85rem] font-semibold leading-tight">Your quote</p>
        {["Labour", "Materials", "Call-out"].map((item) => (
          <div key={item} className="flex items-center justify-between border-b border-line pb-1.5 text-[0.6rem]">
            {item}
            <Bar w="w-10" tone="bg-line-strong" />
          </div>
        ))}
        <div className="flex items-center justify-between text-[0.65rem] font-semibold">
          Total
          <Bar w="w-14" tone="bg-ink" />
        </div>
        <span
          className={`mt-auto rounded-full py-2 text-center text-[0.6rem] font-semibold transition-colors duration-500 ${
            accepted ? "bg-lime text-ink" : "bg-action text-action-ink"
          }`}
        >
          {accepted ? "Accepted. We will be in touch" : "Accept quote"}
        </span>
      </div>
    </div>
  );
}
