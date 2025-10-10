import type { SolutionContent } from "@/types/solutions";

export const privateAIInferenceContent: SolutionContent = {
  seo: {
    title: "Private AI Inference: Confidential LLM Serving",
    description:
      "Keep prompts, outputs, and model weights private with GPU TEEs and verifiable attestation.",
    keywords: [
      "private inference",
      "confidential AI",
      "LLM privacy",
      "GPU TEE",
      "encrypted inference",
    ],
  },

  hero: {
    eyebrow: "Private AI Inference",
    headline: "Serve models without exposing prompts",
    subheadline:
      "Inputs, outputs, and weights stay inside attested GPU enclaves. Privacy as a human right—by design.",
    primaryCTA: {
      text: "Talk to Us",
      url: "https://phala.com/contact",
    },
    secondaryCTA: {
      text: "Deploy on Phala",
      url: "https://cloud.phala.network",
    },
    features: [
      "OpenAI-compatible API",
      "Zero-logging guarantee",
      "Remote attestation",
    ],
  },

  why: {
    title: "Why Private Inference Matters",
    description:
      "Centralized inference can log prompts and leak IP. Phala enclaves ensure no operator—cloud or vendor—can peek. Every request is encrypted end-to-end, processed in hardware isolation, and verified through cryptographic attestation.",
  },

  how: {
    title: "How It Works",
    steps: [
      {
        number: "01",
        title: "Package model as confidential container",
        description:
          "Bundle your model with the Phala runtime. The container image becomes tamper-evident through measurement.",
      },
      {
        number: "02",
        title: "Attest on deploy; publish measurement",
        description:
          "GPU TEE generates cryptographic proof of the exact code running. Clients verify before sending requests.",
      },
      {
        number: "03",
        title: "Route requests via mTLS into enclave",
        description:
          "End-to-end encrypted channels ensure prompts never touch untrusted memory.",
      },
      {
        number: "04",
        title: "Emit usage receipts; never store plaintext",
        description:
          "Generate verifiable logs without exposing sensitive content. Zero-knowledge metering.",
      },
    ],
  },

  useCases: [
    {
      title: "Privacy as a Human Right",
      description:
        "Zero-logging assistants for consumers & NGOs. Sensitive conversations stay private.",
      benefit: "Constitutional-grade privacy",
    },
    {
      title: "Healthcare",
      description:
        "Protected PHI inference. Clinic-side deployments with HIPAA compliance.",
      benefit: "Medical confidentiality guaranteed",
    },
    {
      title: "Legal",
      description:
        "Privileged document Q&A and drafting with strict attorney-client confidentiality.",
      benefit: "Privileged communication protection",
    },
    {
      title: "Enterprise",
      description:
        "Process proprietary data without exposure to third-party AI providers.",
      benefit: "IP protection built-in",
    },
  ],

  stories: {
    featured: {
      logo: "/success-stories/ooda-logo.svg",
      company: "OODA AI",
      tags: "DECENTRALIZED COMPUTE / PRIVACY",
      title: "Decentralized GPUs with Phala-grade",
      subtitle: "privacy guarantees.",
      image: "/success-stories/ooda-preview.jpg",
      link: "/success-stories/ooda",
    },
    additional: [
      {
        logo: "/success-stories/near-logo.svg",
        company: "NEAR AI",
        tags: "ML SDK / VERIFIABLE AGENTS",
        title: "Private ML SDK—",
        subtitle: "verifiable agent inference.",
        image: "/success-stories/near-logo.svg",
        link: "/success-stories/near-ai",
      },
      {
        logo: "/success-stories/openrouter-logo.svg",
        company: "OpenRouter",
        tags: "ROUTING / ENTERPRISE",
        title: "Confidential route",
        subtitle: "for enterprise prompts.",
        image: "/success-stories/openrouter-logo.svg",
        link: "/success-stories/openrouter",
      },
    ],
  },

  devExp: {
    title: "Developer Experience",
    description:
      "Drop-in replacement for OpenAI API with cryptographic privacy guarantees.",
    codeExamples: [
      {
        language: "bash",
        filename: "openai-compatible.sh",
        code: `# OpenAI-compatible inference with attestation
curl https://api.phala.network/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer \${PHALA_API_KEY}" \\
  -H "X-Verify-Attestation: true" \\
  -d '{
    "model": "phala/llama-3.3-70b",
    "messages": [{
      "role": "user",
      "content": "Analyze this confidential document..."
    }],
    "max_tokens": 2000
  }'

# Response includes attestation proof
{
  "id": "chatcmpl-...",
  "choices": [...],
  "attestation": {
    "quote": "0x...",
    "mrenclave": "abc123...",
    "timestamp": 1234567890
  }
}`,
      },
      {
        language: "python",
        filename: "phala-client.py",
        code: `# Python SDK with attestation verification
from phala import PhalaClient, AttestationPolicy

client = PhalaClient(
    api_key=os.environ["PHALA_API_KEY"],
    verify_attestation=True,
    policy=AttestationPolicy(
        min_tcb_level=5,
        require_debug_disabled=True
    )
)

# Automatic attestation verification
response = client.chat.completions.create(
    model="phala/llama-3.3-70b",
    messages=[{
        "role": "user",
        "content": "Sensitive prompt here"
    }]
)

# Attestation verified ✓
print(f"Enclave: {response.attestation.mrenclave}")
print(f"Response: {response.choices[0].message.content}")`,
      },
      {
        language: "typescript",
        filename: "verify-inference.ts",
        code: `// TypeScript with attestation
import { PhalaInference } from '@phala/sdk';

const inference = new PhalaInference({
  apiKey: process.env.PHALA_API_KEY!,
  attestation: {
    verify: true,
    expectedMrenclave: KNOWN_GOOD_MEASUREMENT,
  }
});

const completion = await inference.chat({
  model: 'phala/llama-3.3-70b',
  messages: [{
    role: 'user',
    content: 'Private prompt'
  }]
});

// Throws if attestation fails
console.log('✓ Verified enclave:', completion.attestation);
console.log('Response:', completion.content);`,
      },
    ],
    features: [
      "OpenAI SDK compatible",
      "Per-tenant API keys",
      "Rate limiting & quotas",
      "Streaming responses",
    ],
  },

  proof: {
    title: "Attestation + Audit Bundles",
    subtitle: "SOC2 / GDPR / HIPAA",
    description:
      "Every inference includes cryptographic proof. Attestation bundles satisfy compliance workflows. No plaintext logs, no prompt leakage, no model weight exposure.",
    features: [
      "Real-time attestation verification",
      "Immutable audit trails",
      "Zero-knowledge usage metering",
      "Compliance-ready reports",
    ],
  },

  faqs: [
    {
      category: "PERFORMANCE",
      items: [
        {
          question: "What's the latency/throughput overhead?",
          answer:
            "GPU TEE overhead is typically 3-8% for inference workloads. Network encryption (mTLS) adds <5ms. For most applications, the overhead is imperceptible.",
        },
        {
          question: "Can we use vLLM or TGI for acceleration?",
          answer:
            "Yes. Phala supports vLLM, TGI, and other inference engines inside TEEs. Optimizations like PagedAttention and continuous batching work normally.",
        },
      ],
    },
    {
      category: "SECURITY",
      items: [
        {
          question: "How are logs handled?",
          answer:
            "Logs are sanitized inside the TEE. Only non-sensitive metadata (request ID, timestamp, token count) is emitted. Prompts and completions never leave the enclave in plaintext.",
        },
        {
          question: "Can we pin model versions to measurements?",
          answer:
            "Yes. Each model version produces a unique MRENCLAVE measurement. You can allowlist specific measurements and reject others, ensuring only approved versions run.",
        },
      ],
    },
    {
      category: "DEPLOYMENT",
      items: [
        {
          question: "How do we deploy our own models?",
          answer:
            "Upload your model to Phala's confidential registry or use your own private registry. The deployment process measures the image and publishes attestation automatically.",
        },
      ],
    },
  ],

  cta: {
    title: "Ready for private inference?",
    description:
      "Deploy confidential AI models on Phala's GPU TEE infrastructure. Start with our hosted API or bring your own hardware.",
    buttonText: "Get Started",
    buttonUrl: "https://cloud.phala.network",
    items: [
      "OpenAI-compatible API",
      "Sub-10ms overhead",
      "Remote attestation built-in",
      "HIPAA/GDPR ready",
      "Free tier available",
    ],
  },
};
