import { Lock } from 'lucide-react'

import { Marquee } from '@/components/magicui/marquee'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { icons, type Model } from '@/lib/ai-models'

// ModelCard component
interface ModelCardProps {
  model: Model
}

const ModelCard = ({ model }: ModelCardProps) => {
  return (
    <div className="border-border flex max-w-72 gap-4 rounded-lg border p-4 items-center min-h-[88px]">
      <div className="relative">
        <Avatar className="size-12 p-1.5">
          <AvatarImage
            src={
              icons.find((icon) =>
                model.name.toLowerCase().includes(icon.name.toLowerCase()),
              )?.icon
            }
          />
          <AvatarFallback>
            {model.name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="absolute -bottom-0.5 -right-0.5 bg-card border rounded-full p-1">
          <Lock className="size-3 text-primary-500" />
        </div>
      </div>
      <div className="flex flex-col overflow-hidden flex-1 gap-1">
        <p className="font-display font-medium leading-5">{model.name}</p>
        {model.verifiable && (
          <Badge
            variant="outline"
            className="border-primary-500 text-primary-500 font-display"
          >
            Encrypted
          </Badge>
        )}
        {/* <p className="text-muted-foreground text-sm line-clamp-2">
          {model.description}
        </p> */}
      </div>
    </div>
  )
}

interface ModelsMarqueeProps {
  models: Model[]
}

const ModelsMarquee = ({ models }: ModelsMarqueeProps) => {
  const firstLine = models.slice(0, 10)
  // const secondLine = models.slice(10, 20)

  return (
    <section>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-8">
        <Marquee className="[--duration:30s]">
          {firstLine.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </Marquee>
        {/* <Marquee reverse className="[--duration:30s]">
          {secondLine.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </Marquee> */}
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </div>
    </section>
  )
}

export default ModelsMarquee
