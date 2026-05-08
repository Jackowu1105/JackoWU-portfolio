import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold tracking-tight text-[#1A1410] mt-16 mb-6">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold tracking-tight text-[#1A1410] mt-12 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-medium text-[#1A1410] mt-8 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-[#8B8580] leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside space-y-2 text-[#8B8580] ml-6 mb-4">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside space-y-2 text-[#8B8580] ml-6 mb-4">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-[#1A1410]">{children}</strong>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-[#D4C5B0] pl-6 italic text-[#8B8580] my-6">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="border-black/10 my-12" />,
}

export function useMDXComponents(): MDXComponents {
  return components
}