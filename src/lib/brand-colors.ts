// Palette for generated images (Open Graph cards, apple-icon). ImageResponse cannot read CSS
// custom properties, so these mirror the matching values in src/app/theme.css. Keep them in sync.
// src/app/icon.svg and viewport.themeColor in src/app/layout.tsx also hard-code canvas/ink/lilac.
export const brandColors = {
  canvas: "#fafafa", // --canvas
  ink: "#232325", // --ink
  muted: "#5c5c63", // --muted
  line: "#e4e4e7", // --line
  lilac: "#b7a6ff", // --accent-lilac
  panel: "linear-gradient(135deg, #fafafa 0%, #ece8ff 60%, #dfe8ff 100%)", // close to --panel-lilac
} as const;
