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
  mouseAttraction: number
  mouseBoost: number
  mouseRadius: number
  colorWarmShift: number
}

const BLOBS: Blob[] = [
  // Deep teal
  { baseX: 0.35, baseY: 0.4, baseRadius: 380, color: [55, 132, 138], speed: 0.28, driftX: 0.22, driftY: 0.18, phaseX: 0, phaseY: 1.8, phaseR: 0, opacityBase: 0.28, opacityOsc: 0.08, mouseAttraction: 0.25, mouseBoost: 0.3, mouseRadius: 0.35, colorWarmShift: 1.0 },
  // Gold
  { baseX: 0.65, baseY: 0.45, baseRadius: 340, color: [201, 167, 77], speed: 0.26, driftX: 0.2, driftY: 0.22, phaseX: 2.3, phaseY: 0.5, phaseR: 1.6, opacityBase: 0.25, opacityOsc: 0.07, mouseAttraction: 0.25, mouseBoost: 0.3, mouseRadius: 0.35, colorWarmShift: 0.3 },
  // Light teal
  { baseX: 0.5, baseY: 0.5, baseRadius: 400, color: [74, 158, 165], speed: 0.24, driftX: 0.24, driftY: 0.2, phaseX: 4.1, phaseY: 3.3, phaseR: 2.9, opacityBase: 0.28, opacityOsc: 0.1, mouseAttraction: 0.3, mouseBoost: 0.35, mouseRadius: 0.4, colorWarmShift: 1.2 },
  // Light gold
  { baseX: 0.6, baseY: 0.65, baseRadius: 280, color: [217, 191, 110], speed: 0.32, driftX: 0.18, driftY: 0.24, phaseX: 1.5, phaseY: 4.8, phaseR: 0.8, opacityBase: 0.26, opacityOsc: 0.08, mouseAttraction: 0.35, mouseBoost: 0.4, mouseRadius: 0.4, colorWarmShift: 0.3 },
  // Dark teal
  { baseX: 0.3, baseY: 0.6, baseRadius: 300, color: [42, 107, 112], speed: 0.35, driftX: 0.2, driftY: 0.18, phaseX: 3.7, phaseY: 2.2, phaseR: 3.4, opacityBase: 0.24, opacityOsc: 0.07, mouseAttraction: 0.2, mouseBoost: 0.25, mouseRadius: 0.3, colorWarmShift: 0.8 },
  // Warm terracotta
  { baseX: 0.2, baseY: 0.5, baseRadius: 280, color: [201, 123, 93], speed: 0.3, driftX: 0.2, driftY: 0.22, phaseX: 1.2, phaseY: 3.1, phaseR: 2.5, opacityBase: 0.2, opacityOsc: 0.06, mouseAttraction: 0.5, mouseBoost: 0.45, mouseRadius: 0.45, colorWarmShift: 0.2 },
  // Dusty sage
  { baseX: 0.8, baseY: 0.6, baseRadius: 300, color: [122, 143, 122], speed: 0.27, driftX: 0.18, driftY: 0.2, phaseX: 4.8, phaseY: 1.3, phaseR: 0.9, opacityBase: 0.22, opacityOsc: 0.07, mouseAttraction: 0.4, mouseBoost: 0.4, mouseRadius: 0.4, colorWarmShift: 0.6 },
  // Warm peach
  { baseX: 0.4, baseY: 0.7, baseRadius: 260, color: [232, 196, 160], speed: 0.3, driftX: 0.22, driftY: 0.2, phaseX: 5.6, phaseY: 0.7, phaseR: 2.1, opacityBase: 0.22, opacityOsc: 0.06, mouseAttraction: 0.55, mouseBoost: 0.5, mouseRadius: 0.45, colorWarmShift: 0.2 },
  // Soft teal
  { baseX: 0.7, baseY: 0.35, baseRadius: 280, color: [122, 184, 189], speed: 0.28, driftX: 0.18, driftY: 0.22, phaseX: 0.7, phaseY: 5.5, phaseR: 1.2, opacityBase: 0.26, opacityOsc: 0.08, mouseAttraction: 0.45, mouseBoost: 0.45, mouseRadius: 0.4, colorWarmShift: 0.9 },
  // Muted gold
  { baseX: 0.5, baseY: 0.25, baseRadius: 240, color: [180, 150, 85], speed: 0.32, driftX: 0.19, driftY: 0.16, phaseX: 2.8, phaseY: 3.9, phaseR: 0.3, opacityBase: 0.22, opacityOsc: 0.07, mouseAttraction: 0.4, mouseBoost: 0.4, mouseRadius: 0.4, colorWarmShift: 0.3 },
]

interface PosEntry {
  x: number
  y: number
  time: number
}

