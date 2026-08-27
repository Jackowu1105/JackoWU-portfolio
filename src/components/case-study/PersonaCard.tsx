'use client'

import { motion } from 'framer-motion'

interface PersonaCardProps {
  /** Small caption above the card, e.g. "UX RESEARCH · USER PERSONA" */
  label?: string
  name: string
  initials: string
  subtitle: string
  quote: string
  goals: string[]
  pains: string[]
}

/** Figma-style persona card — goals / pains as labeled chips. */
export function PersonaCard({
  label = 'UX RESEARCH · USER PERSONA',
  name,
  initials,
  subtitle,
  quote,
  goals,
  pains,
}: PersonaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto my-10"
    >
      {label && (
        <p className="text-center text-[10px] font-bold tracking-[0.16em] uppercase text-[#b8b2ae] mb-3">
          {label}
        </p>
      )}
      <div
        className="overflow-hidden rounded-2xl bg-white"
        style={{
          border: '1px solid rgba(0,0,0,0.06)',
          boxShadow: '0 16px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
        }}
      >
      {/* Top: avatar + identity + quote */}
      <div
        className="flex gap-5 p-6 sm:p-7"
        style={{
          background:
            'linear-gradient(135deg, rgba(55,132,138,0.06) 0%, rgba(201,167,77,0.08) 100%)',
        }}
      >
        <div
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shrink-0"
          style={{
            background: 'linear-gradient(135deg, #37848a, #0195e2)',
            boxShadow: '0 6px 16px rgba(55,132,138,0.35)',
          }}
        >
          <span
            className="text-white text-xl sm:text-2xl font-extrabold"
            style={{ fontFamily: 'var(--font-epilogue)' }}
          >
            {initials}
          </span>
        </div>
        <div className="min-w-0">
          <h4
            className="text-lg sm:text-xl font-extrabold text-[#1d1b20]"
            style={{ fontFamily: 'var(--font-epilogue)' }}
          >
            {name}
          </h4>
          <p className="text-[13px] text-[#8a8480] mt-0.5">{subtitle}</p>
          <p
            className="mt-2.5 text-[13px] leading-relaxed text-[#4a4a42] italic"
            style={{ borderLeft: '3px solid #c9a74d', paddingLeft: 12 }}
          >
            &ldquo;{quote}&rdquo;
          </p>
        </div>
      </div>

      {/* Bottom: goals / pains */}
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="p-6 sm:px-7 sm:py-5">
          <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#b8b2ae] mb-3">
            Goals
          </p>
          <div className="flex flex-wrap gap-1.5">
            {goals.map((g) => (
              <span
                key={g}
                className="inline-flex items-center gap-1.5 text-[12.5px] text-[#3d3833] rounded-lg px-2.5 py-1.5"
                style={{
                  background: '#faf7f4',
                  border: '1px solid rgba(0,0,0,0.07)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: '#4a9d7a' }}
                />
                {g}
              </span>
            ))}
          </div>
        </div>
        <div
          className="p-6 sm:px-7 sm:py-5"
          style={{
            borderLeft: '1px solid rgba(0,0,0,0.05)',
          }}
        >
          <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#b8b2ae] mb-3">
            Pains
          </p>
          <div className="flex flex-wrap gap-1.5">
            {pains.map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-1.5 text-[12.5px] text-[#3d3833] rounded-lg px-2.5 py-1.5"
                style={{
                  background: '#faf7f4',
                  border: '1px solid rgba(0,0,0,0.07)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: '#c98a6a' }}
                />
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
      </div>
    </motion.div>
  )
}
