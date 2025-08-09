import { z } from 'zod'
import dedent from 'dedent'

export const blueprintSchema = z.object({
  name: z.string(),
  description: z.string(),
  coverImage: z.string(),
  slug: z.string(),
  repoUrl: z.string(),
  templateName: z.string().default(''),
  repoName: z.string(),
  version: z.string(),
  tags: z.array(z.string()),
  headline: z.string(),
  fullDescription: z.string(),
  constructorArguments: z.record(z.string(), z.any()).optional(),
  published: z.boolean().optional(),
})

export type Blueprint = z.infer<typeof blueprintSchema>

export interface Integration {
  name: string
  icon: string
}

export interface Proposal {
  title: string
  description: string
  tags: string[]
  integrations?: Integration[]
}

export const proposals: Proposal[] = []

const Lens: Integration = {
  name: 'Lens Procotol',
  icon: '/icons/team-lens.jpg',
}

const Airstack: Integration = {
  name: 'Airstack',
  icon: '/icons/team-airstack.jpg',
}

//
//
//

proposals.push({
  title: 'Create an Open Action',
  description: dedent`
    Create an Open Action with the LensAPI Oracle or the Airstack Starter Kit.
  `,
  tags: ['LensAPI Oracle', 'Airstack Starter Kit'],
  integrations: [Lens, Airstack],
})

proposals.push({
  title: 'Build a Monetization dApp for Web3 Social',
  description: dedent`
    Leverage the LensAPI Oracle to build a monetization dApp for your Web3 Social community.
  `,
  tags: ['LensAPI Oracle'],
  integrations: [Lens],
})

proposals.push({
  title: 'Web3 Social Marketplace',
  description: dedent`
    Create a Web3 Social dApp like Facebook Marketplace using LensAPI Oracle.
  `,
  tags: ['LensAPI Oracle'],
  integrations: [Lens],
})

proposals.push({
  title: 'Raffle for Your On-Chain Graph',
  description: dedent`
    Raffle off collectable asset and select a random account that is part of your on-chain graph.
  `,
  tags: ['Airstack Starter Kit'],
  integrations: [Airstack],
})

proposals.push({
  title: 'Airdrop NFTs to Your Loyal Followers',
  description: dedent`
    Reward followers that have followed you the longest with an NFT.
  `,
  tags: ['Airstack Starter Kit'],
  integrations: [Airstack],
})

proposals.push({
  title: 'Sync Follows Across Web3 Social dApps',
  description: dedent`
    Use the Airstack API to sync all of your follows from Lens Protocol to Farcaster and vice versa.
  `,
  tags: ['Airstack Starter Kit'],
  integrations: [Airstack],
})

proposals.push({
  title: 'Web3 Social Polymarket',
  description: dedent`
    Create a Polymarket based on Airstack’s API across all Web3 Social. (i.e. I bet Vitalik will make more posts on Farcaster than Lens Protocol in Q1)
  `,
  tags: ['Airstack Starter Kit'],
  integrations: [Airstack],
})

//
//
//

const startKitHeadline = dedent`
The Phat Contract Starter Kit is your one-stop solution to connect any API to your smart contract. It offers wide-ranging support for all EVM-compatible blockchains, including but not limited to Ethereum, Polygon, Arbitrum, Avalanche, Binance Smart Chain, Optimism, and zkSync.
`

