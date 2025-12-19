import type { ReactNode } from 'react'
import { Footer } from '../footer'
import { Header } from '../header'
import { ThemeProvider } from '../theme-provider'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="relative flex flex-col min-h-screen dark">
        <Header />

        <main className="flex-1 flex-col flex">{children}</main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}
