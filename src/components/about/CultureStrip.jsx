import React from 'react'
import { UserCheck, Clock, ShieldCheck, Key } from 'lucide-react'

const workingPrinciples = [
  {
    icon: UserCheck,
    title: 'Direct Access to Senior Engineers',
    tag: 'No Intermediaries',
    description: 'Work directly with lead architects and senior software developers throughout discovery, system design, and delivery cycles.'
  },
  {
    icon: Clock,
    title: 'Transparent Sprint Reporting',
    tag: 'Predictable Velocity',
    description: 'Bi-weekly working software demos, verifiable commit logs, and milestone tracking ensure no hidden surprises.'
  },
  {
    icon: ShieldCheck,
    title: 'NDA-Secured Discovery',
    tag: 'Confidentiality First',
    description: 'Mutual non-disclosure agreements upfront with enterprise data isolation for proprietary algorithms and IP protection.'
  },
  {
    icon: Key,
    title: 'Full IP Ownership on Handoff',
    tag: 'Zero Vendor Lock-in',
    description: 'Complete codebase handoff with clean modular architecture, full copyright transfer, and thorough self-documenting code.'
  }
]

export default function CultureStrip() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold text-violet-700 uppercase tracking-widest block mb-2">
            HOW WE COLLABORATE
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Client Partnership Principles
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            We operate as an extension of your internal product team, establishing clear accountability, rapid iteration, and complete intellectual property ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workingPrinciples.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:border-violet-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-700 mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
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
