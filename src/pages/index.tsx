import { Inter, PT_Sans_Caption } from 'next/font/google'
import { HeroSection } from '@/components/sections/hero-section'

const ptSansCaption = PT_Sans_Caption({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['700'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div
      className={`${inter.className} ${ptSansCaption.className} bg-zinc-50 font-inter dark:bg-black`}
    >
      <article className="flex flex-col">
        <HeroSection />
      </article>
    </div>
  )
}
