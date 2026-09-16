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
    <section className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80 font-montserrat">
      <Container className="font-montserrat max-w-5xl">
        {/* SECTION HEADER */}
        <div data-reveal="up" className="mb-12 sm:mb-14 space-y-3 font-montserrat text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 shadow-2xs font-montserrat">
            <HelpCircle className="h-3.5 w-3.5 text-slate-500" />
            <span className="text-[11px] font-montserrat font-bold tracking-wider text-slate-600 uppercase">
              Help Center &amp; FAQ
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight font-montserrat">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-montserrat">
            Everything you need to know about our engineering process, service capabilities, SLA uptime guarantees, and starting your project.
          </p>
        </div>

        {/* SINGLE CONTINUOUS ACCORDION CARD */}
        <div
          data-reveal="up"
          className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-sm shadow-slate-900/5 overflow-hidden font-montserrat divide-y divide-slate-100"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const IconComponent = faq.icon

            return (
              <div
                key={faq.question}
                className={`faq-row-item font-montserrat ${
                  isOpen ? 'bg-slate-50/45' : 'hover:bg-slate-50/70'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 sm:gap-6 font-montserrat focus:outline-none cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4.5 min-w-0 flex-1">
                    {/* Icon box: active = dark fill, inactive = light neutral */}
                    <div
                      className={`faq-icon-box h-10 w-10 sm:h-11 sm:w-11 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 border ${
                        isOpen
                          ? 'is-active bg-slate-900 border-slate-900 text-white shadow-2xs'
                          : 'bg-slate-100/80 border-slate-200 text-slate-600 group-hover:bg-slate-200 group-hover:border-slate-300 group-hover:text-slate-800'
                      }`}
                    >
                      <IconComponent className="h-5 w-5 stroke-[2]" />
                    </div>

                    <div className="flex flex-col min-w-0 flex-1">
                      <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 leading-snug font-montserrat truncate sm:whitespace-normal">
                        {faq.question}
                      </span>
                      <span className="text-xs sm:text-[13px] font-medium text-slate-500 mt-0.5 font-montserrat">
                        {faq.category}
                      </span>
                    </div>
                  </div>

                  {/* Toggle button: active = slate-900, inactive = neutral gray */}
                  <div
                    className={`faq-toggle-btn h-8 w-8 sm:h-9 sm:w-9 rounded-full flex items-center justify-center shrink-0 border ${
                      isOpen
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-slate-100 text-slate-600 border-slate-200/80 group-hover:border-slate-300 group-hover:bg-slate-200 group-hover:text-slate-800'
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

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`faq-grid-row ${isOpen ? 'is-open' : ''} font-montserrat`}
                >
                  <div className="faq-answer-inner font-montserrat">
                    <div className="faq-answer-content pb-6 pl-[58px] sm:pl-[68px] pr-5 sm:pr-8 text-sm sm:text-base text-slate-600 leading-relaxed font-montserrat">
                      <p className="font-montserrat">{faq.answer}</p>

                      {faq.actionLink && (
                        <div className="mt-3.5">
                          <Link
                            to={faq.actionLink}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider group/link"
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