const startKitDesc = dedent`
![/blueprints/starterkit/headimg.jpg](/blueprints/starterkit/headimg.jpg)

This starter kit empowers you to initiate the data request from the smart contract side. The request is then seamlessly sent to your script for processing. You have the liberty to call any APIs to fulfill the request and define the response data structure that will be replied to your smart contract.

## Features and Benefits

- Wide support for all mainstream blockchains
- **Verifiable and decentralized**: every Oracle is running on decentralized infrastructure that require no operations and can be easily verified
- **Support private data**: your Oracle state is protected by cryptography and hardware
- **No extra cost**: the only cost is the gas fee of response data which is sent as a transaction
- **High frequency**: the request is synced to Oracle within one minute, and the latency of response is only limited by blockchain’s block interval

## Use cases & Examples

You could use this to:

- **[Create a Telegram / Discord trading bot with Phat Contract](https://bit.ly/3LGpXCq)**
- **[Cross-chain DEX Aggregator](https://github.com/Phala-Network/phat-contract-starter-kit/blob/main/assets/case-cross-chain-dex-aggregator.jpg)**
- **[Bring Web2 services & data on-chain](https://github.com/Phala-Network/phat-contract-starter-kit/blob/main/assets/case-contract-controlled-web2-service.jpg)**
- **Web3 Social Integrations**
    - **[LensAPI Oracle](https://bit.ly/3runoN1)**
    - **[Lens Phite](https://bit.ly/3RG9OR7)**
    - **[Mint NFT based on LensAPI Oracle data](https://github.com/Phala-Network/phat-contract-starter-kit/blob/main/assets/LensAPI-Oracle.png)**
    - **[Lens Treasure Hunt](https://bit.ly/3PWP5Y9)**
- **[Get Randomness on-chain from drand.love and post with Telegram bot](https://bit.ly/3PXDyI4)**
- **Trustless HTTPS requests w/ [TLSNotary](https://bit.ly/3rwD2Hw) integration**
- **[Connect to Phat Contract Rust SDK](https://github.com/Phala-Network/phat-contract-starter-kit/blob/main/assets/Oracle-Rust-SDK.png)** to access all features
- **[Dynamic NFTs](https://bit.ly/3ZBJHNb)**

## Resources

- **[What is an Oracle](https://bit.ly/3PE6ymF)**
- **Frontend Templates**
    - **[Scaffold ETH2](https://bit.ly/45ekZnt)**
        - **[Phat Scaffold ETH2](https://bit.ly/46zZ23j)**
    - **[Create ETH App](https://bit.ly/468I105)**
    - **[Nexth Starter Kit](https://bit.ly/3EVS0di)**
- **[Technical Design Doc](https://bit.ly/3ZAzdxE)**
`

//
// LensAPI
//

const lensApiHeadline = dedent`
The LensAPI Oracle connects your smart contract to Lens, one of the most popular Web3 social graphs. It supports customized GraphQL queries to Lens API and allows you to easily process the response data to make them digestible to your smart contract.
`

const lensApiDesc = dedent`
![/blueprints/lensapi/headimg.jpg](/blueprints/lensapi/headimg.jpg)

This Oracle template empowers you to initiate the data request from the smart contract side (e.g., to request for the information of given \`profileId\`, \`publicationId\` or others). The request is then seamlessly sent to your script for processing. You have the liberty to construct the queries to Lens API and define the response data structure that will be replied to your smart contract.

## Features and Benefits

- Wide support for consumer smart contracts on all mainstream blockchains
- **Verifiable and decentralized**: your Oracle is running on decentralized infrastructure that require no operations and can be easily verified
- **Support private data**: your Oracle state is protected by cryptography and hardware
- **No extra cost**: the only cost is the gas fee of response data which is sent as a transaction
- **High frequency**: the request is synced to Oracle within one minute, and the latency of response is only limited by blockchain’s block interval

## Use cases & Examples

You could use this to:

- **[LensAPI Oracle](https://bit.ly/3runoN1)**
- **[Lens Phite](https://bit.ly/3RG9OR7)**
- **[Mint NFT based on LensAPI Oracle data](https://github.com/Phala-Network/phat-contract-starter-kit/blob/main/assets/LensAPI-Oracle.png)**
- **[Lens Treasure Hunt](https://bit.ly/3PWP5Y9)**

## Resources

- **[What is an Oracle](https://bit.ly/3PE6ymF)**
- **[Technical Design Doc](https://bit.ly/3ZAzdxE)**
`

//
// VRF Oracle
//

const vrfOracleHeadline = dedent`
The VRF Oracle provides TEE-guarded Verifiable Random Function to smart contracts on any EVM-compatible chains, including but not limited to Ethereum, Polygon, Arbitrum, Avalanche, Binance Smart Chain, Optimism, and zkSync.
`

