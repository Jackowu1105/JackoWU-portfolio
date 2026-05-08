import { Button } from '@/components/shared/Button'

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1C1814] mb-4">
          Resume
        </h1>
        <p className="text-[#8A8480] max-w-lg leading-relaxed text-lg">
          A concise overview of my experience, skills, and background.
        </p>
      </div>

      {/* Download card */}
      <div className="glass-card p-12 text-center mb-12">
        <h2 className="text-2xl font-bold text-[#1C1814] mb-3">
          Download my resume
        </h2>
        <p className="text-[#8A8480] mb-8 max-w-md mx-auto">
          Available as a PDF. Feel free to download and share with your team.
        </p>
        <Button href="/resume.pdf" variant="primary" external>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 10v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3M4 7l4 4 4-4M8 11V2" />
          </svg>
          Download PDF
        </Button>
      </div>

      {/* Preview note */}
      <div className="glass-card p-8 text-center">
        <p className="text-[#B8B2AE] text-sm">
          A PDF resume will be added here. For now, visit the{' '}
          <a href="/about" className="text-[#8A8480] hover:text-[#1C1814] underline transition-colors">
            About page
          </a>{' '}
          for experience and skills.
        </p>
      </div>
    </div>
  )
}