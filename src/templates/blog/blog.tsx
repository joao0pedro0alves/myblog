import { CallToAction } from '../landing-page/sections'
import { BlogList } from './blog-list'

export function Blog() {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <BlogList />

      <CallToAction />
    </article>
  )
}
