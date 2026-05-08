export default function WorkLoading() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 animate-pulse">
      <div className="mb-16">
        <div className="h-10 w-32 bg-black/5 rounded mb-4" />
        <div className="h-5 w-96 bg-black/5 rounded" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="glass-card overflow-hidden p-0">
            <div className="aspect-[16/10] bg-black/[0.02]" />
            <div className="p-5 space-y-3">
              <div className="h-3 w-20 bg-black/5 rounded" />
              <div className="h-5 w-full bg-black/5 rounded" />
              <div className="h-4 w-16 bg-black/5 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}