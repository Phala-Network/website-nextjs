import { type Metadata } from 'next'
import { FaDiscord } from 'react-icons/fa'

import { cn } from '@/lib/utils'
import SubscribeForm from './_components/SubscribeForm'


export const metadata: Metadata = {
  title: 'Phat Contract | Phala Network',
}

function HeroScreen() {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden bg-phat-400">
        <div
          className="absolute inset-0 -z-10 h-full w-full opacity-50"
          style={{
            backgroundImage: 'radial-gradient(rgba(50, 84, 34, 0.5) 1.5px, rgba(111, 183, 78, 0.5) 1.5px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="mx-auto max-w-7xl px-4 py-10 sm:py-48 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-20">
          <div className={cn('col-span-1', 'aspect-[340/117] max-w-[50%] md:max-w-[unset]')}>
            <svg viewBox="0 0 340 117" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.75">
              <path d="M113.405 99.4821C112.055 102.971 110.138 105.606 107.795 107.315C105.451 109.024 102.398 109.879 98.9183 109.879C93.5925 109.879 89.2609 108.099 85.9234 104.538C82.5859 100.977 80.8816 96.2776 80.8816 90.5807C80.8816 84.7413 82.5149 79.9702 85.7103 76.4808C88.9058 72.9915 93.2375 71.2112 98.5633 71.2112C102.256 71.2112 105.238 72.0657 107.582 73.7036C109.925 75.3415 111.629 77.9051 112.694 81.252L112.836 81.6793H119.014V65.0158H112.339V68.79C110.848 67.437 109.002 66.3689 106.872 65.5855C104.244 64.5886 101.262 64.0901 98.0662 64.0901C90.8231 64.0901 84.7162 66.6537 79.9585 71.6385C75.2007 76.6233 72.7864 82.9611 72.7864 90.5095C72.7864 98.129 75.2007 104.467 80.0295 109.452C84.8582 114.436 91.1072 116.929 98.5633 116.929C104.173 116.929 109.002 115.433 112.907 112.443C116.742 109.452 119.369 105.179 120.719 99.8381L120.932 99.0548H113.547L113.405 99.4821Z" fill="white"/>
              <path d="M142.022 82.3201C136.98 82.3201 132.649 83.9579 129.24 87.2336C125.831 90.5094 124.127 94.6396 124.127 99.482C124.127 104.324 125.831 108.455 129.24 111.802C132.649 115.077 136.909 116.786 142.022 116.786C147.135 116.786 151.395 115.148 154.804 111.802C158.212 108.526 159.917 104.396 159.917 99.482C159.917 94.6396 158.212 90.5094 154.804 87.2336C151.466 84.0291 147.135 82.3201 142.022 82.3201ZM152.532 99.5532C152.532 102.829 151.537 105.392 149.549 107.458C147.561 109.523 145.075 110.52 142.022 110.52C139.039 110.52 136.554 109.523 134.566 107.386C132.577 105.321 131.583 102.686 131.583 99.482C131.583 96.3487 132.577 93.7139 134.566 91.5775C136.554 89.5124 139.039 88.4442 142.022 88.4442C145.075 88.4442 147.49 89.4412 149.549 91.5063C151.537 93.6426 152.532 96.3487 152.532 99.5532Z" fill="white"/>
              <path d="M196.274 93.073C196.274 91.2927 196.132 89.9397 195.848 88.9427C195.564 87.9458 195.138 87.0912 194.57 86.3079C193.647 85.0261 192.369 84.0291 190.877 83.317C189.386 82.6761 187.682 82.3201 185.765 82.3201C183.634 82.3201 181.504 82.7473 179.587 83.6731C178.024 84.3852 176.462 85.4534 174.971 86.8064V83.1746H162.899V89.2276H167.728V110.021H162.899V116.074H179.729V110.021H174.9V94.0699C176.533 92.3608 178.095 91.0791 179.587 90.2245C181.078 89.37 182.64 88.9427 184.131 88.9427C185.907 88.9427 187.185 89.37 187.895 90.2957C188.392 90.9366 189.031 92.5033 189.031 96.4199V109.95H184.202V116.003H200.961V109.95H196.274V93.073Z" fill="white"/>
              <path d="M213.388 71.4248H206.571V83.1747H200.89V89.2276H206.571V109.594C206.571 112.015 207.139 113.795 208.275 114.792C209.411 115.789 211.257 116.288 214.027 116.288C215.092 116.288 216.015 116.288 216.796 116.217C217.577 116.145 218.359 116.074 218.998 115.932L219.566 115.861V109.594L218.501 109.736C217.009 109.95 216.583 110.021 216.441 110.021C214.595 110.021 214.098 109.665 213.956 109.452C213.814 109.309 213.459 108.597 213.459 105.25V89.2276H219.637V83.1747H213.459V71.4248H213.388Z" fill="white"/>
              <path d="M245.201 82.3201C244.846 82.3201 244.633 82.3201 244.49 82.3201C241.934 82.3201 239.733 82.8186 237.958 83.8155C236.75 84.5276 235.614 85.4534 234.691 86.7352V83.2458H222.69V89.2988H227.519V110.092H222.69V116.145H239.52V110.092H234.691V98.0577C234.691 95.1381 235.472 93.0017 237.176 91.4351C238.81 89.8685 241.224 89.0851 244.206 89.0851H246.479V82.3201H245.84C245.698 82.3201 245.485 82.3201 245.201 82.3201Z" fill="white"/>
              <path d="M274.386 86.3079C273.179 85.1685 271.83 84.2428 270.409 83.6019C268.492 82.7473 266.291 82.3201 263.948 82.3201C259.261 82.3201 255.213 84.0291 252.018 87.3049C248.822 90.5806 247.189 94.7108 247.189 99.5532C247.189 104.396 248.822 108.526 252.018 111.802C255.213 115.077 259.261 116.786 264.019 116.786C266.433 116.786 268.705 116.359 270.623 115.504C272.043 114.864 273.321 114.009 274.457 112.87V116.003H286.458V109.95H281.629V89.1563H286.458V83.1034H274.386V86.3079ZM271.901 91.7199C273.818 93.7851 274.812 96.4199 274.812 99.5532C274.812 102.758 273.818 105.392 271.901 107.458C269.983 109.523 267.64 110.52 264.729 110.52C261.817 110.52 259.474 109.523 257.486 107.458C255.568 105.392 254.574 102.758 254.574 99.5532C254.574 96.3487 255.497 93.7139 257.415 91.6487C259.332 89.5836 261.675 88.5867 264.729 88.5867C267.64 88.6579 269.983 89.6548 271.901 91.7199Z" fill="white"/>
              <path d="M316.211 105.82C314.862 107.458 313.371 108.668 311.738 109.452C310.176 110.235 308.471 110.662 306.625 110.662C303.43 110.662 301.086 109.736 299.311 107.814C297.607 105.891 296.683 103.185 296.683 99.7669C296.683 96.3487 297.536 93.6427 299.169 91.5776C300.802 89.5837 302.861 88.5867 305.56 88.5867C307.619 88.5867 309.394 89.1564 310.886 90.1534C312.377 91.2215 313.513 92.8594 314.365 94.9957L314.507 95.423H319.762V83.2459H313.868V85.4534C312.874 84.5989 311.738 83.8868 310.531 83.3883C308.897 82.7474 306.98 82.3914 304.921 82.3914C300.305 82.3914 296.47 84.0292 293.63 87.2337C290.79 90.4382 289.369 94.6397 289.369 99.7669C289.369 104.894 290.861 109.096 293.772 112.229C296.683 115.362 300.66 116.929 305.631 116.929C308.613 116.929 311.454 116.288 313.939 115.077C316.424 113.867 318.626 112.086 320.401 109.736L320.756 109.309L316.709 105.321L316.211 105.82Z" fill="white"/>
              <path d="M340 89.2276V83.1747H333.822V71.4248H327.005V83.1747H321.324V89.2276H327.005V109.594C327.005 112.015 327.573 113.795 328.709 114.792C329.846 115.789 331.692 116.288 334.461 116.288C335.526 116.288 336.449 116.288 337.231 116.217C338.012 116.145 338.793 116.074 339.432 115.932L340 115.861V109.594L338.935 109.736C337.444 109.95 337.018 110.021 336.876 110.021C335.029 110.021 334.532 109.665 334.39 109.452C334.248 109.309 333.893 108.597 333.893 105.25V89.2276H340Z" fill="white"/>
              </g>
              <path d="M252.728 0.355957H245.271V52.9098H252.728V0.355957Z" fill="white"/>
              <path d="M237.887 18.1589H230.43V25.6361H237.887V18.1589Z" fill="white"/>
              <path d="M237.887 45.5039H230.43V52.9811H237.887V45.5039Z" fill="white"/>
              <path d="M66.2531 58.4644L54.6783 70.0718L7.95321 117L0.142022 109.167L50.5597 58.678L0 7.97565L7.95321 0L54.6783 46.9282L66.2531 58.4644Z" fill="white"/>
              <path d="M96.3618 0H72.5022V7.69081H77.97V45.7176H72.5022V53.3372H93.4504V45.7176H87.2725V34.1102H96.3618C105.735 34.1102 113.333 26.4906 113.333 17.0907C113.333 7.6196 105.735 0 96.3618 0ZM95.6517 26.3481H87.2725V7.69081H95.6517C100.765 7.69081 104.954 11.8923 104.954 17.0195C104.954 22.1467 100.765 26.3481 95.6517 26.3481Z" fill="white"/>
              <path d="M148.981 32.8996C148.981 24.4967 142.164 17.5892 133.785 17.5892C131.37 17.5892 129.169 18.1589 127.11 19.1558V0H113.547V7.54839H118.446V45.86H113.547V53.3372H132.08V45.86H127.11V32.8996C127.11 29.2678 130.092 26.2769 133.714 26.2769C137.406 26.2769 140.318 29.2678 140.318 32.8996V45.86H135.347V53.3372H153.881V45.86H148.91V32.8996H148.981Z" fill="white"/>
              <path d="M210.05 0H201.813V18.5149H181.362V21.6482C178.593 19.6543 175.184 18.5149 171.491 18.5149C161.905 18.5149 154.165 26.2769 154.165 35.8904C154.165 45.504 161.905 53.266 171.491 53.266C175.184 53.266 178.593 52.1266 181.362 50.1327V53.266H194.357V45.7888H189.102V25.9209H201.813V42.5131C201.813 48.4236 206.642 53.266 212.536 53.266H222.974V45.86H213.317C211.542 45.86 210.121 44.4358 210.121 42.6555V25.9209H222.974V18.4437H210.121V0H210.05ZM171.491 45.86C166.024 45.86 161.55 41.3737 161.55 35.8904C161.55 30.4072 166.024 25.9209 171.491 25.9209C176.959 25.9209 181.362 30.4072 181.362 35.8904C181.362 41.3737 176.959 45.86 171.491 45.86Z" fill="white"/>
            </svg>
          </div>
          <div className='col-span-1 md:col-span-2 md:-mt-2 flex flex-col gap-4 md:gap-6'>
            <h1 className="heading-xl md:heading-2xl text-white tracking-tight md:-ml-1">
              Smart Contracts Supercharged
            </h1>
            <p className="text-base md:text-lg leading-8 text-white">
              Embrace the future of Web3 off-chain computation. Access the internet, boost performance, fully multichain, and ultimate data security, all with Phat Contract.
            </p>
            <div className="mt-4 flex flex-col gap-y-6 xl:flex-row items-start gap-x-6">
              <SubscribeForm />
              <a
                className="btn btn-lg btn-outline btn-white items-center gap-1.5"
                href="https://discord.gg/phala"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord className="w-5 h-5" />
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const features = [
  {
    name: 'Internet Access: Bridge the Gap Between Web3 and Web2',
    description: 'Send HTTP/HTTPS requests directly from your smart contracts, enabling seamless integration with any Web2 APIs and unlocking a world of possibilities for your dApps.',
  },
  {
    name: 'Multichain: Universal Compatibility Across EVM and Substrate Blockchains',
    description: "Easily connect Phat Contract to your EVM or Substrate blockchains without the need for a bridge, expanding your smart contract's capabilities.",
  },
  {
    name: 'Fast & Powerful Computation: Zero Gas and Zero latency',
    description: "Execute intense off-chain computations in real-time while bypassing transaction fees and network latency, enhancing your dApps' functionality and user experience with minimum cost.",
  },
  {
    name: 'Decentralized Network: Secure, Robust, and Trustworthy Infrastructure',
    description: 'Phat Contract runs on Phala Network, a web of 20,000+ secure enclave workers distributed globally, ensuring the confidentiality and security of your applications.',
  }
]

function FeaturesSection() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:text-center">
          <h3 className="mt-2 heading-xl text-white">
            Unlock Limitless Web3 Potential with Phat Contract
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-300 md:px-5">
            Enhance your smart contracts with limitless possibilities by accessing the internet, integrating with Web2 APIs, and harnessing the power of fast &amp; powerful computation. Experience the ease of use, multichain support, and security in a decentralized network.
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-4 gap-y-4 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="card-filled bg-gray-800 border-gray-600 px-6 py-9 flex flex-col gap-4">
                <dt className="flex flex-col gap-1">
                  <h4 className="heading-lg text-phat-400">
                    {feature.name.split(':')[0]}
                  </h4>
                  <p className="heading-md text-gray-200">{feature.name.split(':')[1].trim()}</p>
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className={cn("w-full mt-12 flex flex-row justify-center")}>
          <a
            href="https://wiki.phala.network/en-us/build/stateless/create-contract/"
            className={cn('btn btn-phat btn-lg')}
            target="_blank"
            rel="noopener"
          >
            Create your first Phat Contract
          </a>
        </div>
      </div>
    </div>
  )
}


function ShowCaseNoCode() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          className={cn(
            "isolate overflow-hidden card-filled bg-gray-800 border-gray-600 px-16 py-16 gap-x-16 gap-y-0",
            "grid grid-cols-1 lg:grid-cols-2"
          )}
        >
          <div
            className="w-full relative lg:col-start-2 lg:row-start-1"
            style={{
              height: 'auto',
              aspectRatio: '558 / 611'
            }}
          >
            <img
              src="/illustrations/phat-contract/integration.png"
              alt="Product screenshot"
            />
          </div>
          <div className="mt-10 lg:my-20 lg:col-start-1 lg:row-start-1">
            <h2 className="heading-lg text-white">
              Simplify Your Development Process with Our No-Code Tool
            </h2>
            <div className="mt-6 text-base leading-7 text-gray-300 flex flex-col gap-6">
              <p>
                Phat Contract is designed with developers in mind, providing an effortless way to build and deploy off-chain computations without writing a single line of code. Our intuitive no-code developer console enables you to create oracles and other common use cases by leveraging predefined blueprints, allowing you to save time and focus on what truly matters.
              </p>
              <p>
                Don't miss the chance to revolutionize your development process. Subscribe to our newsletter and be the first to know about the no-code tool's launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


interface TweetCardProps {
  avatarUrl: string
  nickName: string
  handle: string
  url: string
  formattedDate: string
  children?: React.ReactNode
}

function TweetCard({ avatarUrl, nickName, handle, url, formattedDate, children }: TweetCardProps) {
  return (
    <figure className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border w-full shadow-lg">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img className="h-12 w-12 rounded-full" src={avatarUrl} />
          <div className="ml-2 text-sm leading-tight">
            <span className="text-black dark:text-white font-bold block">{nickName}</span>
            <span className="text-gray-500 dark:text-gray-400 font-normal block">@{handle}</span>
          </div>
        </div>
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "rounded-full h-10 w-10 flex flex-row justify-center items-center transition-all duration-300",
            "text-blue-400 dark:text-white hover:text-white hover:bg-blue-400",
          )}
        >
          <svg className="transition-all h-6 w-auto inline-block fill-current" viewBox="0 0 24 24"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
        </a>
      </div>
      <div className="text-gray-900 dark:text-white mt-3 text-base leading-snug flex flex-col gap-2.5">
        {children}
      </div>
      <p className="text-sm mt-3">
        <a href={url} className={cn("text-gray-500 dark:text-gray-400 hover:underline")}>
          {formattedDate}
        </a>
      </p>
    </figure>
  )
}

function InnerLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" className={cn("text-blue-500 hover:underline")} rel="noopener noreferrer">
      {children}
    </a>
  )
}

function Testimonials() {
  return (
    <div className="relative isolate bg-gray-900 pb-32 pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto text-center">
          <h3 className="heading-xl text-white">
            Real journeys, real achievements, fueled by Phat Contract.
          </h3>
        </div>
        <section
          className={cn(
            "mx-auto mt-16 max-w-4xl sm:mt-20 xl:mx-0 xl:max-w-none",
            'md:columns-2 xl:columns-3 gap-4'
          )}
        >
          <article className="mb-3">
            <TweetCard
              avatarUrl="https://pbs.twimg.com/profile_images/1442069884272140300/u0_w5wDD_400x400.jpg"
              nickName="Soptq🔰"
              handle="realsoptq"
              url="https://twitter.com/realsoptq/status/1642849864706052096"
              formattedDate="7:21 PM · Apr 3, 2023"
            >
              <p>
                tbh, <InnerLink href="https://twitter.com/PhalaNetwork">@PhalaNetwork</InnerLink> has the most satisfying development experience on the Polkadot ecosystem.
              </p>
            </TweetCard>
          </article>

          <article className="mb-3">
            <TweetCard
              avatarUrl="https://pbs.twimg.com/profile_images/1652098970510925825/BJ1y_4tS_400x400.jpg"
              nickName="C H A R L Ξ S ⚛️🔆"
              handle="charlesace_"
              url="https://twitter.com/charlesace_/status/1647599601128558593"
              formattedDate="9:55 PM · Apr 16, 2023"
            >
              <p>Enters Phat Contract!</p>
              <p>This is <InnerLink href="https://twitter.com/hashtag/Phala">#Phala</InnerLink>'s flagship product that is deemed to revolutionize the blockchain space, especially as it relates to smart contracts. It is a novel programming model for Off-chain Computation, popularly called Fat Contract due to its robust features.</p>
              <p>5/</p>
            </TweetCard>
          </article>

          <article className="mb-3">
            <TweetCard
              avatarUrl="https://pbs.twimg.com/profile_images/1620172230004178944/95AF7_MG_400x400.jpg"
              nickName="Rom1.io"
              handle="RCajina"
              url="https://twitter.com/RCajina/status/1648972638973227008"
              formattedDate="4:51 PM · Apr 20, 2023"
            >
              <p>
                Blessed to have had the chance to try out <InnerLink href="https://twitter.com/hashtag/PhatContract">#PhatContract</InnerLink> and grateful to{' '}
                <InnerLink href="https://twitter.com/PhalaNetwork">@PhalaNetwork</InnerLink> and <InnerLink href="https://twitter.com/phala_fr">@phala_fr</InnerLink>{' '}
                for making it happen! A mind-blowing experience that has broadened my horizons in the <InnerLink href="https://twitter.com/hashtag/Blockchain">#Blockchain</InnerLink>
                realm 🚀 <InnerLink href="https://twitter.com/hashtag/innovation">#innovation</InnerLink> <InnerLink href="https://twitter.com/hashtag/crypto">#crypto</InnerLink> 🤖✨
              </p>
            </TweetCard>
          </article>

          <article className="mb-3">
            <TweetCard
              avatarUrl="https://pbs.twimg.com/profile_images/1502781909289648133/h9g6PbYY_400x400.jpg"
              nickName="GuiGou"
              handle="GuiGou12358"
              url="https://twitter.com/GuiGou12358/status/1649107493266522129"
              formattedDate="1:47 AM · Apr 21, 2023"
            >
              <p>
                Glad to play with <InnerLink href="https://twitter.com/hashtag/PhatContract">#PhatContract</InnerLink> on{" "}
                <InnerLink href="https://twitter.com/PhalaNetwork">@PhalaNetwork</InnerLink>{" "}
                to replace centralized offchain computing by decentralized onchain computing. <InnerLink href="https://twitter.com/phala_fr">@phala_fr</InnerLink>
              </p>
            </TweetCard>
          </article>

          <article className="mb-3">
            <TweetCard
              avatarUrl="https://pbs.twimg.com/profile_images/1622635383463747584/cS4o3mjF_400x400.jpg"
              nickName="Janemake"
              handle="JanemakeCrypto"
              url="https://twitter.com/JanemakeCrypto/status/1649126207995117579"
              formattedDate="3:01 PM · Apr 21, 2023"
            >
              <p>
                Exciting moments learning <InnerLink href="https://twitter.com/hashtag/PhatContract">#PhatContract</InnerLink> implementations during the
                <InnerLink href="https://twitter.com/hashtag/ClosedBeta">#ClosedBeta</InnerLink>. The Phat Contract is a contract that could run off-chain
                computations like http requests thanks to <InnerLink href="https://twitter.com/PhalaNetwork">@PhalaNetwork</InnerLink>
              </p>
            </TweetCard>
          </article>

          <article className="mb-3">
            <TweetCard
              avatarUrl="https://pbs.twimg.com/profile_images/1652405189926592514/WGCLBDUT_400x400.jpg"
              nickName="The Scarlet Thread"
              handle="TheScarletThr"
              url="https://twitter.com/TheScarletThr/status/1648603479496073216"
              formattedDate="4:24 PM · Apr 19, 2023"
            >
              <p>
                By moving some computation offchain, these limitations or boundaries can be pushed. Phat Contract offers many rich benefits, for example supporting computation-intensive tasks in a more cost-effective  and efficient way and serve low-latency real-time computation.
              </p>
            </TweetCard>
          </article>
        </section>
      </div>
    </div>
  )
}

