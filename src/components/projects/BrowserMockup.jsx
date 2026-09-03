import React, { useState } from 'react'
import { Lock } from 'lucide-react'
import MagneticButton from './MagneticButton.jsx'
import StatCounterBadge from './StatCounterBadge.jsx'

export default function BrowserMockup({
  bgImage,
  fallbackImage,
  title,
  tag,
  liveUrl,
  stat,
  statLabel,
  isInView
}) {
  const [imgSrc, setImgSrc] = useState(bgImage)
  const [hasError, setHasError] = useState(false)

  const getDomain = (url) => {
    if (!url) return 'adfuturestack.dev/preview'
    try {
      return new URL(url).hostname
    } catch {
      return url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
    }
  }

  const domain = getDomain(liveUrl)

  const handleImageError = () => {
    if (!hasError && fallbackImage) {
      setHasError(true)
      setImgSrc(fallbackImage)
    }
  }

  return (
    <div
      className={`browser-mockup-frame group relative overflow-hidden bg-slate-950 h-full ${
        isInView ? 'is-in-view' : ''
      }`}
    >
      {/* Browser Chrome Bar */}
      <div className="browser-chrome-header flex items-center justify-between px-5 py-3.5 bg-slate-900 border-b border-slate-800 select-none relative z-20">
        {/* macOS 3-dot controls */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/85 border border-rose-600/50" />
          <span className="w-3 h-3 rounded-full bg-amber-500/85 border border-amber-600/50" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/85 border border-emerald-600/50" />
        </div>

        {/* URL Bar */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-md max-w-[260px] sm:max-w-[340px] w-full mx-3 text-[11px] font-mono truncate">
          <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
          <span className="truncate text-slate-400 font-medium">https://{domain}</span>
        </div>

        {/* PROD badge — neutral */}
        <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider bg-slate-800/60 px-2.5 py-1 rounded border border-slate-700/50">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>LIVE</span>
        </div>
      </div>

      {/* Viewport */}
      <div className="browser-viewport relative w-full overflow-hidden bg-slate-950" style={{ minHeight: '420px', height: '100%' }}>

        {/* Stat Counter Badge */}
        {stat && (
          <div className="absolute top-4 right-4 z-30 pointer-events-none">
            <StatCounterBadge
              stat={stat}
              label={statLabel}
              isInView={isInView}
            />
          </div>
        )}

        {/* Screenshot with curtain-wipe slide */}
        <div className="browser-image-wrapper absolute inset-0 overflow-hidden">
          <img
            src={imgSrc}
            onError={handleImageError}
            alt={`AD FutureStack Case Study - ${title || tag || 'Project Visual'}`}
            loading="lazy"
            className="browser-screenshot w-full h-full object-cover object-top"
          />
          {/* Scrim overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
          {/* Subtle neutral edge ring */}
          <div className="absolute inset-0 ring-1 ring-inset ring-slate-800/40 pointer-events-none" />
        </div>

        {/* Floating CTA button */}
        {liveUrl && (
          <div className="absolute bottom-5 left-5 right-5 z-20">
            <MagneticButton href={liveUrl}>
              View Live Project Demo
            </MagneticButton>
          </div>
        )}
      </div>
    </div>
  )
}
