'use client'

import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface LightboxProps {
  open: boolean
  onClose: () => void
  src: string
  alt: string
  caption?: string
  /** Extra caption line, e.g. issuer + date for certificates */
  sub?: string
}

/** Shared fullscreen single-image lightbox — Esc to close, locks body scroll. */
export function Lightbox({ open, onClose, src, alt, caption, sub }: LightboxProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-10"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Image + caption */}
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full max-h-full flex flex-col"
          >
            <div className="flex-1 min-h-0 flex items-center justify-center overflow-hidden">
              <img
                src={src}
                alt={alt}
                className="max-w-full max-h-[78vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
            {(caption || sub) && (
              <div className="text-center mt-4 pb-2">
                {caption && (
                  <p className="text-white font-semibold text-sm">{caption}</p>
                )}
                {sub && (
                  <p className="text-white/60 text-xs mt-1">{sub}</p>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
