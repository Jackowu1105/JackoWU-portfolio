'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ProjectPlaceholder } from '@/components/shared/ProjectPlaceholder'
import type { Project } from '@/data/projects'

interface FeaturedProjectCardProps {
  project: Project
  index: number
}

export function FeaturedProjectCard({ project, index }: FeaturedProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, rotateX: 6, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-48px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={{ perspective: '1200px' }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <div className="glass-card overflow-hidden p-0 transition-colors duration-250 hover:border-black/15">
          {/* Thumbnail */}
          <div className="aspect-[16/9] overflow-hidden">
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
              />
            ) : (
              <ProjectPlaceholder
                title={project.title}
                tags={project.tags}
                className="w-full h-full"
              />
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-medium text-[#B8B2AE] uppercase tracking-wide">
                {project.client}
              </span>
              <span className="w-1 h-1 rounded-full bg-black/10" />
              <span className="text-xs text-[#B8B2AE]">{project.timeline}</span>
            </div>

            <h3 className="text-xl font-semibold text-[#1C1814] mb-2 group-hover:text-[#2C2622] transition-colors">
              {project.title}
            </h3>

            <p className="text-sm text-[#8A8480] line-clamp-2 leading-relaxed">
              {project.summary}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 text-xs rounded-full bg-black/5 text-[#8A8480] border border-black/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}