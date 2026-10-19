# Axlzod — marketing site

Next.js 16 (App Router) + Tailwind CSS v4. Every page is statically generated.

```bash
npm install
npm run dev     # http://localhost:3010
npm run build && npm start
```

Set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) to the production domain before deploying.

## Where things live

| What | Where |
| --- | --- |
| Brand, contact details, nav | `src/lib/site.ts` |
| Services, industries, case studies, process, tech stack, testimonials | `src/content/data.ts` |
| Page copy (headings, intros, section text) | `src/content/pages.ts` |
| Colour tokens (black / white / orange) | `src/app/globals.css` (`@theme`) |
| Shared UI | `src/components/` |
| SEO helpers (metadata + JSON-LD) | `src/lib/seo.ts`, OG cards in `src/lib/og.tsx` |

## SEO built in

- Per-page `<title>`, meta description, keywords, canonical URL, Open Graph and Twitter tags
- Generated 1200×630 social cards for the site and for every service, industry and case study
- JSON-LD: Organization + ProfessionalService + WebSite (global), Service, FAQPage, BreadcrumbList, Article, HowTo, ItemList
- `sitemap.xml`, `robots.txt`, web manifest, SVG favicon + apple icon
- Unknown URLs return a real HTTP 404; the 404 page is `noindex`
- One `<h1>` per page, semantic landmarks, skip link, accessible FAQ accordions, AA-contrast colours
- Static HTML for all routes (fast LCP, crawlable without JS)

## Before launch

- [ ] Real email / phone / address in `src/lib/site.ts`, plus social profile URLs (`social`)
- [ ] Replace placeholder client names and testimonials (copied from the reference site) with real ones
- [ ] Real logo (`src/components/Logo.tsx`, `src/app/icon.svg`)
- [ ] Privacy and Terms copy (`src/app/privacy`, `src/app/terms`)
- [ ] Hook the contact form to a backend (it currently opens the visitor's mail app)
- [ ] Add Google Search Console / Bing verification in `src/app/layout.tsx` and submit `/sitemap.xml`
