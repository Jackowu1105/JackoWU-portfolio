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
  const bgNormal = 'linear-gradient(134deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 100%)'
  const bgOverlap = 'linear-gradient(134deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.15) 100%)'

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
                <p className="text-xs font-semibold text-[#c9a74d] tracking-[1.2px] uppercase">
                  {project.tags[0] ?? 'UX/UI DESIGN'}
                </p>

                {/* Title */}
                <h3
                  className="text-[22px] lg:text-[28px] font-semibold text-[#1d1b20] leading-[1.5]"
                  style={{ fontFamily: 'Epilogue, sans-serif' }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm lg:text-base text-[#494551] leading-relaxed line-clamp-4">
                  {project.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mt-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1 rounded-full bg-[rgba(205,193,160,0.2)] border border-[#cecece] text-sm text-[#b2b1ae]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Desktop CTA button */}
              <Link
                href={`/work/${project.slug}`}
                className="hidden lg:inline-flex items-center gap-1.5 px-[15px] py-[12px] rounded-xl bg-[#1c1814] text-white text-sm font-medium w-fit shadow-sm hover:opacity-80 transition-opacity relative overflow-hidden"
                style={{ fontFamily: 'Epilogue, sans-serif' }}
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

              {/* Stats — first 2 metrics */}
              {project.metrics.length > 0 && (
                <div className="flex gap-6">
                  {project.metrics.slice(0, 2).map((metric) => (
                    <div key={metric.label} className="flex flex-col gap-2 flex-1">
                      <p className="text-sm lg:text-base text-[#494551] leading-[1.5]">{metric.label}</p>
                      <p
                        className="text-[28px] lg:text-[40px] font-semibold text-[#1d1b20] leading-[1.05]"
                        style={{ fontFamily: 'Epilogue, sans-serif' }}
                      >
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Mobile CTA */}
              <Link
                href={`/work/${project.slug}`}
                className="lg:hidden inline-flex items-center justify-center gap-1.5 px-[15px] py-[12px] rounded-xl bg-[#1c1814] text-white text-sm font-medium shadow-sm hover:opacity-80 transition-opacity relative overflow-hidden"
                style={{ fontFamily: 'Epilogue, sans-serif' }}
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
