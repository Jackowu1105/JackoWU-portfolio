import { Button } from '@/components/shared/Button'

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1C1814] mb-4">
          Contact
        </h1>
        <p className="text-[#8A8480] max-w-lg leading-relaxed text-lg">
          Got a project, opportunity, or just want to say hi? I&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form */}
        <div className="glass-card p-8">
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#8A8480] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/60 border border-black/10 text-[#1C1814] placeholder:text-[#B8B2AE] focus:outline-none focus:border-[#C4A882] focus:ring-1 focus:ring-[#C4A882]/30 transition-colors text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#8A8480] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/60 border border-black/10 text-[#1C1814] placeholder:text-[#B8B2AE] focus:outline-none focus:border-[#C4A882] focus:ring-1 focus:ring-[#C4A882]/30 transition-colors text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#8A8480] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-white/60 border border-black/10 text-[#1C1814] placeholder:text-[#B8B2AE] focus:outline-none focus:border-[#C4A882] focus:ring-1 focus:ring-[#C4A882]/30 transition-colors text-sm resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-xl font-medium text-sm bg-[#1C1814] text-white hover:bg-[#2C2622] transition-colors shadow-lg shadow-black/5"
            >
              Send message
            </button>
          </form>
        </div>

        {/* Contact info */}
        <div className="space-y-6">
          <div className="glass-card p-8">
            <h3 className="font-semibold text-[#1C1814] mb-2">Email</h3>
            <a
              href="mailto:hello@jacko.design"
              className="text-[#8A8480] hover:text-[#1C1814] transition-colors"
            >
              hello@jacko.design
            </a>
          </div>

          <div className="glass-card p-8">
            <h3 className="font-semibold text-[#1C1814] mb-2">LinkedIn</h3>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8A8480] hover:text-[#1C1814] transition-colors"
            >
              linkedin.com/in/jacko
            </a>
          </div>

          <div className="glass-card p-8">
            <h3 className="font-semibold text-[#1C1814] mb-2">Location</h3>
            <p className="text-[#8A8480]">Hong Kong</p>
          </div>

          <div className="glass-card p-8">
            <h3 className="font-semibold text-[#1C1814] mb-3">Quick links</h3>
            <div className="flex flex-wrap gap-3">
              <Button href="/resume" variant="secondary">
                Resume
              </Button>
              <Button href="/work" variant="ghost">
                Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}