const vrfOracleDesc = dedent`
![/blueprints/starterkit/headimg.jpg](/blueprints/starterkit/headimg.jpg)

This template relies on offchain Phat Contract to ensure the secrecy and verifiability of the generated random number. By sending arbitrary data as random seed, the VRF Oracle will return a \`uint256\` random number.

- **Random.** No one can predict the random number. The random number is generated using cryptographically secure hash algorithm on the secret key in TEE so nobody can get that in advance
- **Verifiability.** Anyone can verify that the random number generated by a VRF is valid. Given the same random seed (nonce), one deployed VRF will generated exactly the same random number, making it extremely easy for your users to verify your randomness; each VRF instance generates different random numbers so there is no front-running

## Features and Benefits

- Wide support for all mainstream blockchains
- **No extra cost**: the only cost is the gas fee of response data which is sent as a transaction
- **High frequency**: the request is synced to Oracle within one minute, and the latency of response is only limited by blockchain’s block interval
- **Verifiable and decentralized**: every Oracle is running on decentralized infrastructure that require no operations and can be easily verified
- **Support private data**: your Oracle state is protected by cryptography and hardware

## Use cases & Examples

You could use this for:

- **Internet security:** VRF is used to help secure domain name system (DNS) messages
- **Zero-knowledge technology:** VRF is used in the protocol design for zero-knowledge proofs and zero-knowledge databases
- **Non-interactive lottery systems:** VRF enables provably fair and efficient outcomes for lotteries
- **Verifiable transaction escrow schemes:** VRF can help support automated escrow services that preserve user anonymity
- **Blockchains and smart contracts:** VRF has become an important part of decentralized protocols and applications

## Resources

- [What is a VRF](https://bit.ly/3GdS6he)
`

//
// The Graph
//

const theGraphHeadline = dedent`
The Graph template enables you to connect to subgraph endpoints for data and utilize the data to calculate a trust score and send to a Web3 dApp on an EVM chain.
`

