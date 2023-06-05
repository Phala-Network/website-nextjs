/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ]
  }
}

module.exports = nextConfig
