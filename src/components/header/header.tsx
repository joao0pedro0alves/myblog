import Link from 'next/link'
import { ActiveLink } from '../active-link/active-link'
import { Logo } from '../logo'
import { ModeToggle } from '../theme-provider/mode-toggle'
import { Button } from '../ui/button'

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filters]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Home</ActiveLink>

            <ActiveLink href="/blog">Blog</ActiveLink>

            <Button variant="secondary" asChild>
              <Link href="/começar">Começar</Link>
            </Button>

            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
