'use client'

import { useEffect, useRef } from 'react'

interface Blob {
  baseX: number
  baseY: number
  baseRadius: number
  color: [number, number, number]
  speed: number
  driftX: number
  driftY: number
  phaseX: number
  phaseY: number
  phaseR: number
  opacityBase: number
  opacityOsc: number
}

const BLOBS: Blob[] = [
  { baseX: 0.35, baseY: 0.4, baseRadius: 380, color: [55, 132, 138], speed: 0.28, driftX: 0.22, driftY: 0.18, phaseX: 0, phaseY: 1.8, phaseR: 0, opacityBase: 0.28, opacityOsc: 0.08 },
  { baseX: 0.65, baseY: 0.45, baseRadius: 340, color: [201, 167, 77], speed: 0.26, driftX: 0.2, driftY: 0.22, phaseX: 2.3, phaseY: 0.5, phaseR: 1.6, opacityBase: 0.25, opacityOsc: 0.07 },
  { baseX: 0.5, baseY: 0.5, baseRadius: 400, color: [74, 158, 165], speed: 0.24, driftX: 0.24, driftY: 0.2, phaseX: 4.1, phaseY: 3.3, phaseR: 2.9, opacityBase: 0.28, opacityOsc: 0.1 },
  { baseX: 0.6, baseY: 0.65, baseRadius: 280, color: [217, 191, 110], speed: 0.32, driftX: 0.18, driftY: 0.24, phaseX: 1.5, phaseY: 4.8, phaseR: 0.8, opacityBase: 0.26, opacityOsc: 0.08 },
  { baseX: 0.3, baseY: 0.6, baseRadius: 300, color: [42, 107, 112], speed: 0.35, driftX: 0.2, driftY: 0.18, phaseX: 3.7, phaseY: 2.2, phaseR: 3.4, opacityBase: 0.24, opacityOsc: 0.07 },
  { baseX: 0.2, baseY: 0.5, baseRadius: 280, color: [201, 123, 93], speed: 0.3, driftX: 0.2, driftY: 0.22, phaseX: 1.2, phaseY: 3.1, phaseR: 2.5, opacityBase: 0.2, opacityOsc: 0.06 },
  { baseX: 0.8, baseY: 0.6, baseRadius: 300, color: [122, 143, 122], speed: 0.27, driftX: 0.18, driftY: 0.2, phaseX: 4.8, phaseY: 1.3, phaseR: 0.9, opacityBase: 0.22, opacityOsc: 0.07 },
  { baseX: 0.4, baseY: 0.7, baseRadius: 260, color: [232, 196, 160], speed: 0.3, driftX: 0.22, driftY: 0.2, phaseX: 5.6, phaseY: 0.7, phaseR: 2.1, opacityBase: 0.22, opacityOsc: 0.06 },
  { baseX: 0.7, baseY: 0.35, baseRadius: 280, color: [122, 184, 189], speed: 0.28, driftX: 0.18, driftY: 0.22, phaseX: 0.7, phaseY: 5.5, phaseR: 1.2, opacityBase: 0.26, opacityOsc: 0.08 },
  { baseX: 0.5, baseY: 0.25, baseRadius: 240, color: [180, 150, 85], speed: 0.32, driftX: 0.19, driftY: 0.16, phaseX: 2.8, phaseY: 3.9, phaseR: 0.3, opacityBase: 0.22, opacityOsc: 0.07 },
]

export function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const timeRef = useRef(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      timeRef.current += 0.005
      const t = timeRef.current
      const w = canvas.width
      const h = canvas.height

      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'screen'

      for (const blob of BLOBS) {
        // Organic Lissajous-like movement
        const dx =
          Math.sin(t * blob.speed + blob.phaseX) * blob.driftX * w +
          Math.sin(t * blob.speed * 0.53 + blob.phaseX * 1.7) * blob.driftX * w * 0.4
        const dy =
          Math.cos(t * blob.speed * 0.85 + blob.phaseY) * blob.driftY * h +
          Math.cos(t * blob.speed * 0.67 + blob.phaseY * 1.3) * blob.driftY * h * 0.4

        const x = blob.baseX * w + dx
        const y = blob.baseY * h + dy

        // Pulsing radius
        const pulse = 0.85 + 0.15 * Math.sin(t * 0.18 + blob.phaseR)
        const radius = blob.baseRadius * pulse

        // Soft opacity oscillation
        const opacity = Math.max(
          0.05,
          Math.min(0.5,
            blob.opacityBase + blob.opacityOsc * Math.sin(t * 0.12 + blob.phaseX)
          )
        )

        const [r, g, b] = blob.color
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        gradient.addColorStop(0, `rgba(${r},${g},${b},${opacity})`)
        gradient.addColorStop(0.4, `rgba(${r},${g},${b},${opacity * 0.6})`)
        gradient.addColorStop(1, `rgba(${r},${g},${b},0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, w, h)
      }

      ctx.globalCompositeOperation = 'source-over'
      rafRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ filter: 'blur(100px)', zIndex: -10 }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
