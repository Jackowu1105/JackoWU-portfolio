'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { RippleEffect } from '@/components/shared/RippleEffect'

export function ContactCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-12 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-8 text-center"
      >
        {/* Heading — two lines, first black, second teal */}
        <h2
          className="text-heading font-bold text-4xl md:text-5xl tracking-tight leading-tight"
          style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
        >
          Have a product to ship?
          <br />
          <span className="text-teal">Let&apos;s design &amp; build it together.</span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-body text-base"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Open to full-time product design roles and selective freelance projects — especially
          at the intersection of AI, fintech, and complex enterprise workflows.
        </p>

        {/* CTA Button */}
        <div className="pt-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-black text-white rounded-2xl px-10 font-medium hover:opacity-80 transition-opacity relative overflow-hidden"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '18px',
              height: '64px',
            }}
          >
            <RippleEffect />
            Start a Conversation
            {/* Envelope icon */}
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              aria-hidden="true"
            >
              <rect x="1" y="1" width="18" height="14" rx="2" stroke="white" strokeWidth="1.5" />
              <path d="M1 4l9 6 9-6" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

