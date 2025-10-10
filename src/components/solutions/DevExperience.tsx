'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface CodeExample {
  language: string
  filename: string
  code: string
}

interface DevExperienceProps {
  title: string
  description: string
  codeExamples: CodeExample[]
  features?: string[]
}

export function DevExperience({
  title,
  description,
  codeExamples,
  features,
}: DevExperienceProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground">{description}</p>
          </div>

          <Tabs
            defaultValue={codeExamples[0]?.language || 'bash'}
            className="w-full"
          >
            <TabsList
              className="grid w-full"
              style={{
                gridTemplateColumns: `repeat(${codeExamples.length}, 1fr)`,
              }}
            >
              {codeExamples.map((example) => (
                <TabsTrigger
                  key={example.language}
                  value={example.language}
                  className="capitalize"
                >
                  {example.language}
                </TabsTrigger>
              ))}
            </TabsList>
            {codeExamples.map((example, index) => (
              <TabsContent key={example.language} value={example.language}>
                <div className="rounded-lg border bg-muted/50 overflow-hidden">
                  <div className="flex items-center justify-between border-b px-4 py-3 bg-muted">
                    <span className="text-sm font-mono text-muted-foreground">
                      {example.filename}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(example.code, index)}
                    >
                      {copiedIndex === index ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <pre className="p-4 overflow-x-auto">
                    <code className="text-sm font-mono">{example.code}</code>
                  </pre>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {features && features.length > 0 && (
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
