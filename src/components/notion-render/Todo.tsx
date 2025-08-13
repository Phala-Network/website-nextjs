import type { ToDoBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import type { ParsedBlock } from '@/lib/notion-client'
import RichText from './RichText'

const Todo = ({
  block,
  children,
}: {
  block: ParsedBlock
  children: React.ReactNode
}) => {
  const todoBlock = block as ToDoBlockObjectResponse
  return (
    <div className="notion_to_do_container">
      <input
        type="checkbox"
        checked={todoBlock.to_do.checked}
        readOnly
        className="notion_to_do"
      />
      <RichText rich_text={todoBlock.to_do.rich_text} />
      {children}
    </div>
  )
}

export default Todo
