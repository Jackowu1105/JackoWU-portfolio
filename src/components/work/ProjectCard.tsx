'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
  variant?: 'featured' | 'compact'
}

// Category eyebrow — small label with an accent dot
function CategoryIcon({ tag }: { tag: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-text-tertiary">
      <span className="w-1 h-1 rounded-full bg-accent-gold" />
      {tag}
    </span>
  )
}

// Palette swatches — show the project's main colors as small dots,
// the most direct "design system" visual cue on the card.
function PaletteSwatches({ palette }: { palette: string[] }) {
  return (
    <div className="flex items-center gap-1">
      {palette.slice(0, 4).map((color, i) => (
        <span
          key={i}
          className="w-3 h-3 rounded-full ring-1 ring-black/5"
          style={{ backgroundColor: color }}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function ProjectCard({ project, index, variant = 'compact' }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, '0')

  if (variant === 'featured') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Link href={`/work/${project.slug}`} className="group block">
          <div className="glass-card overflow-hidden p-0 transition-all duration-300 hover:border-black/15 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
            {/* Thumbnail */}
            <div className="aspect-[16/9] overflow-hidden bg-bg-elevated">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-7">
              <div className="flex items-center justify-between mb-3">
                <CategoryIcon tag={project.tags[0]} />
                <span className="text-[11px] font-mono text-text-tertiary">{num}</span>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-2 group-hover:text-[#2C2622] transition-colors leading-tight">
                {project.title}
              </h3>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed line-clamp-3">
                {project.summary}
              </p>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] text-text-tertiary mb-4">
                <span className="inline-flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60">
                    <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  {project.client}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60">
                    <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  {project.timeline}
                </span>
              </div>

              {/* Tags + palette */}
              <div className="flex items-center justify-between gap-3 pt-4 border-t border-black/5">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] rounded-full bg-black/5 text-text-secondary border border-black/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <PaletteSwatches palette={project.palette} />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    )
  }

  // compact variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-48px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <div className="glass-card overflow-hidden p-0 transition-all duration-300 hover:border-black/15 hover:shadow-[0_6px_30px_rgba(0,0,0,0.05)]">
          {/* Thumbnail */}
          <div className="aspect-[16/10] overflow-hidden bg-bg-elevated">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="flex items-center justify-between mb-2">
              <CategoryIcon tag={project.tags[0]} />
              <span className="text-[10px] font-mono text-text-tertiary">{num}</span>
            </div>

            <h3 className="text-base font-semibold text-text-primary mb-1 group-hover:text-[#2C2622] transition-colors leading-snug">
              {project.title}
            </h3>
            <p className="text-[12px] text-text-tertiary mb-3">
              {project.client} · {project.timeline}
            </p>

            <div className="flex items-center justify-between gap-2 pt-3 border-t border-black/5">
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-1.5 py-0.5 text-[10px] rounded-full bg-black/5 text-text-tertiary border border-black/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <PaletteSwatches palette={project.palette} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}