'use client'

import { motion } from 'framer-motion'

interface CaseStudyImageProps {
  label: string
  description?: string
  aspectRatio?: string
  badge?: string
}

export function CaseStudyImage({
  label,
  description,
  aspectRatio = '16/10',
  badge,
}: CaseStudyImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="my-8"
    >
      <div
        className="relative overflow-hidden rounded-xl border border-dashed border-[#D4C5B0]/40 bg-[#FAF7F5]"
        style={{ aspectRatio }}
      >
        {/* Decorative grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #1C1814 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Centered content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
          {/* Icon */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D4C5B0"
            strokeWidth="1.5"
            className="opacity-60"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>

          <span className="text-sm font-medium text-[#B8B2AE] tracking-wide">
            {label}
          </span>

          {description && (
            <span className="text-xs text-[#B8B2AE]/60 text-center max-w-[280px] leading-relaxed">
              {description}
            </span>
          )}
        </div>

        {/* Badge */}
        {badge && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#1C1814]/5 border border-[#D4C5B0]/20 text-[10px] font-medium text-[#8A8480] tracking-wide uppercase">
            {badge}
          </div>
        )}
      </div>
    </motion.div>
  )
}
