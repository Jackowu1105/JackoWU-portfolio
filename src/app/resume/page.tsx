import { GlassCard } from '@/components/shared/GlassCard'
import { Button } from '@/components/shared/Button'

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-12 py-16">
      {/* Header */}
      <div className="mb-16">
        <p className="text-text-tertiary text-sm font-medium tracking-widest uppercase mb-3">
          Resume
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
          Download my resume
        </h1>
        <p className="text-text-secondary max-w-lg leading-relaxed text-lg">
          A concise overview of my experience, skills, and background.
        </p>
      </div>

      {/* Download card */}
      <GlassCard hover={false} className="p-12 text-center mb-12">
        <h2 className="text-2xl font-bold text-text-primary mb-3">
          Ready to dive deeper?
        </h2>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          Available as a PDF. Feel free to download and share with your team.
        </p>
        <Button href="/resume.pdf" variant="primary" external>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 10v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3M4 7l4 4 4-4M8 11V2" />
          </svg>
          Download PDF
        </Button>
      </GlassCard>

      {/* Preview note */}
      <GlassCard hover={false} className="p-8 text-center">
        <p className="text-text-tertiary text-sm">
          A PDF resume will be added here. For now, visit the{' '}
          <a href="/about" className="text-text-secondary hover:text-text-primary underline transition-colors">
            About page
          </a>{' '}
          for a complete overview of my experience and skills.
        </p>
      </GlassCard>
    </div>
  )
}