const theGraphDesc = dedent`
![/blueprints/thegraph-starterkit/headimg.jpg](/blueprints/thegraph-starterkit/headimg.jpg)

The user journey can be visualized in the diagram above. Alice requests a "trust score" about Eve to the consumer contract on the EVM chain and the action request is added to the request queue. The Phat Contract \`poll()\` the queue and \`pop()\` the new action request off the queue to compute the trust score for Eve. Once the data is retrieved from The Graph, the score is computed based on the scoring criteria and the result is sent back to the consumer contract on the EVM chain.


## What is Being Deployed?

This deployment will only deploy the left side of the diagram above that is in the green box labeled Phala Network. The “Phat Contract 2.0” program will be deployed to Phala Network and will be configured to connect to the Consumer Contract deployed on the EVM chain.

> **Note**: The Consumer Contract will require the developer to deploy this manually until support for EVM Contract deployment from the Bricks UI is supported. See “Requirements Before Deployment” before deploying The Graph Phat Contract.


## Requirements Before Deployment

There are a couple steps to complete before deploying The Graph Template.

1. Create a [Phat Contract 2.0 Profile](https://docs.phala.network/developers/bricks-and-blueprints/featured-blueprints/connect-phat-contract-to-evm-consumer-contract#user-content-create-a-phala-profile)
    - Generate and fund an EVM account for the target chain you plan to deploy your Consumer Contract to
2. Deploy the Consumer Contract (The right side of the diagram above) on an EVM chain that will connect to the deployed Phat Contract
3. _(Optional) Create API Key from The Graph. See how to get an API Key [here](https://thegraph.com/docs/en/querying/managing-api-keys/). By default a rate-limited key is provided with no guarantee of service if limit is exhausted._


## Deploying The Consumer Contract

Clone The Graph Phat Contract repo.

\`\`\` shell
git clone git@github.com:Phala-Network/the-graph-phat-contract.git
\`\`\`

Install dependencies after \`cd\` into the directory.

\`\`\` shell
npm install
\`\`\`

Configure your \`.env\` file with necessary information then deploy your Consumer Contract to the destination chain (this example deploys to Polygon Mumbai Testnet). Make sure to save the Consumer Contract address to set later in the Phat Contract 2.0 UI dashboard for The Graph template.

\`\`\` shell
npm run test-deploy
# You also need to set up the consumer contract address in your .env file:
#
# MUMBAI_CONSUMER_CONTRACT_ADDRESS=0x10FA409109E073C15b77A8352cB6A89C12CD1605
# ✨  Done in 8.20s.
\`\`\`


## Setting Secrets Before Deployment

If you chose to get an API key from The Graph then you will add this in your secrets box when configuring and deploying The Graph Phat Contract.

Example:

\`\`\` json
{
	"apiUrl": "https://gateway.thegraph.com/api/", 
	"apiKey": "cd22a01ddcbe5b7f9828c52af03ee79"
}
\`\`\`


## After Deploying The Graph Template

After you deploy The Graph Phat Contract, there will be a final step to set the \`ATTESTOR_ROLE\` in the Consumer Contract. This can be done by setting the \`MUMBAI_PHALA_ORACLE_ATTESTOR\` in your \`.env\` file to the attestor address in the deployed Phat Contract dashboard for The Graph template. Next you will execute the command.

\`\`\` shell
npm run test-set-attestor
\`\`\`


## Run a Test Request

See your deployed Phat Contract for The Graph work in action with a test \`request()\`.

\`\`\` shell
npm run test-push-request
\`\`\`


## Features and Benefits

With the ability to bring The Graph data on-chain with customized logic performed on the data, this template enables developers to securely connect your indexed data to your web3 dApps. There are many features and benefits that can be built. For example:

- On-chain Trust Score
- Spam Filters
- Copy Trading
- Dynamic NFTs w/ On-chain Indexed Data
- Conditional Transactions, etc.

## Resources

- [The Graph Phat Contract Docs](https://bit.ly/the-graph-phat-contract)
- [The Graph Phat Contract Code Template](https://github.com/Phala-Network/the-graph-phat-contract)
- [The Graph Docs](https://thegraph.com/docs/en/about/)
`

//
// AirStack
//

const airstackHeadline = dedent`
The Airstack template allows for users to request data from Airstack’s API to compute a trust/risk score and send to an on-chain consumer contract.
`

