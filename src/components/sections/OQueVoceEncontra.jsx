import { Check } from 'lucide-react'
import Reveal from '../ui/Reveal'
import PricingCTA from '../ui/PricingCTA'
import { SectionLabel, SectionTitle, SectionSubtitle } from '../ui/SectionLabel'

const topics = [
  'Ebós para diferentes finalidades',
  'Banhos espirituais',
  'Defumações',
  'Oferendas',
  'Ervas e propriedades',
  'Combinações',
  'Chás',
  'Formas de preparo',
  'Conservação das ervas',
  'Proteção espiritual',
  'Prosperidade',
  'Limpeza energética',
  'Equilíbrio',
  'Rituais tradicionais',
  'Consulta rápida por finalidade',
]

export default function OQueVoceEncontra() {
  return (
    <section id="conteudo" className="section-gap">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Conteúdo</SectionLabel>
          <SectionTitle>O que você vai encontrar</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Um material amplo e bem estruturado — pensado para ser consultado,
            não apenas lido uma vez.
          </SectionSubtitle>
        </Reveal>

        <ul className="mx-auto mt-8 grid max-w-3xl gap-2.5 sm:grid-cols-2 sm:gap-3">
          {topics.map((topic, i) => (
            <Reveal
              key={topic}
              as="li"
              staggerIndex={i}
              className="flex items-center gap-3 rounded-2xl border border-green/6 bg-card/80 px-5 py-4 transition-colors hover:border-gold/20 hover:bg-white"
            >
              <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
              <span className="text-sm font-medium text-green md:text-base">{topic}</span>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={60}>
          <PricingCTA className="mt-8 sm:mt-10" />
        </Reveal>
      </div>
    </section>
  )
}
