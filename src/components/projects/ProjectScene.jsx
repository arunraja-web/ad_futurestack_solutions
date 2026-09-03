import React, { useRef, useEffect, useCallback } from 'react'
import { ExternalLink, Check } from 'lucide-react'
import BrowserMockup from './BrowserMockup.jsx'
import { useInViewOnce } from '../../hooks/useInViewOnce.js'

// Each card sticks at a slightly lower top offset so they
// "layer" on top of each other as you scroll down.
const STICKY_TOP_BASE = 80   // px — first card sticks 80px from top
const STICKY_TOP_STEP = 12   // px — each subsequent card sticks 12px lower

export default function ProjectScene({ project, index, totalProjects }) {
  const [sceneRef, isInView] = useInViewOnce({ threshold: 0.08, rootMargin: '0px 0px -40px 0px' })
  const innerRef = useRef(null)
  const isReverse = index % 2 === 1
  const ghostNumber = String(index + 1).padStart(2, '0')
  const stickyTop = STICKY_TOP_BASE + index * STICKY_TOP_STEP

  // Scroll-linked scale/dim — drives --stack-progress on the inner div.
  // When the NEXT card scrolls over this one, this card shrinks slightly.
  const updateStackEffect = useCallback(() => {
    const el = sceneRef.current
    const inner = innerRef.current
    if (!el || !inner) return

    const rect = el.getBoundingClientRect()
    const cardH = el.offsetHeight

    // How far has this card been "pushed behind" the sticky top edge?
    // 0 = card top is at its sticky position, 1 = card is fully covered
    const distancePast = stickyTop - rect.top
    const progress = Math.min(Math.max(distancePast / cardH, 0), 1)

    inner.style.setProperty('--stack-progress', progress.toFixed(4))
  }, [sceneRef, stickyTop])

  useEffect(() => {
    // Skip for reduced-motion users
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let rafId = null
    const onScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        updateStackEffect()
        rafId = null
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    updateStackEffect() // initial call

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [updateStackEffect])

  return (
    <article
      ref={sceneRef}
      id={`project-${project.id}`}
      className="project-scene-sticky"
      style={{ top: `${stickyTop}px` }}
    >
      {/* Inner wrapper — receives CSS var for stacking transform */}
      <div
        ref={innerRef}
        className={`project-scene-inner relative border border-slate-200/80 bg-white ${
          isInView ? 'is-scene-visible' : ''
        }`}
        style={{ '--stack-progress': '0' }}
      >

        {/* Ghost Number Decorative Background */}
        <div
          className="ghost-number-bg select-none pointer-events-none absolute font-mono font-black text-[160px] sm:text-[220px] lg:text-[280px] leading-none text-slate-900/[0.025]"
          aria-hidden="true"
          style={{ top: '0px', [isReverse ? 'left' : 'right']: '16px' }}
        >
          {ghostNumber}
        </div>

        {/* Stacking scrim — darkens card as next one overlaps */}
        <div className="stack-scrim" aria-hidden="true" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch relative z-10">

          {/* ── Text Content — 4 cols ── */}
          <div className={`lg:col-span-4 flex flex-col justify-center px-8 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20 ${
            isReverse ? 'lg:order-2' : 'lg:order-1'
          }`}>

            {/* Category Tag + Live Demo */}
            <div className="scene-stagger-item scene-delay-1 flex items-center gap-3 mb-5">
              <span className="scene-category-tag">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-600 shrink-0" />
                {project.tag}
              </span>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} live demo`}
                  className="scene-live-pill"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              )}
            </div>

            {/* Title */}
            <h3 className="scene-stagger-item scene-delay-2 scene-title mb-4">
              {project.title}
            </h3>

            {/* Description */}
            <p className="scene-stagger-item scene-delay-3 scene-description mb-7">
              {project.description}
            </p>

            {/* Bullet List */}
            <div className="flex flex-col gap-3">
              {project.bullets.map((bullet, bIdx) => (
                <div
                  key={bIdx}
                  className="scene-stagger-item flex items-start gap-3 text-sm text-slate-700 font-medium"
                  style={{ transitionDelay: `${280 + bIdx * 60}ms` }}
                >
                  <span className="scene-bullet-icon shrink-0 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span className="leading-snug">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Visual Mockup — 8 cols, dominant ── */}
          <div className={`lg:col-span-8 ${isReverse ? 'lg:order-1' : 'lg:order-2'}`}>
            <BrowserMockup
              bgImage={project.bgImage}
              fallbackImage={project.fallbackImage}
              title={project.title}
              tag={project.tag}
              liveUrl={project.liveUrl}
              stat={project.stat}
              statLabel={project.statLabel}
              isInView={isInView}
            />
          </div>
        </div>
      </div>
    </article>
  )
}
