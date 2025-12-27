// Optimized Framer Motion configuration
export const motionConfig = {
  // Reduce motion for users who prefer it
  reducedMotion: 'user',
}

// Optimized animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: 'easeOut' },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3, ease: 'easeOut' },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Viewport configuration for better performance
export const viewportConfig = {
  once: true,
  margin: '-50px',
  amount: 0.3,
}
