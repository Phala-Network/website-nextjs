import { NextApiResponse, NextApiRequest } from 'next'
import { Keyring } from '@polkadot/api'
import { stringToU8a } from '@polkadot/util'
import { signatureVerify, decodeAddress } from '@polkadot/util-crypto'
import * as R from 'ramda'

import { setUserCookie } from '@/lib/auth'
import { notion } from '@/lib/notion-client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { signature, address } = req.body
    const { isValid } = signatureVerify(stringToU8a(address), signature, address)
    if (!isValid) {
      return res.status(401).json({
        error: {
          message: 'Authentication invalid'
        }
      })
    }
    const account = decodeAddress(address, false, 30)
    const substrate_address = new Keyring().encodeAddress(account, 42)
    const database = await notion.databases.query({
      database_id: process.env.NOTION_ACCOUNTS_DATABASE_ID!,
    })
    const { results = [] } = database
    const address_list = results.map(page => {
      return R.map(
        R.prop('plain_text'),
        R.pathOr([], ['properties', 'Address', 'rich_text'], page)
      ).join('')
    }).filter(Boolean)
    if (address_list.indexOf(substrate_address) === -1) {
      return res.status(401).json({
        error: {
          message: 'Authentication invalid'
        }
      })
    }
    return (await setUserCookie(res)).json({
      succeed: true
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({
      error: {
        message: 'Authentication failed'
      }
    })
  }
}
