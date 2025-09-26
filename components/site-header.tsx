"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const { resolvedTheme } = useTheme()
  const logoSrc = resolvedTheme === 'dark' ? '/logoblack.png' : '/logowhite.png'
  
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="#" className="flex items-center gap-2" aria-label="Home">
            <Image src={logoSrc} alt="Logo" width={24} height={24} className="opacity-90" />
            <span className="font-semibold tracking-tight">Manglam Jaiswal</span>
          </Link>

          <nav aria-label="Primary">
            <ul className="hidden md:flex items-center gap-6">
              <li>
                <a className="text-sm hover:text-primary transition-colors" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-sm hover:text-primary transition-colors" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="text-sm hover:text-primary transition-colors" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="default">
              <a href="#projects">View Work</a>
            </Button>
            <Button asChild variant="outline" size="sm" className="md:inline-flex hidden bg-transparent">
              <a href="mailto:ecs.crce.10127@gmail.com">Email</a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
