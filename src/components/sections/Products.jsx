import Button from '../ui/Button'
import SectionHeader from '../ui/SectionHeader'
import { PRICE } from '../../config/checkout'
import { IMAGES } from '../../config/assets'

const kitItems = [
  'Ebós para Prosperidade',
  'Amor',
  'Trabalho',
  'Proteção',
  'Casa',
  'Banhos',
  'Defumações',
  'Oferendas',
]

const bonusItems = ['Ervas', 'Combinações', 'Conservação', 'Chás', 'Banhos', 'Dicas']

export default function Products() {
  return (
    <section id="conteudo" className="section bg-surface">
      <div className="wrap">
        <SectionHeader
          label="Conteúdo"
          title="O que você recebe"
          subtitle="Dois materiais completos por um preço especial."
        />

        <div className="space-y-6">
          <article className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
            <img
              src={IMAGES.mockupKit}
              alt="Kit Guia Prático de Ebós e Banhos"
              width={800}
              height={1066}
              className="mx-auto w-full max-w-xs object-contain p-6 pb-0 md:max-w-sm"
              loading="lazy"
              decoding="async"
            />
            <div className="p-6 pt-4 md:p-8">
              <h3 className="text-lg font-bold md:text-xl">Kit Guia Prático de Ebós e Banhos</h3>
              <p className="mt-1 text-sm text-muted">
                Valor: <span className="line-through">{PRICE.kitOriginal}</span>
              </p>
              <ul className="mt-4 space-y-2">
                {kitItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-text">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
            <div className="flex justify-end p-6 pb-0">
              <span className="mr-auto rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                Bônus
              </span>
            </div>
            <img
              src={IMAGES.mockupErvas}
              alt="Guia das Ervas Sagradas"
              width={800}
              height={1066}
              className="ml-auto w-full max-w-xs object-contain px-6 md:max-w-sm"
              loading="lazy"
              decoding="async"
            />
            <div className="p-6 pt-4 md:p-8">
              <h3 className="text-lg font-bold md:text-xl">Guia das Ervas Sagradas</h3>
              <p className="mt-1 text-sm text-muted">
                Valor: <span className="line-through">{PRICE.ervasOriginal}</span>
              </p>
              <ul className="mt-4 space-y-2">
                {bonusItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-text">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-white p-6 shadow-card md:p-8">
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted">Kit Principal</span>
              <span className="line-through text-muted">{PRICE.kitOriginal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Guia das Ervas</span>
              <span className="line-through text-muted">{PRICE.ervasOriginal}</span>
            </div>
            <div className="flex justify-between border-t border-border pt-3">
              <span className="font-semibold text-green">Total</span>
              <span className="line-through text-muted">{PRICE.totalOriginal}</span>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-green p-5 text-center text-white">
            <p className="text-xs font-medium uppercase tracking-wider text-white/70">Hoje</p>
            <p className="mt-1 font-extrabold text-3xl">{PRICE.current}</p>
            <p className="mt-1 text-sm text-gold-light">Economia de {PRICE.savings}</p>
          </div>

          <div className="mt-6">
            <Button>Quero meu kit completo</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
