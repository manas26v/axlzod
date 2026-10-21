import { notFound } from "next/navigation";

// Withdrawn route (docs/content/03-content-audit.md): no social card is served.
export default function Image() {
  notFound();
}
