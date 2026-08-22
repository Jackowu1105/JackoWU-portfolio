'use client'

import { motion } from 'framer-motion'
import { ProjectPlaceholder } from '@/components/shared/ProjectPlaceholder'
import type { Project } from '@/data/projects'

export function CaseStudyHero({ project }: { project: Project }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-gold/25 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-12 pt-8 pb-16">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 8, filter: 'blur(3px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8"
        >
          <a
            href="/work"
            className="text-sm text-text-tertiary hover:text-text-primary transition-colors inline-flex items-center gap-1"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 4L6 8l4 4" />
            </svg>
            All projects
          </a>
        </motion.div>

        {/* Title & meta — perspective entrance */}
        <motion.div
          initial={{ opacity: 0, y: 16, rotateX: 6, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ perspective: '1200px' }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6 leading-tight">
            {project.title}
          </h1>

          {/* Meta grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Role', value: project.role },
              { label: 'Client', value: project.client },
              { label: 'Timeline', value: project.timeline },
              { label: 'Tools', value: project.tools.join(', ') },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-text-tertiary mb-1 uppercase tracking-wide">
                  {item.label}
                </p>
                <p className="text-sm text-text-secondary">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Tags + palette */}
          <div className="flex flex-wrap items-center gap-4 gap-y-3">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-black/5 text-text-secondary border border-black/5"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.palette?.length > 0 && (
              <div className="flex items-center gap-2 pl-4 border-l border-black/10">
                <span className="text-[10px] font-medium uppercase tracking-wider text-text-tertiary">
                  Palette
                </span>
                <div className="flex items-center gap-1.5">
                  {project.palette.slice(0, 5).map((color, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full ring-1 ring-black/10 transition-transform hover:scale-110"
                      style={{ backgroundColor: color }}
                      title={color}
                      aria-label={`Palette color ${color}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Hero image — perspective entrance */}
      <motion.div
        initial={{ opacity: 0, y: 16, rotateX: 6, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ perspective: '1200px' }}
        className="mx-auto max-w-6xl px-6 md:px-12"
      >
        <div className="glass-card overflow-hidden p-0 rounded-2xl">
          {project.heroImage ? (
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-[440px] object-cover block"
            />
          ) : (
            <ProjectPlaceholder
              title={project.title}
              tags={project.tags}
              className="w-full h-[440px]"
            />
          )}
        </div>
      </motion.div>
    </section>
  )
}