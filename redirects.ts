import type { NextConfig } from 'next'

const CLOUD_URL = 'https://cloud.phala.network'
const DSTACK_DOMAIN = 'dstack.org'

const redirects: NonNullable<NextConfig['redirects']> = async () => {
  return [
    // dstack.org: redirect all non-dstack pages to /dstack (which shows as /)
    {
      source: '/:path((?!dstack|_next|favicon|dstack/.*|relay-ph|relay-ph/.*).*)',
      has: [
        {
          type: 'host',
          value: DSTACK_DOMAIN,
        },
      ],
      destination: '/',
      permanent: false,
    },
    {
      source: '/en',
      destination: '/',
      statusCode: 301,
    },
    {
      source: '/cn',
      destination: '/',
      statusCode: 301,
    },
    {
      source: '/zh',
      destination: '/',
      statusCode: 301,
    },
    {
      source: '/en/:path*',
      destination: '/:path*',
      statusCode: 301,
    },
    {
      source: '/cn/:path*',
      destination: '/:path*',
      statusCode: 301,
    },
    {
      source: '/zh/:path*',
      destination: '/:path*',
      statusCode: 301,
    },
    // the /phat-contract page.
    {
      source: '/en/phat-contract',
      destination: '/phat-contract',
      statusCode: 301,
    },
    {
      source: '/phat-contracts',
      destination: '/phat-contract',
      statusCode: 301,
    },
    // the /miner page.
    {
      source: '/miner',
      destination: 'https://docs.phala.com/compute-providers/basic-info',
      statusCode: 301,
    },
    {
      source: '/zh/miner',
      destination: 'https://docs.phala.com/compute-providers/basic-info',
      statusCode: 301,
    },
    {
      source: '/en/miner',
      destination: 'https://docs.phala.com/compute-providers/basic-info',
      statusCode: 301,
    },
    {
      source: '/en/miner/',
      destination: 'https://docs.phala.com/compute-providers/basic-info',
      statusCode: 301,
    },
    // the /aboutUs page.
    {
      source: '/aboutUs',
      destination: 'https://docs.phala.com/introduction/readme',
      statusCode: 301,
    },
    {
      source: '/en/aboutUs',
      destination: 'https://docs.phala.com/introduction/readme',
      statusCode: 301,
    },
    {
      source: '/zh/aboutUs',
      destination: 'https://docs.phala.com/introduction/readme',
      statusCode: 301,
    },
    // the /node
    {
      source: '/node',
      destination:
        'https://docs.phala.com/compute-providers/basic-info/worker-rewards',
      statusCode: 301,
    },
    {
      source: '/en/node',
      destination:
        'https://docs.phala.com/compute-providers/basic-info/worker-rewards',
      statusCode: 301,
    },
    {
      source: '/zh/node',
      destination:
        'https://docs.phala.com/compute-providers/basic-info/worker-rewards',
      statusCode: 301,
    },
    // The file download
    {
      source: '/Phala-Network-Responsible-Disclosure.pdf',
      destination:
        'https://github.com/Phala-Network/phala-blockchain/blob/master/docs/responsible-disclosure.md',
      statusCode: 301,
    },
    {
      source: '/en/Phala-Network-Responsible-Disclosure.pdf',
      destination:
        'https://github.com/Phala-Network/phala-blockchain/blob/master/docs/responsible-disclosure.md',
      statusCode: 301,
    },
    {
      source: '/zh/Phala-Network-Responsible-Disclosure.pdf',
      destination:
        'https://github.com/Phala-Network/phala-blockchain/blob/master/docs/responsible-disclosure.md',
      statusCode: 301,
    },
    {
      source: '/deploy-an-MCP-server-on-phala-cloud-a-step-by-step-guide',
      destination:
        '/posts/deploy-an-MCP-server-on-phala-cloud-a-step-by-step-guide',
      statusCode: 301,
    },
    {
      source: '/MCP-Not-Safe-Reasons-and-Ideas',
      destination: '/posts/MCP-Not-Safe-Reasons-and-Ideas',
      statusCode: 301,
    },
    {
      source: '/beyond-sgx-embracing-gpu-tee-for-decentralized-ai-dagi',
      destination:
        '/posts/beyond-sgx-embracing-gpu-tee-for-decentralized-ai-dagi',
      statusCode: 301,
    },
    {
      source: '/empowering-the-aiagent-economy-create-own-and-earn',
      destination: '/posts/empowering-the-aiagent-economy-create-own-and-earn',
      statusCode: 301,
    },
    {
      source: '/phala-network-joins-nvidia-inception-program',
      destination: '/posts/phala-network-joins-nvidia-inception-program',
      statusCode: 301,
    },
    {
      source:
        '/theoriq-and-phala-network-partner-to-advance-secure-and-resilient-ai-agents-in-web3',
      destination:
        '/posts/theoriq-and-phala-network-partner-to-advance-secure-and-resilient-ai-agents-in-web3',
      statusCode: 301,
    },
    {
      source: '/coprocessor-security-verification-framework',
      destination: '/posts/coprocessor-security-verification-framework',
      statusCode: 301,
    },
    {
      source: '/phala-2024-road-map',
      destination: '/posts/phala-2024-road-map',
      statusCode: 301,
    },
    {
      source: '/aiagent-ready-blockspace-by-phala-network',
      destination: '/posts/aiagent-ready-blockspace-by-phala-network',
      statusCode: 301,
    },
    {
      source: '/phala-network-2024-year-in-review',
      destination: '/posts/phala-network-2024-year-in-review',
      statusCode: 301,
    },
    {
      source: '/phalanetwork101-Blockchain-Oracles',
      destination: '/posts/phalanetwork101-Blockchain-Oracles',
      statusCode: 301,
    },
    {
      source: '/verifying_tee_onchain_with_risczero_zkvm',
      destination: '/posts/verifying_tee_onchain_with_risczero_zkvm',
      statusCode: 301,
    },
    {
      source: '/get-started-on-phala-cloud-with-cli',
      destination: '/posts/get-started-on-phala-cloud-with-cli',
      statusCode: 301,
    },
    {
      source:
        '/technical-analysis-of-why-phala-will-not-be-affected-by-the-intel-sgx-chip-vulnerabilities-e045b0189dc2',
      destination:
        '/posts/technical-analysis-of-why-phala-will-not-be-affected-by-the-intel-sgx-chip-vulnerabilities-e045b0189dc2',
      statusCode: 301,
    },
    {
      source:
        '/unleashing-ai-potential-launch-your-mcp-server-with-teebacked-power-on-our-new-mcp-hosting-platform',
      destination:
        '/posts/unleashing-ai-potential-launch-your-mcp-server-with-teebacked-power-on-our-new-mcp-hosting-platform',
      statusCode: 301,
    },
    {
      source:
        '/phala-network-and-0g-partner-for-enhanced-confidential-ai-computing',
      destination:
        '/posts/phala-network-and-0g-partner-for-enhanced-confidential-ai-computing',
      statusCode: 301,
    },
    {
      source:
        '/phala-network-partners-with-subsquid-to-provide-high-quality-indexing-service-on-phala-app-8adb3062f37d',
      destination:
        '/posts/phala-network-partners-with-subsquid-to-provide-high-quality-indexing-service-on-phala-app-8adb3062f37d',
      statusCode: 301,
    },
    {
      source: '/truth-of-AI-Agent',
      destination: '/posts/truth-of-AI-Agent',
      statusCode: 301,
    },
    {
      source: '/index-decoded-the-multi-chain-intent-model',
      destination: '/posts/index-decoded-the-multi-chain-intent-model',
      statusCode: 301,
    },
    {
      source: '/phala-network-5-years-of-pioneering-tee-verifier-solutions',
      destination:
        '/posts/phala-network-5-years-of-pioneering-tee-verifier-solutions',
      statusCode: 301,
    },
    {
      source:
        '/phala-network-and-carv-join-forces-to-advance-decentralized-ai-and-data-frameworks',
      destination:
        '/posts/phala-network-and-carv-join-forces-to-advance-decentralized-ai-and-data-frameworks',
      statusCode: 301,
    },
    {
      source: '/phalanetwork101-what-is-depin',
      destination: '/posts/phalanetwork101-what-is-depin',
      statusCode: 301,
    },
    {
      source: '/real-code-for-real-dagi-',
      destination: '/posts/real-code-for-real-dagi-',
      statusCode: 301,
    },
    {
      source: '/web3-social-create-monetize-with-smart-contracts',
      destination: '/posts/web3-social-create-monetize-with-smart-contracts',
      statusCode: 301,
    },
    {
      source: '/agent-wars-shaping-the-future-of-ai-and-web3-with-tokenization',
      destination:
        '/posts/agent-wars-shaping-the-future-of-ai-and-web3-with-tokenization',
      statusCode: 301,
    },
    {
      source:
        '/Dstack-Completes-Security-Audit-A-Milestone-for-Confidential-Cloud',
      destination:
        '/posts/Dstack-Completes-Security-Audit-A-Milestone-for-Confidential-Cloud',
      statusCode: 301,
    },
    {
      source: '/guide-dynamic-nfts-web3-social-progression-games',
      destination: '/posts/guide-dynamic-nfts-web3-social-progression-games',
      statusCode: 301,
    },

    // New redirects - August 2025
    {
      source: '/confidential-computation-with-tee',
      destination: 'https://cloud.phala.network/features/gpu-tee',
      statusCode: 301,
    },
    {
      source: '/phat-contract',
      destination: '/confidential-vm',
      statusCode: 301,
    },
    {
      source: '/phat-contract-directory',
      destination: '/confidential-vm',
      statusCode: 301,
    },
    {
      source: '/modular-coprocessor',
      destination: '/confidential-vm',
      statusCode: 301,
    },
    {
      source: '/ai',
      destination: '/confidential-vm',
      statusCode: 301,
    },
    {
      source: '/faucet',
      destination: 'https://app.phala.network',
      statusCode: 301,
    },
    {
      source: '/changelog',
      destination: 'https://docs.phala.com/phala-cloud/changelog',
      statusCode: 301,
    },
    {
      source: '/changelog/rss.xml',
      destination: 'https://docs.phala.com/phala-cloud/changelog/rss.xml',
      statusCode: 301,
    },

    // Redirects to the cloud
    {
      source: '/register',
      destination: `${CLOUD_URL}/register`,
      statusCode: 301,
    },
    {
      source: '/login',
      destination: `${CLOUD_URL}/login`,
      statusCode: 301,
    },
    {
      source: '/dashboard/:path*',
      destination: `${CLOUD_URL}/dashboard/:path*`,
      statusCode: 301,
    },

    {
      source: '/confidential-ai',
      destination: '/gpu-tee',
      statusCode: 301,
    },
  ]
}

export default redirects
