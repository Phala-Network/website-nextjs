import { Lock } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { icons, type Model } from '@/lib/ai-models'

interface ModelCardProps {
  model: Model
}

const formatContextLength = (length: number) => {
  if (length >= 1000000) {
    return `${(length / 1000000).toFixed(1)}M`
  } else if (length >= 1000) {
    return `${(length / 1000).toFixed(0)}K`
  }
  return length.toString()
}

const formatPrice = (price: string) => {
  if (!price || price === '0' || price === '0.0' || price === '0.00')
    return 'Free'
  // Convert to number and format with appropriate precision
  const numPrice = parseFloat(price)
  if (Number.isNaN(numPrice)) return price
  return `${(numPrice * 1000000).toFixed(2)}/M`
}

const ModelCard = ({ model }: ModelCardProps) => {
  return (
    <a
      href={`https://redpill.ai/models/${model.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="bg-background overflow-hidden rounded-sm flex flex-col p-6 relative h-full hover:shadow-md transition-shadow">
        {/* Logo/Icon with Lock Badge */}
        <div className="bg-background rounded-full size-16 flex items-center justify-center border mb-6 sm:mb-12 shrink-0 relative">
          <Avatar className="size-10">
            <AvatarImage
              src={
                icons.find((icon) =>
                  model.name.toLowerCase().includes(icon.name.toLowerCase()),
                )?.icon
              }
              alt={model.name}
            />
            <AvatarFallback>
              {model.provider.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-0.5 -right-0.5 bg-white border border-border rounded-full p-1 shadow-sm">
            <Lock className="size-3 text-primary" />
          </div>
        </div>

        {/* Content - grows to fill available space */}
        <div className="flex-1 flex flex-col">
          {/* Title */}
          <div className="font-semibold text-lg leading-7 mb-3 xl:text-xl xl:leading-7 line-clamp-1">
            {model.name}
          </div>

          {/* Context */}
          <div className="text-sm leading-5 font-medium mb-3">
            {formatContextLength(model.contextLength)} context
          </div>

          {/* Pricing */}
          <div className="space-y-1 mb-6">
            {model.promptPrice && model.promptPrice !== '0' && (
              <div className="text-sm leading-5 text-muted-foreground">
                ${formatPrice(model.promptPrice)} input tokens
              </div>
            )}
            {model.completionPrice && model.completionPrice !== '0' && (
              <div className="text-sm leading-5 text-muted-foreground">
                ${formatPrice(model.completionPrice)} output tokens
              </div>
            )}
            {model.imagePrice && model.imagePrice !== '0' && (
              <div className="text-sm leading-5 text-muted-foreground">
                ${formatPrice(model.imagePrice)} image tokens
              </div>
            )}
          </div>

          {/* Encrypted Badge */}
          {model.verifiable && (
            <div className="mt-auto">
              <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-50 border border-green-200 text-xs leading-4 font-medium text-green-700">
                <Lock className="size-3" />
                Encrypted
              </div>
            </div>
          )}
        </div>
      </div>
    </a>
  )
}

interface ModelsListProps {
  models: Model[]
}

const ModelsList = ({ models }: ModelsListProps) => {
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="font-display text-center text-3xl font-semibold leading-none lg:text-4xl mb-6">
          Available Models
        </h1>
        <p className="font-display text-center text-muted-foreground leading-6 mb-10 max-w-2xl mx-auto">
          Access the latest frontier AI models with cryptographic privacy
          protection
        </p>

        {/* Models Grid */}
        {models.length > 0 ? (
          <div className="bg-gradient-to-r from-blue-300 to-blue-400 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {models.map((model) => (
                  <ModelCard key={model.id} model={model} />
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-16 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-medium">No Models Found</h3>
              <p className="text-muted-foreground mt-2 max-w-md">
                No models are currently available. Please check back later.
              </p>
            </div>
          )}

        {/* View All Models Button */}
        {/* <div className="mt-8 text-center">
          <a
            href="https://redpill.ai/models"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            View All Models →
          </a>
        </div> */}
      </div>
    </section>
  )
}

export default ModelsList
