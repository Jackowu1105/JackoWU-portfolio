import { HeroSection } from '@/components/home/HeroSection'
import { LogoCarousel } from '@/components/home/LogoCarousel'
import { ScrollIndicator } from '@/components/home/ScrollIndicator'
import { FeaturedWork } from '@/components/home/FeaturedWork'
import { ProcessTeaser } from '@/components/home/ProcessTeaser'
import { TestimonialSection } from '@/components/home/TestimonialSection'
import { AboutPreview } from '@/components/home/AboutPreview'
import { ExperienceSection } from '@/components/home/ExperienceSection'
import { ContactCTA } from '@/components/home/ContactCTA'

export default function HomePage() {
  return (
    <>
      {/* Above-fold: fills viewport (after header offset) with HeroSection + LogoCarousel + ScrollIndicator */}
      <div className="flex flex-col overflow-hidden" style={{ height: 'calc(100dvh - 96px)' }}>
        {/* Hero 垂直置中，佔用剩餘空間 */}
        <div className="flex-1 flex items-center justify-center min-h-0">
          <HeroSection />
        </div>
        {/* 底部：Logo Carousel + Scroll Indicator */}
        <div>
          <LogoCarousel />
          <ScrollIndicator />
        </div>
      </div>

      <FeaturedWork />
      <ProcessTeaser />
      <TestimonialSection />
      <AboutPreview />
      <ExperienceSection />
      <ContactCTA />
    </>
  )
}
