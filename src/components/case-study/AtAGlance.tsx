'use client'

import { motion } from 'framer-motion'

interface AtAGlanceProps {
  role: string
  timeline: string
  client: string
  tools: string[]
  highlights: string[]
}

/** At-a-Glance summary card — key facts + outcome mini-cards, shown right after the hero. */
export function AtAGlance({ role, timeline, client, tools, highlights }: AtAGlanceProps) {
  const facts = [
    { k: 'Role', v: role, sub: '' },
    { k: 'Timeline', v: timeline, sub: '' },
    { k: 'Client', v: client, sub: '' },
    { k: 'Tools', v: tools.join(' · '), sub: '' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className="mb-10 rounded-2xl bg-white p-6 sm:p-7"
      style={{
        border: '1px solid rgba(0,0,0,0.06)',
        boxShadow: '0 12px 32px rgba(0,0,0,0.06)',
      }}
    >
      <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#b8b2ae] mb-5">
        At a Glance
      </p>

      {/* Facts grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
        {facts.map((f) => (
          <div key={f.k}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#b8b2ae] mb-1.5">
              {f.k}
            </p>
            <p className="text-[13px] font-semibold text-[#1d1b20] leading-snug">
              {f.v}
            </p>
          </div>
        ))}
      </div>

      {/* Highlights as mini outcome cards */}
      {highlights.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-black/5">
          {highlights.slice(0, 3).map((h) => (
            <div
              key={h}
              className="rounded-xl px-3.5 py-3"
              style={{
                background: '#faf7f4',
                border: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              <p className="text-[12px] leading-relaxed text-[#494551]">{h}</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}
