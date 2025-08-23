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
      <div className="border-border bg-background flex flex-col gap-4 rounded-lg border p-6 hover:border-primary transition-colors h-full">
        {/* Header with Avatar and Provider */}
        <div className="flex items-center gap-3">
          <Avatar className="size-12 p-2">
            <AvatarImage
              src={
                icons.find(
                  (icon) =>
                    model.name
                      .toLowerCase()
                      .includes(icon.name.toLowerCase()) ||
                    icon.name === model.provider.toLowerCase(),
                )?.icon
              }
              alt={model.provider}
            />
            <AvatarFallback className="text-sm font-medium">
              {model.provider.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h4 className="font-medium line-clamp-1">{model.name}</h4>
            <div className="flex items-center gap-2 mt-1">
              {model.verifiable && (
                <Badge
                  variant="outline"
                  className="border-primary-500 text-primary-500"
                >
                  Encrypted
                </Badge>
              )}
              <Badge variant="outline">{model.slug}</Badge>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm line-clamp-2">
          {model.description}
        </p>

        {/* Model Details */}
        <div className="space-y-3">
          {/* Pricing Information */}
          {(model.promptPrice ||
            model.completionPrice ||
            model.imagePrice ||
            model.requestPrice) && (
            <div className="text-xs text-muted-foreground">
              {formatContextLength(model.contextLength)} context
              {model.promptPrice && model.promptPrice !== '0' && (
                <span> | ${formatPrice(model.promptPrice)} input tokens</span>
              )}
              {model.completionPrice && model.completionPrice !== '0' && (
                <span>
                  {' '}
                  | ${formatPrice(model.completionPrice)} output tokens
                </span>
              )}
              {model.imagePrice && model.imagePrice !== '0' && (
                <span> | ${formatPrice(model.imagePrice)} image tokens</span>
              )}
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
        <h1 className="text-center text-3xl font-medium lg:text-4xl mb-6">
          Available Models
        </h1>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Access the latest frontier AI models with cryptographic privacy
          protection
        </p>

        {/* Models Grid */}
        {models.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {models.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
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
