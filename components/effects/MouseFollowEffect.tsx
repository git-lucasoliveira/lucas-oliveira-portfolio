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
    ? `radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
       rgba(96, 165, 250, 0.08), 
       rgba(59, 130, 246, 0.05) 30%,
       rgba(37, 99, 235, 0.02) 50%,
       transparent 70%)`
    : `radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
       rgba(96, 165, 250, 0.06), 
       rgba(59, 130, 246, 0.04) 30%,
       rgba(37, 99, 235, 0.015) 50%,
       transparent 70%)`

  return (
    <div
      ref={spotlightRef}
      className="fixed inset-0 pointer-events-none transition-all duration-300 ease-out"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
        background: gradient,
        zIndex: 1,
        filter: 'blur(40px)',
      } as React.CSSProperties}
    />
  )
}
