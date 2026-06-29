import { BookOpen, Search, Image, MessageCircle, Layers } from 'lucide-react'
import Reveal, { RevealGroup } from '../ui/Reveal'
import PricingCTA from '../ui/PricingCTA'
import { SectionLabel, SectionTitle, SectionSubtitle } from '../ui/SectionLabel'

const items = [
  {
    icon: Layers,
    title: 'Conteúdo organizado',
    text: 'Tudo estruturado por finalidade, facilitando a navegação entre ebós, banhos e ervas.',
  },
  {
    icon: Search,
    title: 'Consulta rápida',
    text: 'Encontre o que precisa em segundos — ideal para o momento em que a orientação é necessária.',
  },
  {
    icon: Image,
    title: 'Material ilustrado',
    text: 'Recursos visuais que tornam o conteúdo mais claro, especialmente para quem está aprendendo.',
  },
  {
    icon: MessageCircle,
    title: 'Linguagem acessível',
    text: 'Textos respeitosos e diretos, sem jargões desnecessários ou promessas vazias.',
  },
  {
    icon: BookOpen,
    title: 'Tudo reunido',
    text: 'Dois guias completos em um único kit — sem precisar buscar em dezenas de fontes diferentes.',
  },
]

  function ItemDivider() {
  return (
    <div className="benefit-divider mx-auto w-full max-w-[7.5rem] py-1 sm:max-w-[9rem]" aria-hidden>
      <span className="benefit-divider-ornament" />
    </div>
  )
}

export default function Diferenciais() {
  return (
    <section className="section-gap">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Diferenciais</SectionLabel>
          <SectionTitle>Por que este material é diferente</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Mais do que informação: um repertório confiável, pensado para quem
            leva a espiritualidade a sério.
          </SectionSubtitle>
        </Reveal>

        <RevealGroup className="mx-auto mt-8 flex max-w-2xl flex-col sm:mt-10">
          {items.map((item, i) => (
            <Reveal key={item.title} className="group overflow-visible">
              <article className="flex flex-col items-center px-4 py-6 text-center sm:py-7">
                <div className="float-icon-shell mb-5 sm:mb-6">
                  <span className="float-icon-glow" aria-hidden />
                  <item.icon
                    className="float-icon-mark h-11 w-11 text-gold drop-shadow-[0_8px_22px_rgba(184,137,45,0.28)] sm:h-12 sm:w-12 md:h-[3.25rem] md:w-[3.25rem]"
                    strokeWidth={1.65}
                  />
                </div>

                <h3 className="font-display text-xl font-bold text-green-deep sm:text-[1.35rem]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-md text-sm font-medium leading-relaxed text-green-deep/85 sm:text-[0.9375rem]">
                  {item.text}
                </p>
              </article>

              {i < items.length - 1 && <ItemDivider />}
            </Reveal>
          ))}
        </RevealGroup>

        <Reveal delay={60}>
          <PricingCTA className="mt-8 sm:mt-10" />
        </Reveal>
      </div>
    </section>
  )
}
