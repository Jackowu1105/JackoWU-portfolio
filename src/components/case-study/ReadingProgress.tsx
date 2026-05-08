'use client'

import { motion, useScroll } from 'framer-motion'

export function ReadingProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: '#C4A882',
        boxShadow: '0 0 8px rgba(168,152,128,0.4)',
      }}
    />
  )
}
