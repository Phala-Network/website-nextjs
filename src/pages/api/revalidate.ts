import { NextApiResponse, NextApiRequest } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await res.revalidate(req.body.slug)
  return res.json({
    revalidated: true,
    now: Date.now(),
  })
}
