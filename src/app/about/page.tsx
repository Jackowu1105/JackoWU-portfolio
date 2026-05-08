import { GlassCard } from '@/components/shared/GlassCard'
import { Button } from '@/components/shared/Button'

const experience = [
  {
    role: 'UX/UI Designer',
    company: 'Laboratory for AI-Powered Financial Technologies Limited (AIFT)',
    period: '10 / 2024 — Present',
    highlights: [
      'Designed end-to-end UI/UX for AI-powered fintech platforms including supply chain finance (TOLO Analysis), AI-driven financial research assistant (FinSights), and trade finance platform (Fundel)',
      'Produced exhibition materials, brand identity, and AI-generated video content for industry events',
      'Delivered front-end web interfaces via AI-assisted coding, bridging design and development',
    ],
  },
  {
    role: 'UI/UX Designer',
    company: 'UbiZense Ltd.',
    period: '08 / 2022 — 10 / 2024',
    highlights: [
      'Led UI/UX design of a comprehensive airport logistics dashboard integrating IoT devices and Ground Support Equipment',
      'Designed real-time operational dashboards for airport ground operations',
      'Established branding and design language in collaboration with CUHK engineering team',
    ],
  },
  {
    role: 'UI/UX Designer',
    company: 'MOMAX Technology (Hong Kong) Limited',
    period: '01 / 2021 — 08 / 2022',
    highlights: [
      'Designed smart home ecosystems integrating IoT hardware, cloud infrastructure, and mobile applications',
      'Led "Smart-D," a co-branded project in collaboration with HKBN',
      'Managed IoT platform and mobile app versioning for cross-device compatibility',
    ],
  },
  {
    role: 'UI/UX Designer',
    company: 'Hong Kong CardApp Limited',
    period: '04 / 2019 — 01 / 2021',
    highlights: [
      'Designed digital solutions for property development and management, integrating IoT, cloud, and mobile technologies',
      'Led end-to-end design for property apps, food ordering systems, loyalty programmes, and property inspection systems',
    ],
  },
  {
    role: 'Designer',
    company: 'Cypress Green Co. Limited',
    period: '06 / 2017 — 03 / 2019',
    highlights: [
      'Focused on graphic design and digital design across various client projects',
      'Built a strong foundation in visual communication and brand identity',
    ],
  },
  {
    role: 'UI/UX Designer',
    company: 'Rentech Service Limited',
    period: '05 / 2016 — 05 / 2017',
    highlights: [
      'Designed theme pages for POS and e-Registration systems',
      'Analysed business requirements and devised system solutions balancing usability with business goals',
    ],
  },
]

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
  'User Interface Design — University of Minnesota (2023)',
  'Responsive Web Design — freeCodeCamp (2023)',
  'Start the UX Design Process: Empathize, Define, and Ideate — Google (2023)',
  'Foundations of User Experience (UX) Design — Google (2021)',
  'From Beginner to Industry Practice: UI/UX Front-End Web Design — Hahow (2020)',
]

