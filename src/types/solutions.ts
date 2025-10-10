export interface SEOContent {
  title: string;
  description: string;
  keywords?: string[];
}

export interface HeroContent {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  primaryCTA: {
    text: string;
    url: string;
  };
  secondaryCTA: {
    text: string;
    url: string;
  };
  features?: string[];
}

export interface WhyContent {
  title: string;
  description: string;
  points?: string[];
  images?: string[];
  links?: string[];
}

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

export interface HowContent {
  title: string;
  description?: string;
  steps: HowItWorksStep[];
}

export interface UseCase {
  title: string;
  description: string;
  metric?: string;
  benefit?: string;
}

export interface SuccessStory {
  logo: string;
  company: string;
  tags: string;
  title: string;
  subtitle: string;
  image?: string;
  link?: string;
}

export interface CodeExample {
  language: string;
  filename: string;
  code: string;
}

export interface DevExpContent {
  title: string;
  description: string;
  codeExamples: CodeExample[];
  features?: string[];
}

export interface ProofContent {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  awards?: {
    title: string;
    images: string[];
  };
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  items: FAQ[];
}

export interface CTAContent {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  items: string[];
}

export interface SolutionContent {
  seo: SEOContent;
  hero: HeroContent;
  why: WhyContent;
  how: HowContent;
  useCases: UseCase[];
  stories: {
    featured: SuccessStory;
    additional: SuccessStory[];
  };
  devExp: DevExpContent;
  proof: ProofContent;
  faqs: FAQCategory[];
  cta: CTAContent;
}
