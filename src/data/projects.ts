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
  highlights: string[]
  // 專案主色板（由真實截圖提取：surface / primary / accent / dark）
  palette: string[]
  order: number
}

// 17 case studies. Palettes extracted from real screenshots.
// Ordering: representativeness + variety + recency-first. Featured = strongest UX case studies.
export const projects: Project[] = [
  {
    slug: 'as2-aahk-controller-dashboard',
    title: 'AS2 Controller Dashboard Revamp',
    client: 'Hong Kong International Airport (AAHK)',
    role: 'UI/UX Designer',
    timeline: '2024',
    tools: ['Figma'],
    tags: ['Enterprise', 'Dashboard', 'Aviation', 'Data Visualization'],
    featured: true,
    thumbnail: '/images/projects/as2-aahk-controller-dashboard/cover.jpg',
    heroImage: '/images/projects/as2-aahk-controller-dashboard/cover.jpg',
    summary:
      'Revamped the airport apron control dashboard so controllers can identify aircraft body type and bay type at a glance — aligning the information hierarchy with how controllers already scan the board during peak hours.',
    highlights: [
      'Body-type icons in collapsed view — controllers scan without reading text',
      'Bay type (Remote/Frontal) color-coded and paired with icon + label for color-blind safety',
      'IA aligned to the controller mental model: body type first, bay type on demand',
    ],
    palette: ['#F1F1F1', '#304666', '#172333', '#A2ADBE'],
    order: 1,
  },
  {
    slug: 'zproduct-dashboard',
    title: 'zProduct — Airport Logistics Dashboard',
    client: 'Aviation Logistics',
    role: 'UI/UX Designer',
    timeline: '2023',
    tools: ['Figma', 'FigJam'],
    tags: ['Enterprise', 'Dashboard', 'Data Visualization', 'Aviation'],
    featured: true,
    thumbnail: '/images/projects/zproduct-dashboard/cover.png',
    heroImage: '/images/projects/zproduct-dashboard/cover.png',
    summary:
      'Redesigned an airport logistics dashboard into a configurable widget system — letting each airport surface the data that matters to its operation instead of forcing one rigid layout on everyone.',
    highlights: [
      'Modular drag-and-drop widget system on a flexible grid',
      'Separated View and Edit modes to prevent accidental layout changes',
      'Preset templates for common airport types (cargo hubs vs large hubs)',
    ],
    palette: ['#F2F3F3', '#61DBB7', '#2EA7A9', '#FFDF91'],
    order: 2,
  },
  {
    slug: 'momax-smart-app',
    title: 'MOMAX Smart App Redesign',
    client: 'MOMAX',
    role: 'Lead UI/UX Designer',
    timeline: '2021',
    tools: ['Figma', 'Maze', 'Miro', 'Google Analytics'],
    tags: ['IoT', 'Mobile App', 'Design System', 'iOS & Android'],
    featured: true,
    thumbnail: '/images/projects/momax-smart-app/cover.jpg',
    heroImage: '/images/projects/momax-smart-app/cover.jpg',
    summary:
      'Led the end-to-end redesign of a smart home control app for 50+ IoT devices — restructuring the IA around rooms instead of device type, cutting setup from 7 steps to 3, and building a cross-platform design system shared across iOS and Android.',
    highlights: [
      'Restructured IA around location (rooms) instead of device type to match how users think',
      'Cut device setup from 7 steps to 3 by combining pairing with smart auto-detection',
      'Built a 42-component design system shared across iOS & Android (same IA, native visuals)',
    ],
    palette: ['#EBEBEB', '#0195E2', '#02A4DF', '#1A2F47'],
    order: 3,
  },
  {
    slug: 'ontolo-residential-app',
    title: 'ONTOLO Residential App',
    client: 'Great Eagle Holdings',
    role: 'Lead UI/UX Designer',
    timeline: '2019 (H1)',
    tools: ['Adobe XD', 'Sketch', 'InVision', 'UsabilityHub'],
    tags: ['Property', 'Accessibility', 'Multi-Generational', 'WCAG'],
    featured: true,
    thumbnail: '/images/projects/ontolo-residential-app/cover.jpg',
    heroImage: '/images/projects/ontolo-residential-app/cover.jpg',
    summary:
      'Designed a dual-mode adaptive interface serving elderly, children, and adult residents from a single app — built on the principle "simplify by default, expand on demand" so no user group is patronised or short-changed.',
    highlights: [
      'Single app with two adaptive modes (Simplified / Full) instead of separate apps',
      'Simplified mode: 60×60pt targets, WCAG AAA contrast, max 2-level navigation',
      'Research with ~20 residents aged 8–75 across demographics and digital literacy',
    ],
    palette: ['#D3E6DF', '#57A3B1', '#51A1AF', '#42677E'],
    order: 4,
  },
  {
    slug: 'mtr-property-app',
    title: 'MTR Property App',
    client: 'MTR Corporation',
    role: 'UI/UX Designer',
    timeline: '2019',
    tools: ['Adobe XD'],
    tags: ['Property', 'Design System', 'Dynamic Theming', 'WCAG'],
    featured: true,
    thumbnail: '/images/projects/mtr-property-app/cover.png',
    heroImage: '/images/projects/mtr-property-app/cover.png',
    summary:
      'Created a scalable design system with dynamic color theming for many residential estates — each estate feels like its own app while sharing one architecture, with WCAG contrast verified across every theme.',
    highlights: [
      'Dynamic per-estate theming — each estate feels like its own app, one architecture',
      'Seamless multi-estate switching without re-authentication',
      'Extended the design system to web, print leaflets, and the backend admin UI',
    ],
    palette: ['#FFFFFF', '#AD203A', '#AE233C', '#61C27A'],
    order: 5,
  },
  {
    slug: 'consonance-smart-building',
    title: 'Consonance Smart Building Plus',
    client: 'Consonance (Henderson Land)',
    role: 'UI/UX Designer',
    timeline: '2021',
    tools: ['Figma', 'Sketch', 'InVision', 'Miro'],
    tags: ['IoT', 'Property', 'Luxury Brand', 'Smart Home'],
    featured: true,
    thumbnail: '/images/projects/consonance-smart-building/cover.jpg',
    heroImage: '/images/projects/consonance-smart-building/cover.jpg',
    summary:
      'Designed the smart building app for a luxury residential estate — unifying door access, mailbox, lift, and clubhouse booking behind a single QR-based interface, with IA organised by frequency of use.',
    highlights: [
      'Unified door, mailbox, lift, and clubhouse booking into one app via QR access',
      'IA by frequency: Access Control / Reservations / Visitor Management',
      'Enlarged QR viewfinder after elderly-user testing revealed scanning struggles',
    ],
    palette: ['#151819', '#1F282E', '#364047', '#2D3030'],
    order: 6,
  },
  {
    slug: 'wine-dine-festival-pos',
    title: 'HK Wine & Dine Festival POS',
    client: 'Hong Kong Tourism Board',
    role: 'UI/UX Designer',
    timeline: '2016 (Jun–Aug)',
    tools: ['Sketch', 'InVision', 'Principle'],
    tags: ['Events', 'POS System', 'Offline-First', 'RFID'],
    featured: false,
    thumbnail: '/images/projects/wine-dine-festival-pos/cover.png',
    heroImage: '/images/projects/wine-dine-festival-pos/cover.png',
    summary:
      'Designed an offline-first cashless RFID POS for an outdoor festival — built for part-time vendors working in direct sunlight, high noise, and gloves, where the wifi was unreliable at peak hours.',
    highlights: [
      'Offline-first queue held 800+ transactions during a Day 2 wifi outage',
      'Designed for gloved hands, direct sunlight, and high ambient noise',
      'V1→V2→V3 hybrid keypad: quick-select buttons plus a custom amount entry',
    ],
    palette: ['#494D5B', '#C2A77A', '#AB8E61', '#787C8F'],
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
    thumbnail: '/images/projects/vehicle-tracker-geo-fence/cover.png',
    heroImage: '/images/projects/vehicle-tracker-geo-fence/cover.png',
    summary:
      'Designed a real-time vehicle tracking platform with custom drawable GEO fences for airport apron operations — giving dispatchers real-time visibility instead of radio and manual tracking, with a filter-first interface to cut cognitive load.',
    highlights: [
      'Custom drawable GEO fences — dispatchers adapt zones without IT',
      'Filter-first: persistent panel toggles by vehicle type, status, or zone',
      'Platform-specific: web dashboard for monitoring, mobile for on-site single-vehicle tracking',
    ],
    palette: ['#F1F8F6', '#2C677A', '#346F80', '#DAEBE9'],
    order: 8,
  },
  {
    slug: 'asset-world-corporation-connext',
    title: 'AWC Connext — Asset World App',
    client: 'Asset World Corporation',
    role: 'Lead UI/UX Designer',
    timeline: '2021',
    tags: ['Property', 'Mobile App', 'Enterprise', 'Design System'],
    tools: ['Adobe XD', 'Figma', 'Miro'],
    featured: false,
    thumbnail: '/images/projects/asset-world-corporation-connext/cover.jpg',
    heroImage: '/images/projects/asset-world-corporation-connext/cover.jpg',
    summary:
      'Designed a comprehensive mobile app for Thailand premium office buildings — integrating maintenance requests, QR smart-pass access, visitor management, and a gamified loyalty program into one tenant experience.',
    highlights: [
      'QR Smart Pass for visitor access — refreshes periodically, works offline',
      '4-tab IA (Home / Services / Access / Rewards) with progressive disclosure',
      'Gamified loyalty with progress bars and one-tap redemption at point of sale',
    ],
    palette: ['#EDF0F5', '#D6DFE8', '#454549', '#C7D0DA'],
    order: 9,
  },
  {
    slug: 'cic-merchant-takeaway',
    title: 'CIC Merchant Takeaway System',
    client: 'CardApp',
    role: 'Lead UI/UX Designer',
    timeline: '2021',
    tools: ['Figma', 'Miro'],
    tags: ['Food', 'Mobile App', 'Dual-Sided', 'MVP'],
    featured: false,
    thumbnail: '/images/projects/cic-merchant-takeaway/cover.jpg',
    heroImage: '/images/projects/cic-merchant-takeaway/cover.jpg',
    summary:
      'Designed a dual-sided food ordering system for residential communities — a user app for residents, a merchant app for restaurant owners, and a registration website, all sharing one component library.',
    highlights: [
      'Dual-sided flow: user ordering app + merchant app + registration website',
      '3-stage real-time progress (Received → Preparing → Ready) with push notifications',
      'Merchant-friendly: large single-tap status buttons for non-tech owners',
    ],
    palette: ['#FFFFFF', '#02B3B9', '#EBAD7E', '#F8B64B'],
    order: 10,
  },
  {
    slug: 'citysuper-lucky-draw',
    title: "c!ty'super Online Lucky Draw",
    client: "c!ty'super",
    role: 'Lead UX/UI Designer',
    timeline: '2016 (Jun–Aug)',
    tools: ['Sketch', 'InVision', 'Adobe Illustrator'],
    tags: ['Events', 'E-commerce', 'Responsive Web', 'Campaign'],
    featured: false,
    thumbnail: '/images/projects/citysuper-lucky-draw/cover.png',
    heroImage: '/images/projects/citysuper-lucky-draw/cover.png',
    summary:
      'Designed an interactive online lucky draw campaign for a summer promotion — using progressive disclosure and trust signals to turn a skeptical, form-averse audience into participants, mobile-first.',
    highlights: [
      'Progressive disclosure: browse products → minimal info (name + email) → instant confirmation',
      'Concept A/B/C iteration → hybrid sticky selector + wizard flow',
      'Trust signals: live participant counter, unique entry IDs, clear T&Cs',
    ],
    palette: ['#1C1710', '#494E5C', '#777C8F', '#8B94A4'],
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
    thumbnail: '/images/projects/road-to-ultra-pos/cover.jpeg',
    heroImage: '/images/projects/road-to-ultra-pos/cover.jpeg',
    summary:
      'Designed a festival-proof RFID cashless POS for an outdoor music festival — built for temporary vendors with minimal tech experience working in direct sunlight, high noise, and long shifts.',
    highlights: [
      'Single-tap transaction confirmation (vs a two-tap flow) to clear peak queues',
      'Extra-large touch targets after outdoor testing showed a high error rate',
      'Persistent balance display to address attendee anxiety about running out of tokens',
    ],
    palette: ['#1B112C', '#291733', '#2D1D44', '#442C48'],
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
    thumbnail: '/images/projects/iddf-2016-eposter/cover.png',
    heroImage: '/images/projects/iddf-2016-eposter/cover.png',
    summary:
      'Designed a digital ePoster browsing system and gamified lucky draw for a medical conference — choosing kiosks over a mobile app to remove the download barrier and drive higher adoption.',
    highlights: [
      'Kiosk over mobile app — removes the download barrier, higher adoption',
      'Questionnaire + lucky draw gamification drove survey completion at exhibitor booths',
      'Grid → list view with large previews, categorised by medical specialty',
    ],
    palette: ['#F0F0F1', '#FDD676', '#8E622E', '#A77C30'],
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
    thumbnail: '/images/projects/canon-photomarathon-2016/cover.png',
    heroImage: '/images/projects/canon-photomarathon-2016/cover.png',
    summary:
      'Designed a dual-sided photo submission and judging platform for a single-day photography marathon — streamlining the upload flow for participants and enabling efficient batch review for judges.',
    highlights: [
      'Guided upload flow with real-time validation (size, format, resolution)',
      'Batch judging: grid view, filtering/sorting, and side-by-side comparison',
      'Mobile-first for participants; responsive desktop for judges',
    ],
    palette: ['#FFFFFF', '#767679', '#A5A6A8', '#F3F1F1'],
    order: 14,
  },
  {
    slug: 'massage-gun',
    title: 'Smart Massage Gun App',
    client: 'MOMAX',
    role: 'UI/UX Designer',
    timeline: '2021',
    tools: ['Figma'],
    tags: ['IoT', 'Mobile App', 'Product Design', 'Wellness'],
    featured: false,
    thumbnail: '/images/projects/massage-gun/cover.png',
    heroImage: '/images/projects/massage-gun/cover.png',
    summary:
      'Designed the companion mobile app for a smart massage gun — providing guided usage instructions, personalised therapy programs, and progress tracking so users get safe, effective, tailored treatment.',
    highlights: [
      'Guided usage instructions with step-by-step guidance and safety precautions',
      'Personalised therapy programs (recovery, pain relief, relaxation) with customisable intensity, mode, and target area',
      'Progress tracking so users can monitor sessions and adjust over time',
    ],
    palette: ['#FFFFFF', '#187CDA', '#0778D7', '#C3D4F1'],
    order: 15,
  },
  {
    slug: 'ubizense-logo-rebranding',
    title: 'ubiZense Logo Rebranding',
    client: 'ubiZense',
    role: 'Graphic Designer',
    timeline: '2023',
    tools: ['Adobe Illustrator', 'Figma'],
    tags: ['Branding', 'Graphic Design', 'Logo', 'Style Guide'],
    featured: false,
    thumbnail: '/images/projects/ubizense-logo-rebranding/cover.jpg',
    heroImage: '/images/projects/ubizense-logo-rebranding/cover.jpg',
    summary:
      'Redesigned the ubiZense company logo and built a comprehensive style guide — ensuring branding consistency across the logo, name cards, website, and event materials.',
    highlights: [
      'Redesigned company logo with a unified style guide for cross-platform consistency',
      'Applied the brand across name cards, website, and booth backdrop',
      'Style guide covers logo construction, clear space, color, and typography',
    ],
    palette: ['#D7D5D7', '#C1BDC3', '#171116', '#A9A6AA'],
    order: 16,
  },
  {
    slug: 'smart-logistics-datathon-2024',
    title: 'Smart Logistics Datathon 2024',
    client: 'AISCL & GOVHK',
    role: 'Graphic Designer',
    timeline: '2024',
    tools: ['Adobe Illustrator', 'Figma'],
    tags: ['Graphic Design', 'Event', 'Branding', 'Print'],
    featured: false,
    thumbnail: '/images/projects/smart-logistics-datathon-2024/cover.jpeg',
    heroImage: '/images/projects/smart-logistics-datathon-2024/cover.jpeg',
    summary:
      'Led the visual identity for the Smart Logistics Datathon 2024 — designing the event backdrop, roll-up, rundown, and certificate in collaboration with AISCL and GOVHK to communicate the event clearly and consistently.',
    highlights: [
      'Shaped the event visual identity across backdrop, roll-up, rundown, and certificate',
      'Collaborated with AISCL and GOVHK on the official event branding',
      'Consistent visual language across large-format print and digital materials',
    ],
    palette: ['#2E64A7', '#3170C1', '#D93E61', '#2D3046'],
    order: 17,
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