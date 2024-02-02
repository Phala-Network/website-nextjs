import Link from 'next/link'
import { MdArrowForward } from 'react-icons/md'
import { cn } from '@/lib/utils'
import type { ParsedListPage } from '@/lib/notion-client'
import { useRecentPosts } from '@/hooks/useRecentPosts'
import PageCoverImage from '@/components/PageCoverImage'

export function PostCard({ page }: { page: ParsedListPage }) {
  const href = `/posts${page.slug}`
  return (
    <article className={cn("post-card", "flex flex-col gap-2.5")}>
      <Link
        href={href}
        className={cn(
          "block bg-gray-200 rounded overflow-hidden border border-solid border-gray-50 w-full aspect-video shadow-lg",
          "transition-all hover:transition-all hover:shadow-md hover:scale-[0.98]",
        )}
        title={page.title}
      >
        {page.cover ? (
          <PageCoverImage
            className="w-full aspect-[412/230]"
            width={412}
            height={230}
            page={page}
          />
        ) : (
          <img
            loading="lazy"
            className="w-full h-full object-cover"
            alt={page.title}
            src="/blog/default_cover.jpg"
          />
        )}
      </Link>
      <header className="mt-2.5">
        <a
          href={href}
          className={cn(
            "text-xl font-bold hover:text-phalaPurple-500 block flex-none",
          )}
        >
          <span>{page.title}</span>
          <MdArrowForward className="untanglable text-phalaPurple-500 h-5 w-5 arrow inline-block" />
        </a>
      </header>
    </article>
  )
}

export function SectionHighlights() {
  const { pages } = useRecentPosts({
    and: [
      {
        property: 'Tags',
        multi_select: {
          does_not_contain: 'Changelog',
        },
      },
    ]
  })
  return (
    <section className={cn("section-highlights", "py-16 lg:py-32")}>
      <div className={cn("safe-viewport", "grid grid-cols-1 gap-8 lg:gap-16 xl:grid-cols-12")}>
        <h2 className={cn("row-start-1 col-span-full", "section-heading")}>Today's Highlights</h2>
        <div
          className={cn(
            "row-start-2 col-span-full",
            "grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4"
          )}
        >
          {pages.map(page => (
            <PostCard
              key={page.id}
              page={page}
            />
          ))}
        </div>
        <div className={cn("row-start-3 col-span-full", "flex justify-center")}>
          <Link
            href="/blog"
            className={cn(
              "btn btn-xl btn-phala justify-center text-black uppercase",
              "font-semibold text-sm lg:text-base xl:text-lg text-center"
            )}
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  )
}
