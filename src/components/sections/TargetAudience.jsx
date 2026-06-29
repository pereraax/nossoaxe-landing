import { Check } from 'lucide-react'
import { FadeUp } from '../ui/Animate'
import SectionTitle from '../ui/SectionTitle'

const audience = [
  'Quem deseja organizar seus estudos.',
  'Quem procura um guia prático.',
  'Quem busca consulta rápida.',
  'Quem gosta de materiais organizados.',
  'Quem deseja aprender mais sobre o tema.',
]

export default function TargetAudience() {
  return (
    <section className="section-padding section-textured">
      <div className="container-wide">
        <FadeUp>
          <SectionTitle
            eyebrow="Público"
            title="Para quem é"
            subtitle="Ideal para quem valoriza organização, tradição e praticidade."
          />
        </FadeUp>

        <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
          {audience.map((item, i) => (
            <FadeUp key={item} delay={i * 0.08}>
              <div className="flex items-start gap-4 rounded-2xl border border-green/8 bg-white p-5 md:p-6 shadow-soft transition-shadow hover:shadow-card">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </div>
                <p className="text-sm md:text-base leading-relaxed text-text">{item}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
