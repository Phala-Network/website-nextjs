import type { Metadata } from "next";
import { Hero40 } from "@/components/solutions/hero40";
import { Feature206 } from "@/components/solutions/feature206";
import { Feature282 } from "@/components/solutions/feature282";
import { Feature65 } from "@/components/solutions/feature65";
import { Feature284 } from "@/components/solutions/feature284";
import { Feature280 } from "@/components/solutions/feature280";
import { Casestudies3 } from "@/components/solutions/casestudies3";
import { Codeexample3 } from "@/components/solutions/codeexample3";
import { Feature161 } from "@/components/solutions/feature161";
import { Faq14 } from "@/components/solutions/faq14";
import { Cta4 } from "@/components/solutions/cta4";

export const metadata: Metadata = {
  title: "Fine-Tuned Models | Phala Network",
  description: "Private model customization with TEE isolation. Fine-tune LLMs on proprietary datasets without exposing training data or model weights.",
  keywords: ["fine-tuning", "model customization", "private AI", "TEE", "confidential computing"],
};

export default function FineTunedModelsPage() {
  return (
    <>
      <Hero40 />
      <Feature206
        title="Why Private Fine-Tuning Matters"
        description="Fine-tuning on proprietary data reveals sensitive information to cloud providers."
        points={[
          "Training data contains business secrets",
          "Fine-tuned weights encode proprietary knowledge",
          "Model gradients can leak training examples",
          "Cloud operators see all your data"
        ]}
      />
      <Feature282 />
      <Feature65 />
      <Feature284 />
      <Feature280 />
      <Casestudies3
        featuredCasestudy={{
          logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
          company: "BioTech Research",
          tags: "HEALTHCARE / CONFIDENTIAL AI",
          title: "Private medical LLM fine-tuning.",
          subtitle: "Training on patient data with HIPAA compliance",
          image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
          link: "#",
        }}
        casestudies={[
          {
            logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
            company: "LegalTech AI",
            tags: "LEGAL / PRIVATE TRAINING",
            title: "Confidential legal document training.",
            subtitle: "Fine-tuning on privileged communications",
            image: "",
            link: "#",
          },
          {
            logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
            company: "Enterprise AI",
            tags: "ENTERPRISE / TEE TRAINING",
            title: "Custom model training for Fortune 500.",
            subtitle: "Proprietary knowledge protected in enclaves",
            image: "",
            link: "#",
          },
        ]}
      />
      <Codeexample3 />
      <Feature161 />
      <Faq14 />
      <Cta4
        title="Start Private Fine-Tuning Today"
        description="Customize LLMs on your proprietary data with hardware-enforced confidentiality and zero-knowledge guarantees."
        buttonText="Deploy on Phala"
        buttonUrl="https://cloud.phala.network"
        items={[
          "Intel TDX & AMD SEV support",
          "Encrypted training data",
          "Zero-trust architecture",
          "Enterprise-ready compliance",
          "24/7 technical support",
        ]}
      />
    </>
  );
}
