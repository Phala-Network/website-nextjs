import { useAtomValue } from 'jotai'
import { ToDoBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { BlockAtom } from './atoms'
import RichText from './RichText'

const Todo = ({
  theAtom,
  children,
}: {
  theAtom: BlockAtom
  children: React.ReactNode
}) => {
  const block = useAtomValue(theAtom) as ToDoBlockObjectResponse
  return (
    <div className={`notion_${block.type}_container`}>
      <input
        type="checkbox"
        checked={block.to_do.checked}
        readOnly
        className={`notion_${block.type}`}
      />
      <RichText rich_text={block.to_do.rich_text} />
      {children}
    </div>
  )
}

export default Todo
