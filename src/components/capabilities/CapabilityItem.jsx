import { useState } from 'react'
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react'
import { capabilities } from '../../data/capabilities.js'
import { Link } from 'react-router-dom'

export default function CapabilitiesInteractiveShowcase() {
  const [activeId, setActiveId] = useState(capabilities[0]?.id || 'fullstack')
  const activeCapability = capabilities.find((c) => c.id === activeId) || capabilities[0]

  return (
    <section className="my-12 lg:my-20">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-slate-200 mb-12 gap-6">
        <div>
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-violet-700 uppercase block mb-2">
            01 / ENTERPRISE MATRIX
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight uppercase">
            Capabilities Ecosystem
          </h2>
        </div>
        <p className="text-sm text-slate-600 max-w-md leading-relaxed font-normal">
          Explore our domain matrix engineered for sub-second latency, enterprise security, and continuous delivery.
        </p>
      </div>

      {/* TCS / WIPRO STYLE SPLIT INTERACTIVE SHOWCASE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

        {/* LEFT COLUMN: LIST SELECTOR */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            {capabilities.map((item, index) => {
              const isActive = activeId === item.id
              const itemNum = String(index + 1).padStart(2, '0')

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveId(item.id)}
                  onClick={() => setActiveId(item.id)}
                  className={`group p-6 rounded-2xl transition-all duration-300 cursor-pointer border select-none ${isActive
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xl'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-sm font-bold ${isActive ? 'text-violet-400' : 'text-slate-400 group-hover:text-slate-600'
                        }`}>
                        {itemNum}
                      </span>
                      <h3 className={`text-base sm:text-lg font-bold ${isActive ? 'text-white' : 'text-slate-900'
                        }`}>
                        {item.title}
                      </h3>
                    </div>

                    <div className={`h-8 w-8 rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-violet-700 text-white' : 'bg-slate-100 text-slate-400 group-hover:text-slate-700'
                      }`}>
                      <ArrowRight className={`h-4 w-4 transition-transform ${isActive ? 'translate-x-0.5' : ''}`} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="p-6 rounded-2xl bg-violet-50 border border-violet-100 hidden lg:block">
            <div className="flex items-center gap-3 text-violet-900 font-bold text-xs uppercase tracking-wider mb-1">
              <Zap className="h-4 w-4 text-violet-700" />
              <span>Dedicated Engineering Pods</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our pods integrate directly into your sprint workflow with daily standups and transparent telemetry.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: ANIMATED LARGE PREVIEW CARD */}
        <div className="lg:col-span-7">
          <div className="relative rounded-3xl overflow-hidden bg-slate-950 text-white border border-slate-800 shadow-2xl h-full flex flex-col justify-between min-h-[460px] group">

            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                key={activeCapability.id}
                src={activeCapability.image}
                alt={`AD FutureStack Engineering Domain - ${activeCapability.title}`}
                loading="lazy"
                className="w-full h-full object-cover filter brightness-[0.4] transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20" />
            </div>

            {/* Top Bar Overlay */}
            <div className="relative z-10 p-8 flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-violet-400 bg-slate-900/80 border border-violet-500/40 px-3.5 py-1 rounded-full backdrop-blur-md">
                {activeCapability.category}
              </span>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-900/60 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800">
                <ShieldCheck className="h-4 w-4 text-violet-400" />
                <span>Enterprise Verified</span>
              </div>
            </div>

            {/* Bottom Content Overlay */}
            <div className="relative z-10 p-8 space-y-6">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
                {activeCapability.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl font-normal">
                {activeCapability.description}
              </p>

              {/* Technologies List */}
              <div className="pt-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2">
                  Engineered With
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCapability.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono bg-slate-900/90 text-slate-200 border border-slate-700/80 px-3 py-1 rounded-lg backdrop-blur-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-violet-700 text-white font-extrabold text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl hover:bg-violet-700 transition-all shadow-lg hover:shadow-violet-700/30"
                >
                  <span>REQUEST ARCHITECTURE SCOPE</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
