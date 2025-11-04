import { format } from 'date-fns'
import Link from 'next/link'

import TagLink from '@/components/tag-link'
import type { ParsedListPage } from '@/lib/notion-client'
import { coverRemap } from '@/lib/post-client'
import { cn } from '@/lib/utils'

export default function PostCard({ page, basePath = '/posts' }: { page: ParsedListPage; basePath?: string }) {
  if (!page) {
    return null
  }
  let id = page.id.replace(/-/g, '')
  id = coverRemap[id] || id
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
            <img
              className="w-full aspect-412/230"
              width={412}
              height={230}
              alt={page.title}
              src={`https://img0.phala.world/cover/824x460/${id}.jpg?z=123`}
              // src={`https://img0.phala.world/insecure/resize:fill:824:460:0/plain/https://img0.phala.world/cover/${page.id}.jpg`}
              // src={`https://img0.phala.world/cover/${page.id}.jpg`}
              // src={ `https://img0.phala.world/notion/resize:fill:824:460:0/plain/https://img0.phala.world/cover/${page.id}.jpg`}
              // src={
              //   page.id === '879ccad7-3aaf-4c7e-b043-d98a1b77ee7b'
              //     ? `https://img0.phala.world/cover/${page.id}.jpg`
              //     : `https://img0.phala.world/notion/resize:fill:824:460:0/f:jpeg/plain/https://img0.phala.world/cover/${page.id}.jpg`
              // }
            />
          ) : (
            <img
              className="w-full h-full object-cover"
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
