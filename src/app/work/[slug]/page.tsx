import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProject, getAdjacentProjects } from '@/data/projects'
import { CaseStudyHero } from '@/components/case-study/CaseStudyHero'
import { ReadingProgress } from '@/components/case-study/ReadingProgress'
import { MetricCard } from '@/components/case-study/MetricCard'
import { NextProject } from '@/components/case-study/NextProject'
import { GlassCard } from '@/components/shared/GlassCard'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Jacko`,
      description: project.summary,
      type: 'article',
    },
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) notFound()

  const { next } = getAdjacentProjects(slug)

  // Dynamically import the MDX content
  let MDXContent: React.ComponentType | null = null
  try {
    MDXContent = (await import(`@/content/case-studies/${slug}.mdx`)).default
  } catch {
    // MDX file doesn't exist yet — will be created in Phase 3
  }

  return (
    <>
      <ReadingProgress />
      <CaseStudyHero project={project} />

      <article className="mx-auto max-w-6xl px-6 md:px-12 py-16">
        {/* MDX content if available */}
        {MDXContent ? (
          <MDXContent />
        ) : (
          <>
            {/* Fallback: summary-based content */}
            <section className="mb-20">
              <h2 className="text-2xl font-bold text-[#1C1814] mb-6">Overview</h2>
              <GlassCard hover={false} className="p-8">
                <p className="text-[#8A8480] leading-relaxed text-lg">
                  {project.summary}
                </p>
              </GlassCard>
            </section>

            <section className="mb-20">
              <GlassCard hover={false} className="p-8 text-center">
                <p className="text-[#B8B2AE] text-sm">
                  Full case study coming soon. The detailed UX process — problem
                  definition, research methods, design iterations, and final
                  solutions — will appear here.
                </p>
              </GlassCard>
            </section>
          </>
        )}

        {/* Impact / Metrics — always shown */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-[#1C1814] mb-6">Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((metric, i) => (
              <MetricCard
                key={metric.label}
                label={metric.label}
                value={metric.value}
                delay={i * 0.1}
              />
            ))}
          </div>
        </section>
      </article>

      <NextProject project={next} />
    </>
  )
}

export async function generateStaticParams() {
  const { projects } = await import('@/data/projects')
  return projects.map((p) => ({ slug: p.slug }))
}
