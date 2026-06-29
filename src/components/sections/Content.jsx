import { FadeUp } from '../ui/Animate'
import Button from '../ui/Button'
import GoldIcon from '../ui/GoldIcon'
import PremiumImage from '../ui/PremiumImage'
import SectionTitle from '../ui/SectionTitle'
import { PRICE } from '../../config/checkout'
import { IMAGES } from '../../config/assets'

const benefits = [
  { icon: 'prosperidade', label: 'Prosperidade' },
  { icon: 'protecao', label: 'Proteção' },
  { icon: 'amor', label: 'Amor' },
  { icon: 'trabalho', label: 'Trabalho' },
  { icon: 'banhos', label: 'Banhos' },
  { icon: 'defumacoes', label: 'Defumações' },
]

const products = [
  {
    title: 'Kit Guia Prático de Ebós e Banhos',
    image: IMAGES.mockupKit,
    originalPrice: PRICE.kitOriginal,
    items: [
      'Ebós para Prosperidade',
      'Amor',
      'Trabalho',
      'Proteção',
      'Casa',
      'Banhos',
      'Defumações',
      'Oferendas',
    ],
    alignRight: false,
  },
  {
    title: 'Guia das Ervas Sagradas',
    badge: 'Bônus',
    image: IMAGES.mockupErvas,
    originalPrice: PRICE.ervasOriginal,
    items: ['Ervas', 'Combinações', 'Conservação', 'Chás', 'Banhos', 'Dicas'],
    alignRight: true,
  },
]

export default function Content() {
  return (
    <section id="conteudo" className="section-padding">
      <div className="container-wide">
        <FadeUp>
          <SectionTitle
            eyebrow="Conteúdo"
            title="O que você recebe"
            subtitle="Dois materiais completos, cuidadosamente organizados para consulta rápida."
          />
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="grid grid-cols-3 gap-6 sm:grid-cols-6 md:gap-8">
            {benefits.map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 text-center">
                <GoldIcon name={icon} />
                <span className="text-xs font-medium text-green md:text-sm">{label}</span>
              </div>
            ))}
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
          {products.map((product, i) => (
            <FadeUp key={product.title} delay={0.1 + i * 0.08}>
              <article className="flex h-full flex-col">
                <div className="mb-6">
                  {product.badge && (
                    <span className="mb-4 inline-block rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
                      {product.badge}
                    </span>
                  )}
                  <PremiumImage
                    src={product.image}
                    alt={product.title}
                    width={800}
                    height={1066}
                    className={`w-full max-w-xs md:max-w-sm ${
                      product.alignRight ? 'ml-auto block' : 'mx-auto block'
                    }`}
                  />
                </div>
                <div className="flex flex-1 flex-col rounded-3xl border border-green/8 bg-white/80 p-6 shadow-soft md:p-8">
                  <h3 className="font-heading text-xl md:text-2xl">{product.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">
                    Valor:{' '}
                    <span className="line-through text-text-muted/70">{product.originalPrice}</span>
                  </p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {product.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-text md:text-base"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2}>
          <div className="mx-auto mt-10 max-w-md rounded-3xl border border-green/10 bg-white p-8 shadow-card md:p-10">
            <div className="space-y-3 text-sm md:text-base">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-text-muted">Kit Principal</span>
                <span className="font-medium">{PRICE.kitOriginal}</span>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-text-muted">
                  <span className="mr-1 text-gold">+</span>
                  Guia das Ervas
                </span>
                <span className="font-medium">{PRICE.ervasOriginal}</span>
              </div>
              <div className="border-t border-green/10 pt-3">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-heading text-lg">Valor Total</span>
                  <span className="line-through text-text-muted">{PRICE.totalOriginal}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-green p-6 text-center text-white">
              <p className="text-xs uppercase tracking-widest text-white/70">Hoje</p>
              <p className="mt-1 font-heading text-4xl font-bold">{PRICE.current}</p>
              <p className="mt-2 text-sm text-gold-light">Economia de {PRICE.savings}</p>
            </div>

            <div className="mt-6 flex justify-center">
              <Button>Quero meu kit</Button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
