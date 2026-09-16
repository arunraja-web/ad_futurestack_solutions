import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/solutions-new.css'
import SEO from '../components/common/SEO.jsx'
import CountUp from '../components/common/CountUp.jsx'
import { ArrowRight, Play, Search, Code, CheckCircle, Rocket, Layers, Database, Smartphone, Cpu, Cloud, Settings } from 'lucide-react'

// Map the services to the UI requirements
const spectrumServices = [
  {
    id: '01',
    title: 'Product Engineering',
    description: 'High-performance React and Next.js interfaces built for speed, accessibility, and effortless user interaction.',
    icon: <Code size={24} />,
    image: '/images/services/web-development-new.jpg'
  },
  {
    id: '02',
    title: 'Backend APIs',
    description: 'Node.js, Express, Java Spring Boot, and Python microservices engineered for high throughput and zero downtime.',
    icon: <Database size={24} />,
    image: '/images/capabilities/microservices.webp'
  },
  {
    id: '03',
    title: 'Mobile App Development',
    description: 'Native iOS, Android, and cross-platform React Native mobile experiences designed for speed and smooth gestures.',
    icon: <Smartphone size={24} />,
    image: '/images/services/app-development-new.jpg'
  },
  {
    id: '04',
    title: 'AI & Workflow Automation',
    description: 'Custom LLM integrations, RAG vector search pipelines, and automated business workflows that save hundreds of hours.',
    icon: <Cpu size={24} />,
    image: '/images/services/ai-automation-new.jpg'
  },
  {
    id: '05',
    title: 'Cloud Infrastructure',
    description: 'Automated Docker containers, Kubernetes clusters, and AWS/GCP CI/CD pipelines so deploys are instant and safe.',
    icon: <Cloud size={24} />,
    image: '/images/capabilities/cloud-devops.webp'
  },
  {
    id: '06',
    title: 'Multi-Tenant SaaS',
    description: 'End-to-end cloud platform architecture built to scale from MVP startup launch to enterprise multi-tenancy.',
    icon: <Settings size={24} />,
    image: '/images/services/saas-systems-new.jpg'
  }
]

const industries = [
  { name: 'Manufacturing', image: '/images/projects/logistics-engine.webp' },
  { name: 'Healthcare', image: '/images/projects/healthcare-system.webp' },
  { name: 'BFSI', image: '/images/projects/fintech-enterprise.webp' },
  { name: 'Retail & E-commerce', image: '/images/projects/glowora.webp' },
  { name: 'Logistics & Supply Chain', image: '/images/projects/angadix.webp' },
  { name: 'Education', image: '/images/projects/book-verse.webp' },
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
        <span className="text-[10px] font-mono font-bold text-white bg-[#0062CD]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#3894FF]/40 uppercase tracking-widest shadow-md">
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
    'url': 'https://adfuturestack.com'
  },
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'USD'
  }
}


