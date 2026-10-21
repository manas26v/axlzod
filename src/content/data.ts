// Customer-facing service and process content. Source: docs/content/02-website-copy.md.
import type { Principle, ProcessPhase, Service } from "./types";

export const services: Service[] = [
  {
    slug: "business-websites",
    title: "Business websites",
    short: "A clear, mobile-friendly website built around your services and the action you want visitors to take.",
    linkLabel: "Explore business websites",
    seoTitle: "Business Website Development",
    seoDescription:
      "Clear service-business websites with content organization, mobile-friendly implementation and a practical handover. Discuss your website with Axlzod.",
    headline: "Help the right customers understand your business.",
    intro:
      "Your website should explain what you offer, answer the questions prospects ask and make the next step easy. We organize the content and build the agreed pages around those tasks.",
    sections: [
      {
        title: "A good fit when",
        items: [
          "Your current website makes your services difficult to understand.",
          "Most business comes through referrals, but prospects need a credible place to learn more.",
          "Mobile visitors struggle to find information or contact you.",
          "You need a manageable first website with a clear scope.",
        ],
      },
      {
        title: "What a typical project can include",
        items: [
          "An agreed page list and content outline.",
          "Core service messaging based on information you provide.",
          "Responsive implementation of the agreed pages.",
          "An enquiry route or connection to an existing booking tool.",
          "Page titles, descriptions and basic indexing setup.",
          "Agreed checks for navigation, forms and mobile use.",
          "Deployment support and a handover guide.",
        ],
        paragraphs: [
          "The proposal confirms page count, editing tools, integrations, revisions and final deliverables. Brand identity, photography, paid marketing, ongoing SEO and ecommerce are separate unless listed in scope.",
        ],
      },
      {
        title: "What we need from you",
        paragraphs: [
          "Accurate business details, service information, approved assets, access to relevant accounts and one person to consolidate feedback. We agree the approval schedule together.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does a website take?",
        a: "The schedule depends on scope, content readiness and integrations. We confirm an estimate after reviewing the work and identify anything that could delay launch.",
      },
      {
        q: "Can I edit it myself?",
        a: "If editing is a requirement, we include the agreed editing setup and explain which parts you can change. Some changes may still require development support.",
      },
      {
        q: "Will the website bring more customers?",
        a: "It can make your services easier to evaluate and enquiries easier to complete. Results also depend on traffic, demand, your offer and follow-up. We do not guarantee leads or search rankings.",
      },
      {
        q: "What costs continue after launch?",
        a: "Domain renewal, hosting, paid tools and any maintenance plan may carry separate charges. These are identified in the proposal where known and confirmed before purchase.",
      },
    ],
    cta: "Discuss your website",
    icon: "globe",
  },
  {
    slug: "product-planning",
    title: "Website and product planning",
    short: "An assessment of the problem, the options and the smallest useful next step before committing to a larger build.",
    linkLabel: "Explore product planning",
    seoTitle: "Website & Product Planning",
    seoDescription:
      "Clarify your users, scope and technical options before building a website or web product. Get a practical plan for the next step.",
    headline: "Decide what is worth building before you commit.",
    intro:
      "A planning engagement helps you turn a broad idea into a concrete decision. We examine the problem, compare workable options and identify a manageable first scope.",
    sections: [
      {
        title: "Questions we help answer",
        paragraphs: [
          "Who will use this? What task are they trying to complete? Could an existing tool solve it? What must the first version do? Which integrations or assumptions create risk? What will be needed to maintain it?",
        ],
      },
      {
        title: "Possible deliverables",
        items: [
          "An agreed problem statement.",
          "A user and workflow outline.",
          "Prioritized requirements.",
          "A build-versus-buy comparison.",
          "Technical risks and dependencies.",
          "Rough wireframes, where included.",
          "A phased delivery estimate.",
        ],
        paragraphs: [
          "The proposal defines the research depth. Customer recruitment, interviews, usability testing and detailed prototypes are included only where agreed. A plan reduces uncertainty; it does not guarantee market demand.",
        ],
      },
      {
        title: "Your next step stays your choice",
        paragraphs: [
          "The agreed planning documents can support a build with Axlzod, an internal team or another provider. Sometimes the right result is a smaller project or a decision to wait.",
        ],
      },
    ],
    faqs: [],
    cta: "Discuss a planning engagement",
    icon: "compass",
  },
  {
    slug: "web-products",
    title: "Focused web products",
    short: "A portal, dashboard or first product shaped around an agreed user journey and a realistic scope.",
    linkLabel: "Explore web products",
    seoTitle: "Web Product & Portal Development",
    seoDescription:
      "Plan and build a focused web application, client portal or internal dashboard around a specific business workflow. Explore Axlzod’s approach.",
    headline: "Build a first version around one important job.",
    intro:
      "A useful first product solves a specific problem for an identifiable user. We help define that workflow and build an agreed version you can test in real use.",
    sections: [
      {
        title: "Examples of projects to discuss",
        items: [
          "A portal for sharing project information with clients.",
          "An enquiry tracker for a small sales team.",
          "A dashboard that brings agreed operational information together.",
          "A first web-based service for a founder who has tested the need with prospective users.",
        ],
        paragraphs: ["These are examples of possible engagements, not claims about completed client work."],
      },
      {
        title: "What we agree before development",
        paragraphs: [
          "The main user journey, user roles, essential features, data requirements, integrations, acceptance criteria, deployment responsibility and ongoing operating costs. Uncertain requirements may need a planning engagement first.",
        ],
      },
      {
        title: "What is outside the default scope",
        paragraphs: [
          "Native mobile applications, complex ERP replacement, regulated decision systems, major data migrations and around-the-clock operational support require a separate assessment. We discuss specialist requirements before making delivery commitments.",
        ],
      },
      {
        title: "Build, learn and decide",
        paragraphs: [
          "We review progress at agreed checkpoints and distinguish essential fixes from new requests. After launch, real usage can inform the next phase; the first build is not a promise of product-market fit.",
        ],
      },
    ],
    faqs: [],
    cta: "Discuss your product idea",
    icon: "layers",
  },
  {
    slug: "maintenance",
    title: "Maintenance and improvements",
    short: "An optional plan for agreed updates and upkeep after launch, with the allowance and support arrangements written down.",
    linkLabel: "Explore maintenance",
    seoTitle: "Website Maintenance & Improvements",
    seoDescription:
      "Discuss a defined plan for website updates and upkeep, with an agreed allowance, support window and clear exclusions.",
    headline: "Plan for the work that comes after launch.",
    intro:
      "Websites and applications need attention over time. An agreed care plan gives you a defined way to request small changes and handle routine upkeep.",
    sections: [
      {
        title: "What a plan can include",
        paragraphs: [
          "Depending on the platform and scope, a plan can include software updates, agreed checks, backup verification, minor content changes and a maintenance summary. We confirm the monthly allowance, support hours, response arrangements, third-party fees and how larger requests are priced.",
        ],
      },
      {
        title: "What it does not include by default",
        paragraphs: [
          "A maintenance plan does not automatically include new features, major redesigns, incident recovery or 24/7 support. Existing systems may need an initial review before we can offer maintenance.",
        ],
      },
    ],
    faqs: [],
    cta: "Discuss ongoing support",
    icon: "wrench",
  },
];

export const processPhases: ProcessPhase[] = [
  {
    n: "01",
    title: "Understand",
    desc: "We discuss your business, users, current process, constraints and desired result. If the problem is unclear, we may recommend a separate planning engagement.",
    receive: "An initial fit assessment and a proposed next step.",
  },
  {
    n: "02",
    title: "Agree",
    desc: "We set out the deliverables, exclusions, assumptions, review rounds, schedule, payment milestones and acceptance criteria. Third-party tools and ongoing costs are identified where relevant.",
    receive: "A written proposal and scope.",
  },
  {
    n: "03",
    title: "Build and review",
    desc: "We share progress at agreed checkpoints. Your nominated contact consolidates feedback. Changes that affect scope, cost or timing are discussed before proceeding.",
    receive: "Reviewable work and a record of decisions.",
  },
  {
    n: "04",
    title: "Check, launch and hand over",
    desc: "We test the agreed user tasks, complete acceptance checks and coordinate launch. The handover covers agreed access, documentation, operating costs and support arrangements.",
    receive: "The agreed release and handover materials.",
  },
];

export const principles: Principle[] = [
  { title: "Understand the task first", desc: "Understand the task before choosing the technology." },
  { title: "Keep the first scope manageable", desc: "Start with the essential pages or workflow and add to them once the first release is in use." },
  { title: "Explain costs and trade-offs", desc: "Set out options, ongoing costs and their consequences so decisions are made with the facts in view." },
  { title: "Make progress visible", desc: "Share working progress at agreed checkpoints rather than at the end." },
  { title: "Document the result", desc: "Document what the client needs to run and maintain the result." },
];
