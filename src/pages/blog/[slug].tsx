import { allPosts } from 'contentlayer/generated'
import { InboxIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Avatar } from '@/components/avatar'
import { Markdown } from '@/components/markdown'
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
    <main className="mt-32 mb-10">
      <div className="container space-y-12 px-4 md:px-8">
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="text-action-sm">
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <span className="text-blue-200 text-action-sm">
                {post?.title}
              </span>
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

            <header className="p-4 md:p-6 lg:p-12 pb-0 mt-8 md:mt-12">
              <h1 className="mb-8 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl">
                {post.title}
              </h1>

              <Avatar.Container>
                <Avatar.Image src={post.author.avatar} alt={post.author.name} />

                <Avatar.Content>
                  <Avatar.Title>{post.author.name}</Avatar.Title>
                  <Avatar.Description>
                    Publicado em{' '}
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="prose prove-invert max-w-none px-4 mt-12 md:px-6 lg:px-12">
              <Markdown content={post.body.raw} />
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
