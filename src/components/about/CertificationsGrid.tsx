'use client'

import { useState } from 'react'
import { GlassCard } from '@/components/shared/GlassCard'
import { Lightbox } from '@/components/case-study/Lightbox'

interface Cert {
  name: string
  issuer: string
  date: string
  image: string
}

/** Certifications grid with click-to-enlarge lightbox. */
export function CertificationsGrid({ certifications }: { certifications: Cert[] }) {
  const [active, setActive] = useState<Cert | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => (
          <GlassCard
            key={i}
            hover={false}
            className="p-4 flex flex-col overflow-hidden cursor-zoom-in transition-transform hover:-translate-y-1"
            onClick={() => setActive(cert)}
          >
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

      <Lightbox
        open={active !== null}
        onClose={() => setActive(null)}
        src={active?.image || ''}
        alt={active ? `${active.name} — ${active.issuer}` : ''}
        caption={active?.name}
        sub={active ? `${active.issuer} · ${active.date}` : undefined}
      />
    </>
  )
}
