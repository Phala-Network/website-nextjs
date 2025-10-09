import React from "react";

import { EvervaultCard } from "@/components/aceternity/evervault-card";

interface Feature282Props {
  badge?: string;
  cardSubtitle?: string;
  cardTitle?: string;
  title?: string;
  description1?: string;
  description2?: string;
  features?: string[];
}

const Feature282 = ({
  badge = "Confidential Computing",
  cardSubtitle = "TEE Hardware Encryption",
  cardTitle = "Zero-Trust Computing",
  title = "Hardware-Enforced Encryption for AI & Data Workloads",
  description1 = "TEEs with Intel TDX and AMD SEV provide CPU-level memory encryption—your AI models, datasets, and computations stay encrypted in-use. Not even cloud admins or hypervisors can inspect runtime state. Remote attestation proves the enclave is genuine before you send data.",
  description2 = "Built on zero-trust principles, our confidential computing infrastructure ensures data remains encrypted throughout the entire computation lifecycle. Hardware root-of-trust, sealed storage, and cryptographic proofs provide verifiable protection against insider threats and infrastructure compromise.",
  features = [
    "Memory encryption in-use",
    "Remote attestation proofs",
    "Hardware root-of-trust"
  ]
}: Feature282Props) => {
  return (
    <section className="w-screen overflow-hidden py-32">
      <div className="container grid h-full w-full grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <div className="bg-primary border-primary/20 mx-auto flex h-full w-full flex-col gap-4 rounded-lg border p-4 md:max-w-sm">
            <div className="bg-background border-border/50 h-full w-full rounded-md border p-4">
              <EvervaultCard
                text="Hover to Encrypt"
                className="w-full text-center text-xl font-medium tracking-tight"
              />
            </div>
            <div className="space-y-2 p-4">
              <p className="text-muted-foreground font-mono text-sm">
                {cardSubtitle}
              </p>
              <p className="text-primary-foreground text-lg font-semibold">
                {cardTitle}
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-muted-foreground mb-2 font-mono text-sm">
            {badge}
          </h2>
          <h2 className="text-3xl font-semibold tracking-tight md:max-w-lg">
            {title}
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed md:max-w-lg">
            {description1}
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed md:max-w-lg">
            {description2}
          </p>
          <div className="mt-8 space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-primary h-2 w-2 rounded-full"></div>
                <span className="text-muted-foreground font-mono text-sm">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export { Feature282 };
