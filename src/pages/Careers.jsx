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
  ChevronDown,
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
    id: 'product-engineering',
    icon: <Code2 className="h-5 w-5 text-[#0062CD]" />,
    title: 'Custom Product Engineering',
    tagline: 'High-Performance Web & Full-Stack Apps',
    description:
      'High-performance React and Next.js interfaces built for speed, accessibility, and modern user interaction with sub-second response times.',
    image: '/images/services/product-engineering-new.jpg',
    tags: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    highlight: 'Production UI',
  },
  {
    id: 'microservices',
    icon: <Zap className="h-5 w-5 text-[#0062CD]" />,
    title: 'APIs & Microservices',
    tagline: 'High-Throughput Backends',
    description:
      'Node.js, Express, and Python microservices engineered for high throughput, zero downtime, and secure enterprise integrations.',
    image: '/images/capabilities/microservices.webp',
    tags: ['Node.js', 'Python', 'gRPC', 'PostgreSQL'],
    highlight: 'Low Latency',
  },
  {
    id: 'mobile',
    icon: <Globe className="h-5 w-5 text-[#0062CD]" />,
    title: 'Mobile App Development',
    tagline: 'Native iOS & Android Experiences',
    description:
      'Native iOS, Android, and cross-platform React Native mobile experiences designed for speed, fluidity, and smooth gestures.',
    image: '/images/services/app-development-new.jpg',
    tags: ['React Native', 'iOS', 'Android', 'Expo'],
    highlight: '60 FPS Native',
  },
  {
    id: 'ai-automation',
    icon: <Rocket className="h-5 w-5 text-[#0062CD]" />,
    title: 'AI & Workflow Automation',
    tagline: 'GenAI, Autonomous Agents & RAG',
    description:
      'Custom LLM integrations, RAG vector search pipelines, and automated business workflows that eliminate repetitive operations.',
    image: '/images/capabilities/ai-automation.webp',
    tags: ['LLMs', 'LangChain', 'Vector DB', 'RAG'],
    highlight: 'Autonomous AI',
  },
  {
    id: 'cloud-devops',
    icon: <ShieldCheck className="h-5 w-5 text-[#0062CD]" />,
    title: 'Cloud Infrastructure & DevOps',
    tagline: 'Resilient Cloud & CI/CD Pipelines',
    description:
      'Docker containers, Kubernetes clusters, and AWS/GCP CI/CD pipelines engineered so production deploys are instant and safe.',
    image: '/images/capabilities/cloud-devops.webp',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    highlight: '99.99% Uptime',
  },
  {
    id: 'saas-systems',
    icon: <Target className="h-5 w-5 text-[#0062CD]" />,
    title: 'Multi-Tenant SaaS Systems',
    tagline: 'Enterprise Scale Cloud Architecture',
    description:
      'End-to-end cloud platform architecture built to scale from MVP startup launch to multi-region enterprise multi-tenancy with strict tenant isolation.',
    image: '/images/services/saas-systems-new.jpg',
    tags: ['Multi-Tenant', 'Redis', 'GraphQL', 'Row-Level Security', 'Global Edge'],
    highlight: 'Enterprise Scale',
  },
]



