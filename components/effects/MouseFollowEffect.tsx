'use client'

import { useEffect, useRef, useState } from 'react'

export default function MouseFollowEffect() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0
    const speed = 0.15

    const handleMouseMove = (e: MouseEvent) => {
      if (!isActive) {
        setIsActive(true)
      }
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animateCursor = () => {
      currentX += (mouseX - currentX) * speed
      currentY += (mouseY - currentY) * speed

      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentX}px`
        cursorRef.current.style.top = `${currentY}px`
      }

      rafRef.current = requestAnimationFrame(animateCursor)
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    rafRef.current = requestAnimationFrame(animateCursor)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [isActive])

  if (!isActive) return null

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none"
      style={{
        width: '20px',
        height: '20px',
        backgroundColor: 'rgba(59, 130, 246, 0.4)',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 999999,
        boxShadow: '0 0 15px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.4), 0 0 45px rgba(59, 130, 246, 0.2)',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
      }}
    />
  )
}
}
