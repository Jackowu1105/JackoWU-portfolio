'use client'

import { motion } from 'framer-motion'

// TODO: Replace with Jacko's actual experience data
const experiences = [
  {
    title: 'Senior UX/UI Designer',
    company: 'Freelance',
    period: '2023 – Present',
  },
  {
    title: 'UX/UI Designer',
    company: 'Geonode',
    period: 'Jan 2020 – Jan 2023',
  },
  {
    title: 'UI Designer',
    company: 'Creative Studio',
    period: '2018 – 2020',
  },
]

export function ExperienceSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-12 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-9"
      >
        {/* Heading */}
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#37848a] shrink-0" />
          <h2
            className="text-[#1d1b20] text-3xl font-bold"
            style={{ fontFamily: 'Epilogue, sans-serif' }}
          >
            Experience
          </h2>
        </div>

        {/* Experience rows */}
        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-6 py-2 border-b border-black/5"
            >
              {/* Job title */}
              <div className="flex-1 min-w-0">
                <span
                  className="text-[#1d1b20] text-2xl font-semibold"
                  style={{ fontFamily: 'Epilogue, sans-serif' }}
                >
                  {exp.title}
                </span>
              </div>

              {/* Company + Date (aligned right) */}
              <div
                className="flex flex-col items-end gap-2 shrink-0"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="text-[#494551] text-base font-medium">{exp.company}</span>
                <span className="text-[#494551] text-base font-medium">{exp.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
