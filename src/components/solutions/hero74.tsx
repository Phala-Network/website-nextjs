import {
  AlignCenter,
  Brain,
  Package,
  ReceiptText,
  Timer,
  Vault,
} from 'lucide-react'

import { Button } from '@/components/ui/button'

const Hero74 = () => {
  return (
    <section className="py-32">
      <div>
        <div className="container text-center">
          <h1 className="font-display mb-4 text-5xl font-medium leading-none">
            Fine-Tuned Models: Private Customization
          </h1>
          <p className="font-display text-muted-foreground text-lg leading-7 md:text-xl max-w-3xl mx-auto">
            Fine-tune foundation models on proprietary data inside TEEs. Better
            accuracy, zero data leakage. Keep your training data, gradients, and
            custom weights encrypted with hardware-enforced privacy.
          </p>
          <div className="mx-auto mt-8 flex w-full max-w-sm items-center space-x-2">
            <Button asChild className="font-medium">
              <a href="https://cloud.phala.network/dashboard/gpu-tee">
                Start Fine-Tuning
              </a>
            </Button>
            <Button asChild variant="outline" className="font-medium">
              <a href="https://phala.com/contact">Contact Us</a>
            </Button>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-24 items-center justify-center rounded-md border">
                <Package />
              </div>
              <span className="font-display text-sm leading-5 text-muted-foreground">LoRA & PEFT</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-24 items-center justify-center rounded-md border">
                <AlignCenter />
              </div>
              <span className="font-display text-sm leading-5 text-muted-foreground">
                Multi-GPU training
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-24 items-center justify-center rounded-md border">
                <Vault />
              </div>
              <span className="font-display text-sm leading-5 text-muted-foreground">
                Sealed checkpoints
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-24 items-center justify-center rounded-md border">
                <ReceiptText />
              </div>
              <span className="font-display text-sm leading-5 text-muted-foreground">
                Training attestations
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-24 items-center justify-center rounded-md border">
                <Timer />
              </div>
              <span className="font-display text-sm leading-5 text-muted-foreground">
                Fast deployment
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-24 items-center justify-center rounded-md border">
                <Brain />
              </div>
              <span className="font-display text-sm leading-5 text-muted-foreground">
                Gradient privacy
              </span>
            </div>
          </div>
        </div>
        <div className="relative mt-20 hidden justify-between gap-10 lg:flex overflow-hidden">
          <img
            src="/solutions/tune/hero-left.png"
            alt="Private fine-tuning process"
            className="max-h-[500px] w-full max-w-[50%] rounded-tr-xl rounded-br-md object-cover flex-shrink-0"
          />
          <img
            src="/solutions/tune/hero-right.png"
            alt="TEE-protected training"
            className="max-h-[500px] w-full max-w-[50%] rounded-tl-xl rounded-bl-md object-cover flex-shrink-0"
          />
          <img
            src="/solutions/tune/hero-middle.png"
            alt="Sealed checkpoints"
            className="absolute top-1/2 left-1/2 max-h-80 max-w-80 -translate-x-1/2 -translate-y-1/2 rounded-xl object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  )
}

export { Hero74 }
