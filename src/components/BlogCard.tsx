import Link from 'next/link'
import { cn } from '@/lib/utils'
import { type Post } from '../types/blog'

export function BlogPostCard({ post }: { post: Post }) {
  return (
    <Link
      href={post.path}
      className={cn(
        "relative rounded-sm p-2",
        "flex flex-col gap-2 lg:flex-row lg:gap-10",
        "bg-white",
        "group",
      )}
      shallow
    >
      <div
        className={cn(
          "w-[360px] h-[195px] max-w-full aspect-[360/195] overflow-hidden rounded-sm flex-grow shrink-0",
          "border border-gray-50 overflow-hidden",
        )}
      >
        <img
          src={post.cover ? post.cover :"/blog/default_cover.jpg"}
          alt={post.title}
          className={cn(
            "w-full h-full aspect-[360/195] group-hover:scale-105 transition-transform transform-gpu duration-200",
          )}
        />
      </div>
      <div className="px-2.5 py-2 lg:py-4 pr-6">
        <h4 className="text-20 lg:text-24 font-bold text-black-800">
          {post.title}
        </h4>
        <div className="mt-2 lg:mt-4 text-sm lg:text-base text-black-800">{post.summary}</div>
        <div
          className={cn(
            "d-btn d-btn-link d-btn-sm -ml-3 lg:d-btn-md lg:-ml-4"
          )}
        >
          READ MORE
        </div>
      </div>
    </Link>
  )
}

