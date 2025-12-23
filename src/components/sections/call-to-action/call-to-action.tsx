import { ArrowRight, Store } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CallToAction() {
  return (
    <section className="py-24 bg-[url('/assets/call-to-action-background.svg')] bg-cover bg-gradient-to-b from-cyan-950/20 to-gray-700">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="p-4 bg-cyan-300 rounded-full w-fit">
            <Store className="text-cyan-100" />
          </div>

          <h2 className="text-gray-100 text-heading-xl font-sans text-balance text-center">
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>

          <Button asChild className="mt-4">
            <Link href="/criar-loja">
              Criar loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
