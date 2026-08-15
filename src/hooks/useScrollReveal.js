import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useScrollReveal() {
  const location = useLocation()

  useEffect(() => {
    const handleObserver = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stagger = entry.target.getAttribute('data-stagger')
          if (stagger && !entry.target.style.transitionDelay) {
            const delay = Math.min(parseInt(stagger, 10) || 0, 300)
            entry.target.style.transitionDelay = `${delay}ms`
          }
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '0px 0px -15px 0px',
      threshold: 0.01,
    })

    const elements = document.querySelectorAll('[data-reveal]')
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      // If already in top viewport on load, reveal immediately without delay
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-revealed')
      } else {
        observer.observe(el)
      }
    })

    return () => {
      elements.forEach((el) => observer.unobserve(el))
      observer.disconnect()
    }
  }, [location.pathname])
}
