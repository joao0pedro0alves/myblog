import { Inter, PT_Sans_Caption } from 'next/font/google'
import { Header } from '@/components/header'

const ptSansCaption = PT_Sans_Caption({
  variable: '--font-title',
  subsets: ['latin'],
  weight: ['700'],
})

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div
      className={`${inter.className} ${ptSansCaption.className} flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
    >
      <Header />
    </div>
  )
}
