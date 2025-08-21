import { Marquee } from '@/components/magicui/marquee'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { fetchAiModels, icons, type Model } from '@/lib/ai-models'

// ModelCard component
interface ModelCardProps {
  model: Model
}

const ModelCard = ({ model }: ModelCardProps) => {
  return (
    <div className="border-border flex max-w-72 gap-2 rounded-lg border p-4">
      <Avatar className="size-8 p-1.5">
        <AvatarImage
          src={icons.find((icon) => icon.name === model.provider)?.icon}
        />
        <AvatarFallback>
          {model.provider.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1 overflow-hidden flex-1">
        <p className="text-sm font-medium line-clamp-1 mt-1.5">{model.name}</p>
        <p className="text-muted-foreground text-xs line-clamp-1">
          {model.provider}
          {model.verifiable && ` | GPU TEE`}
        </p>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {model.description}
        </p>
      </div>
    </div>
  )
}

const ModelsMarquee = async () => {
  const models = await fetchAiModels()

  const firstLine = models.slice(0, 10)
  const secondLine = models.slice(10, 20)

  return (
    <section>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-8">
        <Marquee className="[--duration:30s]">
          {firstLine.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:30s]">
          {secondLine.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </div>
    </section>
  )
}

export default ModelsMarquee
