'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Project } from '@/data/projects'

export function NextProject({ project }: { project: Project | null }) {
  if (!project) return null

  return (
    <section className="mx-auto max-w-6xl px-6 md:px-12 py-24 border-t border-black/5">
      <motion.p
        initial={{ opacity: 0, y: 8, filter: 'blur(3px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-xs text-[#B8B2AE] mb-3 uppercase tracking-wide"
      >
        Next project
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12, rotateX: 6, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ perspective: '1200px' }}
      >
        <Link
          href={`/work/${project.slug}`}
          className="group flex items-center justify-between glass-card p-6 hover:border-black/15 transition-colors"
        >
          <div>
            <p className="text-xs text-[#B8B2AE] mb-1">{project.client}</p>
            <h3 className="text-xl font-semibold text-[#1C1814] group-hover:text-[#2C2622] transition-colors">
              {project.title}
            </h3>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#B8B2AE] group-hover:text-[#1C1814] transition-colors shrink-0"
          >
            <path d="M7 4l6 6-6 6" />
          </svg>
        </Link>
      </motion.div>
    </section>
  )
}