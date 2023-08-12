import { CSSProperties } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'

import { cn } from '@/lib/utils'
import Tag from '@/pages/components/Tag'

export default function Banners() {
  const items = [1, 2]
  return (
    <div
      className="w-full h-full"
      style={{
        '--swiper-pagination-color': '#CDFA50',
        '--swiper-pagination-bullet-inactive-color': '#FFFFFF',
        '--swiper-pagination-bullet-inactive-opacity': 1
      } as CSSProperties}
    >
      <Swiper
        className={cn(
          "w-full h-full",
          "rounded-3xl",
        )}
        modules={[Pagination]}
        spaceBetween={30}
        pagination={{ clickable: true, el: '.banners-pagination' }}
      >
        {items.map((i) => (
          <SwiperSlide
            key={i}
            className={cn(
              "aspect-[500/400] lg:aspect-[1316/531]",
              "w-full h-full bg-[#FAFEED]",
              "rounded-3xl p-2",
            )}
          >
            <article className={cn(
              "w-full",
              "grid grid-cols-1 lg:grid-cols-20"
            )}>
              <div className={cn(
                "lg:col-span-12",
                "aspect-[500/400]",
                "rounded-3xl overflow-hidden",
              )}>
                <img
                  className="w-full h-full object-cover"
                  src="/home/highlight05.jpg"
                  alt=""
                />
              </div>
              <div className={cn(
                "lg:col-span-8",
                "flex flex-col justify-between",
                "p-4"
              )}>
                <div className="flex flex-col gap-y-2">
                  <div className="flex items-center gap-x-4">
                    <Tag>Weekly report</Tag>
                  </div>
                  <h2 className="swiper-no-swiping font-bold text-2xl">Phala Builders Program Launched! PW Sent Out Survey For Community | Phala Weekly Vol. 120</h2>
                </div>
                <div className="text-sm">
                  <p>
                    2023-02-09
                  </p>
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
