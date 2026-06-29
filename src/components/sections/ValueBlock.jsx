import { FadeUp } from '../ui/Animate'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'
import { PRICE } from '../../config/checkout'

const lines = [
  { label: 'Kit Principal', value: PRICE.kitOriginal },
  { label: 'Guia das Ervas', value: PRICE.ervasOriginal, prefix: '+' },
]

export default function ValueBlock() {
  return (
    <section className="section-padding section-textured bg-white/50">
      <div className="container-narrow">
        <FadeUp>
          <SectionTitle
            eyebrow="Oferta Especial"
            title="Valor completo do pacote"
            subtitle="Leve os dois materiais por uma fração do valor original."
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mx-auto max-w-md rounded-3xl border border-green/10 bg-cream p-8 md:p-10 shadow-card">
            <div className="space-y-4">
              {lines.map(({ label, value, prefix }) => (
                <div key={label} className="flex items-baseline gap-2 text-sm md:text-base">
                  <span className="shrink-0 text-text-muted">
                    {prefix && (
                      <span className="mr-1 text-gold font-medium">{prefix}</span>
                    )}
                    {label}
                  </span>
                  <span className="flex-1 border-b border-dotted border-green/20 min-w-[1rem]" aria-hidden />
                  <span className="shrink-0 font-medium text-text">{value}</span>
                </div>
              ))}
            </div>

            <div className="my-6 border-t border-green/15" />

            <div className="flex items-baseline gap-2">
              <span className="shrink-0 font-heading text-lg text-green">Valor Total</span>
              <span className="flex-1 border-b border-dotted border-green/20" aria-hidden />
              <span className="shrink-0 font-heading text-lg text-text-muted line-through">
                {PRICE.totalOriginal}
              </span>
            </div>

            <div className="mt-8 rounded-2xl bg-green p-6 text-center text-white">
              <p className="text-xs uppercase tracking-widest text-white/70">Hoje</p>
              <p className="mt-1 font-heading text-4xl md:text-5xl font-bold">
                {PRICE.current}
              </p>
              <p className="mt-3 text-sm text-gold-light">
                Economia de {PRICE.savings}
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <Button>Quero Meu Kit</Button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
