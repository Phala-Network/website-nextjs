import type { Metadata } from 'next'

import Benefits from './benefits'
import Faq from './faq'
import ForEnterprises from './for-enterprises'
import Hero from './hero'
import Integrate from './integrate'
import ModelsList from './models-list'
import ModelsMarquee from './models-marquee'

export const revalidate = 7200

export const metadata: Metadata = {
  title: 'Confidential AI Models',
  description:
    'Others claim privacy. We prove it. Access frontier AI models on cloud, with proof that your data is protected end-to-end.',
}

export default function ConfidentialAiModelsPage() {
  return (
    <div className="w-full bg-background">
      <div className="mx-auto max-w-7xl">
        <Hero />
        <ModelsMarquee />
        <Benefits />
        <Integrate />
        <ModelsList />
        <ForEnterprises />
        <Faq />
      </div>
    </div>
  )
}
