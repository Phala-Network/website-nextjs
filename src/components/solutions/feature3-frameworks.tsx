import { Code, GitBranch, List, Play, WandSparkles } from 'lucide-react'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

const Feature3 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h2 className="mb-6 text-pretty font-display font-semibold text-foreground text-3xl leading-tight md:text-4xl lg:text-5xl">
            Popular Frameworks
          </h2>

          <div className="mt-10 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-1">
                <Code className="size-4" strokeWidth={1} />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">
                  LangChain & LangGraph
                </h2>
                <p className="text-muted-foreground leading-snug">
                  Build stateful multi-actor applications with cycles and
                  controllability
                </p>
              </CardContent>
              <CardFooter className="justify-end pb-0 pr-0">
                <img
                  className="h-40 w-full rounded-tl-md object-cover object-center"
                  src="/solutions/agents/langchain.avif"
                  alt="LangChain & LangGraph"
                />
              </CardFooter>
            </Card>
            <a
              href="https://cloud.phala.network/templates/n8n-automation"
              className="block"
            >
              <Card>
                <CardHeader className="pb-1">
                  <Play className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">N8n</h2>
                  <p className="text-muted-foreground leading-snug">
                    Low-code automation platform for complex workflows and
                    integrations
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="/solutions/agents/n8n.webp"
                    alt="N8n"
                  />
                </CardFooter>
              </Card>
            </a>
            <a
              href="https://cloud.phala.network/templates?tag=mcp"
              className="block"
            >
              <Card>
                <CardHeader className="pb-1">
                  <GitBranch className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">MCP</h2>
                  <p className="text-muted-foreground leading-snug">
                    Model Context Protocol for connecting AI models to data
                    sources
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="/solutions/agents/mcp.png"
                    alt="MCP"
                  />
                </CardFooter>
              </Card>
            </a>
            <Card>
              <CardHeader className="pb-1">
                <List className="size-4" strokeWidth={1} />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">Postgrep</h2>
                <p className="text-muted-foreground leading-snug">
                  PostgreSQL-based RAG system for semantic search and retrieval
                </p>
              </CardContent>
              <CardFooter className="justify-end pb-0 pr-0">
                <img
                  className="h-40 w-full rounded-tl-md object-cover object-center"
                  src="/solutions/agents/postgre.png"
                  alt="Postgrep"
                />
              </CardFooter>
            </Card>
            <a
              href="https://cloud.phala.network/templates/msft-presidio-app"
              className="block"
            >
              <Card>
                <CardHeader className="pb-1">
                  <WandSparkles className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">
                    Microsoft Presidio
                  </h2>
                  <p className="text-muted-foreground leading-snug">
                    PII detection and anonymization for privacy-preserving AI
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="/solutions/agents/micro.png"
                    alt="Microsoft Presidio"
                  />
                </CardFooter>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Feature3 as Feature3Frameworks }
