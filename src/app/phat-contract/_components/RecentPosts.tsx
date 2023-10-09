import Link from "next/link"
import { cn } from "@/lib/utils"
import { useRecentPosts } from "@/hooks/useRecentPosts"
import PageCoverImage from '@/components/PageCoverImage'

export default function RecentPosts() {
  const { pages } = useRecentPosts({
    and: [
      {
        property: 'Tags',
        multi_select: {
          does_not_contain: 'Changelog',
        },
      },
      {
        property: 'Tags',
        multi_select: {
          contains: 'Phat Contract',
        },
      },
    ]
  })
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What's New</h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {pages.map((post) => (
            <Link
              href={`/posts${post.slug}`}
              key={post.id}
              className="card-elevated relative isolate flex flex-col justify-end overflow-hidden"
            >
              {post.cover ? (
                <PageCoverImage
                  className="w-full aspect-[412/230] inset-0 -z-10"
                  width={412}
                  height={230}
                  page={post}
                />
              ) : (
                <img
                  className="w-full h-full object-cover inset-0 -z-10"
                  alt={post.title}
                  src="/blog/default_cover.jpg"
                />
              )}

              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="absolute w-full left-0 bottom-0 px-4 py-3">
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-400">
                  <time dateTime={post.publishedTime} className="mr-8">
                    {post.publishedTime}
                  </time>
                </div>
                <h3 className="heading-md leading-7 text-white">
                  <span className="absolute inset-0" />
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <div className={cn("w-full mt-12 flex flex-row justify-center")}>
          <Link
            href="/tags/phat-contract"
            title="More News about Phat Contract"
            className={cn('btn btn-phat btn-lg')}
          >
            Read more News about Phat Contract
          </Link>
        </div>
      </div>
    </div>
  )
}

