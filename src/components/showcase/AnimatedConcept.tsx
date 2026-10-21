"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Pause, Play } from "lucide-react";
import { DesktopFrame, PhoneFrame, QuoteSummaryScreen, RequestFormScreen, RequestListScreen, WebsiteScreen } from "./mockups";

const steps = [
  { label: "Website", status: "New", text: "A prospect reads the services page on their phone." },
  { label: "Request", status: "New", text: "They send a structured quote request with the details the team needs." },
  { label: "Review", status: "Reviewing", text: "The team sees the request in a simple internal list." },
  { label: "Quote", status: "Quote sent", text: "A clear quote summary is sent to the customer." },
  { label: "Accept", status: "Accepted", text: "The customer accepts and the status updates for the team." },
] as const;

const STEP_MS = 2600;
const MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeMotion(onChange: () => void) {
  const mq = window.matchMedia(MOTION_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}
const prefersReducedMotion = () => window.matchMedia(MOTION_QUERY).matches;

/**
 * Lightweight code-driven animation of the quotation-workflow concept (not a video).
 * Starts paused when the user prefers reduced motion; always has a pause/play control
 * and step buttons so it can be explored without motion.
 */
export function AnimatedConcept({ className = "" }: { className?: string }) {
  const [step, setStep] = useState(0);
  // null = follow the motion preference; otherwise the visitor's explicit choice.
  const [choice, setChoice] = useState<boolean | null>(null);
  const reduced = useSyncExternalStore(subscribeMotion, prefersReducedMotion, () => true);
  const playing = choice ?? !reduced;
  const setPlaying = (next: (p: boolean) => boolean) => setChoice(next(playing));

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => setStep((s) => (s + 1) % steps.length), STEP_MS);
    return () => window.clearInterval(id);
  }, [playing]);

  const current = steps[step];

  return (
    <div className={className}>
      <div className="relative grid items-end gap-6 px-5 pt-10 sm:px-10 sm:pt-14 md:grid-cols-[1fr_15rem] md:gap-10 lg:px-16">
        <DesktopFrame className="hidden md:block">
          <RequestListScreen highlightStatus={current.status} />
        </DesktopFrame>
        <div className="relative mx-auto w-[13.5rem] translate-y-6 md:w-full">
          <PhoneFrame>
            <div className="relative h-full">
              {[<WebsiteScreen key="w" />, <RequestFormScreen key="r" />, <RequestFormScreen key="r2" />, <QuoteSummaryScreen key="q" />, <QuoteSummaryScreen key="a" accepted />].map(
                (screen, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-500 ${i === step ? "opacity-100" : "opacity-0"}`}
                  >
                    {screen}
                  </div>
                ),
              )}
            </div>
          </PhoneFrame>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-4 border-t border-line bg-surface/80 px-5 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause animated concept" : "Play animated concept"}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-action text-action-ink hover:bg-action-hover"
          >
            {playing ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
          </button>
          <p className="text-sm" aria-live={playing ? "off" : "polite"}>
            <span className="font-semibold">Animated concept · </span>
            <span className="text-muted">{current.text}</span>
          </p>
        </div>
        <ol className="flex flex-wrap gap-1.5" aria-label="Concept steps">
          {steps.map((s, i) => (
            <li key={s.label}>
              <button
                type="button"
                onClick={() => {
                  setChoice(false);
                  setStep(i);
                }}
                aria-current={i === step ? "step" : undefined}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  i === step ? "bg-action text-action-ink" : "border border-line-strong text-ink hover:border-ink"
                }`}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
