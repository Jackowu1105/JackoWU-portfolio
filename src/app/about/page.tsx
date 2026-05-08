import { Button } from '@/components/shared/Button'

const experience = [
  { role: 'Lead UI/UX Designer', company: 'Freelance / Agency', period: '2018–Present' },
  { role: 'UI/UX Designer', company: 'Various Clients', period: '2015–2018' },
  { role: 'Graphic Designer', company: 'Creative Studio', period: '2013–2015' },
]

const skills = {
  Design: ['UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Interaction Design', 'User Testing', 'Information Architecture'],
  Tools: ['Figma', 'Adobe XD', 'Sketch', 'Miro', 'Maze', 'Principle', 'InVision', 'Zeplin'],
  'Learning': ['HTML / CSS', 'React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1C1814] mb-4">
          About
        </h1>
        <p className="text-[#8A8480] max-w-lg leading-relaxed text-lg">
          Designer by craft, problem-solver by nature.
        </p>
      </div>

      {/* Bio */}
      <section className="mb-20">
        <div className="glass-card p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Portrait placeholder */}
            <div className="shrink-0 w-32 h-32 rounded-2xl bg-black/5 flex items-center justify-center text-[#B8B2AE] text-xs">
              Photo
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1C1814] mb-4">
                Hi, I&apos;m Jacko
              </h2>
              <div className="space-y-3 text-[#8A8480] leading-relaxed">
                <p>
                  I&apos;m a UX/UI Designer based in Hong Kong, passionate about crafting
                  digital experiences that are as functional as they are beautiful.
                  My work spans IoT smart home apps, enterprise dashboards, property
                  tech platforms, and large-scale event systems.
                </p>
                <p>
                  I believe great design starts with understanding people — their
                  needs, frustrations, and context. Every pixel and interaction should
                  serve a purpose. I thrive at the intersection of user research,
                  visual craft, and technical feasibility.
                </p>
                <p>
                  When I&apos;m not designing, I&apos;m learning to code — building this
                  portfolio from scratch is part of that journey. I believe designers
                  who understand code make better decisions and collaborate more
                  effectively with developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-[#1C1814] mb-8">Experience</h2>
        <div className="space-y-4">
          {experience.map((item, i) => (
            <div key={i} className="glass-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-semibold text-[#1C1814]">{item.role}</h3>
                <p className="text-sm text-[#8A8480]">{item.company}</p>
              </div>
              <span className="text-sm text-[#B8B2AE]">{item.period}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-[#1C1814] mb-8">Skills &amp; Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="glass-card p-6">
              <h3 className="font-semibold text-[#1C1814] mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-lg bg-black/5 text-[#8A8480] border border-black/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resume CTA */}
      <section className="text-center">
        <div className="glass-card p-10">
          <h2 className="text-xl font-bold text-[#1C1814] mb-3">Want the full story?</h2>
          <p className="text-[#8A8480] mb-6">Download my resume for a complete overview.</p>
          <Button href="/resume" variant="primary">
            Download resume
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 10v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3M4 7l4 4 4-4M8 11V2" />
            </svg>
          </Button>
        </div>
      </section>
    </div>
  )
}