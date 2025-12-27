'use client'

import React, { memo } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ 
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
        contain: 'layout style paint',
      }}
      className={`card-glass-fake h-full ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default memo(Card, (prevProps, nextProps) => {
  // Deep comparison to prevent unnecessary re-renders
  return (
    prevProps.className === nextProps.className &&
    prevProps.hover === nextProps.hover &&
    prevProps.children === nextProps.children
  )
})
