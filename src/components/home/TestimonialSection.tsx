'use client'

import { motion } from 'framer-motion'

const milestones = [
  {
    quote:
      'Designed and vibe-coded a full logistics MVP — 16 pages, 73 components, ~31k lines across ~1,300 commits over five months, ~88% AI-authored under my direction. Shipped a working product without an engineering team.',
    author: 'FUNDel Logistics Portal',
    role: 'Designer & Builder',
    company: 'AIFT × FUNDel · 2026',
  },
  {
    quote:
      'Built a 42-component cross-platform design system shared across iOS and Android for 50+ IoT devices. Cut device setup from 7 steps to 3 by restructuring the IA around rooms instead of device type.',
    author: 'MOMAX Smart App Redesign',
    role: 'Lead UI/UX Designer',
    company: 'MOMAX · 2021',
  },
]

export function TestimonialSection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background orbs */}
      <div
        className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(55,132,138,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,167,77,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {milestones.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col gap-5 sm:gap-6 rounded-[32px] p-6 sm:p-10"
              style={{
                background:
                  'var(--glass-gradient-light)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.3)',
              }}
            >
              {/* Gold opening quote */}
              <span
                className="text-gold font-bold select-none leading-none"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '72px',
                  lineHeight: '0.75',
                }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p
                className="text-heading text-lg leading-relaxed flex-1"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-black/5">
                {/* Achievement badge */}
                <div
                  className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #37848a 0%, #c9a74d 100%)',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-heading font-semibold text-sm"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {t.author}
                  </p>
                  <p
                    className="text-body text-sm"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
