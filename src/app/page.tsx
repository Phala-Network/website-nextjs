import type { ReactNode } from 'react'

import { Metadata } from 'next'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import Details from '@/components/Details'

import { currentFeatureHighlightAtom } from './_atoms'
import { NoCodeWizardStepTrigger, NoCodeWizardStepDetails, NoCodeWizardStepPreview } from './_components/NoCodeWizard'
import { CodeExampleTab, CodeExampleCodeViewer, CodeExampleDescription } from './_components/CodeExampleTabs'
import { ShowCaseTab, ShowCaseTabPanel } from './_components/ShowCaseTabs'
import './home.css'


function SiteNavItem({ children, className, ...props }: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <a {...props} className={cn(className, 'btn-link')}>
      {children}
    </a>
  )
}

function SiteNav() {
  return (
    <div className={cn("site-nav safe-viewport", "flex flex-row items-center justify-between py-6")}>
      <Image
        src="/logo.svg"
        alt="Phala Logo"
        className="svg-black-100"
        width={156}
        height={44}
        priority
      />
      <nav className={cn("flex flex-row gap-[3.75rem]")}>
        <SiteNavItem href="#">Developers</SiteNavItem>
        <SiteNavItem href="#">Compute Providers</SiteNavItem>
        <SiteNavItem href="#">Products</SiteNavItem>
        <SiteNavItem href="#">PHA Token</SiteNavItem>
        <SiteNavItem href="#">Participate</SiteNavItem>
      </nav>
      <div className="w-full max-w-[9.375rem]">
        <a href="#" className={cn("btn bg-blackAlpha-800 text-sm text-primary py-3 px-5 w-full flex flex-row justify-between items-center")}>
          <span>APP</span>
          <Image
            src="/icons/right-arrow.svg"
            alt=""
            className="svg-primary untanglable"
            width={16}
            height={16}
          />
        </a>
      </div>
    </div>
  )
}

function DotBackground({ dotColor, bgColor }: { dotColor: string, bgColor: string }) {
  return (
    <div
      className="absolute inset-0 -z-10 h-full w-full cursor-none pointer-events-none"
      style={{
        backgroundColor: bgColor,
        backgroundImage: `radial-gradient(${dotColor} 2px, ${bgColor} 2px)`,
        backgroundSize: '56px 56px',
      }}
    />
  )
}

//
// Section Hero
//

function Stats({ children, name }: { children: ReactNode, name: string }) {
  return (
    <div>
      <h4 className={cn("text-lg font-semibold")}>{children}</h4>
      <div className={cn("text-sm text-blackAlpha-700")}>{name}</div>
    </div>
  )
}

