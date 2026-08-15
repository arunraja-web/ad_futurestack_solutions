import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/page-sections.css'
import '../styles/services.css'
import SEO from '../components/common/SEO.jsx'
import { Users, Target, Rocket, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react'

const HERO_IMAGE = "/images/about/team-collaboration.webp"
const STORY_IMAGE_MAIN = "/images/about/about-main-story.webp"
const STORY_IMAGE_SMALL = "/images/services/team-collaboration-services.webp"

const aboutPillars = [
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Senior Engineering Expertise',
    description: 'Our team consists exclusively of experienced software architects and senior engineers who have built high-scale systems.'
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Outcome-Driven Engineering',
    description: 'We measure technology success by real business results—increased throughput, reduced operational costs, and client retention.'
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Zero Technical Debt Mindset',
    description: 'We write clean, modular, self-documenting code with comprehensive automated tests and zero vendor lock-in.'
  }
]

const valuesList = [
  {
    tag: 'Core Value 01',
    title: 'Engineering Rigor & Quality',
    description: 'We take pride in crafting production-grade software that is performant, secure, and built to stand the test of time.',
    bullets: ['Peer-reviewed code standards', 'Automated CI/CD testing suites', 'Strict adherence to OWASP security']
  },
  {
    tag: 'Core Value 02',
    title: 'Transparent Collaboration',
    description: 'We operate as an extended engineering team for our clients, providing honest feedback, clear milestones, and weekly demos.',
    bullets: ['Direct communication with lead engineers', 'Transparent sprint reporting', 'No hidden technical surprises']
  },
  {
    tag: 'Core Value 03',
    title: 'Continuous Technical Innovation',
    description: 'We actively evaluate emerging technologies—from AI autonomous agents to modern distributed data engines—to keep our clients ahead.',
    bullets: ['Pragmatic adoption of AI & cloud tooling', 'Focus on open standards', 'Continuous performance optimization']
  }
]

const milestones = [
  { year: '2018', title: 'AD FutureStack Founded', desc: 'Started with a vision to deliver enterprise-grade software architecture.' },
  { year: '2020', title: 'Cloud & SaaS Expansion', desc: 'Expanded into multi-tenant SaaS platforms and cloud-native microservices.' },
  { year: '2022', title: 'AI & Workflow Integration', desc: 'Pioneered autonomous AI agent integration and enterprise automation.' },
  { year: 'Present', title: 'Global Enterprise Partner', desc: 'Over 100+ digital products delivered to high-growth startups and enterprises.' }
]

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  'name': 'About AD FutureStack',
  'description': 'Learn about AD FutureStack, our engineering philosophy, core values, and mission to deliver enterprise software architecture.',
  'mainEntity': {
    '@type': 'Organization',
    'name': 'AD FutureStack',
    'url': 'https://adfuturestack.dev',
    'logo': 'https://adfuturestack.dev/images/AD%20Logo.png'
  }
}