export function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const smoothMouseRef = useRef({ x: 0.5, y: 0.5 })
  const timeRef = useRef(0)
  const rafRef = useRef<number>(0)
  const posHistoryRef = useRef<PosEntry[]>([])

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

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      }
    }
    window.addEventListener('mousemove', handleMouse, { passive: true })

    const animate = () => {
      timeRef.current += 0.005
      const t = timeRef.current
      const w = canvas.width
      const h = canvas.height

      ctx.clearRect(0, 0, w, h)

      // 記錄當前滑鼠位置到歷史佇列
      const history = posHistoryRef.current
      history.push({ ...mouseRef.current, time: performance.now() })

      // 移除超過 1.5 秒的舊資料
      const cutoff = performance.now() - 1500
      while (history.length > 0 && history[0].time < cutoff) {
        history.shift()
      }

      // 找出 500 毫秒前（約 0.5 秒延遲）的滑鼠位置作為跟隨目標
      const delayMs = 300
      const delayedCutoff = performance.now() - delayMs
      let delayedTarget = mouseRef.current
      for (let i = history.length - 1; i >= 0; i--) {
        if (history[i].time <= delayedCutoff) {
          delayedTarget = history[i]
          break
        }
      }

      // 慢速平滑趨近延遲目標
      const slowLerp = 0.04
      smoothMouseRef.current.x += (delayedTarget.x - smoothMouseRef.current.x) * slowLerp
      smoothMouseRef.current.y += (delayedTarget.y - smoothMouseRef.current.y) * slowLerp
      const mx = smoothMouseRef.current.x
      const my = smoothMouseRef.current.y

      // 使用 screen 混色模式讓重疊區域變亮，避免色塊疊出灰色
      ctx.globalCompositeOperation = 'screen'

      for (const blob of BLOBS) {
        // Dual sine waves for organic Lissajous-like movement
        const speedMult = 1 + blob.mouseBoost * 0.35 * (
          blob.mouseRadius > 0 ? Math.max(0, 1 - (
            Math.sqrt(
              ((blob.baseX * w) - mx * w) ** 2 +
              ((blob.baseY * h) - my * h) ** 2
            ) / (blob.mouseRadius * w)
          )) : 0
        )
        const dx =
          Math.sin(t * blob.speed * speedMult + blob.phaseX) * blob.driftX * w +
          Math.sin(t * blob.speed * 0.53 * speedMult + blob.phaseX * 1.7) * blob.driftX * w * 0.4
        const dy =
          Math.cos(t * blob.speed * 0.85 * speedMult + blob.phaseY) * blob.driftY * h +
          Math.cos(t * blob.speed * 0.67 * speedMult + blob.phaseY * 1.3) * blob.driftY * h * 0.4

        let x = blob.baseX * w + dx
        let y = blob.baseY * h + dy

        // 滑鼠視差
        const mouseDx = (mx - 0.5) * w * 0.08
        const mouseDy = (my - 0.5) * h * 0.08
        const influence = 0.6 + 0.4 * Math.sin(t * 0.08 + blob.phaseX)
        x += mouseDx * influence * 0.5
        y += mouseDy * influence * 0.5

        // 游標距離計算
        const blobNX = x / w
        const blobNY = y / h
        const dxN = mx - blobNX
        const dyN = my - blobNY
        const dist = Math.sqrt(dxN * dxN + dyN * dyN)
        const closeness = Math.max(0, 1 - dist / blob.mouseRadius)

        // 游標吸引（降低強度）
        const attract = blob.mouseAttraction * closeness * closeness * 0.08
        x += dxN * w * attract
        y += dyN * h * attract

        // 漣漪波 — 從游標處週期性擴散
        const ripplePhase = (t * 0.4) % 1
        const rippleDist = Math.abs(dist - ripplePhase)
        const rippleStrength = Math.max(0, 1 - rippleDist * 5) * 0.03 * w
        x += dxN * rippleStrength
        y += dyN * rippleStrength

        // Pulsing radius
        const pulse = 0.85 + 0.15 * Math.sin(t * 0.18 + blob.phaseR)
        const radius = blob.baseRadius * pulse

        // Soft opacity oscillation + cursor Y 偏移
        const vertInfluence = (my - 0.5) * 0.12
        const opDir = blob.colorWarmShift > 0.5 ? 1 : -1
        const opacity = Math.max(
          0.05,
          Math.min(0.5,
            blob.opacityBase + blob.opacityOsc * Math.sin(t * 0.12 + blob.phaseX)
            + vertInfluence * opDir
          )
        )

        // 色彩暖化 — 靠近游標時微微往金色偏移
        let [r, g, b] = blob.color
        if (closeness > 0.2) {
          const warm = closeness * blob.colorWarmShift * 15
          r = Math.min(255, Math.max(0, Math.round(r + warm)))
          g = Math.min(255, Math.max(0, Math.round(g - warm * 0.2)))
          b = Math.min(255, Math.max(0, Math.round(b - warm * 0.1)))
        }

        // Radial gradient: color center → transparent edge
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        gradient.addColorStop(0, `rgba(${r},${g},${b},${opacity})`)
        gradient.addColorStop(0.4, `rgba(${r},${g},${b},${opacity * 0.6})`)
        gradient.addColorStop(1, `rgba(${r},${g},${b},0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, w, h)
      }

      // 恢復預設混色模式
      ctx.globalCompositeOperation = 'source-over'

      rafRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
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