const airstackDesc = dedent`
![/blueprints/airstack-starterkit/headimg.jpg](/blueprints/airstack-starterkit/headimg.jpg)

The user journey can be visualized in the diagram above. Alice requests a “trust score” about Eve to the consumer contract on the EVM chain and the action request is added to the request queue. The Phat Contract \`poll()\` the queue and \`pop()\` the new action request off the queue to compute the trust score for Eve. Once the data is retrieved from Airstack’s API, the score is computed based on the scoring criteria and the result is sent back to the consumer contract on the EVM chain.


## What is Being Deployed?

This deployment will only deploy the left side of the diagram above that is in the green box labeled Phala Network. The “Phat Contract 2.0” program will be deployed to Phala Network and will be configured to connect to the Consumer Contract deployed on the EVM chain.

> **Note**: that the Consumer Contract will require the developer to deploy this manually until support for EVM Contract deployment from the Bricks UI is supported. See “Requirements Before Deployment” before deploying your Airstack Phat Contract.


## Requirements Before Deployment

There are a couple steps to complete before deploying the Airstack Template.

1. Create a [Phat Contract 2.0 Profile](https://docs.phala.network/developers/bricks-and-blueprints/featured-blueprints/connect-phat-contract-to-evm-consumer-contract#user-content-create-a-phala-profile)
    - Generate and fund an EVM account for the target chain you plan to deploy your Consumer Contract to.
2. Deploy the Consumer Contract (The right side of the diagram above) on an EVM chain that will connect to the deployed Phat Contract.
3. _(Optional)_ Create API Key from Airstack. See how to get an API Key [here](https://docs.airstack.xyz/airstack-docs-and-faqs/get-started/get-api-key). By default a rate-limited key is provided with no guarantee of service if limit is exhausted.


## Deploying The Consumer Contract

Clone the Airstack Phat Contract repo.

\`\`\` shell
git clone git@github.com:Phala-Network/airstack-phat-contract.git
\`\`\`

Install dependencies after \`cd\` into the directory.

\`\`\` shell
npm install
\`\`\`

Configure your \`.env\` file with necessary information then deploy your Consumer Contract to the destination chain (this example deploys to Polygon Mumbai Testnet). Make sure to save the Consumer Contract address to set later in the deployed Airstack template.

\`\`\` shell
npm run test-deploy
# Deploying...
#
# 🎉 Your Consumer Contract has been deployed, check it out here: https://mumbai.polygonscan.com/address/0x10FA409109E073C15b77A8352cB6A89C12CD1605
#
# You also need to set up the consumer contract address in your .env file:
#
# MUMBAI_CONSUMER_CONTRACT_ADDRESS=0x10FA409109E073C15b77A8352cB6A89C12CD1605
#
# Configuring...
# Done
# ✨  Done in 8.20s.
\`\`\`


## Setting Secrets Before Deployment

If you chose to get an API key from Airstack then you will add this in your secrets box when configuring and deploying your Airstack Phat Contract.

Example:

\`\`\` json
{
	"apiUrl": "https://api.airstack.xyz/gql", 
	"apiKey": "3a41775a358a4cb99ca9a29c1f6fc486"
}
\`\`\`


## After Deploying The Airstack Template

After you deploy the Airstack Phat Contract, there will be a final step to set the \`ATTESTOR_ROLE\` in the Consumer Contract. This can be done by setting the \`MUMBAI_PHALA_ORACLE_ATTESTOR\` in your \`.env\` file to the attestor address in the deployed Airstack Phat Contract dashboard. Next you will execute the command.

\`\`\` shell
npm run test-set-attestor
\`\`\`


## Run a Test Request

See your deployed Airstack Phat Contract work in action with a test \`request()\`.

\`\`\` shell
npm run test-push-request
\`\`\`


## Features and Benefits

With the ability to bring Airstack’s data on-chain with customized logic performed on the data, developers can now securely connect their indexed data to their web3 dApps. There are many features and benefits that can be built. For example:

- Web3 Social
    - Spam Filter
    - Recommendation Engine
    - Trust Score
    - Web3 Social Actions based on data from Airstack’s API
- Token Gating
- Web3 Marketing Technology, etc.

## Resources

- [Airstack Phat Contract Docs](https://bit.ly/airstack-phat-contract-docs)
- [Airstack Phat Contract Code Template](https://github.com/Phala-Network/airstack-phat-contract)
- [Airstack Docs](https://docs.airstack.xyz/airstack-docs-and-faqs/)
`

//
// END
//

