import type { TableBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import type { ParsedBlock } from '@/lib/notion-client'
import RichText from './RichText'

const Table = ({ block }: { block: ParsedBlock }) => {
  const tableBlock = block as TableBlockObjectResponse
  const has_column_header = tableBlock.table.has_column_header
  const has_row_header = tableBlock.table.has_row_header
  return (
    <table className="notion_table">
      <tbody>
        {/* @ts-ignore */}
        {tableBlock.children?.map((row, i) => {
          if (row) {
            return (
              <tr
                key={row.id || `${tableBlock.id}-${i}`}
                className={
                  has_column_header && i === 0 ? 'notion_table_header' : ''
                }
              >
                {/* @ts-ignore */}
                {row.table_row.cells.map((cell, j) => {
                  if (cell) {
                    return (
                      <td
                        key={cell.id || `${tableBlock.id}-${i}-${j}`}
                        className={`notion_table_cell ${
                          has_row_header && i === 0 ? 'notion_table_header' : ''
                        }`}
                      >
                        <RichText rich_text={cell} />
                      </td>
                    )
                  } else {
                    return <></>
                  }
                })}
              </tr>
            )
          } else {
            return <></>
          }
        })}
      </tbody>
    </table>
  )
}

export default Table
