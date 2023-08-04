import { useAtomValue } from 'jotai'
import { ToggleBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { BlockAtom } from './atoms'
import RichText from './RichText'

const Toggle = ({
  theAtom,
  children,
}: {
  theAtom: BlockAtom
  children: React.ReactNode
}) => {
  const block = useAtomValue(theAtom) as ToggleBlockObjectResponse
  return (
    <details className={`notion_${block.type}_container`}>
      <summary>
        <RichText rich_text={block.toggle.rich_text} />
      </summary>
      {children}
    </details>
  )
}

export default Toggle