export default function About() {
  return (
    <div className="bespoke-page">
      <SEO
        title="About AD FutureStack — Software Architects & Studio"
        description="Learn about AD FutureStack, our engineering philosophy, core values, and mission to deliver enterprise software architecture and digital solutions."
        keywords="About AD FutureStack, Software Engineering Studio, Enterprise Architects, Product Engineering Team, Software Studio"
        canonicalUrl="https://adfuturestack.dev/about"
        schema={aboutSchema}
      />
      {/* 1. HERO SECTION WITH BACKGROUND IMAGE */}
      <section
        className="page-hero-bespoke"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="page-hero-overlay" />

        <div className="page-hero-inner">
          <div className="page-hero-content">
            <br></br> <h1>
              Engineering the <span>Digital Future</span>
            </h1>

            <p>
              We are a team of senior software architects, developers, and system designers dedicated to building high-performance, resilient, and scalable digital products.
            </p>

            <div className="hero-action-group">
              <a href="#our-story" className="hero-btn-primary">
                Read Our Story <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/contact" className="hero-btn-secondary">
                Get in Touch ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PILLARS SECTION */}
      <section className="pillars-section">
        <span className="section-kicker text-xl">OUR ENGINEERING FOUNDATION</span>
        <h2 className="section-title font-semibold">Built on Discipline & Transparency</h2>
        <p className="section-description">
          We bring senior technical craftsmanship to every codebase, prioritizing clean maintainable architecture that enables sustained growth.
        </p>

        <div className="pillars-grid">
          {aboutPillars.map((item, idx) => (
            <div key={idx} className="pillar-card">
              <div className="pillar-icon-box">{item.icon}</div>
              <h3 >{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section >

      {/* 3. OUR STORY WITH PHOTOGRAPHY & MILESTONES */}
      < section className="showcase-section" id="our-story" >
        <div className="showcase-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="section-kicker">THE JOURNEY</span>
              <h2 className="section-title font-semibold">Why We Founded AD FutureStack</h2>
              <p className="section-description">
                AD FutureStack was created with a clear purpose: to bridge the gap between ambitious business goals and modern complex technology. Many companies struggle with brittle legacy monoliths or bloated, inefficient outsourced software.
              </p>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                We combine deep technical expertise across microservices, cloud infrastructure, AI automation, and multi-tenant SaaS to deliver production-ready software systems that are reliable today and ready for tomorrow.
              </p>

            </div>

            {/* PHOTOGRAPHY COMPOSITION */}
            <div className="relative min-h-[400px] flex items-center justify-center">
              <div className="w-4/5 h-[340px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src={STORY_IMAGE_MAIN}
                  alt="AD FutureStack Senior Engineering Team Collaborating on Architecture"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = "/images/about/team-collaboration.webp" }}
                />
              </div>

              <div className="absolute bottom-0 right-0 w-3/5 h-[210px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={STORY_IMAGE_SMALL}
                  alt="AD FutureStack Technical System Architecture Review Session"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = "/images/home/architecture-blueprint.webp" }}
                />
              </div>
            </div>
          </div>

          {/* MISSION & VISION DUAL CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="h-12 w-12 rounded-xl bg-violet-700/30 border border-violet-500/40 text-violet-400 flex items-center justify-center mb-6">
                <Target className="h-6 w-6" />
              </div>
              <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest block mb-2">OUR MISSION</span>
              <h3 className="text-2xl font-bold text-white mb-4">Architect Resilient Digital Products</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To engineer scalable, secure, and maintainable software systems that empower companies to scale seamlessly, reduce operational friction, and lead in their industries.
              </p>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="h-12 w-12 rounded-xl bg-violet-700/30 border border-violet-500/40 text-violet-400 flex items-center justify-center mb-6">
                <Rocket className="h-6 w-6" />
              </div>
              <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest block mb-2">OUR VISION</span>
              <h3 className="text-2xl font-bold text-white mb-4">The Premier Technology Partner</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To be the global technology partner of choice for ambitious enterprises seeking production-grade engineering, continuous innovation, and zero technical debt.
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* 4. CORE VALUES */}
      < section className="tech-grid-section" >
        <div className="showcase-inner">
          <span className="section-kicker">WHAT DRIVES US</span>
          <h2 className="section-title font-semibold">Our Guiding Values</h2>
          <p className="section-description mb-10">
            These core principles shape how we design architecture, communicate with clients, and deliver production software.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valuesList.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-violet-300 transition-colors">
                <div>
                  <span className="showcase-tag">{item.tag}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.description}</p>
                </div>
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  {item.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-violet-600 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* 5. FINAL CTA */}
      < section className="bespoke-cta-section" >
        <div className="bespoke-cta-content">
          <h2>Let's Engineer Your Digital Future Together</h2>
          <p>
            Looking for a dedicated software engineering team that values technical quality, clean architecture, and measurable outcomes?
          </p>
        </div>
        <Link to="/contact" className="bespoke-cta-btn">
          Work With Us <ArrowRight className="h-4 w-4" />
        </Link>
      </section >
    </div >
  )
}
