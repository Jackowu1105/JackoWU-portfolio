'use client'

import { useMemo, useState } from 'react'
import type { Project } from '@/data/projects'
import { ProjectCard } from '@/components/work/ProjectCard'

type Category = 'all' | 'ux' | 'graphic' | 'motion'

interface WorkGalleryProps {
  projects: Project[]
}

// Work page 主體：分類 tabs + 分頁載入。
// 分類 tabs 將 UX projects / graphic design / motion 分開展示；
// 「Show more」分批載入令首屏 DOM 唔會一次過有太多圖（對應 AI 工具 10 圖上限）。
export function WorkGallery({ projects }: WorkGalleryProps) {
  const [category, setCategory] = useState<Category>('all')
  // 初始顯示 3 個 compact 卡：6 featured + 3 = 9 張 project 圖（連 logo 共 10），
  // 啱啱好喺多數 AI 視覺 model 嘅 10 圖上限之內
  const [visible, setVisible] = useState(3)

  const sorted = useMemo(() => [...projects].sort((a, b) => a.order - b.order), [projects])

  const filtered = useMemo(() => {
    if (category === 'all') return sorted
    return sorted.filter((p) => (p.category ?? 'ux') === category)
  }, [sorted, category])

  const featured = filtered.filter((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured)

  const tabs: { key: Category; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: sorted.length },
    { key: 'ux', label: 'UX & Product', count: sorted.filter((p) => (p.category ?? 'ux') === 'ux').length },
    { key: 'graphic', label: 'Graphic Design', count: sorted.filter((p) => p.category === 'graphic').length },
    { key: 'motion', label: 'Motion', count: sorted.filter((p) => p.category === 'motion').length },
  ]

  const handleTab = (key: Category) => {
    setCategory(key)
    setVisible(3)
  }

  return (
    <>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {tabs.map((tab) => {
          const active = category === tab.key
          return (
            <button
              key={tab.key}
              onClick={() => handleTab(tab.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                active
                  ? 'bg-accent-gold text-white border-accent-gold shadow-sm'
                  : 'bg-white/40 text-text-secondary border-black/10 hover:border-accent-gold/40 hover:text-text-primary'
              }`}
            >
              {tab.label}
              <span className={`ml-1.5 text-xs ${active ? 'text-white/80' : 'text-text-tertiary'}`}>
                {tab.count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="mb-20">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              Featured
            </h2>
            <span className="text-xs text-text-tertiary font-mono">{featured.length} projects</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} variant="featured" />
            ))}
          </div>
        </section>
      )}

      {/* More work */}
      {rest.length > 0 && (
        <section>
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              More work
            </h2>
            <span className="text-xs text-text-tertiary font-mono">
              {visible < rest.length ? `${visible} / ${rest.length}` : `${rest.length} projects`}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.slice(0, visible).map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={featured.length + i}
                variant="compact"
              />
            ))}
          </div>
          {visible < rest.length && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setVisible((v) => v + 4)}
                className="px-6 py-2.5 rounded-full text-sm font-medium text-text-secondary border border-black/10 bg-white/40 hover:border-accent-gold/40 hover:text-text-primary transition-all duration-200"
              >
                Show more
              </button>
            </div>
          )}
        </section>
      )}

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="py-20 text-center text-text-tertiary">
          <p className="text-lg mb-2">Nothing here yet</p>
          <p className="text-sm">This category is coming soon — check back later.</p>
        </div>
      )}
    </>
  )
}