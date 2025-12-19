import type { Metadata } from 'next'

import SuccessStoriesSection from '@/app/(main)/(home)/success-stories'
import ModelsList from '@/app/(main)/confidential-ai-models/models-list'
import SolutionsCTA from '@/components/solutions-cta'
import { ApiCodeExamplesPhala } from '@/components/solutions/api-code-examples-phala'
import { Casestudies3 } from '@/components/solutions/casestudies3'
import { Compliance5 } from '@/components/solutions/compliance5'
import { Cta4 } from '@/components/solutions/cta4'
import { Faq14 } from '@/components/solutions/faq14'
import { Feature206 } from '@/components/solutions/feature206'
import { Feature282 } from '@/components/solutions/feature282'
import { Hero225 } from '@/components/solutions/hero225'
import { SolutionsPhala } from '@/components/solutions/solutions-phala'
import { UnifiedInterfacePhala } from '@/components/solutions/unified-interface-phala'
import { fetchAiModels } from '@/lib/ai-models'
import { makeDescription, makeTitle } from '@/lib/seo'

// Keywords from CSV row 13: private AI inference, confidential LLM API, secure AI predictions, encrypted inference, zero trust AI
export const metadata: Metadata = {
  title: makeTitle('Private AI Inference - Confidential LLM Serving'),
  description: makeDescription(
    'Keep prompts, outputs, and model weights private with GPU TEEs and verifiable attestation. Deploy confidential AI inference with hardware-enforced encryption.',
  ),
  keywords: [
    'private AI inference',
    'confidential LLM API',
    'secure AI predictions',
    'encrypted inference',
    'zero trust AI',
  ],
}

export const revalidate = 3600

