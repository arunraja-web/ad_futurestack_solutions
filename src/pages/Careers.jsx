import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/page-sections.css'
import '../styles/services.css'
import '../styles/projects-showcase.css'
import SEO from '../components/common/SEO.jsx'
import ProjectsFinalCTA from '../components/projects/ProjectsFinalCTA.jsx'
import { jobOpenings } from '../data/careers.js'
import {
  ArrowRight,
  Target,
  Rocket,
  ShieldCheck,
  Zap,
  Code2,
  Globe,
  Plus,
  MapPin,
  Clock,
  Briefcase,
} from 'lucide-react'

/* ─────────────────────────────────────────────────────────────────────
   SEO / JSON-LD Schema
───────────────────────────────────────────────────────────────────── */
const careersSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Careers at AD FutureStack',
  description:
    'Explore career opportunities at AD FutureStack — a software engineering studio building scalable cloud architectures, web & mobile applications, AI automation, and enterprise SaaS platforms.',
  url: 'https://adfuturestack.com/careers',
  mainEntity: {
    '@type': 'Organization',
    name: 'AD FutureStack',
    url: 'https://adfuturestack.com',
    logo: 'https://adfuturestack.com/images/AD%20Logo.png',
    sameAs: ['https://linkedin.com', 'https://github.com'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Open Positions',
      itemListElement: jobOpenings.map((job, idx) => ({
        '@type': 'JobPosting',
        position: idx + 1,
        title: job.title,
        description: job.shortDescription,
        employmentType: job.employmentType.toUpperCase().replace('-', '_'),
        jobLocation: {
          '@type': 'Place',
          name: job.location,
        },
      })),
    },
  },
}

/* ─────────────────────────────────────────────────────────────────────
   SECTION DATA — "What You'll Work On"
   Pulled from real service categories in src/data/services.js
───────────────────────────────────────────────────────────────────── */
const workAreas = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: 'Custom Product Engineering',
    description:
      'High-performance React and Next.js interfaces built for speed, accessibility, and modern user interaction.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'APIs & Microservices',
    description:
      'Node.js, Express, and Python microservices engineered for high throughput, zero downtime, and secure integrations.',
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Mobile App Development',
    description:
      'Native iOS, Android, and cross-platform React Native mobile experiences designed for speed and smooth gestures.',
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'AI & Workflow Automation',
    description:
      'Custom LLM integrations, RAG vector search pipelines, and automated business workflows that save hundreds of hours.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Cloud Infrastructure & DevOps',
    description:
      'Docker containers, Kubernetes clusters, and AWS/GCP CI/CD pipelines so deploys are instant and safe.',
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Multi-Tenant SaaS Systems',
    description:
      'End-to-end cloud platform architecture built to scale from MVP startup launch to enterprise multi-tenancy.',
  },
]



