import { useState, useEffect } from 'react'

/**
 * Parses numeric text like "99.9%", "4x", "2.5M", "50K+", "100%", "4.9★"
 * and animates the number from 0 to target over duration when `start` is true.
 */
export function useCountUp(rawText = '', start = false, duration = 1200) {
  const [displayText, setDisplayText] = useState(() => {
    // If not started yet, return rawText or initial zeroed format
    return rawText
  })

  useEffect(() => {
    if (!start || !rawText) return

    // If user prefers reduced motion, show final text immediately
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(rawText)
      return
    }

    // Match prefix, number (with decimals), and suffix
    // e.g. "99.9%" -> prefix: "", number: 99.9, suffix: "%"
    // e.g. "4.8★" -> prefix: "", number: 4.8, suffix: "★"
    // e.g. "$50K+" -> prefix: "$", number: 50, suffix: "K+"
    const regex = /^([^0-9.]*)([0-9]+(?:\.[0-9]+)?)(.*)$/
    const match = String(rawText).trim().match(regex)

    if (!match) {
      setDisplayText(rawText)
      return
    }

    const prefix = match[1] || ''
    const targetValue = parseFloat(match[2])
    const suffix = match[3] || ''
    const decimalPlaces = match[2].includes('.') ? match[2].split('.')[1].length : 0

    let startTime = null
    let animationFrameId = null

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutCubic(progress)
      const currentValue = targetValue * easedProgress

      const formattedNumber = decimalPlaces > 0
        ? currentValue.toFixed(decimalPlaces)
        : Math.round(currentValue).toString()

      setDisplayText(`${prefix}${formattedNumber}${suffix}`)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step)
      } else {
        const finalNumber = decimalPlaces > 0
          ? targetValue.toFixed(decimalPlaces)
          : targetValue.toString()
        setDisplayText(`${prefix}${finalNumber}${suffix}`)
      }
    }

    animationFrameId = requestAnimationFrame(step)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [rawText, start, duration])

  return displayText
}

export default useCountUp
