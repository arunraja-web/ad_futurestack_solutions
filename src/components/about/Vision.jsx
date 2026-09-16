import { Compass } from 'lucide-react'

export default function Vision() {
  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:border-[#0062CD]/50 hover:shadow-xl transition-all">
      <div className="h-12 w-12 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#0062CD] mb-6">
        <Compass className="h-6 w-6" />
      </div>
      <h3 className="text-2xl font-bold text-slate-900 uppercase mb-3">Our Vision</h3>
      <p className="text-sm text-slate-600 leading-relaxed">
        To set the global benchmark for enterprise cloud engineering, intelligent automation, and developer-first platform design.
      </p>
    </div>
  )
}
