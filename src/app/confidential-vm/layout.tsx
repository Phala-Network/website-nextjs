import type { Metadata } from 'next'
import { makeDescription, makeTitle, productSchema } from '@/lib/seo'

// Keywords from CSV row 7: CVM, confidential VM, private cloud compute, Intel TDX, AMD SEV
export const metadata: Metadata = {
  title: makeTitle('Confidential VM - Private Cloud Computing with TEE'),
  description: makeDescription(
    'Deploy confidential virtual machines with Intel TDX and AMD SEV. Hardware-secured cloud computing with memory encryption and remote attestation.',
  ),
  keywords: ['CVM', 'confidential VM', 'private cloud compute', 'Intel TDX', 'AMD SEV'],
}

export default function ConfidentialVMLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // SEO: JSON-LD Product Schema
  const productJsonLd = productSchema(
    'Confidential VM (CVM)',
    'Hardware-secured confidential virtual machines with Intel TDX and AMD SEV. Deploy Docker containers with TEE protection, memory encryption, and cryptographic attestation.',
    'https://phala.com/confidential-vm',
  )

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      {children}
    </>
  )
}
