import Link, { type LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ActiveLinkProps extends LinkProps {
  children: ReactNode
}

export function ActiveLink({ children, href, ...rest }: ActiveLinkProps) {
  const router = useRouter()

  const isCurrentPath =
    router.asPath === href ||
    router.asPath === rest.as ||
    router.asPath.startsWith(String(rest.as))

  return (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-blue-200',
        isCurrentPath
          ? 'text-blue-200'
          : 'text-muted-foreground dark:text-gray-100',
      )}
      {...rest}
    >
      {children}
    </Link>
  )
}
