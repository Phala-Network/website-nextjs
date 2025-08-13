import type { ParsedBlock } from '@/lib/notion-client'

const ColumnList = ({
  block,
  children,
}: {
  block: ParsedBlock
  children: React.ReactNode
}) => {
  return <div className="notion_column_list">{children}</div>
}

export default ColumnList
