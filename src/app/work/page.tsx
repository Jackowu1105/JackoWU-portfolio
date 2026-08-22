import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/work/ProjectCard'

export default function WorkPage() {
  const sorted = [...projects].sort((a, b) => a.order - b.order)
  const featured = sorted.filter((p) => p.featured)
  const rest = sorted.filter((p) => !p.featured)

  return (
    <div className="mx-auto max-w-6xl px-6 md:px-12 py-16">
      {/* Header */}
      <div className="mb-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-gold mb-3">
          Selected Work
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
          Design that works under real constraints
        </h1>
        <p className="text-text-secondary leading-relaxed max-w-2xl">
          {projects.length} projects across IoT, property tech, enterprise dashboards,
          and events — each a deep dive into the design process, decisions, and trade-offs.
        </p>
      </div>

      {/* Featured */}
      <section className="mb-20">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
            Featured
          </h2>
          <span className="text-xs text-text-tertiary font-mono">{featured.length} projects</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              variant="featured"
            />
          ))}
        </div>
      </section>

      {/* More work */}
      <section>
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
            More projects
          </h2>
          <span className="text-xs text-text-tertiary font-mono">{rest.length} projects</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={featured.length + i}
              variant="compact"
            />
          ))}
        </div>
      </section>
    </div>
  )
}