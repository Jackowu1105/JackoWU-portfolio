'use client'

import { motion } from 'framer-motion'

export function ScrollIndicator() {
  return (
    <div className="flex justify-center py-3 opacity-60">
      <div className="flex flex-col items-center gap-2">
        {/* "SCROLL" label */}
        <span
          className="text-[#494551] text-[12px] font-semibold tracking-[1.2px] uppercase"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          SCROLL
        </span>

        {/* Bouncing chevron */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="#494551"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
