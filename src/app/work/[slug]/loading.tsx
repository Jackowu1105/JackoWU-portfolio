export default function CaseStudyLoading() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-16 pb-32 animate-pulse">
      {/* Breadcrumb skeleton */}
      <div className="h-4 w-24 bg-black/5 rounded mb-8" />

      {/* Title skeleton */}
      <div className="h-10 w-2/3 bg-black/5 rounded mb-6" />

      {/* Meta grid skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[...Array(4)].map((_, i) => (
          <div key={i}>
            <div className="h-3 w-16 bg-black/5 rounded mb-2" />
            <div className="h-4 w-24 bg-black/5 rounded" />
          </div>
        ))}
      </div>

      {/* Hero image skeleton */}
      <div className="glass-card rounded-2xl aspect-[21/9] bg-black/[0.02]" />

      {/* Content skeletons */}
      <div className="mt-16 space-y-6">
        <div className="h-8 w-48 bg-black/5 rounded" />
        <div className="glass-card p-8 space-y-4">
          <div className="h-4 w-full bg-black/5 rounded" />
          <div className="h-4 w-5/6 bg-black/5 rounded" />
          <div className="h-4 w-4/6 bg-black/5 rounded" />
        </div>
      </div>
    </div>
  )
}