function JobCard({ job, isOpen, onToggle }) {
  return (
    <div
      id={`job-${job.id}`}
      className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-[#0062CD]/30 hover:shadow-md"
    >
      {/* Header row — always visible */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`job-body-${job.id}`}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062CD] focus-visible:ring-inset"
      >
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          {/* Department tag */}
          <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#0062CD]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0062CD]" aria-hidden="true" />
            {job.department}
          </span>
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">{job.title}</h3>
          {/* Meta pills */}
          <div className="flex flex-wrap items-center gap-3 mt-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <MapPin className="h-3.5 w-3.5 text-slate-400" />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              {job.employmentType}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <Briefcase className="h-3.5 w-3.5 text-slate-400" />
              {job.experience}
            </span>
          </div>
        </div>

        {/* Toggle icon */}
        <span
          aria-hidden="true"
          className="shrink-0 h-8 w-8 rounded-full flex items-center justify-center border transition-all duration-300 mt-1"
          style={{
            background: isOpen ? '#0f172a' : '#fff',
            borderColor: isOpen ? '#0f172a' : '#e2e8f0',
            color: isOpen ? '#fff' : '#64748b',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <Plus className="h-4 w-4 stroke-[2.5]" />
        </span>
      </button>

      {/* Expandable body */}
      <div
        id={`job-body-${job.id}`}
        role="region"
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 320ms ease-in-out',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <div
            className="px-6 pb-6 pt-2 border-t border-slate-100"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 280ms ease, transform 280ms ease',
              transitionDelay: isOpen ? '80ms' : '0ms',
            }}
          >
            {/* Short description */}
            <p className="text-sm text-slate-600 leading-relaxed mb-5">{job.shortDescription}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Responsibilities */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-3">
                  Responsibilities
                </h4>
                <ul className="space-y-2">
                  {job.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0062CD]" />
                      </span>
                      <span className="leading-snug">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-3">
                  Required Skills
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.requiredSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-3">
                  Nice to Have
                </h4>
                <div className="flex flex-wrap gap-2">
                  {job.preferredSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-[#EFF6FF] text-[#0062CD] border border-[#BFDBFE] text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Apply CTA */}
            <div className="flex items-center gap-4">
              <Link
                to={`/contact?role=${encodeURIComponent(job.title)}`}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#0062CD] text-white text-sm font-bold hover:bg-[#0050A8] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0062CD]/25"
              >
                Apply for This Role
                <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-xs text-slate-400 font-medium">
                Send your CV to{' '}
                <a
                  href="mailto:adfuturestacksolutions@gmail.com"
                  className="text-[#0062CD] hover:text-[#0050A8] transition-colors"
                >
                  adfuturestacksolutions@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────
   MAIN PAGE COMPONENT
───────────────────────────────────────────────────────────────────── */
export default function Careers() {
  const [openJobId, setOpenJobId] = useState(null)

  const toggleJob = (id) => {
    setOpenJobId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="bespoke-page">
      <SEO
        title="Careers at AD FutureStack — Join Our Engineering Studio"
        description="Explore career opportunities at AD FutureStack. We build scalable cloud software, AI automation, mobile apps, and enterprise SaaS platforms. Join a team that ships real production code."
        keywords="AD FutureStack Careers, Software Engineering Jobs, React Developer Jobs, Full Stack Jobs, Frontend Jobs, Backend Jobs, AI Jobs, Mobile Developer, Digital Marketing Jobs, Tamil Nadu IT Jobs"
        canonicalUrl="https://adfuturestack.com/careers"
        schema={careersSchema}
      />

      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <section
        className="page-hero-bespoke"
        style={{
          backgroundImage: 'url(/images/about/team-collaboration.webp)',
        }}
      >
        <div className="page-hero-overlay" />
        <div className="page-hero-inner">
          <div className="page-hero-content">
            {/* Eyebrow kicker */}
            <div className="hero-kicker-badge">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#3894FF] mr-2 animate-ping" aria-hidden="true" />
              CAREERS
            </div>

            <h1 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 500, lineHeight: 1.12, letterSpacing: '-0.03em', maxWidth: '640px' }}>
              Build Your Career With{' '}
              <span>AD FutureStack</span>
            </h1>

            <p>
              We are a software engineering studio that ships real production software for ambitious clients.
              Join a team of senior architects, developers, and designers who take craft seriously and move fast.
            </p>

            <div className="hero-action-group">
              <a href="#open-positions" className="hero-btn-primary">
                View Open Positions <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/contact" className="hero-btn-secondary">
                Start a Conversation ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. ABOUT THE COMPANY ─────────────────────────────────────── */}
      <section className="showcase-section" id="about-us" style={{ padding: 'clamp(36px, 5vw, 56px) clamp(20px, 4vw, 40px)' }}>
        <div className="showcase-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text side */}
            <div data-reveal="left">
              <span className="section-kicker">WHO WE ARE</span>
              <h2 className="section-title font-semibold">
                A Studio That Ships Production Software
              </h2>
              <p className="section-description">
                A software engineering studio building scalable SaaS platforms, AI automation, cloud infrastructure, and mobile products — delivering 100+ live products for startups and enterprises worldwide.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                {[
                  { value: '100+', label: 'Products Delivered' },
                  { value: '99.99%', label: 'Uptime SLA' },
                  { value: '98%', label: 'Client Retention' },
                  { value: '24+', label: 'Countries Served' },
                ].map((stat) => (
                  <div key={stat.label} className="px-5 py-3 rounded-xl border border-slate-200 bg-white text-center shadow-sm min-w-[100px]">
                    <p className="text-xl font-extrabold text-[#0062CD] leading-none mb-1">{stat.value}</p>
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual side */}
            <div data-reveal="right" className="relative min-h-[380px] flex items-center justify-center">
              <div className="w-4/5 h-[320px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="/images/about/about-main-story.webp"
                  alt="AD FutureStack Engineering Team at Work"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/images/about/team-collaboration.webp' }}
                />
              </div>
              <div className="absolute bottom-0 right-0 w-3/5 h-[200px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/services/team-collaboration-services.webp"
                  alt="AD FutureStack Team Collaboration"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/images/about/team-collaboration.webp' }}
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT YOU'LL WORK ON ───────────────────────────────────── */}
      <section className="pillars-section" id="what-youll-work-on" style={{ padding: 'clamp(36px, 5vw, 56px) clamp(20px, 4vw, 40px)' }}>
        <span className="section-kicker">WHAT YOU'LL BUILD</span>
        <h2 className="section-title font-semibold">Technology Areas</h2>
        <p className="section-description" style={{ maxWidth: '600px' }}>
          Our engineering teams work across six core technology disciplines. Every role touches real client products — not internal tools.
        </p>

        <div className="pillars-grid" style={{ marginTop: '28px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {workAreas.map((area, idx) => (
            <div key={idx} data-reveal="up" className="pillar-card">
              <div className="pillar-icon-box">{area.icon}</div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. VIDEO — LIFE AT AD FUTURESTACK ────────────────────────── */}
      {/*
        Reuses /videos/project-cta.mp4 unchanged via ProjectsFinalCTA.
        IntersectionObserver play-on-scroll + handleVideoEnded freeze-on-last-frame
        behavior is preserved exactly as authored in ProjectsFinalCTA.jsx.
      */}
      <ProjectsFinalCTA
        videoSrc="/videos/project-cta.mp4"
        title="Where Ideas Become Real Products"
        description="At AD FutureStack, your work ships to production. Watch the kind of software our teams build — from healthcare portals to enterprise SaaS platforms to cinematic web experiences."
        buttonText="See Our Work History"
        buttonLink="/about"
      />


      {/* ── 6. OPEN POSITIONS ────────────────────────────────────────── */}
      <section className="pillars-section" id="open-positions" style={{ padding: 'clamp(36px, 5vw, 56px) clamp(20px, 4vw, 40px)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span className="section-kicker">OPEN POSITIONS</span>
          <h2 className="section-title font-semibold">Explore Our Roles</h2>
          <p className="section-description" style={{ maxWidth: '640px', marginBottom: '12px' }}>
            The roles below represent the kinds of positions we typically hire for. Use them as a guide — even
            if the exact role isn't listed, we are always open to hearing from talented engineers and creatives.
          </p>
          {/* Disclaimer */}
          <p className="text-xs text-slate-400 font-medium mb-10 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" aria-hidden="true" />
            Sample/demo roles — not confirmed live vacancies. Contact us to confirm current openings.
          </p>

          <div className="flex flex-col gap-4">
            {jobOpenings.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isOpen={openJobId === job.id}
                onToggle={() => toggleJob(job.id)}
              />
            ))}
          </div>

          {/* Not finding the right role? */}
          <div className="mt-10 p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <p className="text-white font-bold text-lg mb-2">Don't see your role?</p>
            <p className="text-slate-300 text-sm mb-5 max-w-md mx-auto leading-relaxed">
              We're always on the lookout for talented people. Send us your portfolio, GitHub profile,
              or CV and tell us how you'd like to contribute.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0062CD] text-white text-sm font-bold hover:bg-[#0050A8] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0062CD]/30"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ─────────────────────────────────────────────── */}
      <section className="bespoke-cta-section" style={{ padding: 'clamp(36px, 5vw, 56px) clamp(20px, 4vw, 40px)' }}>
        <div className="bespoke-cta-content">
          <h2>Ready to Build Something Meaningful?</h2>
          <p>
            Join a team that ships real software, invests in engineers, and takes quality seriously.
            Whether you have found your ideal role above or just want to connect — we'd love to hear from you.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
          <a
            href="#open-positions"
            className="bespoke-cta-btn"
          >
            View Open Positions <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 28px',
              borderRadius: '12px',
              border: '1.5px solid #e2e8f0',
              background: '#ffffff',
              color: '#0f172a',
              fontSize: '13px',
              fontWeight: 800,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
            }}
            className="hover:border-[#0062CD] hover:text-[#0062CD] hover:-translate-y-0.5 transition-all"
          >
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </div>
  )
}
