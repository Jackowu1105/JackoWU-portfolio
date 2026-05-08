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
              className="text-[#1C1814] font-semibold tracking-tight"
            >
              Jacko
            </Link>
            <span className="text-[#B8B2AE] text-sm">
              UX/UI Designer
            </span>
          </div>

          {/* Center links */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/work"
              className="text-[#8A8480] hover:text-[#1C1814] transition-colors"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-[#8A8480] hover:text-[#1C1814] transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[#8A8480] hover:text-[#1C1814] transition-colors"
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
              className="text-[#B8B2AE] hover:text-[#1C1814] transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@jacko.design"
              className="text-[#B8B2AE] hover:text-[#1C1814] transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>

        <p className="text-center text-[#B8B2AE] text-xs mt-8">
          &copy; {new Date().getFullYear()} Jacko. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
