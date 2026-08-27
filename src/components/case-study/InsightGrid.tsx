'use client'

import { motion } from 'framer-motion'

export interface InsightItem {
  title: string
  desc: string
  tone?: 'good' | 'bad' | 'neutral'
  badge?: string
}

interface InsightGridProps {
  label: string
  items: InsightItem[]
}

const toneDot: Record<string, string> = {
  good: '#4a9d7a',
  bad: '#c98a6a',
  neutral: '#b8b2ae',
}

/** Research insight / matrix grid — findings as labeled cards. */
export function InsightGrid({ label, items }: InsightGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="my-10"
    >
      <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#b8b2ae] mb-5 text-center">
        {label}
      </p>

      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: `repeat(${Math.min(items.length, 2)}, 1fr)`,
        }}
      >
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 * i }}
            whileHover={{ y: -2 }}
            className="rounded-xl p-4"
            style={{
              background: '#faf7f4',
              border: '1px solid rgba(0,0,0,0.07)',
            }}
          >
            <div className="flex items-start gap-2.5">
              <span
                className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                style={{ background: toneDot[item.tone || 'neutral'] }}
              />
              <div className="min-w-0">
                <p className="text-[13.5px] font-bold text-[#1a1410] leading-snug">
                  {item.title}
                </p>
                {item.badge && (
                  <span
                    className="inline-block mt-1 text-[9px] font-bold tracking-[0.1em] uppercase rounded-full px-2 py-0.5"
                    style={{
                      color: '#2c6a6f',
                      background: 'rgba(55,132,138,0.1)',
                    }}
                  >
                    {item.badge}
                  </span>
                )}
                <p className="text-[12px] text-[#8a8480] mt-1.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
