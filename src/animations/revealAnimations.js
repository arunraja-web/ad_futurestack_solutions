import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Reusable GSAP ScrollTrigger reveal functions for sections, headings, and staggered lists.
 * Reverses cleanly on scroll-up without items vanishing permanently or glitching.
 */
export function initSectionReveals(rootEl) {
  if (!rootEl) return []

  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isMobile = window.innerWidth < 768

  if (isReduced) {
    gsap.set(
      rootEl.querySelectorAll(
        '[data-reveal], .gsap-reveal, .gsap-mask-text, .gsap-stagger-item, .home-cta-content'
      ),
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        clearProps: 'all',
      }
    )
    return []
  }

  const triggers = []

  // 1. Generic Section / Block Reveals using [data-reveal] or .gsap-reveal
  const revealElements = rootEl.querySelectorAll('[data-reveal]:not([data-reveal="none"]), .gsap-reveal')
  revealElements.forEach((el) => {
    // Skip if card item or grid handled separately
    if (el.closest('.gsap-card-grid') && el.classList.contains('gsap-card-item')) return

    const dir = el.getAttribute('data-reveal')
    let xOffset = 0
    let yOffset = isMobile ? 24 : 45

    if (dir === 'left') {
      xOffset = isMobile ? -20 : -45
      yOffset = 0
    } else if (dir === 'right') {
      xOffset = isMobile ? 20 : 45
      yOffset = 0
    }

    gsap.set(el, {
      opacity: 0,
      x: xOffset,
      y: yOffset,
      scale: 0.98,
    })

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      end: 'bottom 5%',
      toggleActions: 'play reverse play reverse',
      animation: gsap.to(el, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.95,
        ease: 'power4.out',
      }),
    })
    triggers.push(st)
  })

  // 2. Masked Heading Reveals (.gsap-mask-line)
  const maskLines = rootEl.querySelectorAll('.gsap-mask-line')
  maskLines.forEach((line) => {
    gsap.set(line, { yPercent: 110, opacity: 0 })

    const st = ScrollTrigger.create({
      trigger: line.parentElement,
      start: 'top 88%',
      toggleActions: 'play reverse play reverse',
      animation: gsap.to(line, {
        yPercent: 0,
        opacity: 1,
        duration: 1.05,
        ease: 'power4.out',
      }),
    })
    triggers.push(st)
  })

  // 3. Staggered Row Lists (.gsap-stagger-list)
  const staggerLists = rootEl.querySelectorAll('.gsap-stagger-list')
  staggerLists.forEach((list) => {
    const items = list.querySelectorAll('.gsap-stagger-item')
    if (!items.length) return

    gsap.set(items, {
      opacity: 0,
      y: isMobile ? 18 : 28,
    })

    const st = ScrollTrigger.create({
      trigger: list,
      start: 'top 85%',
      toggleActions: 'play reverse play reverse',
      animation: gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: 'power3.out',
      }),
    })
    triggers.push(st)
  })

  return triggers
}
