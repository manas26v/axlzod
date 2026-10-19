// Content copied from the reference site. Edit freely — pages render from these arrays.
import type { Service, Industry, CaseStudy, ProcessPhase, TechGroup, Testimonial, Principle } from "./types";

export const services: Service[] = [
  {
    "slug": "ai-consulting",
    "title": "AI Consulting & Transformation",
    "short": "AI roadmaps, LLM architecture, RAG systems and agent workflows wired into your core operations.",
    "headline": "Turn AI ambition into systems that run your business",
    "overview": [
      "Most AI initiatives stall between a promising demo and a dependable production system. We close that gap with an engineering-led approach: we start from your data, your workflows and your risk profile, then design AI capabilities that fit the way your organisation actually operates.",
      "Our teams have shipped LLM applications, retrieval systems and autonomous agents into regulated environments. We bring the evaluation harnesses, guardrails and observability that make those systems safe to depend on."
    ],
    "capabilities": [
      {
        "title": "AI strategy & opportunity mapping",
        "desc": "Prioritised use-case portfolio with ROI, feasibility and risk scoring."
      },
      {
        "title": "LLM application architecture",
        "desc": "Model selection, prompt and context design, cost and latency budgets."
      },
      {
        "title": "Retrieval-augmented generation",
        "desc": "Document pipelines, embeddings, vector search and grounded answers with citations."
      },
      {
        "title": "Agentic workflows",
        "desc": "Tool-using agents with human-in-the-loop checkpoints for high-stakes actions."
      },
      {
        "title": "Evaluation & guardrails",
        "desc": "Golden datasets, automated evals, red-teaming and policy enforcement."
      },
      {
        "title": "MLOps & LLMOps",
        "desc": "Versioning, monitoring, drift detection and cost governance in production."
      }
    ],
    "deliverables": [
      "AI opportunity assessment and 12-month roadmap",
      "Reference architecture and data readiness report",
      "Production pilot with evaluation harness",
      "Governance, security and responsible-AI playbook"
    ],
    "outcomes": [
      "Working AI capability in production within one quarter",
      "Measurable cost or revenue impact tied to each use case",
      "Internal team enabled to own and extend the platform"
    ],
    "faqs": [
      {
        "q": "Do we need clean data before starting?",
        "a": "No. Data readiness is part of discovery. We identify the minimum data foundation required for the first use case and build from there."
      },
      {
        "q": "Which models do you work with?",
        "a": "We are model-agnostic and routinely deploy OpenAI, Anthropic and open-weight models. Selection is driven by accuracy, cost, latency and data residency requirements."
      },
      {
        "q": "How do you handle sensitive data?",
        "a": "We design for least-privilege access, private deployments where required, redaction pipelines and audit logging from day one."
      }
    ],
    "industries": [
      "fintech",
      "healthcare",
      "manufacturing",
      "retail"
    ],
    "icon": "brain-circuit",
    "steps": [
      {
        "title": "Assess",
        "desc": "Data, workflows and risk audit"
      },
      {
        "title": "Design",
        "desc": "Use cases, architecture, guardrails"
      },
      {
        "title": "Pilot",
        "desc": "Production pilot with evals"
      },
      {
        "title": "Scale",
        "desc": "Rollout, monitoring, enablement"
      }
    ]
  },
  {
    "slug": "mvp-development",
    "title": "MVP Development",
    "short": "Validated, investor-ready products shipped in weeks with a clean path to scale.",
    "headline": "From idea to a live product in eight to twelve weeks",
    "overview": [
      "An MVP is not a prototype. It is the smallest product that proves your business hypothesis with real users. We scope ruthlessly, design for the core job-to-be-done, and build on foundations you will not need to throw away when traction arrives.",
      "Founders work directly with a senior product engineer, a designer and an architect. Weekly demos keep the roadmap honest and give you material for investor conversations from the first sprint."
    ],
    "capabilities": [
      {
        "title": "Product discovery sprint",
        "desc": "Problem framing, user research, scope definition and a validated backlog."
      },
      {
        "title": "UX and UI design",
        "desc": "Clickable prototypes, design system and accessibility baked in."
      },
      {
        "title": "Full-stack build",
        "desc": "Modern web and mobile stacks with authentication, billing and analytics."
      },
      {
        "title": "AI-native features",
        "desc": "LLM and data features where they create a differentiated experience."
      },
      {
        "title": "Launch engineering",
        "desc": "Cloud setup, CI/CD, monitoring and app-store submission."
      },
      {
        "title": "Post-launch iteration",
        "desc": "Instrumentation, experiments and a roadmap driven by usage data."
      }
    ],
    "deliverables": [
      "Validated product scope and clickable prototype",
      "Production MVP with core user flows",
      "Deployment pipeline and monitoring",
      "Investor-ready technical documentation"
    ],
    "outcomes": [
      "Live product in market within 8 to 12 weeks",
      "Architecture that scales to Series A and beyond",
      "Usage data to inform the next round of investment"
    ],
    "faqs": [
      {
        "q": "What does an MVP engagement cost?",
        "a": "Fixed-scope MVPs are priced after a short discovery sprint. The sprint itself is a small, fixed fee that is credited against the build."
      },
      {
        "q": "Can you work with our existing designs?",
        "a": "Yes. We audit existing design work for feasibility and accessibility, then extend it rather than restart."
      },
      {
        "q": "Who owns the code?",
        "a": "You do. All source code, infrastructure and documentation are delivered to your repositories and accounts."
      }
    ],
    "industries": [
      "fintech",
      "healthcare",
      "education",
      "real-estate"
    ],
    "icon": "rocket",
    "steps": [
      {
        "title": "Discover",
        "desc": "Problem, users, scope"
      },
      {
        "title": "Prototype",
        "desc": "Clickable flows validated"
      },
      {
        "title": "Build",
        "desc": "Weekly demoable increments"
      },
      {
        "title": "Launch",
        "desc": "Live product and analytics"
      }
    ]
  },
  {
    "slug": "product-engineering",
    "title": "Product Engineering",
    "short": "Dedicated squads owning discovery, delivery, QA automation and continuous iteration.",
    "headline": "Senior product squads that own outcomes, not tickets",
    "overview": [
      "When you need to move faster than hiring allows, a dedicated product engineering squad gives you a fully formed team with a track record of shipping. Each squad includes product, design, engineering and QA capability, and integrates with your rituals and tooling.",
      "We measure ourselves on the metrics you care about: release frequency, defect rates, feature adoption and the roadmap milestones we commit to each quarter."
    ],
    "capabilities": [
      {
        "title": "Dedicated squads",
        "desc": "Cross-functional teams of four to eight, scaled up or down each quarter."
      },
      {
        "title": "Continuous discovery",
        "desc": "User interviews, analytics and experiments feeding the backlog every sprint."
      },
      {
        "title": "Quality engineering",
        "desc": "Automated test pyramids, contract testing and performance budgets."
      },
      {
        "title": "Platform modernisation",
        "desc": "Incremental migration of legacy monoliths without a big-bang rewrite."
      },
      {
        "title": "Developer experience",
        "desc": "Tooling, documentation and CI improvements that raise team velocity."
      },
      {
        "title": "Knowledge transfer",
        "desc": "Pairing, playbooks and hiring support so your team grows alongside ours."
      }
    ],
    "deliverables": [
      "Quarterly roadmap with committed outcomes",
      "Continuous releases with automated quality gates",
      "Engineering metrics dashboard",
      "Documentation and onboarding materials"
    ],
    "outcomes": [
      "Predictable delivery cadence within the first month",
      "Reduced defect escape rate and support load",
      "A codebase your own team is proud to inherit"
    ],
    "faqs": [
      {
        "q": "How do squads integrate with our team?",
        "a": "Squads join your stand-ups, planning and retros, use your repositories and communicate in your channels. We are an extension of your team, not a vendor behind a ticket queue."
      },
      {
        "q": "What is the minimum engagement?",
        "a": "Squads are engaged quarterly, with a 30-day notice period after the first quarter."
      },
      {
        "q": "Can we hire squad members?",
        "a": "Yes. Conversion to your payroll is part of our long-term partnership model."
      }
    ],
    "industries": [
      "fintech",
      "retail",
      "logistics",
      "education"
    ],
    "icon": "wrench",
    "steps": [
      {
        "title": "Embed",
        "desc": "Squad joins your rituals"
      },
      {
        "title": "Discover",
        "desc": "Continuous research and data"
      },
      {
        "title": "Deliver",
        "desc": "Automated quality gates"
      },
      {
        "title": "Improve",
        "desc": "Metrics-driven iteration"
      }
    ]
  },
  {
    "slug": "custom-erp",
    "title": "Custom ERP Development",
    "short": "Finance, inventory, production and procurement modules tailored to how you actually operate.",
    "headline": "An ERP shaped around your operation, not the other way round",
    "overview": [
      "Off-the-shelf ERPs force businesses into generic workflows and expensive customisation. We build modular ERP platforms around your real processes, integrating the systems you already depend on and leaving out the complexity you do not need.",
      "Our ERP work spans finance, inventory, production, procurement, HR and reporting, with AI-assisted forecasting and anomaly detection where it delivers measurable value."
    ],
    "capabilities": [
      {
        "title": "Process mapping",
        "desc": "Current-state and target-state workflows agreed with every department."
      },
      {
        "title": "Modular architecture",
        "desc": "Independently deployable modules with a shared data model and permissions."
      },
      {
        "title": "Integrations",
        "desc": "Accounting, banking, e-commerce, EDI, IoT and legacy system connectors."
      },
      {
        "title": "Workflow automation",
        "desc": "Approval chains, alerts and role-based dashboards."
      },
      {
        "title": "AI forecasting",
        "desc": "Demand, cash-flow and inventory forecasting on your historical data."
      },
      {
        "title": "Migration & training",
        "desc": "Data migration, cutover planning and role-based user training."
      }
    ],
    "deliverables": [
      "Process blueprint and module roadmap",
      "Production ERP with phased module rollout",
      "Integration layer and reporting suite",
      "Training programme and support runbook"
    ],
    "outcomes": [
      "A single source of truth across departments",
      "Faster close cycles and lower inventory carrying costs",
      "Licence-free ownership of your core system"
    ],
    "faqs": [
      {
        "q": "How long does a custom ERP take?",
        "a": "A first module typically goes live within three to four months, with further modules following in phases so the business is never disrupted by a big-bang switch."
      },
      {
        "q": "Can it replace our existing ERP gradually?",
        "a": "Yes. We integrate with the incumbent system and migrate module by module, retiring the legacy platform once parity is proven."
      },
      {
        "q": "Is a custom ERP more expensive than a licence?",
        "a": "Over a five-year horizon custom platforms are usually cheaper because they avoid per-seat licences and heavy customisation fees, while fitting the business exactly."
      }
    ],
    "industries": [
      "manufacturing",
      "logistics",
      "retail"
    ],
    "icon": "boxes",
    "steps": [
      {
        "title": "Map",
        "desc": "Current and target processes"
      },
      {
        "title": "Module 1",
        "desc": "Highest-impact module live"
      },
      {
        "title": "Integrate",
        "desc": "Finance, EDI, IoT, legacy"
      },
      {
        "title": "Retire",
        "desc": "Phase out legacy systems"
      }
    ]
  },
  {
    "slug": "custom-crm",
    "title": "Custom CRM Development",
    "short": "Pipeline, service and marketing automation with AI scoring and intelligent workflows.",
    "headline": "A CRM your sales and service teams will actually use",
    "overview": [
      "Generic CRMs become expensive data graveyards when they do not match how your teams sell and serve. We design CRM platforms around your pipeline stages, your customer lifecycle and your reporting needs, with automation that removes admin rather than adding it.",
      "AI lead scoring, conversation summarisation and next-best-action recommendations are built in where they help close more business."
    ],
    "capabilities": [
      {
        "title": "Sales pipeline",
        "desc": "Custom stages, forecasting, quoting and territory management."
      },
      {
        "title": "Customer service",
        "desc": "Omnichannel ticketing, SLAs, knowledge base and AI-assisted responses."
      },
      {
        "title": "Marketing automation",
        "desc": "Segmentation, campaigns, journeys and attribution reporting."
      },
      {
        "title": "AI intelligence",
        "desc": "Lead scoring, churn prediction and call and email summarisation."
      },
      {
        "title": "Integrations",
        "desc": "Email, telephony, ERP, billing and marketing platforms."
      },
      {
        "title": "Mobile CRM",
        "desc": "Field-ready apps with offline access and geolocation."
      }
    ],
    "deliverables": [
      "Customer lifecycle and data model design",
      "Production CRM with sales, service and marketing modules",
      "Automation and AI scoring engine",
      "Migration from legacy CRM and user onboarding"
    ],
    "outcomes": [
      "Higher pipeline visibility and forecast accuracy",
      "Less admin time per rep and per agent",
      "Customer data you fully own and control"
    ],
    "faqs": [
      {
        "q": "Why not Salesforce or HubSpot?",
        "a": "For many teams those are the right choice, and we implement them too. A custom CRM makes sense when your process is a differentiator, licence costs are high, or integration needs are unusual."
      },
      {
        "q": "Can you migrate our existing data?",
        "a": "Yes. Data migration, de-duplication and validation are part of every CRM engagement."
      },
      {
        "q": "Does it support GDPR and consent?",
        "a": "Consent management, data retention rules and subject-access tooling are built into the platform."
      }
    ],
    "industries": [
      "real-estate",
      "fintech",
      "education",
      "retail"
    ],
    "icon": "users",
    "steps": [
      {
        "title": "Model",
        "desc": "Lifecycle and data design"
      },
      {
        "title": "Build",
        "desc": "Sales, service, marketing"
      },
      {
        "title": "Automate",
        "desc": "AI scoring and workflows"
      },
      {
        "title": "Migrate",
        "desc": "Data and user onboarding"
      }
    ]
  },
  {
    "slug": "enterprise-software",
    "title": "Enterprise Software Development",
    "short": "Secure, scalable platforms for complex organisations with demanding compliance needs.",
    "headline": "Mission-critical software built to enterprise standards",
    "overview": [
      "Enterprise systems must satisfy security, compliance, integration and scale requirements that consumer apps never face. We design and build platforms that meet those standards from the first commit, with architecture decisions documented and defensible to your board and auditors.",
      "From internal portals and workflow systems to customer-facing platforms serving millions of transactions, we deliver software that stays maintainable for a decade."
    ],
    "capabilities": [
      {
        "title": "Solution architecture",
        "desc": "Domain-driven design, event-driven integration and clear service boundaries."
      },
      {
        "title": "Security & compliance",
        "desc": "SOC 2, ISO 27001, HIPAA and PCI-aligned engineering practices."
      },
      {
        "title": "Legacy modernisation",
        "desc": "Strangler-pattern migration from monoliths and mainframes."
      },
      {
        "title": "Workflow platforms",
        "desc": "Configurable approvals, case management and document processing."
      },
      {
        "title": "Integration",
        "desc": "API gateways, message brokers and enterprise service connectors."
      },
      {
        "title": "Performance engineering",
        "desc": "Load testing, capacity planning and resilience patterns."
      }
    ],
    "deliverables": [
      "Architecture decision records and threat model",
      "Production platform with automated compliance evidence",
      "Integration layer and API documentation",
      "Operational runbooks and SRE handover"
    ],
    "outcomes": [
      "Audit-ready systems with traceable controls",
      "Reduced operational risk from legacy platforms",
      "Platforms that absorb organisational change"
    ],
    "faqs": [
      {
        "q": "Do you work within our security policies?",
        "a": "Yes. We operate inside your identity, network and tooling constraints and can staff engineers with the clearances you require."
      },
      {
        "q": "How do you de-risk large programmes?",
        "a": "Thin vertical slices delivered early, architecture spikes for unknowns, and steering reviews with clear go and no-go criteria."
      },
      {
        "q": "Can you take over an existing codebase?",
        "a": "We begin with an assessment covering architecture, quality, security and delivery practice, then agree a stabilisation and improvement plan."
      }
    ],
    "industries": [
      "fintech",
      "healthcare",
      "manufacturing",
      "logistics"
    ],
    "icon": "server",
    "steps": [
      {
        "title": "Architect",
        "desc": "Domains, threat model, ADRs"
      },
      {
        "title": "Slice",
        "desc": "Thin vertical slices early"
      },
      {
        "title": "Harden",
        "desc": "Security, performance, SRE"
      },
      {
        "title": "Operate",
        "desc": "Runbooks and handover"
      }
    ]
  },
  {
    "slug": "web-development",
    "title": "Web Application Development",
    "short": "High-performance web platforms and SaaS products engineered for reliability at scale.",
    "headline": "Web platforms that are fast, accessible and built to last",
    "overview": [
      "We build web applications with the performance of native software and the reach of the browser. Our teams specialise in React and modern frameworks, server-side rendering, real-time features and accessibility, delivering experiences that score highly on every metric users and search engines care about.",
      "Whether it is a customer portal, an internal tool or a public platform, we engineer for reliability, observability and maintainability."
    ],
    "capabilities": [
      {
        "title": "Frontend engineering",
        "desc": "React, Next.js and Angular with design systems and component libraries."
      },
      {
        "title": "Backend & APIs",
        "desc": "Node.js, NestJS, Java and .NET services with REST and GraphQL interfaces."
      },
      {
        "title": "Real-time features",
        "desc": "WebSockets, collaborative editing and live dashboards."
      },
      {
        "title": "Performance",
        "desc": "Core Web Vitals budgets, edge rendering and caching strategies."
      },
      {
        "title": "Accessibility",
        "desc": "WCAG 2.2 AA compliance verified with automated and manual audits."
      },
      {
        "title": "Progressive web apps",
        "desc": "Installable, offline-capable experiences without an app store."
      }
    ],
    "deliverables": [
      "Technical design and component architecture",
      "Production web application with CI/CD",
      "Accessibility and performance audit reports",
      "Documentation and handover"
    ],
    "outcomes": [
      "Lighthouse scores above 90 across categories",
      "Lower bounce and higher conversion rates",
      "A codebase that onboards new engineers in days"
    ],
    "faqs": [
      {
        "q": "Which frameworks do you recommend?",
        "a": "We choose based on your team, hosting and requirements. React with Next.js is our most common recommendation, with Angular for organisations standardised on it."
      },
      {
        "q": "Do you handle hosting?",
        "a": "We set up cloud or edge hosting in your own accounts and can operate it under a managed service agreement."
      },
      {
        "q": "Can you improve an existing application?",
        "a": "Yes. Performance, accessibility and architecture remediation are common engagements."
      }
    ],
    "industries": [
      "retail",
      "education",
      "real-estate",
      "esg-sustainability"
    ],
    "icon": "globe",
    "steps": [
      {
        "title": "Design",
        "desc": "Components and system"
      },
      {
        "title": "Engineer",
        "desc": "Frontend, APIs, real-time"
      },
      {
        "title": "Optimise",
        "desc": "Vitals, accessibility audits"
      },
      {
        "title": "Ship",
        "desc": "Edge hosting and CI/CD"
      }
    ]
  },
  {
    "slug": "mobile-development",
    "title": "Mobile App Development",
    "short": "Native and cross-platform iOS and Android experiences with offline-first architecture.",
    "headline": "Mobile experiences your customers keep on their home screen",
    "overview": [
      "We design and build iOS and Android applications that feel native, work offline and integrate cleanly with your backend systems. Our teams choose between React Native, Flutter and fully native stacks based on your performance, device and team requirements.",
      "Every app ships with analytics, crash reporting, feature flags and a release pipeline so you can iterate with confidence after launch."
    ],
    "capabilities": [
      {
        "title": "Cross-platform",
        "desc": "React Native and Flutter with shared business logic and native modules."
      },
      {
        "title": "Native iOS & Android",
        "desc": "Swift and Kotlin for performance-critical or hardware-heavy apps."
      },
      {
        "title": "Offline-first",
        "desc": "Local data stores, sync engines and conflict resolution."
      },
      {
        "title": "Device integration",
        "desc": "Camera, biometrics, payments, Bluetooth and location services."
      },
      {
        "title": "App store operations",
        "desc": "Submission, review management and phased rollouts."
      },
      {
        "title": "Mobile AI",
        "desc": "On-device models and LLM-powered assistants with privacy controls."
      }
    ],
    "deliverables": [
      "UX research and interactive prototype",
      "Published iOS and Android applications",
      "Backend APIs and push notification services",
      "Release pipeline and monitoring"
    ],
    "outcomes": [
      "App store launch in as little as 12 weeks",
      "High retention through reliable, fast experiences",
      "One codebase for both platforms where appropriate"
    ],
    "faqs": [
      {
        "q": "Native or cross-platform?",
        "a": "Cross-platform suits most business applications. We recommend native when the app depends on advanced graphics, hardware or platform-specific features."
      },
      {
        "q": "Do you support existing apps?",
        "a": "Yes. We maintain, modernise and extend existing apps, including migrations from older frameworks."
      },
      {
        "q": "How are updates handled?",
        "a": "Over-the-air updates for non-native changes, and a managed release cadence through the app stores."
      }
    ],
    "industries": [
      "healthcare",
      "logistics",
      "retail",
      "real-estate"
    ],
    "icon": "smartphone",
    "steps": [
      {
        "title": "Research",
        "desc": "Journeys and prototype"
      },
      {
        "title": "Build",
        "desc": "Cross-platform or native"
      },
      {
        "title": "Test",
        "desc": "Devices, offline, stores"
      },
      {
        "title": "Release",
        "desc": "Stores and OTA updates"
      }
    ]
  },
  {
    "slug": "saas-development",
    "title": "SaaS Product Development",
    "short": "Multi-tenant platforms with billing, onboarding and analytics built for growth.",
    "headline": "SaaS platforms engineered for growth from day one",
    "overview": [
      "SaaS products succeed on more than features. Tenancy, billing, onboarding, security and observability determine whether a platform can grow without breaking. We build these foundations into every SaaS product so your team can focus on the value your customers pay for.",
      "We partner with founders and product leaders from first release through scale, adding enterprise features such as SSO, audit logs and role-based access as the market demands them."
    ],
    "capabilities": [
      {
        "title": "Multi-tenant architecture",
        "desc": "Isolation, data partitioning and per-tenant configuration."
      },
      {
        "title": "Billing & subscriptions",
        "desc": "Plans, metering, trials and dunning integrated with payment providers."
      },
      {
        "title": "Onboarding & growth",
        "desc": "Self-serve signup, product tours and activation analytics."
      },
      {
        "title": "Enterprise readiness",
        "desc": "SSO, SCIM, audit logs, RBAC and compliance evidence."
      },
      {
        "title": "Public APIs & integrations",
        "desc": "Developer portals, webhooks and marketplace connectors."
      },
      {
        "title": "Usage analytics",
        "desc": "Event pipelines and dashboards for product and revenue metrics."
      }
    ],
    "deliverables": [
      "SaaS architecture and tenancy design",
      "Production platform with billing and onboarding",
      "Admin console and analytics",
      "Security documentation for enterprise buyers"
    ],
    "outcomes": [
      "Faster time to first revenue",
      "Infrastructure costs that scale with usage",
      "Enterprise deals unblocked by security readiness"
    ],
    "faqs": [
      {
        "q": "Can you rebuild a SaaS platform without downtime?",
        "a": "Yes. We migrate tenants incrementally behind feature flags with rollback at every step."
      },
      {
        "q": "Which billing providers do you support?",
        "a": "Stripe, Paddle, Chargebee and custom billing engines for complex pricing models."
      },
      {
        "q": "Do you build AI features into SaaS?",
        "a": "Frequently. Copilots, search and automation features are common differentiators we design with cost controls in place."
      }
    ],
    "industries": [
      "fintech",
      "education",
      "esg-sustainability",
      "real-estate"
    ],
    "icon": "layers",
    "steps": [
      {
        "title": "Tenancy",
        "desc": "Isolation and configuration"
      },
      {
        "title": "Billing",
        "desc": "Plans, metering, trials"
      },
      {
        "title": "Onboard",
        "desc": "Self-serve activation"
      },
      {
        "title": "Enterprise",
        "desc": "SSO, audit, RBAC"
      }
    ]
  },
  {
    "slug": "cloud-devops",
    "title": "Cloud & DevOps Consulting",
    "short": "Cost-optimised AWS, Azure and GCP foundations with IaC, CI/CD and observability built in.",
    "headline": "Cloud foundations that are secure, observable and cost-efficient",
    "overview": [
      "Cloud spend and reliability are engineering problems. We design landing zones, automate infrastructure and build delivery pipelines that let teams ship daily without incidents, while keeping costs visible and under control.",
      "Our DevOps practice covers the full path from code commit to production, including security scanning, environment management and on-call readiness."
    ],
    "capabilities": [
      {
        "title": "Cloud architecture",
        "desc": "Multi-account landing zones, networking and identity on AWS, Azure and GCP."
      },
      {
        "title": "Infrastructure as code",
        "desc": "Terraform and Pulumi with policy-as-code guardrails."
      },
      {
        "title": "CI/CD pipelines",
        "desc": "Automated build, test, security scan and progressive delivery."
      },
      {
        "title": "Kubernetes & containers",
        "desc": "Cluster design, service mesh and workload optimisation."
      },
      {
        "title": "Observability",
        "desc": "Metrics, logs, traces and SLOs with actionable alerting."
      },
      {
        "title": "FinOps",
        "desc": "Cost allocation, rightsizing and commitment strategies."
      }
    ],
    "deliverables": [
      "Cloud readiness assessment and target architecture",
      "Automated infrastructure and pipelines",
      "Observability platform and on-call runbooks",
      "Cost optimisation report with quantified savings"
    ],
    "outcomes": [
      "Daily deployments with lower change failure rate",
      "Typical cloud cost reductions of 20 to 40 percent",
      "Audit-ready infrastructure with policy enforcement"
    ],
    "faqs": [
      {
        "q": "Can you migrate us to the cloud?",
        "a": "Yes. We plan and execute migrations from on-premise or between clouds with minimal downtime."
      },
      {
        "q": "Do you provide ongoing operations?",
        "a": "We offer managed SRE services with defined SLAs, or transition operations to your team with training."
      },
      {
        "q": "Which cloud do you recommend?",
        "a": "The one that best fits your workloads, existing skills and commercial agreements. We are certified across all three major providers."
      }
    ],
    "industries": [
      "fintech",
      "healthcare",
      "manufacturing",
      "logistics"
    ],
    "icon": "cloud",
    "steps": [
      {
        "title": "Assess",
        "desc": "Workloads and target state"
      },
      {
        "title": "Automate",
        "desc": "IaC and pipelines"
      },
      {
        "title": "Observe",
        "desc": "SLOs and alerting"
      },
      {
        "title": "Optimise",
        "desc": "FinOps and scaling"
      }
    ]
  },
  {
    "slug": "data-engineering",
    "title": "Data Engineering & Analytics",
    "short": "Reliable data platforms, pipelines and dashboards that make every team data-driven.",
    "headline": "Data platforms that turn raw events into trusted decisions",
    "overview": [
      "AI and analytics are only as good as the data beneath them. We build modern data platforms with reliable ingestion, well-modelled warehouses, governance and self-serve analytics, so leaders trust the numbers and teams can act on them.",
      "From real-time streaming to executive dashboards and machine-learning feature stores, we engineer data infrastructure as carefully as any production system."
    ],
    "capabilities": [
      {
        "title": "Data platform architecture",
        "desc": "Lakehouse and warehouse design on Snowflake, BigQuery, Databricks and Postgres."
      },
      {
        "title": "Pipelines & streaming",
        "desc": "Batch and real-time ingestion with dbt, Airflow, Kafka and Spark."
      },
      {
        "title": "Data modelling",
        "desc": "Dimensional and domain models with tested, documented transformations."
      },
      {
        "title": "Governance & quality",
        "desc": "Lineage, cataloguing, access control and automated data tests."
      },
      {
        "title": "Business intelligence",
        "desc": "Power BI, Looker and Metabase dashboards with defined metrics."
      },
      {
        "title": "ML feature stores",
        "desc": "Reusable, versioned features feeding AI systems in production."
      }
    ],
    "deliverables": [
      "Data strategy and platform architecture",
      "Production pipelines and data warehouse",
      "Governance framework and data catalogue",
      "Analytics dashboards and metric definitions"
    ],
    "outcomes": [
      "A single trusted source for reporting and AI",
      "Hours, not days, from event to insight",
      "Data teams freed from firefighting broken pipelines"
    ],
    "faqs": [
      {
        "q": "Do you work with our existing data tools?",
        "a": "Yes. We assess the current stack and recommend consolidation only where it reduces cost or complexity."
      },
      {
        "q": "How do you ensure data quality?",
        "a": "Automated tests at every pipeline stage, anomaly detection and clear data ownership."
      },
      {
        "q": "Can you prepare data for AI use cases?",
        "a": "Data readiness for AI is one of our most common engagements, covering collection, labelling, feature engineering and access controls."
      }
    ],
    "industries": [
      "retail",
      "manufacturing",
      "esg-sustainability",
      "fintech"
    ],
    "icon": "database",
    "steps": [
      {
        "title": "Ingest",
        "desc": "Batch and streaming sources"
      },
      {
        "title": "Model",
        "desc": "Tested transformations"
      },
      {
        "title": "Govern",
        "desc": "Lineage and quality"
      },
      {
        "title": "Serve",
        "desc": "BI and feature stores"
      }
    ]
  },
  {
    "slug": "technology-strategy",
    "title": "Technology Strategy & Architecture",
    "short": "Architecture reviews, technology roadmaps and due diligence for leaders making big bets.",
    "headline": "Technology decisions you can defend to your board",
    "overview": [
      "Technology leaders face decisions with long-lived consequences: platform choices, build-versus-buy, modernisation sequencing and AI investment. We bring independent, hands-on architecture expertise to those decisions, grounded in what we see delivering in production every day.",
      "Our strategy work is short, intense and actionable, producing roadmaps that engineering teams can start executing the following week."
    ],
    "capabilities": [
      {
        "title": "Architecture review",
        "desc": "Independent assessment of systems, risks and technical debt."
      },
      {
        "title": "Technology roadmap",
        "desc": "Sequenced initiatives tied to business outcomes and budgets."
      },
      {
        "title": "Build vs. buy analysis",
        "desc": "Total cost of ownership and capability fit for key platforms."
      },
      {
        "title": "Technical due diligence",
        "desc": "Investor and acquirer assessments of product, team and technology."
      },
      {
        "title": "Fractional CTO",
        "desc": "Senior leadership for scale-ups between hires or during transitions."
      },
      {
        "title": "Engineering effectiveness",
        "desc": "Delivery metrics, team topology and practice improvements."
      }
    ],
    "deliverables": [
      "Architecture assessment with risk register",
      "Technology roadmap and investment case",
      "Due diligence report",
      "Operating model recommendations"
    ],
    "outcomes": [
      "Clear, sequenced priorities for the next 12 to 24 months",
      "Reduced risk on major platform decisions",
      "Engineering investment aligned with business strategy"
    ],
    "faqs": [
      {
        "q": "How long does an architecture review take?",
        "a": "Typically two to four weeks, depending on system complexity and stakeholder availability."
      },
      {
        "q": "Do you implement your recommendations?",
        "a": "We can, but you are never obliged to. Recommendations are written to be executed by any capable team."
      },
      {
        "q": "Can you support fundraising or M&A?",
        "a": "Yes. We conduct technical due diligence for investors and acquirers and prepare companies for the process."
      }
    ],
    "industries": [
      "fintech",
      "healthcare",
      "manufacturing",
      "education"
    ],
    "icon": "compass",
    "steps": [
      {
        "title": "Review",
        "desc": "Systems, risks, debt"
      },
      {
        "title": "Options",
        "desc": "Build, buy, sequence"
      },
      {
        "title": "Roadmap",
        "desc": "Sequenced investment case"
      },
      {
        "title": "Execute",
        "desc": "Handover or fractional CTO"
      }
    ]
  }
];
export const industries: Industry[] = [
  {
    "slug": "healthcare",
    "label": "Healthcare",
    "headline": "Compliant digital health platforms that improve outcomes",
    "short": "Patient engagement, clinical workflow and AI triage built for HIPAA and GDPR environments.",
    "overview": "Healthcare organisations need software that clinicians trust, patients find easy and regulators accept. We build patient-facing apps, clinical workflow systems and AI assistants with privacy, auditability and interoperability designed in from the start.",
    "challenges": [
      "Fragmented patient data across EHRs and legacy systems",
      "Strict privacy and audit requirements for any AI use",
      "High no-show rates and poor engagement between visits",
      "Clinician burnout from administrative workload"
    ],
    "solutions": [
      {
        "title": "Patient engagement apps",
        "desc": "Scheduling, reminders, telehealth and post-visit care journeys."
      },
      {
        "title": "AI clinical assistants",
        "desc": "Triage, documentation and grounded clinical knowledge retrieval with full audit trails."
      },
      {
        "title": "Interoperability",
        "desc": "HL7 FHIR integrations connecting EHRs, labs and devices."
      },
      {
        "title": "Analytics",
        "desc": "Population health dashboards and operational reporting."
      }
    ],
    "services": [
      "ai-consulting",
      "mobile-development",
      "enterprise-software",
      "cloud-devops"
    ],
    "compliance": [
      "HIPAA",
      "GDPR",
      "HL7 FHIR",
      "ISO 27001"
    ],
    "icon": "heart-pulse"
  },
  {
    "slug": "fintech",
    "label": "FinTech",
    "headline": "Financial platforms with the speed of a startup and the controls of a bank",
    "short": "Lending, payments, wealth and compliance platforms with AI-driven risk and automation.",
    "overview": "Financial technology demands both rapid innovation and rigorous control. We build lending engines, payment platforms, wealth products and regulatory tooling with security, auditability and resilience engineered from the first sprint.",
    "challenges": [
      "Manual underwriting and compliance processes that cap growth",
      "Regulatory reporting across multiple jurisdictions",
      "Legacy core systems slowing product launches",
      "Fraud and risk detection at transaction speed"
    ],
    "solutions": [
      {
        "title": "AI underwriting & risk",
        "desc": "Document extraction, feature stores and explainable decision models with human review."
      },
      {
        "title": "Payments & ledgers",
        "desc": "Double-entry ledgers, reconciliation and payment provider integrations."
      },
      {
        "title": "RegTech automation",
        "desc": "KYC, AML screening and automated regulatory reporting."
      },
      {
        "title": "Modern core platforms",
        "desc": "Event-driven architectures replacing monolithic cores incrementally."
      }
    ],
    "services": [
      "ai-consulting",
      "enterprise-software",
      "saas-development",
      "data-engineering"
    ],
    "compliance": [
      "PCI DSS",
      "SOC 2",
      "GDPR",
      "PSD2"
    ],
    "icon": "landmark"
  },
  {
    "slug": "manufacturing",
    "label": "Manufacturing",
    "headline": "Connected operations from shop floor to boardroom",
    "short": "Custom ERP, IoT telemetry and demand forecasting for manufacturers modernising their operations.",
    "overview": "Manufacturers run on systems that were never designed to talk to each other. We connect production, inventory, procurement and quality into unified platforms, then add forecasting and predictive maintenance powered by the data those systems generate.",
    "challenges": [
      "Disconnected production, inventory and procurement systems",
      "No real-time visibility of shop-floor performance",
      "Excess inventory driven by poor demand forecasting",
      "Unplanned downtime from reactive maintenance"
    ],
    "solutions": [
      {
        "title": "Custom ERP",
        "desc": "Modular platforms unifying production, inventory, procurement and finance."
      },
      {
        "title": "IoT & telemetry",
        "desc": "Machine data pipelines feeding real-time dashboards and alerts."
      },
      {
        "title": "Demand forecasting",
        "desc": "AI models reducing stock-outs and carrying costs."
      },
      {
        "title": "Predictive maintenance",
        "desc": "Anomaly detection on sensor data to schedule interventions before failure."
      }
    ],
    "services": [
      "custom-erp",
      "data-engineering",
      "ai-consulting",
      "enterprise-software"
    ],
    "compliance": [
      "ISO 9001",
      "ISO 27001",
      "IEC 62443"
    ],
    "icon": "factory"
  },
  {
    "slug": "retail",
    "label": "Retail & E-commerce",
    "headline": "Commerce experiences that convert and operations that scale",
    "short": "Headless commerce, personalisation and unified inventory for omnichannel retailers.",
    "overview": "Retail margins are won on experience and operational precision. We build headless commerce platforms, AI-driven personalisation and unified inventory and order systems that serve customers consistently across every channel.",
    "challenges": [
      "Slow, monolithic storefronts limiting experimentation",
      "Inventory visibility split across channels and stores",
      "Generic experiences failing to convert returning customers",
      "Peak-season traffic spikes stressing infrastructure"
    ],
    "solutions": [
      {
        "title": "Headless commerce",
        "desc": "Composable storefronts with edge rendering and sub-second page loads."
      },
      {
        "title": "Personalisation",
        "desc": "Recommendation engines and AI search tuned to your catalogue."
      },
      {
        "title": "Unified inventory & OMS",
        "desc": "Single stock view across online, marketplaces and stores."
      },
      {
        "title": "Customer data platforms",
        "desc": "Consolidated profiles powering marketing and service."
      }
    ],
    "services": [
      "web-development",
      "custom-crm",
      "data-engineering",
      "cloud-devops"
    ],
    "compliance": [
      "PCI DSS",
      "GDPR",
      "WCAG 2.2"
    ],
    "icon": "shopping-bag"
  },
  {
    "slug": "logistics",
    "label": "Logistics & Supply Chain",
    "headline": "Real-time visibility and optimisation across the supply chain",
    "short": "Fleet, warehouse and shipment platforms with route optimisation and predictive ETAs.",
    "overview": "Logistics businesses compete on reliability and cost per shipment. We build transport management, warehouse and tracking platforms with the optimisation and real-time data that shave hours and margins off every delivery.",
    "challenges": [
      "Limited real-time shipment and fleet visibility",
      "Manual dispatch and route planning",
      "Inaccurate ETAs damaging customer trust",
      "Integration with carriers, customs and partner systems"
    ],
    "solutions": [
      {
        "title": "Transport management",
        "desc": "Dispatch, routing, driver apps and proof of delivery."
      },
      {
        "title": "Route optimisation",
        "desc": "AI-driven planning reducing mileage and improving on-time rates."
      },
      {
        "title": "Warehouse systems",
        "desc": "Inventory, picking and slotting with mobile scanning."
      },
      {
        "title": "Visibility platforms",
        "desc": "Customer tracking portals with predictive ETAs."
      }
    ],
    "services": [
      "mobile-development",
      "enterprise-software",
      "data-engineering",
      "product-engineering"
    ],
    "compliance": [
      "ISO 28000",
      "GDPR",
      "C-TPAT"
    ],
    "icon": "truck"
  },
  {
    "slug": "esg-sustainability",
    "label": "ESG & Sustainability",
    "headline": "Measurable sustainability with data you can audit",
    "short": "Carbon accounting, ESG reporting and supply-chain transparency platforms.",
    "overview": "Sustainability commitments now carry regulatory and investor consequences. We build platforms that collect emissions and ESG data from across the organisation and supply chain, calculate metrics against recognised standards and produce reports auditors accept.",
    "challenges": [
      "Emissions data scattered across suppliers and systems",
      "Evolving reporting frameworks such as CSRD and ISSB",
      "Manual, spreadsheet-based ESG reporting",
      "Lack of supply-chain transparency"
    ],
    "solutions": [
      {
        "title": "Carbon accounting",
        "desc": "Scope 1, 2 and 3 calculation engines with verified emission factors."
      },
      {
        "title": "ESG reporting",
        "desc": "Framework-aligned reporting with audit trails and evidence management."
      },
      {
        "title": "Supplier data collection",
        "desc": "Portals and integrations gathering supply-chain disclosures."
      },
      {
        "title": "Sustainability analytics",
        "desc": "Dashboards and scenario models for decarbonisation planning."
      }
    ],
    "services": [
      "saas-development",
      "data-engineering",
      "web-development",
      "ai-consulting"
    ],
    "compliance": [
      "CSRD",
      "GHG Protocol",
      "ISSB",
      "GRI"
    ],
    "icon": "leaf"
  },
  {
    "slug": "education",
    "label": "Education & EdTech",
    "headline": "Learning platforms that scale to every learner",
    "short": "LMS, adaptive learning and AI tutoring products for institutions and EdTech companies.",
    "overview": "Education technology must engage learners, support educators and satisfy institutional requirements around privacy and accessibility. We build learning platforms, assessment tools and AI tutoring experiences that work for classrooms of thirty and cohorts of millions.",
    "challenges": [
      "Low engagement and completion rates",
      "Accessibility requirements across diverse learners",
      "Integration with student information and identity systems",
      "Protecting minors' data under strict regulation"
    ],
    "solutions": [
      {
        "title": "Learning management",
        "desc": "Course delivery, assessment and progress tracking with LTI integrations."
      },
      {
        "title": "AI tutoring",
        "desc": "Guided, safe LLM assistants grounded in course material."
      },
      {
        "title": "Adaptive learning",
        "desc": "Personalised pathways driven by learner performance data."
      },
      {
        "title": "Institution platforms",
        "desc": "Admissions, scheduling and student engagement portals."
      }
    ],
    "services": [
      "saas-development",
      "mvp-development",
      "product-engineering",
      "custom-crm"
    ],
    "compliance": [
      "FERPA",
      "COPPA",
      "GDPR",
      "WCAG 2.2"
    ],
    "icon": "graduation-cap"
  },
  {
    "slug": "real-estate",
    "label": "Real Estate & PropTech",
    "headline": "Property platforms that connect tenants, owners and operators",
    "short": "Property management, tenant experience and transaction platforms for a digital-first market.",
    "overview": "Property businesses manage complex relationships across owners, tenants, agents and service providers. We build platforms that digitise those relationships, automate operations and surface the data needed to price, manage and grow portfolios.",
    "challenges": [
      "Manual leasing, maintenance and payment workflows",
      "Fragmented data across portfolios and property systems",
      "Poor tenant and buyer digital experience",
      "Slow, document-heavy transactions"
    ],
    "solutions": [
      {
        "title": "Property management",
        "desc": "Leasing, maintenance, accounting and owner reporting in one platform."
      },
      {
        "title": "Tenant & buyer apps",
        "desc": "Self-service portals for payments, requests and communication."
      },
      {
        "title": "Transaction platforms",
        "desc": "Digital listing, offer and document workflows with e-signature."
      },
      {
        "title": "Portfolio analytics",
        "desc": "Valuation, occupancy and performance dashboards with AI insights."
      }
    ],
    "services": [
      "custom-crm",
      "mobile-development",
      "web-development",
      "mvp-development"
    ],
    "compliance": [
      "GDPR",
      "AML",
      "SOC 2"
    ],
    "icon": "building-2"
  }
];
export const caseStudies: CaseStudy[] = [
  {
    "slug": "ai-underwriting-engine",
    "tag": "FinTech",
    "industry": "fintech",
    "title": "AI underwriting engine for a lending platform",
    "summary": "An LLM-assisted underwriting engine that lifted application throughput sixfold while lowering default rates.",
    "challenge": "Manual credit review capped approvals at 300 applications a day and risk decisions were inconsistent across analysts.",
    "solution": "An LLM-assisted underwriting engine with document extraction, a feature store, and human-in-the-loop review dashboards.",
    "approach": [
      {
        "title": "Discovery",
        "desc": "Shadowed analysts for two weeks to map decision criteria and identify the documents driving most of the review time."
      },
      {
        "title": "Data foundation",
        "desc": "Built a feature store consolidating bureau data, bank statements and application history with lineage and access controls."
      },
      {
        "title": "AI extraction & scoring",
        "desc": "Deployed document extraction and an explainable scoring model, with LLM-generated summaries for analyst review."
      },
      {
        "title": "Human-in-the-loop rollout",
        "desc": "Launched to one analyst pod first, measured agreement rates, then expanded once accuracy thresholds were met."
      }
    ],
    "stack": [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "LangChain",
      "AWS"
    ],
    "impact": [
      "6x application throughput",
      "31% lower default rate",
      "4-week payback"
    ],
    "services": [
      "ai-consulting",
      "enterprise-software",
      "data-engineering"
    ],
    "duration": "14 weeks",
    "team": "6 engineers, 1 designer, 1 architect"
  },
  {
    "slug": "custom-erp-manufacturing",
    "tag": "Manufacturing",
    "industry": "manufacturing",
    "title": "Custom ERP replacing 7 disconnected systems",
    "summary": "A modular ERP that unified production, inventory and procurement, cutting inventory by more than a fifth.",
    "challenge": "Production, inventory and procurement lived in spreadsheets and legacy tools with no single source of truth.",
    "solution": "A modular ERP with real-time shop-floor telemetry, demand forecasting and role-based approval workflows.",
    "approach": [
      {
        "title": "Process blueprint",
        "desc": "Mapped current workflows across five departments and agreed a target operating model."
      },
      {
        "title": "Inventory module first",
        "desc": "Delivered the highest-impact module in twelve weeks, integrated with the legacy accounting system."
      },
      {
        "title": "Shop-floor telemetry",
        "desc": "Connected machine data to live production dashboards and automated stock movements."
      },
      {
        "title": "Phased retirement",
        "desc": "Migrated remaining functions module by module and decommissioned seven legacy tools."
      }
    ],
    "stack": [
      ".NET",
      "Angular",
      "Redis",
      "Azure",
      "Power BI"
    ],
    "impact": [
      "22% inventory reduction",
      "99.95% uptime",
      "3-day close cycle"
    ],
    "services": [
      "custom-erp",
      "data-engineering",
      "cloud-devops"
    ],
    "duration": "9 months, phased",
    "team": "8 engineers, 1 designer, 1 delivery lead"
  },
  {
    "slug": "patient-engagement-platform",
    "tag": "Healthcare",
    "industry": "healthcare",
    "title": "HIPAA-ready patient engagement platform",
    "summary": "A cross-platform patient app with an AI triage assistant that nearly halved no-shows.",
    "challenge": "A clinic network needed a compliant mobile experience for scheduling, triage and post-visit care.",
    "solution": "Cross-platform app with an AI triage assistant, RAG-based clinical knowledge base and audit-grade logging.",
    "approach": [
      {
        "title": "Compliance by design",
        "desc": "Threat modelling and a HIPAA control map before the first line of code."
      },
      {
        "title": "Patient journeys",
        "desc": "Designed scheduling, reminders and post-visit care flows with patient and clinician input."
      },
      {
        "title": "AI triage assistant",
        "desc": "Grounded assistant using a curated clinical knowledge base, with every response logged and reviewable."
      },
      {
        "title": "Launch & iterate",
        "desc": "App store launch in twelve weeks, followed by fortnightly releases driven by usage analytics."
      }
    ],
    "stack": [
      "React Native",
      "Node.js",
      "MongoDB",
      "OpenAI",
      "GCP"
    ],
    "impact": [
      "48% fewer no-shows",
      "NPS 71",
      "12-week launch"
    ],
    "services": [
      "mobile-development",
      "ai-consulting",
      "cloud-devops"
    ],
    "duration": "12 weeks to launch",
    "team": "5 engineers, 1 designer, 1 architect"
  }
];
export const processPhases: ProcessPhase[] = [
  {
    "n": "01",
    "title": "Discover",
    "desc": "Business goals, data audit, AI opportunity mapping.",
    "duration": "1 to 2 weeks",
    "activities": [
      "Stakeholder interviews and goal alignment",
      "Current-state systems and data audit",
      "AI and automation opportunity mapping",
      "Risk, compliance and constraint review"
    ],
    "deliverables": [
      "Discovery report",
      "Prioritised opportunity map",
      "Success metrics"
    ]
  },
  {
    "n": "02",
    "title": "Strategize",
    "desc": "Roadmap, architecture, ROI model and delivery plan.",
    "duration": "1 to 2 weeks",
    "activities": [
      "Target architecture and technology selection",
      "ROI model and investment case",
      "Delivery roadmap with phased milestones",
      "Team shape and governance model"
    ],
    "deliverables": [
      "Technology roadmap",
      "Reference architecture",
      "Delivery plan and estimate"
    ]
  },
  {
    "n": "03",
    "title": "Design",
    "desc": "UX flows, design system and technical prototypes.",
    "duration": "2 to 3 weeks",
    "activities": [
      "User research and journey mapping",
      "Wireframes, prototypes and usability testing",
      "Design system and accessibility standards",
      "Technical spikes on high-risk components"
    ],
    "deliverables": [
      "Validated prototypes",
      "Design system",
      "Technical proof of concepts"
    ]
  },
  {
    "n": "04",
    "title": "Develop",
    "desc": "Agile squads, automated QA, weekly releasable builds.",
    "duration": "6 to 12 weeks per release",
    "activities": [
      "Two-week sprints with weekly demos",
      "Automated testing and code review on every change",
      "Continuous integration and preview environments",
      "Security scanning and performance budgets"
    ],
    "deliverables": [
      "Releasable builds every week",
      "Test suites and documentation",
      "Sprint reports"
    ]
  },
  {
    "n": "05",
    "title": "Deploy",
    "desc": "Hardened cloud rollout, monitoring and enablement.",
    "duration": "1 to 2 weeks",
    "activities": [
      "Production infrastructure and pipelines",
      "Monitoring, alerting and on-call runbooks",
      "Data migration and cutover rehearsal",
      "User training and change enablement"
    ],
    "deliverables": [
      "Production launch",
      "Observability dashboards",
      "Runbooks and training"
    ]
  },
  {
    "n": "06",
    "title": "Scale",
    "desc": "Performance, cost tuning and continuous AI improvement.",
    "duration": "Ongoing",
    "activities": [
      "Usage analytics and experimentation",
      "Performance and cost optimisation",
      "AI model evaluation and retraining",
      "Roadmap reviews each quarter"
    ],
    "deliverables": [
      "Quarterly roadmap",
      "Optimisation reports",
      "Continuous improvements"
    ]
  }
];
export const techGroups: TechGroup[] = [
  {
    "group": "Frontend",
    "desc": "Fast, accessible interfaces built on mature component ecosystems.",
    "items": [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "React Native"
    ]
  },
  {
    "group": "Backend",
    "desc": "Robust services and APIs in the runtime that fits your team.",
    "items": [
      "Node.js",
      "NestJS",
      "Java",
      "Spring Boot",
      ".NET",
      "Python"
    ]
  },
  {
    "group": "Database",
    "desc": "Relational, document and in-memory stores chosen per workload.",
    "items": [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MySQL",
      "Elasticsearch"
    ]
  },
  {
    "group": "Cloud & DevOps",
    "desc": "Automated, observable infrastructure on every major provider.",
    "items": [
      "AWS",
      "Azure",
      "GCP",
      "Kubernetes",
      "Terraform",
      "GitHub Actions"
    ]
  },
  {
    "group": "AI & Machine Learning",
    "desc": "Model-agnostic LLM and ML tooling with evaluation built in.",
    "items": [
      "OpenAI",
      "Anthropic",
      "LangChain",
      "Vector DBs",
      "RAG Systems",
      "PyTorch"
    ]
  },
  {
    "group": "Data & Analytics",
    "desc": "Pipelines and platforms that make data trustworthy and usable.",
    "items": [
      "Snowflake",
      "BigQuery",
      "dbt",
      "Apache Kafka",
      "Airflow",
      "Power BI"
    ]
  }
];
export const testimonials: Testimonial[] = [
  {
    "quote": "They rebuilt our underwriting stack in a quarter and the AI review flow is now the backbone of the business.",
    "name": "Priya Raghavan",
    "role": "COO, Fintrail"
  },
  {
    "quote": "The only partner that talked architecture and ROI in the same sentence. Our ERP rollout finished ahead of plan.",
    "name": "Marcus Weber",
    "role": "CIO, Axis Manufacturing"
  },
  {
    "quote": "From idea to a live product in 11 weeks, with engineering quality our investors asked hard questions about, and loved.",
    "name": "Dana Osei",
    "role": "Founder, NovaHealth"
  }
];
export const principles: Principle[] = [
  {
    "title": "Outcomes over output",
    "desc": "We commit to business results, not story points. Every engagement starts with the metric that matters."
  },
  {
    "title": "Senior by default",
    "desc": "Architects and senior engineers do the work. No bait-and-switch after the sales call."
  },
  {
    "title": "Radical transparency",
    "desc": "Shared boards, open metrics and honest estimates, including the ones you would rather not hear."
  },
  {
    "title": "Responsible AI",
    "desc": "Guardrails, evaluation and human oversight are engineering requirements, not afterthoughts."
  },
  {
    "title": "Build to hand over",
    "desc": "Clean code, documentation and knowledge transfer so your team owns what we build."
  },
  {
    "title": "Long-term thinking",
    "desc": "We design systems and relationships to last a decade, not a contract cycle."
  }
];
export const serviceBadges: Record<string, string> = {
  "ai-consulting": "Most popular",
  "mvp-development": "Startups",
  "custom-erp": "Enterprise"
};
