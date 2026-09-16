import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/page-sections.css'
import '../styles/services.css'
import SEO from '../components/common/SEO.jsx'
import { ArrowRight } from 'lucide-react'

import PurposeBanner from '../components/about/PurposeBanner.jsx'
import StatCounters from '../components/about/StatCounters.jsx'
import QuickLinks from '../components/about/QuickLinks.jsx'
import AboutHeroSlider from '../components/about/AboutHeroSlider.jsx'
import EngineeringFoundation from '../components/about/EngineeringFoundation.jsx'
import BrandPillarsAccordion from '../components/about/BrandPillarsAccordion.jsx'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'


const STORY_IMAGE_MAIN = "/images/about/about-main-story.webp"
const STORY_IMAGE_SMALL = "/images/services/digital-marketing-new.jpg"

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  'name': 'About AD FutureStack',
  'description': 'Learn about AD FutureStack, our engineering philosophy, core values, and mission to deliver enterprise software architecture.',
  'mainEntity': {
    '@type': 'Organization',
    'name': 'AD FutureStack',
    'url': 'https://adfuturestack.com',
    'logo': 'https://adfuturestack.com/images/AD%20Logo.png',
    'knowsAbout': [
      'Enterprise Software Architecture',
      'Cloud Infrastructure & DevOps',
      'Multi-Tenant SaaS Systems',
      'AI Agent Orchestration',
      'Zero-Trust Cybersecurity'
    ]
  }
}

export default function About() {
  const windowRef = useRef(null)
  const [isAccordionVisible, setIsAccordionVisible] = useState(false)
  const [storyRef, isStoryVisible] = useScrollAnimation({ threshold: 0.15, once: false })
  const [ctaRef, isCtaVisible] = useScrollAnimation({ threshold: 0.2, once: false })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAccordionVisible(entry.isIntersecting)
      },
      {
        rootMargin: '250px 0px 250px 0px',
        threshold: 0
      }
    )

    if (windowRef.current) {
      observer.observe(windowRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bespoke-page about-page">
      <SEO
        title="About AD FutureStack — Software Architects & Studio"
        description="Learn about AD FutureStack, our engineering philosophy, core values, and mission to deliver enterprise software architecture and digital solutions."
        keywords="About AD FutureStack, Software Engineering Studio, Enterprise Architects, Product Engineering Team, Software Studio"
        canonicalUrl="https://adfuturestack.com/about"
        schema={aboutSchema}
      />

      {/* 1. HERO SLIDER SECTION (INFOSYS-INSPIRED AUTO-PROGRESS SLIDER) */}
      <AboutHeroSlider />

      {/* 2. PURPOSE BANNER (Right after Hero) */}
      <PurposeBanner />

      {/* 3. ANIMATED STAT COUNTERS ("Overview" Section) */}
      <StatCounters />

      {/* 4. ABOUT US QUICK-LINK CARD GRID */}
      <QuickLinks />

      {/* 5. OUR ENGINEERING FOUNDATION (Grant Thornton Inspired Bento Magazine Grid) */}
      <EngineeringFoundation />

      {/* 6. OUR STORY WITH PHOTOGRAPHY (Slides down over the static accordion when scrolling up) */}
      <section
        ref={storyRef}
        className="showcase-section pb-12 sm:pb-16 relative z-10 bg-white shadow-xl overflow-hidden"
        id="our-story"
      >
        <div className="showcase-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-700 ease-out ${
                isStoryVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <span className="section-kicker">THE JOURNEY</span>
              <h2 className="section-title font-semibold">Why We Founded AD FutureStack</h2>
              <p className="section-description">
                AD FutureStack was created with a clear purpose: to bridge the gap between ambitious business goals and modern complex technology. Many companies struggle with brittle legacy monoliths or bloated, inefficient outsourced software.
              </p>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                We combine deep technical expertise across microservices, cloud infrastructure, AI automation, and multi-tenant SaaS to deliver production-ready software systems that are reliable today and ready for tomorrow.
              </p>
            </div>

            {/* PHOTOGRAPHY COMPOSITION */}
            <div
              className={`relative min-h-[400px] flex items-center justify-center transition-all duration-700 ease-out delay-150 ${
                isStoryVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
              }`}
            >
              <div className="w-4/5 h-[340px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src={STORY_IMAGE_MAIN}
                  alt="AD FutureStack Senior Engineering Team Collaborating on Architecture"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = "/images/about/team-collaboration.webp" }}
                />
              </div>

              <div className="absolute bottom-0 right-0 w-3/5 h-[210px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={STORY_IMAGE_SMALL}
                  alt="AD FutureStack Technical System Architecture Review Session"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = "/images/services/saas-systems-new.jpg" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PARALLAX WINDOW SPACER (Transparent gap in document flow) */}
      <div
        ref={windowRef}
        className="relative w-full h-[580px] sm:h-[640px] lg:h-screen pointer-events-none"
        aria-hidden="true"
      />

      {/* 7b. FIXED STATIC ACCORDION (100% Fixed like a background image; sections scroll OVER it) */}
      <div
        className={`fixed inset-0 z-0 transition-opacity duration-300 ${
          isAccordionVisible
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <BrandPillarsAccordion />
      </div>

      {/* 8. FINAL CTA (With Twilight Engineering Studio Image & Full White Gradient on Words Side) */}
      <div
        ref={ctaRef}
        className="relative z-20 w-full overflow-hidden bg-white border-t border-slate-200/80 shadow-[0_-20px_50px_rgba(0,0,0,0.15)]"
      >
        {/* Background Photography with White Gradient Across Words */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about/about-cta-bg.webp"
            alt="AD FutureStack Modern Software Architecture Studio"
            loading="lazy"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.src = '/images/about/team-collaboration.webp'
            }}
          />
          {/* Full white gradient overlay on the words side, smoothly transitioning to reveal the photo */}
          <div
            className="absolute inset-0 pointer-events-none hidden lg:block"
            style={{
              background:
                'linear-gradient(90deg, #ffffff 0%, #ffffff 42%, rgba(255, 255, 255, 0.94) 52%, rgba(255, 255, 255, 0) 76%)'
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none block lg:hidden"
            style={{
              background:
                'linear-gradient(180deg, #ffffff 0%, #ffffff 62%, rgba(255, 255, 255, 0.88) 75%, rgba(255, 255, 255, 0.15) 100%)'
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
          <div
            className={`max-w-2xl text-center lg:text-left transition-all duration-700 ease-out ${
              isCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-xs font-mono font-bold text-[#0062CD] uppercase tracking-widest block mb-3">
              START A CONVERSATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Let's Engineer Your Digital Future Together
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              Looking for a dedicated software engineering team that values technical quality, clean architecture, and measurable outcomes?
            </p>
          </div>

          <div
            className={`shrink-0 transition-all duration-700 ease-out delay-150 ${
              isCtaVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-6'
            }`}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 bg-[#0062CD] hover:bg-[#004fa8] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-[#0062CD]/30 active:scale-95 group"
            >
              <span>Work With Us</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

