export type IconName = string;

export interface Faq {
  q: string;
  a: string;
}

export interface TitleDesc {
  title: string;
  desc: string;
}

export interface Service {
  slug: string;
  title: string;
  short: string;
  headline: string;
  overview: string[];
  capabilities: TitleDesc[];
  deliverables: string[];
  outcomes: string[];
  faqs: Faq[];
  industries: string[];
  icon: IconName;
  /** "How it works" — four steps from first conversation to running system. */
  steps: TitleDesc[];
}

export interface Industry {
  slug: string;
  label: string;
  headline: string;
  short: string;
  overview: string;
  challenges: string[];
  solutions: TitleDesc[];
  services: string[];
  compliance: string[];
  icon: IconName;
}

export interface CaseStudy {
  slug: string;
  tag: string;
  industry: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  approach: TitleDesc[];
  stack: string[];
  impact: string[];
  services: string[];
  duration: string;
  team: string;
}

export interface ProcessPhase {
  n: string;
  title: string;
  desc: string;
  duration: string;
  activities: string[];
  deliverables: string[];
}

export interface TechGroup {
  group: string;
  desc: string;
  items: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export type Principle = TitleDesc;
