import { NextApiResponse, NextApiRequest } from 'next'

import { queryDatabase } from '@/lib/notion-client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, interaction_token } = req.body
  if (name === 'list') {
    const { pages } = await queryDatabase({
      database_id: process.env.NOTION_POSTS_DATABASE_ID!,
      filter: {
        property: 'Post Type',
        select: {
          equals: 'Post',
        },
      },
      sorts: [
        {
          property: 'Last Edited Time',
          direction: 'descending',
        },
      ],
      page_size: 10,
    })
    await fetch(
      `https://discord.com/api/v10/webhooks/${process.env.DISCORD_APP_ID}/${interaction_token}/messages/@original`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: pages.map((page, index) => `${index + 1}. [${page.title}](https://${req.headers['host']}/posts/preview/${page.id})`).join('\n'),
          embeds: [],
        })
      }
    )
  }
  return res.json({
    succeed: true
  })
}
