'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'

import { Button } from '@/components/ui/button'

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

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="outline" asChild>
              <a
                href="https://t.me/+RF-yUoDduWAzZTUx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Community
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/Dstack-TEE/dstack"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FaGithub className="size-4" />
                GitHub
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
              <Button variant="outline" className="w-full" asChild>
                <a
                  href="https://t.me/+RF-yUoDduWAzZTUx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Community
                </a>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a
                  href="https://github.com/Dstack-TEE/dstack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaGithub className="size-4" />
                  GitHub
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
