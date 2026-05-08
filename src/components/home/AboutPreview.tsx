'use client'

import { motion } from 'framer-motion'

const whatIDo = [
  {
    category: 'Research',
    skills: ['User Interviews', 'Market Analysis', 'Usability Testing'],
  },
  {
    category: 'UX/UI Design',
    skills: ['Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    category: 'Development',
    skills: ['HTML/CSS', 'React', 'Framer'],
  },
]

const skillTags = [
  'UX Design',
  'UI Design',
  'Graphic Design',
  'Video Editing',
  'Motion Graphic',
  'Product Design',
  'Wireframing',
  'Prototyping',
  'Design Systems',
  'User Research',
  'Branding',
  'Figma',
]

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 flex flex-col gap-20">
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
          <div className="w-3 h-3 rounded-full bg-[#37848a] shrink-0" />
          <h2
            className="text-[#1d1b20] text-3xl font-bold"
            style={{ fontFamily: 'Epilogue, sans-serif' }}
          >
            What I Do
          </h2>
        </div>

        {/* Description */}
        <p
          className="text-[#494551] text-base leading-relaxed max-w-2xl"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Full-stack designer crafting digital experiences that will make your product or service
          stand out in awesome ways. Seamlessly bridging the gap between design and development.
        </p>

        {/* Skill rows */}
        <div className="flex flex-col">
          {whatIDo.map((row, i) => (
            <motion.div
              key={row.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-6 py-2 border-b border-black/5"
            >
              <span
                className="text-[#1d1b20] text-2xl font-semibold w-48 shrink-0"
                style={{ fontFamily: 'Epilogue, sans-serif' }}
              >
                {row.category}
              </span>
              <div className="flex items-center gap-9 flex-wrap">
                {row.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[#494551] text-base font-medium"
                    style={{ fontFamily: 'Inter, sans-serif' }}
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
          <div className="w-3 h-3 rounded-full bg-[#c9a74d] shrink-0" />
          <h2
            className="text-[#1d1b20] text-3xl font-bold"
            style={{ fontFamily: 'Epilogue, sans-serif' }}
          >
            Skills
          </h2>
        </div>

        {/* Tag pills */}
        <div className="flex flex-wrap gap-3">
          {skillTags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="px-4 py-2 rounded-lg text-base border border-[#cecece] text-[#6e6e6e]"
              style={{
                backdropFilter: 'blur(7.5px)',
                background: 'rgba(205,193,160,0.2)',
                fontFamily: 'Inter, sans-serif',
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

