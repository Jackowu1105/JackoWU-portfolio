import type { MDXComponents } from 'mdx/types'
import { CaseStudyImage } from '@/components/case-study/CaseStudyImage'
import { ColorPalette } from '@/components/case-study/ColorPalette'
import { DecisionCards } from '@/components/case-study/DecisionCards'
import { ImageComparison } from '@/components/case-study/ImageComparison'
import { ProjectHeader } from '@/components/case-study/ProjectHeader'
import { ResearchProcess } from '@/components/case-study/ResearchProcess'

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold tracking-tight text-[#1A1410] mt-16 mb-6">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1A1410] mt-16 mb-5 scroll-mt-24">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg md:text-xl font-semibold text-[#1A1410] mt-10 mb-3 flex items-center gap-2.5">
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-gold flex-shrink-0" />
      <span>{children}</span>
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-[#5A554F] leading-[1.75] mb-5 text-[1.0625rem]">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="my-5 space-y-2.5 text-[#5A554F]">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-5 space-y-2.5 text-[#5A554F] list-none">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="leading-[1.7] pl-6 relative text-[1.0625rem]">
      <span className="absolute left-0 top-[0.7em] w-1.5 h-1.5 rounded-full bg-accent-gold/70" />
      {children}
    </li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-[#1A1410]">{children}</strong>
  ),
  blockquote: ({ children }) => (
    <blockquote className="not-prose my-8 rounded-2xl border border-accent-gold/20 bg-accent-glow/40 backdrop-blur-sm p-6 md:p-7 relative overflow-hidden">
      <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold to-accent-warm/40" />
      <div className="text-[#3D3833] italic leading-[1.7] text-[1.0625rem] [&>p]:mb-0 [&>p]:text-[#3D3833]">
        {children}
      </div>
    </blockquote>
  ),
  hr: () => <hr className="border-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent my-14" />,
  table: ({ children }) => (
    <div className="my-8 overflow-x-auto rounded-xl border border-black/10">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-black/[0.03]">{children}</thead>,
  th: ({ children }) => (
    <th className="text-left font-semibold text-[#1A1410] px-4 py-3 border-b border-black/10">{children}</th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-[#5A554F] border-b border-black/5 leading-relaxed">{children}</td>
  ),
  CaseStudyImage,
  ColorPalette,
  DecisionCards,
  ImageComparison,
  ProjectHeader,
  ResearchProcess,
}

export function useMDXComponents(): MDXComponents {
  return components
}