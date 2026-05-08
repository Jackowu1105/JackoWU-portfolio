import { cn } from '@/lib/utils'

interface ProjectPlaceholderProps {
  title: string
  tags: string[]
  className?: string
}

const tagColors: Record<string, string> = {
  IoT: 'from-blue-900/30 to-cyan-900/20',
  'Mobile App': 'from-indigo-900/30 to-purple-900/20',
  'Design System': 'from-slate-800/40 to-slate-700/30',
  Property: 'from-stone-800/40 to-neutral-700/30',
  Accessibility: 'from-emerald-900/30 to-teal-900/20',
  Events: 'from-amber-900/30 to-orange-900/20',
  Enterprise: 'from-slate-800/40 to-zinc-700/30',
  Dashboard: 'from-gray-800/40 to-slate-700/30',
}

function getGradient(tags: string[]): string {
  for (const tag of tags) {
    if (tagColors[tag]) return tagColors[tag]
  }
  return 'from-neutral-800/40 to-neutral-700/30'
}

export function ProjectPlaceholder({
  title,
  tags,
  className,
}: ProjectPlaceholderProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center bg-gradient-to-br relative overflow-hidden',
        getGradient(tags),
        className
      )}
    >
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      {/* Title watermark */}
      <span className="text-white/15 text-lg font-bold tracking-tight px-4 text-center leading-tight">
        {title}
      </span>
    </div>
  )
}
