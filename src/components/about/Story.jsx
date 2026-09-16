import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { STATS } from '../../utils/constants.js'

export default function Story() {
  const highlights = [
    'Agile engineering tailored to real business objectives',
    'Modern architecture focused on speed, security & scalability',
    'Passionate team of software engineers and system architects',
  ]

  const displayStats = STATS.slice(0, 3)

  return (
    <section id="story" className="py-16 sm:py-20 lg:py-28 bg-white font-montserrat border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-montserrat">
        {/* DIRECT CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center font-montserrat">

          {/* LEFT: Cinematic Image Composition (Expanded lg:col-span-7, Taller Aspect Ratio) */}
          <div data-reveal="left" className="lg:col-span-7 relative">
            <div className="group relative rounded-none overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.12)] border border-slate-200/90 bg-slate-950 transition-all duration-700">
              
              {/* Image Container with CAD/Blueprint Markers and Cinematic Mask */}
              <div className="cinematic-image-wrapper relative overflow-hidden aspect-[4/3] sm:aspect-[16/10]">
                {/* CAD Corner Brackets */}
                <span className="absolute top-3.5 left-3.5 w-4 h-4 border-t-2 border-l-2 border-white/80 z-20 pointer-events-none" />
                <span className="absolute top-3.5 right-3.5 w-4 h-4 border-t-2 border-r-2 border-white/80 z-20 pointer-events-none" />
                <span className="absolute bottom-3.5 left-3.5 w-4 h-4 border-b-2 border-l-2 border-white/80 z-20 pointer-events-none" />
                <span className="absolute bottom-3.5 right-3.5 w-4 h-4 border-b-2 border-r-2 border-white/80 z-20 pointer-events-none" />

                {/* Monospace Figure Label */}
                <div className="absolute top-4 left-9 z-20 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-slate-200 bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 rounded-none border border-slate-700/60 shadow-xs">
                  Fig. 01 — Engineering Team
                </div>

                <img
                  src="/images/about/team-collaboration.webp"
                  alt="AD FutureStack Software Architecture Team Collaboration"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
              </div>

            </div>
          </div>

          {/* RIGHT: Editorial Storytelling Content (Refined lg:col-span-5, Well-Balanced Spacing) */}
          <div data-reveal="right" className="lg:col-span-5 space-y-5 sm:space-y-6 font-montserrat">

            {/* Masked Main Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.65rem] font-bold text-slate-900 tracking-tight leading-[1.14] uppercase font-montserrat">
              <span className="gsap-mask-wrapper">
                <span className="gsap-mask-line">Turning Complex Ideas Into</span>
              </span>
              <span className="gsap-mask-wrapper mt-1">
                <span className="gsap-mask-line text-[#0062CD] font-montserrat">Digital Reality</span>
              </span>
            </h2>

            {/* Sub-headline / Narrative Paragraph */}
            <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed font-montserrat">
              AD Future Stack is a forward-thinking technology studio dedicated to engineering modern software, intelligent cloud systems, and high-impact digital experiences.
            </p>

            {/* Feature List */}
            <div className="gsap-stagger-list border-y border-slate-200/90 divide-y divide-slate-200/90 font-montserrat py-0.5">
              {highlights.map((item) => (
                <div key={item} className="gsap-stagger-item group py-3 sm:py-3.5 flex items-center justify-between gap-3 sm:gap-4 font-montserrat cursor-default">
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#0062CD] group-hover:translate-x-1 transition-all duration-300 font-montserrat">
                    {item}
                  </span>
                  <CheckCircle2 className="h-4 sm:h-5 w-4 sm:w-5 text-[#0062CD] shrink-0" />
                </div>
              ))}
            </div>

            {/* 3-Column Stats Strip */}
            <div className="grid grid-cols-3 divide-x divide-slate-200 border border-slate-200/90 rounded-none bg-slate-50/70 p-3 sm:p-3.5 text-center font-montserrat">
              {displayStats.map((stat) => (
                <div key={stat.label} className="px-1.5 sm:px-2 font-montserrat">
                  <span className="text-lg sm:text-xl xl:text-2xl font-bold text-slate-900 block leading-tight font-montserrat">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 mt-0.5 sm:mt-1 block font-montserrat">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Primary CTA Button */}
            <div className="pt-1 sm:pt-2">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 bg-[#0062CD] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-[#0052b0] transition-all duration-300 shadow-lg shadow-[#0062CD]/20 hover:shadow-[#0062CD]/35 hover:-translate-y-0.5 active:scale-95 cursor-pointer font-montserrat"
              >
                <span>Explore Our Journey</span>
                <ArrowRight className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}