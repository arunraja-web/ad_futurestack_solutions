import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ProjectsFinalCTA({
  videoSrc = '/videos/project-cta.mp4',
  title = 'Ready to Build Your Project?',
  description = 'Partner with our team to design and build your web app, mobile app, digital marketing engine, or SaaS platform.',
  buttonText = 'Start a Conversation',
  buttonLink = '/contact'
}) {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const [visible, setVisible] = useState(false)

  // 1. Text entrance reveal animation (triggered once when section enters viewport)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const sectionEl = sectionRef.current
    if (!sectionEl) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(sectionEl)
    return () => observer.disconnect()
  }, [])

  // 2. Video playback: continuous observer — restarts from beginning each time it enters view, pauses when leaving view
  useEffect(() => {
    const containerEl = containerRef.current
    const videoEl = videoRef.current
    if (!containerEl || !videoEl) return

    let playPromise = null
    let isCurrentlyInView = false

    // Ensure the video is stopped at the very beginning on initial load
    videoEl.pause()
    try {
      videoEl.currentTime = 0
    } catch {
      // Ignored if metadata not loaded yet
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisibleEnough = entry.isIntersecting && entry.intersectionRatio >= 0.35

        if (isVisibleEnough && !isCurrentlyInView) {
          isCurrentlyInView = true

          // Reset to beginning and play through once
          try {
            videoEl.currentTime = 0
          } catch {
            // Ignored
          }

          playPromise = videoEl.play()
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              // Gracefully handle interrupted play requests (e.g., rapid scroll)
            })
          }
        } else if (!entry.isIntersecting && isCurrentlyInView) {
          isCurrentlyInView = false

          // Leaving view: pause cleanly so it doesn't run off-screen
          if (playPromise !== undefined && playPromise !== null) {
            playPromise
              .then(() => {
                videoEl.pause()
              })
              .catch(() => {
                videoEl.pause()
              })
          } else {
            videoEl.pause()
          }
        }
      },
      { threshold: [0, 0.35] }
    )

    observer.observe(containerEl)

    return () => {
      observer.disconnect()
      if (videoEl) {
        videoEl.pause()
      }
    }
  }, [])

  const handleVideoEnded = () => {
    // Freeze cleanly on the last frame (no loop, no auto-reset)
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  return (
    <section ref={sectionRef} className="pfcta-section" aria-label="Call to Action">
      <div className="pfcta-container max-w-7xl mx-auto">
        <div className="pfcta-grid">
          {/* LEFT COLUMN: Text Content & CTA (55-60% desktop) */}
          <div className="pfcta-content-col">
            <span
              className={`pfcta-kicker pfcta-reveal ${visible ? 'pfcta-reveal--visible' : ''}`}
              style={{ transitionDelay: '0ms' }}
            >
              NEXT STEPS
            </span>

            <h2
              className={`pfcta-title pfcta-reveal ${visible ? 'pfcta-reveal--visible' : ''}`}
              style={{ transitionDelay: '60ms' }}
            >
              {title}
            </h2>

            <p
              className={`pfcta-description pfcta-reveal ${visible ? 'pfcta-reveal--visible' : ''}`}
              style={{ transitionDelay: '180ms' }}
            >
              {description}
            </p>

            <div
              className={`pfcta-btn-wrap pfcta-reveal ${visible ? 'pfcta-reveal--visible' : ''}`}
              style={{ transitionDelay: '300ms' }}
            >
              <Link to={buttonLink} className="pfcta-btn">
                <span>{buttonText}</span>
                <ArrowRight className="pfcta-btn-icon" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Video Player (watches containerRef, plays when 35% visible, freezes on end) */}
          <div className="pfcta-video-col">
            <div
              ref={containerRef}
              className={`pfcta-video-wrap pfcta-reveal ${visible ? 'pfcta-reveal--visible' : ''}`}
              style={{ transitionDelay: '140ms' }}
            >
              <video
                ref={videoRef}
                muted
                playsInline
                preload="auto"
                onEnded={handleVideoEnded}
                className="pfcta-video"
                aria-label="Product demonstration video"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
