import { TableBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { ParsedBlock } from '@/lib/notion-client'
import RichText from './RichText'

const Table = ({ block }: { block: ParsedBlock }) => {
  const has_column_header = (block as TableBlockObjectResponse).table
    .has_column_header
  const has_row_header = (block as TableBlockObjectResponse).table
    .has_row_header
  return (
    <table className="notion_table">
      <tbody>
        {block.children?.map((row, i) => {
          if (row) {
            return (
              <tr
                key={row.id}
                className={
                  has_column_header && i === 0 ? 'notion_table_header' : ''
                }
              >
                {/* @ts-ignore */}
                {row.table_row.cells.map((cell, j) => {
                  if (cell) {
                    return (
                      <td
                        key={cell.id}
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
