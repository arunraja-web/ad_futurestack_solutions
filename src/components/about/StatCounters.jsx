import React, { useState, useEffect } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation.js'

const BRAND_STATS = [
  {
    target: 24,
    decimals: 0,
    suffix: '×7',
    label: 'Maintenance & Support'
  },
  {
    target: 99.9,
    decimals: 1,
    suffix: '%',
    label: 'Service Reliability'
  },
  {
    target: 100,
    decimals: 0,
    suffix: '%',
    label: 'Customized Approach'
  }
]

function StatItem({ stat, isVisible, index }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!isVisible) {
      setCurrent(0)
      return
    }

    let startTime = null
    const duration = 1600 // ms

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setCurrent(ease * stat.target)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCurrent(stat.target)
      }
    }

    const frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [isVisible, stat.target])

  const formattedValue = stat.decimals > 0 ? current.toFixed(stat.decimals) : Math.floor(current)

  return (
    <div
      className={`flex flex-col transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex items-baseline">
        <span className="text-4xl sm:text-5xl lg:text-6xl font-light text-black tracking-tight leading-none font-montserrat">
          {formattedValue}
        </span>
        {stat.suffix && (
          <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0062CD] ml-1 self-baseline">
            {stat.suffix}
          </span>
        )}
      </div>
      <span className="text-xs sm:text-sm text-slate-700 font-normal mt-2 leading-snug">
        {stat.label}
      </span>
    </div>
  )
}

export default function StatCounters() {
  const [containerRef, isVisible] = useScrollAnimation({ threshold: 0.2, once: false })

  return (
    <section
      ref={containerRef}
      className="bg-[#f6f2ea] pb-16 sm:pb-20 lg:pb-24 border-b border-[#eae4d8] font-montserrat"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Brand Story Button */}
          <div
            className={`md:col-span-3 flex items-center transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}
          >
            <a
              href="#our-story"
              className="inline-flex items-center justify-center bg-[#0062CD] hover:bg-[#004fa8] text-white font-bold text-xs uppercase tracking-wider px-7 py-4 sm:px-8 sm:py-5 transition-all duration-200 shadow-sm whitespace-nowrap active:scale-95"
            >
              SEE OUR BRAND STORY
            </a>
          </div>

          {/* Right: 3 Big Stats Columns */}
          <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10">
            {BRAND_STATS.map((stat, idx) => (
              <StatItem key={idx} index={idx} stat={stat} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
