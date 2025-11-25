import Image from 'next/image'
import {
  FaDiscord,
  FaGithub,
  FaTelegram,
  FaXTwitter,
} from 'react-icons/fa6'

const navigation = [
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: 'https://docs.dstack.dev/' },
      { name: 'GitHub', href: 'https://github.com/Dstack-TEE/dstack' },
      { name: 'Examples', href: 'https://github.com/Dstack-TEE/dstack/tree/main/examples' },
    ],
  },
  {
    title: 'Community',
    links: [
      { name: 'Telegram', href: 'https://t.me/+RF-yUoDduWAzZTUx' },
      { name: 'Discord', href: 'https://discord.gg/dstack' },
      { name: 'Twitter', href: 'https://x.com/daboross' },
    ],
  },
  {
    title: 'About',
    links: [
      { name: 'What is dstack?', href: 'https://docs.dstack.dev/' },
      { name: 'Use Cases', href: 'https://docs.dstack.dev/' },
      { name: 'Security', href: 'https://docs.dstack.dev/' },
    ],
  },
]

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/Dstack-TEE/dstack' },
  { name: 'Twitter', icon: FaXTwitter, href: 'https://x.com/daboross' },
  { name: 'Discord', icon: FaDiscord, href: 'https://discord.gg/dstack' },
  { name: 'Telegram', icon: FaTelegram, href: 'https://t.me/+RF-yUoDduWAzZTUx' },
]

export function DstackFooter() {
  return (
    <footer className="bg-muted py-12 sm:py-16">
      <div className="container">
        {/* Top section */}
        <div className="mb-10 flex flex-col items-start justify-between gap-10 border-b pb-10 lg:flex-row">
          {/* Logo and tagline */}
          <div className="flex flex-col items-start">
            <Image
              src="/dstack/logo.svg"
              alt="dstack"
              width={120}
              height={32}
              className="mb-4 h-8 w-auto"
            />
            <p className="text-muted-foreground max-w-xs text-sm">
              Open-source confidential computing platform for deploying secure
              applications with hardware-guaranteed privacy.
            </p>
          </div>

          {/* Navigation */}
          <nav className="grid w-full gap-8 grid-cols-2 md:grid-cols-3 lg:w-auto lg:gap-16">
            {navigation.map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 font-semibold">{section.title}</h3>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} dstack. Open source under Apache 2.0 License.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-muted-foreground hover:text-foreground rounded-full p-2 transition-colors hover:bg-accent"
              >
                <link.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
