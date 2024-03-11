import { type VideoBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { type LandingPage } from '../types/page'
import * as R from 'ramda'

export async function getPageSettings(slug: string) {
  const payload = await fetch(`${process.env.NOTION_BACKEND_PREFIX}/site/posts${slug}`)
    .then((res) => res.json())
  const videoBlock = R.find(
    R.propEq('video', 'type'),
    payload.blocks || []
  ) as VideoBlockObjectResponse | null
  if (videoBlock) {
    return {
      videoBlockId: videoBlock.id,
    } as LandingPage
  }
  return {} as LandingPage
}
