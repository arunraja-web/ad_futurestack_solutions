import { Link } from 'react-router-dom'
import { ChevronRight, ArrowRight } from 'lucide-react'
import SEO from '../components/common/SEO.jsx'
import Technologies from '../components/home/Technologies.jsx'

export default function Insights() {
  return (
    <div className="insights-page relative w-full bg-[#0a0a0a] text-white font-montserrat min-h-screen">
      <SEO
        title="Latest Insights & Research — AD FutureStack"
        description="Explore research reports, architectural perspectives, and AI strategy insights from AD FutureStack software engineers and cloud architects."
        keywords="AD FutureStack Insights, AI Research Reports, Software Architecture, Enterprise Strategy"
        canonicalUrl="https://adfuturestack.com/insights"
      />

      {/* ── INSIGHTS PAGE HERO ── */}
      <section className="relative pt-32 pb-14 sm:pt-40 sm:pb-16 bg-[#0a0a0a] border-b border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#2563eb] uppercase mb-4 block">
              AD FUTURESTACK RESEARCH &amp; PERSPECTIVES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Latest <span className="text-[#2563eb]">Insights</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-2xl">
              In-depth research reports, executive perspectives, and technical blueprints on modern software engineering, generative AI integration, and scalable digital ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* ── BENTO GRID COMPONENT ── */}
      <Technologies />

      {/* ── BOTTOM CTA ── */}
      <section className="py-20 bg-gradient-to-t from-black to-[#0a0a0a] border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Turn Insights into Architecture
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mb-8">
              Work with our senior systems architects to implement high-performance, secure, and scalable solutions for your enterprise.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-semibold text-sm px-8 py-4 rounded-full transition-all shadow-xl shadow-[#0d1f4e]/50 hover:-translate-y-0.5"
            >
              <span>Schedule an Architecture Review</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
