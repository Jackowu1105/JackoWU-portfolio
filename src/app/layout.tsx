import type { Metadata } from 'next'
import { Caveat, Epilogue, Inter, JetBrains_Mono } from 'next/font/google'
import { Layout } from '@/components/layout/Layout'
import './globals.css'

const epilogue = Epilogue({
  variable: '--font-epilogue',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Jacko Wu — Design-Engineer Hybrid | UX/UI Designer & Front-End',
    template: '%s — Jacko Wu',
  },
  description:
    'Hong Kong-based UX/UI Designer with 8+ years across fintech, IoT, aviation, and property tech. Design-engineer hybrid shipping real products — from user research and design systems to AI-assisted front-end delivery.',
  openGraph: {
    title: 'Jacko Wu — Design-Engineer Hybrid | UX/UI Designer & Front-End',
    description:
      'Hong Kong UX/UI Designer with 8+ years across fintech, IoT, aviation, and property tech. Ships real products — design to front-end, accelerated by AI.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${epilogue.variable} ${inter.variable} ${jetbrainsMono.variable} ${caveat.variable} h-full antialiased`}
    >
      <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
      <body className="min-h-full bg-bg-base text-text-primary flex flex-col">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
