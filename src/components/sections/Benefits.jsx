import AssetImage from '../ui/AssetImage'
import Reveal, { RevealGroup } from '../ui/Reveal'
import CheckoutCTA from '../ui/CheckoutCTA'
import { SectionLabel, SectionTitle, SectionSubtitle } from '../ui/SectionLabel'
import { IMAGES } from '../../config/assets'

const benefits = [
  {
    icon: IMAGES.icons.prosperidade,
    title: 'Prosperidade',
    description:
      'Referências sobre ebós, oferendas e práticas voltadas à abertura de caminhos — reunidas com clareza e respeito à tradição.',
  },
  {
    icon: IMAGES.icons.protecao,
    title: 'Proteção',
    description:
      'Orientações sobre limpeza espiritual, defesa energética e cuidados do dia a dia, organizadas para consulta imediata.',
  },
  {
    icon: IMAGES.icons.amor,
    title: 'Amor',
    description:
      'Banhos, ervas e práticas relacionadas à harmonização afetiva, apresentadas de forma acessível e bem estruturada.',
  },
  {
    icon: IMAGES.icons.trabalho,
    title: 'Trabalho',
    description:
      'Conteúdos sobre prosperidade profissional e fortalecimento nos negócios, com indicações práticas e objetivas.',
  },
  {
    icon: IMAGES.icons.banhos,
    title: 'Banhos',
    description:
      'Receitas e finalidades organizadas por necessidade, facilitando encontrar o banho certo no momento certo.',
  },
  {
    icon: IMAGES.icons.defumacoes,
    title: 'Defumações',
    description:
      'Combinações de ervas e formas de uso para purificação de ambientes, com instruções claras e ilustradas.',
  },
]

function BenefitDivider() {
  return (
    <div className="benefit-divider" aria-hidden>
      <span className="benefit-divider-ornament" />
    </div>
  )
}

export default function Benefits() {
  return (
    <section id="beneficios" className="relative section-gap overflow-visible">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-gold/[0.04] to-cream"
        aria-hidden
      />

      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Benefícios</SectionLabel>
          <SectionTitle>Saberes ancestrais ao seu alcance</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Seis dimensões essenciais da espiritualidade, reunidas em um material
            pensado para quem busca orientação com respeito e organização.
          </SectionSubtitle>
        </Reveal>

        <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {benefits.map((item) => (
            <Reveal key={item.title} className="overflow-visible">
              <article className="benefit-card group flex h-full flex-col items-center overflow-visible px-1 text-center sm:px-2">
                <div className="float-icon-shell float-icon-shell--wide">
                  <span className="float-icon-glow" aria-hidden />
                  <AssetImage
                    src={item.icon}
                    alt=""
                    aria-hidden
                    width={280}
                    height={320}
                    className="float-icon-img block h-auto max-h-[7.5rem] w-auto max-w-[11rem] object-contain object-center sm:max-h-[8.5rem] sm:max-w-[12rem]"
                  />
                </div>

                <BenefitDivider />

                <h3 className="font-display text-[1.35rem] font-bold leading-tight text-green-deep sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-2.5 max-w-[19rem] text-[0.9375rem] font-medium leading-[1.65] text-green-deep/88 sm:mt-3 sm:max-w-[20rem] sm:text-base sm:leading-[1.7]">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </RevealGroup>

        <Reveal delay={60}>
          <CheckoutCTA className="mt-7 sm:mt-8" fullWidth />
        </Reveal>
      </div>
    </section>
  )
}