function SectionHero() {
  return (
    <section id="section-hero" className={cn("relative max-h-screen w-full", "section-hero")}>
      <div className={cn("background", "absolute top-0 left-0 w-full min-h-full z-[-1] untanglable")}>
        <Image src="/home/bg-first-screen.jpg" alt="" fill className="aspect-[3840/1980] object-cover" />
      </div>
      <div className={cn("flex flex-col h-screen justify-between items-center")}>
        <div className={cn("w-full")}>
          <SiteNav />
        </div>

        <div className={cn("uppercase text-center flex flex-col gap-16 justify-center")}>
          <header>
            <h2 className={cn("text-4xl font-normal text-[#222] leading-10 mb-2.5")}>Computation as it's meant to be</h2>
            <h3 className={cn("text-2xl font-black")}>
              On-Chain verification.
              Off-Chain <span className={cn("text-[#8544F6]")}>Capability.</span>
            </h3>
          </header>
          <div className={cn("flex flex-row gap-5 mx-auto")}>
            <a className={cn("btn btn-xl text-base bg-[#CDFA50] text-black")} href="">Let's Build!</a>
            <a className={cn("btn btn-xl text-base bg-white text-black")} href=""> Join Community</a>
          </div>
        </div>

        <div className={cn("safe-viewport", "mb-6")}>
          <div className={cn("flex flex-row justify-between")}>
            <div className="flex flex-row gap-5 items-center">
              <Image
                src="/icons/gear.svg"
                alt=""
                className="svg-black mr-2.5 motion-safe:animate-spin untanglable"
                width={37}
                height={37}
              />
              <Stats name="Online Workers">23.3k</Stats>
              <Stats name="Compute">161k vCPU</Stats>
              <Stats name="Cross-Chain TX">123,242</Stats>
              <Stats name="TX">2,341,223</Stats>
            </div>

            <div className="flex flex-col gap-2 items-end">
              <div className="flex flex-row gap-5">
                <Image
                  src="/home/logo1.png"
                  alt=""
                  width={65}
                  height={65}
                />
                <Image
                  src="/home/logo2.png"
                  alt=""
                  width={65}
                  height={65}
                />
                <Image
                  src="/home/logo3.png"
                  alt=""
                  width={65}
                  height={65}
                />
                <Image
                  src="/home/logo4.png"
                  alt=""
                  width={65}
                  height={65}
                />
                <Image
                  src="/home/logo5.png"
                  alt=""
                  width={65}
                  height={65}
                />
              </div>
              <a href="#" className={cn("flex flex-row gap-2", "btn-view-all")}>
                <span className={cn("btn-link", "text-sm")}>View All Supported Networks</span>
                <Image
                  src="/icons/right-arrow.svg"
                  alt=""
                  className="svg-secondary icon untanglable"
                  width={13}
                  height={13}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// END: Section Hero

//
// Section Features
//

function FeatureHighlight({ idx, iconUrl, summary, children }: { idx: number, iconUrl: string, summary: string, children: ReactNode }) {
  return (
    <Details className={cn("feature-highlight-item")} idx={idx} theIdxAtom={currentFeatureHighlightAtom}>
      <summary>
        <Image
          src={iconUrl}
          alt=""
          width={32}
          height={32}
          className="icon untanglable"
        />
        {summary}
      </summary>
      <div className="body">
        {children}
      </div>
    </Details>
  )
}

function SectionFeatures() {
  return (
    <section id="section-features" className={cn("relative h-screen")}>
      <DotBackground dotColor="#E2E8F0" bgColor="#F7FAFC" />
      <div className={cn("safe-viewport", "grid grid-cols-1 w-full h-full")}>
        <header className={cn("col-start-1 row-start-1 flex flex-col gap-5 pt-[14vh]")}>
          <h2 className={cn("font-extrabold text-5xl uppercase")}>Smart Contracts.</h2>
          <h3 className={cn("text-6xl tracking-wide uppercase")}>Now Smarter.</h3>
          <p className={cn("text-base text-blackAlpha-700")}>Phat Contract is the offchain program running on Phala Network.</p>
        </header>
        <div className={cn("col-start-1 row-start-1 flex flex-row items-end h-full py-14")}>
          <div className={cn("flex flex-row gap-10 mb-8")}>
            <div className={cn("flex flex-col")}>
              <div className={cn("w-1.5 rounded-lg bg-blackAlpha-100 flex-1")} />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <FeatureHighlight idx={0} iconUrl="/icons/features-compare.svg" summary="Connect your smart contract anywhere">
                <p>
                  No matter if your smart contracts are on Ethereum or Substrate, our universal compatibility ensures connection flexibility like never before, enabling your smart contracts to access a wide range of features regardless of their hosting blockchain. Phala’s Phat Contracts make it possible to extend the capabilities of your smart contracts without the need for a bridge or an extra layer.
                </p>
              </FeatureHighlight>
              <FeatureHighlight idx={1} iconUrl="/icons/features-all-out.svg" summary="Seamless access to the Internet">
                <p>
                  Phala Network doesn’t just offer unparalleled on-chain connectivity; it also bridges the gap between the off-chain world and smart contracts. The ability to send HTTP/HTTPS requests directly from your smart contracts is now at your fingertips. Take your dapp to the next level by integrating cutting-edge Web3 protocols and various Web2 API, creating a perfect fusion of old and new, on-chain and off-chain.
                </p>
              </FeatureHighlight>
              <FeatureHighlight idx={2} iconUrl="/icons/features-auto-graph.svg" summary="High performance like on the cloud">
                <p>
                  By offloading the computation off-chain, you don’t have to worry about costly transaction fees or network latency that hinders your progress. Experience real-time, off-chain computation at its finest, allowing you to focus on enhancing your dapp’s functionality and user experience. Run arbitrarily complex logic without any constraints, all at an affordable cost.
                </p>
              </FeatureHighlight>
              <FeatureHighlight idx={3} iconUrl="/icons/features-rocket.svg" summary="Computation is always verifiable">
                <p>
                  Phala Network is designed with multiple layers of security guarantees to provide fully verifiable computation. Our network is backed by numerous decentralized workers and a significant amount of staked tokens. Phat Contracts are protected by both hardware Secure Enclaves and cryptographic evidence published and verified on the Phala blockchain, seamlessly extending blockchain-level security to the off-chain realm.
                </p>
              </FeatureHighlight>
            </div>
          </div>
          <div className={cn("block rounded-5xl bg-gray-200 aspect-[834/782] relative overflow-hidden w-[56%]")}>
            <Image
              src="/home/features.jpg"
              fill
              sizes="100%"
              alt=""
              className="object-fill untanglable"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// END: Section Features

//
// Section Pitch Intro
//

function SectionPitchIntro() {
  return (
    <section id="section-pitch-intro" className="relative h-screen">
      <DotBackground dotColor="#E2E8F0" bgColor="#F7FAFC" />
      <div className={cn("absolute top-[33%] right-0 h-[57%] w-[67.45vw] bg-primary rounded-l-[48px] -z-[9]")} />
      <div className="safe-viewport flex flex-row items-center h-full gap-16">
        <header className={cn("flex flex-col gap-6 z-10 max-w-[50vw]")}>
          <div className={cn("text-[2.625rem]")}>FROM</div>
          <div>
            <h3 className={cn("text-[5.625rem] font-extrabold text-white bg-black tracking-tight rounded-3xl inline-flex px-14")}>NO CODE</h3>
          </div>
          <div className={cn("flex flex-row gap-6 items-center -ml-24")}>
            <Image
              src="/icons/long-right-arrow.svg"
              className="svg-secondary untanglable"
              alt=""
              width={234}
              height={101}
            />
            <h3 className="text-[5.625rem] font-extrabold text-white bg-black whitespace-nowrap tracking-tight rounded-3xl inline-flex px-14">FULL CODE</h3>
          </div>
          <h4 className="text-[2.625rem] uppercase ml-[160px]">We got you <span className="font-black">covered</span>.</h4>
        </header>
        <div className="relative w-[300px] h-[420px]">
          <Image
            src="/home/experience-front.jpg"
            alt=""
            width={292}
            height={419}
            className="rounded-3xl overflow-hidden absolute left-[260px] top-[-100px] z-20 untanglable"
          />
          <Image
            src="/home/experience-back.jpg"
            alt=""
            width={292}
            height={419}
            className="rounded-3xl overflow-hidden absolute left-0 top-[100px] z-10 untanglable"
          />
        </div>
      </div>
    </section>
  )
}

// END: Section Pitch Intro

//
// Section Pitch Accelerate
//

function BlueprintCard({ title, children, illustration, live }: { title: string, children: ReactNode, illustration?: string, live?: boolean }) {
  return (
    <div className="w-full bg-[#333] rounded-xl overflow-hidden bg-[rgba(0,0 0,0.8)] p-8 relative">
      <div className="flex flex-col justify-between h-full z-10 relative max-w-[60%]">
        <div className="flex flex-col gap-6">
          <h4 className={cn("text-2xl text-white font-black uppercase")}>{title}</h4>
          <div className={cn("text-sm text-whiteAlpha-700 leading-normal")}>{children}</div>
        </div>
        {live ? (
          <div className={cn("flex flex-row items-center gap-3.5 mt-6")}>
            <Image
              src="/icons/gear.svg"
              alt=""
              width={32}
              height={32}
              className={cn("svg-primary untanglable")}
            />
            <span className={cn("text-primary text-base font-extrabold")}>LIVE !</span>
          </div>
        ) : null}
      </div>
      {illustration ? (
        <Image
          src={illustration}
          alt=""
          width={250}
          height={250}
          className={cn("absolute top-[25%] right-[-1%] z-0 opacity-50 untanglable")}
        />
      ) : null}
    </div>
  )
}

function SectionPitchAccelerate() {
  return (
    <section id="section-pitch-accelerate" className="relative">
      <DotBackground dotColor="#6b3eca" bgColor="#7f4af0" />
      <div className={cn(
        "safe-viewport", "grid gap-4 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24"
      )}>
        <div className={cn("row-start-1 xl:col-start-2 xl:col-span-7 3xl:col-start-4", "pt-20 xl:pt-60")}>
          <h2 className={cn("text-[3.5rem] inline-block font-black uppercase rounded-3xl px-14 bg-white")}>
            Accelerate
          </h2>
        </div>
        {/* END: row-1 */}

        <p className={cn(
          "row-start-2 xl:col-start-3 xl:col-span-16 3xl:col-start-5",
          "mt-8",
          "font-medium text-[2rem] text-white"
        )}>Scale your idea with prebuilt blueprints in minutes</p>
        {/* END: row-2 */}

        <div className={cn(
          "row-start-3 xl:col-start-3 xl:col-span-17 3xl:col-start-5 3xl:col-span-17",
          "mt-28",
        )}>
          <div className="w-full flex flex-row h-[620px]">
            <div className={cn("rounded-3xl overflow-hidden flex flex-row bg-white")}>
              <div className={cn("aspect-[879/620] relative w-[70%]")}>
                <NoCodeWizardStepPreview
                  idx={0}
                  src="https://picsum.photos/id/1/879/620"
                />
                <NoCodeWizardStepPreview
                  idx={1}
                  src="https://picsum.photos/id/10/879/620"
                />
                <NoCodeWizardStepPreview
                  idx={2}
                  src="https://picsum.photos/id/16/879/620"
                />
                <NoCodeWizardStepPreview
                  idx={3}
                  src="https://picsum.photos/id/20/879/620"
                />
              </div>
              <div className="flex flex-col justify-between px-8 py-10 w-[30%]">
                <NoCodeWizardStepDetails idx={0} summary="Pick">
                  <p>Discover the perfect solution for your needs with our marketplace of blueprints. These community-contributed, ready-to-deploy blueprints offer a quick way to integrate offchain capabilities into your smart contracts.</p>
                </NoCodeWizardStepDetails>
                <NoCodeWizardStepDetails idx={1} summary="Customize">
                  <p>Blueprints are designed to tackle common challenges developers frequently encounter. With just a few clicks, effortlessly adjust the configuration to tailor the blueprint to your specific requirements.</p>
                </NoCodeWizardStepDetails>
                <NoCodeWizardStepDetails idx={2} summary="Deploy">
                  <p>Easily deploy the customized blueprint as your own Phat Contract on the Phala Network. Experience the power of offchain capabilities integrated into your DApp within seconds.</p>
                </NoCodeWizardStepDetails>
                <NoCodeWizardStepDetails idx={3} summary="Integrate">
                  <p>Seamlessly interact with your newly deployed Phat Contract from your smart contracts or frontend using familiar programming languages. Enjoy a streamlined process that enhances your DApp’s functionality with minimal effort.</p>
                </NoCodeWizardStepDetails>
                <ul className="flex flex-col gap-2.5">
                  <li>
                    <NoCodeWizardStepTrigger idx={0}>Pick</NoCodeWizardStepTrigger>
                  </li>
                  <li>
                    <NoCodeWizardStepTrigger idx={1}>Customize</NoCodeWizardStepTrigger>
                  </li>
                  <li>
                    <NoCodeWizardStepTrigger idx={2}>Deploy</NoCodeWizardStepTrigger>
                  </li>
                  <li>
                    <NoCodeWizardStepTrigger idx={3}>Integrate</NoCodeWizardStepTrigger>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* END: row-3 */}

        <div className={cn(
          "row-start-4 xl:col-start-3 xl:col-span-17 3xl:col-start-5 3xl:col-span-17",
          "w-[70%]",
          "mt-8"
        )}>
          <a href="" className="flex-row flex items-center text-white rounded-xl bg-[#6C37C9] py-5 px-10">
            <span className="text-lg font-bold uppercase">Get your own lens api oracle now</span>
            <Image
              src="/icons/right-arrow.svg"
              alt=""
              className="svg-white ml-5 inline-block"
              width={24}
              height={24}
              />
          </a>
        </div>

        <div className={cn(
          "row-start-5 xl:col-start-2 xl:col-span-16 3xl:col-start-4 3xl:col-span-16"
        )}>
          <div className={cn("bg-white rounded-3xl p-16 mt-[170px]")}>
            <header className={cn("mb-16 flex flex-col gap-3")}>
              <h3 className={cn("text-4xl text-blackAlpha-900 font-black uppercase")}>Explore all of our blueprints</h3>
              <p className={cn("text-xl text-blackAlpha-700")}>Explore the marketplace today to find your ideal blueprints, streamlining your development process.</p>
            </header>
            <div className={cn("grid grid-cols-2 gap-5")}>
              <BlueprintCard
                title="Lens API Oracle"
                illustration="/home/blueprint-lens-api-oracle.png"
                live
              >
                A social oracle allowing a smart contract to read data from Lens API, including user profile stats like followers, posts, comments, and post stats like collects, mirrors, and replies. Compatible with Polygon and any EVM blockchain.
              </BlueprintCard>
              <BlueprintCard
                title="Lens Cross Post Bot"
              >
                A bot to mirrow your posts on Twitter, Facebook, and other social media to your Lens profile automatically.
              </BlueprintCard>
              <BlueprintCard
                title="Lens Referral System"
              >
              </BlueprintCard>
              <BlueprintCard
                title="Cross-chain Contract Read"
              >
              </BlueprintCard>
              <BlueprintCard
                title="Arweave Storage Proof"
              >
              </BlueprintCard>
              <BlueprintCard
                title="Push Notification"
              >
                Check if some file is actually stored on Arweave is your smart contract.
              </BlueprintCard>
            </div>
            <a href="" className={cn("btn btn-lg bg-primary mt-10 text-lg font-bold uppercase flex flex-row items-center py-5 px-10")}>
              Learn about blueprints
              <Image
                src="/icons/right-arrow.svg"
                alt=""
                className="svg-black ml-5 inline-block"
                width={24}
                height={24}
                />
            </a>
          </div>
        </div>
        {/* END: row-4 */}

        <div className={cn(
          "row-start-6 xl:col-start-9 xl:col-span-10 3xl:col-start-12 3xl:col-span-10"
        )}>
          <div className={cn("pt-20 pb-32 w-full")}>
            <div className="flex flex-col gap-10">
              <h3 className="uppercase text-white text-[56px] font-black">Inspire<br /> the next blueprint</h3>
              <div>
                <a href="" className="btn btn-xl bg-primary text-black uppercase">
                  Propose now
                  <Image
                    src="/icons/right-arrow.svg"
                    alt=""
                    className="svg-black ml-5"
                    width={16}
                    height={16}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* END: row-5 */}

        <div className={cn("row-start-1 row-span-3 xl:col-start-8 xl:col-span-11", "pt-20 xl:pt-[17.325rem]", "-z-10 untanglable text-white")}>
          <svg viewBox="0 0 681 290" fill="transparent">
            <path d="M0.5 5.5H613C647.794 5.5 676 33.7061 676 68.5V289.5" stroke="currentColor" stroke-width="10" />
          </svg>
        </div>

        <div className={cn("row-start-4 row-span-3 xl:col-start-4 xl:col-span-15 3xl:col-start-5 3xl:col-span-14", "-mt-4", "-z-10 untanglable text-white")}>
          <svg viewBox="0 0 936 279" fill="transparent">
            <path d="M931 0.5V127C931 161.794 902.794 190 868 190H68.5C33.7061 190 5.5 218.206 5.5 253V278.5" stroke="currentColor" stroke-width="10" />
          </svg>
        </div>

        <div className={cn("row-start-6 xl:col-start-5 xl:col-span-4 3xl:col-start-5 3xl:col-span-6", "-mt-4 3xl:-mt-24", "-z-10 untanglable text-white")}>
          <svg viewBox="0 0 330 205" fill="transparent">
            <path d="M5 0V109C5 143.794 33.2061 172 68 172H324.5" stroke="currentColor" stroke-width="10"/>
            <path d="M299.002 199.003L323.589 174.416C324.37 173.635 324.37 172.369 323.589 171.587L299.002 147" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
          </svg>
        </div>

      </div>
    </section>
  )
}

// END: Section Pitch Accelerate

function SectionPitchInnovate() {
  return (
    <section id="section-pitch-innovate" className="relative z-0">
      <DotBackground dotColor="#afd153" bgColor="#d0f964" />
      <div className={cn(
        "safe-viewport", "grid gap-4 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24",
        "overflow-hidden"
      )}>
        <header className={cn(
          "row-start-1 xl:col-span-20 3xl:col-span-24",
          "pt-[156px] pb-[20px]",
          "flex flex-col items-center w-full relative"
        )}>
          <h2 className="text-[3.5rem] font-black uppercase rounded-3xl px-16 py-10 bg-white inline-block">Innovate</h2>
          <p className="font-medium text-[2rem] text-black mt-10">Full power, full control. Empower your ideas.</p>

          <div className={cn("absolute top-[234px] left-[204px] 3xl:left-[296px]", "w-full h-full", "-z-10 untanglable text-white")}>
            <svg viewBox="0 0 2000 323" fill="transparent">
              <path stroke="currentColor" stroke-width="10" d="M 356 5 L 2000 5"/>
              <path stroke="currentColor" stroke-width="10" d="M 356.5 5 L 68.5 5 C 33.7061 5 5.5 33.206116 5.5 68 L 5.5 323"/>
            </svg>
          </div>
        </header>
        
        <div className={cn(
          "row-start-2 xl:col-start-2 xl:col-span-18 3xl:col-start-4 3xl:col-span-18",
          "rounded-3xl bg-white overflow-hidden px-20 py-12"
        )}>
          <h4 className={cn("text-4xl font-black text-blackAlpha-900 uppercase text-center mx-auto")}>Access the unique functionalities in Phat Contract</h4>
          <div className={cn("py-14")}>
            <ul className="flex flex-row flex-wrap gap-2.5">
              <CodeExampleTab idx={0}>HTTP Request</CodeExampleTab>
              <CodeExampleTab idx={1}>Cross-Chain Integration</CodeExampleTab>
              <CodeExampleTab idx={2}>Off-Chain Rollup</CodeExampleTab>
              <CodeExampleTab idx={3}>Automation</CodeExampleTab>
              <CodeExampleTab idx={4}>Confidentiality (deal with API keys & private keys)</CodeExampleTab>
              <CodeExampleTab idx={5}>High Performance Computation</CodeExampleTab>
            </ul>
          </div>
          <div className={cn("flex flex-row gap-10")}>
            <div className={cn("w-[75%]", "flex flex-col gap-6")}>
              <CodeExampleCodeViewer idx={0}>
{`
// Send HTTP(s) requests from your Phat Contract
let headers = vec![("X-Foo".into(), "Bar".into())];
let response = http_get!("https://example.com/", headers);
assert_eq!(response.status_code, 200);
`}
              </CodeExampleCodeViewer>
              <CodeExampleCodeViewer idx={1}>
{`
// Sign and send transaction to EVM blockchains with pink-web3
erc20_contract.signed_call(
	"transferFrom",
	(Token::Address(recipient), Token::U256(amount)),
	Options::default(),
	key_pair,
)
`}
              </CodeExampleCodeViewer>
              <CodeExampleCodeViewer idx={2}>
{`
// Receive requests and answer with responses in Phat Contract
if let Some(request) = client.session().pop().unwrap() {
    let response: Vec<u8> = // ... Create your response based on the request ...
    client.action(Action::Reply(response));
}
`}
              </CodeExampleCodeViewer>
              <CodeExampleCodeViewer idx={2}>
{`
// Send a request to your Phat Contract
bytes request = abi.encode(1000, "polkadot/usd");
uint256 reqId = _pushMessage(request);
// Receive a response from your Phat Contract
function _onMessageReceived(bytes calldata response) internal override {
    emit MsgReceived(response);
}
`}
              </CodeExampleCodeViewer>
              <CodeExampleCodeViewer idx={3}>
{`
// TODO
`}
              </CodeExampleCodeViewer>
              <CodeExampleCodeViewer idx={4}>
{`
// Contract storage is private by default
struct Contract {
	admin: AccountId,
	private_key: Vec<u8>,
}
// Anyone can query via E2E encryption, but unauthorized query can be rejected
fn get_key(&self) -> Result<Vec<u8>> {
	if self.env().caller() != self.admin {
	    return Err(Error::AccessForbidden);
	}
	self.private_key
}
`}
              </CodeExampleCodeViewer>
              <CodeExampleCodeViewer idx={5}>
{`
// Parse JSON objects
let object: PriceResponse = pink_json::from_str(&json);
// Cryptographically secure randomness
let privkey = signing::derive_sr25519_key(b"some-salt");
// Sign messages
let signature = signing::sign(message, &privkey, SigType::Ecdsa);
// Local storage
self.env().ext().cache_put(b"key", b"value");
self.env().ext().cache_get(b"key");
`}
              </CodeExampleCodeViewer>
            </div>
            <div className={cn("w-[25%]")}>
              <CodeExampleDescription idx={0}>
                <p>With access to HTTP request, you unlock a whole new world of dAPP possibilities.</p> 
                <p>HTTPs requests are sent from the secure environment so that nobody can manipulate the content or forge the request.</p>
                <p>It enables direct operation to read & write to other blockchains as well as Web2 APIs.</p>
              </CodeExampleDescription>
            </div>
          </div>
        </div>

        <div className={cn(
          "row-start-3 xl:col-start-8 xl:col-span-6 3xl:col-start-10 3xl:col-span-6",
          "mt-6 mb-22"
        )}>
          <a href="" className="btn btn-xl w-full justify-center bg-secondary text-white uppercase">Docs</a>
        </div>

        <div className={cn(
          "row-start-4 xl:col-start-2 xl:col-span-18 3xl:col-start-4 3xl:col-span-18",
          "flex flex-row gap-6"
        )}>
          <ul className={cn("max-w-md flex flex-col gap-5")}>
            <ShowCaseTab idx={0} summary="Cross-chain DEX aggregator">
              <p>TODO</p>
            </ShowCaseTab>
            <ShowCaseTab idx={1} summary="Self-owned Oracles">
              <p>TODO</p>
            </ShowCaseTab>
            <ShowCaseTab idx={2} summary="Trading Bot">
              <p>TODO</p>
            </ShowCaseTab>
            <ShowCaseTab idx={3} summary="DAO-Controlled Web2 Services">
              <p>TODO</p>
            </ShowCaseTab>
            <ShowCaseTab idx={4} summary="Trustless Ranking System">
              <p>TODO</p>
            </ShowCaseTab>
            <div className={cn("flex-1 rounded-lg px-7 py-6 bg-secondary flex flex-row items-center justify-center gap-14")}>
              <div>
                <Image
                  src="/icons/excalmatory-mark.svg"
                  alt=""
                  width={50}
                  height={128}
                  className="svg-white untanglable"
                />
              </div>
              <div className={cn("text-white font-black flex flex-col gap-6 leading-none")}>
                <div className={cn("text-[3.5rem]")}>$50K</div>
                <div className={cn("uppercase text-xl")}>for innovators</div>
              </div>
            </div>
          </ul>
          <div className="flex-1">
            <ShowCaseTabPanel
              idx={0}
              title="Cross-chain DEX aggregator"
              src="https://picsum.photos/id/22/946/487"
              tags={["Cross-Chain Integration", "Automation", "HTTP Request"]}
              href="#"
            >
              <p>By utilizing Phat Contract, developers can create a cross-chain DEX aggregator that enables users to swap tokens between various blockchains while ensuring the best possible price and minimal slippage in one-click.</p>
              <p>This solution employs Phat Contract to automatically search for the most efficient routes across DEXs and bridges. Then the Phat Contract initiates the necessary transactions on the target blockchains, executing swap and bridge operations on the user’s behalf. Transaction execution is further streamlined by automated schedulers and monitoring by indexers. To retrieve the status of these transactions, developers can query the indexers through HTTP requests.</p>
            </ShowCaseTabPanel>
            <ShowCaseTabPanel
              idx={1}
              title="Self-owned Oracles"
              src="https://picsum.photos/id/23/946/487"
              tags={["HTTP Request", "Off-Chain Rollup", "Automation", "Secret Management"]}
              href="#"
            >
              <p>TODO</p>
            </ShowCaseTabPanel>
            <ShowCaseTabPanel
              idx={2}
              title="Trading Bot"
              src="https://picsum.photos/id/26/946/487"
              tags={["Cross-chain Integration", "Automation", "High Performance Compute"]}
              href="#"
            >
              <p>TODO</p>
            </ShowCaseTabPanel>
            <ShowCaseTabPanel
              idx={3}
              title="DAO controlled Web2 Services"
              src="https://picsum.photos/id/29/946/487"
              tags={["HTTP Request", "Cross-chain Integration", "Automation"]}
              href="#"
            >
              <p>TODO</p>
            </ShowCaseTabPanel>
            <ShowCaseTabPanel
              idx={4}
              title="Trustless Ranking System"
              src="https://picsum.photos/id/30/946/487"
              tags={["Cross-chain Integration", "High Performance Compute"]}
              href="#"
            >
              <p>TODO</p>
            </ShowCaseTabPanel>
          </div>
        </div>

        <div className={cn(
          "row-start-5 xl:col-start-7 xl:col-span-8 3xl:col-start-9 3xl:col-span-8",
          "mt-8"
        )}>
          <a href="" className="btn btn-xl w-full justify-center bg-secondary text-white font-bold uppercase">Explore awesome-phat-contract</a>
        </div>

        <div className={cn(
          "row-start-6 xl:col-start-2 xl:col-span-11 3xl:col-start-5 3xl:col-span-11",
          "section-chat-with-us pt-6 pb-40 3xl:-ml-8"
        )}>
          <header className={cn("text-4xl font-black uppercase leading-normal")}>
            <h3>Develop and explore<br /> your ideas with us</h3>
          </header>
          <div className="body">
            <ul>
              <li><Image src="/home/avatar-h4x.jpg" alt="Hang" fill className="untanglable" /></li>
              <li><Image src="/home/avatar-shelven.jpg" alt="Shelven" fill className="untanglable" /></li>
              <li><Image src="/home/avatar-dan.jpg" alt="Dan" fill className="untanglable" /></li>
              <li><Image src="/home/avatar-zoe.jpg" alt="Zoe" fill className="untanglable" /></li>
            </ul>
            <span className={cn("text-4xl font-normal leading-normal uppercase text-black whitespace-nowrap mt-4 ml-4 3xl:ml-8")}>Chat Now!</span>
          </div>
        </div>

        <div className={cn("row-start-3 xl:col-start-4 xl:col-span-14 3xl:col-start-5 3xl:col-span-16", "-mt-4 -mb-4", "-z-10 untanglable text-white")}>
          <svg viewBox="0 0 1209 266" fill="transparent" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 0V113.5C5.5 148.294 33.7061 176.5 68.5 176.5H1140.5C1175.29 176.5 1203.5 204.706 1203.5 239.5V266" stroke="currentColor" stroke-width="10"/>
          </svg>
        </div>

        <div className={cn("row-start-5 row-span-2 xl:col-start-14 xl:col-span-5 3xl:col-start-16", "-mt-4 ml-2 3xl:-mt-12", "-z-10 untanglable text-white")}>
          <svg viewBox="0 0 470 622" fill="transparent">
          <path d="M464.5 0V527C464.5 561.794 436.294 590 401.5 590H10.5" stroke="currentColor" stroke-width="10"/>
          <path d="M31.002 564L6.41445 588.587C5.63341 589.369 5.6334 590.635 6.41445 591.416L31.0019 616.003" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  )
}

// END: Section Pitch Innovate

//
// Section Pitch Pionner
//

function BentoCell({ children, className, ...props }: React.HTMLProps<HTMLDivElement>) {
  return (
    <div {...props} className={cn("rounded-xl bg-blackAlpha-800 p-6 w-56 h-56", className)}>
      {children}
    </div>
  )
}

function SectionPitchPioneer() {
  return (
    <section id="section-pitch-pionner" className="relative pb-[156px]">
      <DotBackground dotColor="#2b2b2b" bgColor="#333" />
      <div className={cn(
        "safe-viewport", "grid gap-4 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24"
      )}>
        <header className={cn(
          "row-start-1 xl:col-end-20 xl:col-span-13 3xl:col-end-22 3xl:col-span-12",
          "mt-[210px]",
          "w-full flex flex-col items-end"
        )}>
          <h2 className="text-[3.5rem] font-black uppercase rounded-3xl px-16 py-4 bg-white inline-block">Pionner</h2>
          <p className="font-medium text-[2rem] text-white mt-10">Work with us on cutting edge research</p>
        </header>

        <main className={cn("row-start-2 xl:col-start-2 xl:col-span-10 3xl:col-start-4 3xl:col-span-10")}>
          <div className={cn("grid grid-cols-6 grid-rows-8 gap-3", "text-white text-xl font-extrabold uppercase leading-normal")}>
            <BentoCell className="bento-trustless-mev">
              <h4>Trustless MEV</h4>
            </BentoCell>
            <BentoCell className="bento-sequencer-for-layer2">
              <h4>Sequencer For Layer2</h4>
            </BentoCell>
            <BentoCell className="bento-decentralized-scientific-computation">
              <h4>Decentralized Scientific Computation</h4>
            </BentoCell>
            <BentoCell className="bento-account-abstraction">
              <h4>Account Abstraction</h4>
            </BentoCell>
            <BentoCell className="bento-web3-ai">
              <h4>Web3 AI</h4>
            </BentoCell>
            <BentoCell className="bento-decentralized-api">
              <h4>Decentralized API</h4>
            </BentoCell>
            <a href="#" className={cn("bento-join-research-community", "rounded-xl bg-secondary p-6 w-56 h-56 flex flex-col gap-3.5")}>
              <span>Join research community</span>
              <div className={cn("rounded-full w-28 h-28 bg-gray-200")} />
            </a>
            <BentoCell className="bento-distributed-computation">
              <h4>Distributed Computation</h4>
            </BentoCell>
          </div>
        </main>

        <aside className={cn("row-start-2 xl:col-end-20 xl:col-span-7 3xl:col-end-22", "w-full")}>
          <h3 className="text-4xl text-white">Areas of interest</h3>
          <div className={cn("bg-blackAlpha-500 rounded-5xl py-8 px-10 text-white")}>
            <div className={cn("flex flex-col justify-between")}>
              <h4 className={cn("text-2xl font-black")}>Trustless MEV</h4>
              <div className={cn("flex flex-col gap-2.5 leading-normal text-base pt-8 pb-10")}>
                <p>
                  According to the Messari Report, 80% of the Ethereum blocks are built by MEV.
                </p>
                <p>
                  However, currently the MEV stack still depends on trusted service providers like Flashbot. A research direction is to use Secure Enclave (e.g. Intel SGX) to minimize the trust.
                </p>
                <p>
                  Phala Network is an offchain compute network powered by Secure Enclaves. It's possible to build the MEV core stack in Phala Network's technology to minimize the trust assuptions.
                </p>
              </div>
            </div>
            <div className={cn("border-t border-solid border-whiteAlpha-700 mt-4")}>
              <h3 className={cn("text-2xl font-bold leading-normal py-8")}>We help you build your future.<br />Share your vision:</h3>
              <form className="flex flex-col gap-2.5">
                <div className="flex flex-row gap-2.5">
                  <input placeholder="Contact name" className="py-2.5 px-5 bg-transparent rounded-lg border border-solid border-whiteAlpha-500 flex-1 w-1/2" />
                  <input placeholder="nick@domain.ltd" className="py-2.5 px-5 bg-transparent rounded-lg border border-solid border-whiteAlpha-500 flex-1 w-1/2" />
                </div>
                <div>
                  <textarea className="py-2.5 px-5 bg-transparent rounded-lg border border-solid border-whiteAlpha-500 w-full" rows={6} />
                </div>
                <div className="flex flex-row justify-end">
                  <button type="submit" className="btn text-black bg-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </aside>

        <div className={cn("row-start-1 row-span-2 xl:col-start-1 xl:col-span-full 3xl:col-start-3 3xl:col-span-20", "-z-10 -mt-8 3xl:-mt-12", "text-white")}>
          <svg viewBox="0 0 1526 840" fill="transparent">
            <path stroke="currentColor" stroke-width="10" d="M 5 -17 L 5 258.125 C 5 303.067261 48.889664 339.5 103.030174 339.5 L 1449 339.5"/>
            <path stroke="currentColor" stroke-width="10" d="M 1448.5 339 L 1458 339 C 1492.790039 339 1521 367.4953 1521 402.646149 L 1521 767.853821 C 1521 803.0047 1492.790039 831.5 1458 831.5 L 1448.5 831.5"/>
          </svg>
        </div>
      </div>
    </section>
  )
}

// END: Section Pitch Pionner

//
// Section How It Works
//

function SectionHowItWorks() {
  return (
    <section id="section-how-it-works" className={cn("py-32")}>
      <div className={cn("safe-viewport", "grid gap-4 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24")}>
        <h2 className={cn("row-start-1 xl:col-start-6 xl:col-span-10 3xl:col-start-6 3xl:col-span-14", "section-heading mb-16")}>
          How It Works
        </h2>
        <div className={cn("row-start-2 xl:col-start-2 xl:col-span-18 3xl:col-start-4 3xl:col-span-18")}>
          <div className={cn("rounded-3xl aspect-[1360/760] bg-gray-200")} />
        </div>
        <blockquote className={cn("row-start-3 xl:col-start-2 xl:col-span-9 3xl:col-start-4 3xl:col-span-9 mt-40 mb-16", "quote")}>
          <p>BY THE PEOPPLE.</p>
          <p>FOR THE PEOPLE.</p>
        </blockquote>
        <div className={cn("row-start-3 xl:col-end-20 xl:col-span-9 3xl:col-end-22", "mt-40 mb-16 px-12 py-14 bg-primary rounded-3xl max-w-[44.75rem]")}>
          <p className={cn("text-3xl font-normal leading-normal uppercase")}>A Decentralised compute cloud like no other.</p>
          <p className={cn("text-2xl font-light mb-4")}>Secured by</p>
          <div className={cn("flex flex-row gap-9")}>
            <Stats name="Computers">12,320</Stats>
            <Stats name="$PHA">12,320</Stats>
          </div>
        </div>
        <div className={cn("row-start-4 xl:col-start-2 xl:col-span-18 3xl:col-start-4 3xl:col-span-18")}>
          <div className={cn("mx-auto rounded-3xl aspect-[1360/760] bg-gray-200")} />
        </div>
        <div className={cn("row-start-5 xl:col-start-8 xl:col-span-6 3xl:col-start-10", "text-center pt-32")}>
          <a href="" className={cn("btn btn-lg w-full justify-center bg-primary text-black uppercase")}>
            Provide Compute
          </a>
        </div>
      </div>
    </section>
  )
}

// END: Section How It Works

//
// Section Highlights
//

function PostCard({ title, intro }: { title: string, intro: string }) {
  return (
    <article className="flex flex-col gap-6">
      <div className={cn("bg-gray-200 rounded-4xl w-full aspect-[8/5]")}>
      </div>
      <header className={cn("text-xl font-bold")}>{title}</header>
      <div>
        <p className={cn("text-sm")}>{intro}</p>
      </div>
    </article>
  )
}

function SectionHighlights() {
  return (
    <section id="section-highlights" className={cn("py-32")}>
      <div className={cn("safe-viewport", "grid gap-4 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24")}>
        <h2 className={cn("row-start-1 col-span-full", "section-heading")}>Today's Highlights</h2>
        <div className={cn("row-start-2 xl:col-start-2 xl:col-span-18 3xl:col-start-4", "flex flex-row gap-4")}>
          <PostCard
            title="Heading 1 - This is a heading that can stretch over two lines"
            intro="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
          />
          <PostCard
            title="Heading 1 - This is a heading that can stretch over two lines"
            intro="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
          />
          <PostCard
            title="Heading 1 - This is a heading that can stretch over two lines"
            intro="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
          />
        </div>
        <div className={cn("row-start-3 xl:col-start-8 xl:col-span-6 3xl:col-start-10", "text-center pt-32")}>
          <a href="" className={cn("btn btn-lg w-full justify-center bg-primary text-black uppercase")}>
            Discover More
          </a>
        </div>
      </div>
    </section>
  )
}

// END: Section Highlights

//
// Section Subscription
//

function SectionSubscription() {
  return (
    <section id="section-subscription" className="section-subscription">
      <div className={cn("safe-viewport", "grid gap-4 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24")}>
        <form className={cn("row-start-1 col-span-full xl:col-start-2 xl:col-span-10 3xl:col-start-4", "text-white py-16")}>
          <legend className={cn("mb-16 uppercase text-4xl font-black max-w-3xl")}>Get the latest Phala Content Straight To Your Inbox.</legend>
          <div className={cn("max-w-3xl flex flex-row gap-6")}>
            <input className={cn("flex-1 rounded border border-solid border-whiteAlpha-500 bg-transparent py-2.5 px-5")} />
            <button type="submit" className={cn("btn btn-lg bg-primary text-black uppercase")}>Subscribe Now</button>
          </div>
          <div className={cn("mt-6")}>
            <label>
              <input
                className={cn("mr-3")}
                type="checkbox"
              />
              Yes, I agree to receive email communications from Phala
            </label>
          </div>
        </form>
      </div>
    </section>
  )
}

// END: Section Subscription

//
// Section Footer
//

function LinkListHeading({ children }: { children: ReactNode }) {
  return (
    <h4 className={cn("uppercase font-black text-2xl mb-5")}>
      {children}
    </h4>
  )
}

function LinkList({ children }: { children: ReactNode }) {
  return (
    <ul className={cn("mb-10 flex flex-col gap-2.5")}>{children}</ul>
  )
}

function LinkListItem({ children, className, ...props }: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <li>
      <a {...props} className={cn(className, 'btn-link')}>
        {children}
      </a>
    </li>
  )
}

function SectionFooter() {
  return (
    <footer className={cn("page-footer", "bg-[#1c1c1c] text-white pt-16 pb-24")}>
      {/* Row No.1 */}
      <div className={cn("safe-viewport", "grid gap-4 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24")}>
        <div className={cn("row-start-1 xl:col-start-2 xl:col-span-3 3xl:col-start-4")}>
          <div>
            <LinkListHeading>Developers</LinkListHeading>
            <LinkList>
              <LinkListItem href="">Docs</LinkListItem>
              <LinkListItem href="">GitHub</LinkListItem>
              <LinkListItem href="">Builders Program</LinkListItem>
              <LinkListItem href="">Using Blueprints</LinkListItem>
              <LinkListItem href="">Using Raw Phat Contract</LinkListItem>
              <LinkListItem href="">Tutorials</LinkListItem>
              <LinkListItem href="">Worker Operators</LinkListItem>
              <LinkListItem href="">Bug Bounty Program</LinkListItem>
            </LinkList>
          </div>
          <div>
            <LinkListHeading>Use Cases</LinkListHeading>
            <LinkList>
              <LinkListItem href="">Automation</LinkListItem>
              <LinkListItem href="">Oracles</LinkListItem>
              <LinkListItem href="">Data Encryption</LinkListItem>
            </LinkList>
          </div>
        </div>
        <div className={cn("row-start-1 xl:col-start-7 xl:col-span-3 3xl:col-start-9")}>
          <div>
            <LinkListHeading>Blueprints</LinkListHeading>
            <LinkList>
              <LinkListItem href="">Lens API Oracle</LinkListItem>
            </LinkList>
          </div>
          <div>
            <LinkListHeading>Resources</LinkListHeading>
            <LinkList>
              <LinkListItem href="">Whitepaper</LinkListItem>
              <LinkListItem href="">Case Studies</LinkListItem>
              <LinkListItem href="">Blog</LinkListItem>
              <LinkListItem href="">Staking</LinkListItem>
              <LinkListItem href="">FAQs</LinkListItem>
              <LinkListItem href="">Tokenomics</LinkListItem>
              <LinkListItem href="">What is Phala Network?</LinkListItem>
              <LinkListItem href="">What is Phat Contract?</LinkListItem>
              <LinkListItem href="">What are Blueprints?</LinkListItem>
            </LinkList>
          </div>
        </div>
        <div className={cn("row-start-1 xl:col-start-12 xl:col-span-3 3xl:col-start-14")}>
          <div>
            <LinkListHeading>Hashforest</LinkListHeading>
            <LinkList>
              <LinkListItem href="">Team</LinkListItem>
              <LinkListItem href="">Careers</LinkListItem>
              <LinkListItem href="">Brand Assets</LinkListItem>
            </LinkList>
          </div>
          <div>
            <LinkListHeading>Community</LinkListHeading>
            <LinkList>
              <LinkListItem href="">Events</LinkListItem>
              <LinkListItem href="">Become an Ambassador</LinkListItem>
            </LinkList>
          </div>
        </div>
        <div className={cn("row-start-1 xl:col-start-17 xl:col-span-3 3xl:col-start-19")}>
          <div>
            <LinkListHeading>Social</LinkListHeading>
            <LinkList>
              <LinkListItem href="">Twitter</LinkListItem>
              <LinkListItem href="">Discord</LinkListItem>
              <LinkListItem href="">Telegram</LinkListItem>
              <LinkListItem href="">YouTube</LinkListItem>
              <LinkListItem href="">Lenster</LinkListItem>
              <LinkListItem href="">Lenstube</LinkListItem>
            </LinkList>
          </div>
        </div>
        <div className={cn("row-start-2 xl:col-start-2 xl:col-span-18 3xl:col-start-4", "flex flex-row items-center justify-between")}>
          <Image
            src="/logo.svg"
            alt="Phala Logo"
            className="svg-white"
            width={156}
            height={44}
            priority
          />
          <div className={cn("uppercase flex flex-row gap-36 text-base font-semibold")}>
            <a href="">EN</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Use</a>
            <a href="">Responsible Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// END: Section Footer

export const metadata: Metadata = {
  title: 'Phala Network',
}

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionFeatures />
      <SectionPitchIntro />
      <SectionPitchAccelerate />
      <SectionPitchInnovate />
      <SectionPitchPioneer />
      <SectionHowItWorks />
      <SectionHighlights />
      <SectionSubscription />
      <SectionFooter />
    </>
  )
}
