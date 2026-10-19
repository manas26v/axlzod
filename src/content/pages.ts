// Page-level copy (headings, intros, section text). Data collections live in ./data.ts.

export const stats = [
  { value: "120+", label: "Products shipped" },
  { value: "40+", label: "AI systems in production" },
  { value: "12 wks", label: "Average MVP launch" },
  { value: "98%", label: "Client retention" },
];

export const clients = [
  "NovaHealth",
  "Fintrail",
  "Axis Manufacturing",
  "Retailly",
  "CargoOne",
  "GreenLedger",
  "EduSphere",
  "Metro Estates",
];

export const whyChooseUs = [
  { title: "AI-first approach", desc: "Every solution is designed with intelligence, automation and data leverage from day one." },
  { title: "Rapid MVP delivery", desc: "Discovery to production in 8 to 12 weeks with weekly demoable increments." },
  { title: "Enterprise architecture expertise", desc: "Domain-driven, event-based systems that survive a decade of change." },
  { title: "Scalable cloud solutions", desc: "Multi-region, autoscaling infrastructure with cost guardrails and full observability." },
  { title: "Agile development", desc: "Transparent sprints, shared boards and metrics you can audit at any time." },
  { title: "Long-term partnership", desc: "Teams that stay past launch: roadmap, SRE, optimisation and growth engineering." },
];

export const highlights = [
  { icon: "sparkles", title: "AI-first by design", desc: "Intelligence built into every solution" },
  { icon: "zap", title: "8 to 12 week MVPs", desc: "Weekly demoable increments" },
  { icon: "shield-check", title: "Enterprise-grade", desc: "SOC 2, HIPAA and PCI-aligned delivery" },
  { icon: "handshake", title: "Long-term partner", desc: "Teams that stay past launch" },
];

