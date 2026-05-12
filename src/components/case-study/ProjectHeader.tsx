'use client'

import { motion } from 'framer-motion'

interface ProjectHeaderProps {
  overview: string
  challenge: string
  role: string
  team: string
  duration?: string
  tools?: string[]
}

export function ProjectHeader({
  overview,
  challenge,
  role,
  team,
  duration,
  tools,
}: ProjectHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="my-6"
    >
      {/* Overview */}
      <p className="text-[#8B8580] leading-relaxed text-lg mb-8">
        {overview}
      </p>

      {/* Info grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="rounded-xl border border-[#D4C5B0]/20 bg-[#FAF7F5] p-5">
          <span className="text-[10px] font-semibold tracking-[1.2px] uppercase text-[#B8B2AE] block mb-1.5">
            The Challenge
          </span>
          <p className="text-sm text-[#1C1814] leading-relaxed">
            {challenge}
          </p>
        </div>

        <div className="rounded-xl border border-[#D4C5B0]/20 bg-[#FAF7F5] p-5">
          <span className="text-[10px] font-semibold tracking-[1.2px] uppercase text-[#B8B2AE] block mb-1.5">
            My Role
          </span>
          <p className="text-sm text-[#1C1814] leading-relaxed">
            {role}
          </p>
          {team && (
            <>
              <span className="text-[10px] font-semibold tracking-[1.2px] uppercase text-[#B8B2AE] block mt-4 mb-1.5">
                Team
              </span>
              <p className="text-sm text-[#1C1814] leading-relaxed">
                {team}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Meta row */}
      {(duration || tools) && (
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 px-5 py-3 rounded-xl border border-[#D4C5B0]/20 bg-[#FAF7F5]">
          {duration && (
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#B8B2AE" strokeWidth="1.5">
                <circle cx="7" cy="7" r="6" />
                <path d="M7 4v3.5L9.5 9" />
              </svg>
              <span className="text-xs text-[#8A8480]">{duration}</span>
            </div>
          )}
          {tools && tools.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#B8B2AE" strokeWidth="1.5">
                <path d="M4 1v12M10 1v12M1 4h12M1 10h12" />
              </svg>
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="text-[10px] font-medium text-[#8A8480] px-2 py-0.5 rounded-md border border-[#D4C5B0]/20"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </motion.div>
  )
}
