import AssetImage from '../ui/AssetImage'
import DecorGreenBand from '../ui/DecorGreenBand'
import PricingCTA from '../ui/PricingCTA'
import Reveal, { RevealGroup } from '../ui/Reveal'
import { SectionLabel, SectionSubtitle } from '../ui/SectionLabel'
import { IMAGES } from '../../config/assets'

const highlights = [
  'Tudo reunido em um único kit',
  'Conteúdo ilustrado e visual',
  'Linguagem simples e respeitosa',
  'Consulta rápida no celular',
  'Material organizado por finalidade',
]

export default function Solucao() {
  return (
    <section className="section-gap overflow-x-clip bg-white/30">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel>A solução</SectionLabel>
          </Reveal>

          <Reveal delay={40}>
            <h2 className="font-display text-[2rem] font-bold leading-[1.12] text-green-deep sm:text-4xl lg:text-[2.75rem]">
              O{' '}
              <span className="relative inline-block text-gold">
                Kit NossoAxé
                <span
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gold/35"
                  aria-hidden
                />
              </span>
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <SectionSubtitle className="mx-auto mt-4 md:mt-5">
              Um material digital pensado para quem deseja consultar ebós, banhos,
              ervas e defumações com clareza — sem perder tempo procurando.
            </SectionSubtitle>
          </Reveal>
        </div>

        <RevealGroup
          as="ul"
          className="mx-auto mt-8 flex w-fit max-w-full flex-col gap-3.5 sm:mt-9 sm:gap-4"
        >
          {highlights.map((item) => (
            <Reveal key={item} as="li">
              <div className="flex items-center gap-3 sm:gap-3.5">
                <AssetImage
                  src={IMAGES.icons.checkMarca}
                  alt=""
                  aria-hidden
                  width={1350}
                  height={1350}
                  className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"
                />
                <span className="text-left text-sm font-semibold leading-snug text-green-deep sm:text-[0.9375rem]">
                  {item}
                </span>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </div>

      <Reveal
        delay={50}
        className="relative left-1/2 mt-8 w-screen max-w-none -translate-x-1/2 sm:mt-10 lg:mt-12"
      >
        <div className="relative overflow-hidden shadow-[0_28px_72px_rgba(21,41,33,0.22)]">
          <DecorGreenBand />

          <div className="relative bg-green-deep">
            <img
              src={IMAGES.decor.florMacrame}
              alt=""
              aria-hidden
              className="pointer-events-none absolute -left-1 top-1/2 z-[1] hidden h-20 w-auto -translate-y-1/2 opacity-70 sm:block md:h-24 lg:h-28"
            />
            <img
              src={IMAGES.decor.florMacrame}
              alt=""
              aria-hidden
              className="pointer-events-none absolute -right-1 top-1/2 z-[1] hidden h-20 w-auto -translate-y-1/2 -scale-x-100 opacity-70 sm:block md:h-24 lg:h-28"
            />

            <AssetImage
              src={IMAGES.kit.completo}
              alt="Mockup do Kit NossoAxé — guias digitais organizados"
              width={1400}
              height={900}
              className="relative z-[2] block h-auto w-full object-cover object-center"
            />
          </div>

          <DecorGreenBand flip />
        </div>
      </Reveal>

      <Reveal delay={60} className="container-page">
        <PricingCTA className="mt-8 sm:mt-10" />
      </Reveal>
    </section>
  )
}
