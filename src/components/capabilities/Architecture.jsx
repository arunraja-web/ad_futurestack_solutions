import { Layers, ShieldCheck, Zap, Database } from 'lucide-react'

const principles = [
  {
    num: '01',
    title: 'Zero Trust Security',
    icon: ShieldCheck,
    description: 'Strict authentication, encrypted payloads at rest and in transit, and role-restricted microservices.'
  },
  {
    num: '02',
    title: 'Sub-100ms Edge Latency',
    icon: Zap,
    description: 'Edge CDN routing, Redis cache warming, and optimized client bundles for instant interaction.'
  },
  {
    num: '03',
    title: 'Decoupled Microservices',
    icon: Layers,
    description: 'Independent containerized deployment units that prevent single points of failure.'
  },
  {
    num: '04',
    title: 'ACID & Eventual Consistency',
    icon: Database,
    description: 'PostgreSQL relational schemas combined with high-throughput event buses for async jobs.'
  }
]

export default function Architecture() {
  return (
    <div className="my-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-6 mb-12 gap-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0062CD] uppercase block mb-2">
            03 / ARCHITECTURE PRINCIPLES
          </span>
          <h3 className="text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            Non-Negotiable SLAs
          </h3>
        </div>
        <p className="text-sm text-slate-600 max-w-md">
          How we guarantee enterprise scalability and zero downtime across global installations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {principles.map((p) => {
          const Icon = p.icon
          return (
            <div key={p.title} className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:border-[#0062CD]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-mono font-bold text-[#0062CD]/40 group-hover:text-[#0062CD] transition-colors">
                    {p.num}
                  </span>
                  <div className="h-10 w-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#0062CD] group-hover:bg-[#0062CD] group-hover:text-white transition-all">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h4 className="text-lg font-extrabold text-slate-900 mb-3">{p.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 text-[10px] font-mono font-bold text-[#0062CD] uppercase tracking-widest">
                Enterprise SLA Verified
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
