'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { MagneticWrapper } from './MagneticWrapper'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  external?: boolean
  magnetic?: boolean
}

const variants = {
  primary:
    'bg-[#1C1814] text-white hover:bg-[#2C2622] shadow-lg shadow-black/5',
  secondary:
    'glass-card text-[#1C1814]',
  ghost:
    'text-[#8A8480] hover:text-[#1C1814]',
}

export function Button({
  href,
  children,
  variant = 'primary',
  className,
  external,
  magnetic,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-250',
    variants[variant],
    className
  )

  const link = external
    ? (<a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{children}</a>)
    : (<Link href={href} className={classes}>{children}</Link>)

  if (magnetic) {
    return (
      <MagneticWrapper strength={0.3} radius={160}>
        {link}
      </MagneticWrapper>
    )
  }

  return link
}
