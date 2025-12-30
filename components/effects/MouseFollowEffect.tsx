'use client'

import { useEffect, useRef, useState } from 'react'

export default function MouseFollowEffect() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0
    const speed = 0.15

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animateCursor = () => {
      currentX += (mouseX - currentX) * speed
      currentY += (mouseY - currentY) * speed

      setMousePos({ x: currentX, y: currentY })
      rafRef.current = requestAnimationFrame(animateCursor)
    }

    const handleMouseDown = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'translate(-50%, -50%) scale(0.8)'
      }
    }

    const handleMouseUp = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
      }
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    rafRef.current = requestAnimationFrame(animateCursor)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none"
      style={{
        left: `${mousePos.x}px`,
        top: `${mousePos.y}px`,
        width: '20px',
        height: '20px',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 999999,
        boxShadow: '0 0 15px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.4), 0 0 45px rgba(59, 130, 246, 0.2)',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        transition: 'transform 0.1s ease',
      }}
    />
  )
}
