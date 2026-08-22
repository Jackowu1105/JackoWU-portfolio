'use client'

import { motion } from 'framer-motion'

interface MetricCardProps {
  label: string
  value: string
  delay?: number
}

export function MetricCard({ label, value, delay = 0 }: MetricCardProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, rotateX: 6, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ perspective: '1200px' }}
      className="glass-card p-6 text-center"
    >
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="text-3xl md:text-4xl font-bold text-text-primary mb-1"
      >
        {value}
      </motion.p>
      <p className="text-sm text-text-secondary">{label}</p>
    </motion.div>
  )
}
