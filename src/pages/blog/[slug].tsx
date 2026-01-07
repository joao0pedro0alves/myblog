import { allPosts } from 'contentlayer/generated'
import { InboxIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export default function PostPage() {
  const router = useRouter()

  const slug = router.query.slug as string

  const post = allPosts.find((post) => post.slug === slug)

  if (!post) {
    return (
      <div className="container mt-32">
        <div className="flex flex-col items-center justify-center gap-12">
          <InboxIcon className="size-16 text-cyan-100" />

          <span className="text-body-md text-gray-300">
            Post não encontrado
          </span>
        </div>
      </div>
    )
  }

  return (
    <main className="mt-32 container">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild className="text-action-sm">
              <Link href="/blog">Blog</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <span className="text-blue-200 text-action-sm">{post?.title}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
        <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border">
          <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
            <Image
              src={post?.image ?? ''}
              alt={post?.title ?? ''}
              fill
              className="object-cover"
            />
          </figure>
        </article>
      </div>
    </main>
  )
}
