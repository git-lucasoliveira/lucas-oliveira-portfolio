'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export default function MouseFollowEffect() {
  const spotlightRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>()
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Cancel previous frame if still pending
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      // Schedule update for next frame
      rafRef.current = requestAnimationFrame(() => {
        if (spotlightRef.current) {
          spotlightRef.current.style.setProperty('--mouse-x', `${e.clientX}px`)
          spotlightRef.current.style.setProperty('--mouse-y', `${e.clientY}px`)
        }
      })
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  const gradient = resolvedTheme === 'light'
    ? 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.12), transparent 40%)'
    : 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.08), transparent 40%)'

  return (
    <div
      ref={spotlightRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
        background: gradient,
        zIndex: 1,
      } as React.CSSProperties}
    />
  )
}
