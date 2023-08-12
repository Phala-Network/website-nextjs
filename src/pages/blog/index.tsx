import { cn } from '@/lib/utils'
import Banners from '@/pages/components/Banners'
import Card from '@/pages/components/Card'
import Tag from '@/pages/components/Tag'

export default function BlogPage() {
  return (
    <div
      className={cn(
        "min-h-screen",
        "bg-gradient-to-b from-green-600 to-green-500",
      )}
    >
      <div className={cn(
        "safe-viewport",
        "grid grid-cols-2 lg:grid-cols-20 3xl:grid-cols-24",
        "py-32"
      )}>
        <div className={cn(
          "col-start-1 col-span-full lg:col-span-18 lg:col-start-2 3xl:col-start-4 3xl:col-span-18"
        )}>
          <h1
            className={cn(
              "text-black-850 text-xl",
              "text-4xl lg:text-5xl",
              "font-black"
            )}
          >
            Blog
          </h1>
          <section className={cn(
            "mt-8"
          )}>
            <Banners />
          </section>
          <section className={cn(
            "grid mt-8",
            "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
            "gap-4"
          )}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
          <div className={cn(
            "pt-20 pb-10 w-full flex items-center justify-center"
          )}>
            <button className={cn(
              "py-4 px-16",
              "bg-white text-green-800 text-xl font-bold",
              'rounded-[160px]'
            )}>
              View All Blogs
            </button>
          </div>
          <section
            className={cn(
              "bg-[#FAFEED] rounded-3xl",
              "flex flex-col items-center",
              "py-12 px-8"
            )}
          >
            <h2 className="text-black font-bold text-2xl">Search by Tag</h2>
            <div className="flex flex-wrap gap-3 mt-12 w-full">
              <Tag>Block Explorer</Tag>
              <Tag>Block Explorer</Tag>
              <Tag>Block Explorer</Tag>
              <Tag>Block Explorer</Tag>
              <Tag>Block Explorer</Tag>
              <Tag>Block Explorer</Tag>
              <Tag>Block Explorer</Tag>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
