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
          '--mouse-x': '-9999px',
          '--mouse-y': '-9999px',
          background: resolvedTheme === 'light'
            ? 'radial-gradient(400px at var(--mouse-x, -9999px) var(--mouse-y, -9999px), rgba(59, 130, 246, 0.05), rgba(59, 130, 246, 0.02) 40%, transparent 80%)'
            : 'radial-gradient(400px at var(--mouse-x, -9999px) var(--mouse-y, -9999px), rgba(59, 130, 246, 0.04), rgba(59, 130, 246, 0.015) 40%, transparent 80%)',
          zIndex: 1,
          filter: 'blur(20px)',
        } as React.CSSProperties}
      />
      
      {/* Gradiente cyan secundário - offset */}
      <div
        className="fixed inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          '--mouse-x': '-9999px',
          '--mouse-y': '-9999px',
          background: resolvedTheme === 'light'
            ? 'radial-gradient(320px at calc(var(--mouse-x, -9999px) + 60px) calc(var(--mouse-y, -9999px) + 60px), rgba(34, 211, 238, 0.04), rgba(34, 211, 238, 0.015) 35%, transparent 75%)'
            : 'radial-gradient(320px at calc(var(--mouse-x, -9999px) + 60px) calc(var(--mouse-y, -9999px) + 60px), rgba(34, 211, 238, 0.025), rgba(34, 211, 238, 0.01) 35%, transparent 75%)',
          zIndex: 1,
          filter: 'blur(20px)',
        } as React.CSSProperties}
      />
      
      {/* Gradiente roxo terciário - offset oposto */}
      <div
        className="fixed inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          '--mouse-x': '-9999px',
          '--mouse-y': '-9999px',
          background: resolvedTheme === 'light'
            ? 'radial-gradient(280px at calc(var(--mouse-x, -9999px) - 50px) calc(var(--mouse-y, -9999px) - 50px), rgba(168, 85, 247, 0.03), rgba(168, 85, 247, 0.01) 35%, transparent 75%)'
            : 'radial-gradient(280px at calc(var(--mouse-x, -9999px) - 50px) calc(var(--mouse-y, -9999px) - 50px), rgba(168, 85, 247, 0.02), rgba(168, 85, 247, 0.008) 35%, transparent 75%)',
          zIndex: 1,
          filter: 'blur(20px)',
        } as React.CSSProperties}
      />
    </>
  )
}
