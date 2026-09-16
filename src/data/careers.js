/**
 * AD FutureStack — Careers Data
 *
 * NOTE: The job openings below are SAMPLE / DEMO roles that illustrate
 * the kinds of positions AD FutureStack typically hires for. They should
 * not be interpreted as confirmed live vacancies. Edit freely to reflect
 * actual open roles at any time.
 *
 * Each entry has:
 *   id, title, department, location, employmentType, experience,
 *   shortDescription, responsibilities[], requiredSkills[], preferredSkills[]
 */

export const jobOpenings = [
  {
    id: 'frontend-developer',
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Kovilpatti, Tamil Nadu (Hybrid)',
    employmentType: 'Full-Time',
    experience: '1–3 Years',
    shortDescription:
      'Build high-performance React and Next.js interfaces for enterprise web products, SaaS dashboards, and client-facing portals.',
    responsibilities: [
      'Develop responsive UI components using React, Next.js, and Tailwind CSS',
      'Collaborate with designers to translate Figma prototypes into pixel-perfect interfaces',
      'Optimize frontend performance: Core Web Vitals, lazy loading, code splitting',
      'Write clean, reusable component libraries following our design system',
      'Participate in code reviews, sprint planning, and daily stand-ups',
    ],
    requiredSkills: ['React', 'Next.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 / CSS3', 'Git'],
    preferredSkills: ['TypeScript', 'Framer Motion', 'React Query', 'Storybook', 'Figma'],
  },
  {
    id: 'backend-developer',
    title: 'Backend Developer',
    department: 'Engineering',
    location: 'Kovilpatti, Tamil Nadu (Hybrid)',
    employmentType: 'Full-Time',
    experience: '2–4 Years',
    shortDescription:
      'Design and build scalable REST and GraphQL APIs, microservices, and cloud-native backend systems for enterprise clients.',
    responsibilities: [
      'Build RESTful and GraphQL APIs with Node.js, Express, or Python/FastAPI',
      'Design relational and NoSQL database schemas (PostgreSQL, MongoDB, Redis)',
      'Implement authentication, authorization, and OAuth2 / JWT flows',
      'Integrate third-party APIs: Stripe, Twilio, SendGrid, and cloud SDKs',
      'Write automated unit and integration tests; maintain 80%+ coverage',
    ],
    requiredSkills: ['Node.js', 'Express.js', 'PostgreSQL', 'REST APIs', 'Git', 'Docker basics'],
    preferredSkills: ['Python / FastAPI', 'GraphQL', 'Redis', 'Kafka', 'AWS / GCP', 'Kubernetes'],
  },
  {
    id: 'fullstack-developer',
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Kovilpatti, Tamil Nadu (Hybrid)',
    employmentType: 'Full-Time',
    experience: '2–5 Years',
    shortDescription:
      'Own end-to-end feature delivery across React frontends and Node.js backends for multi-tenant SaaS platforms and enterprise web apps.',
    responsibilities: [
      'Develop and ship full product features from database schema to UI component',
      'Architect multi-tenant SaaS systems with role-based access control',
      'Set up CI/CD pipelines and containerized deployments on AWS / GCP',
      'Lead technical discussions on architecture decisions and tradeoffs',
      'Mentor junior developers and contribute to engineering documentation',
    ],
    requiredSkills: ['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Docker', 'Git'],
    preferredSkills: ['Next.js', 'TypeScript', 'Kubernetes', 'Terraform', 'AWS', 'System Design'],
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Kovilpatti, Tamil Nadu (Hybrid / Remote)',
    employmentType: 'Full-Time',
    experience: '1–3 Years',
    shortDescription:
      'Create beautiful, functional, and accessible user interfaces for web and mobile products. Own the design process from research to high-fidelity handoff.',
    responsibilities: [
      'Conduct user research, competitive analysis, and usability testing',
      'Design wireframes, user flows, prototypes, and high-fidelity UI screens in Figma',
      'Maintain and evolve our product design system and component library',
      'Collaborate closely with frontend developers to ensure pixel-perfect implementation',
      'Deliver accessible, WCAG-compliant design solutions for all user groups',
    ],
    requiredSkills: ['Figma', 'UI Design', 'UX Research', 'Prototyping', 'Design Systems'],
    preferredSkills: ['Motion Design', 'Framer', 'Lottie', 'Adobe Illustrator', 'Mobile UI (iOS / Android)'],
  },
  {
    id: 'qa-engineer',
    title: 'QA Engineer',
    department: 'Quality Assurance',
    location: 'Kovilpatti, Tamil Nadu (Hybrid)',
    employmentType: 'Full-Time',
    experience: '1–3 Years',
    shortDescription:
      'Ensure software quality across all products by designing and executing comprehensive test strategies — manual, automated, and performance.',
    responsibilities: [
      'Write and maintain automated test suites using Playwright, Cypress, or Jest',
      'Perform manual functional, regression, and exploratory testing',
      'Create detailed test plans, test cases, and defect reports',
      'Work with developers to identify root causes and validate bug fixes',
      'Set up and maintain end-to-end testing pipelines in CI/CD workflows',
    ],
    requiredSkills: ['Manual Testing', 'Test Case Writing', 'Bug Tracking (Jira)', 'API Testing (Postman)'],
    preferredSkills: ['Playwright / Cypress', 'Jest', 'Selenium', 'Performance Testing (k6 / JMeter)', 'CI/CD basics'],
  },
  {
    id: 'digital-marketing-executive',
    title: 'Digital Marketing Executive',
    department: 'Marketing',
    location: 'Kovilpatti, Tamil Nadu (On-site / Hybrid)',
    employmentType: 'Full-Time',
    experience: '1–2 Years',
    shortDescription:
      'Drive online growth through SEO, content marketing, paid campaigns, and social media strategy — helping AD FutureStack reach the right clients globally.',
    responsibilities: [
      'Plan and execute SEO strategies, keyword research, and on-page optimization',
      'Manage Google Ads, LinkedIn Ads, and Meta Ads campaigns with measurable ROI',
      'Create compelling content: blogs, case studies, email newsletters, and social posts',
      'Analyze website traffic with Google Analytics / Search Console and report insights',
      'Collaborate with the design team to produce visual marketing assets',
    ],
    requiredSkills: ['SEO / SEM', 'Google Ads', 'Google Analytics', 'Content Writing', 'Social Media Management'],
    preferredSkills: ['LinkedIn Ads', 'HubSpot / CRM', 'Canva / Adobe Suite', 'Email Marketing (Mailchimp)', 'Video Editing'],
  },
  {
    id: 'business-development-executive',
    title: 'Business Development Executive',
    department: 'Business Development',
    location: 'Kovilpatti, Tamil Nadu (On-site / Hybrid)',
    employmentType: 'Full-Time',
    experience: '1–3 Years',
    shortDescription:
      'Identify, qualify, and close new business opportunities for AD FutureStack — building lasting relationships with startups, SMBs, and enterprise clients.',
    responsibilities: [
      'Research and identify potential clients across target industry verticals',
      'Conduct discovery calls, understand client needs, and present service proposals',
      'Manage the full sales cycle from lead generation to contract closure',
      'Maintain accurate CRM records of prospects, deals, and client interactions',
      'Collaborate with the technical team to scope and price custom engagements',
    ],
    requiredSkills: ['B2B Sales', 'Lead Generation', 'Client Communication', 'Proposal Writing', 'CRM Tools'],
    preferredSkills: ['IT Services / Software Sales', 'LinkedIn Sales Navigator', 'Cold Outreach', 'HubSpot', 'Contract Negotiation'],
  },
]
