'use client'

import { motion } from 'framer-motion'

const services = [
  {
    iconBg: 'rgba(162,202,205,0.5)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="26" height="3" rx="1.5" fill="#37848a" />
        <rect x="3" y="11" width="18" height="3" rx="1.5" fill="#37848a" opacity="0.6" />
        <rect x="3" y="17" width="22" height="3" rx="1.5" fill="#37848a" opacity="0.6" />
        <rect x="3" y="23" width="14" height="3" rx="1.5" fill="#37848a" opacity="0.4" />
      </svg>
    ),
    title: 'Graphic Design',
    description:
      'Translating business goals into user-centric product visions that resonate with your target audience and drive measurable results.',
  },
  {
    iconBg: 'rgba(255,223,147,0.5)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="26" height="20" rx="3" stroke="#c9a74d" strokeWidth="2" />
        <circle cx="16" cy="13" r="5" fill="#c9a74d" />
        <path d="M10 27h12" stroke="#c9a74d" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 23v4" stroke="#c9a74d" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'UI/UX Design',
    description:
      'Crafting intuitive user journeys and beautiful interfaces that bridge the gap between user needs and business objectives.',
  },
  {
    iconBg: 'rgba(162,202,205,0.5)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="11" height="11" rx="2" fill="#37848a" />
        <rect x="18" y="3" width="11" height="11" rx="2" fill="#37848a" opacity="0.5" />
        <rect x="3" y="18" width="11" height="11" rx="2" fill="#37848a" opacity="0.5" />
        <rect x="18" y="18" width="11" height="11" rx="2" fill="#37848a" />
      </svg>
    ),
    title: 'Design Systems',
    description:
      'Building scalable, accessible, and comprehensive component libraries that keep your product consistent and teams moving fast.',
  },
]

export function ProcessTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-12 py-24">
      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-[#37848a] text-sm font-semibold tracking-[0.2em] uppercase mb-4"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        EXPERTISE
      </motion.p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-[#1d1b20] text-4xl md:text-5xl font-bold tracking-tight mb-16"
        style={{ fontFamily: 'Epilogue, sans-serif' }}
      >
        Capabilities &amp; Services
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-5 sm:gap-6 rounded-[32px] p-6 sm:p-10"
            style={{
              background:
                'linear-gradient(134deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.3)',
            }}
          >
            {/* Icon */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: service.iconBg }}
            >
              {service.icon}
            </div>

            {/* Title */}
            <h3
              className="text-[#1d1b20] text-xl font-semibold"
              style={{ fontFamily: 'Epilogue, sans-serif' }}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              className="text-[#494551] text-base leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}