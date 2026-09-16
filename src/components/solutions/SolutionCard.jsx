import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SolutionCard({ solution }) {
  return (
    <div className="bg-white rounded-3xl p-8 flex flex-col justify-between border border-slate-200 shadow-md hover:border-[#0062CD]/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0062CD] bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1 rounded-full">
            {solution.tag}
          </span>
          <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
            {iconMap[solution.icon]}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{solution.title}</h3>
        <span className="text-sm font-bold text-[#0062CD] block mb-4">{solution.subtitle}</span>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">{solution.description}</p>

        <div className="space-y-3 pt-6 border-t border-slate-100 mb-8">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2">Key Architecture Highlights</span>
          {solution.bullets.map((b, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-[#0062CD] shrink-0" />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>

      <Link
        to="/contact"
        className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 hover:bg-[#0062CD] hover:border-[#0062CD] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all"
      >
        <span>Deploy Architecture</span>
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
