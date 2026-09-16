import { useState, useEffect, useRef } from 'react'
import { Plus, HelpCircle } from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────
//  FAQ DATA — edit categories & questions here at any time
// ─────────────────────────────────────────────────────────────────────
const FAQ_DATA = [
  {
    id: 'capabilities',
    label: 'Core Capabilities',
    items: [
      {
        q: 'What types of software does AD FutureStack build?',
        a: 'We design and engineer scalable SaaS platforms, custom web and mobile applications, AI/ML-integrated systems, multi-tenant cloud architectures, and end-to-end digital products — from MVP through enterprise-grade deployment.',
      },
      {
        q: 'Do you handle both front-end and back-end development?',
        a: 'Yes. Our full-stack pods cover everything from React/Next.js interfaces and mobile apps to Node.js, Python, and Go back-ends, cloud infrastructure (AWS/GCP/Azure), databases, and DevOps pipelines.',
      },
      {
        q: 'Can you integrate AI or machine learning into existing products?',
        a: 'Absolutely. We offer AI augmentation as a standalone service — embedding LLM APIs, recommendation engines, NLP pipelines, or custom model inference endpoints into your existing or new software.',
      },
    ],
  },
  {
    id: 'partnerships',
    label: 'Client Partnerships',
    items: [
      {
        q: 'What engagement models do you offer?',
        a: 'We support fixed-scope project deliverables, monthly engineering retainers, embedded staff augmentation, and hybrid sprint-based models — structured around your team size, velocity, and business goals.',
      },
      {
        q: 'Who owns the intellectual property after delivery?',
        a: 'You do — 100%. Upon project sign-off and final payment, all source code, repositories, configurations, documentation, and intellectual property transfer entirely to your organization.',
      },
      {
        q: 'How do you handle communication and project transparency?',
        a: 'We operate on a dedicated Slack/Teams workspace, weekly sprint reviews, live project dashboards, and assigned technical account managers so you always have full visibility into progress.',
      },
    ],
  },
  {
    id: 'custom-dev',
    label: 'Custom Development',
    items: [
      {
        q: 'How fast can you start on a new project?',
        a: 'We can assemble and onboard a senior engineering pod within 5–10 business days after scope finalization and contract execution. Discovery and architecture planning can begin within 48 hours.',
      },
      {
        q: 'Do you work with our existing codebase or start from scratch?',
        a: 'Both. We conduct a thorough codebase audit for brownfield projects, then propose a structured modernization or feature-extension roadmap. For greenfield projects we apply our own stack best-practices from day one.',
      },
      {
        q: 'Can you deliver an MVP quickly for investor demos or market testing?',
        a: 'Yes. We offer a rapid MVP track — a time-boxed 4–8 week engagement focused purely on the highest-priority user flows, with production-ready code and a deployment pipeline from day one.',
      },
    ],
  },
  {
    id: 'security',
    label: 'Security & Compliance',
    items: [
      {
        q: 'How do you approach data security and compliance?',
        a: 'Security is built in from the start — not bolted on. We implement OWASP top-10 mitigations, end-to-end encryption, role-based access control, secrets management, and audit logging as standard practice on every project.',
      },
      {
        q: 'Can you help with GDPR or SOC 2 compliance?',
        a: 'Yes. We architect systems with GDPR data residency, right-to-erasure workflows, and data processing agreements in mind, and can advise on SOC 2 readiness controls for SaaS products seeking enterprise clients.',
      },
      {
        q: 'Do you perform security audits on existing systems?',
        a: 'We offer standalone Security Architecture Reviews covering code analysis, dependency scanning, infrastructure posture assessment, and a prioritized remediation report with fix estimates.',
      },
    ],
  },
  {
    id: 'support',
    label: 'Support & SLA',
    items: [
      {
        q: 'Do you offer ongoing maintenance and support after launch?',
        a: 'Yes. We provide 24/7 APM monitoring, security patch management, performance audits, on-call incident response, and clearly defined SLA response-time tiers (P0 through P3) under our retainer plans.',
      },
      {
        q: 'What is your guaranteed response time for critical issues?',
        a: 'For P0 (production-down) incidents, our SLA guarantees a first response within 1 hour and a hotfix deployment within 4 hours. P1 and P2 issues are addressed within 8 and 24 hours respectively.',
      },
      {
        q: 'Can we transition support to our internal team after delivery?',
        a: 'Absolutely. We include a structured knowledge-transfer phase in every project — comprehensive documentation, runbooks, recorded walkthroughs, and live handover sessions so your team can own the system confidently.',
      },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────
//  ACCORDION ITEM
// ─────────────────────────────────────────────────────────────────────
function AccordionItem({ item, index, isOpen, onToggle, categoryId }) {
  const answerId   = `faq-answer-${categoryId}-${index}`
  const questionId = `faq-question-${categoryId}-${index}`
  const answerRef  = useRef(null)

  // Keyboard: Enter / Space toggles
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <div
      className={`border-b border-slate-100 last:border-b-0 transition-colors duration-200 ${
        isOpen ? 'bg-slate-50/70' : 'hover:bg-slate-50/40'
      }`}
    >
      {/* Question row */}
      <button
        type="button"
        id={questionId}
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset
                   cursor-pointer group"
      >
        <span
          className={`text-sm sm:text-[15px] font-semibold leading-snug transition-colors duration-200 font-montserrat ${
            isOpen
              ? 'text-slate-900'
              : 'text-slate-700 group-hover:text-slate-900'
          }`}
        >
          {item.q}
        </span>

        {/* +/− icon */}
        <span
          aria-hidden="true"
          className={`shrink-0 h-7 w-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
            isOpen
              ? 'bg-slate-900 border-slate-900 text-white rotate-45'
              : 'bg-white border-slate-200 text-slate-500 group-hover:border-slate-300 group-hover:text-slate-700'
          }`}
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <Plus className="h-3.5 w-3.5 stroke-[2.5]" />
        </span>
      </button>

      {/* Answer panel — CSS grid-row trick for smooth height animation */}
      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 320ms ease-in-out',
        }}
      >
        <div ref={answerRef} style={{ overflow: 'hidden' }}>
          <p
            className={`px-5 pb-5 text-sm text-slate-600 leading-relaxed font-montserrat
                        transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: isOpen ? '80ms' : '0ms' }}
          >
            {item.a}
          </p>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────
//  MAIN FAQ COMPONENT
// ─────────────────────────────────────────────────────────────────────
export default function FAQ() {
  const [activeCat, setActiveCat]     = useState(FAQ_DATA[0].id)
  const [openIndex, setOpenIndex]     = useState(0)
  const [panelVisible, setPanelVisible] = useState(true)

  // Fade/slide the panel when switching category
  const switchCategory = (id) => {
    if (id === activeCat) return
    // Fade out → swap → fade in
    setPanelVisible(false)
    setTimeout(() => {
      setActiveCat(id)
      setOpenIndex(0)
      setPanelVisible(true)
    }, 160)
  }

  const currentCat = FAQ_DATA.find(c => c.id === activeCat)

  return (
    <div className="max-w-5xl mx-auto font-montserrat">

      {/* ── HEADER ─────────────────────────────────────────────────── */}
      <div className="mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 shadow-2xs">
          <HelpCircle className="h-3.5 w-3.5 text-slate-500" />
          <span className="text-[11px] font-bold tracking-wider text-slate-600 uppercase font-montserrat">
            FAQ
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight font-montserrat">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-slate-500 max-w-lg font-montserrat">
          Straight answers on how we work, what we build, and how we support you — from first call to long-term partnership.
        </p>
      </div>

      {/* ── TWO-COLUMN LAYOUT ──────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

        {/* ══ LEFT SIDEBAR — Category Tabs ════════════════════════════ */}
        {/* Mobile: horizontal scrollable tab bar */}
        <nav
          aria-label="FAQ categories"
          className="
            w-full lg:w-[210px] xl:w-[230px] shrink-0
            flex flex-row lg:flex-col
            gap-1
            overflow-x-auto lg:overflow-x-visible
            pb-1 lg:pb-0
            scrollbar-none
          "
        >
          {FAQ_DATA.map(cat => {
            const isActive = cat.id === activeCat
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => switchCategory(cat.id)}
                className={`
                  relative shrink-0 text-left
                  px-4 py-3 rounded-lg
                  text-sm font-semibold font-montserrat
                  transition-all duration-200 cursor-pointer
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                  whitespace-nowrap lg:whitespace-normal
                  ${isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 bg-transparent'
                  }
                `}
              >
                {/* Left accent bar on desktop */}
                {isActive && (
                  <span
                    className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full bg-blue-500"
                    aria-hidden="true"
                  />
                )}
                <span className="lg:pl-2">{cat.label}</span>
              </button>
            )
          })}
        </nav>

        {/* ══ RIGHT PANEL — Accordion ═════════════════════════════════ */}
        <div
          className="flex-1 min-w-0 bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden"
          style={{
            opacity: panelVisible ? 1 : 0,
            transform: panelVisible ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 180ms ease-out, transform 180ms ease-out',
          }}
        >
          {/* Category title strip */}
          <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/60">
            <p className="text-xs font-bold tracking-widest text-slate-400 uppercase font-montserrat">
              {currentCat?.label}
            </p>
          </div>

          {/* Accordion items */}
          <div>
            {currentCat?.items.map((item, idx) => (
              <AccordionItem
                key={item.q}
                item={item}
                index={idx}
                categoryId={activeCat}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
