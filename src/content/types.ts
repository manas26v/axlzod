export type IconName = string;

export interface Faq {
  q: string;
  a: string;
}

export interface TitleDesc {
  title: string;
  desc: string;
}

/** A titled block of service-page copy: paragraphs, a bullet list, or both. */
export interface ServiceSection {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

export interface Service {
  slug: string;
  title: string;
  /** Card summary used on Home, Services and related-service lists. */
  short: string;
  /** Card link label, e.g. "Explore business websites". */
  linkLabel: string;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  intro: string;
  sections: ServiceSection[];
  faqs: Faq[];
  cta: string;
  icon: IconName;
}

export interface ProcessPhase {
  n: string;
  title: string;
  desc: string;
  receive: string;
}

export type Principle = TitleDesc;