const faqs = [
  {
    id: 1,
    question: "What benefits does Phat Contract offer over traditional smart contracts?",
    answer:
      "Phat Contract provides enhanced latency, database support, network access, and a wider variety of libraries, eliminating the need for centralized cloud solutions. It also offers hardware-based encryption for security promise, zero-latency and zero-gas fee interactions, and seamless integration with Web2 services as well as other blockchains.",
  },
  {
    id: 2,
    question: "How does Phat Contract differ from Web2 serverless services?",
    answer:
      "While Phat Contract shares similar functionalities, it boasts unique Web3 features such as enforced execution, a decentralized trustless infrastructure, easy integration with other blockchains, and an open contract ecosystem that promotes efficient development and application possibilities.",
  },
  {
    id: 3,
    question: "What programming language can I use with Phat Contract, and what libraries are available?",
    answer:
      "Phat Contract supports the Rust-based ink! language, allowing you to utilize a wide range of no_std supported libraries. Future updates will include std support, granting access to an even broader selection of libraries for greater flexibility.",
  },
  {
    id: 4,
    question: "Can I trust Phat Contract with my sensitive data?",
    answer:
      "Yes! Phat Contract employs hardware-based encryption throughout its lifecycle to ensure your data is secure and tamper resistance. Rather than requiring trust in the Phala team, you can rely on the robust code and Secure-Enclave-based hardware for data processing.",
  },
  // More questions...
]

