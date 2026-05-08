'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Ripple {
  id: number
  x: number
  y: number
}

let nextId = 0

interface RippleEffectProps {
  color?: string
}

/**
 * Place inside any element with `relative overflow-hidden` to create
 * a click ripple effect. The ripple originates from the click position.
 */
export function RippleEffect({ color = 'rgba(255,255,255,0.5)' }: RippleEffectProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])

  const addRipple = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const button = e.currentTarget.parentElement
    if (!button) return
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = nextId++
    setRipples((prev) => [...prev.slice(-2), { id, x, y }])
  }, [])

  return (
    <div className="absolute inset-0" onClick={addRipple} aria-hidden="true">
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            initial={{ scale: 0, opacity: 0.45 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onAnimationComplete={() => {
              setRipples((prev) => prev.filter((rp) => rp.id !== r.id))
            }}
            className="absolute block rounded-full pointer-events-none"
            style={{
              left: r.x - 40,
              top: r.y - 40,
              width: 80,
              height: 80,
              background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
