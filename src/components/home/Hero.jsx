import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import TechNetwork3D from './TechNetwork3D.jsx'

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden font-montserrat bg-[#edf1f5]"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f4f8 40%, #e9edf3 100%)',
      }}
      aria-label="Hero Section"
    >
      {/* ── Continuous background ambient lighting across entire hero ── */}
      <div 
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 75% 50%, rgba(255,255,255,0.9) 0%, rgba(241,244,248,0.5) 50%, transparent 100%)',
        }}
      />

      {/* ── Top rule — thin separator below fixed navbar ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200/80 z-10" />

      {/* ── Main grid: 50% text / 50% 3D animation ─────────────── */}
      <div
        className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12
                    pt-28 sm:pt-32 lg:pt-36
                    pb-12 sm:pb-16 lg:pb-16
                    flex flex-col lg:grid lg:grid-cols-[50fr_50fr]
                    items-center min-h-[540px] lg:min-h-[90vh]"
      >

        {/* ══ LEFT COLUMN: Text + CTA ══ */}
        <div
          className="relative z-20 flex flex-col items-start justify-center
                      text-left max-w-xl lg:max-w-none
                      mx-auto lg:mx-0
                      pr-0 lg:pr-6 xl:pr-10 font-montserrat
                      py-6 lg:py-0"
        >
          {/* Kicker badge */}
          <div
            className="hero-line hero-line-1
                        inline-flex items-center gap-2
                        px-3.5 py-1.5 rounded-full
                        border border-slate-200/90 bg-white/90 backdrop-blur-md
                        text-[11px] font-bold tracking-widest
                        text-slate-600 uppercase
                        shadow-sm mb-6 font-montserrat"
          >
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            Engineering at Scale
          </div>

          {/* Headline */}
          <h1
            className="hero-line hero-line-2
                       font-montserrat font-extrabold
                       text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem]
                       text-[#0f172a]
                       tracking-tight leading-[1.08]
                       uppercase mb-5"
          >
            We Build Digital Experiences That Matter
          </h1>

          {/* Subtext */}
          <p
            className="hero-line hero-line-3
                        text-sm sm:text-base lg:text-[15.5px]
                        text-slate-600 leading-relaxed
                        max-w-[44ch] font-montserrat mb-8"
          >
            We partner with ambitious companies to deliver scalable cloud
            architecture, custom software development, and intelligent
            digital transformation.
          </p>

          {/* CTA Row */}
          <div className="hero-line hero-line-4 flex flex-wrap items-center gap-3.5 font-montserrat">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2.5
                         bg-[#111111] text-white
                         px-7 py-3.5 rounded-xl
                         text-xs font-bold tracking-widest uppercase
                         hover:bg-[#1A1A1A]
                         transition-all duration-200
                         shadow-md hover:shadow-slate-900/20 hover:shadow-lg
                         active:scale-95 focus-visible:outline-none
                         focus-visible:ring-2 focus-visible:ring-slate-900
                         font-montserrat cursor-pointer"
            >
              <span>Let&apos;s Build</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-2
                         px-7 py-3.5 rounded-xl
                         border border-slate-300/80 bg-white/85 backdrop-blur-md
                         text-xs font-bold tracking-widest uppercase
                         text-slate-700
                         hover:border-slate-400 hover:text-slate-900 hover:bg-white
                         transition-all duration-200
                         active:scale-95 shadow-sm
                         font-montserrat cursor-pointer"
            >
              Learn More
            </Link>
          </div>

          {/* Social proof micro-strip */}
          <div
            className="hero-line hero-line-4
                        mt-10 pt-8 border-t border-slate-300/60 w-full
                        flex flex-wrap items-center gap-x-8 gap-y-3
                        text-xs text-slate-500 font-semibold uppercase
                        tracking-wider font-montserrat"
          >
            <span className="flex items-center gap-2">
              <span className="text-slate-900 font-extrabold text-base">50+</span>
              Projects Delivered
            </span>
            <span className="hidden sm:block w-px h-4 bg-slate-300" />
            <span className="flex items-center gap-2">
              <span className="text-slate-900 font-extrabold text-base">99.9%</span>
              Uptime SLA
            </span>
            <span className="hidden sm:block w-px h-4 bg-slate-300" />
            <span className="flex items-center gap-2">
              <span className="text-slate-900 font-extrabold text-base">24h</span>
              Response Guarantee
            </span>
          </div>
        </div>

        {/* ══ RIGHT COLUMN: Compact Puzzle-Assembly 3D Animation ══ */}
        <div
          className="order-first lg:order-last
                      w-full flex items-center justify-center
                      relative py-4 lg:py-8"
          aria-hidden="true"
        >
          {/* Centrepiece container — max 420px, breathing space on all sides */}
          <div className="flex items-center justify-center w-full">
            <TechNetwork3D />
          </div>
        </div>

      </div>

      {/* ── Bottom edge thin separator ───────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200/80" />
    </section>
  )
}
