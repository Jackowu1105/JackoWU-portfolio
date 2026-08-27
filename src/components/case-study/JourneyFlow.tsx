'use client'

import { motion } from 'framer-motion'

export interface JourneyStep {
  title: string
  desc: string
  tag?: string
}

interface JourneyFlowProps {
  label: string
  steps: JourneyStep[]
}

/** Horizontal journey / timeline — numbered steps with a connecting line. */
export function JourneyFlow({ label, steps }: JourneyFlowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="my-10"
    >
      <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#b8b2ae] mb-6 text-center">
        {label}
      </p>

      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}
      >
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.07 * i }}
            className="relative rounded-xl p-4 text-center"
            style={{
              background: '#faf7f4',
              border: '1px solid rgba(0,0,0,0.07)',
            }}
          >
            {/* Step number */}
            <span
              className="w-7 h-7 rounded-full inline-flex items-center justify-center text-xs font-bold text-white mb-2.5"
              style={{
                background:
                  i < 2
                    ? 'linear-gradient(135deg, #37848a, #4fa8ad)'
                    : 'linear-gradient(135deg, #c9a74d, #d9bc6e)',
              }}
            >
              {i + 1}
            </span>
            <p className="text-[13px] font-bold text-[#1a1410] leading-snug">
              {s.title}
            </p>
            <p className="text-[11.5px] text-[#8a8480] mt-1.5 leading-relaxed">
              {s.desc}
            </p>
            {s.tag && (
              <span
                className="inline-block mt-2.5 text-[9px] font-bold tracking-[0.1em] uppercase rounded-full px-2.5 py-1"
                style={{
                  color: '#6b5c4c',
                  background: 'rgba(196,168,130,0.15)',
                }}
              >
                {s.tag}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
