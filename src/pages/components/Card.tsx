import { cn } from '@/lib/utils'
import Tag from '@/pages/components/Tag'

export default function Card() {
  return (
    <article
      className={cn(
        "bg-[#FAFEED] rounded-3xl p-2",
        "flex flex-col",
        "h-[462px]"
      )}
    >
      <div
        className={cn(
          "w-full h-[53%] aspect-[412/230]",
          "rounded-3xl overflow-hidden",
          "shrink-0"
        )}
      >
        <img
          className="w-full h-full object-cover"
          src="/home/highlight05.jpg"
          alt=""
        />
      </div>
      <div className="h-full flex flex-col justify-between p-4">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-4">
            <Tag>Weekly report</Tag>
          </div>
          <h2 className="font-bold text-xl leading-7 line-clamp-3">Phala Builders Program Launched! PW Sent Out Survey For Community | Phala Weekly Vol. 120</h2>
        </div>
        <div className="text-sm">
          <p>
            2023-02-09
          </p>
        </div>
      </div>
    </article>
  )
}
