import Image from 'next/image'

const customerStory = [
  {
    author: {
      name: 'Annette Bones',
      role: 'CEO na Anne Corp',
      avatar: '/assets/avatars/customer-01.png',
    },
    content:
      'Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.',
  },
  {
    author: {
      name: 'Jacob Jones',
      role: 'CEO na JJ Org',
      avatar: '/assets/avatars/customer-02.png',
    },
    content:
      'Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!',
  },
]

export function CustomerStorySection() {
  return (
    <section className="container py-8  md:py-10">
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-gray-100 text-heading-xl font-sans">
          Quem utiliza, aprova!
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {customerStory.map((story) => {
            return (
              <div
                className="bg-gray-600 border border-gray-400 flex flex-col p-6 md:p-12 gap-6 rounded-lg justify-between"
                key={story.author.name}
              >
                <p className="text-gray-200 text-balance text-body-md italic">
                  {story.content}
                </p>

                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={story.author.avatar}
                      alt={story.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <strong className="text-gray-200 text-sm">
                      {story.author.name}
                    </strong>

                    <span className="text-gray-300 text-body-xs">
                      {story.author.role}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
