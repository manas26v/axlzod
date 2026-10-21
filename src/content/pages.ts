// Page-level copy (headings, intros, section text). Data collections live in ./data.ts.
// Source: docs/content/02-website-copy.md. Editorial notes in that file are internal and stay out of this module.

export const home = {
  seo: {
    title: "Axlzod | Business Websites & Web Products",
    description:
      "Business websites, product planning and focused web applications for small businesses. Explore Axlzod’s approach to scope, delivery and handover.",
  },
  hero: {
    eyebrow: "Websites, software and practical advice",
    title: "A clearer website. A useful product. A practical next step.",
    intro:
      "Axlzod helps small businesses organize their website, plan a digital product and build the tools their customers or team need. We start with the problem, agree what matters and shape a manageable first release.",
    primary: "Discuss your project",
    secondary: "Find the right service",
  },
  goals: {
    title: "What are you trying to improve?",
    items: [
      {
        title: "Make your business easier to understand.",
        desc: "Give prospects a clear explanation of your services, reasons to choose you and a simple way to enquire.",
      },
      {
        title: "Work out what to build.",
        desc: "Turn an idea or an operational problem into a practical plan, with priorities, trade-offs and an estimate.",
      },
      {
        title: "Replace a frustrating manual process.",
        desc: "Explore a focused web tool for a specific task, such as tracking enquiries, sharing client information or managing an internal workflow.",
      },
    ],
  },
  services: { title: "Start with the work you need now" },
  agreement: {
    title: "Know what you are agreeing to",
    items: [
      {
        title: "A written scope.",
        desc: "Pages, features, responsibilities and exclusions are agreed before the build starts.",
      },
      {
        title: "Visible progress.",
        desc: "Review working progress at agreed checkpoints and resolve questions while changes are manageable.",
      },
      {
        title: "Practical technology choices.",
        desc: "We consider existing tools alongside custom development and explain the trade-offs.",
      },
      {
        title: "A usable handover.",
        desc: "Access, documentation and any ongoing costs are included in the project discussion from the beginning.",
      },
    ],
  },
  process: {
    title: "From first conversation to a working release",
    steps: [
      { title: "Understand the goal", desc: "Who needs help, what happens today and what a better result would look like." },
      { title: "Agree the first scope", desc: "Choose the essential pages or workflow, review risks and confirm a proposal." },
      { title: "Build and review", desc: "Work through agreed checkpoints, test the important tasks and manage changes openly." },
      { title: "Launch and hand over", desc: "Complete acceptance checks, share access and documentation, and agree any further support." },
    ],
  },
  studio: {
    title: "A new studio, with a straightforward approach",
    body: "Axlzod is a new independent studio. We are building our reputation through clear communication, manageable commitments and useful work. If a simpler tool can solve your problem, that is an option worth considering.",
  },
  cta: {
    title: "Have a project in mind?",
    body: "Tell us what your business does, what you want to improve and any timing or budget constraints. You do not need a finished brief to start a conversation.",
    action: "Discuss your project",
  },
};

export const servicesPage = {
  seo: {
    title: "Website & Product Development Services",
    description:
      "Explore business websites, product planning, focused web applications and maintenance. Start with a clear scope for the work your business needs.",
  },
  title: "Choose a useful next step for your business.",
  intro:
    "Some projects need a website. Others need a better process, a simple integration or a plan before development. We help you clarify the problem and choose an appropriate scope.",
  pricing: {
    title: "How projects are priced",
    body: "We quote against an agreed scope. The proposal explains what is included, review rounds, responsibilities, payment milestones and any expected third-party costs. New features or substantial changes are reviewed and priced before additional work begins.",
  },
  cta: {
    title: "Unsure which service fits?",
    body: "Describe what happens today and what you would like to change. We can discuss whether you need a website, an existing software tool, a focused build or a planning engagement first.",
    action: "Talk through your project",
  },
};

export const processPage = {
  seo: {
    title: "Our Project Process",
    description:
      "Understand Axlzod’s approach to project scope, reviews, testing, launch and handover before starting your website or web product.",
  },
  title: "Clear decisions at each stage of the project.",
  intro:
    "We agree the work and responsibilities before building, review progress at meaningful checkpoints and make launch requirements visible early.",
  shared: {
    title: "A shared responsibility",
    body: "Your feedback, content and access help keep the schedule realistic. We identify dependencies in the proposal and discuss changes when they arise.",
  },
  cta: { action: "Discuss your project" },
};

export const about = {
  seo: {
    title: "About Axlzod | Website & Product Studio",
    description:
      "Axlzod is a new independent studio helping small businesses plan websites and build focused web products with clear scope and practical handover.",
  },
  title: "A new studio, focused on useful work.",
  intro:
    "Axlzod is being built to help small businesses make practical decisions about websites and software, then turn an agreed plan into a working result.",
  why: {
    title: "Why we are starting",
    body: "A business owner should be able to understand what a project will deliver, what it requires from them and what happens after launch. That is the standard we want to build Axlzod around.",
  },
  values: { title: "What guides the work" },
  help: {
    title: "Where we can help",
    body: "We focus on service-business websites, website and product planning, and small web applications with a defined purpose. We assess each enquiry against the work and support it needs.",
  },
  cta: { action: "Tell us about your business" },
};

export const contactCopy = {
  seo: {
    title: "Discuss Your Project",
    description:
      "Tell Axlzod about your business, website or web-product idea, including your goals, timing and budget. Start with a practical conversation.",
  },
  title: "What would you like to improve?",
  intro:
    "Tell us what your business does, what happens today and what you want to change. A short description is enough to begin.",
  needs: ["Business website", "Planning or review", "Web product", "Maintenance", "Not sure"],
  detailsHelp:
    "Describe the problem, who it affects and any website or tools you already use. Please do not include passwords or sensitive customer information.",
  budgetHelp: "A rough range helps us suggest a realistic scope.",
  // Mail-client behaviour: the form only prepares a draft; nothing is sent from this site.
  button: "Prepare enquiry email",
  preNotice: "This form opens your email app with a draft. Review and send the email there to complete your enquiry.",
  postNotice: "Your email app should now be open. Your enquiry reaches us only after you send it there.",
  // Shown while no verified enquiry address is configured in src/lib/site.ts.
  unavailable:
    "Online enquiries are not open yet. A confirmed contact address will be published here once it is available.",
  privacy: "We use the information you share to respond to your project enquiry. See our privacy notice for details.",
  nextSteps: {
    title: "What happens next?",
    body: "We review your enquiry, discuss the problem and check whether the work fits. If it does, we agree whether the next step is a scoped proposal or a separate planning engagement.",
  },
  faqTitle: "Questions before you enquire",
  faqs: [
    {
      q: "Do I need a full brief?",
      a: "No. Describe the current problem and the result you want. We can identify what needs clarifying.",
    },
    {
      q: "Is the initial conversation paid?",
      a: "An introductory fit discussion has no fee. Research, audits, workshops and detailed planning are separate engagements when agreed.",
    },
    {
      q: "Can we discuss confidentiality?",
      a: "Yes. Let us know before sharing confidential material so appropriate terms can be discussed.",
    },
    {
      q: "Can you take over an existing project?",
      a: "We first need to review the system, access, documentation and outstanding work before committing to a scope.",
    },
  ],
};

export const footerCopy = {
  description: "Business websites, practical product planning and focused web applications.",
  action: "Discuss your project",
};
