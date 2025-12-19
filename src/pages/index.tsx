import { Inter } from 'next/font/google'
import { Header } from '@/components/header'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '600'],
})

export default function Home() {
  return (
    <div
      className={`${inter.className} flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
    >
      <Header />
    </div>
  )
}
