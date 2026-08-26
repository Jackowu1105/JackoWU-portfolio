import { projects } from '@/data/projects'
import { WorkGallery } from '@/components/work/WorkGallery'

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-12 py-16">
      {/* Header */}
      <div className="mb-14">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-gold mb-3">
          Selected Work
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
          30+ products shipped across 5 industries
        </h1>
        <p className="text-text-secondary leading-relaxed max-w-2xl">
          {projects.length} case studies across fintech, IoT, aviation, property tech, and logistics —
          each one a deep dive into the design decisions, trade-offs, and real-world constraints
          that shaped the final product.
        </p>
      </div>

      <WorkGallery projects={projects} />
    </div>
  )
}