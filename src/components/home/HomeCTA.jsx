import Container from '../common/Container.jsx'
import Button from '../common/Button.jsx'
import { Clock, ShieldCheck, UserCheck } from 'lucide-react'

export default function HomeCTA() {
  return (
    <section id="contact-cta" className="relative py-24 sm:py-32 bg-white text-slate-900 overflow-hidden font-montserrat scroll-mt-28 border-t border-slate-200/80">
      {/* 1. Subtle Enterprise Technology Background Image Wash */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="/images/capabilities/cloud-devops.webp"
          alt="AD FutureStack Enterprise Cloud & Software Engineering"
          loading="lazy"
          className="w-full h-full object-cover object-center filter brightness-105 opacity-[0.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
      </div>

      {/* 2. Section Content */}
      <Container data-reveal="up" className="home-cta-content relative z-10 text-center font-montserrat px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-8 font-montserrat">
          
          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 uppercase tracking-tight font-montserrat leading-[1.12]">
            <span className="gsap-mask-wrapper">
              <span className="gsap-mask-line">Ready to Build Your <span className="text-[#0062CD] font-montserrat">Next-Gen Stack?</span></span>
            </span>
          </h2>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed font-montserrat max-w-2xl mx-auto">
            Schedule a technical discovery session with our lead architects. We’ll analyze your requirements and deliver a comprehensive proposal within 48 hours.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto font-montserrat">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="!bg-[#0062CD] hover:!bg-[#0050A8] !text-white !rounded-lg w-full sm:w-auto font-montserrat shadow-lg shadow-[#0062CD]/25 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
            >
              Schedule Architecture Call
            </Button>
            <Button
              to="/services"
              variant="secondary"
              size="lg"
              icon={false}
              className="!border !border-slate-300 !bg-slate-50 !text-slate-800 hover:!bg-slate-100 hover:!border-slate-400 backdrop-blur-xs !rounded-lg w-full sm:w-auto font-montserrat hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-xs"
            >
              Browse All Services
            </Button>
          </div>

          {/* Divider & Value Commitments */}
          <div className="pt-10 mt-10 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600 font-montserrat">
            <div className="flex items-center justify-center gap-2.5">
              <Clock className="h-4 w-4 text-[#0062CD] shrink-0" />
              <span className="font-semibold text-slate-600">48-Hour Technical Proposal</span>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <ShieldCheck className="h-4 w-4 text-[#0062CD] shrink-0" />
              <span className="font-semibold text-slate-600">NDA-Secured Discovery</span>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <UserCheck className="h-4 w-4 text-[#0062CD] shrink-0" />
              <span className="font-semibold text-slate-600">Direct Access to Architects</span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
