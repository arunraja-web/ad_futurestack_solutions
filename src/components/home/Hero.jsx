import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import HeroBackground from './HeroBackground.jsx'

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true)
      return
    }

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 20
      const y = (e.clientY / innerHeight - 0.5) * 20
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="hero" className="hero-section relative w-full h-screen min-h-[650px] max-h-[1080px] flex items-center justify-center overflow-hidden bg-slate-950 text-white font-montserrat">
      {/* 1. AUTO-ROTATING IMAGE SLIDESHOW BACKGROUND */}
      <HeroBackground mousePos={mousePos} isTouch={isTouch} />

      {/* 2. HERO CONTENT: CENTERED HORIZONTALLY & VERTICALLY */}
      <div className="hero-content-wrap relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center font-montserrat will-change-transform">
        
        {/* Main Masked Headline: Refined Light Weight, Large Display Size */}
        <h1 className="font-montserrat font-light text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white tracking-[-0.02em] leading-[1.15] max-w-5xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
          <span className="hero-masked-wrapper">
            <span className="hero-masked-line">
              <span className="block">We Build Digital Experiences</span>
              <span className="block mt-1 sm:mt-2">That Matter</span>
            </span>
          </span>
        </h1>

        {/* Supporting Description */}
        <p className="hero-anim-subtext mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-slate-100 font-normal leading-relaxed font-montserrat max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          We partner with ambitious companies to deliver scalable cloud architecture, custom software development, and intelligent digital transformation.
        </p>

        {/* Primary CTA Buttons */}
        <div className="hero-anim-cta mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 font-montserrat">
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 bg-[#0062CD] text-white px-8 py-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-[#0052b0] transition-all duration-300 shadow-xl shadow-[#0062CD]/35 hover:-translate-y-0.5 active:scale-95 cursor-pointer font-montserrat"
          >
            <span>Let's Build</span>
            <ArrowRight className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-white transition-colors py-3.5 px-6 rounded-lg border border-white/30 hover:border-white/60 bg-slate-950/40 hover:bg-slate-950/60 backdrop-blur-md font-montserrat shadow-md"
          >
            <span>Talk to an Architect →</span>
          </Link>
        </div>

      </div>
    </section>
  )
}
