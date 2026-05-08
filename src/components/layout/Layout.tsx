import { Header } from './Header'
import { Footer } from './Footer'
import { PageTransition } from './PageTransition'
import { CanvasBackground } from '@/components/shared/CanvasBackground'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CanvasBackground />
      <Header />
      <PageTransition>
        <main className="flex-1 pt-24">{children}</main>
      </PageTransition>
      <Footer />
    </>
  )
}
