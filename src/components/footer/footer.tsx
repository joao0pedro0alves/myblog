import Link from 'next/link'
import { Logo } from '../logo'

export function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-row justify-between gap-2 items-start md:items-center">
          <Logo />

          <nav className="flex flex-col md:flex-row gap-3 md:gap-8">
            <Link className="text-blue-100" href="/termos-de-uso">
              Termos de uso
            </Link>
            <Link className="text-blue-100" href="/privacidade">
              Politica de Privacidade
            </Link>
            <Link className="text-blue-100" href="/enviar-feedback">
              Enviar feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
