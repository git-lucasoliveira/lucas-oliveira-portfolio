'use client'

import React, { memo } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  id: string
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-16"
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-1 bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent [-webkit-text-fill-color:transparent]" style={{ lineHeight: '1.3' }}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-base text-slate-400 dark:text-slate-400 max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}

export default memo(Section)
