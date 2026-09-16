import { useState, useEffect, useRef } from 'react'

export function useMouseParallax(intensity = 6) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const currentPos = useRef({ x: 0, y: 0 })
  const targetPos = useRef({ x: 0, y: 0 })
  const rafId = useRef(null)

  useEffect(() => {
    let active = true

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window
      targetPos.current = {
        x: ((e.clientX / innerWidth) - 0.5) * intensity,
        y: ((e.clientY / innerHeight) - 0.5) * intensity,
      }
    }

    const loop = () => {
      if (!active) return
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.05
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.05
      setPosition({ x: currentPos.current.x, y: currentPos.current.y })
      rafId.current = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    rafId.current = requestAnimationFrame(loop)

    return () => {
      active = false
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [intensity])

  return position
}
