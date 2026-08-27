'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface TOCItem {
  id: string
  num: string
  label: string
}

/**
 * Sticky in-page table of contents for case studies.
 * Scans .case-study-body h2 headings, scroll-spies the active one,
 * and smooth-scrolls to a section on click.
 */
export function CaseStudyTOC() {
  const [items, setItems] = useState<TOCItem[]>([])
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const container = document.querySelector('.case-study-body')
    if (!container) return

    const headings = Array.from(container.querySelectorAll('h2'))
    const toc = headings.map((h, i) => ({
      id: `cs-section-${i}`,
      num: String(i + 1).padStart(2, '0'),
      label: h.textContent?.trim() || '',
    }))
    setItems(toc)

    // Assign ids so we can scroll to them
    headings.forEach((h, i) => {
      h.id = `cs-section-${i}`
    })

    // Scroll-spy: track which heading is above the viewport top
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-15% 0px -75% 0px', threshold: 0 }
    )
    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [])

  if (items.length === 0) return null

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const headerOffset = 96
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="hidden lg:block"
    >
      <div className="sticky top-24">
        <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#b8b2ae] mb-3">
          On this page
        </p>
        <div className="flex flex-col">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-[13px] transition-all duration-150 ${
                active === item.id
                  ? 'bg-accent-glow font-semibold text-[#1c1814]'
                  : 'text-[#8a8480] hover:bg-black/[0.03] hover:text-[#1c1814]'
              }`}
            >
              <span
                className={`font-mono text-[10px] tracking-wide ${
                  active === item.id ? 'text-accent-gold' : 'text-accent-gold/60'
                }`}
              >
                {item.num}
              </span>
              <span className="leading-snug">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
