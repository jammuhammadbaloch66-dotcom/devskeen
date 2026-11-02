import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'devskeen | Scale Your Systems Without Scaling Your Costs',
    short_name: 'devskeen',
    description: 'Premier cloud, data, and software engineering house helping companies scale systems without scaling infrastructure costs.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#10B981',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
      },
    ],
  }
}

