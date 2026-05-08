'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { RippleEffect } from '@/components/shared/RippleEffect'

const links = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Nav bar — transparent by default, blurred when scrolled */}
      <nav
        className={cn(
          'mx-auto max-w-6xl px-6 py-4 transition-all duration-300',
          scrolled && 'py-2'
        )}
      >
        <div
          className={cn(
            'flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300',
            scrolled
              ? 'bg-white/20 backdrop-blur-xl  shadow-lg border border-white/10'
              : 'bg-transparent border border-transparent'
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="/images/Jacko_logo_V1.png"
              alt="Jacko logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <span
              className="text-[#1C1814] font-semibold tracking-tight text-lg"
              style={{ fontFamily: 'var(--font-epilogue), sans-serif' }}
            >
              Jacko WU
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ fontFamily: 'var(--font-epilogue), sans-serif' }}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                  pathname === link.href
                    ? 'text-[#1C1814] bg-black/5'
                    : 'text-[#8A8480] hover:text-[#1C1814] hover:bg-black/5'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/resume"
              style={{ fontFamily: 'var(--font-epilogue), sans-serif' }}
              className="ml-3 px-4 py-2 rounded-lg text-sm font-medium bg-[#1C1814] text-white hover:opacity-80 transition-opacity relative overflow-hidden"
            >
              <RippleEffect />
              Resume
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#8A8480] hover:text-[#1C1814] transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path d="M5 5l10 10M15 5L5 15" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-6"
          >
            <div className="glass-card p-4 flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'text-[#1C1814] bg-black/5'
                      : 'text-[#8A8480] hover:text-[#1C1814] hover:bg-black/5'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/resume"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 rounded-lg text-sm font-medium text-center bg-[#1C1814] text-white"
              >
                Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
