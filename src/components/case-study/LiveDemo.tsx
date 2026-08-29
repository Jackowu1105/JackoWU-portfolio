'use client'

import { motion } from 'framer-motion'

interface LiveDemoProps {
  /** Demo URL (deployed) */
  url: string
  /** GitHub repo URL */
  repoUrl?: string
  /** Demo account rows: [role, email, password] */
  accounts?: { role: string; email: string; password: string }[]
  /** OTP code to show (if the login flow has one) */
  otp?: string
  /** Short intro line above the button */
  intro?: string
}

/** Live demo CTA card — link out to a running deployment + demo credentials. */
export function LiveDemo({
  url,
  repoUrl,
  accounts = [],
  otp,
  intro = 'The full app is deployed and running — sign in with the demo account and click around.',
}: LiveDemoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: 'blur(3px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="my-8 rounded-2xl border-2 border-accent-gold/50 bg-accent-glow/40 p-6 sm:p-7"
    >
      <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#b8b2ae] mb-3">
        Live Demo · Try It Yourself
      </p>

      <p className="text-[#494551] leading-relaxed text-[15px] mb-5">{intro}</p>

      <div className="flex flex-wrap gap-3 mb-5">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-accent-gold px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-deep hover:shadow-lg hover:shadow-accent-gold/25"
        >
          <svg
            className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
          Open Live Demo
        </a>
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-2.5 text-sm font-semibold text-[#494551] transition-all hover:border-accent-gold/40 hover:text-accent-deep"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View Source
          </a>
        )}
      </div>

      {accounts.length > 0 && (
        <div className="rounded-xl border border-black/5 bg-white/80 overflow-hidden">
          <div className="grid grid-cols-3 gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[#b8b2ae] border-b border-black/5">
            <span>Role</span>
            <span>Email</span>
            <span>Password</span>
          </div>
          {accounts.map((a) => (
            <div
              key={a.email}
              className="grid grid-cols-3 gap-2 px-4 py-2.5 border-b border-black/5 last:border-0 items-center"
            >
              <span className="text-[11px] font-semibold text-[#1d1b20]">{a.role}</span>
              <span className="text-[11px] font-mono text-[#494551] break-all">{a.email}</span>
              <span className="text-[11px] font-mono text-[#494551]">{a.password}</span>
            </div>
          ))}
          {otp && (
            <div className="px-4 py-2.5 bg-black/[0.02] text-[11px] text-[#8a8480]">
              OTP code: <span className="font-mono font-semibold text-[#1d1b20]">{otp}</span>
            </div>
          )}
        </div>
      )}
    </motion.div>
  )
}
