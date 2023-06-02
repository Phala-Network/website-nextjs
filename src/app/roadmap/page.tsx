import { type Metadata } from 'next'
import { cn } from "@/lib/utils"
import DotBackground from '@/components/DotBackground'

import './style.css'

export const metadata: Metadata = {
  title: 'Roadmap | Phala Network',
}

export default function Page() {
  return (
    <div className="relative py-24">
      <DotBackground dotColor="#E2E8F0" bgColor="#F7FAFC" />
      <main className={cn("safe-viewport", "grid grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24")}>
        <article className={cn("cols-span-1 xl:col-start-5 xl:col-span-12 3xl:col-start-6 3xl:col-span-14", "pageRoadmap")}>
          <h1 className="pageTitle">Phala Network Roadmap 2023</h1>

          <section className="pageSection">
            <p className="sectionSubTitle">
              In 2022, Phala Network took major strides in 4 key areas,
              decentralisation, innovation, utility and community:
            </p>
            <ul className="summaryStats">
              <li>
                18k+ servers, providing 142k+ vCPUs, running in over 50 cities.
              </li>
              <li>1,434 commits and 408 PR's across all our repos.</li>
              <li>
                Phat Contract, our flagship revolutionary product, is feature
                complete and in closed beta.
              </li>
              <li>
                141 events held in 14 countries and 18 cities worldwide, reaching
                over 230,000 people.
              </li>
            </ul>
            <p className="sectionSubTitle">
              In 2023, Phala is going to build on all of this, and begin to change
              trustless computation.
            </p>
          </section>

          <hr className="hr" />

          <section className="pageSection">
            <header>
              <h2 className="sectionTitle">Phat Contract</h2>
              <p className="sectionSubTitle">
                Taking computation off-chain, a serverless SDK you can write almost
                anything with.
              </p>
            </header>

            <div className="sectionContentGroup">
              <h3 className="ulTitle">
                Establish Phat Contract as a core part of the Web 3 Builders stack.
              </h3>
              <div className="liItem">
                <h4 className="liTitle">
                  Phat Contract 1.0 on mainnet
                  <code className="Q1">Expected Q1</code>
                </h4>
                <p className="liContent">
                  Revolutionary "Stake to Compute" model, say goodbye to gas fees.
                </p>
              </div>
              <div className="liItem">
                <h4 className="liTitle">
                  "Phat Bricks"<code className="Q1">Expected Q1</code>
                </h4>
                <p className="liContent">
                  A no-code experience to configure reusable Phat Contract for
                  specific use cases like Oracles.
                </p>
              </div>
              <div className="liItem">
                <h4 className="liTitle">
                  Even more "Phat Bricks"
                  <code className="Q2">Expected Q2</code>
                </h4>
                <p className="liContent">
                  Ever wider multi-chain and use case support.
                </p>
              </div>
              <div className="liItem">
                <h4 className="liTitle">
                  Phat Contract 2.0{' '}
                  <code className="Q3">Expected Q3/Q4</code>
                </h4>
                <p className="liContent">
                  Asynchronous Phat Bricks. Opening up a whole new world of
                  possibilities.
                </p>
              </div>
            </div>

            <div className="sectionContentGroup">
              <h3 className="ulTitle">
                Build the best developer experience in Web3.
              </h3>
              <div className="liItem">
                <h4 className="liTitle">
                  One-click Phat Contract development environment.
                  <code className="Q2">Expected Q2</code>
                </h4>
              </div>
              <div className="liItem">
                <h4 className="liTitle">
                  Phala Builders Program "Free Staking"
                  <code className="Q2">Expected Q2</code>
                </h4>
                <p className="liContent">Free compute for every new user.</p>
              </div>
              <div className="liItem">
                <h4 className="liTitle">
                  Phat Contract Academy.
                  <code className="Q3">Expected Q3</code>
                </h4>
              </div>
            </div>

            <div className="sectionContentGroup">
              <h3 className="ulTitle">
                Take our place as industry pioneers.
              </h3>
              <div className="liItem">
                <h4 className="liTitle">
                  Showcase the best of Phat Bricks and community innovation online
                  and offline. <code className="yearRound">Year Round</code>
                </h4>
              </div>
            </div>
          </section>

          <hr className="hr" />

          <section className="pageSection">
            <header>
              <h2 className="sectionTitle">Compute</h2>
              <p className="sectionSubTitle">
                Securely scaling your off-chain compute needs, a decentralized cloud
                of secure workers.
              </p>
            </header>

            <div className="sectionContentGroup">
              <h3 className="ulTitle">Next-generation Phala Compute.</h3>
              <div className="liItem">
                <h4 className="liTitle">
                  2nd Gen - Lay the foundation for Phat Contract 1.0 and the first
                  "Public Good" cluster.
                  <code className="Q1">Expected Q1</code>
                </h4>
              </div>
              <div className="liItem">
                <h4 className="liTitle">
                  3rd Gen - Implement full Layer 1 tokenomics to allow anyone to run
                  a Phat Contract capable cluster.
                  <code className="Q3">Expected Q3/Q4</code>
                </h4>
              </div>
              <div className="liItem">
                <h4 className="liTitle">
                  4th Gen - "SideVM" release enabling long-running Phat Contract
                  processes.{' '}
                  <code className="expected2024">Expected 2024</code>
                </h4>
              </div>
            </div>

            <div className="sectionContentGroup">
              <h3 className="ulTitle">
                Expand supported secure worker technologies.
              </h3>
              <div className="liItem">
                <h4 className="liTitle">
                  SGX 2.0.<code className="Q3">Expected Q3/Q4</code>
                </h4>
              </div>
              <div className="liItem">
                <h4 className="liTitle">
                  Add a second hardware implementation.
                  <code className="Q3">Expected Q3/Q4</code>
                </h4>
              </div>
            </div>
          </section>

          <hr className="hr" />

          <section className="pageSection">
            <header>
              <h2 className="sectionTitle">PhalaWorld</h2>
              <p className="sectionSubTitle">
                A digital representation of your progression on the Phala Network.
              </p>
            </header>

            <div className="sectionContentGroup">
              <h3 className="ulTitle">
                Build out our NFT Marketplace experience.
              </h3>
              <div className="liItem">
                <h4 className="liTitle">
                  1.0<code className="Q1">Expected Q1</code>
                </h4>
                <p className="liContent">
                  Supporting the trade &amp; transfer of Shell NFT and StakePoolV2
                  NFT.
                </p>
              </div>
              <div className="liItem">
                <h4 className="liTitle">
                  2.0 <code className="Q3">Expected Q3/Q4</code>
                </h4>
                <p className="liContent">Shell Equipment NFT Trading.</p>
              </div>
            </div>

            <div className="sectionContentGroup">
              <h3 className="ulTitle">
                Continue to innovate and open the experience to even more players.
              </h3>
              <div className="liItem">
                <h4 className="liTitle">
                  "Visualise all your Phala NFT's"
                  <code className="Q2">Expected Q2</code>
                </h4>
                <p className="liContent">A unique experimental feature.</p>
              </div>
              <div className="liItem">
                <h4 className="liTitle">
                  Release PhalaWorld's first game feature.
                  <code className="Q3">Expected Q3/Q4</code>
                </h4>
                <p className="liContent">Challenge other players!</p>
              </div>
            </div>

            <div className="sectionContentGroup">
              <h3 className="ulTitle">
                Work with RMRK to bring CypherMOD to market.
              </h3>
              <div className="liItem">
                <h4 className="liTitle">
                  CyperMod 1.0 <code className="Q3">Expected Q3/Q4</code>
                </h4>
                <p className="liContent">Hello EVM "Dressup".</p>
              </div>
            </div>
          </section>

          <hr className="hr" />

          <section className="pageSection">
            <header>
              <h2 className="sectionTitle">Super Secret Product</h2>
              <p className="sectionSubTitle">
                A DeFi engine leveraging Phat Contract cross-chain capability.
              </p>
            </header>

            <div className="sectionContentGroup">
              <h3 className="ulTitle">
                Show the true power and functionality of Phat Contract in a
                industry-defining product offering.
              </h3>
              <div className="liItem">
                <h4 className="liTitle">
                  1.0 <code className="Q3">Expected Q2/Q3</code>
                </h4>
              </div>
            </div>
          </section>

          <hr className="hr" />

          <section className="pageSection">
            <header>
              <h2 className="sectionTitle">Overall</h2>
              <p className="sectionSubTitle">
                Past our 4 core products, there are several key areas we want to
                continue pushing forward.
              </p>
            </header>

            <div className="sectionContentGroup">
              <h3 className="ulTitle">Elevate our Presence and Message.</h3>
              <div className="liItem">
                <h4 className="liTitle">
                  Release Phala Rebrand and all new phala.network.
                  <code className="Q2">Expected Q2</code>
                </h4>
              </div>
            </div>

            <div className="sectionContentGroup">
              <h3 className="ulTitle">
                Ever deeper investment in Research and Development.
              </h3>
              <div className="liItem">
                <h4 className="liTitle">
                  Refreshed technical whitepaper.
                  <code className="Q3">Expected Q3/Q4</code>
                </h4>
              </div>

              <div className="liItem">
                <h4 className="liTitle">
                  Tokenomics whitepaper vNext.
                  <code className="Q3">Expected Q3/Q4</code>
                </h4>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  )
}
