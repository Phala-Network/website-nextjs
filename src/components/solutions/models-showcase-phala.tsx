"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export function ModelsShowcasePhala() {
  const models = [
    {
      id: 1,
      title: "200+ AI Models",
      description: "Access leading LLMs from OpenAI, Anthropic, Meta, Google, and more—all with hardware-enforced privacy.",
      features: [
        "GPT-4, Claude, Llama, Gemini",
        "Multimodal & specialized models",
        "Regular model updates",
      ]
    },
    {
      id: 2,
      title: "OpenAI-Compatible API",
      description: "Drop-in replacement for OpenAI endpoints with zero code changes and full SDK compatibility.",
      features: [
        "Same request/response format",
        "Compatible SDKs & libraries",
        "Seamless migration path",
      ]
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Private AI Gateway For 200+ Models
          </h2>
          <p className="text-lg text-muted-foreground">
            One unified interface for all major AI providers with TEE-protected routing and verifiable attestation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {models.map((model) => (
              <Card key={model.id} className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">{model.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {model.description}
                  </p>
                  <ul className="space-y-3">
                    {model.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
