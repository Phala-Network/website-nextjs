import type { SolutionContent } from "@/types/solutions";

export const fineTunedContent: SolutionContent = {
  seo: {
    title: "Fine-Tuned Models: Private Customization",
    description:
      "Fine-tune foundation models on proprietary data inside TEEs. Better accuracy, zero data leakage.",
    keywords: [
      "fine-tuning",
      "private AI",
      "model customization",
      "LoRA",
      "PEFT",
    ],
  },

  hero: {
    eyebrow: "Fine-Tuned Models",
    headline: "Your model, your data—kept private",
    subheadline:
      "Fine-tune LLMs and multimodal models on confidential datasets within attested enclaves.",
    primaryCTA: {
      text: "Talk to Us",
      url: "https://phala.com/contact",
    },
    secondaryCTA: {
      text: "Deploy on Phala",
      url: "https://cloud.phala.network",
    },
    features: [
      "LoRA & PEFT support",
      "Sealed checkpoints",
      "No gradient leakage",
    ],
  },

  why: {
    title: "Why Private Fine-Tuning Matters",
    description:
      "Custom performance demands private corp data. Phala lets you use it safely without exposing proprietary information to third-party AI providers or cloud operators.",
  },

  how: {
    title: "How It Works",
    steps: [
      {
        number: "01",
        title: "Mount private corpus via sealed storage",
        description:
          "Your training data stays encrypted. Only the attested enclave can access it.",
      },
      {
        number: "02",
        title: "Run supervised/LoRA/PEFT inside enclave",
        description:
          "Standard training frameworks work inside TEEs. HuggingFace, PyTorch, all supported.",
      },
      {
        number: "03",
        title: "Export signed artifacts; restrict egress",
        description:
          "Model weights are sealed and signed. Only authorized parties can decrypt.",
      },
      {
        number: "04",
        title: "Serve in the same enclave family",
        description:
          "Deploy fine-tuned models in matching TEEs for end-to-end confidentiality.",
      },
    ],
  },

  useCases: [
    {
      title: "AI SaaS",
      description: "Per-tenant models trained on customer data without exposure.",
      benefit: "Customization without compromise",
    },
    {
      title: "AI SDR",
      description: "Trained on past threads & CRM data for personalized outreach.",
      benefit: "Sales intelligence protection",
    },
    {
      title: "AI Support",
      description: "Tuned on tickets & knowledge base for accurate responses.",
      benefit: "Customer data privacy",
    },
    {
      title: "AI Hiring",
      description: "Fine-tuned with sensitive HR data and candidate information.",
      benefit: "Compliance-ready recruitment",
    },
    {
      title: "AI Marketing",
      description: "Trained on brand voice & campaign results for optimization.",
      benefit: "Competitive advantage protection",
    },
  ],

  stories: {
    featured: {
      logo: "/success-stories/ai-saas-logo.svg",
      company: "Enterprise SaaS",
      tags: "MULTI-TENANT AI / PRIVACY",
      title: "Per-tenant fine-tuning at scale",
      subtitle: "without data exposure.",
      image: "/success-stories/saas-preview.jpg",
      link: "/success-stories/enterprise-saas",
    },
    additional: [
      {
        logo: "/success-stories/sales-logo.svg",
        company: "Sales AI",
        tags: "CRM INTELLIGENCE / CONFIDENTIAL",
        title: "Private CRM training",
        subtitle: "for personalized outreach.",
        link: "/success-stories/sales-ai",
      },
      {
        logo: "/success-stories/support-logo.svg",
        company: "Support AI",
        tags: "CUSTOMER SERVICE / SECURE",
        title: "Ticket-trained models",
        subtitle: "with data privacy.",
        link: "/success-stories/support-ai",
      },
    ],
  },

  devExp: {
    title: "Developer Experience",
    description:
      "Use familiar frameworks like HuggingFace and PyTorch inside confidential enclaves.",
    codeExamples: [
      {
        language: "python",
        filename: "fine-tune.py",
        code: `# Fine-tune inside TEE with HuggingFace
from transformers import AutoModelForCausalLM, TrainingArguments, Trainer
from peft import LoraConfig, get_peft_model
from phala_tee import SealedStorage

# Load base model inside enclave
model = AutoModelForCausalLM.from_pretrained(
    "meta-llama/Llama-3.3-70B",
    load_in_8bit=True,
    device_map="auto"
)

# Configure LoRA for efficient fine-tuning
lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM"
)
model = get_peft_model(model, lora_config)

# Load private training data via sealed storage
storage = SealedStorage()
train_dataset = storage.load_dataset("private_corpus.enc")

# Train with standard HuggingFace API
training_args = TrainingArguments(
    output_dir="./checkpoints",
    num_train_epochs=3,
    per_device_train_batch_size=4,
    gradient_accumulation_steps=4,
    save_steps=100,
    logging_steps=10
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset
)

trainer.train()

# Export sealed checkpoint
storage.save_model(model, "fine-tuned.sealed",
                   allow_decrypt_by=["authorized_enclave_id"])`,
      },
      {
        language: "bash",
        filename: "deploy-training.sh",
        code: `# Deploy confidential fine-tuning job
phala train deploy \\
  --image ghcr.io/my-org/llama-trainer:latest \\
  --gpu H100 \\
  --data-mount /data:sealed \\
  --policy training-policy.json \\
  --env WANDB_API_KEY=\${WANDB_KEY} \\
  --checkpoint-egress authorized-kms

# Monitor training progress
phala train logs --job-id \${JOB_ID} --follow

# Download sealed checkpoint
phala checkpoint download \\
  --job-id \${JOB_ID} \\
  --output fine-tuned.sealed \\
  --verify-signature`,
      },
      {
        language: "typescript",
        filename: "verify-checkpoint.ts",
        code: `// Verify fine-tuned model provenance
import { PhalaCheckpoint } from '@phala/sdk';

const checkpoint = await PhalaCheckpoint.load(
  'fine-tuned.sealed'
);

// Verify training attestation
const verification = await checkpoint.verify({
  expectedTrainingData: DATA_HASH,
  expectedBaseModel: "meta-llama/Llama-3.3-70B",
  trustedEnclaves: [TRAINING_ENCLAVE_ID]
});

if (verification.verified) {
  console.log('✓ Trained on expected data');
  console.log('✓ From trusted enclave');
  console.log('✓ Base model verified');

  // Deploy for inference
  await phala.deploy({
    checkpoint: checkpoint,
    attestation: verification.proof
  });
}`,
      },
    ],
    features: [
      "HuggingFace Transformers support",
      "PyTorch & JAX compatible",
      "LoRA, QLoRA, PEFT methods",
      "Sealed checkpoint export",
    ],
  },

  proof: {
    title: "Training Provenance & Verification",
    subtitle: "Attestation-Backed Models",
    description:
      "Every training run produces cryptographic proof. Dataset access logs, reproducible build IDs, and gradient privacy guarantees. Auditors can verify training provenance without accessing sensitive data.",
    features: [
      "Training attestation receipts",
      "Dataset access proofs",
      "Reproducible build IDs",
      "No gradient leakage",
    ],
  },

  faqs: [
    {
      category: "SECURITY",
      items: [
        {
          question: "Can vendors see our data or weights?",
          answer:
            "No. Data and model weights stay encrypted inside the TEE. Phala operators have no access to plaintext. Only the attested training code can decrypt your data.",
        },
        {
          question: "How do you prevent gradient leakage?",
          answer:
            "All gradients are computed inside the TEE. No gradients cross the security boundary in plaintext. Differential privacy can be optionally applied for additional guarantees.",
        },
      ],
    },
    {
      category: "INFRASTRUCTURE",
      items: [
        {
          question: "Multi-GPU fine-tune support?",
          answer:
            "Yes. Phala supports distributed training across multiple GPU TEEs with encrypted gradient synchronization. DDP, FSDP, and DeepSpeed are all compatible.",
        },
        {
          question: "What base models are supported?",
          answer:
            "Any HuggingFace-compatible model. LLaMA, Mistral, Qwen, GPT-style models, multimodal models—all work inside TEEs.",
        },
      ],
    },
    {
      category: "DEPLOYMENT",
      items: [
        {
          question: "How do we serve the fine-tuned model?",
          answer:
            "Deploy the sealed checkpoint to a matching TEE environment. The inference enclave verifies the checkpoint signature before loading, ensuring end-to-end confidentiality.",
        },
      ],
    },
  ],

  cta: {
    title: "Ready to fine-tune privately?",
    description:
      "Train custom models on confidential data with Phala's TEE infrastructure. No data exposure, full model ownership.",
    buttonText: "Get Started",
    buttonUrl: "https://cloud.phala.network",
    items: [
      "HuggingFace compatible",
      "Multi-GPU training",
      "Sealed checkpoints",
      "Attestation included",
      "Free tier available",
    ],
  },
};
