'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { featuredProjects } from '@/data/projects'
import { StackingProjectCard } from './StackingProjectCard'

export function FeaturedWork() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-12 py-24">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex items-center gap-3 mb-16"
      >
        {/* Gold dot bullet */}
        <span className="w-3 h-3 rounded-full bg-gold flex-shrink-0" />
        <h2
          className="text-[32px] font-bold text-heading"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Selected Works
        </h2>
      </motion.div>

      {/* Stacking cards — sticky scroll effect */}
      <div className="flex flex-col gap-0 pb-[40vh]">
        {featuredProjects.map((project, i) => (
          <StackingProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      {/* View all link — pulled up with negative margin to sit right below the last card (overlapping the pb-[40vh]) */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex justify-center"
        style={{ marginTop: 'calc(-40vh + 36px)' }}
      >
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-heading text-sm font-medium transition-colors"
        >
          View all projects
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </Link>
      </motion.div>
    </section>
  )
}
