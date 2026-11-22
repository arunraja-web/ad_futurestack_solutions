import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

// Unsplash hero slides — dark, software & tech enterprise themed
const HERO_SLIDES = [
  {
    // Dark software engineering / code workspace
    src: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    alt: 'Software development and engineering',
    label: 'SOFTWARE DEVELOPMENT',
    line1: 'Custom Software',
    line2: 'Built',
    accent: 'Faster',
    sub: 'Full-stack web applications, mobile platforms, and enterprise cloud APIs engineered for speed, security, and effortless scalability.',
    cta: 'Explore Services',
    ctaLink: '/our-services',
  },
  {
    // Dark digital transformation / global connected network
    src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format&fit=crop',
    alt: 'Modern digital transformation and global systems',
    label: 'DIGITAL TRANSFORMATION',
    line1: 'Turning Vision',
    line2: 'Into',
    accent: 'Reality',
    sub: 'We partner with ambitious companies to engineer scalable cloud architectures and intelligent digital workflows that accelerate real growth.',
    cta: 'Our Capabilities',
    ctaLink: '/capabilities',
  },
  {
    // Dark cloud server infrastructure
    src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80&auto=format&fit=crop',
    alt: 'Server infrastructure and enterprise cloud systems',
    label: 'CLOUD INFRASTRUCTURE',
    line1: 'Enterprise Systems',
    line2: 'Built',
    accent: 'Smarter',
    sub: 'From multi-tenant SaaS platforms to automated serverless architectures — we design resilient backend systems that scale effortlessly.',
    cta: 'View Solutions',
    ctaLink: '/solutions',
  },
  {
    // Dark AI / data intelligence
    src: 'https://plus.unsplash.com/premium_photo-1683121718643-fb18d2668d53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    alt: 'AI automation and predictive intelligence',
    label: 'AI AUTOMATION',
    line1: 'Intelligent Workflows',
    line2: 'Powered by',
    accent: 'AI',
    sub: 'Automate business operations, extract data insights, and accelerate decision-making with custom generative AI and automated pipelines.',
    cta: 'Get Started',
    ctaLink: '/contact',
  },
  {
    // Dark technology circuit / hardware abstract
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80&auto=format&fit=crop',
    alt: 'Product engineering and circuit innovation',
    label: 'PRODUCT ENGINEERING',
    line1: 'Engineering Products',
    line2: 'That',
    accent: 'Scale',
    sub: 'End-to-end product lifecycle engineering — from architecture and prototype development to seamless cloud deployment and 24/7 reliability.',
    cta: 'See Our Work',
    ctaLink: '/our-services',
  },
]

const SLIDE_DURATION = 5000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((index) => {
    if (animating) return
    setAnimating(true)
    setCurrent(index)
    setTimeout(() => setAnimating(false), 700)
  }, [animating])

  const prev = useCallback(() => {
    goTo((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }, [current, goTo])

  const next = useCallback(() => {
    goTo((current + 1) % HERO_SLIDES.length)
  }, [current, goTo])

  // Auto-advance
  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [paused])

  const slide = HERO_SLIDES[current]

  return (
    <section
      id="hero"
      className="hero-section relative w-full min-h-screen flex items-center overflow-hidden bg-black font-montserrat pt-[80px] pb-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── BACKGROUND SLIDES ── */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 w-full h-full transition-opacity duration-[1200ms] ease-in-out ${i === current ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
            }`}
        >
          <img
            src={s.src}
            alt={s.alt}
            loading={i === 0 ? 'eager' : 'lazy'}
            className="w-full h-full object-cover object-center scale-105"
            onError={(e) => {
              e.currentTarget.onerror = null
              e.currentTarget.src = '/images/hero/hero-slide-1.webp'
            }}
          />
        </div>
      ))}

      {/* ── DARK OVERLAYS ── */}
      {/* Deep black base */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
      {/* Gradient: left side darker for pristine text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent z-10 pointer-events-none" />
      {/* Bottom fade into page */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 z-10 pointer-events-none" />
      {/* Subtle navy tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f4e]/30 via-transparent to-transparent z-10 pointer-events-none" />

      {/* ── HERO CONTENT ── */}
      <div className="relative z-20 w-full">
        <div className="w-full max-w-[1400px] mx-auto ps-4 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-2xl xl:max-w-7xl">

            {/* Label */}
            <p
              key={`label-${current}`}
              className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#9ca3af] uppercase mb-4 sm:mb-5 animate-hero-fade-up"
            >
              {slide.label}
            </p>

            {/* Headline: Exact size matching reference image (~52px - 64px) */}
            <h1
              key={`headline-${current}`}
              className="font-montserrat font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-[95px] text-[#f3f4f6] leading-[1.12] tracking-tight mb-5 animate-hero-fade-up"
              style={{ animationDelay: '60ms' }}
            >
              <span className="block">{slide.line1}</span>
              <span className="block">
                {slide.line2} <span className="text-[#2563eb]">{slide.accent}</span>
              </span>
            </h1>

            {/* Subtle separator line matching reference image */}
            <div className="w-20 h-[1px] bg-white/10 mb-6" />

            {/* Subtext: proportional to reference image */}
            <p
              key={`sub-${current}`}
              className="text-sm sm:text-base text-[#9ca3af] leading-relaxed max-w-lg mb-8 font-normal animate-hero-fade-up"
              style={{ animationDelay: '120ms' }}
            >
              {slide.sub}
            </p>

            {/* CTA: Dark navy pill */}
            <div
              key={`cta-${current}`}
              className="animate-hero-fade-up"
              style={{ animationDelay: '180ms' }}
            >
              <Link
                to={slide.ctaLink}
                className="group inline-flex items-center gap-2.5 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-semibold text-xs sm:text-sm tracking-wide px-6 py-3 sm:px-7 sm:py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#0d1f4e]/40 hover:-translate-y-0.5 active:scale-95"
              >
                <span>{slide.cta}</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ── LEFT ARROW ── */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* ── RIGHT ARROW ── */}
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* ── DOT INDICATORS ── */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${i === current
              ? 'w-8 h-2 bg-[#2563eb]'
              : 'w-2 h-2 bg-white/35 hover:bg-white/60'
              }`}
          />
        ))}
      </div>

      {/* ── KEYFRAME STYLES ── */}
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-hero-fade-up {
          animation: heroFadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-hero-fade-up { animation: none; }
        }
      `}</style>
    </section>
  )
}