const skills = {
  Design: [
    'UI/UX Design',
    'Interaction Design',
    'Design Systems',
    'Prototyping',
    'Brand Identity',
  ],
  'Design-Engineer': [
    'AI + Vibe Coding',
    'Front-End Development',
    'React, Next.js',
    'Tailwind CSS',
    'TypeScript',
  ],
  Tools: [
    'Figma',
    'Adobe Creative Suite',
    'Motion Graphics',
    'AI Video Production',
    'Rapid Prototyping',
  ],
  Domain: [
    'Fintech',
    'IoT',
    'Data-Driven Product Design',
    'Cross-Functional Collaboration',
    'Exhibition Graphic Design',
  ],
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-12 py-16">
      {/* Header */}
      <div className="mb-16">
        <p className="text-[#B8B2AE] text-sm font-medium tracking-widest uppercase mb-3">
          About
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1C1814] mb-4">
          Designer,<br />
          <span className="text-[#C4A882]">code enthusiast.</span>
        </h1>
        <p className="text-[#8A8480] max-w-xl leading-relaxed text-lg">
          A UX/UI Designer evolving into a design-engineer hybrid — turning ideas into
          real products with AI-assisted workflows.
        </p>
      </div>

      {/* Bio */}
      <section className="mb-20">
        <GlassCard hover={false} className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Portrait placeholder */}
            <div className="shrink-0 w-32 h-32 rounded-2xl bg-black/5 flex items-center justify-center text-[#B8B2AE] text-xs">
              Photo
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1C1814] mb-4">
                Hi, I&apos;m Jacko Wu
              </h2>
              <div className="space-y-3 text-[#8A8480] leading-relaxed">
                <p>
                  A UX/UI Designer with over 8 years of experience spanning system design,
                  product design, and branding across fintech, IoT, and logistics industries.
                  Based in Hong Kong, I&apos;ve had the privilege of working with research labs,
                  universities, and product teams to ship digital experiences that matter.
                </p>
                <p>
                  In recent years, I&apos;ve undergone a transformative shift — evolving from a
                  pure designer into a <strong className="text-[#1C1814]">design-engineer hybrid</strong> —
                  by embracing AI-assisted development and vibe coding workflows. This evolution
                  lets me independently translate design concepts into fully functional front-end
                  applications, bridging the gap between vision and delivery with remarkable efficiency.
                </p>
                <p>
                  I&apos;m passionate about leveraging AI tools to augment creativity, accelerate
                  prototyping, and deliver end-to-end product experiences that are both visually
                  compelling and technically sound. When I&apos;m not designing or coding, you&apos;ll
                  find me exploring new tools, contributing to open source, or pushing the
                  boundaries of what a designer-engineer can create.
                </p>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Experience */}
      <section className="mb-20">
        <div className="mb-8">
          <p className="text-[#B8B2AE] text-sm font-medium tracking-widest uppercase mb-2">
            Career
          </p>
          <h2 className="text-3xl font-bold text-[#1C1814]">Experience</h2>
        </div>
        <div className="space-y-5">
          {experience.map((item, i) => (
            <GlassCard key={i} className="p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-3">
                <div>
                  <h3 className="font-bold text-[#1C1814]">{item.role}</h3>
                  <p className="text-sm text-[#C4A882] font-medium">{item.company}</p>
                </div>
                <span className="text-sm text-[#B8B2AE] whitespace-nowrap shrink-0">
                  {item.period}
                </span>
              </div>
              <ul className="space-y-1.5">
                {item.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-[#8A8480] leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full bg-[#C4A882]/40" />
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
          <p className="text-[#B8B2AE] text-sm font-medium tracking-widest uppercase mb-2">
            Background
          </p>
          <h2 className="text-3xl font-bold text-[#1C1814]">Education</h2>
        </div>
        <div className="space-y-4">
          {education.map((item, i) => (
            <GlassCard key={i} hover={false} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-semibold text-[#1C1814]">{item.degree}</h3>
                <p className="text-sm text-[#8A8480]">{item.school}</p>
              </div>
              <span className="text-sm text-[#B8B2AE] whitespace-nowrap">{item.period}</span>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-20">
        <div className="mb-8">
          <p className="text-[#B8B2AE] text-sm font-medium tracking-widest uppercase mb-2">
            Credentials
          </p>
          <h2 className="text-3xl font-bold text-[#1C1814]">Certifications</h2>
        </div>
        <GlassCard hover={false} className="p-6 md:p-8">
          <ul className="space-y-3">
            {certifications.map((cert, i) => (
              <li key={i} className="flex items-start gap-3 text-[#8A8480]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C4A882"
                  strokeWidth="2"
                  className="shrink-0 mt-0.5"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <div className="mb-8">
          <p className="text-[#B8B2AE] text-sm font-medium tracking-widest uppercase mb-2">
            Expertise
          </p>
          <h2 className="text-3xl font-bold text-[#1C1814]">Skills &amp; Tools</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {Object.entries(skills).map(([category, items]) => (
            <GlassCard key={category} className="p-6">
              <h3 className="font-semibold text-[#1C1814] mb-4 text-sm tracking-widest uppercase">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-lg bg-white/50 text-[#8A8480] border border-[#C4A882]/20"
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
          <h2 className="text-2xl font-bold text-[#1C1814] mb-3">Want the full story?</h2>
          <p className="text-[#8A8480] mb-6 max-w-md mx-auto">
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
