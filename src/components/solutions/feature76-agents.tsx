import { Bot, GitFork, MessageSquare, RefreshCw, Users } from 'lucide-react'

import { Button } from '@/components/ui/button'

const features = [
  {
    id: 'feature-1',
    title: 'Curate',
    description:
      'Knowledge retrieval pattern for RAG agents. Query databases, search embeddings, and curate context before responding to user queries.',
    icon: <Bot className="size-10" strokeWidth={1.5} />,
  },
  {
    id: 'feature-2',
    title: 'Plan-and-Execute',
    description:
      'Break down complex tasks into steps. Agent plans the approach, executes each step, and adjusts based on intermediate results.',
    icon: <GitFork className="size-10" strokeWidth={1.5} />,
  },
  {
    id: 'feature-3',
    title: 'Multi-Agent',
    description:
      'Coordinate multiple specialized agents. Divide tasks among expert agents and synthesize their outputs into cohesive responses.',
    icon: <Users className="size-10" strokeWidth={1.5} />,
  },
  {
    id: 'feature-4',
    title: 'Critique-Revise',
    description:
      'Self-improving agents that critique their outputs and iterate. Generate, evaluate, refine until meeting quality thresholds.',
    icon: <MessageSquare className="size-10" strokeWidth={1.5} />,
  },
  {
    id: 'feature-5',
    title: 'Compress-ReAct',
    description:
      'Reasoning and Acting pattern with context compression. Agent reasons, takes actions, observes results, and compresses long context.',
    icon: <RefreshCw className="size-10" strokeWidth={1.5} />,
  },
]

const Feature76 = () => {
  return (
    <section className="relative pt-32">
      <div className="container relative z-10 flex flex-col space-y-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="px-6 font-display font-semibold text-foreground text-3xl leading-tight md:mb-4 md:text-4xl lg:mb-0 lg:max-w-md lg:px-10 lg:text-5xl">
            How to Build Safe, Private & Autonomous Agents
          </h2>
          <Button
            variant="secondary"
            className="mx-6 w-fit rounded-full px-4 py-1 lg:mx-0 lg:px-6"
            asChild
          >
            <a href="https://cloud.phala.network/templates?tag=agent">
              Check Templates
            </a>
          </Button>
        </div>
        <div className="relative mt-6 md:mt-10">
          <div className="bg-border absolute left-0 right-0 top-0 h-px" />
          <div className="divide-border grid md:grid-cols-3 lg:grid-cols-5 md:divide-x">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="relative px-6 pb-20 md:pb-10 lg:px-10"
              >
                <div className="bg-border absolute left-0 right-0 top-0 h-px md:hidden" />
                <div className="bg-background relative -mt-6 mb-10 flex aspect-square w-12 items-center justify-center md:-mt-10 md:mb-10 md:w-20">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="mb-3 max-w-[12rem] text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-border absolute bottom-0 left-0 right-0 h-px" />
        </div>
      </div>
      <div className="container absolute inset-0 hidden h-full md:block">
        <div className="relative h-full">
          <div className="bg-border absolute inset-y-0 left-0 h-full w-px"></div>
          <div className="bg-border absolute inset-y-0 right-0 h-full w-px"></div>
        </div>
      </div>
    </section>
  )
}

export { Feature76 as Feature76Agents }
