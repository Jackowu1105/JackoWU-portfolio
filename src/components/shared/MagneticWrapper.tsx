'use client'

import { useRef, useState } from 'react'

interface MagneticWrapperProps {
  children: React.ReactNode
  className?: string
  strength?: number
  radius?: number
}

export function MagneticWrapper({
  children,
  className,
  strength = 0.25,
  radius = 150,
}: MagneticWrapperProps) {
  const elRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = elRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const distX = e.clientX - cx
    const distY = e.clientY - cy
    const dist = Math.sqrt(distX * distX + distY * distY)

    if (dist < radius) {
      setOffset({ x: distX * strength, y: distY * strength })
    } else {
      setOffset({ x: 0, y: 0 })
    }
  }

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 })
  }

  return (
    <div
      ref={elRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
