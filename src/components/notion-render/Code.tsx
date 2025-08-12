import type { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { useAtomValue } from 'jotai'
import { useState } from 'react'
import { FiCheck, FiCopy, FiX } from 'react-icons/fi'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { Button } from '../ui/button'
import type { BlockAtom } from './atoms'
import RichText from './RichText'

const Code = ({ theAtom }: { theAtom: BlockAtom }) => {
  const block = useAtomValue(theAtom) as CodeBlockObjectResponse
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>(
    'idle',
  )

  const copyCode = async () => {
    const code = block.code.rich_text[0]?.plain_text || ''
    if (!code.trim()) return

    try {
      await navigator.clipboard.writeText(code)
      setCopyState('copied')
      setTimeout(() => setCopyState('idle'), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
      setCopyState('error')
      setTimeout(() => setCopyState('idle'), 2000)
    }
  }

  const getCopyIcon = () => {
    switch (copyState) {
      case 'copied':
        return <FiCheck className="w-4 h-4" />
      case 'error':
        return <FiX className="w-4 h-4" />
      default:
        return <FiCopy className="w-4 h-4" />
    }
  }

  return (
    <div className="notion_code relative group bg-muted rounded-lg border overflow-hidden">
      <Button
        variant="outline"
        onClick={copyCode}
        className={`absolute top-2 right-2 p-2 transition-all opacity-0 group-hover:opacity-100`}
        title={
          copyState === 'copied'
            ? 'Copied!'
            : copyState === 'error'
              ? 'Failed to copy'
              : 'Copy code'
        }
        aria-label="Copy code to clipboard"
      >
        {getCopyIcon()}
      </Button>
      <SyntaxHighlighter
        language={block.code.language}
        className="text-sm"
        customStyle={{
          padding: '1em',
          margin: 0,
          backgroundColor: 'transparent',
        }}
        style={github}
      >
        {block.code.rich_text[0].plain_text}
      </SyntaxHighlighter>
      {block.code.caption && (
        <span className="notion_caption">
          <RichText rich_text={block.code.caption} />
        </span>
      )}
    </div>
  )
}

export default Code
