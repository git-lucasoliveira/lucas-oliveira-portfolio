'use client'

import React from 'react'
import { MotionConfig } from 'framer-motion'

/**
 * Honours the operating system's "reduce motion" setting for every
 * framer-motion animation on the site. CSS-only animations are handled
 * by the prefers-reduced-motion block in globals.css.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
