import Container from '../common/Container.jsx'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 sm:py-28 bg-white font-montserrat scroll-mt-28">
      <Container className="font-montserrat">

        {/* SECTION HEADER */}
        <div data-reveal="up" className="mb-14 font-montserrat flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight font-montserrat uppercase">
              <span className="gsap-mask-wrapper">
                <span className="gsap-mask-line">Latest Insights</span>
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-medium leading-relaxed font-montserrat">
            Perspectives from our engineering architects on AI systems, digital sovereignty, and cloud modernization.
          </p>
        </div>

        {/* ASYMMETRIC EDITORIAL INSIGHTS */}
        <div className="space-y-8 font-montserrat">

          {/* TOP BANNER CARD WITH OVERLAPPING FLOATING CARD */}
          <div
            data-reveal="up"
            className="relative bg-slate-950 rounded-xl overflow-hidden shadow-xs hover:shadow-2xl border border-slate-200 min-h-[320px] lg:min-h-[360px] flex items-center justify-between font-montserrat group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            {/* Background Graphic */}
            <img
              src="/images/services/ai-automation-new.jpg"
              alt="AD FutureStack Research Institute - Augmented Engineering & AI Systems Report"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.5] group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none" />

            {/* Overlapping Floating White Card on Right */}
            <div className="relative z-10 my-6 mr-6 sm:mr-12 ml-auto max-w-md bg-white p-7 sm:p-9 shadow-xl rounded-xl border border-slate-200 font-montserrat transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0062CD] block mb-2">
                AD FutureStack Research
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug font-montserrat">
                Realizing augmented engineering
              </h3>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between font-montserrat">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 block">
                  RESEARCH REPORT
                </span>
                <span className="text-xs font-bold text-[#0062CD] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read Report <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* BOTTOM ASYMMETRIC ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-montserrat items-stretch">

            {/* LEFT DEEP NAVY BLUE CARD (Enters from LEFT) */}
            <div
              data-reveal="left"
              className="lg:col-span-5 bg-[#003882] text-white rounded-xl p-7 sm:p-9 shadow-xs hover:shadow-xl flex flex-col justify-between space-y-8 font-montserrat border border-[#004bb0]/30 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5"
            >
              <div className="space-y-4 font-montserrat">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-200 block">
                  Digital Sovereignty
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug font-montserrat">
                  Open source: Key to reclaiming public sector digital sovereignty
                </h3>
              </div>

              <Link
                to="/capabilities"
                className="text-xs font-mono font-bold uppercase tracking-wider text-blue-200 inline-flex items-center gap-1.5"
              >
                <span>Read Full Whitepaper</span>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>
            </div>

            {/* RIGHT WHITE REPORT CARD (Enters from RIGHT) */}
            <div
              data-reveal="right"
              className="lg:col-span-7 bg-white rounded-xl p-7 sm:p-9 shadow-xs hover:shadow-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-8 font-montserrat transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 cursor-pointer group"
            >
              <div className="space-y-3 flex-1 font-montserrat">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0062CD] block">
                  Technical Report
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug font-montserrat">
                  Data-powered Innovation Review | Wave 12
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed font-montserrat">
                  Analyzing real-time AI telemetry, automated microservices deployment, and enterprise cloud efficiency.
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0062CD] uppercase tracking-wider font-montserrat">
                    <span>View Innovation Review</span>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </div>

              <div className="w-full sm:w-48 h-36 sm:h-40 rounded-lg overflow-hidden shrink-0 shadow-xs border border-slate-200 bg-slate-950">
                <img
                  src="/images/capabilities/cloud-devops.webp"
                  alt="AD FutureStack Telemetry Report"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform opacity-95 group-hover:opacity-100"
                />
              </div>
            </div>

          </div>

        </div>


      </Container>
    </section>
  )
}

