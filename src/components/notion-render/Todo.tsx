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
    <div className="notion_to_do_container">
      <input
        type="checkbox"
        checked={block.to_do.checked}
        readOnly
        className="notion_to_do"
      />
      <RichText rich_text={block.to_do.rich_text} />
      {children}
    </div>
  )
}

export default Todo
