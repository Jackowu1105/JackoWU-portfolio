'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { Project } from '@/data/projects'
import { ProjectCard } from '@/components/work/ProjectCard'

type Category = 'all' | 'ux' | 'graphic' | 'video'

const CAT_LABELS: Record<Exclude<Category, 'all'>, string> = {
  ux: 'UX & Product',
  graphic: 'Graphic Design',
  video: 'Video',
}

// 返回 project 所屬嘅全部分類：用 `categories` 陣列（multi-category）如果定義咗，
// 否則 fallback 去單一 `category`（預設 ux）
const catsOf = (p: Project): Exclude<Category, 'all'>[] =>
  p.categories && p.categories.length > 0 ? p.categories : [(p.category ?? 'ux') as Exclude<Category, 'all'>]

interface WorkGalleryProps {
  projects: Project[]
}

// Work page 主體：分類 tabs + 無限滾動分批載入。
// All view 會將「More work」按 category 分組（UX & Product / Graphic Design / Video）加 sub-header，
// 令分類一眼睇清；單一 category tab 就淨係顯示該分類。
// 用 IntersectionObserver 偵測 sentinel 入 viewport → 自動 +BATCH 載入，取代「Show more」按鈕。
const INITIAL = 12
const BATCH = 6

export function WorkGallery({ projects }: WorkGalleryProps) {
  const [category, setCategory] = useState<Category>('all')
  const [visible, setVisible] = useState(INITIAL)
  const sentinelRef = useRef<HTMLDivElement | null>(null)

  const sorted = useMemo(() => [...projects].sort((a, b) => a.order - b.order), [projects])

  const filtered = useMemo(() => {
    if (category === 'all') return sorted
    return sorted.filter((p) => catsOf(p).includes(category as Exclude<Category, 'all'>))
  }, [sorted, category])

  const featured = filtered.filter((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured)

  const tabs: { key: Category; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: sorted.length },
    { key: 'ux', label: CAT_LABELS.ux, count: sorted.filter((p) => catsOf(p).includes('ux')).length },
    { key: 'graphic', label: CAT_LABELS.graphic, count: sorted.filter((p) => catsOf(p).includes('graphic')).length },
    { key: 'video', label: CAT_LABELS.video, count: sorted.filter((p) => catsOf(p).includes('video')).length },
  ]

  // All view: 將 non-featured 按 category 分組；單一 tab: 得一個 group
  const groups = useMemo(() => {
    const defs: { cat: Exclude<Category, 'all'>; label: string; showHeader: boolean }[] =
      category === 'all'
        ? [
            { cat: 'ux', label: CAT_LABELS.ux, showHeader: true },
            { cat: 'graphic', label: CAT_LABELS.graphic, showHeader: true },
            { cat: 'video', label: CAT_LABELS.video, showHeader: true },
          ]
        : [{ cat: category as Exclude<Category, 'all'>, label: CAT_LABELS[category as Exclude<Category, 'all'>], showHeader: false }]

    // 將 visible 額度順序分配俾每個 group，並計算累積 card 編號 offset
    let remaining = visible
    let running = featured.length
    return defs
      .map((def) => {
        // All view 用 primary category（每個 project 只出現一次，避免重複）；單一 tab 用 categories（該類別全部成員都顯示）
        const items = rest.filter((p) =>
          category === 'all' ? (p.category ?? 'ux') === def.cat : catsOf(p).includes(def.cat)
        )
        const reveal = Math.min(items.length, remaining)
        remaining -= reveal
        const offset = running
        running += reveal
        return { ...def, items, reveal, offset }
      })
      .filter((g) => g.reveal > 0 && g.items.length > 0)
  }, [rest, category, visible, featured.length])

  // 無限滾動：sentinel 入 viewport 就載入下一批
  useEffect(() => {
    const el = sentinelRef.current
    if (!el || visible >= rest.length) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible((v) => Math.min(v + BATCH, rest.length))
        }
      },
      { rootMargin: '240px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [rest.length, visible])

  const handleTab = (key: Category) => {
    setCategory(key)
    setVisible(INITIAL)
  }

  const revealedTotal = groups.reduce((acc, g) => acc + g.reveal, 0)
  const hasMore = visible < rest.length

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
      {groups.length > 0 && (
        <section className="mb-16">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              More work
            </h2>
            <span className="text-xs text-text-tertiary font-mono">
              {hasMore ? `${revealedTotal} / ${rest.length}` : `${rest.length} projects`}
            </span>
          </div>

          {groups.map((group) => (
            <div key={group.cat} className="mb-12 last:mb-0">
              {/* 分類 sub-header —— 淨係 All view 先顯示，令分類一眼睇清 */}
              {group.showHeader && (
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-sm font-semibold text-text-primary">{group.label}</h3>
                  <span className="text-xs text-text-tertiary font-mono">{group.items.length}</span>
                  <span className="h-px flex-1 bg-black/5" />
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.items.slice(0, group.reveal).map((project, i) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    index={group.offset + i}
                    variant="compact"
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Infinite-scroll sentinel */}
          {hasMore && (
            <div ref={sentinelRef} className="py-10 flex items-center justify-center text-text-tertiary">
              <span className="text-xs font-mono animate-pulse">Loading more…</span>
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
