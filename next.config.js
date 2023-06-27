/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/en',
        destination: '/',
        permanent: false
      },
      {
        source: '/cn',
        destination: '/',
        permanent: false
      },
      {
        source: '/zh',
        destination: '/',
        permanent: false
      },
      {
        source: '/en/phat-contract',
        destination: '/',
        permanent: false
      },
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: false
      },
      {
        source: '/cn/:path*',
        destination: '/:path*',
        permanent: false
      },
      {
        source: '/zh/:path*',
        destination: '/:path*',
        permanent: false
      },
    ]
  }
}

module.exports = nextConfig
