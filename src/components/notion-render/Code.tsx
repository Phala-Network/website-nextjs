import type { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { useState } from 'react'
import { FiCheck, FiCopy, FiX } from 'react-icons/fi'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import type { ParsedBlock } from '@/lib/notion-client'
import { Button } from '../ui/button'
import MermaidDiagram from './MermaidDiagram'
import RichText from './RichText'

const Code = ({ block }: { block: ParsedBlock }) => {
  const codeBlock = block as CodeBlockObjectResponse
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>(
    'idle',
  )

  const code = codeBlock.code.rich_text[0]?.plain_text || ''
  const language = codeBlock.code.language

  // Check if this is a Mermaid diagram
  const isMermaid = language === 'mermaid' || language === 'Mermaid'

  const copyCode = async () => {
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

  // Render Mermaid diagram
  if (isMermaid) {
    return (
      <div className="notion_code">
        <MermaidDiagram chart={code} />
        {codeBlock.code.caption && (
          <div className="text-center text-sm text-muted-foreground mt-2">
            <RichText rich_text={codeBlock.code.caption} />
          </div>
        )}
      </div>
    )
  }

  // Render regular code block
  return (
    <div className="notion_code relative group bg-muted rounded-lg border overflow-hidden">
      <Button
        variant="outline"
        onClick={copyCode}
        className={`absolute top-2 right-2 p-2 transition-all opacity-0 group-hover:opacity-100 z-10`}
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
        language={language}
        className="text-sm"
        customStyle={{
          padding: '1em',
          margin: 0,
          backgroundColor: 'transparent',
        }}
        style={github}
      >
        {code}
      </SyntaxHighlighter>
      {codeBlock.code.caption && (
        <span className="notion_caption">
          <RichText rich_text={codeBlock.code.caption} />
        </span>
      )}
    </div>
  )
}

export default Code
