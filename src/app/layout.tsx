import type { Metadata } from 'next'
import { Epilogue, Inter, JetBrains_Mono } from 'next/font/google'
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

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Jacko — UX/UI Designer',
    template: '%s — Jacko',
  },
  description:
    'UX/UI Designer crafting thoughtful digital experiences. Specializing in user research, interaction design, and design systems.',
  openGraph: {
    title: 'Jacko — UX/UI Designer',
    description:
      'UX/UI Designer crafting thoughtful digital experiences.',
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
      className={`${epilogue.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
      <body className="min-h-full bg-[#FAF7F5] text-[#1C1814] flex flex-col">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
