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
          Design that works under real constraints
        </h1>
        <p className="text-text-secondary leading-relaxed max-w-2xl">
          {projects.length} projects across UX &amp; product design, graphic design, and motion —
          each a deep dive into the design process, decisions, and trade-offs.
        </p>
      </div>

      <WorkGallery projects={projects} />
    </div>
  )
}