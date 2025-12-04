import type { Metadata } from 'next'

import SolutionsCTA from '@/components/solutions-cta'
import { makeDescription, makeTitle } from '@/lib/seo'
import { Casestudies3 } from '@/components/solutions/casestudies3'
import { Codeexample5Finetune } from '@/components/solutions/codeexample5-finetune'
import { Compliance5 } from '@/components/solutions/compliance5'
import { Cta4 } from '@/components/solutions/cta4'
import { Faq14 } from '@/components/solutions/faq14'
import { Feature206 } from '@/components/solutions/feature206'
import { Feature245Finetune } from '@/components/solutions/feature245-finetune'
import { Hero74 } from '@/components/solutions/hero74'

// Keywords from CSV row 11: private fine tune, customize model data, safe AI tuning, on prem fine-tuning, secure data AI
export const metadata: Metadata = {
  title: makeTitle('Private Fine-Tuning - Customize AI Models Securely'),
  description: makeDescription(
    'Fine-tune AI models on proprietary data with TEE protection. On-prem and cloud fine-tuning with secure data handling. Customize models safely without data leakage for enterprise AI.',
  ),
  keywords: [
    'private fine tune',
    'customize model data',
    'safe AI tuning',
    'on prem fine-tuning',
    'secure data AI',
  ],
}

