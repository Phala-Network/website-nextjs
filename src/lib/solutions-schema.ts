import type { FAQ } from '@/types/solutions'

/**
 * Generate JSON-LD schema for Product
 */
export function generateProductSchema(page: {
  name: string
  description: string
  url: string
  features: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: page.name,
    description: page.description,
    url: page.url,
    brand: {
      '@type': 'Organization',
      name: 'Phala Network',
      url: 'https://phala.network',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free tier available with enterprise pricing',
    },
    additionalProperty: page.features.map((feature) => ({
      '@type': 'PropertyValue',
      name: feature,
    })),
  }
}

/**
 * Generate JSON-LD schema for FAQPage
 */
export function generateFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Flatten FAQ categories into single array for schema
 */
export function flattenFAQs(
  categories: Array<{ category: string; items: FAQ[] }>,
): FAQ[] {
  return categories.flatMap((cat) => cat.items)
}

/**
 * Example usage in page component:
 *
 * ```tsx
 * import { generateProductSchema, generateFAQSchema, flattenFAQs } from '@/lib/solutions-schema';
 *
 * export default function Page() {
 *   const productSchema = generateProductSchema({
 *     name: 'Private AI Data - Phala Network',
 *     description: 'Compute-to-data on confidential TEEs',
 *     url: 'https://phala.network/solutions/private-ai-data',
 *     features: ['Remote attestation', 'Zero-trust', 'TEE isolation']
 *   });
 *
 *   const faqSchema = generateFAQSchema(
 *     flattenFAQs(privateAIDataContent.faqs)
 *   );
 *
 *   return (
 *     <>
 *       <script
 *         type="application/ld+json"
 *         dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
 *       />
 *       <script
 *         type="application/ld+json"
 *         dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
 *       />
 *       <YourPageContent />
 *     </>
 *   );
 * }
 * ```
 */