export const home = {
  hero: {
    eyebrow: "Human Ambition. Machine Speed.",
    title: "End-to-end AI & software services for ambitious teams",
    intro:
      "From strategy to shipped product, our teams design, build and scale AI-powered platforms, ERP and CRM systems, web and mobile apps — delivered as a service, on your timeline.",
    layers: ["Data", "Models", "Cloud", "Apps", "Analytics", "Security"],
    metrics: [
      { label: "Model throughput", value: "+42%" },
      { label: "Evals passing", value: "98%", note: "412 runs" },
    ],
  },
  trusted: {
    title: "Trusted by startups, SMEs and enterprises",
    sub: "The data, engineering and AI practice behind every product we ship.",
  },
  why: {
    eyebrow: "Why it matters",
    title: "Software has never been more complex. Shipping it has never mattered more.",
    body: "Models change monthly, platforms multiply and budgets tighten. For teams building across products and markets, every architecture decision carries more weight than ever. We bring the strategy, the engineers and the delivery discipline to make those decisions pay off.",
    points: [
      "Senior architects on the first call and every sprint after it",
      "Weekly demos, open metrics and a fixed budget you can plan around",
      "AI where it pays off, boring technology everywhere else",
    ],
  },
  approach: {
    eyebrow: "How we work",
    title: "An integrated approach to building software",
    intro:
      "From a validated data foundation, through applied AI, to the products your customers touch. One system built for accuracy, speed and scale.",
    pillars: [
      {
        eyebrow: "Product & platforms",
        title: "End-to-end product engineering",
        copy: "Web, mobile and SaaS experiences built on the platforms your teams already run, with one accountable team from first prototype to enterprise rollout.",
        points: ["Design system to production in one sprint", "Accessibility and performance budgets built in"],
        stat: "120+ products shipped",
      },
      {
        eyebrow: "AI & intelligence",
        title: "Actionable intelligence, built in",
        copy: "Retrieval, agents and evaluation pipelines turn your data into forecasts, recommendations and automations you can defend to your board.",
        points: ["Evals shipped with every model change", "Human review where the stakes demand it"],
        stat: "40+ AI systems in production",
      },
      {
        eyebrow: "Data foundation",
        title: "One validated model of the business",
        copy: "Pipelines, warehouses and governance that consolidate every source into a single, trustworthy foundation the layers above can rely on.",
        points: ["Lineage and access controls from day one", "Infrastructure as code on any cloud"],
        stat: "98% client retention",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Engineering capability across the full stack of transformation",
    intro: "Strategy, data, engineering and AI under one accountable team, from first prototype to enterprise rollout.",
  },
  chooseUs: {
    eyebrow: "Why choose us",
    title: "A partner built for outcomes, not billable hours",
    intro:
      "Senior-only teams, transparent delivery, and architecture decisions you can defend to your board. Six reasons clients stay.",
  },
  inside: {
    eyebrow: "Inside the work",
    title: "What a week with us actually looks like",
    intro: "Workshops on Monday, working software by Friday. A few frames from the studio and the screens.",
    frames: ["Pairing on production code", "Strategy before code", "Pipelines, evals and deploys", "Architecture reviews"],
    note: "Every engagement ships something usable in the first two weeks.",
  },
  process: { eyebrow: "Process", title: "A delivery model refined over 120+ launches" },
  industries: {
    title: "Domain depth where regulation and scale matter",
    intro: "Teams who have shipped in your sector, with the compliance and data shape already understood.",
  },
  work: { eyebrow: "Case studies", title: "Measured business impact, not vanity demos" },
  tech: {
    eyebrow: "Technology stack",
    title: "Battle-tested tooling, chosen for your context",
    intro: "Boring, proven technology at the bottom; the newest AI tooling only where it earns its place.",
  },
  testimonials: { title: "What our clients say" },
};

export const contactCopy = {
  title: "Let’s build something extraordinary",
  intro:
    "Tell us where you're headed. We'll come back within one business day with an architecture point of view, a delivery shape and an honest estimate.",
  nextSteps: [
    "Contact you within 24 hours",
    "Clarify your expectations, business objectives and project requirements",
    "Develop and agree a proposal",
    "After that, we can start our partnership",
  ],
  assurances: ["Replies within one business day", "NDA-ready, no obligation"],
  whoYouMeet:
    "A senior architect joins every first conversation. No account managers, no hand-offs: the person you talk to is the person who shapes the work.",
  consent: "By submitting you agree to be contacted about your enquiry. We never share your details.",
  faqs: [
    {
      q: "Is the consultation really free?",
      a: "Yes. The first 45-minute session costs nothing and carries no obligation. It is how we decide together whether we are the right partner.",
    },
    { q: "Will you sign an NDA?", a: "Yes. Send yours or ask for our mutual NDA before the first call." },
    {
      q: "What information should I prepare?",
      a: "The outcome you are after, any constraints on timeline or budget, and what exists today. A rough description is enough to start.",
    },
    {
      q: "Do you work with early-stage startups?",
      a: "Yes. MVP development is one of our core services, and we structure engagements to fit pre-seed and seed budgets.",
    },
  ],
};

export const about = {
  title: "A partner built for outcomes, not billable hours",
  intro:
    "Axlzod helps startups, SMEs and enterprises design, build and scale intelligent digital products. Human Ambition. Machine Speed.",
  story: {
    eyebrow: "Our story",
    title: "Engineers first, consultants second",
    paragraphs: [
      "Axlzod was founded by engineers who had spent years inside consultancies watching decks replace working software. We set out to build a different kind of partner: one where the people in the sales conversation are the people who architect and ship the system.",
      "Today we work with founders launching their first product and with enterprise leaders modernising platforms that run entire businesses. In both cases the job is the same: understand the outcome, design the simplest system that achieves it, and deliver it with the rigour that production demands.",
      "We are AI-first because intelligence, automation and data leverage are now part of every serious product. We are engineering-led because AI only creates value when it is wired into systems that are reliable, secure and maintainable.",
    ],
  },
  inside: {
    eyebrow: "Inside Axlzod",
    title: "Engineers first. Here is what that looks like day to day.",
    intro: "No account managers, no hand-offs. The people in the first call are the people who architect, build and ship.",
  },
  journey: {
    eyebrow: "What working with us looks like",
    title: "The journey from first call to long-term partnership",
    steps: [
      { title: "First call", desc: "Senior architect, no sales deck" },
      { title: "Discovery", desc: "Scope, architecture, estimate" },
      { title: "Delivery", desc: "Weekly demos, open metrics" },
      { title: "Handover", desc: "Your team owns the system" },
      { title: "Partnership", desc: "Roadmap and growth engineering" },
    ],
  },
  values: { eyebrow: "Values", title: "What we hold ourselves to on every engagement" },
  why: { eyebrow: "Why choose us", title: "Six reasons clients stay with us" },
  cta: {
    title: "Let's talk about what you're building",
    body: "A free 45-minute session with a senior architect. No pitch deck, just an honest conversation about your goals and the fastest safe route to them.",
  },
};

export const processPage = {
  title: "A delivery model refined over 120+ launches",
  intro:
    "Six phases, each with a clear purpose, a fixed set of activities and deliverables you can hold us to. No surprises, no black boxes.",
  roadmapTitle: "Six milestones from first workshop to running at scale",
  layers: {
    title: "Each phase builds on the one below",
    intro:
      "Discovery fixes the ground truth, design and development build on it, and deployment and scale keep compounding the value.",
    items: [
      {
        eyebrow: "Discover & strategise",
        title: "The ground truth everything rests on",
        copy: "Workshops, audits and architecture decisions that turn an ambition into a scoped, estimated and de-risked plan.",
        meta: "Phases 1 to 2",
      },
      {
        eyebrow: "Design & develop",
        title: "Weekly demos, working software",
        copy: "Prototypes become production code in two-week increments, each one demoable and each one closer to the outcome.",
        meta: "Phases 3 to 4",
      },
      {
        eyebrow: "Deploy & scale",
        title: "Live, measured and improving",
        copy: "Staged rollouts, observability and continuous AI improvement, with the metric we agreed on day one visible to everyone.",
        meta: "Phases 5 to 6",
      },
    ],
  },
  models: {
    eyebrow: "Engagement models",
    title: "Choose the shape that fits your stage",
    intro:
      "Most clients start with a discovery sprint and step up into a build, a squad or a managed service. Every model uses the same six-phase process.",
    items: [
      {
        title: "Discovery sprint",
        duration: "2 to 4 weeks",
        desc: "A fixed-fee sprint that produces a validated scope, architecture and estimate. Credited against any build that follows.",
      },
      {
        title: "Fixed-scope build",
        duration: "8 to 16 weeks",
        desc: "A defined product or platform delivered against agreed milestones, with weekly demos and a fixed budget.",
      },
      {
        title: "Dedicated squad",
        duration: "Quarterly",
        desc: "A cross-functional team embedded in your organisation, committed to roadmap outcomes and scaled each quarter.",
      },
      {
        title: "Managed service",
        duration: "Ongoing",
        desc: "SRE, optimisation and continuous AI improvement for platforms we built or inherited, with defined SLAs.",
      },
    ],
  },
  sprint: {
    eyebrow: "A sprint, in frames",
    title: "Two weeks from workshop to working software",
    intro:
      "Discovery on the whiteboard, code in the open, and a dashboard showing the metric we agreed on before we started.",
  },
  cta: {
    title: "Start with a discovery sprint",
    body: "Two to four weeks to a validated scope, architecture and estimate. Fixed fee, credited against the build.",
  },
};

export const technologyPage = {
  title: "Battle-tested tooling, chosen for your context",
  intro:
    "We are fluent across the modern stack and opinionated about when to use each part of it. Here is what we build with, and how we decide.",
  reference: [
    { layer: "Experience", tools: "React, Next.js, React Native", tags: ["Web", "Mobile", "Portals"] },
    { layer: "Edge & API", tools: "Edge rendering, rate limits, SSO", tags: ["Gateway", "Auth", "GraphQL / REST"] },
    { layer: "Domain services", tools: "NestJS, Java, .NET, Kafka", tags: ["Workflows", "Events"] },
    { layer: "AI layer", tools: "OpenAI, Anthropic, LangChain", tags: ["LLM apps", "RAG", "Agents", "Evals"] },
    { layer: "Data", tools: "dbt, Snowflake, Redis", tags: ["PostgreSQL", "Warehouse", "Vector DB"] },
    { layer: "Cloud", tools: "AWS, Azure, GCP, Terraform", tags: ["Kubernetes", "IaC", "Observability"] },
  ],
  layers: {
    title: "A reference stack, layer by layer",
    intro: "Boring, proven technology at the bottom; the newest AI tooling only where it earns its place at the top.",
    items: [
      {
        eyebrow: "Experience layer",
        title: "Fast, accessible front ends",
        copy: "React and TypeScript on the web, React Native and native where it matters, with Core Web Vitals budgets built into the definition of done.",
      },
      {
        eyebrow: "AI & data layer",
        title: "Models, retrieval and evaluation",
        copy: "LLM orchestration, vector search and evaluation harnesses that keep quality measurable as models change underneath you.",
      },
      {
        eyebrow: "Cloud foundation",
        title: "Infrastructure as code, everywhere",
        copy: "AWS, Azure or GCP with Terraform, containers and CI/CD pipelines that make environments reproducible and hand-over painless.",
      },
    ],
  },
  choose: {
    eyebrow: "How we choose",
    title: "Every stack decision is a documented choice",
    intro:
      "We start from your constraints, compare a small number of viable options, prove the risky parts with a spike, and record the decision so anyone can understand why it was made.",
    flow: [
      { title: "Your constraints", desc: "Team skills, hosting, compliance, budget" },
      { title: "Option A", desc: "Managed platform" },
      { title: "Option B", desc: "Open-source stack" },
      { title: "Option C", desc: "Hybrid" },
      { title: "Decision record", desc: "Spiked, costed and written down as an ADR" },
    ],
    principles: [
      { title: "Fit over fashion", desc: "We choose tools for your team, hosting and constraints, not for our portfolio. Boring technology wins more often than not." },
      { title: "Secure by default", desc: "Every stack we recommend has a mature security posture, an active community and a clear upgrade path." },
      { title: "Measured performance", desc: "Performance budgets, load tests and Core Web Vitals targets are part of the definition of done." },
      { title: "Built to hand over", desc: "We favour widely adopted technologies so your team, or any capable team, can own the system after us." },
    ],
  },
  practice: {
    eyebrow: "Tooling in practice",
    title: "Boring where it should be, sharp where it counts",
    intro: "Terraform, containers and pipelines underneath; evaluation harnesses and observability on top of every model we ship.",
  },
  cta: {
    title: "Need an independent view on your stack?",
    body: "Our architecture reviews take two to four weeks and produce a risk register and a sequenced roadmap your team can act on immediately.",
  },
};

export const servicesPage = {
  title: "Everything it takes to ship intelligent products",
  intro:
    "Strategy, design, engineering, data and AI under one accountable team. Pick a single capability or combine them into an end-to-end programme.",
  layers: {
    title: "Layers that assemble into one product",
    intro:
      "Every engagement is built bottom-up: a cloud foundation, a data and AI layer, the business platforms your teams run on, and the experiences your customers touch.",
    items: [
      {
        eyebrow: "Product experience",
        title: "What your customers touch",
        copy: "Web, mobile and SaaS products designed and engineered by the same team that built the platform underneath them.",
        meta: "3 product services · 12-week MVPs",
      },
      {
        eyebrow: "Business platforms & AI",
        title: "Systems your organisation runs on",
        copy: "Custom ERP, CRM and enterprise software with AI woven into the workflows, so intelligence reaches the people doing the work.",
        meta: "6 platform and AI services",
      },
      {
        eyebrow: "Cloud & data foundation",
        title: "Infrastructure that scales with you",
        copy: "Cloud, DevOps and data engineering that make everything above reliable, observable and cheap to change.",
        meta: "3 foundation services",
      },
    ],
  },
  groups: [
    {
      eyebrow: "AI & Strategy",
      title: "Decide where intelligence pays off, then build it into the business.",
      slugs: ["ai-consulting", "technology-strategy", "data-engineering"],
    },
    {
      eyebrow: "Product",
      title: "From first prototype to a product your customers depend on.",
      slugs: ["mvp-development", "product-engineering", "saas-development"],
    },
    {
      eyebrow: "Business platforms",
      title: "Core systems shaped around how your organisation actually runs.",
      slugs: ["custom-erp", "custom-crm", "enterprise-software"],
    },
    {
      eyebrow: "Engineering & Cloud",
      title: "Fast, resilient applications on infrastructure that scales with you.",
      slugs: ["web-development", "mobile-development", "cloud-devops"],
    },
  ],
  feel: {
    eyebrow: "How engagements feel",
    title: "One team, in the room and in the repo",
    intro: "Strategy sessions with the architects who will build it, then weekly demos of the real thing.",
  },
  cta: {
    title: "Not sure which service you need?",
    body: "Most engagements start with a short discovery conversation. Tell us the outcome you are after and we will shape the right combination.",
  },
};

export const industriesPage = {
  title: "Domain depth where regulation and scale matter",
  intro:
    "Every sector has its own data, rules and rhythms. We bring teams who have shipped in yours, so discovery starts from understanding rather than a blank page.",
  shipped: {
    eyebrow: "Sector work, up close",
    title: "Teams who have shipped in your domain",
    intro: "Discovery starts from understanding, not a blank page: regulation, data shape and the rhythms of the business.",
  },
  cta: {
    title: "Working in a sector we have not listed?",
    body: "Our engineering practices transfer across industries. Tell us about your domain and we will be honest about where we can help.",
  },
};

export const workPage = {
  title: "Measured business impact, not vanity demos",
  intro:
    "Every engagement is judged on the numbers that mattered to the client. Here is a selection, each with the challenge, the solution, the stack and the result.",
  headline: [
    { label: "Underwriting throughput", value: "6x", context: "FinTech lending platform" },
    { label: "No-show reduction", value: "48%", context: "Healthcare patient app" },
    { label: "Default rate reduction", value: "31%", context: "AI underwriting engine" },
    { label: "Inventory reduction", value: "22%", context: "Manufacturing ERP" },
  ],
  behind: {
    eyebrow: "Behind the results",
    title: "The numbers come from real systems in production",
    intro: "Every case study below was instrumented from week one, so the impact was measured, not estimated.",
  },
  value: {
    eyebrow: "Value from week one",
    title: "Impact is designed in, not reported after",
    intro:
      "We agree the metric before we start, instrument the product so it is measured continuously, and ship weekly against it. Value should be visible long before the final release.",
  },
  cta: {
    title: "Want a result like these?",
    body: "Tell us the metric you need to move. We will show you how similar programmes were shaped and what it would take for yours.",
  },
};
