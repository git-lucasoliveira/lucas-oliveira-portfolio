'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'

export default function MouseFollowEffect() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>()
  const { resolvedTheme } = useTheme()
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 })
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let targetX = -9999
    let targetY = -9999
    let currentX = -9999
    let currentY = -9999

    const handleMouseMove = (e: MouseEvent) => {
      if (!isActive) {
        setIsActive(true)
      }
      targetX = e.clientX
      targetY = e.clientY
    }

    const updatePosition = () => {
      // Smooth interpolation
      currentX += (targetX - currentX) * 0.1
      currentY += (targetY - currentY) * 0.1

      setMousePos({ x: currentX, y: currentY })
      rafRef.current = requestAnimationFrame(updatePosition)
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    rafRef.current = requestAnimationFrame(updatePosition)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [isActive])

  if (!isActive) return null

  const gradient = resolvedTheme === 'light'
    ? `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), transparent 70%)`
    : `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.06), transparent 70%)`

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        background: gradient,
        zIndex: 1,
        transition: 'opacity 0.3s ease',
      }}
    />
  )
}
}
