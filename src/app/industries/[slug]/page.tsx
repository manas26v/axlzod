import { notFound } from "next/navigation";

// Industry detail pages are withdrawn (docs/content/03-content-audit.md); every slug is a 404.
export default function Page() {
  notFound();
}
