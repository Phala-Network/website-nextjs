import { FiClock, FiTag } from 'react-icons/fi'

import { Skeleton } from '@/components/ui/skeleton'

export function PostCardSkeleton() {
  return (
    <div className="block">
      <Skeleton className="h-6 w-3/4 mb-1" />
      <Skeleton className="h-4 w-24" />
    </div>
  )
}

export function PostsSectionSkeleton({ title }: { title: string }) {
  const Icon = title === 'Recent Posts' ? FiClock : FiTag

  return (
    <div className="rounded-2xl border p-6">
      <h3 className="text-lg font-semibold mb-4 font-sans flex items-center gap-2">
        <Icon className="w-5 h-5" />
        {title}
      </h3>
      <div className="space-y-4">
        {Array.from({ length: 3 }, (_, i) => (
          <PostCardSkeleton
            key={`skeleton-${
              // biome-ignore lint/suspicious/noArrayIndexKey: static
              i
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export function PostNavigationSkeleton() {
  return (
    <nav className="flex flex-col sm:flex-row gap-8">
      <div className="flex-1 p-4 border rounded-lg space-y-2">
        <div className="flex items-center gap-2">
          <Skeleton className="w-4 h-4" />
          <Skeleton className="h-3 w-16" />
        </div>
        <Skeleton className="h-5 w-full" />
      </div>
      <div className="flex-1 p-4 border rounded-lg space-y-2">
        <div className="flex items-center gap-2 justify-end">
          <Skeleton className="h-3 w-12" />
          <Skeleton className="w-4 h-4" />
        </div>
        <Skeleton className="h-5 w-full" />
      </div>
    </nav>
  )
}
