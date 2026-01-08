import { allPosts } from 'contentlayer/generated'
import type { GetStaticProps } from 'next'
import { BlogPage as Blog, type BlogPageProps } from '@/templates/blog'

export default function BlogPage({ posts }: BlogPageProps) {
  return <Blog posts={posts} />
}

export const getStaticProps = (async () => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return {
    props: {
      posts: sortedPosts,
    },
  }
}) satisfies GetStaticProps<BlogPageProps>