function JobCard({ job, isOpen, onToggle }) {
  const getDeptColor = (dept) => {
    switch (dept) {
      case 'Engineering':
        return { bg: 'bg-blue-50', text: 'text-[#0062CD]', border: 'border-blue-200', dot: 'bg-[#0062CD]' }
      case 'Design':
        return { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200', dot: 'bg-indigo-600' }
      case 'Quality Assurance':
        return { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-600' }
      case 'Marketing':
        return { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', dot: 'bg-amber-600' }
      default:
        return { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-200', dot: 'bg-slate-600' }
    }
  }

  const deptStyle = getDeptColor(job.department)

  return (
    <div
      id={`job-${job.id}`}
      className={`rounded-xl transition-all duration-300 overflow-hidden ${
        isOpen
          ? 'bg-white border-2 border-[#0062CD] shadow-lg shadow-blue-500/10'
          : 'bg-white border border-slate-200/90 shadow-xs hover:border-[#0062CD]/50 hover:shadow-md hover:-translate-y-0.5'
      }`}
    >
      {/* Top accent line when open */}
      <div
        className={`h-1 w-full transition-all duration-300 ${
          isOpen ? 'bg-gradient-to-r from-[#0062CD] via-[#3894FF] to-[#0062CD]' : 'bg-transparent'
        }`}
      />

      {/* Header row — always visible */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`job-body-${job.id}`}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062CD] group"
      >
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          {/* Department badge & indicator */}
          <div className="flex items-center gap-2.5">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest border ${deptStyle.bg} ${deptStyle.text} ${deptStyle.border}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${deptStyle.dot}`} aria-hidden="true" />
              {job.department}
            </span>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider hidden sm:inline-block">
              • Open Role
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0062CD] transition-colors leading-tight">
            {job.title}
          </h3>

          {/* Meta pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/70 text-xs font-semibold text-slate-700">
              <MapPin className="h-3.5 w-3.5 text-[#0062CD]" />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/70 text-xs font-semibold text-slate-700">
              <Clock className="h-3.5 w-3.5 text-[#0062CD]" />
              {job.employmentType}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/70 text-xs font-semibold text-slate-700">
              <Briefcase className="h-3.5 w-3.5 text-[#0062CD]" />
              {job.experience}
            </span>
          </div>
        </div>

        {/* Action Toggle Pill */}
        <div className="shrink-0 flex items-center gap-2">
          <span
            className={`hidden sm:inline-flex text-xs font-bold uppercase tracking-wider transition-colors ${
              isOpen ? 'text-[#0062CD]' : 'text-slate-500 group-hover:text-slate-900'
            }`}
          >
            {isOpen ? 'Close' : 'View Details'}
          </span>
          <span
            aria-hidden="true"
            className={`h-9 w-9 rounded-xl flex items-center justify-center border transition-all duration-300 shadow-xs ${
              isOpen
                ? 'bg-[#0062CD] border-[#0062CD] text-white rotate-180 shadow-blue-500/30'
                : 'bg-slate-50 border-slate-200 text-slate-600 group-hover:bg-[#0062CD] group-hover:border-[#0062CD] group-hover:text-white'
            }`}
          >
            <ChevronDown className="h-4 w-4 stroke-[2.5] transition-transform duration-300" />
          </span>
        </div>
      </button>

      {/* Expandable body */}
      <div
        id={`job-body-${job.id}`}
        role="region"
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 350ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <div
            className="px-6 pb-6 pt-3 border-t border-slate-100 bg-slate-50/40"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(6px)',
              transition: 'opacity 300ms ease, transform 300ms ease',
              transitionDelay: isOpen ? '60ms' : '0ms',
            }}
          >
            {/* Description Banner */}
            <div className="p-4 rounded-lg bg-white border border-slate-200/80 shadow-xs mb-6">
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {job.shortDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Responsibilities */}
              <div className="bg-white p-5 rounded-lg border border-slate-200/80 shadow-xs">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#0062CD] mb-3.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0062CD]" />
                  Core Responsibilities
                </h4>
                <ul className="space-y-2.5">
                  {job.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0062CD] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-snug">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="bg-white p-5 rounded-lg border border-slate-200/80 shadow-xs flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-900" />
                    Required Skills
                  </h4>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {job.requiredSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-slate-900 text-white text-xs font-semibold shadow-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#0062CD] mb-2.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#3894FF]" />
                    Nice to Have / Preferred
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {job.preferredSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-[#EFF6FF] text-[#0062CD] border border-[#BFDBFE] text-xs font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Apply Action Footer */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-200/80">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to={`/contact?role=${encodeURIComponent(job.title)}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-[#0062CD] text-white text-xs uppercase font-bold tracking-wider hover:bg-[#0050A8] transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#0062CD]/25 hover:-translate-y-0.5 active:scale-95"
                >
                  Apply for This Role
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`mailto:adfuturestacksolutions@gmail.com?subject=Application for ${encodeURIComponent(job.title)}`}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 hover:text-[#0062CD] hover:border-[#0062CD] transition-colors"
                >
                  Send CV via Email
                </a>
              </div>
              <span className="text-[11px] text-slate-500 font-semibold">
                Ref ID: #{job.id}
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
        <div
          className="page-hero-overlay"
          style={{
            background:
              'linear-gradient(90deg, rgba(8, 14, 26, 0.72) 0%, rgba(8, 14, 26, 0.45) 55%, rgba(8, 14, 26, 0.25) 100%), linear-gradient(180deg, rgba(8, 14, 26, 0.2) 0%, transparent 40%, rgba(8, 14, 26, 0.6) 100%)',
          }}
        />
        <div className="page-hero-inner">
          <div className="page-hero-content">
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
                  <div key={stat.label} className="px-5 py-3 rounded-none border border-slate-200 bg-white text-center shadow-sm min-w-[100px]">
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
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <span className="section-kicker">WHAT YOU'LL BUILD</span>
          <h2 className="section-title font-semibold">Technology Areas</h2>
          <p className="section-description" style={{ maxWidth: '640px', marginBottom: '36px' }}>
            Our engineering teams work across six core technology disciplines. Every role touches real client products — not internal tools.
          </p>

          {/* Super Unique Bento Alignment Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* CARD 1: Custom Product Engineering (Featured Wide 7 cols) */}
            <div
              className="md:col-span-12 lg:col-span-7 group relative bg-white rounded-xl border border-slate-200/90 hover:border-[#0062CD]/50 shadow-sm hover:shadow-lg hover:shadow-[#0062CD]/10 transition-all duration-300 ease-out transform-gpu overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6 sm:p-7 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center shrink-0">
                      {workAreas[0].icon}
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#EFF6FF] text-[#0062CD]">
                      {workAreas[0].highlight}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#0062CD] transition-colors leading-tight">
                      {workAreas[0].title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                      {workAreas[0].tagline}
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {workAreas[0].description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {workAreas[0].tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card 1 Inset Visual */}
                <div className="w-full sm:w-48 md:w-52 h-44 rounded-lg overflow-hidden shrink-0 border border-slate-200/80 shadow-inner relative group-hover:shadow-md transition-all duration-300">
                  <img
                    src={workAreas[0].image}
                    alt={workAreas[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                </div>
              </div>
              <div className="h-0.5 w-full bg-slate-100 group-hover:bg-[#0062CD] transition-colors duration-300" />
            </div>

            {/* CARD 2: APIs & Microservices (5 cols) */}
            <div
              className="md:col-span-12 lg:col-span-5 group relative bg-white rounded-xl border border-slate-200/90 hover:border-[#0062CD]/50 shadow-sm hover:shadow-lg hover:shadow-[#0062CD]/10 transition-all duration-300 ease-out transform-gpu overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src={workAreas[1].image}
                    alt={workAreas[1].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/95 text-slate-900 shadow-sm backdrop-blur-md">
                      {workAreas[1].highlight}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-5 flex items-center gap-2.5">
                    <div className="h-9 w-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-md">
                      {workAreas[1].icon}
                    </div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      {workAreas[1].tagline}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0062CD] transition-colors leading-tight">
                    {workAreas[1].title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {workAreas[1].description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {workAreas[1].tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-0.5 w-full bg-slate-100 group-hover:bg-[#0062CD] transition-colors duration-300" />
            </div>

            {/* CARD 3: Mobile App Development (4 cols) */}
            <div
              className="md:col-span-6 lg:col-span-4 group relative bg-white rounded-xl border border-slate-200/90 hover:border-[#0062CD]/50 shadow-sm hover:shadow-lg hover:shadow-[#0062CD]/10 transition-all duration-300 ease-out transform-gpu overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src={workAreas[2].image}
                    alt={workAreas[2].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/95 text-slate-900 shadow-sm backdrop-blur-md">
                      {workAreas[2].highlight}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4">
                    <div className="h-8 w-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow">
                      {workAreas[2].icon}
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-[11px] font-bold text-[#0062CD] uppercase tracking-wider block">
                    {workAreas[2].tagline}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0062CD] transition-colors leading-tight">
                    {workAreas[2].title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {workAreas[2].description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {workAreas[2].tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-0.5 w-full bg-slate-100 group-hover:bg-[#0062CD] transition-colors duration-300" />
            </div>

            {/* CARD 4: AI & Workflow Automation (4 cols) */}
            <div
              className="md:col-span-6 lg:col-span-4 group relative bg-white rounded-xl border border-slate-200/90 hover:border-[#0062CD]/50 shadow-sm hover:shadow-lg hover:shadow-[#0062CD]/10 transition-all duration-300 ease-out transform-gpu overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src={workAreas[3].image}
                    alt={workAreas[3].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#EFF6FF] text-[#0062CD] border border-[#BFDBFE]">
                      {workAreas[3].highlight}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4">
                    <div className="h-8 w-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow">
                      {workAreas[3].icon}
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-[11px] font-bold text-[#0062CD] uppercase tracking-wider block">
                    {workAreas[3].tagline}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0062CD] transition-colors leading-tight">
                    {workAreas[3].title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {workAreas[3].description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {workAreas[3].tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-0.5 w-full bg-slate-100 group-hover:bg-[#0062CD] transition-colors duration-300" />
            </div>

            {/* CARD 5: Cloud Infrastructure & DevOps (4 cols) */}
            <div
              className="md:col-span-12 lg:col-span-4 group relative bg-white rounded-xl border border-slate-200/90 hover:border-[#0062CD]/50 shadow-sm hover:shadow-lg hover:shadow-[#0062CD]/10 transition-all duration-300 ease-out transform-gpu overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src={workAreas[4].image}
                    alt={workAreas[4].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/95 text-slate-900 shadow-sm backdrop-blur-md">
                      {workAreas[4].highlight}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4">
                    <div className="h-8 w-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow">
                      {workAreas[4].icon}
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-[11px] font-bold text-[#0062CD] uppercase tracking-wider block">
                    {workAreas[4].tagline}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0062CD] transition-colors leading-tight">
                    {workAreas[4].title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {workAreas[4].description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {workAreas[4].tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-0.5 w-full bg-slate-100 group-hover:bg-[#0062CD] transition-colors duration-300" />
            </div>

            {/* CARD 6: Multi-Tenant SaaS Systems (Panoramic Full-Width 12 cols) */}
            <div
              className="md:col-span-12 group relative bg-white rounded-xl border border-slate-200/90 hover:border-[#0062CD]/50 shadow-sm hover:shadow-lg hover:shadow-[#0062CD]/10 transition-all duration-300 ease-out transform-gpu overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6 sm:p-7 flex flex-col lg:flex-row gap-8 items-center justify-between">
                <div className="flex-1 space-y-3 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center shrink-0">
                      {workAreas[5].icon}
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#EFF6FF] text-[#0062CD]">
                      {workAreas[5].highlight}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#0062CD] transition-colors leading-tight">
                      {workAreas[5].title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                      {workAreas[5].tagline}
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {workAreas[5].description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {workAreas[5].tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card 6 Inset Diagram Visual */}
                <div className="w-full lg:w-[420px] h-48 sm:h-52 rounded-lg overflow-hidden shrink-0 border border-slate-200/80 shadow-md relative group-hover:shadow-lg transition-all duration-300">
                  <img
                    src={workAreas[5].image}
                    alt={workAreas[5].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                </div>
              </div>
              <div className="h-0.5 w-full bg-slate-100 group-hover:bg-[#0062CD] transition-colors duration-300" />
            </div>

          </div>
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
      <section className="pillars-section" id="open-positions" style={{ padding: 'clamp(44px, 5vw, 64px) clamp(20px, 4vw, 40px) clamp(44px, 5vw, 64px)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span className="section-kicker">OPEN POSITIONS</span>
          <h2 className="section-title font-semibold">Explore Our Roles</h2>
          <p className="text-base text-slate-700 font-medium leading-relaxed" style={{ maxWidth: '640px', marginBottom: '14px' }}>
            The roles below represent the kinds of positions we typically hire for. Use them as a guide — even
            if the exact role isn't listed, we are always open to hearing from talented engineers and creatives.
          </p>
          {/* Disclaimer */}
          <p className="text-xs text-slate-700 font-semibold mb-8 inline-flex items-center gap-2 bg-amber-50/90 border border-amber-300/80 px-3 py-1.5 rounded-lg shadow-xs">
            <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" aria-hidden="true" />
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



    </div>
  )
}
