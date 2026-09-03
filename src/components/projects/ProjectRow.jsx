import React, { useRef, useState, useEffect } from 'react'
import { ExternalLink, Check } from 'lucide-react'

// ─── Simple one-time IntersectionObserver hook ────────────────────────────────
function useRevealOnce() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Immediately show for reduced-motion users
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const el = ref.current
    if (!el) return

    // Already in view on mount? Show immediately.
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

// ─── Image card with browser chrome ──────────────────────────────────────────
function ProjectImage({ bgImage, fallbackImage, title, stat, statLabel, liveUrl, visible }) {
  const [src, setSrc] = useState(bgImage)

  let domain = liveUrl
  try { domain = new URL(liveUrl).hostname } catch { /* keep raw */ }

  return (
    <div
      className={`prow-image-col prow-reveal ${visible ? 'prow-reveal--visible' : ''}`}
      style={{ transitionDelay: '100ms' }}
    >
      {/* Browser chrome frame */}
      <div className="prow-browser">
        {/* Chrome bar */}
        <div className="prow-chrome-bar">
          <div className="prow-chrome-dots">
            <span className="prow-dot prow-dot--red" />
            <span className="prow-dot prow-dot--yellow" />
            <span className="prow-dot prow-dot--green" />
          </div>
          <div className="prow-url-bar">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="prow-lock-icon" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span className="prow-url-text">{domain}</span>
          </div>
          <div className="prow-chrome-live">
            <span className="prow-live-dot" />
            <span>Live</span>
          </div>
        </div>

        {/* Screenshot */}
        <div className="prow-screenshot-wrap">
          <img
            src={src}
            onError={() => fallbackImage && setSrc(fallbackImage)}
            alt={`${title} — project screenshot`}
            loading="lazy"
            className="prow-screenshot"
          />
          {/* Subtle bottom scrim so CTA button is legible */}
          <div className="prow-scrim" aria-hidden="true" />

          {/* Stat badge — top-right corner */}
          {stat && (
            <div className="prow-stat-badge" aria-label={`${stat} ${statLabel}`}>
              <span className="prow-stat-value">{stat}</span>
              {statLabel && <span className="prow-stat-label">{statLabel}</span>}
            </div>
          )}

          {/* CTA button overlay */}
          {liveUrl && (
            <div className="prow-cta-wrap">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="prow-cta-btn"
              >
                <span>View Live Demo</span>
                <ExternalLink className="prow-cta-icon" aria-hidden="true" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Text content panel ───────────────────────────────────────────────────────
function ProjectText({ project, visible }) {
  return (
    <div className={`prow-text-col prow-reveal ${visible ? 'prow-reveal--visible' : ''}`}>
      {/* Category tag + live link */}
      <div className="prow-tag-row">
        <span className="prow-category-tag">{project.tag}</span>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="prow-live-link"
          >
            Live Demo <ExternalLink className="prow-live-link-icon" aria-hidden="true" />
          </a>
        )}
      </div>

      {/* Title */}
      <h3 className="prow-title">{project.title}</h3>

      {/* Description */}
      <p className="prow-description">{project.description}</p>

      {/* Bullets */}
      <ul className="prow-bullets" aria-label="Key features">
        {project.bullets.map((b, i) => (
          <li key={i} className="prow-bullet">
            <span className="prow-check" aria-hidden="true">
              <Check size={11} strokeWidth={3} />
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function ProjectRow({ project, index }) {
  const [rowRef, visible] = useRevealOnce()
  const imageLeft = index % 2 === 0   // even = image on left

  return (
    <article
      ref={rowRef}
      id={`project-${project.id}`}
      className="prow"
    >
      {imageLeft ? (
        <>
          <ProjectImage {...project} visible={visible} />
          <ProjectText  project={project} visible={visible} />
        </>
      ) : (
        <>
          <ProjectText  project={project} visible={visible} />
          <ProjectImage {...project} visible={visible} />
        </>
      )}
    </article>
  )
}
