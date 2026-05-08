import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/work/ProjectCard'

export default function WorkPage() {
  const sorted = [...projects].sort((a, b) => a.order - b.order)

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1C1814] mb-4">
          Work
        </h1>
        <p className="text-[#8A8480] max-w-lg leading-relaxed">
          A collection of projects across IoT, property tech, enterprise, and
          events &mdash; each with a deep dive into the design process.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
