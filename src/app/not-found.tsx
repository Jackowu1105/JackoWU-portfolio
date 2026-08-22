import Link from 'next/link'
import { RippleEffect } from '@/components/shared/RippleEffect'

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <p className="text-8xl font-bold text-black/5 mb-4">404</p>
        <h1 className="text-2xl font-bold text-text-primary mb-2">Page not found</h1>
        <p className="text-text-secondary mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm bg-dark-bg text-white hover:opacity-80 transition-opacity relative overflow-hidden"
        >
          <RippleEffect />
          Back to home
        </Link>
      </div>
    </div>
  )
}