import React from 'react'
import Image from 'next/image'

const SiteFooter: React.FC = () => {
  return (
    <footer className="w-full flex flex-col items-center py-16 bg-[#1e2119] text-white">
      <div className="w-full max-w-[1440px] flex flex-row justify-between items-start px-12">
        {/* Logo & About */}
        <div className="flex flex-col gap-6 items-start">
          <Image
            alt="logo"
            className="h-12 w-[137.867px]"
            src="/logo.svg"
            width={137}
            height={48}
          />
          <span className="font-normal text-white text-[16px] text-left tracking-[-0.176px]">
            © 2025 Phala Cloud. Build AI that people trust.
          </span>
        </div>
        {/* Services Columns */}
        <div className="flex flex-row gap-24">
          <div className="flex flex-col gap-[23px] items-start">
            <span className="font-semibold text-[#bae730] text-[16px]">
              AI Solutions
            </span>
            <span className="font-medium text-white text-[14px]">
              Confidential AI Models
            </span>
            <span className="font-medium text-white text-[14px]">
              GPU TEE Inference
            </span>
            <span className="font-medium text-white text-[14px]">
              Agent Framework
            </span>
            <span className="font-medium text-white text-[14px]">
              MCP Hosting
            </span>
          </div>
          <div className="flex flex-col gap-[23px] items-start">
            <span className="font-semibold text-[#bae730] text-[16px]">
              Developers
            </span>
            <span className="font-medium text-white text-[14px]">
              Quick Start
            </span>
            <span className="font-medium text-white text-[14px]">
              Documentation Hub
            </span>
            <span className="font-medium text-white text-[14px]">
              Builder Tools
            </span>
            <span className="font-medium text-white text-[14px]">
              Community
            </span>
          </div>
          <div className="flex flex-col gap-[23px] items-start">
            <span className="font-semibold text-[#bae730] text-[16px]">
              Security
            </span>
            <span className="font-medium text-white text-[14px]">
              TEE Technology
            </span>
            <span className="font-medium text-white text-[14px]">
              Trust Center
            </span>
            <span className="font-medium text-white text-[14px]">
              Verification
            </span>
            <span className="font-medium text-white text-[14px]">
              Compliance
            </span>
          </div>
        </div>
        {/* Newsletter */}
        <div className="flex flex-col gap-4 items-start bg-[#23251f] rounded-2xl p-6 w-[289px]">
          <div className="font-medium text-white text-[20px] text-left tracking-[-0.34px]">
            <p className="mb-0">Subscribe to our</p>
            <p>newsletter</p>
          </div>
          <div className="flex flex-row items-center w-full bg-white bg-opacity-10 rounded-lg px-2 py-1 mt-2">
            <input
              className="bg-transparent outline-none text-white flex-1"
              placeholder="Email address"
            />
            <button className="bg-[#c4f144] rounded-tl-[8px] rounded-tr-[8px] p-2 ml-2 flex items-center justify-center">
              <svg
                className="block max-w-none size-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Social Icons and Back to Top */}
      <div className="w-full max-w-[1440px] flex flex-row justify-between items-center px-12 mt-12">
        <div className="flex flex-row gap-6 items-center">
          <a
            href="https://twitter.com/PhalaNetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="size-8 bg-white rounded-full flex items-center justify-center"
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://discord.gg/phala-network"
            target="_blank"
            rel="noopener noreferrer"
            className="size-8 bg-white rounded-full flex items-center justify-center"
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
            </svg>
          </a>
          <a
            href="https://t.me/phalanetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="size-8 bg-white rounded-full flex items-center justify-center"
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
