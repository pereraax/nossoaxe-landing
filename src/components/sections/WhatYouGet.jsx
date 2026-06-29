import { FadeUp } from '../ui/Animate'
import PremiumImage from '../ui/PremiumImage'
import SectionTitle from '../ui/SectionTitle'
import { PRICE } from '../../config/checkout'
import { IMAGES } from '../../config/assets'

const products = [
  {
    title: 'Kit Guia Prático de Ebós e Banhos',
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
    isBonus: false,
  },
  {
    title: 'Guia das Ervas Sagradas',
    originalPrice: PRICE.ervasOriginal,
    items: ['Ervas', 'Combinações', 'Conservação', 'Chás', 'Banhos', 'Dicas'],
    isBonus: true,
  },
]

export default function WhatYouGet() {
  return (
    <section id="conteudo" className="section-padding section-textured">
      <div className="container-wide">
        <FadeUp>
          <SectionTitle
            eyebrow="Conteúdo"
            title="O que você recebe"
            subtitle="Dois materiais completos, cuidadosamente organizados para consulta rápida."
          />
        </FadeUp>

        <FadeUp delay={0.08}>
          <PremiumImage
            src={IMAGES.kitCompleto}
            alt="Kit Completo — Guia Prático de Ebós e Banhos e Guia das Ervas Sagradas"
            width={1024}
            height={682}
            className="mx-auto w-full max-w-[900px] shadow-elevated"
          />
        </FadeUp>

        <FadeUp delay={0.12}>
          <PremiumImage
            src={IMAGES.galeriaPremium}
            alt="Galeria premium com páginas do material sobre mesa de madeira"
            width={1024}
            height={682}
            className="mx-auto mt-8 w-full max-w-[900px] shadow-card"
          />
        </FadeUp>

        <div className="mt-8 grid gap-8 md:mt-10 md:gap-10 lg:grid-cols-2">
          {products.map((product, i) => (
            <FadeUp key={product.title} delay={i * 0.12}>
              <article className="overflow-hidden rounded-3xl border border-green/8 bg-white shadow-card">
                {product.isBonus && (
                  <div className="relative bg-cream p-6 md:p-8">
                    <PremiumImage
                      src={IMAGES.mockupErvasSagradas}
                      alt={product.title}
                      width={1024}
                      height={682}
                      className="ml-auto w-full max-w-sm shadow-soft"
                    />
                  </div>
                )}
                <div className="p-6 md:p-8">
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-green">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">
                    Valor:{' '}
                    <span className="line-through text-text-muted/70">
                      {product.originalPrice}
                    </span>
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {product.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm md:text-base text-text"
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
      </div>
    </section>
  )
}
