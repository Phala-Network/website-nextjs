import type { ParsedBlock } from '@/lib/notion-client'

const Column = ({
  block,
  children,
}: {
  block: ParsedBlock
  children: React.ReactNode
}) => {
  return <div className="notion_column">{children}</div>
}

export default Column
