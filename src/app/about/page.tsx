import type { Metadata } from 'next'

import About from './about'

export const metadata: Metadata = {
  title: 'About Us',
}

export default function AboutPage() {
  return <About />
}
