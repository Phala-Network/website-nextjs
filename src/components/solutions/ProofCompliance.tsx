import { Check } from "lucide-react";

interface ProofComplianceProps {
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  awards?: {
    title: string;
    images: string[];
  };
}

export function ProofCompliance({ title, subtitle, description, features, awards }: ProofComplianceProps) {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            {subtitle && (
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
                {subtitle}
              </p>
            )}
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {description}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 mb-12">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {awards && (
            <div className="text-center">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                {awards.title}
              </h3>
              <div className="flex flex-wrap gap-8 justify-center items-center">
                {awards.images.map((img, i) => (
                  <div key={i} className="h-12 flex items-center">
                    {/* TODO: Replace with actual compliance logos */}
                    <div className="px-8 py-2 border rounded bg-muted/50 text-xs font-medium">
                      {img.split("/").pop()?.replace(".svg", "").toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
