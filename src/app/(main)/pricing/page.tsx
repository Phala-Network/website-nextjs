import type { Metadata } from 'next'

import PricingClient from './pricing-client'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing. Pay as you go pricing for every scale. Only pay for what you use, billed by the hour.',
}

export default function PricingPage() {
  return <PricingClient />
}
