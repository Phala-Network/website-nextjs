import TagLink from '@/components/tag-link'
import type { ParsedListPage } from '@/lib/notion-client'
import { cn } from '@/lib/utils'

const remap: Readonly<Record<string, string>> = {
  '2250317e04a18058a89af73b666d10e0': '2250317e-04a1-8058-a89a-f73b666d10e0',
  '2300317e04a18074a132f0b95e4cc4d5': '2300317e-04a1-8074-a132-f0b95e4cc4d5',
}

export default function PostCard({ page }: { page: ParsedListPage }) {
  if (!page) {
    return null
  }
  let id = page.id.replace(/-/g, '')
  id = remap[id] || id
  return (
    <article
      className={cn(
        'bg-muted rounded-2xl border p-3',
        'flex flex-col',
        'h-full',
      )}
    >
      <div className={cn('rounded-sm overflow-hidden')}>
        <a href={`/posts${page.slug}`}>
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
        </a>
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
          <h2 className="font-bold text-xl break-all">
            <a href={`/posts${page.slug}`}>{page.title}</a>
          </h2>
        </div>
        <div className="text-sm">
          <p>{page.publishedDate}</p>
        </div>
      </div>
    </article>
  )
}
