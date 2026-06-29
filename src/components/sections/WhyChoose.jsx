import { Check, X } from 'lucide-react'
import FadeIn from '../ui/FadeIn'
import { SectionLabel, SectionTitle, SectionSubtitle } from '../ui/SectionLabel'

const rows = [
  { pain: 'Informação espalhada', gain: 'Tudo reunido em um só lugar' },
  { pain: 'Horas de pesquisa', gain: 'Consulta rápida' },
  { pain: 'Conteúdo desorganizado', gain: 'Organização por finalidade' },
  { pain: 'Texto difícil de entender', gain: 'Material ilustrado' },
  { pain: 'Leitura cansativa', gain: 'Fácil leitura' },
  { pain: 'Espera por entrega', gain: 'Acesso imediato' },
]

export default function WhyChoose() {
  return (
    <section className="section-gap bg-white/30">
      <div className="container-page">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <SectionLabel>Diferencial</SectionLabel>
          <SectionTitle>Por que escolher o NossoAxé</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Compare a experiência de buscar informações espalhadas com ter tudo
            organizado e pronto para usar.
          </SectionSubtitle>
        </FadeIn>

        <FadeIn delay={0.1} className="mx-auto mt-14 max-w-3xl">
          <div className="overflow-hidden rounded-3xl border border-green/8 bg-card shadow-card">
            <div className="grid grid-cols-2 border-b border-green/8 bg-green/3">
              <div className="px-6 py-5 text-center">
                <p className="text-sm font-medium text-muted md:text-base">
                  Pesquisar em vários materiais
                </p>
              </div>
              <div className="border-l border-green/8 px-6 py-5 text-center">
                <p className="font-display text-xl font-semibold text-green md:text-2xl">
                  NossoAxé
                </p>
              </div>
            </div>

            <ul>
              {rows.map((row, i) => (
                <li
                  key={row.gain}
                  className={`grid grid-cols-2 ${i < rows.length - 1 ? 'border-b border-green/6' : ''}`}
                >
                  <div className="flex items-center gap-3 px-6 py-4">
                    <X className="h-4 w-4 shrink-0 text-muted/40" strokeWidth={2} />
                    <span className="text-xs text-muted md:text-sm">{row.pain}</span>
                  </div>
                  <div className="flex items-center gap-3 border-l border-green/6 px-6 py-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15">
                      <Check className="h-3.5 w-3.5 text-gold" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm font-medium text-green md:text-base">{row.gain}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
