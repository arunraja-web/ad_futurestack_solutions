import { useEffect } from 'react'

/**
 * Dedicated scroll reveal hook for Home page elements.
 * Provides Apple-style entrance reveals with cubic-bezier timing and stagger support.
 * Scoped strictly to Home page without affecting any other routes or components.
 */
export default function useHomeScrollReveal() {
  useEffect(() => {
    // Respect user's motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        el.classList.add('is-revealed')
      })
      return
    }

    const handleObserver = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stagger = entry.target.getAttribute('data-stagger')
          if (stagger && !entry.target.style.transitionDelay) {
            const delay = Math.min(parseInt(stagger, 10) || 0, 600)
            entry.target.style.transitionDelay = `${delay}ms`
          }
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.05,
    })

    const elements = document.querySelectorAll('[data-reveal]')

    // Give browser initial frame to paint opacity:0 before triggering reveals
    const timer = setTimeout(() => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const stagger = el.getAttribute('data-stagger')
          if (stagger && !el.style.transitionDelay) {
            const delay = Math.min(parseInt(stagger, 10) || 0, 600)
            el.style.transitionDelay = `${delay}ms`
          }
          el.classList.add('is-revealed')
        } else {
          observer.observe(el)
        }
      })
    }, 60)

    return () => {
      clearTimeout(timer)
      elements.forEach((el) => observer.unobserve(el))
      observer.disconnect()
    }
  }, [])
}
