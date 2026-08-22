'use client'

import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

interface ImageComparisonProps {
  /** Real image paths for the before / after comparison */
  beforeSrc: string
  afterSrc: string
  beforeLabel?: string
  afterLabel?: string
  /** Aspect ratio of the comparison frame */
  aspectRatio?: string
  alt?: string
}

// Before / after slider — ideal for showing a redesign's before / after screenshots.
export function ImageComparison({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Before',
  afterLabel = 'After',
  aspectRatio = '16/10',
  alt = '',
}: ImageComparisonProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

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
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ perspective: '1200px' }}
      className="my-12"
    >
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-xl glass-card select-none"
        style={{ aspectRatio }}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* After image (bottom layer, fully visible) */}
        <img
          src={afterSrc}
          alt={`${alt} ${afterLabel}`}
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain bg-[#FAF7F5]"
        />
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#1C1814]/70 text-[10px] font-medium text-white tracking-wide uppercase backdrop-blur">
          {afterLabel}
        </div>

        {/* Before image (top layer, clipped via clipPath) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={beforeSrc}
            alt={`${alt} ${beforeLabel}`}
            draggable={false}
            className="absolute inset-0 w-full h-full object-contain bg-[#FAF7F5]"
          />
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#1C1814]/70 text-[10px] font-medium text-white tracking-wide uppercase backdrop-blur">
            {beforeLabel}
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white/50 shadow-lg pointer-events-none"
          style={{ left: `${position}%` }}
        />

        {/* Drag handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/25 backdrop-blur border border-white/40 flex items-center justify-center cursor-grab active:cursor-grabbing shadow-lg pointer-events-none"
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
      </div>
    </motion.div>
  )
}