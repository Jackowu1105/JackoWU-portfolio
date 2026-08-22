'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { MagneticWrapper } from './MagneticWrapper'
import { RippleEffect } from './RippleEffect'

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
    'bg-dark-bg text-dark-text hover:opacity-80 shadow-lg shadow-black/5',
  secondary:
    'glass-card text-dark-bg',
  ghost:
    'text-text-secondary hover:text-dark-bg',
}

const rippleColors = {
  primary: 'rgba(255,255,255,0.5)',
  secondary: 'rgba(55,132,138,0.4)',
  ghost: 'rgba(55,132,138,0.35)',
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
    'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-250 relative overflow-hidden',
    variants[variant],
    className
  )

  const content = (
    <>
      <RippleEffect color={rippleColors[variant]} />
      {children}
    </>
  )

  const link = external
    ? (<a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{content}</a>)
    : (<Link href={href} className={classes}>{content}</Link>)

  if (magnetic) {
    return (
      <MagneticWrapper strength={0.3} radius={160}>
        {link}
      </MagneticWrapper>
    )
  }

  return link
}
