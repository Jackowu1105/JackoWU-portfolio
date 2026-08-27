'use client'

import { motion } from 'framer-motion'

export interface ResearchStage {
  /** Double Diamond phase number (1–4) */
  phase: 1 | 2 | 3 | 4
  /** Short phase title, e.g. "Discover" */
  title: string
  /** One-line description of what happened in this phase */
  summary: string
  /** The real artifact produced — e.g. "User interviews", "IA map", "Persona card" */
  artifact: string
  /** Optional path to an artifact image (shown below the stage) */
  image?: string
  /** Optional caption for the artifact image */
  caption?: string
}

const phaseMeta: Record<number, { label: string; ring: string }> = {
  1: { label: 'Discover', ring: 'rgba(162,202,205,0.55)' },
  2: { label: 'Define', ring: 'rgba(162,202,205,0.85)' },
  3: { label: 'Develop', ring: 'rgba(201,167,77,0.65)' },
  4: { label: 'Deliver', ring: 'rgba(201,167,77,0.95)' },
}

export function ResearchProcess({ stages }: { stages: ResearchStage[] }) {
  return (
    <div className="my-10">
      {/* Section label */}
      <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B8B2AE] mb-3">
        UX Research · Double Diamond
      </p>

      {/* Phase flow bar — two diverging/converging diamonds rendered as a simple timeline */}
      <div className="relative mb-8 hidden md:block">
        {/* line runs through the dot centers (dots are 40px tall → center at 20px) */}
        <div className="absolute left-0 right-0 top-5 h-px bg-gradient-to-r from-[#A2CACD]/40 via-[#C9A74D]/40 to-[#C9A74D]/70" />
        <div className="relative flex justify-between">
          {stages.map((s) => (
            <div
              key={s.phase}
              className="flex flex-col items-center gap-2 w-1/4"
            >
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-[#1C1814]"
                style={{ background: phaseMeta[s.phase].ring }}
              >
                {s.phase}
              </span>
              <span className="text-xs font-medium tracking-wide text-[#5A554F] uppercase">
                {phaseMeta[s.phase].label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stage cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {stages.map((s, i) => (
          <motion.div
            key={s.phase}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-[#D4C5B0]/20 bg-[#FAF7F5] p-5"
          >
            <div className="flex items-center gap-3 mb-2">
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold text-[#1C1814] flex-shrink-0"
                style={{ background: phaseMeta[s.phase].ring }}
              >
                {s.phase}
              </span>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#B8B2AE]">
                  {phaseMeta[s.phase].label}
                </p>
                <h4 className="text-base font-semibold text-[#1A1410] leading-tight">
                  {s.title}
                </h4>
              </div>
            </div>
            <p className="text-sm text-[#5A554F] leading-relaxed mb-3">
              {s.summary}
            </p>
            <span className="inline-block text-[10px] font-medium text-[#8A8480] px-2.5 py-1 rounded-md border border-[#D4C5B0]/30 bg-white/40">
              Artifact · {s.artifact}
            </span>
            {s.image && (
              <div className="mt-4">
                <img
                  src={s.image}
                  alt={s.caption || s.artifact}
                  loading="lazy"
                  className="w-full rounded-xl border border-[#D4C5B0]/25 bg-[#FAF7F5]"
                />
                {s.caption && (
                  <p className="mt-2 text-xs text-[#8A8480] leading-relaxed">
                    {s.caption}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
