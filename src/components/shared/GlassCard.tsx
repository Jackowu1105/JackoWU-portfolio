'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps extends HTMLMotionProps<'div'> {
  className?: string
  hover?: boolean
  children: React.ReactNode
}

export function GlassCard({
  className,
  hover = true,
  children,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'glass-card p-8',
        hover && 'transition-colors duration-250',
        className
      )}
      whileHover={
        hover
          ? {
              y: -4,
              scale: 1.01,
              borderColor: 'rgba(255,255,255,0.3)',
            }
          : undefined
      }
      transition={{ duration: 0.25, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
