import React from 'react'
import { useCountUp } from '../../hooks/useCountUp.js'
import { Zap } from 'lucide-react'

export default function StatCounterBadge({ stat, label, isInView, className = '' }) {
  if (!stat) return null

  // Split stat into primary number/value vs descriptive text if mixed
  // For example: "99.9% Uptime" -> value "99.9%", label "Uptime"
  let displayValue = stat
  let displayLabel = label || ''

  if (!label && stat.includes(' ')) {
    const parts = stat.split(' ')
    displayValue = parts[0]
    displayLabel = parts.slice(1).join(' ')
  }

  const animatedValue = useCountUp(displayValue, isInView, 1200)

  return (
    <div
      className={`stat-counter-badge inline-flex items-center gap-2 px-3.5 py-1.5 
        bg-slate-950/85 backdrop-blur-md border border-violet-500/40 
        rounded-md shadow-lg shadow-violet-950/50 text-white z-20 
        transition-[opacity,transform] duration-700 ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95'} ${className}`}
      style={{
        boxShadow: '0 8px 24px -4px rgba(109, 40, 217, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.15)'
      }}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse shadow-[0_0_8px_rgba(167,139,250,0.9)]" />
      <span className="font-mono font-extrabold text-sm text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-violet-400 tracking-tight">
        {animatedValue}
      </span>
      {displayLabel && (
        <span className="text-[11px] font-medium text-slate-300 uppercase tracking-wider pl-0.5 border-l border-white/20">
          {displayLabel}
        </span>
      )}
    </div>
  )
}
