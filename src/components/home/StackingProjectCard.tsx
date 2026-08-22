'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ProjectPlaceholder } from '@/components/shared/ProjectPlaceholder'
import { RippleEffect } from '@/components/shared/RippleEffect'
import type { Project } from '@/data/projects'

interface StackingProjectCardProps {
  project: Project
  index: number
}

export function StackingProjectCard({ project, index }: StackingProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  // 每張卡片用 sticky，top 值稍微錯開製造疊起效果
  const stickyTop = 80 + index * 20
  const [isOverlapping, setIsOverlapping] = useState(false)

  // 監測卡片是否已卡到 sticky 位置（= 與其他卡片重疊中）
  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const check = () => {
      const rect = el.getBoundingClientRect()
      // 卡在 sticky 處或已往上滑但仍可見，都算重疊中
      setIsOverlapping(rect.top <= stickyTop + 10 && rect.top > -rect.height * 0.5)
    }

    window.addEventListener('scroll', check, { passive: true })
    check()

    return () => window.removeEventListener('scroll', check)
  }, [stickyTop])

  // 正常用輕透玻璃，重疊時加深避免內容穿透
  const bgNormal = 'var(--glass-gradient-light)'
  const bgOverlap = 'var(--glass-gradient-overlap)'

  return (
    <div
      ref={cardRef}
      style={{
        position: 'sticky',
        top: `${stickyTop}px`,
        zIndex: index + 1,
      }}
    >
      <div
        className="w-full rounded-[32px] border border-white/30 overflow-hidden"
        style={{
          background: isOverlapping ? bgOverlap : bgNormal,
          backdropFilter: isOverlapping ? 'blur(48px)' : 'blur(10px)',
          WebkitBackdropFilter: isOverlapping ? 'blur(48px)' : 'blur(10px)',
          transition: 'background 0.6s cubic-bezier(0.25, 0.1, 0.25, 1), backdrop-filter 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
        }}
      >
        <div className="p-5 sm:p-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start">

            {/* Left column — text */}
            <div className="flex-1 flex flex-col gap-6 min-w-0">
              <div className="flex flex-col gap-3">
                {/* Category */}
                <p className="text-xs font-semibold text-gold tracking-[1.2px] uppercase">
                  {project.tags[0] ?? 'UX/UI DESIGN'}
                </p>

                {/* Title */}
                <h3
                  className="text-[22px] lg:text-[28px] font-semibold text-heading leading-[1.5]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm lg:text-base text-body leading-relaxed line-clamp-4">
                  {project.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mt-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1 rounded-full bg-tag-bg border border-tag-border text-sm text-text-tertiary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Desktop CTA button */}
              <Link
                href={`/work/${project.slug}`}
                className="hidden lg:inline-flex items-center gap-1.5 px-[15px] py-[12px] rounded-xl bg-dark-bg text-white text-sm font-medium w-fit shadow-sm hover:opacity-80 transition-opacity relative overflow-hidden"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <RippleEffect />
                View Case Study
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>

            {/* Right column — image + stats */}
            <div className="flex-1 flex flex-col gap-6 min-w-0">
              {/* Project image */}
              <div className="aspect-video rounded-2xl overflow-hidden">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ProjectPlaceholder
                    title={project.title}
                    tags={project.tags}
                    className="w-full h-full"
                  />
                )}
              </div>

              {/* Highlights — 誠實質化重點（取代假數字） */}
              {project.highlights.length > 0 && (
                <ul className="flex flex-col gap-3">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"
                      />
                      <p className="text-sm lg:text-[15px] text-body leading-[1.5]">
                        {highlight}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              {/* Mobile CTA */}
              <Link
                href={`/work/${project.slug}`}
                className="lg:hidden inline-flex items-center justify-center gap-1.5 px-[15px] py-[12px] rounded-xl bg-dark-bg text-white text-sm font-medium shadow-sm hover:opacity-80 transition-opacity relative overflow-hidden"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <RippleEffect />
                View Case Study
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
