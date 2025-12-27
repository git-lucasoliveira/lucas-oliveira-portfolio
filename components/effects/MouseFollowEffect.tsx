'use client'

import { useEffect, useRef } from 'react'

export default function MouseFollowEffect() {
  const spotlightRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>()

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

  return (
    <div
      ref={spotlightRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
        background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.15), transparent 40%)',
      } as React.CSSProperties}
    />
  )
}
