'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps extends HTMLMotionProps<'div'> {
  className?: string
  delay?: number
  children: React.ReactNode
  variant?: 'fade' | 'perspective'
}

export function AnimatedSection({
  className,
  delay = 0,
  children,
  variant = 'fade',
  ...props
}: AnimatedSectionProps) {
  const fade = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
  }

  const perspective = {
    initial: {
      opacity: 0,
      y: 12,
      rotateX: 8,
      filter: 'blur(4px)',
    },
    whileInView: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
    },
  }

  const anim = variant === 'perspective' ? perspective : fade

  return (
    <motion.div
      initial={anim.initial}
      whileInView={anim.whileInView}
      viewport={{ once: true, margin: '-64px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn(className)}
      style={variant === 'perspective' ? { perspective: '1200px' } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  )
}
