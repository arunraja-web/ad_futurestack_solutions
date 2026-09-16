import { useState, useEffect, useRef } from 'react'

const HERO_SLIDES = [
  {
    src: '/images/hero/hero-slide-1.webp',
    alt: 'Modern Tech Office & Collaborative Development',
  },
  {
    src: '/images/hero/hero-slide-2.webp',
    alt: 'Code Architecture & Full-Stack Engineering Workspace',
  },
  {
    src: '/images/hero/hero-slide-3.webp',
    alt: 'AI Neural Networks, Data Pipelines & Connected APIs',
  },
  {
    src: '/images/hero/hero-slide-4.webp',
    alt: 'AI Enterprise Intelligence, Sales Telemetry & Cloud Ecosystems',
  },
  {
    src: '/images/hero/hero-slide-5.webp',
    alt: 'Cloud Server Infrastructure & Enterprise IT Systems',
  },
]

export default function HeroBackground({
  bgScale = 1,
  bgOpacity = 1,
  mousePos = { x: 0, y: 0 },
  isTouch = false,
}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const parallaxRef = useRef(null)
  const currentPos = useRef({ x: 0, y: 0 })
  const targetPos = useRef({ x: 0, y: 0 })
  const rafId = useRef(null)

  // Advance slide every ~4 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 4000)

    return () => clearInterval(intervalId)
  }, [])

  // Update target mouse position with dampened sensitivity (subtle drift)
  useEffect(() => {
    if (isTouch) {
      targetPos.current = { x: 0, y: 0 }
    } else {
      // 0.3x multiplier produces a gentle ±3px drift instead of harsh movement
      targetPos.current = {
        x: mousePos.x * 0.3,
        y: mousePos.y * 0.3,
      }
    }
  }, [mousePos, isTouch])

  // Continuous rAF lerp loop for silky-smooth motion without jitter or React re-renders
  useEffect(() => {
    if (isTouch) return

    let active = true
    const lerp = (start, end, factor) => start + (end - start) * factor

    const animate = () => {
      if (!active) return

      // Smooth interpolation toward target (lerp factor 0.05 gives cinematic gliding drift)
      currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, 0.05)
      currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, 0.05)

      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate3d(${currentPos.current.x.toFixed(3)}px, ${currentPos.current.y.toFixed(3)}px, 0)`
      }

      rafId.current = requestAnimationFrame(animate)
    }

    rafId.current = requestAnimationFrame(animate)

    return () => {
      active = false
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [isTouch])

  return (
    <div
      className="hero-anim-video absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0 will-change-transform"
      style={{
        transform: `scale(${bgScale})`,
        opacity: bgOpacity,
      }}
    >
      <style>{`
        @keyframes heroKenBurnsDrift {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
          }
        }
        .hero-ken-burns {
          animation: heroKenBurnsDrift 7s ease-out forwards;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-ken-burns {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* Parallax Container: Separated from Ken Burns and outer GSAP layer to eliminate shake */}
      <div
        ref={parallaxRef}
        className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] pointer-events-none will-change-transform"
      >
        {/* 1. Crossfading Image Slides Stack */}
        <div className="relative w-full h-full overflow-hidden">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === currentSlide

            return (
              <div
                key={slide.src}
                className={`absolute inset-0 w-full h-full transition-opacity duration-[1500ms] ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = '/images/hero/hero-workspace.webp'
                  }}
                  className={`w-full h-full object-cover filter brightness-100 contrast-[1.03] will-change-transform ${
                    isActive ? 'hero-ken-burns' : 'scale-100'
                  }`}
                />
              </div>
            )
          })}
        </div>

        {/* 2. Light & Crisp Gradient Overlays */}
        {/* Top subtle light wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent z-10 pointer-events-none" />

        {/* Soft black shadow overlay ONLY at the bottom portion of hero */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent z-10 pointer-events-none" />

        {/* Very soft brand accent wash */}
        <div className="absolute inset-0 bg-[#0062CD]/[0.025] z-10 pointer-events-none" />

        {/* Subtle Vector Grid Texture */}
        <div className="absolute inset-0 bg-tech-grid-dark opacity-10 mix-blend-overlay z-10 pointer-events-none" />
      </div>
    </div>
  )
}
