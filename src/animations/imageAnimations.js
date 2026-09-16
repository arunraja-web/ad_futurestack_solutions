import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Cinematic image reveals using GPU-accelerated clip-path inset wiping,
 * scale 1.08 -> 1, opacity 0 -> 1, and subtle Ken Burns scroll drift.
 */
export function initCinematicImageReveals(rootEl) {
  if (!rootEl) return []

  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isMobile = window.innerWidth < 768

  const wrappers = rootEl.querySelectorAll('.cinematic-image-wrapper')
  if (!wrappers.length) return []

  if (isReduced) {
    wrappers.forEach((wrap) => {
      wrap.style.clipPath = 'inset(0% 0% 0% 0%)'
      const img = wrap.querySelector('img')
      if (img) {
        img.style.opacity = '1'
        img.style.transform = 'none'
      }
    })
    return []
  }

  const triggers = []

  wrappers.forEach((wrapper) => {
    const img = wrapper.querySelector('img')
    if (!img) return

    // Set initial clip-path and image transformation
    gsap.set(wrapper, {
      clipPath: 'inset(100% 0% 0% 0%)',
    })
    gsap.set(img, {
      scale: 1.1,
      opacity: 0,
    })

    const revealTl = gsap.timeline({ paused: true })
      .to(wrapper, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.25,
        ease: 'power4.inOut',
      }, 0)
      .to(img, {
        scale: 1,
        opacity: 1,
        duration: 1.35,
        ease: 'power3.out',
      }, 0.05)

    const st = ScrollTrigger.create({
      trigger: wrapper,
      start: 'top 85%',
      onEnter: () => revealTl.play(),
      onLeaveBack: () => revealTl.reverse(),
    })
    triggers.push(st)

    // Subtle Ken Burns drift on desktop scroll
    if (!isMobile) {
      const driftSt = ScrollTrigger.create({
        trigger: wrapper,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
        animation: gsap.to(img, {
          yPercent: -5,
          ease: 'none',
        }),
      })
      triggers.push(driftSt)
    }
  })

  return triggers
}
