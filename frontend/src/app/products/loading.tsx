// src/app/products/loading.tsx

export default function Loading() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-foreground">Curated Goods</h1>
        <p className="text-muted mt-2">Discover unique items from independent vendors.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Render 6 skeleton cards */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="japandi-card flex flex-col h-full animate-pulse">
            {/* Image Skeleton */}
            <div className="w-full h-64 bg-gray-200 mb-4 rounded-sm" />
            
            {/* Title & Description Skeleton */}
            <div className="flex-grow space-y-3">
              <div className="h-5 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>

            {/* Price & Button Skeleton */}
            <div className="mt-6 flex items-center justify-between">
              <div className="h-5 bg-gray-200 rounded w-1/4" />
              <div className="h-4 bg-gray-200 rounded w-1/4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}