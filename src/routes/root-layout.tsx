import { Globe } from "lucide-react"
import { Outlet } from "react-router-dom"

import { GithubIcon, XIcon } from "@/components/brand-icons"
import { CommandMenu } from "@/components/command-menu"
import { Reveal } from "@/components/motion/reveal"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function RootLayout() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
          <a
            href="/"
            className="font-display text-lg font-bold tracking-tight text-foreground"
          >
            Library
          </a>
          <div className="flex items-center gap-2">
            <CommandMenu />
            <Button asChild variant="ghost" size="icon" aria-label="Portfolio">
              <a
                href="https://purbayan.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="size-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="GitHub">
              <a
                href="https://github.com/PPRAMANIK62"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="size-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="X (Twitter)">
              <a
                href="https://x.com/ppramanik62"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon className="size-4" />
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <Reveal className="flex flex-1 flex-col">
        <main className="flex flex-1 flex-col">
          <Outlet />
        </main>
      </Reveal>
    </div>
  )
}
