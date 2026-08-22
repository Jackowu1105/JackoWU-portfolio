import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-black/5 mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-text-primary font-semibold tracking-tight"
            >
              Jacko
            </Link>
            <span className="text-text-tertiary text-sm">
              UX/UI Designer
            </span>
          </div>

          {/* Center links */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/work"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-primary transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@jacko.design"
              className="text-text-tertiary hover:text-text-primary transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>

        <p className="text-center text-text-tertiary text-xs mt-8">
          &copy; {new Date().getFullYear()} Jacko. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
