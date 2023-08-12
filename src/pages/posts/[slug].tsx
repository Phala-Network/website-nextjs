import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import { useHydrateAtoms } from 'jotai/utils'
import { FiChevronLeft, FiChevronRight, FiArrowLeft, FiArrowRight } from 'react-icons/fi'

import { cn } from '@/lib/utils'
import attempt from '@/lib/attempt-promise'
import { getParsedPagesByProperties, ParsedPage } from '@/lib/notion-client'
import { render_block } from '@/components/notion-render/Block'
import { blocksAtom } from '@/components/notion-render/atoms'
import Tag from '@/pages/components/Tag'
import '@/components/notion-render/styles.css'

interface Props {
  page: ParsedPage | null
}

const AboutLink = ({ text, link }: { text: string, link: string }) => {
  return (
    <div className="text-center text-xs text-green-700 font-bold leading-none border-r-[1px] border-green-700 w-[136px]">
      <a href={link}>{text}</a>
    </div>
  )
}

const PostPage = ({ page }: Props) => {
  if (!page) {
    return (
      <div className="max-w-3xl m-auto p-8">
        <p>Woops! didn't find that post.</p>
      </div>
    )
  }
  useHydrateAtoms([[blocksAtom, page.blocks]])
  return (
    <>
      {page.title ? (
        <Head>
          <title>{page.title}</title>
        </Head>
      ) : null}
      <div
        className={cn(
          "min-h-screen",
          "bg-gradient-to-b from-green-600 to-green-500",
        )}
      >
        <div className={cn(
          "safe-viewport",
          "grid grid-cols-1 lg:grid-cols-20 3xl:grid-cols-24 gap-4",
          "py-32"
        )}>
          <div className={cn(
            "col-start-1 lg:col-span-11 lg:col-start-2 3xl:col-start-4 3xl:col-span-11"
          )}>
            <nav className={cn(
              "bg-white rounded-3xl",
              "py-2 px-6",
              "text-sm font-medium flex gap-2",
            )}>
              <a href="#">Blog</a>
              <span>/</span>
              <a href="#">2023</a>
              <span>/</span>
              <a href="#">03</a>
            </nav>
            <article
              className={cn(
                "notion_page_body",
                "bg-white rounded-3xl p-2 mt-4"
              )}
            >
              {page.coverUrl ? (
                <div className={cn(
                  "aspect-[856/442] rounded-3xl overflow-hidden",
                )}>
                  <img
                    className="w-full object-contain"
                    src={
                      page.coverUrl
                    }
                    alt=""
                  />
                </div>
              ) : null}
              <div className="p-8 pt-0">
                <h1 className={cn(
                  "notion_page_title",
                  "text-3xl font-black"
                )}>
                  {page.title}
                </h1>
                <div className="flex items-center gap-x-4">
                  <Tag>Weekly report</Tag>
                </div>
                <div className="my-6">
                  <p className="text-sm font-medium">2023-03-06</p>
                </div>
                <div className="text-base">
                  {page.blocks.map(render_block)}
                </div>
                <div className="flex justify-between text-sm text-green-800">
                  <div className="flex items-center gap-1">
                    <FiArrowLeft />
                    <a href="#">Phala Network 2023 Roadmap</a>
                  </div>
                  <div className="flex items-center gap-1">
                    <a href="#">Phala Network 2023 Roadmap</a>
                    <FiArrowRight />
                  </div>
                </div>
              </div>
            </article>
            <section className="bg-white rounded-3xl mt-4 py-8">
              <div className="px-10">
                <h1 className="text-2xl font-bold">About Phala</h1>
                <div className="text-sm mt-4 flex flex-col gap-4">
                  <p>Phala Network is a decentralized cloud that offers secure and scalable computing for Web3.</p>
                  <p>With Phat Contracts, an innovative programming model enabling trustless off-chain computation, developers can create new Web3 use cases.</p>
                </div>
              </div>
              <div className="flex flex-wrap mt-8">
                <AboutLink link="#" text="Subscribe" />
                <AboutLink link="#" text="Twitter" />
                <AboutLink link="#" text="Youtube" />
                <AboutLink link="#" text="Github" />
              </div>
              <div className="flex flex-wrap mt-4">
                <AboutLink link="#" text="Discord" />
                <AboutLink link="#" text="Forum" />
                <AboutLink link="#" text="Telegram" />
              </div>
            </section>
          </div>
          <div className={cn(
            "lg:col-span-7",
          )}>
            <section className="bg-[#F5FEDC] rounded-3xl p-8">
              <h1 className="text-2xl font-bold">Recent Posts</h1>
              <div className="flex flex-col gap-5 mt-5">
                <a href="#">
                  <p className="text-base text-green-800 font-medium">Phala Network 2023 Roadmap</p>
                  <p className="text-xs text-green-700">2023-02-09</p>
                </a>
              </div>
            </section>
            <section className="bg-[#F5FEDC] rounded-3xl p-8 mt-4">
              <h1 className="text-2xl font-bold">Similar Posts</h1>
              <div className="flex flex-col gap-5 mt-5">
                <a href="#">
                  <p className="text-base text-green-800 font-medium">Phala Network 2023 Roadmap</p>
                  <p className="text-xs text-green-700">2023-02-09</p>
                </a>
              </div>
            </section>
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
  const [error, pages] = await attempt(getParsedPagesByProperties({
    database_id: process.env.NOTION_POSTS_DATABASE_ID!,
    properties: {
      'Custom URL': slug,
    }
  }))
  if (error) {
    console.error(error)
  }
  return {
    props: {
      page: pages && pages.length > 0 ? pages[0] : null,
    },
  }
}

export default PostPage
