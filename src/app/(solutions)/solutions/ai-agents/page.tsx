import type { Metadata } from 'next'

import SolutionsCTA from '@/components/solutions-cta'
import { Casestudies1Agents } from '@/components/solutions/casestudies1-agents'
import { Compliance5 } from '@/components/solutions/compliance5'
import { Feature3Frameworks } from '@/components/solutions/feature3-frameworks'
import { Feature22 } from '@/components/solutions/feature22'
import { Feature44 } from '@/components/solutions/feature44'
import { Feature64 } from '@/components/solutions/feature64'
import { Feature76Agents } from '@/components/solutions/feature76-agents'
import { Feature206 } from '@/components/solutions/feature206'
import { Hero230 } from '@/components/solutions/hero230'

export const metadata: Metadata = {
  title: 'Build Safe, Private & Autonomous AI Agents | Phala Network',
  description:
    'Deploy AI agents with hardware-enforced security, cryptographic proofs, and verifiable execution. From autonomous trading to personal assistants.',
  keywords: [
    'AI agents',
    'verifiable execution',
    'autonomous agents',
    'financial agents',
    'TEE',
    'ERC-8004',
    'attestation',
    'LangChain',
    'ElizaOS',
  ],
}

export default function AIAgentsPage() {
  return (
    <>
      <Hero230 />
      <Feature76Agents />
      <Feature3Frameworks />
      <Feature64 />
      <Feature22 />
      <Feature44 />
      <Casestudies1Agents />
      <Feature206
        title="Why Verifiable Agents Matter"
        description="Traditional AI agents run in black-box environments. Users can't verify behavior, operators can modify code, and keys/secrets are exposed to infrastructure."
        points={[
          'Agent actions cannot be cryptographically proven',
          'Execution can be tampered with by operators',
          'Private keys exposed to cloud infrastructure',
          'No guarantee agent code matches what was published',
        ]}
        images={[
          '/solutions/agent/1.png',
          '/solutions/agent/2.png',
          '/solutions/agent/3.png',
          '/solutions/agent/4.png',
        ]}
      />
      <Compliance5 />
      <SolutionsCTA />
    </>
  )
}
