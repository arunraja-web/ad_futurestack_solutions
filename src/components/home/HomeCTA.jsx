import Container from '../common/Container.jsx'
import Button from '../common/Button.jsx'
import { Clock, ShieldCheck, UserCheck } from 'lucide-react'

export default function HomeCTA() {
  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900 relative overflow-hidden font-montserrat">
      <Container className="relative z-10 text-center font-montserrat px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-6 font-montserrat">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-montserrat font-bold text-slate-600 uppercase shadow-2xs">
            <span>Ready To Scale?</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 uppercase tracking-tight font-montserrat leading-tight">
            Ready to Build Your <span className="text-blue-600 font-montserrat">Next-Gen Stack?</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-montserrat">
            Schedule a technical discovery session with our lead architects. We'll analyze your requirements and deliver a proposal within 48 hours.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto font-montserrat">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="!bg-slate-900 hover:!bg-[#1A1A1A] !text-white !rounded-xl w-full sm:w-auto font-montserrat"
            >
              Schedule Architecture Call
            </Button>
            <Button
              to="/services"
              variant="secondary"
              size="lg"
              icon={false}
              className="!border-slate-300 !bg-slate-100 !text-slate-900 hover:!bg-slate-200 !rounded-xl w-full sm:w-auto font-montserrat"
            >
              Browse All Services
            </Button>
          </div>

          {/* Value Commitments */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-100 text-xs text-slate-600 font-montserrat">
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-4 w-4 text-blue-600 shrink-0" />
              <span className="font-semibold">48-Hour Technical Proposal</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" />
              <span className="font-semibold">NDA-Secured Discovery</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <UserCheck className="h-4 w-4 text-blue-600 shrink-0" />
              <span className="font-semibold">Direct Access to Architects</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
