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
      {
        source: '/deploy-an-MCP-server-on-phala-cloud-a-step-by-step-guide',
        destination: '/posts/deploy-an-MCP-server-on-phala-cloud-a-step-by-step-guide',
        permanent: false,
      },
      {
        source: '/MCP-Not-Safe-Reasons-and-Ideas',
        destination: '/posts/MCP-Not-Safe-Reasons-and-Ideas',
        permanent: false,
      },
      {
        source: '/beyond-sgx-embracing-gpu-tee-for-decentralized-ai-dagi',
        destination: '/posts/beyond-sgx-embracing-gpu-tee-for-decentralized-ai-dagi',
        permanent: false,
      },
      {
        source: '/empowering-the-aiagent-economy-create-own-and-earn',
        destination: '/posts/empowering-the-aiagent-economy-create-own-and-earn',
        permanent: false,
      },
      {
        source: '/phala-network-joins-nvidia-inception-program',
        destination: '/posts/phala-network-joins-nvidia-inception-program',
        permanent: false,
      },
      {
        source: '/theoriq-and-phala-network-partner-to-advance-secure-and-resilient-ai-agents-in-web3',
        destination: '/posts/theoriq-and-phala-network-partner-to-advance-secure-and-resilient-ai-agents-in-web3',
        permanent: false,
      },
      {
        source: '/coprocessor-security-verification-framework',
        destination: '/posts/coprocessor-security-verification-framework',
        permanent: false,
      },
      {
        source: '/phala-2024-road-map',
        destination: '/posts/phala-2024-road-map',
        permanent: false,
      },
      {
        source: '/aiagent-ready-blockspace-by-phala-network',
        destination: '/posts/aiagent-ready-blockspace-by-phala-network',
        permanent: false,
      },
      {
        source: '/phala-network-2024-year-in-review',
        destination: '/posts/phala-network-2024-year-in-review',
        permanent: false,
      },
      {
        source: '/phalanetwork101-Blockchain-Oracles',
        destination: '/posts/phalanetwork101-Blockchain-Oracles',
        permanent: false,
      },
      {
        source: '/verifying_tee_onchain_with_risczero_zkvm',
        destination: '/posts/verifying_tee_onchain_with_risczero_zkvm',
        permanent: false,
      },
      {
        source: '/get-started-on-phala-cloud-with-cli',
        destination: '/posts/get-started-on-phala-cloud-with-cli',
        permanent: false,
      },
      {
        source: '/technical-analysis-of-why-phala-will-not-be-affected-by-the-intel-sgx-chip-vulnerabilities-e045b0189dc2',
        destination: '/posts/technical-analysis-of-why-phala-will-not-be-affected-by-the-intel-sgx-chip-vulnerabilities-e045b0189dc2',
        permanent: false,
      },
      {
        source: '/unleashing-ai-potential-launch-your-mcp-server-with-teebacked-power-on-our-new-mcp-hosting-platform',
        destination: '/posts/unleashing-ai-potential-launch-your-mcp-server-with-teebacked-power-on-our-new-mcp-hosting-platform',
        permanent: false,
      },
      {
        source: '/phala-network-and-0g-partner-for-enhanced-confidential-ai-computing',
        destination: '/posts/phala-network-and-0g-partner-for-enhanced-confidential-ai-computing',
        permanent: false,
      },
      {
        source: '/phala-network-partners-with-subsquid-to-provide-high-quality-indexing-service-on-phala-app-8adb3062f37d',
        destination: '/posts/phala-network-partners-with-subsquid-to-provide-high-quality-indexing-service-on-phala-app-8adb3062f37d',
        permanent: false,
      },
      {
        source: '/truth-of-AI-Agent',
        destination: '/posts/truth-of-AI-Agent',
        permanent: false,
      },
      {
        source: '/index-decoded-the-multi-chain-intent-model',
        destination: '/posts/index-decoded-the-multi-chain-intent-model',
        permanent: false,
      },
      {
        source: '/phala-network-5-years-of-pioneering-tee-verifier-solutions',
        destination: '/posts/phala-network-5-years-of-pioneering-tee-verifier-solutions',
        permanent: false,
      },
      {
        source: '/phala-network-and-carv-join-forces-to-advance-decentralized-ai-and-data-frameworks',
        destination: '/posts/phala-network-and-carv-join-forces-to-advance-decentralized-ai-and-data-frameworks',
        permanent: false,
      },
      {
        source: '/phalanetwork101-what-is-depin',
        destination: '/posts/phalanetwork101-what-is-depin',
        permanent: false,
      },
      {
        source: '/real-code-for-real-dagi-',
        destination: '/posts/real-code-for-real-dagi-',
        permanent: false,
      },
      {
        source: '/web3-social-create-monetize-with-smart-contracts',
        destination: '/posts/web3-social-create-monetize-with-smart-contracts',
        permanent: false,
      },
      {
        source: '/agent-wars-shaping-the-future-of-ai-and-web3-with-tokenization',
        destination: '/posts/agent-wars-shaping-the-future-of-ai-and-web3-with-tokenization',
        permanent: false,
      },
    ]
  }
}

module.exports = nextConfig