function Faqs() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 flex flex-col gap-16">
        <h2 className="heading-xl text-white text-center">Frequently asked questions</h2>
        <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
          {faqs.map((faq) => (
            <div key={faq.id} className="flex flex-col gap-2">
              <dt className="heading-md text-phat-400">{faq.question}</dt>
              <dd className="text-base leading-7 text-gray-400">{faq.answer}</dd>
            </div>
          ))}
        </dl>
        <div className="mx-auto">
          <a
            className="btn btn-brand btn-lg items-center gap-1.5"
            href="https://discord.gg/phala"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className="w-6 h-6 text-white" />
            Ask us on Discord
          </a>
        </div>
      </div>
    </div>
  )
}


const posts = [
  {
    id: 3,
    title: "Phala Builders Program Is Accepting Applications Now",
    href: "/en/posts/phala-builders-program-accepting-applications-now-4784a1a2d601",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*X7SuaqIEcpu0CrJcLo4Mhw.jpeg",
    date: "Feb 15, 2023",
    datetime: "2023-02-15",
  },
  {
    id: 1,
    title: 'Pick Up the Pace, Testers! Phat Contract’s Closed Beta is Ending Soon!',
    href: 'https://medium.com/phala-network/pick-up-the-pace-testers-phat-contracts-closed-beta-is-ending-soon-1c3f169d8687',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*eOOABmC3wJZNFgjAWtkP4g.png',
    date: 'Mar 27, 2023',
    datetime: '2023-03-27',
  },
  {
    id: 2,
    title: 'Phala Is Coming To EthDenver! Explore The Future of Trustless Backend With The Phala Team',
    href: '/en/posts/phala-is-coming-to-ethdenve…s-backend-with-the-phala-team-bff9b5ab63ca',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*DJGUZLS-aHJ5BrAosp6dUg.png',
    date: 'Feb 16, 2023',
    datetime: '2023-02-16',
  },
  {
    id: 4,
    title: 'Phat Contract — What Phala’s New Product Will Bring to Web3',
    href: '/en/posts/phat-contract-what-phalas-new-product-will-bring-to-web3-1958ae90de68',
    imageUrl: 'https://cdn-images-1.medium.com/1*1sDQxA-shO0IdzJhqn1iVg.png?q=20',
    date: 'Oct 18, 2022',
    datetime: '2023-10-18',
  },
  // More posts...
]

function RecentPosts() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What's New</h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post) => (
            <a
              href={post.href}
              key={post.id}
              className="card-elevated relative isolate flex flex-col justify-end overflow-hidden"
            >
              <img src={post.imageUrl} alt="" className="inset-0 -z-10 h-full w-full object-cover aspect-video" />

              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="absolute w-full left-0 bottom-0 px-4 py-3">
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-400">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                </div>
                <h3 className="heading-md leading-7 text-white">
                  <span className="absolute inset-0" />
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
        <div className={cn("w-full mt-12 flex flex-row justify-center")}>
          <a
            href="https://medium.com/phala-network"
            className={cn('btn btn-phat btn-lg')}
            target="_blank"
            rel="noopener"
          >
            Read more News about Phat Contract
          </a>
        </div>
      </div>
    </div>
  )
}

export default function PhatContractsLandingPage() {
  return (
    <>
      <HeroScreen />
      <FeaturesSection />
      <ShowCaseNoCode />
      <Testimonials />
      <Faqs />
      <RecentPosts />
    </>
  )
}

