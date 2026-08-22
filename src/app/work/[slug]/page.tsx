import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProject, getAdjacentProjects } from '@/data/projects'
import { CaseStudyHero } from '@/components/case-study/CaseStudyHero'
import { ReadingProgress } from '@/components/case-study/ReadingProgress'
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
          <div className="case-study-body">
            <MDXContent />
          </div>
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

        {/* Highlights — 誠實質化重點（取代假量化 metrics） */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-[#1C1814] mb-6">Highlights</h2>
          <GlassCard hover={false} className="p-8">
            <ul className="flex flex-col gap-5">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 w-2 h-2 rounded-full bg-[#c9a74d] flex-shrink-0"
                  />
                  <p className="text-[#494551] leading-relaxed text-lg">{highlight}</p>
                </li>
              ))}
            </ul>
          </GlassCard>
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
