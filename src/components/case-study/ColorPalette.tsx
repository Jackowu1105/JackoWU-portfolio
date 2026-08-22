'use client'

import { motion } from 'framer-motion'

interface ColorPaletteProps {
  colors: string[]
  labels?: string[]
}

// Visual color palette — shows a project's main colors as labeled swatches
// with hex values. Used inside case study Visual Design sections to turn
// "the palette is #xxx..." prose into an actual design-system visual.
export function ColorPalette({ colors, labels }: ColorPaletteProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: 'blur(3px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="my-8 not-prose"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {colors.slice(0, 4).map((color, i) => {
          const label = labels?.[i] || `Color ${i + 1}`
          const isLight = isLightColor(color)
          return (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-black/5 bg-white/40 backdrop-blur-sm"
            >
              <div
                className="h-16 flex items-end p-2"
                style={{ backgroundColor: color }}
              >
                <span
                  className={`text-[10px] font-mono font-medium ${isLight ? 'text-black/50' : 'text-white/80'}`}
                >
                  {color.toUpperCase()}
                </span>
              </div>
              <div className="px-2.5 py-2">
                <span className="text-[11px] font-medium text-text-primary block leading-tight">
                  {label}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

// Decide whether a swatch needs dark or light text on top
function isLightColor(hex: string): boolean {
  const c = hex.replace('#', '')
  if (c.length !== 6) return false
  const r = parseInt(c.slice(0, 2), 16)
  const g = parseInt(c.slice(2, 4), 16)
  const b = parseInt(c.slice(4, 6), 16)
  // Relative luminance
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return lum > 0.6
}