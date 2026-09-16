import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Staggered card entrance for grid layouts (FeaturedProjects, Process cards, etc.)
 * Cards enter with opacity, y-offset, and scale; inner images perform a subtle scale-in.
 */
export function initCardGrids(rootEl) {
  if (!rootEl) return []

  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isMobile = window.innerWidth < 768

  const grids = rootEl.querySelectorAll('.gsap-card-grid')
  if (!grids.length) return []

  if (isReduced) {
    grids.forEach((grid) => {
      const cards = grid.querySelectorAll('.gsap-card-item')
      cards.forEach((c) => {
        c.style.opacity = '1'
        c.style.transform = 'none'
      })
    })
    return []
  }

  const triggers = []

  grids.forEach((grid) => {
    const cards = grid.querySelectorAll('.gsap-card-item')
    if (!cards.length) return

    // Set initial card states
    gsap.set(cards, {
      opacity: 0,
      y: isMobile ? 25 : 50,
      scale: 0.97,
    })

    const innerImages = grid.querySelectorAll('.gsap-card-item img')
    if (innerImages.length) {
      gsap.set(innerImages, { scale: 1.08 })
    }

    const cardTl = gsap.timeline({ paused: true })
      .to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: isMobile ? 0.08 : 0.1,
        duration: 0.85,
        ease: 'power4.out',
      }, 0)

    if (innerImages.length) {
      cardTl.to(innerImages, {
        scale: 1,
        stagger: isMobile ? 0.08 : 0.1,
        duration: 0.95,
        ease: 'power3.out',
      }, 0.04)
    }

    const st = ScrollTrigger.create({
      trigger: grid,
      start: 'top 83%',
      onEnter: () => cardTl.play(),
      onLeaveBack: () => cardTl.reverse(),
    })
    triggers.push(st)

    // Subtle parallax on left process feature card image if present
    const parallaxImg = grid.querySelector('.process-parallax-img')
    if (parallaxImg && !isMobile) {
      const pSt = ScrollTrigger.create({
        trigger: parallaxImg.closest('.process-left-feature') || grid,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
        animation: gsap.fromTo(
          parallaxImg,
          { yPercent: -4 },
          { yPercent: 4, ease: 'none' }
        ),
      })
      triggers.push(pSt)
    }
  })

  return triggers
}
