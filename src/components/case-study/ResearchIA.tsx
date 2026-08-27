'use client'

import { motion } from 'framer-motion'

export interface IAChild {
  title: string
  desc: string
  badge?: string
}

interface ResearchIAProps {
  label: string
  root: string
  children: IAChild[]
}

/** Interactive information-architecture tree — root node + hoverable children. */
export function ResearchIA({ label, root, children }: ResearchIAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto my-10 rounded-2xl bg-white p-6 sm:p-8"
      style={{
        border: '1px solid rgba(0,0,0,0.06)',
        boxShadow: '0 16px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
      }}
    >
      <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#b8b2ae] mb-5">
        {label}
      </p>

      {/* Root */}
      <div className="flex justify-center">
        <span
          className="inline-block rounded-xl px-6 py-2.5 text-sm font-bold text-white"
          style={{ background: '#1c1814' }}
        >
          {root}
        </span>
      </div>

      {/* Connector */}
      <div className="flex justify-center h-9">
        <div
          className="w-0.5"
          style={{ background: 'rgba(201,167,77,0.55)' }}
        />
      </div>

      {/* Children */}
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: `repeat(${children.length}, 1fr)` }}
      >
        {children.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 * i }}
            whileHover={{ y: -3 }}
            className="rounded-xl px-3 py-3.5 text-center"
            style={{
              background: '#faf7f4',
              border: '1px solid rgba(0,0,0,0.07)',
            }}
          >
            <p className="text-[13.5px] font-bold text-[#1a1410]">{c.title}</p>
            <p className="text-[11px] text-[#8a8480] mt-1 leading-snug">
              {c.desc}
            </p>
            {c.badge && (
              <span
                className="inline-block mt-2 text-[9px] font-bold tracking-[0.1em] uppercase rounded-full px-2.5 py-1"
                style={{
                  color: '#2c6a6f',
                  background: 'rgba(55,132,138,0.1)',
                }}
              >
                {c.badge}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
