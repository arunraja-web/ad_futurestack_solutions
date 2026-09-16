import React from 'react'
import { Layers, Code2, Cloud, Cpu, CheckCircle } from 'lucide-react'

const engineeringDisciplines = [
  {
    role: 'Lead Solutions Architects',
    icon: Layers,
    focus: 'System Design & High-Scale Resilience',
    description: 'Owns end-to-end multi-tenant schema design, distributed event-driven systems, fault tolerance, and foundational architectural roadmaps.',
    capabilities: ['Microservices Topology', 'Domain-Driven Design', 'Zero Technical Debt Architecture']
  },
  {
    role: 'Senior Full-Stack Engineers',
    icon: Code2,
    focus: 'Product Engineering & Performance',
    description: 'Crafts modular, component-driven client interfaces and high-throughput backend services with comprehensive automated test coverage.',
    capabilities: ['Strict Type Systems', 'Optimistic UI & Caching', 'Sub-second Response Times']
  },
  {
    role: 'Cloud & DevOps Specialists',
    icon: Cloud,
    focus: 'Infrastructure, Security & CI/CD',
    description: 'Configures resilient Kubernetes infrastructure, zero-downtime deployment pipelines, automated telemetry monitoring, and SOC2 security hardening.',
    capabilities: ['Infrastructure as Code', 'Zero-Downtime Deployments', 'Continuous Vulnerability Scans']
  },
  {
    role: 'AI & Automation Engineers',
    icon: Cpu,
    focus: 'Intelligent Workflows & Agent Frameworks',
    description: 'Integrates autonomous AI agent swarms, vector retrieval systems, and customized model pipelines into existing enterprise workflows.',
    capabilities: ['Autonomous Agent Pipelines', 'Custom RAG Workflows', 'Deterministic Automation Logic']
  }
]

export default function TeamSnapshot() {
  return (
    <section id="team" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-bold text-violet-700 uppercase tracking-widest block mb-2">
            OUR COLLECTIVE & DISCIPLINES
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Senior Engineering Craftsmanship Across Four Pillars
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            AD FutureStack operates without junior developer outsourcing or sales intermediaries. Every project is planned, architected, and built directly by seasoned practitioners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringDisciplines.map((disc, idx) => {
            const Icon = disc.icon
            return (
              <div
                key={idx}
                className="bg-slate-50/70 p-7 rounded-2xl border border-slate-200/80 hover:border-violet-400/60 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-xl bg-violet-100/70 border border-violet-200/60 flex items-center justify-center text-violet-700 mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 block mb-1">
                    {disc.focus}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {disc.role}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {disc.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-200/60">
                  {disc.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 text-[11px] font-medium text-slate-700">
                      <CheckCircle className="h-3.5 w-3.5 text-violet-600 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
