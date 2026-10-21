# Design variant: white studio (Ramotion-inspired)

## Theme controls

All colour lives in `src/app/theme.css` as semantic custom properties. `src/app/globals.css`
maps them to Tailwind tokens with `@theme inline`, so `bg-canvas`, `text-muted`, `border-line`
and so on always read the current value. To re-grade the site, edit `theme.css` only.

| Property | Role |
| --- | --- |
| `--canvas` | Page background (almost-white) |
| `--surface`, `--surface-muted` | Cards, mock screens, quiet fills |
| `--ink`, `--muted` | Body/headings and secondary copy (both AA on canvas) |
| `--subtle` | Decorative only; never essential text |
| `--line`, `--line-strong` | Hairline dividers; outlined pills and dotted rings |
| `--action-bg`, `--action-ink`, `--action-bg-hover` | Black pill buttons |
| `--accent-lilac/blue/lime/rose` | Markers and preview washes only, never body text |
| `--panel-lilac/blue/lime/neutral` | Wide media panel backgrounds |
| `--footer-bg/ink/muted/line` | Charcoal footer |
| `--focus`, `--focus-on-dark` | Keyboard focus outline (dark variant applies inside `.on-dark`) |
| `--selection-bg/ink` | Text selection |

Legacy token names (`paper`, `mist`, `charcoal`, `orange`, `orange-ink` …) are aliased to the
new properties so pages not yet restyled keep working. `orange` now resolves to the lime accent
(dark text on it stays AA); `orange-ink` resolves to ink. Remove the aliases once phase two is done.

`viewport.themeColor` in `src/app/layout.tsx` duplicates `--canvas` because metadata cannot read CSS.

## Reference adaptation

Reference: ramotion.com (hero and capability diagram screenshots supplied by the supervisor).
Adapted structure, not content:

- Almost-white canvas, spare header (wordmark left, centred links, black "Contact" pill right).
- Oversized, centred hero statement using Axlzod's existing hero copy.
- Full-width rounded preview panel with a soft lilac/blue wash below the hero. It shows an
  original, code-rendered quotation-workflow concept, not any reference project.
- Editorial two-column services intro.
- Concentric dotted "capability map" (`src/components/CapabilityMap.tsx`) rebuilt around Axlzod's
  four real services (inner black pills with coloured markers, linked) and items each service
  page already describes (outer outlined pills). Axis labels: Websites / Products.
- Large typographic contact footer with clean columns and fine dividers. No offices, clients or email
  (the inbox is still unverified, so contact stays disabled).

Not used: Ramotion's logo, wording, client names, screenshots or video. Clay screenshots were
supplied only as contrast and did not inform the palette.

## Showcase

- `/work` lists self-initiated concepts; `/work/quotation-workflow` is the detailed concept.
- Content: `src/content/work.ts`. Every listing and detail shows
  "Self-initiated concept. Not a client engagement." and the detail page separates what is
  conceptual from what is functional.
- Components: `src/components/showcase/` (`MediaPanel`, `MediaSplit`, `ConceptBadge`,
  `ConceptCard`, device frames and sample screens in `mockups.tsx`, `AnimatedConcept`).
- `AnimatedConcept` is a code-driven animation, labelled "Animated concept" (not video). It has a
  pause/play button and step buttons, starts paused under `prefers-reduced-motion`, and only
  announces step text when paused. Prices are drawn as neutral bars so no figure reads as real data.

## Shadows and generated images

Shadows are theme tokens too (`--elevation-soft/device/device-lg` → `shadow-soft`, `shadow-device`,
`shadow-device-lg`). Open Graph cards, apple-icon, manifest and `themeColor` cannot read CSS, so they
use `src/lib/brand-colors.ts`, which mirrors `theme.css`. The two static `icon.svg` files hard-code
ink `#232325` and lilac `#b7a6ff`. Update all three when re-grading.

## Phase status

Phase 1 (done): theme, header, footer, homepage, `/work`, concept detail, sitemap, nav.
Phase 2 (done): `PageHero`, `CtaBanner`, `ServiceCard`, `Section`/`Eyebrow`/`CheckList`/`Chip`,
breadcrumbs, FAQ, contact section/form, about values, process stages, 404, OG/icons. Every page
inherits the light editorial style through these shared components. Section tones `charcoal`/`dark`
now render light with a hairline rule. Industries and technology stay 404.

## Limitations

- Legacy dark tokens are aliased to light values (`charcoal` → ink, `smoke` → muted, `orange` → ink),
  so any remaining legacy class renders legibly but is not individually art-directed.
- The capability map uses absolute positioning only from `lg` (1024px) up; below that it is wrapped lists.
- Service detail and legal pages were restyled via shared components only; they have no bespoke media.
- Not verified here by build, browser or automated contrast checks; the supervisor runs those.


## Supervisor verification — 22 October 2026

Claude Code Opus 5.5 Medium authored the website changes. Supervisor supplied the user/reference screenshots, inspected rendered pages and ran verification; supervisor did not write website source. Reported cumulative Claude cost: USD 3.1372866. The configured USD 3 cap did not prevent a small final-request overrun. No further paid calls were made.

- Production build including TypeScript: passed.
- ESLint and git whitespace check: passed.
- 22 public routes/assets (pages, social images, icon and manifest): HTTP 200.
- 13 internal link destinations: passed.
- Five withdrawn/unknown routes: HTTP 404.
- All 13 public content pages checked at 375px: no document horizontal overflow.
- Homepage, showcase, inner-page and footer layouts visually inspected at desktop/phone sizes.
- Mobile menu open/close and animation pause state tested. Ramotion capability diagram additionally inspected at 1024px.
- Key text contrast pairs measured; this is not a comprehensive accessibility audit. Reduced-motion handling reviewed in source.
- Contact remains disabled pending a verified inbox; legal notices remain drafts.

Reference media was not copied into the website. Motion is a local animated concept, not an actual video production. Preview screen data is illustrative. Palette lives in src/app/theme.css; generated images/metadata use a documented mirrored token export and static icons require matching updates. Nothing was deployed or pushed.
