'use client'

import { motion } from 'framer-motion'

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

/** Compact image grid for graphic / video case studies — quick visual scan. */
export function GalleryGrid({ label, images, columns = 2 }: GalleryGridProps) {
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
            className="overflow-hidden rounded-xl bg-white"
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
                className="w-full h-full object-contain"
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
    </motion.div>
  )
}
