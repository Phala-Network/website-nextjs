'use client'

import { Book, FileCode, Menu, Users, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'

import { Button } from '@/components/ui/button'

const navLinks = [
  {
    name: 'Documentation',
    href: 'https://docs.dstack.dev/',
    icon: Book,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Dstack-TEE/dstack',
    icon: FaGithub,
  },
  {
    name: 'Examples',
    href: 'https://github.com/Dstack-TEE/dstack/tree/main/examples',
    icon: FileCode,
  },
  {
    name: 'Community',
    href: 'https://t.me/+RF-yUoDduWAzZTUx',
    icon: Users,
  },
]

export function DstackNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-background fixed inset-x-0 top-0 z-50 border-b">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/dstack/logo.svg"
              alt="dstack"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm font-medium transition-colors"
              >
                <link.icon className="size-4" />
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Button asChild>
              <a
                href="https://github.com/Dstack-TEE/dstack"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="border-t pb-6 md:hidden">
            <nav className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2 py-2 text-sm font-medium transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <link.icon className="size-4" />
                  {link.name}
                </a>
              ))}
              <Button className="mt-2" asChild>
                <a
                  href="https://github.com/Dstack-TEE/dstack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
