import { CSSProperties } from 'react'
import dayjs from 'dayjs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'

import { cn } from '@/lib/utils'
import TagLink from '@/pages/components/TagLink'
import { ParsedListPage } from '@/lib/notion-client'

export default function Banners({ pages }: { pages: ParsedListPage[] }) {
  if (!pages) {
    return null
  }
  return (
    <div
      className="w-full h-full"
      style={
        {
          '--swiper-pagination-color': '#CDFA50',
          '--swiper-pagination-bullet-inactive-color': '#FFFFFF',
          '--swiper-pagination-bullet-inactive-opacity': 1,
        } as CSSProperties
      }
    >
      <Swiper
        className={cn('w-full h-full', 'rounded-3xl')}
        modules={[Pagination]}
        spaceBetween={30}
        pagination={{ clickable: true, el: '.banners-pagination' }}
      >
        {pages.map((page) => (
          <SwiperSlide
            key={page.id}
            className={cn(
              'w-full h-full bg-[#FAFEED]',
              'rounded-3xl p-2'
            )}
          >
            <article
              className={cn('w-full', 'grid grid-cols-1 lg:grid-cols-20')}
            >
              <div
                className={cn(
                  'lg:col-span-12',
                  'rounded-3xl overflow-hidden'
                )}
              >
                <a href={`/posts${page.slug}`}>
                  <img
                    className="w-full h-full object-cover"
                    src={page.coverUrl}
                    alt={page.title}
                  />
                </a>
              </div>
              <div
                className={cn(
                  'lg:col-span-8',
                  'flex flex-col justify-between',
                  'p-4'
                )}
              >
                <div className="flex flex-col gap-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    {page.tags.map((tag, i) => (
                      <TagLink key={`${i}`} href={`/tags/${tag}`}>
                        {tag}
                      </TagLink>
                    ))}
                  </div>
                  <h2 className="swiper-no-swiping font-bold text-2xl">
                    <a href={`/posts${page.slug}`}>{page.title}</a>
                  </h2>
                </div>
                <div className="text-sm">
                  <p>{dayjs(page.createdTime).format('YYYY-MM-DD')}</p>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="banners-pagination text-center py-4" />
    </div>
  )
}
