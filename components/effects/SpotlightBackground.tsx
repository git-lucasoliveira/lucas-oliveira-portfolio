'use client'

import { useEffect, useRef } from 'react'

export default function SpotlightBackground() {
  const spotlightRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLElement | null>(null)
  const rafRef = useRef<number>()
  const isInsideRef = useRef(true)

  useEffect(() => {
    // Get the parent section (HeroSection)
    if (spotlightRef.current) {
      containerRef.current = spotlightRef.current.closest('section')
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !isInsideRef.current) return

      // Cancel previous frame if still pending
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      // Schedule update for next frame
      rafRef.current = requestAnimationFrame(() => {
        if (spotlightRef.current && isInsideRef.current) {
          // Use CSS variables instead of inline background - prevents layout recalculation
          spotlightRef.current.style.setProperty('--mouse-x', `${e.clientX}px`)
          spotlightRef.current.style.setProperty('--mouse-y', `${e.clientY}px`)
        }
      })
    }

    const handleMouseEnter = () => {
      isInsideRef.current = true
      // Show spotlight when entering
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = '1'
      }
    }

    const handleMouseLeave = () => {
      isInsideRef.current = false
      // Hide spotlight when leaving
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = '0'
      }
    }

    if (containerRef.current) {
      containerRef.current.addEventListener('mouseenter', handleMouseEnter)
      containerRef.current.addEventListener('mouseleave', handleMouseLeave)
      containerRef.current.addEventListener('mousemove', handleMouseMove, { passive: true })
    }
    
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mouseenter', handleMouseEnter)
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave)
        containerRef.current.removeEventListener('mousemove', handleMouseMove)
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={spotlightRef}
      className="absolute inset-0 -z-10 spotlight-bg"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
        opacity: 1,
        transition: 'opacity 0.3s ease-out',
        pointerEvents: 'none',
      } as React.CSSProperties}
    />
  )
}
