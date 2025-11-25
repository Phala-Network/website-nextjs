import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'dstack',
    short_name: 'dstack',
    description: 'Open Source Confidential Computing Platform',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#C4F142',
    icons: [
      {
        src: '/dstack-icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
