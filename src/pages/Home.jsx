import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '../components/home/Hero.jsx'
import Story from '../components/about/Story.jsx'
import FeaturedProjects from '../components/home/FeaturedProjects.jsx'
import Process from '../components/home/Process.jsx'
import Technologies from '../components/home/Technologies.jsx'
import WhatWeDo from '../components/home/WhatWeDo.jsx'
import HomeCTA from '../components/home/HomeCTA.jsx'
import SEO from '../components/common/SEO.jsx'
import { initSmoothScroll, destroySmoothScroll } from '../animations/smoothScroll.js'
import { initHeroAnimations } from '../animations/heroAnimations.js'
import { initSectionReveals } from '../animations/revealAnimations.js'
import { initCinematicImageReveals } from '../animations/imageAnimations.js'
import { initCardGrids } from '../animations/cardAnimations.js'

gsap.registerPlugin(ScrollTrigger)

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://adfuturestack.com/#organization',
      'name': 'AD FutureStack',
      'url': 'https://adfuturestack.com',
      'logo': 'https://adfuturestack.com/images/AD%20Logo.png',
      'description': 'Modern IT services, web development, mobile apps, AI automation, and software engineering studio.',
      'email': 'adfuturestacksolutions@gmail.com',
      'telephone': '+91 9488681492',
      'sameAs': [
        'https://github.com/adfuturestacksolutions'
      ]
    },
    {
      '@type': 'WebSite',
      '@id': 'https://adfuturestack.com/#website',
      'url': 'https://adfuturestack.com',
      'name': 'AD FutureStack',
      'description': 'Modern IT services & software development studio.',
      'publisher': {
        '@id': 'https://adfuturestack.com/#organization'
      }
    }
  ]
}

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    // 1. Initialize global Lenis smooth scroll for Home
    initSmoothScroll()

    // 2. Scoped GSAP context to encapsulate all animations created on Home
    const ctx = gsap.context(() => {
      const root = containerRef.current
      if (!root) return

      // Delay 1 animation frame so DOM subtrees are mounted and measured
      const rafId = requestAnimationFrame(() => {
        // Hero entrance timeline & scroll parallax
        initHeroAnimations(root)

        // Section & masked text directional reveals
        initSectionReveals(root)

        // Cinematic image clip-path reveals & Ken Burns drift
        initCinematicImageReveals(root)

        // Staggered card grid entrances
        initCardGrids(root)

        // Ensure triggers match accurate scroll offsets
        ScrollTrigger.refresh()
      })

      return () => cancelAnimationFrame(rafId)
    }, containerRef)

    // 3. Strict cleanup on unmount: revert all Home triggers and restore native scroll
    return () => {
      ctx.revert()
      destroySmoothScroll()
    }
  }, [])

  return (
    <div ref={containerRef} className="home-page relative w-full overflow-hidden">
      <SEO
        title="AD FutureStack — IT Services & Software Development Studio"
        description="AD FutureStack builds custom web applications, mobile apps, AI automation workflows, and scalable multi-tenant SaaS platforms for ambitious companies."
        keywords="AD FutureStack, IT Services, Web Development Studio, Custom Software Development, App Development, AI Workflows, SaaS Platform"
        canonicalUrl="https://adfuturestack.com/"
        schema={homeSchema}
      />
      <Hero />
      <Story />
      <FeaturedProjects />
      <Process />
      <Technologies />
      <WhatWeDo />
      <HomeCTA />
    </div>
  )
}
