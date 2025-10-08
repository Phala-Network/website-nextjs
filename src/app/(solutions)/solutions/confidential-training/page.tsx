import type { Metadata } from "next";
import { Hero216 } from "@/components/solutions/hero216";
import { Feature206 } from "@/components/solutions/feature206";
import { Feature282 } from "@/components/solutions/feature282";
import { Feature172 } from "@/components/solutions/feature172";
import { Feature284 } from "@/components/solutions/feature284";
import { Feature280 } from "@/components/solutions/feature280";
import { Casestudies3 } from "@/components/solutions/casestudies3";
import { Codeexample3 } from "@/components/solutions/codeexample3";
import { Feature161 } from "@/components/solutions/feature161";
import { Faq14 } from "@/components/solutions/faq14";
import { Cta4 } from "@/components/solutions/cta4";

export const metadata: Metadata = {
  title: "Confidential Training | Phala Network",
  description: "Large-scale model training with TEE isolation. Train LLMs on confidential datasets with hardware-enforced encryption and zero-knowledge guarantees.",
  keywords: ["AI training", "confidential computing", "TEE", "secure training", "private AI"],
};

export default function ConfidentialTrainingPage() {
  return (
    <>
      <Hero216 />
      <Feature206
        title="Why Confidential Training Matters"
        description="Traditional cloud training exposes your entire dataset and model checkpoints to infrastructure operators."
        points={[
          "Training data contains sensitive information",
          "Model checkpoints reveal proprietary techniques",
          "Gradient updates leak training examples",
          "Infrastructure admins see everything"
        ]}
      />
      <Feature282 />
      <Feature172 />
      <Feature284 />
      <Feature280 />
      <Casestudies3
        featuredCasestudy={{
          logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
          company: "AI Research Lab",
          tags: "RESEARCH / CONFIDENTIAL AI",
          title: "Large-scale LLM training in TEEs.",
          subtitle: "Training GPT-scale models on proprietary research data",
          image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
          link: "#",
        }}
        casestudies={[
          {
            logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
            company: "Pharma AI",
            tags: "PHARMACEUTICAL / PRIVATE TRAINING",
            title: "Drug discovery model training.",
            subtitle: "Training on confidential molecular data",
            image: "",
            link: "#",
          },
          {
            logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
            company: "Defense AI",
            tags: "DEFENSE / TEE TRAINING",
            title: "Classified data model training.",
            subtitle: "Meeting government security requirements",
            image: "",
            link: "#",
          },
        ]}
      />
      <Codeexample3 />
      <Feature161 />
      <Faq14 />
      <Cta4
        title="Start Confidential Training Today"
        description="Train large-scale AI models on sensitive datasets with hardware-enforced encryption and verifiable compute."
        buttonText="Deploy on Phala"
        buttonUrl="https://cloud.phala.network"
        items={[
          "Intel TDX & AMD SEV support",
          "Multi-GPU TEE clusters",
          "Zero-trust architecture",
          "Enterprise-ready compliance",
          "24/7 technical support",
        ]}
      />
    </>
  );
}
