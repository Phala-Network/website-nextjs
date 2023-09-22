import * as R from 'ramda'
import { notion } from '@/lib/notion-client'

export interface PhatItem {
  id: string
  name: string
  title: string
  description: string
  tags: string[]
  section: string[]
  rules: string
  rulesItem: string[]
  logo: string
}

const shuffler = R.curry(function(random, list: unknown[]) {
  const len = list.length
  let idx = -1
  let position
  const result: unknown[] = []
  while (++idx < len) {
    position = Math.floor((idx + 1) * random())
    result[idx] = result[position]
    result[position] = list[idx]
  }
  return result
})

const shuffle = shuffler(Math.random)

function filterRules(pairItems: PhatItem[]) {
  const [left, right] = pairItems
  if (!left.rules|| !right.rules) {
    return false
  }
  if (left.rules === 'Avoid' && left.rulesItem.indexOf(right.title) > -1) {
    return false
  }
  if (right.rules === 'Avoid' && right.rulesItem.indexOf(left.title) > -1) {
    return false
  }
  if (left.rules === 'Bonded' && left.rulesItem.indexOf(right.name) === -1) {
    return false
  }
  if (right.rules === 'Bonded' && right.rulesItem.indexOf(left.name) === -1) {
    return false
  }
  return true
}

function pairItems(arr: any[]): PhatItem[][] {
  const pairedArray = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].position.length && arr[i].position.length[0] === 'Right') {
        continue
      }
      if (arr[j].position.length && arr[j].position.length[0] === 'Left') {
        continue
      }
      if (!filterRules([arr[i], arr[j]])) {
        continue
      }
      // filter section
      const section = arr[i].section
      if (section.length === 1 && section[0] === 'Default') {
        arr[i].section = ['Verifiable', 'Programmable', 'Connect']
      } else {
        arr[i].section = section.filter((item: string) => item !== 'Default')
      }
      pairedArray.push([arr[i], arr[j]])
    }
  }
  return shuffle(pairedArray)
}

export async function getPhatList() {
  const database = await notion.databases.query({
    database_id: process.env.NOTION_LANDING_DATABASE_ID!,
  })
  const { results = [], next_cursor } = database
  const items = []
  for (const page of results) {
    // @ts-expect-error missing from Notion package
    const { id, properties } = page
    const name = R.map(
      R.prop('plain_text'),
      R.pathOr([], ['Name', 'title'], properties)
    ).join(' ')
    const title = R.map(
      R.prop('plain_text'),
      R.pathOr([], ['Title', 'rich_text'], properties)
    ).join(' ')
    const description = R.map(
      R.prop('plain_text'),
      R.pathOr([], ['Description', 'rich_text'], properties)
    ).join(' ')
    const tags = R.map(
      R.prop('name'),
      R.pathOr([], ['Tags', 'multi_select'], properties)
    )
    const position = R.map(
      R.prop('name'),
      R.pathOr([], ['Position', 'multi_select'], properties)
    )
    const section = R.map(
      R.prop('name'),
      R.pathOr([], ['Section', 'multi_select'], properties)
    )
    const rules = R.pathOr('', ['Rules', 'select', 'name'], properties)
    const rulesItem = R.map(
      R.prop('name'),
      R.pathOr([], ['Rules-Item', 'multi_select'], properties)
    )
    const logo = R.pathOr('', ['Logo', 'files', 0, 'file', 'url'], properties)
    items.push({
      id,
      name,
      title,
      description,
      tags,
      position,
      section,
      rules,
      rulesItem,
      logo,
    })
  }
  return pairItems(items)
}
