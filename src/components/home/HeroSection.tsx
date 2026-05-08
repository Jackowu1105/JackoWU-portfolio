'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const layersRef = useRef<HTMLElement[]>([])
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    // Populate depth layers
    layersRef.current = Array.from(el.querySelectorAll('[data-depth]')) as HTMLElement[]

    const handleMouse = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      mouseRef.current = {
        x: (e.clientX - cx) / rect.width,
        y: (e.clientY - cy) / rect.height,
      }
    }

    const handleLeave = () => {
      mouseRef.current = { x: 0, y: 0 }
      layersRef.current.forEach((layer) => {
        layer.style.transform = 'translate(0px, 0px)'
      })
    }

    el.addEventListener('mousemove', handleMouse, { passive: true })
    el.addEventListener('mouseleave', handleLeave, { passive: true })

    const animate = () => {
      const { x, y } = mouseRef.current
      for (let i = 0; i < layersRef.current.length; i++) {
        const layer = layersRef.current[i]
        const depth = Number(layer.getAttribute('data-depth') || 1)
        const factor = depth * 6
        layer.style.transform = `translate(${x * factor}px, ${y * factor * 0.5}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      el.removeEventListener('mousemove', handleMouse)
      el.removeEventListener('mouseleave', handleLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])
  return (
    <section className="relative overflow-hidden min-h-0 flex flex-col justify-center w-full">
      <div className="mx-auto max-w-5xl px-6 py-0 w-full">
        <div className="flex flex-col items-center gap-0 md:gap-2 lg:gap-4 text-center">

          {/* Layer 1 — badge + description */}
          <div data-depth={1} className="will-change-transform" style={{ transition: 'transform 0.15s ease-out' }}>
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.05, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,223,147,0.3)] border border-white/20 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#765b00] inline-block" />
              <span className="text-xs font-semibold text-[#594400] tracking-[1.2px] uppercase">
                Available for new opportunities
              </span>
            </motion.div>

          </div>

          {/* Layer 2 — main heading */}
          <div data-depth={2} className="will-change-transform" style={{ transition: 'transform 0.15s ease-out' }}>
            <motion.h1
              initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-[0.7rem] sm:text-lg md:text-2xl lg:text-[48px] font-bold tracking-[-0.8px] leading-[1.2] text-[#1d1b20]"
              style={{ fontFamily: 'Epilogue, sans-serif' }}
            >
              Jacko Wu — Crafting
              <br />
              Digital Experiences with
            </motion.h1>
          </div>

          {/* Layer 3 — "Precision & Soul" */}
          <div data-depth={3} className="will-change-transform" style={{ transition: 'transform 0.15s ease-out' }}>
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center justify-center gap-4 flex-wrap"
            >
              <span className="relative inline-block">
                <span
                  className="text-[0.7rem] sm:text-lg md:text-2xl lg:text-[48px] font-bold tracking-[-0.8px] leading-[1.2] text-[#37848a]"
                  style={{ fontFamily: 'Epilogue, sans-serif' }}
                >
                  Precision
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-[rgba(55,132,138,0.2)]" />
              </span>

              <span
                className="text-[0.7rem] sm:text-lg md:text-2xl lg:text-[48px] font-bold tracking-[-0.8px] leading-[1.2] text-[#1d1b20]"
                style={{ fontFamily: 'Epilogue, sans-serif' }}
              >
                &amp;
              </span>

              <span className="relative inline-block">
                <span
                  className="text-[0.7rem] sm:text-lg md:text-2xl lg:text-[48px] font-bold tracking-[-0.8px] leading-[1.2] text-[#c9a74d]"
                  style={{ fontFamily: 'Epilogue, sans-serif' }}
                >
                  Soul
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-[rgba(201,167,77,0.2)]" />
              </span>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16, filter: 'blur(3px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.35, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xs sm:text-sm md:text-base lg:text-lg text-[#494551] max-w-[672px] mx-auto leading-relaxed mt-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            I&apos;m a UX/UI Designer focused on creating human-centric digital products. By
            blending minimalist aesthetics with advanced functionality, I build intuitive
            interfaces that feel effortless and look premium.
          </motion.p>

          {/* Layer 4 — CTAs */}
          <div data-depth={4} className="will-change-transform" style={{ transition: 'transform 0.15s ease-out' }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
            >
              {/* Explore Works — dark */}
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1d1b20] text-[#fdf7ff] text-sm font-medium hover:bg-[#2d2b30] transition-colors"
                style={{ fontFamily: 'Epilogue, sans-serif' }}
              >
                Explore Works
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </Link>

              {/* Download Resume — glass */}
              <a
                href="/resume"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/30 text-[#1d1b20] text-sm font-medium backdrop-blur-[10px] hover:bg-white/20 transition-colors"
                style={{
                  fontFamily: 'Epilogue, sans-serif',
                  background: 'linear-gradient(133deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 100%)',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 2v8M3 8l4 4 4-4" />
                  <path d="M1 12h12" />
                </svg>
                Download Resume
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
