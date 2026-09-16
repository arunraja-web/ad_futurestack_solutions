import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Layers,
  Users,
  Code2,
  Smartphone,
  Rocket,
  Sparkles,
  Clock,
  ShieldCheck,
  Plus,
  ArrowRight,
  HelpCircle
} from 'lucide-react'
import Container from '../common/Container.jsx'
import { CONTACT_EMAIL } from '../../utils/constants.js'

const faqs = [
  {
    icon: Layers,
    question: 'What services do you provide?',
    category: 'Core Capabilities & Technology Stack',
    answer:
      'We provide full-stack web engineering, custom software development, mobile application development (iOS & Android), cloud infrastructure, API integrations, and AI-powered workflow automation.'
  },
  {
    icon: Users,
    question: 'Do you work with startups and small businesses?',
    category: 'Client Partnerships & Flexible Scaling',
    answer:
      'Yes. We partner with startups, growing businesses, and established enterprises alike, delivering scalable architectures tailored to your specific budget, stage, and product roadmap.'
  },
  {
    icon: Code2,
    question: 'Can you build custom software?',
    category: 'Bespoke SaaS & Systems Engineering',
    answer:
      'Absolutely. We specialize in custom software engineered to your exact business requirements — from high-throughput backend microservices to complex multi-tenant SaaS platforms.'
  },
  {
    icon: Smartphone,
    question: 'Do you develop mobile applications?',
    category: 'Native & Cross-Platform iOS / Android',
    answer:
      'Yes, we build cross-platform and native mobile applications for iOS and Android designed for sub-second performance, intuitive UI, and offline synchronization.'
  },
  {
    icon: Rocket,
    question: 'How does a project start?',
    category: 'Technical Discovery & Sprint Roadmap',
    answer:
      'Every project begins with a technical discovery phase where we analyze your goals, outline architectural specifications, define sprint milestones, and deliver a clear scope proposal.'
  },
  {
    icon: Sparkles,
    question: 'How can I start a project with AD FutureStack?',
    category: 'Discovery Call & Rapid Onboarding',
    answer:
      `You can initiate a project by contacting us through our online inquiry form or emailing us directly at ${CONTACT_EMAIL}. Our technical team will schedule a discovery call within 24 hours.`,
    actionLink: '/contact',
    actionText: 'Book a discovery call'
  },
  {
    icon: Clock,
    question: 'What SLAs and uptime guarantees do you offer?',
    category: '99.99% Availability & 24/7 Telemetry',
    answer:
      'We design enterprise architectures with target 99.99% availability SLAs, continuous automated backup systems, active-active failovers, and 24/7 telemetry monitoring.'
  },
  {
    icon: ShieldCheck,
    question: 'How do you ensure code security and data privacy?',
    category: 'OWASP Standards, SOC2 & GDPR Compliance',
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

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-montserrat">
            Everything you need to know about our engineering process, service capabilities, SLA uptime guarantees, and starting your project.
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
                    aria-hidden="true"
                  >
                    <Plus
                      className={`faq-toggle-icon h-4 w-4 stroke-[2.5] ${
                        isOpen ? 'is-open' : ''
                      }`}
                    />
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
                      {faq.actionLink && (
                        <div className="mt-3.5">
                          <Link
                            to={faq.actionLink}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062CD] hover:text-[#0050A8] transition-colors uppercase tracking-wider group/link"
                          >
                            <span>{faq.actionText}</span>
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        </div>
                      )}
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

