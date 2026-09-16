import { useEffect, useState, useRef } from 'react'

export function useScrollAnimation({
  threshold = 0.15,
  once = false,
  rootMargin = '0px',
  ...restOptions
} = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.unobserve(currentRef)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin, ...restOptions }
    )

    observer.observe(currentRef)

    return () => {
      observer.disconnect()
    }
  }, [threshold, once, rootMargin])

  return [ref, isVisible]
}

