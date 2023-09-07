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
    <details className="notion_toggle_container">
      <summary>
        <RichText rich_text={block.toggle.rich_text} />
      </summary>
      <div className="pl-4">
        {children}
      </div>
    </details>
  )
}

export default Toggle
