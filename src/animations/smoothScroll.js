import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance = null
let tickerCallback = null

/**
 * Returns active Lenis instance
 */
export function getLenis() {
  return lenisInstance
}

/**
 * Initializes Lenis smooth scrolling and synchronizes it with GSAP's ticker & ScrollTrigger.
 * Scoped strictly to Home page lifecycle.
 */
export function initSmoothScroll() {
  if (typeof window === 'undefined') return null

  // Respect prefers-reduced-motion: if enabled, do not initialize smooth scroll
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return null
  }

  // Teardown any existing instance first
  destroySmoothScroll()

  try {
    lenisInstance = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      infinite: false,
    })

    // Synchronize ScrollTrigger with Lenis scroll updates
    lenisInstance.on('scroll', ScrollTrigger.update)

    // Run Lenis RAF via GSAP ticker for seamless frame synchronization
    tickerCallback = (time) => {
      if (lenisInstance) {
        lenisInstance.raf(time * 1000)
      }
    }

    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0)

    return lenisInstance
  } catch (err) {
    console.warn('Failed to initialize Lenis smooth scroll:', err)
    return null
  }
}

/**
 * Destroys the Lenis instance and restores native browser scrolling completely.
 * Called automatically when Home unmounts.
 */
export function destroySmoothScroll() {
  if (tickerCallback) {
    gsap.ticker.remove(tickerCallback)
    tickerCallback = null
  }

  if (lenisInstance) {
    try {
      lenisInstance.destroy()
    } catch {
      // ignore
    }
    lenisInstance = null
  }

  // Force ScrollTrigger to refresh & sync with native window scroll
  ScrollTrigger.update()
}
