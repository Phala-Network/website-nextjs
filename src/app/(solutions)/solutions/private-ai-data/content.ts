import type { SolutionContent } from '@/types/solutions'

export const privateAIDataContent: SolutionContent = {
  seo: {
    title: 'Private AI Data: Compute-to-Data on Phala',
    description:
      'Monetize and analyze sensitive data with TEEs and remote attestation—without exposing the raw data.',
    keywords: [
      'private data',
      'compute-to-data',
      'TEE',
      'confidential computing',
      'data privacy',
      'remote attestation',
    ],
  },

  hero: {
    eyebrow: 'Private AI Data',
    headline: 'Unlock sensitive data—without sharing it',
    subheadline:
      'Confidential compute turns siloed and regulated datasets into insight, safely. Combine data sources via compute-to-data and verifiable enclaves.',
    primaryCTA: {
      text: 'Talk to Us',
      url: 'https://phala.com/contact',
    },
    secondaryCTA: {
      text: 'Deploy on Phala',
      url: 'https://cloud.phala.network',
    },
    features: [
      'Zero-trust architecture',
      'Remote attestation',
      'Encrypted data processing',
    ],
  },

  why: {
    title: 'Why Private AI Data Matters',
    description:
      "Data sharing is blocked by privacy, IP, and regulation. Centralized AI leaks control. Phala keeps raw data sealed while models 'go to the data'—enabling multi-party analysis without exposing sensitive information to any single entity.",
    points: [
      'Privacy regulations (GDPR, HIPAA, CCPA) prevent data sharing',
      'IP protection demands prevent collaboration',
      'Centralized AI exposes sensitive business intelligence',
      'Traditional methods require trust in third parties',
    ],
    images: [
      '/solutions/data/1.png',
      '/solutions/data/2.png',
      '/solutions/data/3.png',
      '/solutions/data/4.png',
    ],
    links: [
      'https://phala.com/success-stories/healthcare-research',
      'https://www.ibm.com/docs/en/aix/7.3.0?topic=network-internet-protocol-security',
      'https://phala.com/success-stories/ai-saas-platform',
      'https://phala.com/success-stories/ai-saas-platform',
    ],
  },

  how: {
    title: 'How It Works',
    description:
      'Transform sensitive data into actionable insights through confidential compute',
    steps: [
      {
        number: '01',
        title: 'Provision attested enclave',
        description:
          'Deploy a TEE with cryptographic measurement and access policy. Only authorized code can access the data.',
      },
      {
        number: '02',
        title: 'Bring keys & datasets',
        description:
          'Load encrypted datasets via sealed I/O. Data owners retain custody while enabling computation.',
      },
      {
        number: '03',
        title: 'Run jobs compute-to-data',
        description:
          'Execute RAG, analytics, or training workloads inside the enclave. Computation happens where data lives.',
      },
      {
        number: '04',
        title: 'Emit proofs',
        description:
          'Generate attestation receipts and audit logs. Share results, not raw data.',
      },
      {
        number: '05',
        title: 'Rotate/retire with audit trails',
        description:
          'Maintain complete provenance with cryptographic proof of all operations.',
      },
    ],
  },

  useCases: [
    {
      title: 'Confidential AI Training',
      description:
        'Train proprietary LLMs on confidential datasets without exposing raw data to cloud providers.',
      benefit: 'Secure model training',
      img: '/solutions/data/usecases/train.png',
    },
    {
      title: 'Private Inference',
      description:
        'Deploy inference APIs for healthcare, finance, or legal AI where model weights and user prompts must remain encrypted end-to-end.',
      benefit: 'End-to-end encryption',
      img: '/solutions/data/usecases/inference.png',
    },
    {
      title: 'Federated Learning',
      description:
        'Run federated analytics on multi-party datasets—each party keeps data local while TEEs combine insights securely.',
      benefit: 'Multi-party collaboration',
      img: '/solutions/data/usecases/federated.png',
    },
    {
      title: 'Data Clean Rooms',
      description:
        'Enable secure multi-party computation for joint data analysis without revealing individual contributions.',
      benefit: 'Privacy-preserving analytics',
      img: '/solutions/data/usecases/cleanroom.png',
    },
    {
      title: 'Regulatory Compliance',
      description:
        'Process regulated data (GDPR, HIPAA) in the cloud while maintaining compliance and zero-trust security.',
      benefit: 'Compliant cloud processing',
      img: '/solutions/data/usecases/regulatory.png',
    },
  ],

  stories: {
    featured: {
      logo: '/partnerships/vana.svg',
      company: 'Vana',
      tags: 'DATA SOVEREIGNTY / USER-OWNED AI',
      title: 'User-owned data pools & collective model training',
      subtitle: 'via confidential compute.',
      image: '/partnerships/vana-pic.png',
      link: 'https://phala.com/posts/phala-network-and-vana-network-join-forces-to-usher-in-new-era-for-decentralized-data-privacy',
    },
    additional: [
      {
        logo: '/partnerships/rena.jpg',
        company: 'Rena Labs',
        tags: 'VERIFIABLE AI / zkTLS',
        title: 'Verifiable AI responses',
        subtitle: 'with proof of data source.',
        image: '/partnerships/rena.jpg',
        link: 'https://x.com/Rena_labs/status/1963602045128093837',
      },
      {
        logo: '/partnerships/xtrace.jpg',
        company: 'Xtrace',
        tags: 'LLM OBSERVABILITY / PRIVACY',
        title: 'Private LLM observability',
        subtitle: 'without exposing prompts.',
        image: '/partnerships/xtrace.jpg',
        link: 'https://docs.xtrace.ai/manual_rst/configuration.html',
      },
    ],
  },

  devExp: {
    title: 'Developer Experience',
    description:
      'Deploy confidential data workloads with familiar tools and infrastructure.',
    codeExamples: [
      {
        language: 'bash',
        filename: 'deploy-enclave.sh',
        code: `# Deploy a confidential data enclave on Phala
phala run \\
  --enclave \\
  --attest \\
  --policy policy.json \\
  --image ghcr.io/my-org/data-processor:latest \\
  --mount /data:/encrypted-data \\
  --env KMS_ENDPOINT=https://kms.phala.network

# Verify attestation
phala attest verify \\
  --enclave-id \${ENCLAVE_ID} \\
  --policy policy.json

# Check audit logs
phala logs --enclave-id \${ENCLAVE_ID} --attestation`,
      },
      {
        language: 'python',
        filename: 'data-processor.py',
        code: `# Process encrypted data inside TEE
from phala_tee import SealedStorage, Attestation
import pandas as pd

# Load encrypted datasets
storage = SealedStorage(policy_path="./policy.json")
df1 = storage.read_dataframe("dataset_a.enc")
df2 = storage.read_dataframe("dataset_b.enc")

# Perform computation
result = df1.merge(df2, on='user_id', how='inner')
insights = result.groupby('category').agg({
    'revenue': 'sum',
    'users': 'count'
})

# Emit attested results
attestation = Attestation.current()
output = {
    'insights': insights.to_dict(),
    'attestation': attestation.quote(),
    'policy_hash': storage.policy_hash()
}

# Write results (not raw data)
storage.write_json("results.json", output,
                   allow_egress=True)`,
      },
      {
        language: 'typescript',
        filename: 'verify-attestation.ts',
        code: `// Verify attestation quote from data enclave
import { PhalaAttestationClient } from '@phala/sdk';

const client = new PhalaAttestationClient({
  network: 'mainnet'
});

// Verify the computation was performed in a genuine TEE
const verification = await client.verifyAttestation({
  quote: attestationQuote,
  policyHash: expectedPolicyHash,
  mrenclave: expectedMeasurement
});

if (verification.verified) {
  console.log('✓ Computation verified');
  console.log('✓ Correct enclave:', verification.mrenclave);
  console.log('✓ Policy enforced:', verification.policyHash);

  // Safe to use the results
  const insights = JSON.parse(verification.data);
} else {
  throw new Error('Attestation failed: ' + verification.error);
}`,
      },
    ],
    features: [
      'Terraform modules for infrastructure-as-code',
      'KMS integration for key management',
      'Policy-based access control',
      'Audit log streaming',
    ],
  },

  proof: {
    title: 'Cryptographic Proof & Compliance',
    subtitle: 'Remote Attestation',
    description:
      'Every computation produces cryptographic proof. Encrypted data remains encrypted in-use. Policy-guarded outputs ensure only approved results leave the enclave. Complete audit trails for regulatory compliance.',
    features: [
      'Remote attestation receipts',
      'Encryption in-use (not just at-rest and in-transit)',
      'Policy-guarded outputs',
      'Immutable audit logs',
    ],
    awards: {
      title: 'Trusted By',
      images: [
        '/logos/compliance-soc2.svg',
        '/logos/compliance-gdpr.svg',
        '/logos/compliance-hipaa.svg',
      ],
    },
  },

  faqs: [
    {
      category: 'DATA PRIVACY & ARCHITECTURE',
      items: [
        {
          question: 'How does Phala keep my data private during computation?',
          answer:
            "Phala runs every workload inside a Trusted Execution Environment (TEE). Data, model, and code are decrypted only inside this enclave's CPU memory and are re-encrypted before leaving. Neither cloud operators nor Phala nodes can access the plaintext at any point.",
        },
        {
          question:
            "What's the difference between data encryption and confidential computing?",
          answer:
            "Encryption protects data at rest and in transit. Confidential computing extends that protection to 'data in use.' Even while an AI model processes the data, the enclave keeps it sealed from the host OS, hypervisor, and other tenants.",
        },
        {
          question:
            'Can Phala process encrypted data without decrypting it first?',
          answer:
            'Yes—within the enclave the decryption keys are injected only after remote attestation proves the correct code is running. From the outside, the data remains opaque; decryption happens solely in verified hardware.',
        },
        {
          question: 'How is data deleted or retained after a computation?',
          answer:
            "When a task finishes, the enclave's memory is automatically cleared. Storage volumes can be configured for ephemeral or persistent use; all are encrypted with customer-owned keys so deletion is cryptographically final.",
        },
      ],
    },
    {
      category: 'COLLABORATION & DATA MARKETPLACE',
      items: [
        {
          question:
            'Can multiple organizations collaborate without sharing raw data?',
          answer:
            "Yes. Phala's 'compute-to-data' model lets each party keep its dataset local while a joint enclave aggregates gradients or insights. No participant ever gains access to another's raw files.",
        },
        {
          question:
            'How do I monetize data safely through a marketplace on Phala?',
          answer:
            'Data providers publish encrypted datasets with usage policies enforced by smart contracts. Buyers run approved models against those datasets in enclaves and pay automatically for each job, while the raw content never leaves its owner.',
        },
        {
          question:
            'What prevents others from reverse-engineering my datasets?',
          answer:
            'Enclaves disable debugging, tracing, and memory inspection. The only accessible output is the model result explicitly defined by the provider. Intermediate tensors and parameters stay sealed.',
        },
        {
          question: 'How does Phala handle data ownership and access rights?',
          answer:
            'Ownership is defined on-chain through tokenized access keys. Every compute job references these keys, producing auditable logs that prove who accessed what and under which policy.',
        },
      ],
    },
    {
      category: 'COMPLIANCE & INTEGRATION',
      items: [
        {
          question:
            'Is Phala compliant with GDPR, HIPAA, or other regulations?',
          answer:
            "Phala's architecture supports compliance by design: data minimization, encryption, and deterministic audit trails. Actual certification depends on the workload and jurisdiction, but the platform satisfies the technical controls required by most frameworks.",
        },
        {
          question: 'Can I use Phala with my existing cloud or data lake?',
          answer:
            'Yes. Phala connectors let you attach S3, GCS, or on-prem sources through secure API gateways. Data stays encrypted until loaded into the enclave.',
        },
        {
          question:
            'Does confidential computing affect model performance or cost?',
          answer:
            'Hardware-assisted TEEs add minimal overhead—typically <5%. GPU TEEs keep acceleration intact, so you pay roughly the same cloud rate while gaining privacy guarantees.',
        },
        {
          question:
            'How can I verify that my computation truly ran inside a secure enclave?',
          answer:
            'Each job exposes a remote-attestation report signed by the CPU vendor. You or your clients can validate this proof to confirm the enclave type, firmware version, and the exact code hash that executed.',
        },
      ],
    },
  ],

  cta: {
    title: 'Ready to unlock your data?',
    description:
      "Deploy confidential data workloads on Phala's trusted execution environment. Start with our free tier or talk to our team about enterprise deployments.",
    buttonText: 'Get Started',
    buttonUrl: 'https://cloud.phala.network',
    items: [
      'Deploy in minutes',
      'Remote attestation built-in',
      'Enterprise support available',
      'SOC 2 / GDPR ready',
      'Open source tools',
    ],
  },
}
