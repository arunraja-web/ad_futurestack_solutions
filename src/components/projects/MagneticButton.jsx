import React, { useRef, useState } from 'react'
import { ExternalLink } from 'lucide-react'

export default function MagneticButton({
  href,
  children = 'View Live Project Demo',
  className = '',
  showPulse = true,
  statusText = 'Live System'
}) {
  const buttonRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return
    // Skip magnetic pull on touch devices or reduced motion
    if (window.matchMedia('(hover: none)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Maximum translation offset ~8px
    const maxOffset = 8
    const deltaX = (e.clientX - centerX) / (rect.width / 2)
    const deltaY = (e.clientY - centerY) / (rect.height / 2)

    setPosition({
      x: deltaX * maxOffset,
      y: deltaY * maxOffset
    })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setPosition({ x: 0, y: 0 })
  }

  return (
    <a
      ref={buttonRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered ? 'transform 0.12s ease-out' : 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.25s ease, box-shadow 0.25s ease'
      }}
      className={`group relative inline-flex items-center justify-center gap-3 w-full py-3 px-5 
        bg-gradient-to-r from-violet-700 via-violet-600 to-indigo-700 
        hover:from-violet-600 hover:via-violet-500 hover:to-indigo-600 
        text-white font-montserrat font-semibold text-sm rounded-lg shadow-lg shadow-violet-900/25 
        border border-violet-400/30 hover:border-violet-300/60 
        active:scale-[0.98] ${className}`}
    >
      {/* Live status dot with concentric ping animation */}
      {showPulse && (
        <span className="relative flex h-2.5 w-2.5 items-center justify-center shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
        </span>
      )}

      <span className="tracking-wide">{children}</span>

      <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 opacity-90 group-hover:opacity-100" />
    </a>
  )
}