export const blueprints: Readonly<Blueprint[]> = [
  {
    name: 'The Phat Contract Starter Kit',
    description:
      'Send data from any API to your smart contract with Javascript.',
    coverImage: 'https://dashboard.phala.network/blueprints/starterkit/cover.jpg',
    slug: 'starterkit',
    repoUrl: 'https://github.com/Phala-Network/phat-contract-starter-kit',
    repoName: 'phat-contract-starter-kit',
    templateName: 'phat-contract-starter-kit',
    version: '1.0.0',
    tags: ['Oracle'],
    headline: startKitHeadline,
    fullDescription: startKitDesc,
    constructorArguments: {
      coreSettings: 'https://api-v2-mumbai-live.lens.dev',
    },
    published: true,
  },
  {
    name: 'LensAPI Oracle',
    description:
      'Send data from Lens API to your smart contract to empower your Web3 Social dApp.',
    coverImage: 'https://dashboard.phala.network/blueprints/lensapi/cover.jpg',
    slug: 'lensapi',
    repoUrl:
      'https://github.com/Phala-Network/lensapi-oracle-consumer-contract',
    repoName: 'lensapi-oracle-consumer-contract',
    templateName: 'lensapi-oracle-consumer-contract',
    version: '1.0.0',
    tags: ['Oracle', 'LensAPI'],
    headline: lensApiHeadline,
    fullDescription: lensApiDesc,
    constructorArguments: {
      coreSettings: 'https://api.lens.dev/',
    },
    published: true,
  },
  {
    name: 'Dynamic NFT Starter Kit',
    description: '',
    coverImage: 'https://dashboard.phala.network/blueprints/dynamic-nft/cover.jpg',
    slug: 'dynamic-nft',
    repoUrl: 'https://github.com/HashWarlock/dynamic-nft-starter-kit',
    repoName: 'dynamic-nft-starter-kit',
    templateName: '',
    version: '0.0.1',
    tags: ['Oracle', 'ERC-721', 'NFT'],
    headline: '',
    fullDescription: '',
    constructorArguments: {
      coreSettings: '',
    },
    published: false,
  },
  {
    name: 'VRF Oracle',
    description:
      'TEE-guarded Verifiable Random Function template to bring randomness to your DeFi, GameFi and other dApps on any EVM-compatible chain.',
    coverImage: 'https://dashboard.phala.network/blueprints/vrf-oracle/cover.jpg',
    slug: 'vrf-oracle',
    repoUrl: 'https://github.com/Phala-Network/template-vrf',
    repoName: 'template-vrf',
    templateName: 'vrf-oracle',
    version: '1.0.0',
    tags: ['Oracle', 'VRF'],
    headline: vrfOracleHeadline,
    fullDescription: vrfOracleDesc,
    constructorArguments: {
      coreSettings: '',
    },
    published: true,
  },
  {
    name: 'Random Pokemon',
    description:
      'An example of tradable and decentralized NFT mystery boxes - has integrated Phat Contract VRF.',
    coverImage: 'https://dashboard.phala.network/blueprints/vrf-pokemon-mystery-box/cover.jpg',
    slug: 'vrf-pokemon-mystery-box',
    repoUrl: 'https://github.com/Leechael/vrf-phat-contract',
    repoName: 'vrf-phat-contract',
    templateName: '',
    version: '0.0.1',
    tags: ['Oracle', 'ERC-721', 'NFT', 'VRF'],
    headline: '',
    fullDescription: '',
    constructorArguments: {
      coreSettings: 'https://pokeapi.co/',
    },
    published: false,
  },
  {
    name: 'AirStack Starter Kit',
    description:
      'Request an account’s data from Airstack’s API to compute trust score and send to your Web3 dApp on-chain.',
    coverImage: 'https://dashboard.phala.network/blueprints/airstack-starterkit/cover.jpg',
    slug: 'airstack-starterkit',
    repoUrl: 'https://github.com/Phala-Network/airstack-phat-contract',
    repoName: 'airstack-phat-contract',
    templateName: 'airstack-phat-contract',
    version: '1.0.0',
    tags: ['Oracle', 'AirStack'],
    headline: airstackHeadline,
    fullDescription: airstackDesc,
    constructorArguments: {
      coreSettings: '{apiUrl: "https://api.airstack.xyz/gql", apiKey: ""}',
    },
    published: true,
  },
  {
    name: 'The Graph Starter Kit',
    description:
      'Connect your subgraphs from The Graph to your on-chain dApps via Phat Contract.',
    coverImage: 'https://dashboard.phala.network/blueprints/thegraph-starterkit/cover.jpg',
    slug: 'thegraph-starterkit',
    repoUrl: 'https://github.com/Phala-Network/the-graph-phat-contract',
    repoName: 'thegraph-phat-contract',
    templateName: 'thegraph-phat-contract',
    version: '1.0.0',
    tags: ['Oracle', 'TheGraph'],
    headline: theGraphHeadline,
    fullDescription: theGraphDesc,
    constructorArguments: {
      coreSettings:
        '{"apiUrl": "https://gateway.thegraph.com/api/", "apiKey": ""}',
    },
    published: true,
  },
]
