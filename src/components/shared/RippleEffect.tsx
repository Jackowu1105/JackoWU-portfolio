'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Ripple {
  id: number
  x: number
  y: number
}

let nextId = 0

export function RippleEffect() {
  const [ripples, setRipples] = useState<Ripple[]>([])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const id = nextId++
      setRipples((prev) => [...prev.slice(-2), { id, x: e.clientX, y: e.clientY }])
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9999 }} aria-hidden="true">
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            initial={{ scale: 0, opacity: 0.35 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onAnimationComplete={() => {
              setRipples((prev) => prev.filter((rp) => rp.id !== r.id))
            }}
            className="absolute block rounded-full"
            style={{
              left: r.x - 50,
              top: r.y - 50,
              width: 100,
              height: 100,
              background: 'radial-gradient(circle, rgba(55,132,138,0.25) 0%, transparent 70%)',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
