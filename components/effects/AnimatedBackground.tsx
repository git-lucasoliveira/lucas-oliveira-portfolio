'use client'

import { memo } from 'react'

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div 
        className="absolute top-0 -left-4 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/5 rounded-full filter blur-xl"
        style={{
          mixBlendMode: 'multiply',
          animation: 'blob 20s infinite',
        }}
      />
      <div 
        className="absolute top-0 -right-4 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/5 rounded-full filter blur-xl"
        style={{
          mixBlendMode: 'multiply',
          animation: 'blob 20s infinite 2s',
        }}
      />
      <div 
        className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full filter blur-xl"
        style={{
          mixBlendMode: 'multiply',
          animation: 'blob 20s infinite 4s',
        }}
      />
    </div>
  )
}

export default memo(AnimatedBackground)
