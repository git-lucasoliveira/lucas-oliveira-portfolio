'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'

export default function MouseFollowEffect() {
  const spotlightRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>()
  const { resolvedTheme } = useTheme()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Ativar o efeito no primeiro movimento
      if (!isActive) {
        setIsActive(true)
      }

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
  }, [isActive])

  if (!isActive) return null

  return (
    <>
      {/* Gradiente azul principal */}
      <div
        ref={spotlightRef}
        className="fixed inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          '--mouse-x': '50%',
          '--mouse-y': '50%',
          background: resolvedTheme === 'light'
            ? 'radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.06), transparent 60%)'
            : 'radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.04), transparent 60%)',
          zIndex: 1,
        } as React.CSSProperties}
      />
      
      {/* Gradiente cyan secundário - offset */}
      <div
        className="fixed inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          '--mouse-x': '50%',
          '--mouse-y': '50%',
          background: resolvedTheme === 'light'
            ? 'radial-gradient(500px at calc(var(--mouse-x, 50%) + 80px) calc(var(--mouse-y, 50%) + 80px), rgba(34, 211, 238, 0.04), transparent 50%)'
            : 'radial-gradient(500px at calc(var(--mouse-x, 50%) + 80px) calc(var(--mouse-y, 50%) + 80px), rgba(34, 211, 238, 0.025), transparent 50%)',
          zIndex: 1,
        } as React.CSSProperties}
      />
      
      {/* Gradiente roxo terciário - offset oposto */}
      <div
        className="fixed inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          '--mouse-x': '50%',
          '--mouse-y': '50%',
          background: resolvedTheme === 'light'
            ? 'radial-gradient(400px at calc(var(--mouse-x, 50%) - 60px) calc(var(--mouse-y, 50%) - 60px), rgba(168, 85, 247, 0.03), transparent 50%)'
            : 'radial-gradient(400px at calc(var(--mouse-x, 50%) - 60px) calc(var(--mouse-y, 50%) - 60px), rgba(168, 85, 247, 0.02), transparent 50%)',
          zIndex: 1,
        } as React.CSSProperties}
      />
    </>
  )
}
