import React, { useState } from 'react'

const pillarsData = [
  {
    id: 'purpose',
    label: 'PURPOSE',
    image: '/images/about/pillar-purpose.webp',
    alt: 'AD FutureStack Senior Engineering Team Architecture Review',
    subtitle: 'Drive Positive Change',
    text: 'Drive positive change in the digital operations of our clients and engineering communities. Only when we empower our partners to build resilient, lasting systems will we succeed.'
  },
  {
    id: 'promise',
    label: 'PROMISE',
    image: '/images/about/pillar-promise.webp',
    alt: 'AD FutureStack Senior Leadership and Enterprise Client Strategic Partnership',
    subtitle: 'Scale At Speed.',
    text: 'Delivering production-grade software with rapid iteration cycles, zero technical debt, and predictable velocity.'
  },
  {
    id: 'mission',
    label: 'MISSION',
    image: '/images/about/pillar-mission.webp',
    alt: 'AD FutureStack Senior Software Architect Presenting Global Cloud Topology',
    subtitle: 'Transformative Growth',
    text: 'We unlock transformative digital growth by engineering mission-critical architectures grounded in trust, senior technical craftsmanship, and an enduring partnership mindset.'
  },
  {
    id: 'values',
    label: 'VALUES',
    image: '/images/about/pillar-values.webp',
    alt: 'AD FutureStack Engineering Craftsmanship and Collaborative Code Review',
    subtitle: 'Our Guiding Principles',
    valuesList: [
      {
        title: 'Integrity',
        desc: 'It is the courage to uphold rigorous architectural principles and the conviction to choose technical honesty over convenience.'
      },
      {
        title: 'Quality',
        desc: 'It is about ensuring that every commit, microservice, and system interface reflects our promise of zero technical debt.'
      },
      {
        title: 'Care',
        desc: 'It begins with dignity for our engineering collective, extends to deep respect for our clients, and finds purpose in durable software.'
      }
    ]
  }
]

export default function BrandPillarsAccordion() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section
      className="relative w-full h-full min-h-[580px] lg:h-screen overflow-hidden bg-slate-950 font-montserrat select-none flex flex-col justify-center pt-20 lg:pt-24 pb-6"
      aria-label="AD FutureStack Purpose, Promise, Mission, and Values Showcase"
    >
      {/* 1. BACKGROUND CROSSFADE IMAGES */}
      <div className="absolute inset-0 z-0">
        {pillarsData.map((item, idx) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-out will-change-[opacity] ${
              activeTab === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={item.image}
              alt={item.alt}
              loading="lazy"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.target.src = '/images/about/about-main-story.webp'
              }}
            />
            {/* Cinematic dark gradient overlay for optimal readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/60 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* 2. INTERACTIVE HORIZONTAL EXPANDING ACCORDION */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex-1 flex flex-col lg:flex-row items-stretch min-h-[460px]">
        {pillarsData.map((item, idx) => {
          const isActive = activeTab === idx
          return (
            <div
              key={item.id}
              onMouseEnter={() => setActiveTab(idx)}
              onClick={() => setActiveTab(idx)}
              className={`relative flex flex-col justify-end p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/20 transition-[flex-grow,background-color] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group ${
                isActive
                  ? 'lg:flex-[3] bg-black/30 backdrop-blur-[2px]'
                  : 'lg:flex-[1] hover:bg-black/20'
              }`}
            >
              {/* Top indicator bar on active */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 transition-all duration-500 ${
                  isActive ? 'bg-[#0062CD]' : 'bg-transparent'
                }`}
              />

              {/* Header Title */}
              <div className="mb-2 sm:mb-3">
                <h3
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                  }`}
                >
                  {item.label}
                </h3>
              </div>

              {/* Expandable Accordion Body Content (Smooth fade & slide without text reflow lag) */}
              <div
                className={`overflow-hidden transition-all duration-400 ease-out will-change-[max-height,opacity,transform] ${
                  isActive
                    ? 'max-h-[420px] opacity-100 translate-y-0 mt-2 delay-150'
                    : 'max-h-0 opacity-0 translate-y-2 pointer-events-none'
                }`}
              >
                <div className="max-w-xl pb-2">
                  {/* Paragraph for Purpose, Promise, Mission */}
                  {item.text && (
                    <p className="text-sm sm:text-base lg:text-lg text-slate-100 font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                      {item.text}
                    </p>
                  )}

                  {/* Values List for Values */}
                  {item.valuesList && (
                    <div className="space-y-3.5">
                      {item.valuesList.map((val, vIdx) => (
                        <div key={vIdx} className="border-l-2 border-[#0062CD] pl-3.5">
                          <h4 className="text-sm sm:text-base font-bold text-white tracking-wide mb-0.5">
                            {val.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                            {val.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
