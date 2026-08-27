'use client'

import { motion } from 'framer-motion'

interface StickyQuoteProps {
  /** Small caption above the note, e.g. "UX RESEARCH · VERBATIM USER VOICE" */
  label?: string
  quote: string
  source: string
}

/** Yellow sticky-note research quote — verbatim user voice. */
export function StickyQuote({ label = 'UX RESEARCH · VERBATIM USER VOICE', quote, source }: StickyQuoteProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: -1.2 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ rotate: 0, y: -3, scale: 1.01 }}
      className="max-w-xl mx-auto my-10"
    >
      {label && (
        <p className="text-center text-[10px] font-bold tracking-[0.16em] uppercase text-[#b8b2ae] mb-4">
          {label}
        </p>
      )}
      {/* tape */}
      <div
        className="absolute -top-3.5 left-1/2 -translate-x-1/2 rotate-2 w-24 h-6"
        style={{
          background: 'rgba(255,255,255,0.5)',
          borderLeft: '1px solid rgba(0,0,0,0.04)',
          borderRight: '1px solid rgba(0,0,0,0.04)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        }}
      />
      <div
        className="rounded-[4px] px-8 py-7 relative"
        style={{
          background: '#fff8dc',
          boxShadow: '0 12px 28px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.06)',
        }}
      >
        <p
          className="text-[26px] leading-[1.35] text-[#3d3a2e]"
          style={{ fontFamily: 'var(--font-caveat)' }}
        >
          &ldquo;{quote}&rdquo;
        </p>
        <p className="mt-3.5 text-xs font-semibold text-[#8a8470] tracking-wide">
          {source}
        </p>
      </div>
    </motion.div>
  )
}
