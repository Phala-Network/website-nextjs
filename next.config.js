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
