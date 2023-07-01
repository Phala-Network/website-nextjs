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
      // the /phat-contract page.
      {
        source: '/en/phat-contract',
        destination: '/phat-contract',
        permanent: false
      },
      {
        source: '/phat-contracts',
        destination: '/phat-contract',
        permanent: false
      },
      // the /miner page.
      {
        source: '/miner',
        destination: 'https://docs.phala.network/compute-providers/basic-info',
        permanent: false,
      },
      {
        source: '/zh/miner',
        destination: 'https://docs.phala.network/compute-providers/basic-info',
        permanent: false,
      },
      {
        source: '/en/miner',
        destination: 'https://docs.phala.network/compute-providers/basic-info',
        permanent: false,
      },
      {
        source: '/en/miner/',
        destination: 'https://docs.phala.network/compute-providers/basic-info',
        permanent: false,
      },
      // the /aboutUs page.
      {
        source: '/aboutUs',
        destination: 'https://docs.phala.network/introduction/readme',
        permanent: false,
      },
      {
        source: '/en/aboutUs',
        destination: 'https://docs.phala.network/introduction/readme',
        permanent: false,
      },
      {
        source: '/zh/aboutUs',
        destination: 'https://docs.phala.network/introduction/readme',
        permanent: false,
      },
      // the /node
      {
        source: '/node',
        destination: 'https://docs.phala.network/compute-providers/basic-info/worker-rewards',
        permanent: false,
      },
      {
        source: '/en/node',
        destination: 'https://docs.phala.network/compute-providers/basic-info/worker-rewards',
        permanent: false,
      },
      {
        source: '/zh/node',
        destination: 'https://docs.phala.network/compute-providers/basic-info/worker-rewards',
        permanent: false,
      },
      // The file download
      {
        source: '/Phala-Network-Responsible-Disclosure.pdf',
        destination: 'https://github.com/Phala-Network/phala-blockchain/blob/master/docs/responsible-disclosure.md',
        permanent: false,
      },
      {
        source: '/en/Phala-Network-Responsible-Disclosure.pdf',
        destination: 'https://github.com/Phala-Network/phala-blockchain/blob/master/docs/responsible-disclosure.md',
        permanent: false,
      },
      {
        source: '/zh/Phala-Network-Responsible-Disclosure.pdf',
        destination: 'https://github.com/Phala-Network/phala-blockchain/blob/master/docs/responsible-disclosure.md',
        permanent: false,
      },
    ]
  }
}

module.exports = nextConfig
