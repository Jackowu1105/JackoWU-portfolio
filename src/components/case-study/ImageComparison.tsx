'use client'

'use client'

import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

interface ImageComparisonProps {
  before: string
  after: string
  beforeLabel?: string
  afterLabel?: string
}

export function ImageComparison({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: ImageComparisonProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
      setPosition((x / rect.width) * 100)
    },
    []
  )

  const handleMouseDown = useCallback(() => setIsDragging(true), [])
  const handleMouseUp = useCallback(() => setIsDragging(false), [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) handleMove(e.clientX)
    },
    [isDragging, handleMove]
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleMove(e.touches[0].clientX)
    },
    [handleMove]
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, rotateX: 6, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ perspective: '1200px' }}
      className="my-12"
    >
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-xl glass-card select-none"
        style={{ aspectRatio: '16/10' }}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* After image (full width, underneath) */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 to-slate-700/30 flex items-center justify-center text-[#B8B2AE] text-sm">
          {after}
        </div>

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-amber-800/40 to-orange-700/30 flex items-center justify-center text-[#B8B2AE] text-sm"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span>{before}</span>
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white/40 shadow-lg"
          style={{ left: `${position}%` }}
        />

        {/* Drag handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center cursor-grab active:cursor-grabbing shadow-lg"
          style={{ left: `${position}%` }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M5 2v12M11 2v12" />
          </svg>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur text-xs text-white">
          {beforeLabel}
        </div>
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur text-xs text-white">
          {afterLabel}
        </div>
      </div>
    </motion.div>
  )
}
