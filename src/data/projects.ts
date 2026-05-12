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
  {
    slug: 'as2-aahk-controller-dashboard',
    title: 'AS2 Controller Dashboard Revamp',
    client: 'Hong Kong International Airport (AAHK)',
    role: 'UI/UX Designer',
    timeline: '2024',
    tools: ['Figma'],
    tags: ['Enterprise', 'Dashboard', 'Aviation', 'Data Visualization'],
    featured: false,
    thumbnail: '',
    heroImage: '',
    summary:
      'Revamped the airport apron control dashboard at Hong Kong International Airport, introducing visual body type icons and color-coded bay type indicators that help controllers identify flight configurations at a glance, reducing cognitive load during peak hours.',
    metrics: [
      { label: 'Clicks reduced per operation', value: '~60%' },
      { label: 'Scanning efficiency', value: '2.5x faster' },
      { label: 'Controller satisfaction', value: 'High' },
    ],
    order: 7,
  },
  {
    slug: 'vehicle-tracker-geo-fence',
    title: 'Vehicle Tracker — GEO Fence Platform',
    client: 'Airport Operations',
    role: 'UI/UX Designer',
    timeline: '2023',
    tools: ['Figma'],
    tags: ['IoT', 'Dashboard', 'Mobile', 'Aviation'],
    featured: false,
    thumbnail: '',
    heroImage: '',
    summary:
      'Designed a real-time vehicle tracking system with custom GEO fences for airport apron operations, enabling dispatchers and ground crews to monitor 20+ vehicles across multi-platform mobile and web dashboards.',
    metrics: [
      { label: 'Coordination time reduced', value: '-40%' },
      { label: 'Unauthorized access incidents', value: '-65%' },
      { label: 'Task success rate', value: '95%' },
    ],
    order: 8,
  },
  {
    slug: 'asset-world-corporation-connext',
    title: 'AWC Connext — Asset World App',
    client: 'Asset World Corporation',
    role: 'Lead UI/UX Designer',
    timeline: '2021',
    tools: ['Adobe XD', 'Figma', 'Miro'],
    tags: ['Property', 'Mobile App', 'Enterprise', 'Design System'],
    featured: false,
    thumbnail: '',
    heroImage: '',
    summary:
      'Designed a comprehensive mobile app for Thailand\'s premium office buildings, integrating maintenance requests, QR smart pass, visitor management, and a gamified loyalty program — transforming tenant experience across 3+ buildings.',
    metrics: [
      { label: 'Request resolution', value: '62% faster' },
      { label: 'App adoption rate', value: '78%' },
      { label: 'Loyalty participation', value: '15% → 52%' },
    ],
    order: 9,
  },
  {
    slug: 'cic-merchant-takeaway',
    title: 'CIC Merchant Takeaway System',
    client: 'CardApp',
    role: 'Lead UI/UX Designer',
    timeline: 'Jan–Mar 2021',
    tools: ['Figma', 'Miro'],
    tags: ['Food', 'Mobile App', 'Dual-Sided', 'MVP'],
    featured: false,
    thumbnail: '',
    heroImage: '',
    summary:
      'Designed a dual-sided food ordering system for CardApp\'s residential communities, featuring a user app for residents and a merchant app for restaurant owners, with real-time 3-stage order tracking.',
    metrics: [
      { label: 'Restaurants onboarded', value: '15' },
      { label: 'Task success rate', value: '85%' },
      { label: 'Avg. order placement', value: '~2 min' },
    ],
    order: 10,
  },
  {
    slug: 'citysuper-lucky-draw',
    title: 'c!ty\'super Online Lucky Draw',
    client: 'c!ty\'super',
    role: 'Lead UX/UI Designer',
    timeline: 'Jun–Aug 2016',
    tools: ['Sketch', 'InVision', 'Adobe Illustrator'],
    tags: ['Events', 'E-commerce', 'Responsive Web', 'Campaign'],
    featured: false,
    thumbnail: '',
    heroImage: '',
    summary:
      'Designed an interactive online lucky draw campaign for c!ty\'super\'s summer promotion, featuring progressive disclosure registration and mobile-first experience that drove 12,500 participants with 89% form completion.',
    metrics: [
      { label: 'Total participants', value: '12,500' },
      { label: 'Form completion rate', value: '89%' },
      { label: 'Mobile conversion', value: '72%' },
    ],
    order: 11,
  },
  {
    slug: 'road-to-ultra-pos',
    title: 'Road To Ultra 2016 POS System',
    client: 'Road To Ultra Hong Kong',
    role: 'Lead UI/UX Designer',
    timeline: '2016',
    tools: ['Sketch', 'InVision', 'Adobe Illustrator'],
    tags: ['Events', 'POS System', 'RFID', 'Offline-First'],
    featured: false,
    thumbnail: '',
    heroImage: '',
    summary:
      'Designed a festival-proof RFID cashless payment system for 20,000+ attendees, featuring extra-large touch targets, offline-first architecture, and single-tap transactions across 50+ vendor booths.',
    metrics: [
      { label: 'Transactions processed', value: '15,247' },
      { label: 'Avg. transaction time', value: '8.2 sec' },
      { label: 'Vendor satisfaction', value: '91%' },
    ],
    order: 12,
  },
  {
    slug: 'iddf-2016-eposter',
    title: 'IDDF 2016 ePoster & Lucky Draw',
    client: 'CUHK Faculty of Medicine',
    role: 'UI/UX Designer',
    timeline: '2016',
    tools: ['Sketch'],
    tags: ['Events', 'Kiosk', 'Healthcare', 'Gamification'],
    featured: false,
    thumbnail: '',
    heroImage: '',
    summary:
      'Created a digital ePoster browsing system and gamified lucky draw for the International Digestive Disease Forum 2016, helping 500+ attendees navigate 200+ research posters using multi-touch kiosks.',
    metrics: [
      { label: 'Attendees', value: '500+' },
      { label: 'Research posters', value: '200+' },
      { label: 'System type', value: 'Kiosk + Tablet' },
    ],
    order: 13,
  },
  {
    slug: 'canon-photomarathon-2016',
    title: 'Canon PhotoMarathon HK 2016',
    client: 'Canon Hong Kong',
    role: 'UI/UX Designer',
    timeline: '2016',
    tools: ['Adobe XD'],
    tags: ['Events', 'Web App', 'Photography', 'Dual-Sided'],
    featured: false,
    thumbnail: '',
    heroImage: '',
    summary:
      'Designed a dual-sided photo submission and judging platform for Hong Kong\'s largest photography marathon, streamlining upload workflows for participants and enabling efficient batch review for judges.',
    metrics: [
      { label: 'Submission efficiency', value: 'Improved' },
      { label: 'Judging workflow', value: 'Streamlined' },
      { label: 'Event duration', value: 'Single day' },
    ],
    order: 14,
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