export default function Solutions() {
  return (
    <main className="sol-page">
      <SEO
        title="Enterprise SaaS & AI Software Blueprints | AD FutureStack"
        description="Accelerate development with pre-engineered software blueprints: B2B multi-tenant SaaS platforms, AI automation suites, and API gateway infrastructure."
        keywords="SaaS Architecture Blueprint, AI Automation Suite, Turnkey Software Solutions, FinTech Gateway, AD FutureStack Solutions"
        canonicalUrl="https://adfuturestack.com/solutions"
        schema={solutionsSchema}
      />

      {/* Hero Section */}
      <section className="tcs-hero sol-tcs-hero">
        <div className="tcs-hero-bg" style={{ backgroundImage: "url('/images/solutions/solutions-hero-bg.webp')" }}></div>
        <div className="tcs-hero-overlay"></div>

        <div className="tcs-hero-content">
          <h1 className="animate-hero-fade-up" style={{ animationDelay: '120ms', opacity: 0 }}>
            Solutions Engineered for <br /><span>Real Impact.</span>
          </h1>
          <p className="animate-hero-fade-up" style={{ animationDelay: '240ms', opacity: 0 }}>
            We turn complex challenges into scalable, future-ready solutions — combining engineering, intelligence and innovation to help businesses grow without boundaries.
          </p>
          <div className="tcs-hero-buttons animate-hero-fade-up" style={{ animationDelay: '360ms', opacity: 0 }}>
            <Link to="/contact" className="hero-primary-btn">
              Explore Our Solutions <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <div className="what-we-do-content-wrapper">
      {/* Spectrum Cards Section (Services) */}
      <section className="sol-spectrum">
        <div className="sol-container">
          <div className="sol-spectrum-header">
            <div className="sol-spectrum-title-area">
              <div className="sol-kicker">OUR SOLUTIONS</div>
              <h2>Technology Solutions Across the Full Spectrum</h2>
            </div>
            
            <div className="sol-spectrum-desc-area">
              <p>
                From strategy to execution, we deliver end-to-end solutions that are secure, scalable and designed for measurable business impact.
              </p>
              <div className="sol-spectrum-side-list">
                <span>STRATEGY</span>
                <span>INNOVATION</span>
                <span>EXECUTION</span>
                <span>GROWTH</span>
              </div>
            </div>
          </div>

          <div className="sol-arch-grid">
            {spectrumServices.map((srv) => (
              <div key={srv.id} className="sol-arch-card">
                <div className="sol-arch-image">
                  <img src={srv.image} alt={srv.title} />
                </div>
                <div className="sol-arch-icon">
                  {srv.icon}
                </div>
                <div className="sol-arch-num">{srv.id}</div>
                <h3 className="sol-arch-title">{srv.title}</h3>
                <p className="sol-arch-desc">{srv.description}</p>
                <Link to="/contact" className="sol-arch-arrow">
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach (Dark Timeline) */}
      <section className="sol-approach">
        <div className="sol-container">
          <div className="sol-approach-header">
            <div>
              <span className="sol-approach-kicker">OUR APPROACH</span>
              <h2 className="sol-approach-title">
                A Smarter Path<br/>
                From Challenges to <span>Change.</span>
              </h2>
            </div>
            
            <p className="sol-approach-desc">
              A structured, collaborative and agile approach to deliver solutions that create long-term value.
            </p>
            

          </div>

          <div className="sol-timeline">
            <div className="sol-timeline-item">
              <div className="sol-timeline-icon"><Search size={24} /></div>
              <span className="sol-timeline-num">01</span>
              <h3 className="sol-timeline-item-title">Understand</h3>
              <p className="sol-timeline-item-desc">We analyse your goals and challenges.</p>
            </div>
            
            <div className="sol-timeline-item">
              <div className="sol-timeline-icon"><Layers size={24} /></div>
              <span className="sol-timeline-num">02</span>
              <h3 className="sol-timeline-item-title">Strategise</h3>
              <p className="sol-timeline-item-desc">We design the right solution roadmap.</p>
            </div>
            
            <div className="sol-timeline-item">
              <div className="sol-timeline-icon"><Code size={24} /></div>
              <span className="sol-timeline-num">03</span>
              <h3 className="sol-timeline-item-title">Build</h3>
              <p className="sol-timeline-item-desc">We develop and integrate with precision.</p>
            </div>
            
            <div className="sol-timeline-item">
              <div className="sol-timeline-icon"><Rocket size={24} /></div>
              <span className="sol-timeline-num">04</span>
              <h3 className="sol-timeline-item-title">Deliver</h3>
              <p className="sol-timeline-item-desc">We deploy, optimise and support for scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="sol-industries">
        <div className="sol-container sol-industries-inner">
          <div className="sol-industries-left">
            <div className="sol-industries-kicker">INDUSTRIES WE SERVE</div>
            <h2 className="sol-industries-title">Solutions for a Wider World</h2>
            <p className="sol-industries-desc">
              We deliver tailored solutions across industries, helping businesses overcome challenges and unlock new opportunities.
            </p>
            <Link to="/contact" className="sol-btn-primary">
              Explore Industries <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="sol-industries-grid">
            {industries.map((ind, idx) => (
              <Link to="/contact" key={idx} className="sol-ind-card">
                <img src={ind.image} alt={ind.name} />
                <div className="sol-ind-label">
                  {ind.name} <ArrowRight size={16} color="#2563eb" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      </div>
    </main>
  )
}
