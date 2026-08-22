'use client'

import { motion } from 'framer-motion'

import { skillCategories, homeSkills } from '@/data/about'

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-12 py-24 flex flex-col gap-20">
      {/* What I Do */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-9"
      >
        {/* Heading */}
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-teal shrink-0" />
          <h2
            className="text-heading text-3xl font-bold"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            What I Do
          </h2>
        </div>

        {/* Description */}
        <p
          className="text-body text-base leading-relaxed max-w-2xl"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Full-stack designer crafting digital experiences that will make your product or service
          stand out in awesome ways. Seamlessly bridging the gap between design and development.
        </p>

        {/* Skill rows */}
        <div className="flex flex-col">
          {Object.entries(skillCategories).map(([category, skills], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-6 py-3 sm:py-2 border-b border-black/5"
            >
              <span
                className="text-heading text-xl sm:text-2xl font-semibold sm:w-48 shrink-0"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {category}
              </span>
              <div className="flex items-center gap-9 flex-wrap">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-body text-base font-medium"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-9"
      >
        {/* Heading */}
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-gold shrink-0" />
          <h2
            className="text-heading text-3xl font-bold"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Skills
          </h2>
        </div>

        {/* Tag pills */}
        <div className="flex flex-wrap gap-3">
          {homeSkills.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="px-4 py-2 rounded-lg text-base border border-tag-border text-text-tertiary"
              style={{
                backdropFilter: 'blur(7.5px)',
                background: 'var(--color-tag-bg)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

