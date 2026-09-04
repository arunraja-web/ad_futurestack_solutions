import { useState, useEffect, useRef } from 'react'

/**
 * Triggers once when an element enters the viewport.
 * Uses a generous rootMargin so the animation starts BEFORE
 * the element is fully visible — this eliminates the "catch-up
 * stutter" where items pop in only after scrolling past them.
 *
 * Respects prefers-reduced-motion.
 */
export function useInViewOnce(options = {}) {
  const {
    threshold = 0.08,
    rootMargin = '0px 0px -40px 0px'
  } = options

  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  // Prevent duplicate observer creation on re-renders
  const observerRef = useRef(null)

  useEffect(() => {
    // Skip animation entirely for reduced-motion users
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsInView(true)
      return
    }

    const el = ref.current
    if (!el) return

    // If the element is already visible when the page loads
    // (e.g. hero section), reveal immediately with no delay
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsInView(true)
      return
    }

    // Clean up any previous observer
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Unobserve immediately — we only want one trigger
          observerRef.current?.disconnect()
          observerRef.current = null
        }
      },
      { threshold, rootMargin }
    )

    observerRef.current.observe(el)

    return () => {
      observerRef.current?.disconnect()
      observerRef.current = null
    }
    // Intentionally only run once on mount — options are stable values
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, isInView]
}

export default useInViewOnce
