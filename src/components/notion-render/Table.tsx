import { useAtomValue } from 'jotai'
import { TableBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { BlockAtom } from './atoms'
import RichText from './RichText'

const Table = ({ theAtom }: { theAtom: BlockAtom }) => {
  const block = useAtomValue(theAtom) as TableBlockObjectResponse
  const has_column_header = block.table.has_column_header
  const has_row_header = block.table.has_row_header
  return (
    <table className="notion_table">
      <tbody>
        {/* @ts-ignore */}
        {block.children?.map((row, i) => {
          if (row) {
            return (
              <tr
                key={row.id || `${block.id}-${i}`}
                className={
                  has_column_header && i === 0 ? 'notion_table_header' : ''
                }
              >
                {/* @ts-ignore */}
                {row.table_row.cells.map((cell, j) => {
                  if (cell) {
                    return (
                      <td
                        key={cell.id || `${block.id}-${i}-${j}`}
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
