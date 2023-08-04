import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { useHydrateAtoms } from 'jotai/utils'

import { removeFormatFromCoverUrl } from '@/lib/utils'
import attempt from '@/lib/attempt-promise'
import { getParsedPageByProtertyText, ParsedPage } from '@/lib/notion-client'
import { render_block } from '@/components/notion-render/Block'
import { blocksAtom } from '@/components/notion-render/atoms'
import '@/components/notion-render/styles.css'

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'privacy' } },
    ],
    fallback: true,
  }
}

interface Props {
  page: ParsedPage | null
}

const RenderPage = ({ page }: Props) => {
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

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params!.slug as string
  const [error, page] = await attempt(getParsedPageByProtertyText({
    database_id: process.env.NOTION_POSTS_DATABASE_ID!,
    property: 'Custom URL',
    property_text: slug,
  }))
  if (page && page.coverUrl) {
    page.coverUrl = removeFormatFromCoverUrl(page.coverUrl)
  }
  if (error) {
    console.error(error)
  }
  return {
    props: {
      page,
    },
  }
}

export default RenderPage
