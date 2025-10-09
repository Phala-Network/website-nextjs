import type { SolutionContent } from "@/types/solutions";

export const privateAIDataContent: SolutionContent = {
  seo: {
    title: "Private AI Data: Compute-to-Data on Phala",
    description:
      "Monetize and analyze sensitive data with TEEs and remote attestation—without exposing the raw data.",
    keywords: [
      "private data",
      "compute-to-data",
      "TEE",
      "confidential computing",
      "data privacy",
      "remote attestation",
    ],
  },

  hero: {
    eyebrow: "Private AI Data",
    headline: "Unlock sensitive data—without sharing it",
    subheadline:
      "Confidential compute turns siloed and regulated datasets into insight, safely. Combine data sources via compute-to-data and verifiable enclaves.",
    primaryCTA: {
      text: "Talk to Us",
      url: "https://phala.com/contact",
    },
    secondaryCTA: {
      text: "Deploy on Phala",
      url: "https://cloud.phala.network",
    },
    features: [
      "Zero-trust architecture",
      "Remote attestation",
      "Encrypted data processing",
    ],
  },

  why: {
    title: "Why Private AI Data Matters",
    description:
      "Data sharing is blocked by privacy, IP, and regulation. Centralized AI leaks control. Phala keeps raw data sealed while models 'go to the data'—enabling multi-party analysis without exposing sensitive information to any single entity.",
    points: [
      "Privacy regulations (GDPR, HIPAA, CCPA) prevent data sharing",
      "IP protection demands prevent collaboration",
      "Centralized AI exposes sensitive business intelligence",
      "Traditional methods require trust in third parties",
    ],
    images: [
      "/solutions/data/1.png",
      "/solutions/data/2.png",
      "/solutions/data/3.png",
      "/solutions/data/4.png",
    ],
  },

  how: {
    title: "How It Works",
    description:
      "Transform sensitive data into actionable insights through confidential compute",
    steps: [
      {
        number: "01",
        title: "Provision attested enclave",
        description:
          "Deploy a TEE with cryptographic measurement and access policy. Only authorized code can access the data.",
      },
      {
        number: "02",
        title: "Bring keys & datasets",
        description:
          "Load encrypted datasets via sealed I/O. Data owners retain custody while enabling computation.",
      },
      {
        number: "03",
        title: "Run jobs compute-to-data",
        description:
          "Execute RAG, analytics, or training workloads inside the enclave. Computation happens where data lives.",
      },
      {
        number: "04",
        title: "Emit proofs",
        description:
          "Generate attestation receipts and audit logs. Share results, not raw data.",
      },
      {
        number: "05",
        title: "Rotate/retire with audit trails",
        description:
          "Maintain complete provenance with cryptographic proof of all operations.",
      },
    ],
  },

  useCases: [
    {
      title: "Data Marketplace",
      description:
        "Multi-party joins with revocable policies. Revenue share without raw data exchange.",
      benefit: "Monetize data without losing control",
    },
    {
      title: "Sensitive Data Analytics",
      description:
        "PII, financial, and medical analysis with built-in confidentiality.",
      benefit: "GDPR/HIPAA-compliant insights",
    },
    {
      title: "Private RAG",
      description:
        "Retrieve from private corp wikis, CRM, and docs inside enclaves.",
      benefit: "Secure knowledge retrieval",
    },
    {
      title: "Cross-Organization Collaboration",
      description:
        "Combine datasets from multiple organizations without exposing proprietary data.",
      benefit: "Unlock collaborative insights",
    },
  ],

  stories: {
    featured: {
      logo: "/partnerships/vana.svg",
      company: "Vana",
      tags: "DATA SOVEREIGNTY / USER-OWNED AI",
      title: "User-owned data pools & collective model training",
      subtitle: "via confidential compute.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      link: "https://www.vana.org/",
    },
    additional: [
      {
        logo: "/partnerships/primus.png",
        company: "Primus Labs",
        tags: "MULTI-PARTY COMPUTE / zkTLS",
        title: "Neutral TEE data rooms",
        subtitle: "for multi-party analytics and training.",
        link: "https://primuslabs.xyz/",
      },
      {
        logo: "/partnerships/public-ai.svg",
        company: "PublicAI",
        tags: "AI MARKETPLACES / PRIVACY-FIRST",
        title: "Privacy-first AI marketplaces",
        subtitle: "backed by Phala infrastructure.",
        link: "https://publicai.io/",
      },
    ],
  },

  devExp: {
    title: "Developer Experience",
    description:
      "Deploy confidential data workloads with familiar tools and infrastructure.",
    codeExamples: [
      {
        language: "bash",
        filename: "deploy-enclave.sh",
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
        language: "python",
        filename: "data-processor.py",
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
        language: "typescript",
        filename: "verify-attestation.ts",
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
      "Terraform modules for infrastructure-as-code",
      "KMS integration for key management",
      "Policy-based access control",
      "Audit log streaming",
    ],
  },

  proof: {
    title: "Cryptographic Proof & Compliance",
    subtitle: "Remote Attestation",
    description:
      "Every computation produces cryptographic proof. Encrypted data remains encrypted in-use. Policy-guarded outputs ensure only approved results leave the enclave. Complete audit trails for regulatory compliance.",
    features: [
      "Remote attestation receipts",
      "Encryption in-use (not just at-rest and in-transit)",
      "Policy-guarded outputs",
      "Immutable audit logs",
    ],
    awards: {
      title: "Trusted By",
      images: [
        "/logos/compliance-soc2.svg",
        "/logos/compliance-gdpr.svg",
        "/logos/compliance-hipaa.svg",
      ],
    },
  },

  faqs: [
    {
      category: "SECURITY & PRIVACY",
      items: [
        {
          question: "What prevents operators from seeing my data?",
          answer:
            "Hardware-based Trusted Execution Environments (TEEs) encrypt data in-use. Operators only see encrypted memory. Remote attestation proves the correct code is running before any data is processed.",
        },
        {
          question: "How do we verify the enclave code?",
          answer:
            "Each enclave produces a cryptographic measurement (MRENCLAVE) that uniquely identifies the code. You verify this measurement matches your expected policy before sharing any data keys with the enclave.",
        },
        {
          question: "How does key management work across parties?",
          answer:
            "Each party encrypts their data with their own keys. The enclave requests keys from each party's KMS only after proving its identity via attestation. Keys are never stored—they're ephemeral within the TEE.",
        },
      ],
    },
    {
      category: "TECHNICAL",
      items: [
        {
          question: "What types of data workloads are supported?",
          answer:
            "RAG pipelines, SQL analytics, pandas/dataframe operations, model training, and custom Python/Node.js workloads. If it runs in a container, it can run confidentially.",
        },
        {
          question: "What's the performance overhead?",
          answer:
            "TEE overhead is typically 5-15% for CPU-bound workloads. Memory encryption adds minimal latency. For I/O-heavy workloads, the overhead is negligible.",
        },
        {
          question: "Can we audit what happened inside the enclave?",
          answer:
            "Yes. Structured logs are emitted to an immutable audit trail. Attestation receipts prove what code ran, what policies were enforced, and what outputs were produced.",
        },
      ],
    },
    {
      category: "COMPLIANCE",
      items: [
        {
          question: "Is this GDPR/HIPAA compliant?",
          answer:
            "Phala's TEE architecture supports GDPR Article 32 (security of processing) and HIPAA's encryption requirements. Attestation provides the technical controls auditors need to verify data protection.",
        },
      ],
    },
  ],

  cta: {
    title: "Ready to unlock your data?",
    description:
      "Deploy confidential data workloads on Phala's trusted execution environment. Start with our free tier or talk to our team about enterprise deployments.",
    buttonText: "Get Started",
    buttonUrl: "https://cloud.phala.network",
    items: [
      "Deploy in minutes",
      "Remote attestation built-in",
      "Enterprise support available",
      "SOC 2 / GDPR ready",
      "Open source tools",
    ],
  },
};
