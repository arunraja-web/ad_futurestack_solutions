import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/page-sections.css'
import '../styles/services.css'
import SEO from '../components/common/SEO.jsx'
import { Cpu, ShieldCheck, Database, Cloud, Zap, Code2, Server, ArrowRight } from 'lucide-react'

const HERO_IMAGE = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2200&q=90"

const capabilityItems = [
  {
    id: 'microservices',
    tag: 'Distributed Systems',
    title: 'High-Throughput Microservices & APIs',
    description: 'We architect and build fault-tolerant distributed services capable of processing millions of concurrent requests with sub-50ms latency.',
    bullets: [
      'gRPC & RESTful high-performance API design',
      'Event-driven architectures using Apache Kafka',
      'Zero-downtime rolling deployments & service meshes',
      'Distributed caching with Redis & Memcached'
    ],
    tags: ['Java Spring Boot', 'Node.js', 'Go', 'gRPC', 'Kafka', 'Redis'],
    bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'cloud',
    tag: 'Cloud & Infrastructure',
    title: 'Cloud-Native Engineering & DevOps',
    description: 'Infrastructure-as-code automation and multi-region cloud architectures designed for high availability, security, and effortless scaling.',
    bullets: [
      'Automated CI/CD pipelines & GitHub Actions',
      'Kubernetes orchestration & container management',
      'Terraform & CloudFormation IaC automation',
      'Multi-region failover & disaster recovery'
    ],
    tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Helm', 'CI/CD'],
    bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'ai-automation',
    tag: 'Intelligent Systems',
    title: 'AI Engineering & Workflow Automation',
    description: 'Connect AI agents, custom LLMs, and enterprise applications to automate complex operational workflows and enhance decision-making.',
    bullets: [
      'Autonomous AI agent orchestration & n8n workflows',
      'RAG pipelines with vector databases (Pinecone, Qdrant)',
      'Custom model fine-tuning & API integration',
      'Intelligent document processing & NLP pipelines'
    ],
    tags: ['Python', 'LangChain', 'OpenAI', 'n8n', 'Pinecone', 'PyTorch'],
    bgImage: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'data',
    tag: 'Data Architecture',
    title: 'High-Scale Data Systems & Streaming',
    description: 'Engineered data fabrics for real-time analytics, ACID-compliant relational databases, and high-volume event data ingestion.',
    bullets: [
      'PostgreSQL & MySQL performance optimization',
      'Analytical data warehouses (ClickHouse, Snowflake)',
      'Real-time ETL data processing pipelines',
      'Data encryption & compliance auditing'
    ],
    tags: ['PostgreSQL', 'ClickHouse', 'MongoDB', 'Snowflake', 'Spark'],
    bgImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'security',
    tag: 'Cybersecurity',
    title: 'Zero-Trust Security & Compliance',
    description: 'Bank-grade security embedded into every layer of application code, API routes, and cloud infrastructure.',
    bullets: [
      'OAuth2, OpenID Connect & SAML SSO integration',
      'End-to-end data encryption at rest and in transit',
      'SOC2 Type II & ISO 27001 readiness auditing',
      'Automated vulnerability scanning & penetration testing'
    ],
    tags: ['OAuth2', 'Vault', 'JWT', 'OIDC', 'SOC2', 'TLS 1.3'],
    bgImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80'
  }
]

const pillars = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Extreme Scalability',
    description: 'Engineered to handle exponential traffic growth without performance degradation or infrastructure rewrites.'
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Zero-Trust Resilience',
    description: 'Built-in security, role-based access, and automated failover mechanics protecting critical business assets.'
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'Future-Proof Tech Stack',
    description: 'Built with modern, maintainable open standards to prevent vendor lock-in and minimize technical debt.'
  }
]

const techCategories = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Java', 'Python', 'Go', 'SQL'] },
  { label: 'Frameworks', items: ['React', 'Next.js', 'Node.js', 'Spring Boot', 'Express', 'FastAPI'] },
  { label: 'Cloud & Infrastructure', items: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Nginx'] },
  { label: 'Databases & Cache', items: ['PostgreSQL', 'Redis', 'MongoDB', 'ClickHouse', 'DynamoDB'] },
  { label: 'AI & Automation', items: ['PyTorch', 'LangChain', 'n8n', 'Pinecone', 'OpenAI API'] }
]

