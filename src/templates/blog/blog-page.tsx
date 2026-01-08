import type { Post } from 'contentlayer/generated'
import { InboxIcon } from 'lucide-react'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { Search } from '@/components/search'
import { PostCard } from './components/post-card'
import { PostGridCard } from './components/post-grid-card'

export type BlogPageProps = {
  posts: Post[]
}

export function BlogPage({ posts }: BlogPageProps) {
  const router = useRouter()

  const query = router.query.q as string

  const pageTitle = query
    ? `Resultados de busca para "${query}"`
    : 'Dicas e estratégias para impulsionar seu negócio'

  const postsList = useMemo(() => {
    if (query?.trim()) {
      return posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase()),
      )
    }

    return posts
  }, [query, posts])

  const hasPosts = postsList.length > 0

  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="pb-14">
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
              BLOG
            </span>

            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              {pageTitle}
            </h1>
          </div>

          <Search />
        </div>
      </header>

      <div className="container">
        {hasPosts && (
          <PostGridCard>
            {postsList.map((post) => (
              <PostCard
                key={post._id}
                title={post.title}
                description={post.description}
                date={new Date(post.date).toLocaleDateString('pt-BR')}
                slug={post.slug}
                image={post.image}
                author={{
                  avatar: post.author.avatar,
                  name: post.author.name,
                }}
              />
            ))}
          </PostGridCard>
        )}

        {!hasPosts && (
          <div className="flex flex-col items-center justify-center gap-8 border-dashed border-2 border-gray-400 p-8 md:p-12 rounded-lg">
            <InboxIcon className="size-12 text-cyan-100" />

            <p className="text-body-md text-gray-300">Nenhum post encontrado</p>
          </div>
        )}
      </div>
    </div>
  )
}
