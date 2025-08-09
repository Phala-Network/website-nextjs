import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const logos = [
  {
    name: 'Astro',
    logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg',
  },
  {
    name: 'Vercel',
    logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg',
  },
  {
    name: 'Supabase',
    logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg',
  },
  {
    name: 'Figma',
    logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg',
  },
  {
    name: 'Astro',
    logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg',
  },
  {
    name: 'Vercel',
    logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-wordmark.svg',
  },
  {
    name: 'Astro',
    logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/sketch-wordmark.svg',
  },
  {
    name: 'Supabase',
    logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg',
  },
]

const Logos = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center">
          <Badge variant="outline">Referral Partners</Badge>
          <h1 className="mx-auto mt-8 mb-5 max-w-3xl text-4xl font-bold text-balance md:text-6xl">
            Join our partner network. Grow together with us.
          </h1>
          <p className="mx-auto max-w-3xl text-xl font-medium text-balance">
            Partner with leading companies in the industry, unlock new
            opportunities, and accelerate your business growth.
          </p>
          <Button size="lg" className="mt-8">
            Become a partner
          </Button>
        </div>
      </div>
      <div className="mx-auto mt-24 grid max-w-5xl grid-cols-2 place-items-center gap-x-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {logos.map((logo) => (
          <img
            className="grayscale"
            src={logo.logo}
            key={logo.name}
            alt={logo.name}
            width={144}
            height={80}
          />
        ))}
      </div>
    </section>
  )
}

export default Logos
