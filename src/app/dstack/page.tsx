import type { Metadata } from 'next'

import { Hero192 as AuditReport } from './audit-report'
import { Compare3 as Compare } from './compare'
import { Cta3 as Cta } from './cta'
import { Hero24 as Hero } from './hero'
import { Feature102 as Launch } from './launch'
import { Logos9 as Logos } from './logos'
import { Feature6 as TrustCenter } from './trust-center'

export const metadata: Metadata = {
  title: 'Dstack | Phala',
}

const DstackPage = () => {
  return (
    <main>
      <Hero />
      <Launch />
      <TrustCenter />
      <AuditReport />
      <Logos />
      <Compare />
      <Cta />
    </main>
  )
}

export default DstackPage
