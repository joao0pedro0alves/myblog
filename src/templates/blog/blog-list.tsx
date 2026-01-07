import { Search } from '@/components/search'
import { PostCard } from './components/post-card'

export function BlogList() {
  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header>
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4">
            <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
              BLOG
            </span>

            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100 font-sans">
              Dicas e estratégias para impulsionar seu negócio
            </h1>
          </div>

          <Search />
        </div>
      </header>

      <PostCard
        slug="transformando-seu-negocio"
        title="Transformando seu negócio em uma loja virtual"
        description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfeita para você. Criar uma loja virtual de sucesso nunca foi tão fácil. Com nossa plataforma intuitiva, você pode criar um site profissional para sua loja em minutos, sem precisar de conhecimentos técnicos."
        date="20/11/2024"
        image="/assets/posts/primeiro-post-example.png"
        author={{
          avatar: '/assets/avatars/customer-01.png',
          name: 'Aspen Dokidis',
        }}
      />
    </div>
  )
}
