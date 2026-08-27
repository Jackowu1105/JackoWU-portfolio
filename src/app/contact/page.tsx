import { GlassCard } from '@/components/shared/GlassCard'
import { Button } from '@/components/shared/Button'
import { RippleEffect } from '@/components/shared/RippleEffect'

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-12 py-16">
      {/* Header */}
      <div className="mb-16">
        <p className="text-text-tertiary text-sm font-medium tracking-widest uppercase mb-3">
          Contact
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
          Let&apos;s ship something real
        </h1>
        <p className="text-text-secondary max-w-lg leading-relaxed text-lg">
          Whether it&apos;s a product to design, a front-end to ship, or a complex workflow to simplify —
          I&apos;d love to hear about it.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form */}
        <GlassCard hover={false} className="p-8">
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/60 border border-black/10 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-glow transition-colors text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/60 border border-black/10 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-glow transition-colors text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-white/60 border border-black/10 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-glow transition-colors text-sm resize-none"
                placeholder="Tell me about your project, role, or idea..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-xl font-medium text-sm bg-dark-bg text-white hover:opacity-80 transition-opacity shadow-lg shadow-black/5 relative overflow-hidden"
            >
              <RippleEffect />
              Send message
            </button>
          </form>
        </GlassCard>

        {/* Contact info */}
        <div className="space-y-6">
          <GlassCard className="p-8">
            <h3 className="font-semibold text-text-primary mb-2">Email</h3>
            <a
              href="mailto:hello@jacko.design"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              hello@jacko.design
            </a>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="font-semibold text-text-primary mb-2">LinkedIn</h3>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              linkedin.com/in/jacko
            </a>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="font-semibold text-text-primary mb-2">Location</h3>
            <p className="text-text-secondary">Hong Kong</p>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="font-semibold text-text-primary mb-3">Quick links</h3>
            <div className="flex flex-wrap gap-3">
              <Button href="/resume" variant="secondary">
                Resume
              </Button>
              <Button href="/work" variant="ghost">
                Work
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}