function CapabilityVisualWidget({ bgImage, tag }) {
  return (
    <div className="showcase-card-visual relative overflow-hidden rounded-2xl group min-h-[300px] border border-slate-700/60 shadow-xl p-0">
      <img
        src={bgImage}
        alt={`AD FutureStack Engineering Domain - ${tag || "Capability Visual"}`}
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

const capabilitiesSchema = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  'headline': 'AD FutureStack Technical Matrix & Engineering Domain',
  'description': 'Deep domain proficiency across modern distributed systems, cloud infrastructure, AI automation pipelines, and enterprise-grade data architectures.',
  'author': {
    '@type': 'Organization',
    'name': 'AD FutureStack',
    'url': 'https://adfuturestack.dev'
  },
  'publisher': {
    '@type': 'Organization',
    'name': 'AD FutureStack',
    'url': 'https://adfuturestack.dev'
  }
}

export default function Capabilities() {
  return (
    <div className="bespoke-page">
      <SEO
        title="Engineering Capabilities & Tech Stack | AD FutureStack"
        description="Discover our domain expertise in distributed microservices, cloud DevOps, AI agent orchestration, data architecture, and zero-trust cybersecurity."
        keywords="Microservices Architecture, Cloud DevOps, AI Agent Orchestration, Data Engineering, Cyber Security, AD FutureStack Capabilities"
        canonicalUrl="https://adfuturestack.dev/capabilities"
        schema={capabilitiesSchema}
      />
      {/* 1. HERO SECTION WITH BACKGROUND IMAGE */}
      <section
        className="page-hero-bespoke"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="page-hero-overlay" />

        <div className="page-hero-inner">
          <div className="page-hero-content">
            <span className="hero-kicker-badge">
              TECHNICAL MATRIX & ENGINEERING DOMAIN
            </span>

            <h1>
              Engineering <span>Capabilities</span>
            </h1>

            <p>
              Deep domain proficiency across modern distributed systems, cloud infrastructure, AI automation pipelines, and enterprise-grade data architectures.
            </p>

            <div className="hero-action-group">
              <a href="#core-capabilities" className="hero-btn-primary">
                Explore Capabilities <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/contact" className="hero-btn-secondary">
                Request Architecture Audit ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PILLARS SECTION */}
      <section className="pillars-section">
        <span className="section-kicker">WHY OUR ARCHITECTURE</span>
        <h2 className="section-title">Built for Production Rigor & Longevity</h2>
        <p className="section-description">
          We combine battle-tested software engineering standards with cutting-edge cloud infrastructure to deliver software that scales reliably.
        </p>

        <div className="pillars-grid">
          {pillars.map((item, idx) => (
            <div key={idx} className="pillar-card">
              <div className="pillar-icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE SHOWCASE GRID */}
      <section className="showcase-section" id="core-capabilities">
        <div className="showcase-inner">
          <span className="section-kicker">TECHNICAL DOMAINS</span>
          <h2 className="section-title">Core Engineering Matrix</h2>
          <p className="section-description">
            Explore our specific capabilities across infrastructure layers, application backend, and intelligent automation systems.
          </p>

          <div className="showcase-grid">
            {capabilityItems.map((item, idx) => (
              <div key={item.id} className={`showcase-card ${idx % 2 === 1 ? 'reverse' : ''}`}>
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

                <CapabilityVisualWidget bgImage={item.bgImage} tag={item.tag} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECH MATRIX PILLS */}
      <section className="tech-grid-section">
        <div className="tech-grid-inner">
          <div>
            <span className="section-kicker">CURATED TOOLING</span>
            <h2 className="section-title">Technology Ecosystem</h2>
            <p className="section-description">
              We leverage industry-standard languages, frameworks, cloud services, and databases to build resilient solutions.
            </p>
          </div>

          <div className="space-y-6">
            {techCategories.map((cat, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">{cat.label}</h4>
                <div className="tech-pill-group">
                  {cat.items.map((tech) => (
                    <span key={tech} className="tech-pill-item">
                      <Code2 className="h-3.5 w-3.5 text-violet-600" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STATS SECTION */}
      <section className="bespoke-stats-section">
        <div className="bespoke-stats-inner">
          <div className="bespoke-stat-item">
            <strong>99.99%</strong>
            <span>SLA Uptime Target</span>
          </div>
          <div className="bespoke-stat-item">
            <strong>&lt; 30ms</strong>
            <span>Global API Latency</span>
          </div>
          <div className="bespoke-stat-item">
            <strong>50M+</strong>
            <span>Daily Telemetry Events</span>
          </div>
          <div className="bespoke-stat-item">
            <strong>100%</strong>
            <span>Zero-Trust Compliant</span>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="bespoke-cta-section">
        <div className="bespoke-cta-content">
          <h2>Need an Architectural Assessment?</h2>
          <p>
            Our senior engineers can audit your current infrastructure, pinpoint bottlenecks, and design a scalable blueprint for your growth.
          </p>
        </div>
        <Link to="/contact" className="bespoke-cta-btn">
          Schedule Tech Consultation <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  )
}
