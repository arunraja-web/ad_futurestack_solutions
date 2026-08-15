import { useEffect, useState, useRef } from 'react'

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const tickingRef = useRef(false)

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight > 0) {
        setScrollProgress(Math.min(Math.max(currentScroll / scrollHeight, 0), 1))
      }
      tickingRef.current = false
    }

    const onScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true
        requestAnimationFrame(updateScrollProgress)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    updateScrollProgress()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 shadow-[0_0_12px_rgba(124,58,237,0.6)] origin-left will-change-transform"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
    </div>
  )
}
