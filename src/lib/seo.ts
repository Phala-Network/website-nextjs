/**
 * SEO utility functions for optimizing metadata across the site
 */

/**
 * Clamps a string to a maximum length, adding ellipsis if truncated
 * @param text - The text to clamp
 * @param maxLength - Maximum character length
 * @returns Clamped text with ellipsis if needed
 */
function clamp(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength - 1).trim() + '…'
}

/**
 * Creates an optimized page title following SEO best practices
 * - Max 60 characters (Google's display limit)
 * - Prioritizes important keywords at the start
 *
 * Note: Brand suffix is handled by Next.js metadata template in layout.tsx
 * (template: '%s | Phala'), so this function should NOT add a suffix.
 *
 * @param pageTitle - The main page title
 * @returns Optimized title string (max 50 chars to leave room for " | Phala" suffix)
 */
export function makeTitle(pageTitle: string): string {
  // Leave room for " | Phala" suffix added by layout template
  const maxLength = 50
  return clamp(pageTitle, maxLength)
}

/**
 * Creates an optimized meta description following SEO best practices
 * - Max 155 characters (Google's display limit)
 * - Should include primary keyword and call-to-action
 * - Compelling and actionable
 *
 * @param description - The description text
 * @returns Optimized description string
 */
export function makeDescription(description: string): string {
  const maxLength = 155
  return clamp(description, maxLength)
}

/**
 * Generates JSON-LD schema for Organization
 * Used on homepage and about page
 */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Phala',
    alternateName: 'Phala Cloud',
    url: 'https://phala.com',
    logo: 'https://phala.com/logo.png',
    description:
      'Confidential computing platform for private AI and secure cloud infrastructure with GPU TEE support.',
    foundingDate: '2019',
    sameAs: [
      'https://twitter.com/PhalaNetwork',
      'https://github.com/Phala-Network',
      'https://discord.gg/phala-network',
      'https://www.linkedin.com/company/phala-network',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      url: 'https://phala.com/contact',
    },
  }
}

/**
 * Generates JSON-LD schema for Product
 * Used on product pages (GPU TEE, Confidential VM, etc.)
 *
 * @param name - Product name
 * @param description - Product description
 * @param url - Product page URL
 * @param imageUrl - Product image URL (optional, defaults to logo)
 * @param price - Product price (optional, defaults to 50.37)
 */
export function productSchema(
  name: string,
  description: string,
  url: string,
  imageUrl = 'https://phala.com/logo.png',
  price = 50.37,
) {
  // Calculate price valid until (90 days from now)
  const priceValidUntil = new Date()
  priceValidUntil.setDate(priceValidUntil.getDate() + 90)

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: imageUrl,
    brand: 'Phala',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      url,
      price: price.toString(),
      priceValidUntil: priceValidUntil.toISOString().split('T')[0],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

/**
 * Generates JSON-LD schema for FAQPage
 * Used on pages with FAQ sections
 *
 * @param faqs - Array of FAQ items with question and answer
 */
export function faqPageSchema(
  faqs: Array<{ question: string; answer: string }>,
) {
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
