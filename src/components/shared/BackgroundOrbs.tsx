'use client'

import { useEffect, useState } from 'react'

interface Orb {
  id: number
  size: number
  x: number
  y: number
  color: string
  blur: number
  speedX: number
  speedY: number
}

export function BackgroundOrbs() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const orbs: Orb[] = [
    {
      id: 1,
      size: 500,
      x: 0.25,
      y: 0.3,
      color: 'rgba(212,197,176,0.20)',
      blur: 100,
      speedX: 0.015,
      speedY: 0.01,
    },
    {
      id: 2,
      size: 400,
      x: 0.7,
      y: 0.6,
      color: 'rgba(168,152,128,0.15)',
      blur: 80,
      speedX: -0.01,
      speedY: 0.015,
    },
    {
      id: 3,
      size: 300,
      x: 0.5,
      y: 0.8,
      color: 'rgba(107,92,76,0.10)',
      blur: 60,
      speedX: 0.012,
      speedY: -0.008,
    },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none -z-10" aria-hidden="true">
      {orbs.map((orb) => {
        const offsetX = (mousePos.x - 0.5) * orb.speedX * 1000
        const offsetY = (mousePos.y - 0.5) * orb.speedY * 1000

        return (
          <div
            key={orb.id}
            className="absolute rounded-full transition-transform duration-[2000ms] ease-out"
            style={{
              width: orb.size,
              height: orb.size,
              left: `${orb.x * 100}%`,
              top: `${orb.y * 100}%`,
              transform: `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`,
              background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
              filter: `blur(${orb.blur}px)`,
            }}
          />
        )
      })}
    </div>
  )
}
