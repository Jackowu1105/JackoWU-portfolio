import { GlassCard } from '@/components/shared/GlassCard'
import { Button } from '@/components/shared/Button'
import { experience, skillCategories } from '@/data/about'

const education = [
  {
    degree: 'BSc (Hons) Digital Media',
    school: 'University of the West of England, Bristol',
    period: '2014 — 2015',
  },
  {
    degree: 'Higher Diploma in IT for Design (Interactive Visualization)',
    school: 'Hong Kong Institute of Vocational Education (Sha Tin)',
    period: '2011 — 2014',
  },
  {
    degree: 'Foundation Diploma (Computing Stream)',
    school: 'Hong Kong Institute of Vocational Education (Kwun Tong)',
    period: '2010 — 2011',
  },
]

const certifications = [
  {
    name: 'Fundamentals of LLMs — The LLM Course',
    issuer: 'Hugging Face',
    date: 'Aug 2026',
    image: '/images/certificates/huggingface-llm-fundamentals.jpg',
  },
  {
    name: 'Work Smarter with AI',
    issuer: 'Canva',
    date: 'Aug 2026',
    image: '/images/certificates/canva-work-smarter-with-ai.jpg',
  },
  {
    name: 'Marketing with Canva',
    issuer: 'Canva',
    date: 'Aug 2026',
    image: '/images/certificates/canva-marketing.jpg',
  },
  {
    name: 'Graphic Design Essentials',
    issuer: 'Canva',
    date: 'Aug 2026',
    image: '/images/certificates/canva-graphic-design-essentials.jpg',
  },
  {
    name: 'Canva Essentials',
    issuer: 'Canva',
    date: 'Aug 2026',
    image: '/images/certificates/canva-essentials.jpg',
  },
  {
    name: 'User Interface Design',
    issuer: 'University of Minnesota',
    date: 'Nov 2023',
    image: '/images/certificates/ui-design-minnesota.jpg',
  },
  {
    name: 'Responsive Web Design Certification',
    issuer: 'freeCodeCamp',
    date: 'Nov 2023',
    image: '/images/certificates/responsive-web-freecodecamp.png',
  },
  {
    name: 'Foundations of User Experience (UX) Design',
    issuer: 'Google',
    date: 'Nov 2021',
    image: '/images/certificates/ux-foundations-google.jpg',
  },
  {
    name: 'Start the UX Design Process: Empathize, Define, and Ideate',
    issuer: 'Google',
    date: 'Jun 2023',
    image: '/images/certificates/ux-empathize-google.jpg',
  },
  {
    name: '從入門到業界實戰 — UI/UX 前端網頁設計',
    issuer: 'Hahow',
    date: 'Aug 2020',
    image: '/images/certificates/uiux-hahow.png',
  },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-12 py-16">
      {/* Header */}
      <div className="mb-16">
        <p className="text-text-tertiary text-sm font-medium tracking-widest uppercase mb-3">
          About
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
          Designer,<br />
          <span className="text-accent-gold">code enthusiast.</span>
        </h1>
        <p className="text-text-secondary leading-relaxed text-lg md:whitespace-nowrap">
          8+ years designing products across fintech, IoT, aviation, and property tech —
          now shipping front-end code with AI-assisted workflows.
        </p>
      </div>

      {/* Bio */}
      <section className="mb-20">
        <GlassCard hover={false} className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Portrait placeholder */}
            <div
              className="shrink-0 w-32 h-32 rounded-2xl flex items-center justify-center relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(55,132,138,0.15) 0%, rgba(196,168,130,0.15) 100%)',
                border: '1px solid rgba(255,255,255,0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span
                className="text-4xl font-bold text-text-tertiary/60"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                JW
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Hi, I&apos;m Jacko Wu
              </h2>
              <div className="space-y-3 text-text-secondary leading-relaxed">
                <p>
                  I&apos;m a UX/UI Designer with 8+ years across fintech, IoT, aviation, property tech,
                  and logistics — based in Hong Kong. I&apos;ve shipped 30+ real products with clients
                  ranging from the Hong Kong International Airport and MTR Corporation to AIFT
                  (an InnoHK AI fintech lab backed by the Hong Kong government) and MOMAX.
                </p>
                <p>
                  More recently, I&apos;ve evolved from a pure designer into a <strong className="text-text-primary">design-engineer hybrid</strong> —
                  using AI-assisted development and vibe coding to ship front-end products myself.
                  My most recent project, FUNDel, is a 16-page logistics platform I designed and
                  built solo: ~31k lines across ~1,300 commits, ~88% AI-authored under my direction,
                  delivered as a working MVP without an engineering team.
                </p>
                <p>
                  What drives me is simplifying complexity — taking a dense regulatory requirement or a
                  multi-stakeholder logistics flow and turning it into something a person can actually
                  use. I build design systems so teams can move fast without breaking consistency, and
                  I use AI to compress the gap between idea and shipped product. When I&apos;m not
                  designing or coding, I&apos;m exploring new AI tools and workflows to stay at the
                  frontier of what one person can build.
                </p>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Experience */}
      <section className="mb-20">
        <div className="mb-8">
          <p className="text-text-tertiary text-sm font-medium tracking-widest uppercase mb-2">
            Career
          </p>
          <h2 className="text-3xl font-bold text-text-primary">Experience</h2>
        </div>
        <div className="space-y-5">
          {experience.map((item, i) => (
            <GlassCard key={i} className="p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-3">
                <div>
                  <h3 className="font-bold text-text-primary">{item.role}</h3>
                  <p className="text-sm text-teal font-medium">{item.company}</p>
                </div>
                <span className="text-sm text-text-tertiary whitespace-nowrap shrink-0">
                  {item.period}
                </span>
              </div>
              <ul className="space-y-1.5">
                {item.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-text-secondary leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full bg-teal/40" />
                    {h}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-20">
        <div className="mb-8">
          <p className="text-text-tertiary text-sm font-medium tracking-widest uppercase mb-2">
            Background
          </p>
          <h2 className="text-3xl font-bold text-text-primary">Education</h2>
        </div>
        <div className="space-y-4">
          {education.map((item, i) => (
            <GlassCard key={i} hover={false} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-semibold text-text-primary">{item.degree}</h3>
                <p className="text-sm text-text-secondary">{item.school}</p>
              </div>
              <span className="text-sm text-text-tertiary whitespace-nowrap">{item.period}</span>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-20">
        <div className="mb-8">
          <p className="text-text-tertiary text-sm font-medium tracking-widest uppercase mb-2">
            Credentials
          </p>
          <h2 className="text-3xl font-bold text-text-primary">Certifications</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <GlassCard key={i} hover={false} className="p-4 flex flex-col overflow-hidden">
              <div className="rounded-lg overflow-hidden bg-bg-elevated mb-4 aspect-[4/3] flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={`${cert.name} — ${cert.issuer}`}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-text-primary text-sm leading-snug mb-1">
                {cert.name}
              </h3>
              <p className="text-xs text-text-secondary">{cert.issuer}</p>
              <p className="text-xs text-text-tertiary mt-1">{cert.date}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <div className="mb-8">
          <p className="text-text-tertiary text-sm font-medium tracking-widest uppercase mb-2">
            Expertise
          </p>
          <h2 className="text-3xl font-bold text-text-primary">Skills &amp; Tools</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {Object.entries(skillCategories).map(([category, items]) => (
            <GlassCard key={category} className="p-6">
              <h3 className="font-semibold text-text-primary mb-4 text-sm tracking-widest uppercase">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-lg bg-white/50 text-text-secondary border border-[#C4A882]/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Resume CTA */}
      <section className="text-center">
        <GlassCard hover={false} className="p-10">
          <h2 className="text-2xl font-bold text-text-primary mb-3">Want the full story?</h2>
          <p className="text-text-secondary mb-6 max-w-md mx-auto">
            Download my resume for a complete overview of my experience and skills.
          </p>
          <Button href="/resume" variant="primary">
            Download resume
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 10v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3M4 7l4 4 4-4M8 11V2" />
            </svg>
          </Button>
        </GlassCard>
      </section>
    </div>
  )
}
