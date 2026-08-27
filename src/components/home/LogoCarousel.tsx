'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

const logos: { src: string; alt: string }[] = [
  { src: '/images/logos/01_Figma-logo.svg', alt: 'Figma' },
  { src: '/images/logos/02_Visual_Studio_Code_1.35_icon.svg', alt: 'VS Code' },
  { src: '/images/logos/03_Cursor.svg', alt: 'Cursor' },
  { src: '/images/logos/04_claude-ai.svg', alt: 'Claude AI' },
  { src: '/images/logos/05_github-copilot-icon.svg', alt: 'GitHub Copilot' },
  { src: '/images/logos/06_lovable-color.png', alt: 'Lovable' },
  { src: '/images/logos/07_Octicons-mark-github.svg', alt: 'GitHub' },
  { src: '/images/logos/08_Adobe_Illustrator_CC_icon.svg', alt: 'Adobe Illustrator' },
  { src: '/images/logos/09_Adobe_Photoshop_CC_icon.svg', alt: 'Adobe Photoshop' },
  { src: '/images/logos/10_Adobe_Premiere_Pro_CC_icon.svg', alt: 'Adobe Premiere Pro' },
  { src: '/images/logos/11_Adobe_After_Effects_CC_icon.svg', alt: 'Adobe After Effects' },
  { src: '/images/logos/12_Adobe_Photoshop_Lightroom_CC_logo.svg', alt: 'Adobe Lightroom' },
  { src: '/images/logos/13_framer-svgrepo-com.svg', alt: 'Framer' },
  { src: '/images/logos/14_Canva_Icon.jpeg', alt: 'Canva' },
  { src: '/images/logos/15_HTML5_logo_and_wordmark.svg', alt: 'HTML5' },
  { src: '/images/logos/16_React-icon.svg', alt: 'React' },
  { src: '/images/logos/17_Vue.js_Logo_2.svg', alt: 'Vue.js' },
  { src: '/images/logos/18_Tailwind_CSS_Logo.svg', alt: 'Tailwind CSS' },
  { src: '/images/logos/19_Microsoft_Office_Word_(2019–2025).svg', alt: 'Microsoft Word' },
  { src: '/images/logos/20_Microsoft_PowerPoint_2013-2019_logo.svg', alt: 'Microsoft PowerPoint' },
]

// 複製兩倍讓無限滾動接得上
const doubled = [...logos, ...logos]

export function LogoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  return (
    <section className="w-full pb-0 overflow-hidden">
      {/* 左右漸層遮罩 */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-bg-elevated to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-bg-elevated to-transparent" />

        {/* 滾動 track */}
        <motion.div
          ref={trackRef}
          className="flex gap-[60px] items-center w-max"
          animate={{ x: [0, -(64 + 60) * logos.length] }}
          transition={{
            duration: logos.length * 3,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="rounded-xl flex items-center justify-center"
              style={{
                background:
                  'var(--glass-gradient-light)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.3)',
              }}
            >
              {/* 36x36 內容器，logo 等比例填滿 */}
              <div style={{ width: 96, height: 96, borderRadius: '36px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                {logo.src ? (
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ display: 'block', maxWidth: 64, maxHeight: 64, width: 'auto', height: 'auto', objectFit: 'contain' }}
                  />
                ) : (
                  <span className="text-[#b8b2ae] text-xs">Logo</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
