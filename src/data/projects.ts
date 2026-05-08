export interface Project {
  slug: string
  title: string
  client: string
  role: string
  timeline: string
  tools: string[]
  tags: string[]
  featured: boolean
  thumbnail: string
  heroImage: string
  summary: string
  metrics: { label: string; value: string }[]
  order: number
}

// 6 featured case studies — real data from Jacko's work
export const projects: Project[] = [
  {
    slug: 'momax-smart-app',
    title: 'MOMAX Smart App Redesign',
    client: 'MOMAX',
    role: 'Lead UI/UX Designer',
    timeline: 'Jan–Apr 2022',
    tools: ['Figma', 'Maze', 'Miro', 'Google Analytics'],
    tags: ['IoT', 'Mobile App', 'Design System', 'iOS & Android'],
    featured: true,
    thumbnail: '',
    heroImage: '',
    summary:
      'Redesigned the smart home control app for 50+ IoT devices, improving device setup success rate by 78% and increasing 30-day retention by 61% through a complete UX overhaul and new design system.',
    metrics: [
      { label: 'Device setup success', value: '+78%' },
      { label: '30-day retention', value: '+61%' },
      { label: 'Support tickets reduced', value: '-60%' },
    ],
    order: 1,
  },
  {
    slug: 'ontolo-residential-app',
    title: 'ONTOLO Residential App',
    client: 'Great Eagle Holdings',
    role: 'Lead UI/UX Designer',
    timeline: 'Q1–Q2 2019',
    tools: ['Adobe XD', 'Sketch', 'InVision', 'UsabilityHub'],
    tags: ['Property', 'Accessibility', 'Multi-Generational', 'WCAG'],
    featured: true,
    thumbnail: '',
    heroImage: '',
    summary:
      'Designed a dual-mode adaptive interface serving elderly, children, and adult residents. The accessibility-first approach achieved WCAG 2.1 AA compliance and set a new standard for inclusive property apps.',
    metrics: [
      { label: 'User satisfaction', value: '92%' },
      { label: 'Task completion (elderly)', value: '+55%' },
      { label: 'Support call reduction', value: '-45%' },
    ],
    order: 2,
  },
  {
    slug: 'wine-dine-festival-pos',
    title: 'HK Wine & Dine Festival POS',
    client: 'Hong Kong Tourism Board',
    role: 'UI/UX Designer',
    timeline: '2016',
    tools: ['Sketch', 'InVision', 'Principle'],
    tags: ['Events', 'POS System', 'Offline-First', 'RFID'],
    featured: true,
    thumbnail: '',
    heroImage: '',
    summary:
      'Designed an offline-first POS system for 150,000+ attendees across 250+ vendors. The dual-sided system (attendee + vendor) processed 50,000+ transactions under unreliable outdoor connectivity.',
    metrics: [
      { label: 'Transactions processed', value: '50,000+' },
      { label: 'Vendors served', value: '250+' },
      { label: 'Attendees', value: '150,000+' },
    ],
    order: 3,
  },
  {
    slug: 'consonance-smart-building',
    title: 'Consonance Smart Building Plus',
    client: 'Consonance',
    role: 'UI/UX Designer',
    timeline: '2020',
    tools: ['Figma', 'Miro', 'Zeplin'],
    tags: ['IoT', 'Property', 'Luxury Brand', 'Smart Home'],
    featured: true,
    thumbnail: '',
    heroImage: '',
    summary:
      'Designed the smart building experience for luxury residential estates — integrating door access, mailboxes, lifts, and clubhouse booking into a cohesive mobile-first interface that achieved 72% resident adoption.',
    metrics: [
      { label: 'Resident adoption', value: '72%' },
      { label: 'Service calls reduced', value: '-45%' },
      { label: 'Clubhouse bookings', value: '+60%' },
    ],
    order: 4,
  },
  {
    slug: 'mtr-property-app',
    title: 'MTR Property App',
    client: 'MTR Corporation',
    role: 'UI/UX Designer',
    timeline: '2021',
    tools: ['Figma', 'Abstract', 'Maze'],
    tags: ['Property', 'Design System', 'Dynamic Theming', 'WCAG'],
    featured: true,
    thumbnail: '',
    heroImage: '',
    summary:
      'Created a scalable design system with dynamic color theming for 28 residential estates — each with a distinct identity while sharing one app architecture. Ensured WCAG compliance across all 28 themes.',
    metrics: [
      { label: 'Estates served', value: '28' },
      { label: 'Theme variants', value: '28' },
      { label: 'App rating', value: '4.6/5' },
    ],
    order: 5,
  },
  {
    slug: 'zproduct-dashboard',
    title: 'zProduct — Airport Logistics Dashboard',
    client: 'Aviation Logistics',
    role: 'UI/UX Designer',
    timeline: '2019',
    tools: ['Figma', 'Sketch', 'Miro'],
    tags: ['Enterprise', 'Dashboard', 'Data Visualization', 'Aviation'],
    featured: true,
    thumbnail: '',
    heroImage: '',
    summary:
      'Redesigned an enterprise dashboard for airport cargo logistics, turning dense operational data into clear, actionable views. Introduced configurable widgets that empowered users to personalize their workspace.',
    metrics: [
      { label: 'Time to insight', value: '-40%' },
      { label: 'User customization', value: '85%' },
      { label: 'Operator satisfaction', value: '89%' },
    ],
    order: 6,
  },
]

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.order - b.order)

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProjects(slug: string) {
  const featured = featuredProjects
  const index = featured.findIndex((p) => p.slug === slug)
  return {
    prev: index > 0 ? featured[index - 1] : null,
    next: index < featured.length - 1 ? featured[index + 1] : null,
  }
}
