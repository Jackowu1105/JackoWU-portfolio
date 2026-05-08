'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Jacko has a rare ability to balance deep strategic thinking with stunning visual execution. He transformed our complex product into an experience our users love.',
    author: 'Sarah Jenkins',
    role: 'VP of Product',
    company: 'FinTech Innovators',
  },
  {
    quote:
      'Working with Jacko was a game-changer for our team. His attention to detail and deep understanding of UX principles resulted in a product our customers can\'t stop praising.',
    author: 'Michael Chen',
    role: 'Head of Design',
    company: 'TechVision Labs',
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

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col gap-6 rounded-[32px] p-10"
              style={{
                background:
                  'linear-gradient(134deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.3)',
              }}
            >
              {/* Gold opening quote */}
              <span
                className="text-[#c9a74d] font-bold select-none leading-none"
                style={{
                  fontFamily: 'Epilogue, sans-serif',
                  fontSize: '72px',
                  lineHeight: '0.75',
                }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p
                className="text-[#1d1b20] text-lg leading-relaxed flex-1"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-black/5">
                {/* Avatar placeholder */}
                <div
                  className="w-10 h-10 rounded-full shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #37848a 0%, #c9a74d 100%)',
                  }}
                />
                <div>
                  <p
                    className="text-[#1d1b20] font-semibold text-sm"
                    style={{ fontFamily: 'Epilogue, sans-serif' }}
                  >
                    {t.author}
                  </p>
                  <p
                    className="text-[#494551] text-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}
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
