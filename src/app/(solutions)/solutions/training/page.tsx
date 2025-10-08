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

import { trainingContent } from "./content";

export const metadata: Metadata = {
  title: trainingContent.seo.title,
  description: trainingContent.seo.description,
  keywords: trainingContent.seo.keywords,
  openGraph: {
    title: trainingContent.seo.title,
    description: trainingContent.seo.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: trainingContent.seo.title,
    description: trainingContent.seo.description,
  },
};

export default function TrainingPage() {
  return (
    <>
      <Hero />
      <WhyItMatters />
      <EncryptionShowcase />
      <HowItWorks />
      <UseCases />
      <AdditionalUseCases />
      <SuccessStories />
      <DevExperience />
      <ProofCompliance />
      <FAQs />
      <FinalCTA />
    </>
  );
}

const Hero = () => {
  return <Hero216 />;
};

const WhyItMatters = () => {
  const content = trainingContent.why;
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl font-medium md:text-5xl">{content.title}</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            {content.description}
          </p>
        </div>
      </div>
    </section>
  );
};

const EncryptionShowcase = () => {
  return <Feature282 />;
};

const HowItWorks = () => {
  return <Feature172 />;
};

const UseCases = () => {
  return <Feature284 />;
};

const AdditionalUseCases = () => {
  return <Feature280 />;
};

const SuccessStories = () => {
  const content = trainingContent.stories;
  return (
    <Casestudies3
      featuredCasestudy={content.featured}
      casestudies={content.additional}
    />
  );
};

const DevExperience = () => {
  return <Codeexample3 />;
};

const ProofCompliance = () => {
  return <Feature161 />;
};

const FAQs = () => {
  return <Faq14 />;
};

const FinalCTA = () => {
  const content = trainingContent.cta;
  return (
    <Cta4
      title={content.title}
      description={content.description}
      buttonText={content.buttonText}
      buttonUrl={content.buttonUrl}
      items={content.items}
    />
  );
};
