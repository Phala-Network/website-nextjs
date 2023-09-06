import dayjs from 'dayjs'

import { cn } from '@/lib/utils'
import TagLink from '@/components/TagLink'
import PageCoverImage from '@/components/PageCoverImage'
import { ParsedListPage } from '@/lib/notion-client'

export default function Card({ page }: { page: ParsedListPage }) {
  if (!page) {
    return null
  }
  return (
    <article
      className={cn(
        'bg-[#FAFEED] rounded-3xl p-2',
        'flex flex-col',
        'h-[462px]'
      )}
    >
      <div
        className={cn(
          'w-full h-[53%]',
          'rounded-3xl overflow-hidden',
          'shrink-0'
        )}
      >
        <a href={`/posts${page.slug}`}>
          <PageCoverImage
            className="w-full h-full object-cover"
            page={page}
          />
        </a>
      </div>
      <div className="h-full flex flex-col justify-between p-4">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            {page.tags.map((tag, i) => (
              <TagLink key={`${i}`} href={`/tags/${tag}`}>
                {tag}
              </TagLink>
            ))}
          </div>
          <h2 className="font-bold text-xl leading-7 line-clamp-3">
            <a href={`/posts${page.slug}`}>{page.title}</a>
          </h2>
        </div>
        <div className="text-sm">
          <p>{dayjs(page.publishedTime).format('YYYY-MM-DD')}</p>
        </div>
      </div>
    </article>
  )
}
