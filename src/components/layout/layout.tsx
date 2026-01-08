import { Inter, PT_Sans_Caption } from 'next/font/google'
import type { ReactNode } from 'react'
import { CallToAction } from '@/templates/landing-page/sections'
import { Footer } from '../footer'
import { Header } from '../header'
import { ThemeProvider } from '../theme-provider'

const ptSansCaption = PT_Sans_Caption({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['700'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

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
      <div
        className={`${inter.className} ${ptSansCaption.className} bg-zinc-50 font-inter dark:bg-black relative flex flex-col min-h-screen text-body-sm`}
      >
        <Header />

        <main className="flex-1 flex-col flex mt-10">{children}</main>

        <CallToAction />

        <Footer />
      </div>
    </ThemeProvider>
  )
}
