import React from 'react'
import { Calendar, Flag, Award, Sparkles } from 'lucide-react'

const milestonesData = [
  {
    year: '2018',
    title: 'AD FutureStack Founded',
    badge: 'Foundation',
    icon: Flag,
    description: 'Established with an explicit vision: to eliminate technical debt by providing senior software architecture to growing enterprises.'
  },
  {
    year: '2020',
    title: 'Cloud & SaaS Expansion',
    badge: 'Scale',
    icon: Calendar,
    description: 'Expanded specialized practice into multi-tenant distributed SaaS platforms, high-throughput microservices, and Kubernetes orchestration.'
  },
  {
    year: '2022',
    title: 'AI & Workflow Automation',
    badge: 'Innovation',
    icon: Sparkles,
    description: 'Pioneered autonomous AI agent integration, deterministic LLM pipelines, and automated intelligence for mission-critical client operations.'
  },
  {
    year: 'Present',
    title: 'Global Enterprise Partner',
    badge: 'Milestone',
    icon: Award,
    description: 'Over 150+ digital systems and architectural frameworks successfully delivered to ambitious startups and multinational enterprise brands.'
  }
]

export default function Milestones() {
  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white font-montserrat relative overflow-hidden border-b border-slate-800">
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#0062CD] uppercase tracking-widest block mb-2">
            TRACK RECORD & EVOLUTION
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Our Journey of Architectural Rigor
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            From our founding principles to today's enterprise partnerships, our evolution has been driven by engineering quality and tangible client outcomes.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-[#0062CD]/20 via-[#0062CD]/40 to-[#0062CD]/20 pointer-events-none" />

          {milestonesData.map((m, idx) => {
            const Icon = m.icon
            return (
              <div
                key={idx}
                className="relative bg-slate-800/60 border border-slate-700/70 p-7 rounded-2xl flex flex-col justify-between hover:border-[#0062CD]/60 hover:bg-slate-800/90 transition-all duration-300 group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-xl bg-[#0062CD]/20 border border-[#0062CD]/40 text-[#0062CD] flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#0062CD] bg-[#0062CD]/15 border border-[#0062CD]/40 px-3 py-1 rounded-full uppercase tracking-wider">
                      {m.year}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-1">
                    {m.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#0062CD] transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
