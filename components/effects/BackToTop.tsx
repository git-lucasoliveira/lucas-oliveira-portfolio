'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create a sentinel element at the top of the page
    const sentinel = document.createElement('div')
    sentinel.style.position = 'absolute'
    sentinel.style.top = '300px'
    sentinel.style.height = '1px'
    sentinel.style.width = '1px'
    sentinel.style.pointerEvents = 'none'
    document.body.appendChild(sentinel)

    // Use IntersectionObserver instead of scroll event listener
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Button visible when sentinel is OUT of viewport (scrolled past 300px)
        setIsVisible(!entry.isIntersecting)
      },
      {
        threshold: 0,
        rootMargin: '0px',
      }
    )

    observer.observe(sentinel)

    return () => {
      observer.disconnect()
      document.body.removeChild(sentinel)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-primary-light dark:bg-primary-dark text-white shadow-md transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ willChange: 'transform, opacity' }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
