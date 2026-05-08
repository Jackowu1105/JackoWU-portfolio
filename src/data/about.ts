export interface ExperienceItem {
  role: string
  company: string
  period: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
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

export const skillCategories: Record<string, string[]> = {
  Design: [
    'UI Design',
    'UX Design',
    'Interaction Design',
    'Design Systems',
    'Prototyping',
    'Brand Identity',
    'Motion Graphics',
  ],
  'Design-Engineer': [
    'AI + Vibe Coding',
    'Front-End Development',
    'React',
    'Next.js',
    'Vue.js',
    'Tailwind CSS',
    'TypeScript',
    'Framer',
    'AI Video Production',
  ],
  'Tools & Platforms': [
    'Figma',
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Adobe Lightroom',
    'Adobe Premiere Pro',
    'Adobe After Effects',
    'Canva',
    'VS Code',
    'Cursor',
    'Claude AI',
    'GitHub Copilot',
    'Lovable',
    'GitHub',
    'Microsoft Office',
  ],
  Domain: [
    'Fintech',
    'IoT',
    'Smart Home',
    'Property Technology',
    'Airport Operations',
    'Logistics',
    'Data-Driven Product Design',
    'Cross-Functional Collaboration',
    'Exhibition Graphic Design',
  ],
}

/** Flat list of all skill names, useful for tag displays */
export const allSkills: string[] = Object.values(skillCategories).flat()

/** Skills from Design and Design-Engineer categories only (for Home page) */
export const homeSkills: string[] = [
  ...skillCategories['Design'],
  ...skillCategories['Design-Engineer'],
]
