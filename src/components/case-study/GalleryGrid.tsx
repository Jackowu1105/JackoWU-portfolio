'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export interface GalleryImage {
  src: string
  label: string
  caption?: string
}

interface GalleryGridProps {
  label?: string
  images: GalleryImage[]
  /** Columns on desktop — default 2 */
  columns?: 2 | 3
}

/** Compact image grid for graphic / video case studies — click to open fullscreen lightbox. */
export function GalleryGrid({ label, images, columns = 2 }: GalleryGridProps) {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const close = useCallback(() => setLightbox(null), [])
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + images.length - 1) % images.length)),
    [images.length]
  )
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  )

  // Keyboard: Esc to close, arrows to navigate
  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    // Lock body scroll while open
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, close, prev, next])

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="my-10"
    >
      {label && (
        <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#b8b2ae] mb-5">
          {label}
        </p>
      )}
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))` }}
      >
        {images.map((img, i) => (
          <motion.figure
            key={img.src + i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.06 * i }}
            whileHover={{ y: -3 }}
            onClick={() => setLightbox(i)}
            className="overflow-hidden rounded-xl bg-white cursor-zoom-in"
            style={{
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
            }}
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#FAF7F5]">
              <img
                src={img.src}
                alt={img.caption || img.label}
                loading="lazy"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <figcaption className="px-4 py-3">
              <p className="text-[12px] font-semibold text-[#1A1410]">{img.label}</p>
              {img.caption && (
                <p className="text-[11.5px] text-[#8A8480] mt-0.5 leading-snug">
                  {img.caption}
                </p>
              )}
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {/* Fullscreen lightbox */}
      <AnimatePresence>
        {lightbox !== null && images[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-10"
            role="dialog"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Prev / Next */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prev() }}
                  aria-label="Previous image"
                  className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors z-10"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next() }}
                  aria-label="Next image"
                  className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors z-10"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </>
            )}

            {/* Image + caption */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full max-h-full flex flex-col"
            >
              <div className="flex-1 min-h-0 flex items-center justify-center overflow-hidden">
                <img
                  src={images[lightbox].src}
                  alt={images[lightbox].caption || images[lightbox].label}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                />
              </div>
              <div className="text-center mt-4 pb-2">
                <p className="text-white font-semibold text-sm">
                  {images[lightbox].label}
                  <span className="text-white/40 font-normal ml-2">
                    {lightbox + 1} / {images.length}
                  </span>
                </p>
                {images[lightbox].caption && (
                  <p className="text-white/60 text-xs mt-1 leading-relaxed">
                    {images[lightbox].caption}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
