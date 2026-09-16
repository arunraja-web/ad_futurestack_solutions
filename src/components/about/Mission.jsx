import { Target } from 'lucide-react'

export default function Mission() {
  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:border-[#0062CD]/50 hover:shadow-xl transition-all">
      <div className="h-12 w-12 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#0062CD] mb-6">
        <Target className="h-6 w-6" />
      </div>
      <h3 className="text-2xl font-bold text-slate-900 uppercase mb-3">Our Mission</h3>
      <p className="text-sm text-slate-600 leading-relaxed">
        To empower ambitious businesses worldwide by delivering robust, high-performance software architecture that scales seamlessly from launch to millions of daily active users.
      </p>
    </div>
  )
}
