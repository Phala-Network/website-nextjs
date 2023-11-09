import { NextApiResponse, NextApiRequest } from 'next'
import {
  isFullPage,
} from '@notionhq/client'
import * as R from 'ramda'

import { notion } from '@/lib/notion-client'
import { generateSlug } from '@/lib/utils'
import attempt from '@/lib/attempt-promise'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, interaction_token } = req.body
  const page = await notion.pages.retrieve({ page_id: id })
  if (!isFullPage(page)) {
    return res.json({
      succeed: false
    })
  }
  let slug = R.map(
    R.prop('plain_text'),
    R.pathOr([], ['Custom URL', 'rich_text'], page.properties)
  ).join(' ').split('?')[0]
  const title = R.map(
    R.prop('plain_text'),
    R.pathOr([], ['Title', 'title'], page.properties)
  ).join(' ')
  const tags = R.map(
    R.prop('name'),
    R.pathOr([], ['Tags', 'multi_select'], page.properties)
  )
  const properties: Record<string, any> = {
    'Status': {
      status: {
        name: 'Published'
      }
    }
  }
  if (!slug) {
    slug = `/${generateSlug(title)}`
    properties['Custom URL'] = {
      rich_text: [{
        text: { content: slug }
      }]
    }
  }
  const [, result] = await attempt(notion.pages.update({
    page_id: page.id,
    properties,
  }))
  if (!result) {
    return res.json({
      succeed: false
    })
  }
  const promises = tags.map((tag) => res.revalidate(`/tags/${tag}`))
  promises.push(res.revalidate(`/posts${slug}`))
  promises.push(res.revalidate('/blog'))
  await Promise.all(promises)
  if (interaction_token) {
    const res = await fetch(
      `https://discord.com/api/v10/webhooks/${process.env.DISCORD_APP_ID}/${interaction_token}/messages/@original`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `Published: ${title}`
        })
      }
    )
  }
  return res.json({
    succeed: true
  })
}
