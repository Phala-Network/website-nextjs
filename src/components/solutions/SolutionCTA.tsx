import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface SolutionCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  items?: string[];
}

export function SolutionCTA({ title, description, buttonText, buttonUrl, items }: SolutionCTAProps) {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
            {title}
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <Button asChild size="lg" variant="secondary" className="mb-12">
            <a href={buttonUrl}>{buttonText}</a>
          </Button>
          {items && items.length > 0 && (
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto text-left">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
