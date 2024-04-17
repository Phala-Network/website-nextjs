import { cn } from '@/lib/utils'
import TagLink from '@/components/TagLink'
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
        'h-full',
      )}
    >
      <div
        className={cn(
          'rounded-3xl overflow-hidden',
        )}
      >
        <a href={`/posts${page.slug}`}>
          {
            page.cover ? (
              <img
                className="w-full aspect-[412/230]"
                width={412}
                height={230}
                alt={page.title}
                src={`https://img0.phala.world/cover/824x460/${page.id}.jpg`}
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
            )
          }
        </a>
      </div>
      <div className="grow flex flex-col gap-y-2 justify-between p-4">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            {page.tags.map((tag, i) => (
              <div key={`${i}`}>
                <TagLink href={`/tags/${tag}`}>
                  {tag}
                </TagLink>
              </div>
            ))}
          </div>
          <h2 className="font-bold text-lg">
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
