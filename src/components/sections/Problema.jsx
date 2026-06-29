import { Search, Shuffle, Clock } from 'lucide-react'
import Reveal, { RevealGroup } from '../ui/Reveal'
import { SectionLabel, SectionTitle, SectionSubtitle } from '../ui/SectionLabel'

const pains = [
  {
    icon: Search,
    title: 'Informação espalhada',
    text: 'Conteúdos dispersos em grupos, vídeos e conversas — difícil saber o que é confiável.',
  },
  {
    icon: Shuffle,
    title: 'Orientações contraditórias',
    text: 'Cada fonte diz algo diferente, gerando dúvida sobre ervas, preparos e finalidades.',
  },
  {
    icon: Clock,
    title: 'Tempo perdido na busca',
    text: 'Quando você mais precisa de uma resposta, perde minutos — ou horas — procurando.',
  },
]

export default function Problema() {
  return (
    <section className="section-gap">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>O desafio</SectionLabel>
          <SectionTitle>Quando a busca gera insegurança</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Muitas pessoas interessadas em espiritualidade enfrentam o mesmo
            obstáculo: encontrar informação confiável, no momento em que precisam.
          </SectionSubtitle>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-6 md:grid-cols-3 md:gap-5">
          {pains.map((item) => (
            <Reveal key={item.title} className="overflow-visible">
              <article className="group flex h-full flex-col items-center overflow-visible px-4 pb-2 pt-4 text-center sm:px-6">
                <div className="float-icon-shell mb-6">
                  <span className="float-icon-glow" aria-hidden />
                  <item.icon
                    className="float-icon-mark h-11 w-11 text-gold drop-shadow-[0_8px_20px_rgba(184,137,45,0.22)] sm:h-12 sm:w-12"
                    strokeWidth={1.65}
                  />
                </div>

                <h3 className="font-display text-xl font-bold text-green-deep sm:text-[1.35rem]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[16rem] text-sm font-medium leading-relaxed text-green-deep/85 sm:text-[0.9375rem]">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </RevealGroup>

        <Reveal className="mx-auto mt-8 max-w-2xl text-center" delay={80}>
          <p className="font-subtitle text-lg leading-relaxed text-green/80 md:text-xl">
            O excesso de informações, sem organização, afasta a clareza — e a
            confiança necessária para praticar com respeito.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
