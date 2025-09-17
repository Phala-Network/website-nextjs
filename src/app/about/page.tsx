import { Metadata } from 'next'
import About from './about'

export const metadata: Metadata = {
  title: 'About Us | Phala Network',
  description: 'Meet the team building the future of confidential computing and trusted AI infrastructure. Learn about our mission to enable secure, verifiable computation for Web3 and AI.',
  openGraph: {
    title: 'About Us | Phala Network',
    description: 'Meet the team building the future of confidential computing and trusted AI infrastructure.',
    images: ['/og-about.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Phala Network',
    description: 'Meet the team building the future of confidential computing and trusted AI infrastructure.',
    images: ['/og-about.png'],
  },
}

export default function AboutPage() {
  return <About />
}