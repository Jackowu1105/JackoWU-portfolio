'use client'

import { useEffect, useRef, useState } from 'react'
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
  // 實測「一套」寬度（track 一半）作無縫滾動距離，responsive 尺寸都啱數
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return
      setOffset(trackRef.current.offsetWidth / 2)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <section className="w-full pb-0 overflow-hidden">
      {/* 左右漸層遮罩 */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 z-10 bg-gradient-to-r from-bg-elevated to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 z-10 bg-gradient-to-l from-bg-elevated to-transparent" />

        {/* 滾動 track */}
        <motion.div
          ref={trackRef}
          className="flex gap-4 sm:gap-8 lg:gap-[60px] items-center w-max"
          animate={{ x: [0, -offset] }}
          transition={{
            duration: logos.length * 3,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="rounded-xl sm:rounded-2xl flex items-center justify-center"
              style={{
                background:
                  'var(--glass-gradient-light)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.3)',
              }}
            >
              {/* 手機細啲，桌面大啲 */}
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 rounded-2xl sm:rounded-[20px] lg:rounded-[36px] flex items-center justify-center overflow-hidden"
                style={{ flexShrink: 0 }}
              >
                {logo.src ? (
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="block w-auto h-auto object-contain max-w-[32px] max-h-[32px] sm:max-w-[40px] sm:max-h-[40px] lg:max-w-[64px] lg:max-h-[64px]"
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
