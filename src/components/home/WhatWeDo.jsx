import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import Container from '../common/Container.jsx'
import { CONTACT_EMAIL } from '../../utils/constants.js'

const faqs = [
  {
    question: 'What services do you provide?',
    answer:
      'We provide full-stack web engineering, custom software development, mobile application development (iOS & Android), cloud infrastructure, API integrations, and AI-powered workflow automation.'
  },
  {
    question: 'Do you work with startups and small businesses?',
    answer:
      'Yes. We partner with startups, growing businesses, and established enterprises alike, delivering scalable architectures tailored to your specific budget, stage, and product roadmap.'
  },
  {
    question: 'Can you build custom software?',
    answer:
      'Absolutely. We specialize in custom software engineered to your exact business requirements — from high-throughput backend microservices to complex multi-tenant SaaS platforms.'
  },
  {
    question: 'Do you develop mobile applications?',
    answer:
      'Yes, we build cross-platform and native mobile applications for iOS and Android designed for sub-second performance, intuitive UI, and offline synchronization.'
  },
  {
    question: 'How does a project start?',
    answer:
      'Every project begins with a technical discovery phase where we analyze your goals, outline architectural specifications, define sprint milestones, and deliver a clear scope proposal.'
  },
  {
    question: 'How can I start a project with AD FutureStack?',
    answer:
      `You can initiate a project by contacting us through our online inquiry form or emailing us directly at ${CONTACT_EMAIL}. Our technical team will schedule a discovery call within 24 hours.`
  },
  {
    question: 'What SLAs and uptime guarantees do you offer?',
    answer:
      'We design enterprise architectures with target 99.99% availability SLAs, continuous automated backup systems, active-active failovers, and 24/7 telemetry monitoring.'
  },
  {
    question: 'How do you ensure code security and data privacy?',
    answer:
      'We adhere to OWASP security standards, strict SOC2 & GDPR compliance guidelines, encrypted payload transport, non-disclosure agreements, and continuous vulnerability scanning.'
  }
]

export default function WhatWeDo() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80 font-montserrat scroll-mt-28">
      <Container className="font-montserrat">
        {/* SECTION HEADER */}
        <div data-reveal="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4 font-montserrat">
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight uppercase leading-tight font-montserrat">
            <span className="gsap-mask-wrapper">
              <span className="gsap-mask-line">Got Questions? <span className="text-[#0062CD] font-montserrat">We Have Answers.</span></span>
            </span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-montserrat">
            Find clear answers to common questions about our services, development process, SLA guarantees, and how we partner with ambitious teams.
          </p>
        </div>

        {/* ACCORDION GRID */}
        <div className="gsap-stagger-list max-w-4xl mx-auto space-y-4 font-montserrat">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={faq.question}
                className={`gsap-stagger-item rounded-xl overflow-hidden transition-all duration-300 border font-montserrat ${
                  isOpen
                    ? 'bg-white border-[#0062CD]/50 shadow-md ring-1 ring-[#0062CD]/20 -translate-y-0.5'
                    : 'bg-white border-slate-200 shadow-2xs hover:border-slate-300 hover:shadow-sm hover:-translate-y-0.5'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-montserrat focus:outline-none cursor-pointer group"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 font-montserrat">
                    {faq.question}
                  </span>
                  <div
                    className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#0062CD] text-white rotate-180 shadow-md'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>


                {/* Smooth Grid-Template-Rows Height Transition */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-700 leading-relaxed border-t border-slate-100 font-montserrat">
                      <p className="font-montserrat">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

