import { useState, useEffect } from 'react'

const HERO_SLIDES = [
  {
    src: '/images/hero/hero-slide-1.webp',
    alt: 'Enterprise Cloud Architecture & Distributed Systems',
  },
  {
    src: '/images/hero/hero-slide-2.webp',
    alt: 'High-Performance Engineering Team Collaboration',
  },
  {
    src: '/images/hero/hero-slide-3.webp',
    alt: 'Modern Cloud Infrastructure & High Throughput Platforms',
  },
  {
    src: '/images/hero/hero-slide-4.webp',
    alt: 'Full-Stack Software Engineering & Clean Code Architecture',
  },
  {
    src: '/images/hero/hero-slide-5.webp',
    alt: 'AI Systems, Automation & Digital Transformation',
  },
  {
    src: '/images/hero/hero-slide-6.webp',
    alt: 'Strategic Enterprise Technology Consulting & Delivery',
  },
  {
    src: '/images/hero/hero-slide-7.webp',
    alt: 'Agile Software Engineering & Client Solution Delivery',
  },
  {
    src: '/images/hero/hero-slide-8.webp',
    alt: 'Software Leadership & Modern IT Innovation',
  },
]

export default function HeroBackground({
  bgScale = 1,
  bgOpacity = 1,
  mousePos = { x: 0, y: 0 },
  isTouch = false,
}) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    // Faster crossfade transition: new slide every 3.6 seconds
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 3600)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div
      className="hero-anim-video absolute inset-0 w-full h-full pointer-events-none transition-transform duration-700 ease-out overflow-hidden select-none z-0 will-change-transform"
      style={{
        transform: `scale(${bgScale}) translate3d(${isTouch ? 0 : mousePos.x * 0.8}px, ${isTouch ? 0 : mousePos.y * 0.8}px, 0)`,
        opacity: bgOpacity,
      }}
    >
      {/* 1. Crossfading Image Slides Stack */}
      <div className="relative w-full h-full overflow-hidden">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide

          return (
            <div
              key={slide.src}
              className={`absolute inset-0 w-full h-full transition-opacity duration-[1200ms] ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading="eager"
                fetchPriority={index === 0 ? 'high' : 'auto'}
                className={`w-full h-full object-cover filter brightness-100 contrast-[1.03] will-change-transform ${
                  isActive ? 'ken-burns-active' : 'scale-100'
                }`}
              />
            </div>
          )
        })}
      </div>

      {/* 2. Light & Crisp Gradient Overlays (Bright top, soft shadow only at bottom for text legibility) */}
      {/* Top subtle light wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Soft black shadow overlay ONLY at the bottom portion of hero */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent z-10 pointer-events-none" />

      {/* Very soft brand accent wash */}
      <div className="absolute inset-0 bg-[#0062CD]/[0.025] z-10 pointer-events-none" />

      {/* Subtle Vector Grid Texture */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-10 mix-blend-overlay z-10 pointer-events-none" />
    </div>
  )
}
