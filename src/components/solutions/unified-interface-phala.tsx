'use client'

import { ArrowRight, Shield } from 'lucide-react'
import { useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'

interface CardData {
  id: string
  title: string
  subtitle: string
  icon: React.ReactNode
}

interface ModelCardData {
  id: string
  title: string
  provider: string
  badge?: string
}

// Card Data
const LAYER_1_CARD: CardData = {
  id: 'input',
  title: 'Your private request',
  subtitle: 'End-to-end encrypted',
  icon: <ArrowRight className="w-8 h-8" />,
}

const LAYER_2_CARD: CardData = {
  id: 'router',
  title: 'Phala Cloud',
  subtitle: 'Hardware-attested routing',
  icon: <Shield className="w-8 h-8" />,
}

const LAYER_3_CARDS: ModelCardData[] = [
  {
    id: 'deepseek',
    title: 'DeepSeek V3.1',
    provider: 'Phala',
    badge: 'GPU TEE',
  },
  {
    id: 'qwen',
    title: 'Qwen3 Coder 480B',
    provider: 'NearAI',
    badge: 'GPU TEE',
  },
  {
    id: 'openai',
    title: 'GPT OSS 120B',
    provider: 'Tinfoil',
    badge: 'GPU TEE',
  },
]

// Desktop Connection Lines Component
const DesktopConnectionLines = ({
  cards,
  activeCard,
  isSecureMode,
}: {
  cards: ModelCardData[]
  activeCard: string
  isSecureMode?: boolean
}) => {
  const paths = [
    'M2 150 C 12 150 32 75 50 65',
    'M2 160 L 50 160',
    'M2 170 C 12 170 32 255 50 255',
  ]
  const yPositions = [65, 160, 255]

  return (
    <svg className="w-16 h-80" viewBox="0 0 64 320" fill="none">
      <g stroke="currentColor" strokeWidth="1.5">
        {cards.map((card, index) => (
          <path
            key={card.id}
            d={paths[index]}
            className={`transition-all duration-300 ${
              activeCard === card.id
                ? 'text-primary'
                : 'text-muted-foreground/40'
            }`}
          />
        ))}
      </g>
      <g>
        {cards.map((card, index) => (
          <circle
            key={card.id}
            cx="58"
            cy={yPositions[index]}
            r={activeCard === card.id ? '6' : '4'}
            fill="currentColor"
            className={`transition-all duration-300 ${
              activeCard === card.id
                ? 'text-primary'
                : 'text-muted-foreground/40'
            }`}
          />
        ))}
      </g>
    </svg>
  )
}

// Mobile Connection Lines Component
const MobileConnectionLines = ({
  cards,
  activeCard,
}: {
  cards: ModelCardData[]
  activeCard: string
}) => {
  const paths = [
    'M155 2C160 15 60 5 60 18',
    'M160 2C160 12 160 15 160 18',
    'M165 2C160 15 260 5 260 18',
  ]
  const xPositions = [60, 160, 260]

  return (
    <svg className="w-full h-10" viewBox="0 0 320 32" fill="none">
      <g stroke="currentColor" strokeWidth="1.5">
        {cards.map((card, index) => (
          <path
            key={card.id}
            d={paths[index]}
            className={`transition-all duration-300 ${
              activeCard === card.id
                ? 'text-primary'
                : 'text-muted-foreground/40'
            }`}
          />
        ))}
      </g>
      <g>
        {cards.map((card, index) => (
          <circle
            key={card.id}
            cx={xPositions[index]}
            cy="24"
            r={activeCard === card.id ? '4' : '3'}
            fill="currentColor"
            className={`transition-all duration-300 ${
              activeCard === card.id
                ? 'text-primary'
                : 'text-muted-foreground/40'
            }`}
          />
        ))}
      </g>
    </svg>
  )
}

// Model Button Component
const ModelButton = ({
  card,
  onClick,
  isActive,
}: {
  card: ModelCardData
  onClick: () => void
  isActive: boolean
}) => (
  <button
    className={`font-medium transition-all focus-visible:outline-none h-11 flex items-center justify-center rounded-lg p-4 border ${
      isActive
        ? 'bg-primary/10 border-primary text-primary'
        : 'border-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground'
    }`}
    onClick={onClick}
  >
    <div className="text-sm font-medium">{card.provider}</div>
  </button>
)

const UnifiedInterfacePhala = () => {
  const [activeCard, setActiveCard] = useState<string>(LAYER_3_CARDS[1].id)

  const selectedModel = LAYER_3_CARDS.find((card) => card.id === activeCard)
  const isSecureMode = !!selectedModel?.badge

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
            On-prem Privacy, Cloud Simplicity
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Deploy confidential AI inference with the flexibility of cloud and
            the security of on-premise infrastructure.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-center min-h-96">
            <div className="flex-none">
              <InterfaceCard card={LAYER_1_CARD} isSecureMode={isSecureMode} />
            </div>

            <div className="flex-none mx-8 flex items-center">
              <svg className="w-16 h-4" viewBox="0 0 64 16" fill="none">
                <path
                  d="M2 8 L 50 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-primary"
                />
                <circle
                  cx="58"
                  cy="8"
                  r="6"
                  fill="currentColor"
                  className="text-primary"
                />
              </svg>
            </div>

            <div className="flex-none">
              <InterfaceCard card={LAYER_2_CARD} isSecureMode={isSecureMode} />
            </div>

            <div className="flex-none mx-8 flex items-center">
              <DesktopConnectionLines
                cards={LAYER_3_CARDS}
                activeCard={activeCard}
                isSecureMode={isSecureMode}
              />
            </div>

            <div className="flex-none">
              <div className="flex flex-col space-y-6">
                {LAYER_3_CARDS.map((card) => (
                  <ModelInterfaceCard
                    key={card.id}
                    card={card}
                    activeCard={activeCard}
                    setActiveCard={setActiveCard}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="w-full min-w-80 space-y-6 md:w-auto flex flex-col items-center">
              <InterfaceCard card={LAYER_1_CARD} isSecureMode={isSecureMode} />

              <svg
                width="100%"
                className="h-8"
                viewBox="0 0 320 32"
                fill="none"
              >
                <g stroke="currentColor" strokeWidth="1.5">
                  <path d="M160 2 L 160 18" className="text-primary" />
                </g>
                <g>
                  <circle
                    cy="24"
                    cx="160"
                    r="4"
                    fill="currentColor"
                    className="text-primary"
                  />
                </g>
              </svg>

              <InterfaceCard card={LAYER_2_CARD} isSecureMode={isSecureMode} />

              <div className="block w-full">
                <MobileConnectionLines
                  cards={LAYER_3_CARDS}
                  activeCard={activeCard}
                />

                <div className="grid grid-cols-3 gap-4 pb-3">
                  {LAYER_3_CARDS.map((card) => (
                    <ModelButton
                      key={card.id}
                      card={card}
                      onClick={() => setActiveCard(card.id)}
                      isActive={activeCard === card.id}
                    />
                  ))}
                </div>
              </div>

              <ModelInterfaceCard
                card={
                  LAYER_3_CARDS.find((card) => card.id === activeCard) ||
                  LAYER_3_CARDS[0]
                }
                activeCard={activeCard}
                setActiveCard={setActiveCard}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface InterfaceCardProps {
  card: CardData
  isSecureMode?: boolean
}

const InterfaceCard = ({ card, isSecureMode = false }: InterfaceCardProps) => {
  return (
    <Card className="w-full lg:w-80 h-32 transition-all duration-300 rounded-xl border border-border/50 shadow-sm">
      <CardContent className="p-8 h-full flex items-center">
        <div className="flex items-center space-x-6">
          <div className="text-primary">{card.icon}</div>
          <div>
            <h3 className="font-medium text-lg text-foreground">
              {card.title}
            </h3>
            <p className="text-sm text-muted-foreground">{card.subtitle}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface ModelInterfaceCardProps {
  card: ModelCardData
  activeCard: string
  setActiveCard: (cardId: string) => void
}

const ModelInterfaceCard = ({
  card,
  activeCard,
  setActiveCard,
}: ModelInterfaceCardProps) => {
  const isSelected = activeCard === card.id

  return (
    <Card
      className={`w-full lg:w-80 h-32 cursor-pointer transition-all duration-300 lg:hover:scale-105 hover:shadow-lg rounded-xl border p-6 shadow-sm ${
        isSelected
          ? 'border-primary/60 shadow-md bg-primary/5'
          : 'border-border/50 hover:border-primary/50 hover:bg-primary/3'
      }`}
      onMouseEnter={() => setActiveCard(card.id)}
    >
      <CardContent className="p-0 h-full flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-base text-foreground">
              {card.title}
            </h3>
            {card.badge && (
              <span className="inline-flex items-center rounded bg-primary/10 px-2 py-1 text-[10px] font-medium text-primary ring-1 ring-inset ring-primary/20">
                {card.badge}
              </span>
            )}
          </div>
          <p className="text-muted-foreground text-xs">by {card.provider}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export { UnifiedInterfacePhala }
