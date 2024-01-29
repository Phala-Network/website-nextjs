import { type Metadata } from 'next'
import Roadmap from '@/components/roadmap'

export const metadata: Metadata = {
  title: 'Roadmap | Phala Network',
}

export default function Page() {
  return (
    <Roadmap />
  )
}
