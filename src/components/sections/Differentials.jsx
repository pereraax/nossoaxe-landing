import { Check } from 'lucide-react'
import { FadeUp } from '../ui/Animate'
import SectionTitle from '../ui/SectionTitle'

const items = [
  'Organização profissional',
  'Material digital',
  'Fácil consulta',
  'Acesso imediato',
  'Leitura rápida',
  'Compatível com celular',
  'Compatível com computador',
]

export default function Differentials() {
  return (
    <section className="section-padding section-textured bg-white/50">
      <div className="container-narrow">
        <FadeUp>
          <SectionTitle
            eyebrow="Diferenciais"
            title="Por que escolher este kit"
            subtitle="Um material pensado para ser consultado no dia a dia, com clareza e respeito."
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <ul className="mx-auto max-w-lg space-y-4">
            {items.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-4 rounded-xl border border-green/8 bg-cream px-5 py-4 shadow-soft"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </div>
                <span className="text-sm md:text-base text-text">{item}</span>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  )
}
