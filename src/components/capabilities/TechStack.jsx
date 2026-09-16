import { technologyCategories } from '../../data/technologies.js'
import { Code2, Server, Database, Layers } from 'lucide-react'

const catIcons = {
  'Frontend & UI': <Code2 className="h-5 w-5 text-[#0062CD]" />,
  'Backend & Microservices': <Server className="h-5 w-5 text-[#0062CD]" />,
  'Database & Cloud': <Database className="h-5 w-5 text-[#0062CD]" />
}

export default function TechStack() {
  return (
    <div className="my-20 space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-6 gap-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0062CD] uppercase block mb-2">
            02 / TECH MATRIX
          </span>
          <h3 className="text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            Toolchain & Stack Breakdown
          </h3>
        </div>
        <p className="text-sm text-slate-600 max-w-md">
          Standardized languages, enterprise frameworks, and containerized deployment engines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {technologyCategories.map((cat) => (
          <div key={cat.category} className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:border-[#0062CD]/50 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="h-10 w-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center">
                {catIcons[cat.category] || <Layers className="h-5 w-5 text-[#0062CD]" />}
              </div>
              <h4 className="text-base font-bold text-slate-900 uppercase">
                {cat.category}
              </h4>
            </div>

            <ul className="space-y-4">
              {cat.items.map((item) => (
                <li key={item.name} className="flex items-center justify-between text-sm p-3 rounded-xl bg-slate-50 border border-slate-200/80 group-hover:bg-white transition-colors">
                  <span className="font-extrabold text-slate-900">{item.name}</span>
                  <span className="text-[11px] font-mono text-[#0062CD] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-[#BFDBFE] font-bold">
                    {item.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
