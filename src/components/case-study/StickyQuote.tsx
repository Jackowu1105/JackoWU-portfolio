'use client'

import { motion } from 'framer-motion'

interface StickyQuoteProps {
  /** Small caption above the note, e.g. "UX RESEARCH · VERBATIM USER VOICE" */
  label?: string
  quote: string
  source: string
}

/** Yellow sticky-note research quote — verbatim user voice. */
export function StickyQuote({
  label = 'UX RESEARCH · VERBATIM USER VOICE',
  quote,
  source,
}: StickyQuoteProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto my-12"
    >
      {label && (
        <p className="text-center text-[10px] font-bold tracking-[0.16em] uppercase text-[#b8b2ae] mb-4">
          {label}
        </p>
      )}

      {/* Sticky note wrapper — relative so the tape anchors to the note's top edge */}
      <div className="relative mt-5">
        {/* Tape — straddles the top edge of the note (half above, half on) */}
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-7 z-10"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.35))',
            borderLeft: '1px solid rgba(0,0,0,0.05)',
            borderRight: '1px solid rgba(0,0,0,0.05)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
            transform: 'translateX(-50%) rotate(-2deg)',
            clipPath:
              'polygon(2% 0, 98% 0, 100% 100%, 0 100%)',
          }}
        />

        {/* Note body — classic sticky yellow, slight tilt */}
        <motion.div
          whileHover={{ rotate: 0, y: -3, scale: 1.01 }}
          className="rounded-sm px-8 py-7 relative"
          style={{
            background:
              'linear-gradient(180deg, #FFF6BF 0%, #FFEF9E 100%)',
            boxShadow:
              '0 14px 30px rgba(0,0,0,0.10), 0 3px 8px rgba(0,0,0,0.05), inset 0 -6px 14px rgba(0,0,0,0.03)',
            transform: 'rotate(-0.8deg)',
          }}
        >
          {/* Slight paper curl at the bottom corner */}
          <div
            className="absolute bottom-0 right-0 w-10 h-6"
            style={{
              background:
                'linear-gradient(315deg, rgba(0,0,0,0.06) 0%, transparent 60%)',
              borderBottomRightRadius: '3px',
            }}
          />
          <p
            className="text-[26px] leading-[1.35] text-[#5A5424]"
            style={{ fontFamily: 'var(--font-caveat)' }}
          >
            &ldquo;{quote}&rdquo;
          </p>
          <p className="mt-3.5 text-xs font-semibold text-[#8a7f3f] tracking-wide">
            {source}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
