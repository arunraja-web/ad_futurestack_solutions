import { ShieldCheck, Zap, Lock, Code2 } from 'lucide-react'

const valuesList = [
  {
    title: 'Uncompromising Quality',
    icon: ShieldCheck,
    description: 'We write strict TypeScript, comprehensive automated tests, and clean modular code.'
  },
  {
    title: 'Velocity & Execution',
    icon: Zap,
    description: 'Rapid two-week sprint cycles with working features delivered via continuous integration.'
  },
  {
    title: 'Enterprise Security',
    icon: Lock,
    description: 'Security protocols integrated into the initial schema design, not patched on afterwards.'
  },
  {
    title: 'Developer Ownership',
    icon: Code2,
    description: 'Complete codebase handoff with full IP ownership and thorough documentation.'
  }
]

export default function Values() {
  return (
    <div className="my-16 space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-3xl font-extrabold text-slate-900 uppercase">Engineering Values</h3>
        <p className="text-slate-600 mt-2">The principles that guide every pull request and architectural decision.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {valuesList.map((v) => {
          const Icon = v.icon
          return (
            <div key={v.title} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:border-[#0062CD]/50 hover:shadow-xl transition-all">
              <div className="h-10 w-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#0062CD] mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{v.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