export default function FineTunedModelsPage() {
  return (
    <>
      <Hero74 />
      <Feature206
        title="Why Private Fine-Tuning Matters"
        description="Custom performance demands private corp data; Phala lets you use it safely."
        points={[
          'Training data contains business secrets',
          'Fine-tuned weights encode proprietary knowledge',
          'Model gradients can leak training examples',
          'Vendors should never see your data or weights',
        ]}
        images={[
          '/solutions/tune/1.png',
          '/solutions/tune/2.png',
          '/solutions/tune/3.png',
          '/solutions/tune/4.png',
        ]}
        links={[
          'https://security.apple.com/blog/private-cloud-compute/',
          'https://www.anthropic.com/research/confidential-inference-trusted-vms',
          'https://openrouter.ai/docs/features/zdr',
          'https://docs.phala.com/phala-cloud/confidential-ai/overview',
        ]}
      />
      <Feature245Finetune />
      <Codeexample5Finetune />
      <Casestudies3
        featuredCasestudy={{
          logo: 'https://api.iconify.design/mdi:hospital-box.svg?color=%23dc2626',
          company: 'Medical Care AI',
          tags: 'HEALTHCARE / HIPAA COMPLIANCE',
          title: 'Fine-tune medical chatbots on patient conversations',
          subtitle:
            'Private training on sensitive healthcare data with TEE isolation',
          image: '/solutions/tune/casestudy-health.png',
          link: 'https://huggingface.co/datasets/DR-DRR/Medical_Customer_care',
        }}
        casestudies={[
          {
            logo: 'https://api.iconify.design/mdi:briefcase.svg?color=%232563eb',
            company: 'SaaS Sales AI',
            tags: 'SALES / CRM TRAINING',
            title: 'Train sales assistants on conversation data',
            subtitle:
              'Fine-tune on proprietary sales dialogues without data leakage',
            image: '',
            link: 'https://huggingface.co/datasets/DeepMostInnovations/saas-sales-conversations',
          },
          {
            logo: 'https://api.iconify.design/mdi:account-tie.svg?color=%2316a34a',
            company: 'HR Recruitment AI',
            tags: 'HR / CONFIDENTIAL TRAINING',
            title: 'Fine-tune hiring models on resume data',
            subtitle:
              'Private training on candidate information with compliance guarantees',
            image: '',
            link: 'https://huggingface.co/datasets/datasetmaster/resumes',
          },
        ]}
      />
      <Compliance5 />
      <SolutionsCTA />
      <Faq14
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Private Fine-Tuning"
        faqItems={[
          {
            category: 'FINE-TUNING PROCESS & PERFORMANCE',
            items: [
              {
                question:
                  "What's the difference between full fine-tuning and LoRA fine-tuning?",
                answer:
                  "Full fine-tuning updates all parameters of the base model, which requires huge compute and storage. LoRA (Low-Rank Adaptation) inserts small, trainable layers that capture the changes during fine-tuning, while keeping the base model frozen. On Phala, LoRA fine-tuning is the default because it's 10× faster, 10× cheaper, and can fit on a single GPU — yet can later be merged into full weights for deployment.",
              },
              {
                question: 'How does Unsloth improve fine-tuning performance?',
                answer:
                  "Unsloth rewrites Transformer internals with custom Triton kernels, FlashAttention 2, and optimized quantization (4-bit QLoRA). It reduces VRAM use by up to 70% and increases training throughput by 1.5–2×. On Phala's H200 GPU TEEs, you can fine-tune large models like LLaMA 3 efficiently in real time.",
              },
              {
                question:
                  'Can I fine-tune large models like LLaMA 3 or Mistral with limited GPUs?',
                answer:
                  "Yes. Phala Cloud allocates H200 or A100 enclaves with sufficient memory, and Unsloth's QLoRA compression lets 8B–13B models fine-tune comfortably on a single GPU. Multi-GPU distributed training is also supported via dstack orchestration.",
              },
              {
                question: 'How long does fine-tuning take on Phala Cloud?',
                answer:
                  'It depends on model size and dataset volume. As a rule of thumb, an 8B model with 100k chat samples typically completes in 4–6 hours on a single H200, using LoRA fine-tuning. Full-weight merges add only a few minutes after training.',
              },
            ],
          },
          {
            category: 'PRIVACY, SECURITY & COMPLIANCE',
            items: [
              {
                question: 'Is my training data encrypted during fine-tuning?',
                answer:
                  "Yes. On Phala, all data is encrypted at rest, in transit, and in use. Your dataset is only decrypted inside a hardware Trusted Execution Environment (TEE) after remote attestation confirms the correct code. Even Phala's operators can't view your data.",
              },
              {
                question: 'Can others see or copy my fine-tuned model?',
                answer:
                  'No. The entire training job runs in an isolated enclave, and the model artifacts are encrypted. Only you (the job owner) can export or share the resulting weights after attestation.',
              },
              {
                question:
                  "What compliance frameworks does Phala's training support?",
                answer:
                  "Phala's confidential compute model aligns with the technical requirements of GDPR, HIPAA, and SOC 2. Remote attestation and audit logs provide verifiable proofs that your data was processed securely.",
              },
              {
                question:
                  'Does fine-tuning inside a TEE reduce model quality or performance?',
                answer:
                  'Not in practice. The GPU TEE overhead is typically under 5%, and all kernels run natively on the H200 hardware. You get native performance with added privacy guarantees — no need to trade off accuracy for security.',
              },
            ],
          },
          {
            category: 'DEPLOYMENT & MODEL OWNERSHIP',
            items: [
              {
                question:
                  'Can I merge LoRA adapters into full weights for deployment?',
                answer:
                  'Yes. After training, you can call save_pretrained_merged() in Unsloth to combine LoRA deltas with base weights, producing a full FP16 model ready for inference. This makes deployment easier — no LoRA adapter loading required.',
              },
              {
                question: 'Who owns the fine-tuned model after training?',
                answer:
                  "You do. Phala acts only as the confidential runtime provider. The base model license (e.g., LLaMA's non-commercial license) still applies, but the fine-tuned derivative is your intellectual property.",
              },
              {
                question: 'How do I deploy my fine-tuned model?',
                answer:
                  "You can deploy it directly to Phala's Inference TEEs, which expose OpenAI-compatible APIs. Alternatively, push it to Hugging Face Hub or your private registry, then run inference from your preferred stack.",
              },
              {
                question:
                  'Can I verify where and how the fine-tune was executed?',
                answer:
                  'Yes. Each Phala fine-tune job generates a cryptographic attestation report — signed by the enclave hardware vendor — proving that your training ran on genuine secure hardware with a verified code base.',
              },
            ],
          },
        ]}
      />
      <Cta4
        title="Start Private Fine-Tuning Today"
        description="Customize LLMs on your proprietary data with hardware-enforced confidentiality and zero-knowledge guarantees."
        buttonText="Deploy on Phala"
        buttonUrl="https://cloud.phala.network"
        items={[
          'LoRA/PEFT support',
          'Multi-GPU training',
          'Sealed checkpoints',
          'Training attestations',
          '24/7 technical support',
        ]}
      />
    </>
  )
}
