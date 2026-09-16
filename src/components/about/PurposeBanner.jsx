import React from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation.js'

export default function PurposeBanner() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.15, once: false })

  return (
    <section
      ref={sectionRef}
      className="bg-white pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 border-t border-[#eae4d8] font-montserrat overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading */}
          <div
            className={`lg:col-span-4 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-[1.12]">
              We are AD <br className="hidden sm:inline" />FutureStack
            </h2>
          </div>

          {/* Middle Column: Paragraph Part 1 */}
          <div
            className={`lg:col-span-4 transition-all duration-700 ease-out delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-normal">
              AD FutureStack is a global consulting service and systems integrator that operates in over 90 countries, delivering solutions with a unique blend of digital innovation and robust, industry-strong processes. With our promise to help our customers Scale at Speed™, we
            </p>
          </div>

          {/* Right Column: Paragraph Part 2 */}
          <div
            className={`lg:col-span-4 transition-all duration-700 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-normal">
              design future state solutions for industry leaders and offer innovative digital experiences that enable them to transform and scale at speed. Our aim is to enable enterprises, associates, and society to Rise for a more equal world, future readiness, and value creation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

