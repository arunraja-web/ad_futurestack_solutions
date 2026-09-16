import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Hero entrance and scroll transition timeline.
 * Masked headline reveal, subtext fade, CTA button scale-in, and subtle parallax on scroll out.
 */
export function initHeroAnimations(rootEl) {
  if (!rootEl) return null

  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (isReduced) {
    gsap.set(
      rootEl.querySelectorAll(
        '.hero-anim-video, .hero-masked-line, .hero-anim-subtext, .hero-anim-cta, .hero-scroll-indicator'
      ),
      {
        opacity: 1,
        y: 0,
        scale: 1,
        clearProps: 'all',
      }
    )
    return null
  }

  const isMobile = window.innerWidth < 768

  const heroTl = gsap.timeline({
    defaults: { ease: 'power4.out' },
  })

  const videoEl = rootEl.querySelector('.hero-anim-video')
  const maskedLines = rootEl.querySelectorAll('.hero-masked-line')
  const subtextEl = rootEl.querySelector('.hero-anim-subtext')
  const ctaEl = rootEl.querySelector('.hero-anim-cta')
  const scrollIndicator = rootEl.querySelector('.hero-scroll-indicator')
  const heroContent = rootEl.querySelector('.hero-content-wrap')

  // Set initial states
  if (videoEl) {
    gsap.set(videoEl, { opacity: 0, scale: 1.05 })
  }
  if (maskedLines.length) {
    gsap.set(maskedLines, { yPercent: 115, opacity: 0 })
  }
  if (subtextEl) {
    gsap.set(subtextEl, { opacity: 0, y: isMobile ? 16 : 24 })
  }
  if (ctaEl) {
    gsap.set(ctaEl, { opacity: 0, scale: 0.94, y: 16 })
  }
  if (scrollIndicator) {
    gsap.set(scrollIndicator, { opacity: 0 })
  }

  // Entrance Sequence
  if (videoEl) {
    heroTl.to(videoEl, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: 'power3.out',
    })
  }

  if (maskedLines.length) {
    heroTl.to(
      maskedLines,
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.12,
        ease: 'power4.out',
      },
      videoEl ? '-=0.85' : 0
    )
  }

  if (subtextEl) {
    heroTl.to(
      subtextEl,
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power3.out',
      },
      '-=0.7'
    )
  }

  if (ctaEl) {
    heroTl.to(
      ctaEl,
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: 'back.out(1.4)',
      },
      '-=0.6'
    )
  }

  if (scrollIndicator) {
    heroTl.to(
      scrollIndicator,
      {
        opacity: 0.6,
        duration: 0.6,
      },
      '-=0.3'
    )
  }

  // Scroll Transition: subtle scale/parallax/opacity as user leaves hero
  let scrollTriggerInstance = null
  if (!isMobile && heroContent) {
    scrollTriggerInstance = ScrollTrigger.create({
      trigger: rootEl,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.4,
      animation: gsap.timeline()
        .to(heroContent, { y: 110, opacity: 0.25, ease: 'none' }, 0)
        .to(videoEl, { y: 70, scale: 1.04, opacity: 0.65, ease: 'none' }, 0),
    })
  }

  return {
    timeline: heroTl,
    scrollTrigger: scrollTriggerInstance,
  }
}
