import { GlassCard } from '@/components/shared/GlassCard'

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 md:px-12 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="text-text-tertiary text-sm font-medium tracking-widest uppercase mb-3">
          Resume
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
          Download my resume
        </h1>
        <p className="text-text-secondary max-w-lg mx-auto leading-relaxed text-lg">
          A concise overview of my experience, skills, and background — preview it below, then download to keep a copy.
        </p>
      </div>

      {/* Nice inline preview */}
      <GlassCard hover={false} className="p-4 sm:p-6">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-5 px-1">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            <span className="ml-2 hidden sm:inline text-xs font-mono text-text-secondary">
              Jacko-WU-Resume.pdf
            </span>
          </div>
          <span className="px-2 py-0.5 rounded-md bg-black/5 text-[10px] font-semibold uppercase tracking-wide text-text-tertiary">
            1 page · PDF
          </span>
        </div>

        {/* Document */}
        <div className="rounded-lg overflow-hidden bg-white shadow-lg shadow-black/10 ring-1 ring-black/5">
          <img
            src="/resume/jacko-wu-resume-preview.png"
            alt="Jacko Wu — Resume"
            className="w-full h-auto block"
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href="/resume/jacko-wu-resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-sm bg-dark-bg text-dark-text hover:opacity-80 shadow-lg shadow-black/5 transition-opacity"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 10v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3M4 7l4 4 4-4M8 11V2" />
            </svg>
            Download PDF
          </a>
        </div>
      </GlassCard>
    </div>
  )
}
