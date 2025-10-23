import { Badge } from '@/components/ui/badge'

interface Feature206Props {
  title: string
  description: string
  points?: string[]
  images?: string[]
  links?: string[]
}

const Feature206 = ({
  title,
  description,
  points,
  images,
  links,
}: Feature206Props) => {
  // Map points to the 8-grid layout (4 cards + 4 images)
  const cards =
    points && points.length >= 4
      ? [
          {
            title: points[0],
            description:
              'Traditional cloud infrastructure exposes sensitive information to operators and administrators.',
            color: 'bg-muted/50',
            textColor: 'text-foreground',
          },
          {
            title: points[1],
            description:
              'Hardware-enforced isolation prevents unauthorized access while maintaining computational efficiency.',
            color: 'bg-primary',
            textColor: 'text-primary-foreground',
          },
          {
            title: points[2],
            description:
              'End-to-end encryption protects data in transit, at rest, and critically during computation.',
            color: 'bg-primary',
            textColor: 'text-primary-foreground',
          },
          {
            title: points[3],
            description:
              'Cryptographic verification ensures code integrity and proves execution in genuine TEE hardware.',
            color: 'bg-muted/50',
            textColor: 'text-foreground',
          },
        ]
      : [
          {
            title: 'Privacy regulations prevent data sharing',
            description:
              'Data sharing blocked by privacy, IP protection, and compliance requirements.',
            color: 'bg-muted/50',
            textColor: 'text-foreground',
          },
          {
            title: 'IP protection demands prevent collaboration',
            description:
              'Enable secure collaboration while protecting proprietary information.',
            color: 'bg-primary',
            textColor: 'text-primary-foreground',
          },
          {
            title: 'Centralized AI exposes business intelligence',
            description:
              'Hardware-enforced isolation prevents unauthorized access to sensitive data.',
            color: 'bg-primary',
            textColor: 'text-primary-foreground',
          },
          {
            title: 'Traditional methods require trust',
            description:
              'Cryptographic verification ensures code integrity and data protection.',
            color: 'bg-muted/50',
            textColor: 'text-foreground',
          },
        ]

  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <Badge variant="outline" className="rounded-full">
            Why It Matters
          </Badge>
          <h2 className="font-display font-semibold text-foreground text-3xl leading-tight md:text-4xl lg:text-5xl">{title}</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <img
            src={images?.[0] || '/solutions/justice.png'}
            alt="Data security"
            className="aspect-square size-full rounded-2xl object-cover md:order-1 xl:order-1"
          />
          <div
            className={`flex flex-col justify-between gap-20 rounded-2xl ${cards[0].color} p-12 md:order-2 md:gap-32 xl:order-2`}
          >
            <h3 className={`text-2xl ${cards[0].textColor}`}>
              {cards[0].title}
            </h3>
            <div className="">
              <p
                className={`mb-8 ${cards[0].textColor === 'text-foreground' ? 'text-muted-foreground' : 'text-primary-foreground/80'}`}
              >
                {cards[0].description}
              </p>
              <a
                href={links?.[0] || '#'}
                className={`text-sm underline ${cards[0].textColor === 'text-foreground' ? '' : 'text-primary-foreground/80'}`}
              >
                More Information
              </a>
            </div>
          </div>
          <img
            src={images?.[1] || '/solutions/hermes.png'}
            alt="Confidential computing"
            className="aspect-square size-full rounded-2xl object-cover md:order-4 xl:order-3"
          />
          <div
            className={`flex flex-col justify-between gap-20 rounded-2xl ${cards[1].color} p-12 md:order-3 md:gap-32 xl:order-4`}
          >
            <h3 className={`text-2xl ${cards[1].textColor}`}>
              {cards[1].title}
            </h3>
            <div className="">
              <p
                className={`mb-8 ${cards[1].textColor === 'text-foreground' ? 'text-muted-foreground' : 'text-primary-foreground/80'}`}
              >
                {cards[1].description}
              </p>
              <a
                href={links?.[1] || '#'}
                className={`text-sm underline ${cards[1].textColor === 'text-foreground' ? '' : 'text-primary-foreground/80'}`}
              >
                More Information
              </a>
            </div>
          </div>

          <img
            src={images?.[2] || '/solutions/apollo.png'}
            alt="Zero-trust architecture"
            className="aspect-square size-full rounded-2xl object-cover md:order-5 xl:order-6"
          />
          <div
            className={`flex flex-col justify-between gap-20 rounded-2xl ${cards[2].color} p-12 md:order-6 md:gap-32 xl:order-5`}
          >
            <h3 className={`text-2xl ${cards[2].textColor}`}>
              {cards[2].title}
            </h3>
            <div className="">
              <p
                className={`mb-8 ${cards[2].textColor === 'text-foreground' ? 'text-muted-foreground' : 'text-primary-foreground/80'}`}
              >
                {cards[2].description}
              </p>
              <a
                href={links?.[2] || '#'}
                className={`text-sm underline ${cards[2].textColor === 'text-foreground' ? '' : 'text-primary-foreground/80'}`}
              >
                More Information
              </a>
            </div>
          </div>
          <img
            src={images?.[3] || '/solutions/athena.png'}
            alt="Attestation"
            className="aspect-square size-full rounded-2xl object-cover md:order-8"
          />
          <div
            className={`flex flex-col justify-between gap-20 rounded-2xl ${cards[3].color} p-12 md:order-7 md:gap-32`}
          >
            <h3 className={`text-2xl ${cards[3].textColor}`}>
              {cards[3].title}
            </h3>
            <div className="">
              <p
                className={`mb-8 ${cards[3].textColor === 'text-foreground' ? 'text-muted-foreground' : 'text-primary-foreground/80'}`}
              >
                {cards[3].description}
              </p>
              <a
                href={links?.[3] || '#'}
                className={`text-sm underline ${cards[3].textColor === 'text-foreground' ? '' : 'text-primary-foreground/80'}`}
              >
                More Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Feature206 }
