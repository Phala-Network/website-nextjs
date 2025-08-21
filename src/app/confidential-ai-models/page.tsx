import type { Metadata } from 'next'

import FinalCTA from '@/components/final-cta'
import { fetchAiModels } from '@/lib/ai-models'
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

export default async function ConfidentialAiModelsPage() {
  const models = await fetchAiModels(20, 0)

  return (
    <div className="w-full bg-background">
      <div className="mx-auto max-w-7xl">
        <Hero />
        <ModelsMarquee models={models} />
        <Benefits />
        <Integrate />
        <ModelsList models={models.slice(0, 12)} />
        <ForEnterprises />
        <Faq />
        <FinalCTA />
      </div>
    </div>
  )
}
