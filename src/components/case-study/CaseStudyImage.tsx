'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lightbox } from '@/components/case-study/Lightbox'

interface CaseStudyImageProps {
  /** Image path (/images/...). Omit to show the original placeholder. */
  src?: string
  label: string
  description?: string
  /** Aspect ratio in placeholder mode (ignored when src is set — uses the image's natural ratio). */
  aspectRatio?: string
  badge?: string
  /** Caption shown below the image. */
  caption?: string
  /** Image fit — default contain (show the full screenshot without cropping). */
  objectFit?: 'contain' | 'cover'
  /** Clicking the image opens this URL (e.g. an Adobe XD prototype) in a new tab. */
  href?: string
  /** Badge shown top-right when href is set (default "▶ Open prototype"). */
  hrefLabel?: string
}

// Image frame used inside case studies to display design screenshots.
// With src it shows the real image; without it, a decorative placeholder.
export function CaseStudyImage({
  src,
  label,
  description,
  aspectRatio = '16/10',
  badge,
  caption,
  objectFit = 'contain',
  href,
  hrefLabel = '▶ Open prototype',
}: CaseStudyImageProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const figureBody = (
    <>
      <div className="glass-card overflow-hidden rounded-xl p-0">
        {src ? (
          // Real image — show at natural ratio on a warm-white surface
          <div
            className="relative flex items-center justify-center bg-[#FAF7F5]"
            style={objectFit === 'contain' ? { aspectRatio } : undefined}
          >
            <img
              src={src}
              alt={caption || label}
              loading="lazy"
              className={
                objectFit === 'contain'
                  ? 'max-w-full max-h-full w-full object-contain'
                  : 'w-full object-cover'
              }
              style={objectFit === 'contain' ? { aspectRatio } : undefined}
            />
            {/* Click hint — shown when href is set */}
            {href && (
              <div className="absolute top-3 right-3 px-3 py-1.5 rounded-md bg-[#1C1814]/80 text-[11px] font-medium text-white tracking-wide backdrop-blur flex items-center gap-1.5 pointer-events-none">
                {hrefLabel}
              </div>
            )}
          </div>
        ) : (
          // Placeholder mode (used before the image is supplied)
          <div
            className="relative overflow-hidden border border-dashed border-[#D4C5B0]/40 bg-[#FAF7F5]"
            style={{ aspectRatio }}
          >
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'radial-gradient(circle, #1C1814 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D4C5B0"
                strokeWidth="1.5"
                className="opacity-60"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <span className="text-sm font-medium text-[#B8B2AE] tracking-wide">
                {label}
              </span>
              {description && (
                <span className="text-xs text-[#B8B2AE]/60 text-center max-w-[280px] leading-relaxed">
                  {description}
                </span>
              )}
            </div>
          </div>
        )}

        {badge && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#1C1814]/5 border border-[#D4C5B0]/20 text-[10px] font-medium text-[#8A8480] tracking-wide uppercase">
            {badge}
          </div>
        )}
      </div>

      {/* Image caption */}
      {caption && (
        <figcaption className="mt-3 text-sm text-[#8A8480] text-center leading-relaxed">
          {caption}
        </figcaption>
      )}
    </>
  )

  // Wrap in an <a> (new tab) when href is set, so the whole image is clickable
  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        whileHover={{ y: -2 }}
        className="block my-10 cursor-pointer"
      >
        {figureBody}
      </motion.a>
    )
  }

  return (
    <>
      <motion.figure
        initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        whileHover={{ y: -2 }}
        onClick={() => setLightboxOpen(true)}
        className="my-10 cursor-zoom-in"
      >
        {figureBody}
      </motion.figure>

      {/* Click to enlarge */}
      {src && (
        <Lightbox
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          src={src}
          alt={caption || label}
          caption={label}
          sub={caption}
        />
      )}
    </>
  )
}