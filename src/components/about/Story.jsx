import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Story() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 font-montserrat">
      {/* DIRECT CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center font-montserrat">

        {/* LEFT: Image Composition & Floating Stat Badge */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 group">
            <img
              src="/images/about/team-collaboration.webp"
              alt="AD FutureStack Software Architecture Team Collaboration"
              loading="lazy"
              className="w-full h-[280px] sm:h-[420px] lg:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>

          {/* Floating Stat Card */}
          <div className="absolute -bottom-6 -right-2 sm:bottom-8 sm:-right-6 bg-slate-900 text-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-slate-800 hidden sm:block">
            <div className="flex items-center gap-3 sm:gap-4 font-montserrat">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white shrink-0">
                <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-white block leading-none font-montserrat">100%</span>
                <span className="text-[10px] sm:text-[11px] font-montserrat font-bold uppercase tracking-wider text-slate-400 mt-1 block">
                  Quality & Precision
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Content Narrative */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-7 font-montserrat">

          {/* Main Title */}
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-[1.2] sm:leading-[1.15] uppercase font-montserrat">
            Turning Complex Ideas Into <span className="text-violet-700">Digital Reality</span>
          </h2>

          {/* Sub-headline / Narrative Story */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed font-montserrat">
            AD Future Stack is a forward-thinking technology studio dedicated to engineering modern software, intelligent cloud systems, and high-impact digital experiences.
          </p>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-montserrat">
            We collaborate with visionary companies and ambitious teams to design scalable architectures from the ground up. Combining clean code standards, modern technology stacks, and agile execution, we build software designed for long-term growth.
          </p>

          {/* Value Highlights */}
          <div className="space-y-3 pt-2 font-montserrat">
            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 font-montserrat">
              <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <span>Agile engineering tailored to real business objectives</span>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 font-montserrat">
              <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <span>Modern architecture focused on speed, security & scalability</span>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 font-montserrat">
              <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <span>Passionate team of software engineers and system architects</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-2 sm:pt-4">
            <Link
              to="/about"
              className="group inline-flex items-center justify-center gap-3 bg-violet-700 text-white font-extrabold text-xs uppercase tracking-widest px-8 sm:px-9 py-3.5 sm:py-4 rounded-xl hover:bg-violet-800 transition-all duration-300 shadow-lg hover:shadow-violet-700/30 active:scale-95 cursor-pointer w-full sm:w-auto font-montserrat"
            >
              <span>EXPLORE OUR JOURNEY</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}