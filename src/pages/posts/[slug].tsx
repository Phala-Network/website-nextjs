import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import { useHydrateAtoms } from 'jotai/utils'

import attempt from '@/lib/attempt-promise'
import { getParsedPagesByProperties, ParsedPage } from '@/lib/notion-client'
import { render_block } from '@/components/notion-render/Block'
import { blocksAtom } from '@/components/notion-render/atoms'
import '@/components/notion-render/styles.css'

interface Props {
  page: ParsedPage | null
}

const RenderPost = ({ page }: Props) => {
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
      <article className="notion_page_body max-w-3xl m-auto px-4 xl:px-2 pb-8">
        <h1 className="notion_page_title">
          {page.title}
        </h1>
        <section>
          {page.coverUrl ? (
            <div className="my-8">
              <img
                className="w-full object-contain"
                src={
                  page.coverUrl
                }
                alt=""
              />
            </div>
          ) : null}
          {page.blocks.map(render_block)}
        </section>
      </article>
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
      page: pages.length > 0 ? pages[0] : null,
    },
  }
}

export default RenderPost