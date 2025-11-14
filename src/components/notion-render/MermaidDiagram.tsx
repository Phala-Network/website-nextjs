'use client'

import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'

interface MermaidDiagramProps {
  chart: string
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const [svg, setSvg] = useState<string>('')
  const [error, setError] = useState<string>('')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize mermaid with configuration
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      securityLevel: 'loose',
      fontFamily: 'inherit',
    })

    const renderChart = async () => {
      try {
        // Generate unique ID for this diagram
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`

        // Render the diagram
        const { svg: renderedSvg } = await mermaid.render(id, chart)
        setSvg(renderedSvg)
        setError('')
      } catch (err) {
        console.error('Mermaid render error:', err)
        setError(err instanceof Error ? err.message : 'Failed to render diagram')
      }
    }

    renderChart()
  }, [chart])

  if (error) {
    return (
      <div className="border border-red-300 bg-red-50 rounded-lg p-4 my-4">
        <p className="text-red-800 text-sm font-medium mb-2">
          Failed to render Mermaid diagram
        </p>
        <pre className="text-xs text-red-600 overflow-auto">{error}</pre>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className="mermaid-diagram my-6 flex justify-center items-center overflow-x-auto bg-white rounded-lg border p-4"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Mermaid generates safe SVG
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
