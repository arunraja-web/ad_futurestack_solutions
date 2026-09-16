import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, Clock, ShieldCheck, Cpu, Code2, Cloud } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation.js'

const filterCategories = [
  { id: 'all', label: 'Featured' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'delivery', label: 'Delivery & Quality' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'security', label: 'Security & Cloud' }
]

const foundationItems = [
  {
    id: 'feat-1',
    category: 'architecture',
    kicker: 'THOUGHT LEADERSHIP',
    title: 'Senior-Level System Architecture & Zero Technical Debt',
    description: 'We architect production software as an enduring corporate asset. Every system is planned and written exclusively by lead architects and senior engineers—eliminating brittle monoliths, junior outsourcing, and tech debt before it begins.',
    readTime: '3 min read',
    date: '03 Sep 2026',
    image: '/images/home/architecture-blueprint.webp',
    link: '/capabilities',
    isFeatured: true
  },
  {
    id: 'card-1',
    category: 'delivery',
    kicker: 'EXECUTION DISCIPLINE',
    title: 'Predictable Velocity & Transparent Sprint Demos',
    description: 'Weekly working software demos, verifiable commit logs, and committed milestone roadmaps ensure zero delivery surprises and predictable timelines.',
    readTime: '2 min read',
    date: '03 Sep 2026',
    image: '/images/about/team-collaboration.webp',
    link: '#our-values'
  },
  {
    id: 'card-2',
    category: 'ai',
    kicker: 'INTELLIGENT SYSTEMS',
    title: 'Autonomous AI Workflows & Deterministic Swarms',
    description: 'Enterprise AI workflows integrated directly into core business operations with deterministic safety, custom RAG pipelines, and vector indexing.',
    readTime: '2 min read',
    date: '02 Sep 2026',
    image: '/images/capabilities/ai-automation.webp',
    link: '/services'
  },
  {
    id: 'card-3',
    category: 'security',
    kicker: 'ENTERPRISE RESILIENCE',
    title: 'Bank-Grade Zero-Trust Cybersecurity & Cloud DevOps',
    description: 'Immutable infrastructure, Kubernetes clustering, end-to-end encryption, and automated vulnerability scanning from day one.',
    readTime: '4 min read',
    date: '27 Aug 2026',
    image: '/images/capabilities/cybersecurity.webp',
    link: '/capabilities'
  },
  {
    id: 'card-4',
    category: 'architecture',
    kicker: 'CLIENT OWNERSHIP',
    title: 'Complete IP Ownership & Direct Senior Access',
    description: '100% intellectual property transfer upon delivery, accompanied by self-documenting codebases, schema diagrams, and zero vendor lock-in.',
    readTime: '3 min read',
    date: '25 Aug 2026',
    image: '/images/capabilities/cloud-devops.webp',
    link: '#our-story'
  }
]

export default function EngineeringFoundation() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1, once: false })

  const filteredItems = activeFilter === 'all'
    ? foundationItems
    : foundationItems.filter((item) => item.category === activeFilter)

  const featuredItem = filteredItems.find((item) => item.isFeatured) || filteredItems[0]
  const gridItems = filteredItems.filter((item) => item.id !== featuredItem?.id).slice(0, 4)

  return (
    <section
      ref={sectionRef}
      className="bg-slate-50 py-16 sm:py-24 border-y border-slate-200/80 font-montserrat relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mb-8 sm:mb-10 flex flex-col items-center text-center transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-xs font-mono font-bold text-[#0062CD] uppercase tracking-widest block mb-2">
            OUR ENGINEERING FOUNDATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
            Architectural Principles, Standards & Practices
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed font-normal">
            We bring senior technical craftsmanship to every codebase, prioritizing clean maintainable architecture that enables sustained enterprise growth.
          </p>
        </div>



        {/* Grant Thornton Signature Bento Magazine Grid with Cursor Hover Expand Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
          {/* 1. Left Featured Tall Card */}
          {featuredItem && (
            <div
              className={`lg:col-span-5 flex flex-col transition-all duration-700 ease-out delay-150 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="relative rounded-3xl overflow-hidden bg-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 group flex-1 flex flex-col justify-end min-h-[500px] sm:min-h-[580px] lg:min-h-[620px] cursor-pointer">
                {/* Background Image with Zoom on Hover */}
                <img
                  src={featuredItem.image}
                  alt={featuredItem.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.target.src = '/images/about/team-collaboration.webp'
                  }}
                />

                {/* Gradient blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Floating White Content Card (Glides up and expands on cursor hover) */}
                <div className="relative z-10 m-3 sm:m-4 bg-white rounded-2xl p-6 sm:p-7 shadow-md group-hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-2">
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-[#0062CD] uppercase tracking-wider block mb-2">
                    {featuredItem.kicker}
                  </span>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 leading-snug mb-2 group-hover:text-[#0062CD] transition-colors duration-300">
                    {featuredItem.title}
                  </h3>

                  {/* Slide-Up Expandable Description on Hover */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                    <div className="overflow-hidden">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-2 pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out delay-75 line-clamp-4">
                        {featuredItem.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. Right Side 2x2 Grid with Interactive Slide-Up Expand Animation */}
          <div
            className={`lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {gridItems.map((item) => {
              const isAnchor = item.link.startsWith('#')
              return (
                <div
                  key={item.id}
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col justify-end min-h-[300px] sm:min-h-[315px] cursor-pointer"
                >
                  {/* Card Image with smooth scale on hover */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.target.src = '/images/about/team-collaboration.webp'
                    }}
                  />

                  {/* Gradient blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Floating White Content Card (Glides up and expands on cursor hover) */}
                  <div className="relative z-10 m-2.5 sm:m-3.5 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-md group-hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-2">
                    <span className="text-[10px] font-mono font-bold text-[#0062CD] uppercase tracking-wider block mb-1">
                      {item.kicker}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug mb-2 group-hover:text-[#0062CD] transition-colors duration-300">
                      {item.title}
                    </h4>

                    {/* Slide-Up Expandable Description on Hover */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                      <div className="overflow-hidden">
                        <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1.5 pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out delay-75 line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Centered CTA Button */}
        <div
          className={`text-center pt-2 transition-all duration-700 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Link
            to="/capabilities"
            className="inline-flex items-center justify-center gap-2 bg-[#0062CD] hover:bg-[#004fa8] text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 shadow-md shadow-[#0062CD]/25 hover:shadow-lg active:scale-95 group"
          >
            <span>View All Engineering Capabilities</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
