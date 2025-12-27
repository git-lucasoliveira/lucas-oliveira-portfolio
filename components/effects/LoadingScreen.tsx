'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate page load - adjust timing as needed
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // 1.5s loading time

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          {/* Logo with pulse animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: [0.4, 1, 0.4],
              scale: [0.98, 1, 0.98]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-6xl md:text-7xl font-bold tracking-tight"
          >
            <span className="text-white">&lt;Lucas</span>
            <span className="text-primary-light">/&gt;</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
