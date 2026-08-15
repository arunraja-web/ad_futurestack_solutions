import { useState, useEffect, useRef } from 'react'

export function useMouseParallax(intensity = 15) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const tickingRef = useRef(false)

  useEffect(() => {
    let latestE = null

    const updatePosition = () => {
      if (latestE) {
        const { innerWidth, innerHeight } = window
        const x = ((latestE.clientX / innerWidth) - 0.5) * intensity
        const y = ((latestE.clientY / innerHeight) - 0.5) * intensity
        setPosition({ x, y })
      }
      tickingRef.current = false
    }

    const handleMouseMove = (e) => {
      latestE = e
      if (!tickingRef.current) {
        tickingRef.current = true
        requestAnimationFrame(updatePosition)
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [intensity])

  return position
}
