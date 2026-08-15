import Container from '../common/Container.jsx'
import { Link } from 'react-router-dom'

export default function Technologies() {
  return (
    <section className="py-16 sm:py-24 bg-white font-montserrat">
      <Container className="font-montserrat">

        {/* SECTION TITLE */}
        <div className="mb-12 font-montserrat">
          <h2 className="text-3xl sm:text-6xl font-bold text-slate-900 tracking-tight font-montserrat">
            Latest insights
          </h2>
        </div>

        {/* ASYMMETRIC EDITORIAL INSIGHTS MATCHING REFERENCE IMAGE 3 */}
        <div className="space-y-8 font-montserrat">

          {/* TOP BANNER CARD WITH OVERLAPPING WHITE BADGE */}
          <div className="relative bg-slate-950 rounded-2xl overflow-hidden shadow-xl min-h-[320px] lg:min-h-[360px] flex items-center justify-between font-montserrat group">

            {/* Background Abstract Graphic */}
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80"
              alt="AD FutureStack Research Institute - Augmented Engineering & AI Systems Report"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6] group-hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />

            {/* Overlapping Floating White Card on Right */}
            <div className="relative z-10 my-6 mr-6 sm:mr-12 ml-auto max-w-md bg-white p-8 sm:p-10 shadow-2xl rounded-xl border border-slate-100 font-montserrat">
              <span className="text-xs font-montserrat text-slate-500 font-semibold block mb-2">
                — AD FutureStack Research Institute
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug font-montserrat">
                Realizing augmented engineering
              </h3>
              <div className="mt-8 pt-4 border-t border-slate-100 font-montserrat">
                <span className="text-[10px] font-montserrat font-bold uppercase tracking-widest text-violet-700 block">
                  RESEARCH INSTITUTE REPORT
                </span>
              </div>
            </div>

          </div>

          {/* BOTTOM ASYMMETRIC ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-montserrat">

            {/* LEFT BLUE CARD */}
            <div className="lg:col-span-5 bg-violet-800 text-white rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col justify-between space-y-8 font-montserrat group hover:bg-violet-900 transition-colors">
              <div className="space-y-4 font-montserrat">
                <span className="text-xs font-montserrat text-violet-200 font-semibold block">
                  — AD FutureStack Research Institute
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug font-montserrat">
                  Open source: Key to reclaiming public sector digital sovereignty
                </h3>
              </div>

              <Link
                to="/capabilities"
                className="text-xs font-montserrat font-bold uppercase tracking-wider text-violet-200 group-hover:text-white transition-colors"
              >
                Read Full Whitepaper →
              </Link>
            </div>

            {/* RIGHT OVERLAPPING WHITE REPORT CARD WITH THUMBNAIL */}
            <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-8 sm:p-10 shadow-md border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-8 font-montserrat group">
              <div className="space-y-4 flex-1 font-montserrat">
                <span className="text-xs font-montserrat text-slate-500 font-semibold block">
                  — Report
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug font-montserrat group-hover:text-violet-700 transition-colors">
                  Data-powered Innovation Review | Wave 12
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed font-montserrat">
                  Analyzing real-time AI telemetry, automated microservices deployment, and enterprise cloud efficiency.
                </p>
              </div>

              <div className="w-full sm:w-48 h-40 rounded-xl overflow-hidden shrink-0 shadow-md border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                  alt="AD FutureStack Telemetry & Enterprise Cloud Innovation Review Report"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>

        </div>

      </Container>
    </section>
  )
}
