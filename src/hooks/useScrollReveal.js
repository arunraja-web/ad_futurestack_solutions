import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useScrollReveal() {
  const location = useLocation()

  useEffect(() => {
    const handleObserver = (entries, observer) => {
      entries.forEach((entry) => {
        const isOnce = entry.target.getAttribute('data-reveal-once') === 'true'

        if (entry.isIntersecting) {
          const stagger = entry.target.getAttribute('data-stagger')
          if (stagger && !entry.target.style.transitionDelay) {
            const delay = Math.min(parseInt(stagger, 10) || 0, 300)
            entry.target.style.transitionDelay = `${delay}ms`
          }
          entry.target.classList.add('is-revealed')
          if (isOnce) {
            observer.unobserve(entry.target)
          }
        } else if (!isOnce) {
          entry.target.classList.remove('is-revealed')
        }
      })
    }

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08,
    })

    const elements = document.querySelectorAll('[data-reveal]')
    elements.forEach((el) => {
      observer.observe(el)
    })

    return () => {
      elements.forEach((el) => observer.unobserve(el))
      observer.disconnect()
    }
  }, [location.pathname])
}

