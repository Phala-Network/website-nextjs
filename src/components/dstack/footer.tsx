import Image from 'next/image'
import { FaGithub, FaTelegram } from 'react-icons/fa6'

export function DstackFooter() {
  return (
    <footer className="bg-muted py-12 sm:py-16">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center sm:items-start gap-4">
            <Image
              src="/dstack/logo.svg"
              alt="dstack"
              width={100}
              height={26}
              className="h-6 w-auto"
            />
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              Open source under Apache 2.0 License.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
            <a
              href="https://t.me/+RF-yUoDduWAzZTUx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Community"
              className="text-muted-foreground hover:text-foreground rounded-full p-2 transition-colors hover:bg-accent"
            >
              <FaTelegram className="size-6" />
            </a>
            <a
              href="https://github.com/Dstack-TEE/dstack"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground rounded-full p-2 transition-colors hover:bg-accent"
            >
              <FaGithub className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
