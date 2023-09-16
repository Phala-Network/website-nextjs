import Link from 'next/link'
import { MdArrowForward } from 'react-icons/md'
import { cn } from '@/lib/utils'
import { useRecentPosts } from '@/hooks/useRecentPosts'

export function PostCard({ src, href, title, intro }: { src: string, href: string, title: string, intro: string }) {
  return (
    <article className={cn("post-card", "flex flex-col gap-2.5")}>
      <Link
        href={href}
        className={cn(
          "block bg-gray-200 rounded-3xl overflow-hidden border border-solid border-gray-50 w-full aspect-video shadow-lg",
          "transition-all hover:transition-all hover:shadow-md hover:scale-[0.98]",
        )}
        title={title}
      >
        <img
          src={src}
          alt={title}
          className={cn("object-cover w-full h-full")}
        />
      </Link>
      <header className="mt-2.5">
        <a
          href={href}
          className={cn(
            "text-xl font-bold hover:text-phalaPurple-500 block flex-none",
          )}
        >
          <span>{title}</span>
          <MdArrowForward className="untanglable text-phalaPurple-500 h-5 w-5 arrow inline-block" />
        </a>
      </header>
      <div>
        <p className={cn("text-sm")}>{intro}</p>
      </div>
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
      <div className={cn("safe-viewport", "grid grid-cols-1 gap-8 lg:gap-16 xl:grid-cols-20 3xl:grid-cols-24")}>
        <h2 className={cn("row-start-1 col-span-full", "section-heading")}>Today's Highlights</h2>
        <div
          className={cn(
            "row-start-2 xl:col-start-2 xl:col-span-18 3xl:col-start-4",
            "grid grid-cols-3 gap-8 lg:gap-4"
          )}
        >
          {pages.map(page => (
            <PostCard
              key={page.id}
              href={`/posts${page.slug}`}
              src={
                page.cover ? (
                  'external' in page.cover ? page.cover.external.url : page.cover.file.url
                ) : "https://phala.network/og-image.jpg"
              }
              title={page.title}
              intro=""
            />
          ))}
        </div>
        <div className={cn("row-start-3 xl:col-start-8 xl:col-span-6 3xl:col-start-10", "text-center")}>
          <Link
            href="/blog"
            className={cn(
              "btn btn-xl w-full justify-center btn-primary text-black uppercase",
              "font-semibold text-sm lg:text-base xl:text-lg"
            )}
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  )
}