export default async function PrivateAIInferencePage() {
  const models = await fetchAiModels(100)

  return (
    <>
      <Hero225 />
      <Feature206
        title="Why Private Inference Matters"
        description="Centralized inference can log prompts and leak IP. Phala enclaves ensure no operator—cloud or vendor—can peek."
        points={[
          'Prompts can expose sensitive queries',
          'Model weights are valuable IP',
          'Inference logs reveal business patterns',
          'No operator access to runtime memory',
        ]}
        images={[
          '/solutions/inference/1.png',
          '/solutions/inference/2.png',
          '/solutions/inference/3.png',
          '/solutions/inference/4.png',
        ]}
        links={[
          'https://security.apple.com/blog/private-cloud-compute/',
          'https://www.anthropic.com/research/confidential-inference-trusted-vms',
          'https://openrouter.ai/docs/features/zdr',
          'https://docs.phala.com/phala-cloud/confidential-ai/overview',
        ]}
      />
      <Feature282
        badge="Confidential Serving"
        cardSubtitle="GPU TEE Protection"
        cardTitle="Zero-Trust Inference"
        title="OpenAI-Compatible API with Hardware Encryption"
        description1="GPU TEEs with Intel TDX and AMD SEV provide hardware-level memory encryption—your model weights, user prompts, and inference outputs stay encrypted in-use. Inputs, outputs, and weights stay inside attested GPU enclaves. Not even cloud admins or hypervisors can inspect runtime state."
        description2="Privacy as a human right—by design. Route requests via mTLS into enclave. Emit usage receipts; never store plaintext. OpenAI-compatible endpoints with verifiable attestation and zero-logging guarantees."
        features={[
          'GPU memory encryption',
          'OpenAI-compatible API',
          'Zero-logging architecture',
        ]}
      />
      <ModelsList models={models} />
      <SuccessStoriesSection />
      <UnifiedInterfacePhala />
      <ApiCodeExamplesPhala />
      <SolutionsPhala />
      <Casestudies3
        featuredCasestudy={{
          logo: '/partnerships/ooda.svg',
          company: 'OODA AI',
          tags: 'NASDAQ LISTED / GPU TEE',
          title: 'NASDAQ-listed OODA AI partners with Phala',
          subtitle: 'Decentralized GPUs with hardware attestation guarantees',
          image: '/partnerships/ooda-banner.jpeg',
          link: 'https://phala.com/posts/nasdaq-listed-OODA-AI-partners-with-phala',
        }}
        casestudies={[
          {
            logo: '/partnerships/near.svg',
            company: 'NEAR AI',
            tags: 'WEB3 / VERIFIABLE ML',
            title: 'Private ML SDK—verifiable agent inference.',
            subtitle: 'Zero-knowledge inference for autonomous agents',
            image: '',
            link: 'https://x.com/NEARWEEK/status/1902013456393334999',
          },
          {
            logo: '/partnerships/open-router.svg',
            company: 'OpenRouter',
            tags: 'ENTERPRISE / CONFIDENTIAL API',
            title: 'Confidential route for enterprise prompts.',
            subtitle: 'TEE-protected LLM gateway with attestation',
            image: '',
            link: 'https://openrouter.ai/provider/phala',
          },
        ]}
      />
      <Compliance5 />
      <SolutionsCTA />
      <Faq14
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Private AI Inference"
        faqItems={[
          {
            category: 'Privacy & Security Guarantees',
            items: [
              {
                question: 'How does Phala ensure truly private inference?',
                answer:
                  'Phala uses GPU Trusted Execution Environments (TEEs) with Intel TDX and AMD SEV to encrypt all prompts, outputs, and model weights during inference. Not even cloud providers or system administrators can access data in use—only the attested enclave can decrypt your inputs.',
              },
              {
                question:
                  'Can cloud providers or Phala operators see my prompts?',
                answer:
                  'No. Hardware-level memory encryption (Intel TDX/AMD SEV) prevents any operator—including Phala, cloud providers, or root users—from reading runtime memory. Data is encrypted from the moment it enters the TEE until it leaves.',
              },
              {
                question: 'How are GPU model weights protected?',
                answer:
                  'Model weights are loaded directly into encrypted GPU memory inside TEEs. They never touch disk or CPU in plaintext. Each deployment is sealed with cryptographic measurements (mrenclave) you can verify before sending data.',
              },
              {
                question:
                  'What are attestation proofs, and how do I verify them?',
                answer:
                  'Attestation proofs are cryptographic signatures from the CPU/GPU proving the exact code and environment running inside the TEE. Verify them via /v1/attestation endpoints before sending prompts—ensuring no tampering or backdoors exist.',
              },
            ],
          },
          {
            category: 'Developer Experience',
            items: [
              {
                question:
                  'How long does it take to deploy a private inference endpoint?',
                answer:
                  "Under 5 minutes. Use Docker containers with pre-configured TEE images, or deploy via Phala Cloud's one-click interface. No custom firmware or low-level TEE programming required.",
              },
              {
                question:
                  'Do I need to modify my existing OpenAI-compatible code?',
                answer:
                  "No. Phala provides drop-in OpenAI-compatible API endpoints (base_url = https://api.redpill.ai/v1). Use the same SDKs (openai-python, openai-node) and just point to Phala's attested endpoints.",
              },
              {
                question: 'Can I bring my own fine-tuned model weights?',
                answer:
                  'Yes. Upload weights encrypted with your key, and Phala will load them into TEE memory without ever decrypting them in transit. Use /v1/attestation to verify the deployment before sending prompts.',
              },
              {
                question: "What's the latency overhead of TEE inference?",
                answer:
                  '5-15% compared to bare-metal GPUs. Memory encryption happens at hardware speed with Intel TDX/AMD SEV, so most workloads see negligible impact. Batching and caching reduce overhead further.',
              },
            ],
          },
          {
            category: 'Industry Use Cases',
            items: [
              {
                question:
                  'Can I use this for healthcare/law firm AI assistants?',
                answer:
                  'Yes. Phala is SOC 2 Type I certified and HIPAA compliant, making private inference ideal for regulated industries. Patient records or legal documents never leave the TEE in plaintext, and attestation proofs provide audit trails for compliance.',
              },
              {
                question:
                  'How does this help with internal document Q&A chatbots?',
                answer:
                  'Embed your internal docs (HR policies, financial reports) into TEE-protected RAG pipelines. Employees query via private endpoints, and neither Phala nor cloud providers can read the documents or queries.',
              },
              {
                question: "What's the maximum prompt/document size I can send?",
                answer:
                  'Up to 128k tokens for most models (e.g., Qwen3 Coder 480B, DeepSeek V3.1). For longer documents, use chunking strategies or contact us for enterprise deployments with extended context windows.',
              },
              {
                question: 'Are there production deployments using this today?',
                answer:
                  'Yes. OpenRouter uses Phala for confidential enterprise routes, NEAR AI for verifiable ML inference, and OODA AI (NASDAQ-listed) for decentralized GPU TEE deployments. See case studies above.',
              },
            ],
          },
        ]}
      />
      <Cta4
        title="Start Private AI Inference Today"
        description="Deploy confidential LLM endpoints with hardware-enforced encryption and zero-knowledge guarantees."
        buttonText="Deploy on Phala"
        buttonUrl="https://cloud.phala.network"
        items={[
          'Intel TDX & AMD SEV support',
          'Remote attestation built-in',
          'Zero-trust architecture',
          'Enterprise-ready compliance',
          '24/7 technical support',
        ]}
      />
    </>
  )
}
