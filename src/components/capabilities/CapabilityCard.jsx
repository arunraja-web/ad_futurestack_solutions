import { Code, Cloud, Cpu, Smartphone, ArrowRight } from 'lucide-react'

const iconMap = {
  Code: <Code className="h-6 w-6 text-violet-400" />,
  Cloud: <Cloud className="h-6 w-6 text-violet-400" />,
  Cpu: <Cpu className="h-6 w-6 text-violet-400" />,
  Smartphone: <Smartphone className="h-6 w-6 text-violet-400" />
}

export default function CapabilityCard({ capability }) {
  return (
    <div className="group relative rounded-3xl overflow-hidden shadow-xl bg-slate-900 border border-slate-800 flex flex-col justify-between h-[420px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-900/20 hover:border-violet-500/50">

      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={capability.image}
          alt={`AD FutureStack Engineering Capability - ${capability.title}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-[0.55] group-hover:brightness-[0.45]"
        />
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
      </div>

      {/* Top Header Badge */}
      <div className="relative z-10 p-6 flex items-center justify-between">
        <div className="h-12 w-12 rounded-2xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:border-violet-500/60 group-hover:bg-violet-700 group-hover:text-white transition-all duration-300">
          {iconMap[capability.iconName] || <Code className="h-6 w-6 text-violet-400" />}
        </div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-violet-300 bg-slate-900/80 border border-violet-500/40 backdrop-blur-md px-3 py-1 rounded-full">
          {capability.category}
        </span>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 p-6 sm:p-8 space-y-4">
        <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-violet-300 transition-colors">
          {capability.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
          {capability.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {capability.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono bg-slate-900/80 text-slate-300 border border-slate-700/80 backdrop-blur-sm px-2.5 py-0.5 rounded-md"
            >
              {tech}
            </span>
          ))}
          {capability.technologies.length > 4 && (
            <span className="text-[10px] font-mono bg-violet-950/80 text-violet-300 border border-violet-800/80 px-2 py-0.5 rounded-md">
              +{capability.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* CTA Interaction Footer */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-white group-hover:text-violet-400 transition-colors">
          <span className="uppercase tracking-wider">Explore Capability</span>
          <div className="h-8 w-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-violet-700 group-hover:border-violet-700 group-hover:text-white group-hover:translate-x-1 transition-all">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>

    </div>
  )
}
