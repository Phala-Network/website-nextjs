import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'

import { cn } from '@/lib/utils'
import Card from '@/pages/components/Card'
import Pagination from '@/pages/components/Pagination'

interface Props {
  slug: string
}

export default function TagPage({ slug }: Props) {
  return (
    <>
      <Head>
        <title>{slug}</title>
      </Head>
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
            <section
              className={cn(
                "bg-[#EBFDB9] rounded-3xl",
                "flex justify-between",
                "p-12"
              )}
            >
              <div className="flex flex-col gap-4">
                <nav className="text-sm text-black-600 flex gap-2">
                  <a href="#">Blog</a>
                  <span>/</span>
                  <span>Roadmap</span>
                </nav>
                <h1
                  className={cn(
                    "text-black-850 text-xl",
                    "text-4xl lg:text-5xl",
                    "font-black"
                  )}
                >
                  Roadmap
                </h1>
              </div>
              <div>
                <button className={cn(
                  "py-4 px-10",
                  "bg-green-500 text-green-800 text-xl font-bold",
                  'rounded-[160px]'
                )}>
                  Back to Blog
                </button>
              </div>
            </section>
            <section className={cn(
              "grid mt-8",
              "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
              "gap-4",
            )}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </section>
            <div className="flex items-center justify-center py-8">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const { slug } = context.params!
  return {
    props: {
      slug,
    },
  }
}
