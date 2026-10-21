// Showcase entries. Every entry here is a self-initiated concept made by Axlzod to show
// how we approach a brief. None is client work; never add outcomes, metrics or client names.

export const conceptLabel = "Self-initiated concept. Not a client engagement.";

export const workPage = {
  seo: {
    title: "Work: Self-Initiated Concepts",
    description:
      "Self-initiated Axlzod concepts that show how we plan a website and a focused web workflow. Not client engagements.",
  },
  eyebrow: "Work",
  title: "Concepts that show how we think.",
  intro:
    "Axlzod is a new studio, so we do not show client projects yet. Instead, we publish self-initiated concepts that walk through a realistic brief using the same approach we would offer you.",
};

export interface ConceptChapter {
  id: string;
  title: string;
  body: string[];
  /** Which of the four Axlzod services this chapter draws on. */
  service: string;
  serviceHref: string;
}

export interface Concept {
  slug: string;
  title: string;
  short: string;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  intro: string;
  facts: { label: string; value: string }[];
  chapters: ConceptChapter[];
  conceptual: string[];
  functional: string[];
}

export const concepts: Concept[] = [
  {
    slug: "quotation-workflow",
    title: "Quotation workflow for a small service business",
    short:
      "A business website with a structured quote request, paired with a simple internal view for reviewing and sending quotes.",
    seoTitle: "Concept: Quotation Workflow for a Small Service Business",
    seoDescription:
      "A self-initiated Axlzod concept: a business website and a focused quotation workflow, planned and designed to show our approach. Not a client engagement.",
    headline: "From a vague enquiry to a quote the customer can accept.",
    intro:
      "Many small service businesses receive enquiries by phone, email and contact form, then rebuild the same details by hand to prepare a quote. This concept explores how a clearer website and one focused web tool could make that journey easier for the customer and the team.",
    facts: [
      { label: "Type", value: "Self-initiated concept" },
      { label: "Imagined business", value: "A small local service business (illustrative)" },
      { label: "Services shown", value: "Planning, website, web product, maintenance" },
      { label: "Status", value: "Design concept, not a live product" },
    ],
    chapters: [
      {
        id: "plan",
        title: "Start with the job, not the screens",
        body: [
          "We began the way a planning engagement would: who needs help, what happens today and what a better result would look like. In this imagined business, enquiries arrive with missing details, so the owner calls back before any quote can be written.",
          "The first scope is deliberately small: one quote request path, one internal list and one quote summary. Everything else is listed as a later option rather than built up front.",
        ],
        service: "Website and product planning",
        serviceHref: "/services/product-planning",
      },
      {
        id: "website",
        title: "A website that explains, then asks the right questions",
        body: [
          "The public site gives prospects a clear explanation of the services and a simple way to enquire. The quote request asks only for details the team actually uses: job type, location, preferred timing and an optional photo.",
          "On a phone, each step fits on one screen, labels stay visible and the customer can review what they are sending before they submit.",
        ],
        service: "Business websites",
        serviceHref: "/services/business-websites",
      },
      {
        id: "product",
        title: "One focused tool for the team",
        body: [
          "Behind the website, a small internal view lists incoming requests with their status. The team opens a request, adds line items and sends a quote summary the customer can read on any device.",
          "Before any real build, we would agree user roles, essential features, data requirements, integrations and acceptance criteria in writing.",
        ],
        service: "Focused web products",
        serviceHref: "/services/web-products",
      },
      {
        id: "care",
        title: "Plan for what comes after launch",
        body: [
          "A tool like this needs attention over time. The concept assumes an optional care plan with an agreed allowance for updates, checks and small changes, and a handover that documents access and any ongoing costs.",
        ],
        service: "Maintenance and improvements",
        serviceHref: "/services/maintenance",
      },
    ],
    conceptual: [
      "The business, its customers and its enquiries are imagined for illustration.",
      "Screens, names, prices and statuses in the visuals are sample content.",
      "No research participants, launch, usage data or results exist for this concept.",
    ],
    functional: [
      "The visuals on this page are built in code as part of this website, not screenshots of a deployed product.",
      "The animated preview genuinely runs in your browser and can be paused; it stays still if you prefer reduced motion.",
      "The planning approach and scope boundaries reflect how Axlzod would run a real engagement.",
    ],
  },
];

export const getConcept = (slug: string) => concepts.find((c) => c.slug === slug);
