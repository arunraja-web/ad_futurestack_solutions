import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/page-sections.css'
import '../styles/services.css'
import SEO from '../components/common/SEO.jsx'
import { Layers, ShieldCheck, Sparkles, ArrowRight, Globe } from 'lucide-react'

const HERO_IMAGE = "/images/solutions/solutions-hero-bg.webp"

const solutionItems = [
  {
    id: 'saas-blueprint',
    tag: 'B2B Software Architecture',
    title: 'Enterprise Multi-Tenant SaaS Blueprint',
    description: 'A pre-engineered, battle-tested SaaS architecture foundation featuring tenant isolation, automated onboarding, role-based security, and subscription billing.',
    bullets: [
      'Multi-tenant data isolation (Row Level Security & Schema per tenant)',
      'Built-in OAuth2, SSO & SAML enterprise authentication',
      'Stripe & Adyen subscription billing & usage metering',
      'Automated tenant provisioning & domain management'
    ],
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Stripe'],
    bgImage: '/images/solutions/saas-blueprint.webp'
  },
  {
    id: 'ai-automation-blueprint',
    tag: 'Operational Intelligence',
    title: 'AI Workflow Automation Suite',
    description: 'Turn manual operations into autonomous AI systems. Connect LLMs, document extraction engines, and n8n workflows directly into your enterprise ERP and CRM.',
    bullets: [
      'Autonomous AI agents with RAG vector search',
      'Intelligent PDF & invoice processing automation',
      'Seamless API sync across Salesforce, HubSpot & Slack',
      'Human-in-the-loop approval workflows & auditing'
    ],
    tags: ['Python', 'LangChain', 'n8n', 'Pinecone', 'OpenAI', 'REST APIs'],
    bgImage: '/images/home/ai-augmented-engineering.webp'
  },
  {
    id: 'api-gateway-blueprint',
    tag: 'High-Scale Infrastructure',
    title: 'High-Throughput API Gateway & Streaming',
    description: 'Engineered for high-frequency transactions, event-driven message queuing, rate limiting, and real-time telemetry analytics.',
    bullets: [
      'Sub-20ms low latency API routing & load balancing',
      'Apache Kafka event streaming & webhooks engine',
      'Rate limiting, DDoS protection & IP throttling',
      'Prometheus & Grafana real-time monitoring'
    ],
    tags: ['Java Spring Boot', 'Kafka', 'Redis', 'Nginx', 'Prometheus'],
    bgImage: '/images/solutions/api-gateway.webp'
  },
  {
    id: 'fintech-blueprint',
    tag: 'Financial Technology',
    title: 'FinTech Payment & Compliance Platform',
    description: 'Secure, audit-ready financial architecture built for processing payments, multi-currency ledger management, and strict regulatory compliance.',
    bullets: [
      'Double-entry transaction ledger & balance reconciliation',
      'PCI-DSS compliant tokenization & vault storage',
      'Real-time fraud detection & risk scoring',
      'Automated KYC/AML verification workflows'
    ],
    tags: ['Go', 'PostgreSQL', 'OAuth2', 'Vault', 'PCI-DSS', 'AWS'],
    bgImage: '/images/solutions/fintech-platform.webp'
  }
]

const solutionPillars = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: '70% Faster Time-to-Market',
    description: 'Pre-architected foundation modules allow your team to launch production-grade enterprise software in weeks instead of months.'
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Bank-Grade Compliance',
    description: 'Built-in security frameworks designed to meet SOC2 Type II, ISO 27001, and HIPAA compliance requirements out of the box.'
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: '100% Modularity & Ownership',
    description: 'Clean, fully documented source code with zero proprietary lock-in. You retain 100% IP ownership of your system.'
  }
]

function SolutionVisualWidget({ bgImage, tag }) {
  return (
    <div className="showcase-card-visual relative overflow-hidden rounded-2xl group min-h-[300px] border border-slate-700/60 shadow-xl p-0">
      <img
        src={bgImage}
        alt={`AD FutureStack Enterprise Solution Blueprint - ${tag || "Solution Visual"}`}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute top-4 right-4 z-10">
        <span className="text-[10px] font-mono font-bold text-white bg-violet-700/90 backdrop-blur-md px-3 py-1 rounded-full border border-violet-400/40 uppercase tracking-widest shadow-md">
          {tag}
        </span>
      </div>
    </div>
  )
}

const solutionsSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  'name': 'AD FutureStack Enterprise Blueprints',
  'operatingSystem': 'Cloud Native',
  'applicationCategory': 'BusinessApplication',
  'publisher': {
    '@type': 'Organization',
    'name': 'AD FutureStack',
    'url': 'https://adfuturestack.dev'
  },
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'USD'
  }
}

export default function Solutions() {
  return (
    <div className="bespoke-page">
      <SEO
        title="Enterprise SaaS & AI Software Blueprints | AD FutureStack"
        description="Accelerate development with pre-engineered software blueprints: B2B multi-tenant SaaS platforms, AI automation suites, and API gateway infrastructure."
        keywords="SaaS Architecture Blueprint, AI Automation Suite, Turnkey Software Solutions, FinTech Gateway, AD FutureStack Solutions"
        canonicalUrl="https://adfuturestack.dev/solutions"
        schema={solutionsSchema}
      />
      {/* 1. HERO SECTION WITH BACKGROUND IMAGE */}
      <section
        className="page-hero-bespoke"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="page-hero-overlay" />

        <div className="page-hero-inner">
          <div className="page-hero-content">
            <br></br>
            <h1>
              Enterprise <span>Solutions</span>
            </h1>


            <p>
              Accelerate product deployment with pre-engineered platform modules built for security, scale, and seamless cloud integration.
            </p>

            <div className="hero-action-group">
              <a href="#blueprints" className="hero-btn-primary">
                Explore Blueprints <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/contact" className="hero-btn-secondary">
                Request Custom Solution ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PILLARS SECTION */}
      <section className="pillars-section">
        <span className="section-kicker">WHY SOLUTION BLUEPRINTS</span>
        <h2 className="section-title">Pre-Engineered Architecture Advantage</h2>
        <p className="section-description">
          Instead of starting from zero, leverage our proven architectural frameworks to eliminate core engineering risks and launch ahead of schedule.
        </p>

        <div className="pillars-grid">
          {solutionPillars.map((item, idx) => (
            <div key={idx} data-reveal="up" data-stagger={(idx + 1) * 100} className="pillar-card">
              <div className="pillar-icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE SHOWCASE GRID */}
      <section className="showcase-section" id="blueprints">
        <div className="showcase-inner">
          <span className="section-kicker">PRE-ENGINEERED PLATFORMS</span>
          <h2 className="section-title">Enterprise Solution Blueprints</h2>
          <p className="section-description">
            Explore our ready-to-customise architecture suites engineered for enterprise software operations.
          </p>

          <div className="showcase-grid">
            {solutionItems.map((item, idx) => (
              <div key={item.id} data-reveal={idx % 2 === 0 ? "left" : "right"} className={`showcase-card ${idx % 2 === 1 ? 'reverse' : ''}`}>
                <div className="showcase-card-content">
                  <span className="showcase-tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <div className="showcase-bullet-list">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="showcase-bullet-item">
                        <span>✓</span>
                        {bullet}
                      </div>
                    ))}
                  </div>

                  <div className="showcase-tags-group">
                    {item.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                <SolutionVisualWidget bgImage={item.bgImage} tag={item.tag} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STATS SECTION */}
      <section className="bespoke-stats-section">
        <div className="bespoke-stats-inner">
          <div className="bespoke-stat-item">
            <strong>70%</strong>
            <span>Faster Time to Market</span>
          </div>
          <div className="bespoke-stat-item">
            <strong>99.95%</strong>
            <span>Deployment Reliability</span>
          </div>
          <div className="bespoke-stat-item">
            <strong>60%</strong>
            <span>Lower OpEx Overhead</span>
          </div>
          <div className="bespoke-stat-item">
            <strong>100%</strong>
            <span>IP Code Ownership</span>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="bespoke-cta-section">
        <div className="bespoke-cta-content">
          <h2>Request a Customized Blueprint Demo</h2>
          <p>
            Have specific compliance, data sovereignty, or stack requirements? We tailor enterprise blueprints to fit your exact business needs.
          </p>
        </div>
        <Link to="/contact" className="bespoke-cta-btn">
          Talk to a Platform Architect <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  )
}
