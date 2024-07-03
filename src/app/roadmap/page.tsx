import { type Metadata } from 'next'
import Roadmap from '@/components/roadmap'

export const metadata: Metadata = {
  title: 'Roadmap | Phala Network',
  alternates: {
    canonical: "https://phala.network/roadmap",
  }
}

export default function Page() {
  return (
    <Roadmap />
  )
}
