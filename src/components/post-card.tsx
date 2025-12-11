import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

import TagLink from '@/components/tag-link'
import { CdnImage } from '@/components/ui/cdn-image'
import { buildCoverUrl } from '@/lib/image-url'
import type { ParsedListPage } from '@/lib/notion-client'
import { cn } from '@/lib/utils'

export default function PostCard({ page, basePath = '/posts' }: { page: ParsedListPage; basePath?: string }) {
  if (!page) {
    return null
  }
  return (
    <article
      className={cn(
        'bg-muted rounded-2xl border p-3',
        'flex flex-col',
        'h-full',
      )}
    >
      <div className={cn('rounded-sm overflow-hidden')}>
        <Link href={`${basePath}/${page.slug}`}>
          {page.cover ? (
            <CdnImage
              className="w-full aspect-412/230"
              width={824}
              height={460}
              alt={page.title}
              src={buildCoverUrl(page.id, page.lastEditedTime)}
            />
          ) : (
            <Image
              className="w-full h-full object-cover"
              width={824}
              height={460}
              alt={page.title}
              src="/blog/default_cover.jpg"
            />
          )}
        </Link>
      </div>
      <div className="grow flex flex-col gap-y-4 justify-between p-5">
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            {page.tags.slice(0, 3).map((tag, i) => (
              <div key={`${i}`}>
                <TagLink href={`/tags/${tag}`}>{tag}</TagLink>
              </div>
            ))}
          </div>
          <h2 className="font-bold text-lg">
            <Link href={`${basePath}/${page.slug}`}>{page.title}</Link>
          </h2>
        </div>
        {page.publishedDate && (
          <div className="text-sm">
            <p suppressHydrationWarning>
              {format(new Date(page.publishedDate), 'MMM dd, yyyy')}
            </p>
          </div>
        )}
      </div>
    </article>
  )
}
