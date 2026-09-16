import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomeStory() {
  const highlights = [
    'Agile engineering tailored to real business objectives',
    'Modern architecture focused on speed, security & scalability',
    'Passionate team of software engineers and system architects',
  ]

  return (
    <section className="py-20 sm:py-28 bg-white font-montserrat border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-montserrat">
        {/* DIRECT CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center font-montserrat">

          {/* LEFT: Image Composition (Enters from LEFT) */}
          <div data-reveal="left" className="lg:col-span-6 relative">
            <div className="group relative rounded-xl overflow-hidden border border-slate-200 bg-slate-950 transition-all duration-500 hover:border-slate-300 hover:shadow-xl">
              
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="/images/about/team-collaboration.webp"
                  alt="AD FutureStack Software Architecture Team Collaboration"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
              </div>

              {/* MNC Quality Strip */}
              <div className="bg-slate-900 text-white px-6 py-4 border-t border-slate-800 flex items-center justify-between font-montserrat">
                <div className="flex items-center gap-3.5">
                  <div className="h-9 w-9 rounded-lg bg-[#0062CD]/20 border border-[#0062CD]/40 flex items-center justify-center text-[#0062CD] shrink-0">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-white block leading-tight font-montserrat">100%</span>
                    <span className="text-[10px] font-montserrat font-semibold uppercase tracking-wider text-slate-400 block">
                      Quality & Precision
                    </span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-slate-300 uppercase tracking-widest border-l border-slate-800 pl-6">
                  <span className="w-2 h-2 rounded-full bg-[#0062CD]" />
                  <span>Engineering Excellence</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Editorial Storytelling Content (Enters from RIGHT) */}
          <div data-reveal="right" className="lg:col-span-6 space-y-7 font-montserrat">

            {/* Main Title */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.12] sm:leading-[1.08] uppercase font-montserrat">
              Turning Complex Ideas Into <span className="text-[#0062CD] font-montserrat">Digital Reality</span>
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 font-montserrat max-w-xl">
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed font-montserrat">
                AD Future Stack is a forward-thinking technology studio dedicated to engineering modern software, intelligent cloud systems, and high-impact digital experiences.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-montserrat">
                We collaborate with visionary companies and ambitious teams to design scalable architectures from the ground up. Combining clean code standards, modern technology stacks, and agile execution, we build software designed for long-term growth.
              </p>
            </div>

            {/* Feature List */}
            <div className="border-y border-slate-200 divide-y divide-slate-200 font-montserrat py-1">
              {highlights.map((item) => (
                <div key={item} className="group py-3.5 flex items-center justify-between gap-4 font-montserrat cursor-default">
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:translate-x-1 transition-transform duration-300 font-montserrat">
                    {item}
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-[#0062CD] shrink-0" />
                </div>
              ))}
            </div>

            {/* Primary CTA Button */}
            <div className="pt-2">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 bg-[#0062CD] text-white px-8 py-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-[#0052b0] transition-all duration-300 shadow-md hover:shadow-[#0062CD]/30 hover:-translate-y-0.5 active:scale-95 cursor-pointer font-montserrat"
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

