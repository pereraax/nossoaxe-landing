import AssetImage from '../ui/AssetImage'
import PriceCard from '../ui/PriceCard'
import Reveal, { RevealGroup } from '../ui/Reveal'
import { SectionLabel, SectionTitle, SectionSubtitle } from '../ui/SectionLabel'
import { IMAGES } from '../../config/assets'
import { PRICE } from '../../config/checkout'

const reminders = [
  'Kit completo + bônus das Ervas Sagradas',
  'Acesso imediato após o pagamento',
  'Garantia de 7 dias',
  `Investimento de apenas ${PRICE.current}`,
]

export default function FinalCTA() {
  return (
    <section id="cta-final" className="section-gap overflow-x-clip">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Sua decisão</SectionLabel>
          <SectionTitle>O conhecimento organizado que você procurava</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Dois guias completos, consulta rápida no celular e garantia de 7 dias —
            por um investimento que não condiz com o valor entregue.
          </SectionSubtitle>
        </Reveal>

        <RevealGroup
          as="ul"
          className="mx-auto mt-6 flex w-fit max-w-full flex-col gap-3 sm:mt-7 sm:gap-3.5"
        >
          {reminders.map((item) => (
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

        <div className="mt-6 grid items-center gap-8 sm:mt-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-14">
          <Reveal className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <img
              src={IMAGES.decor.faixa}
              alt=""
              aria-hidden
              className="mx-auto mb-3 h-2.5 w-full max-w-md object-cover object-center opacity-75 sm:h-3"
            />

            <div className="relative flex justify-center px-2 sm:px-4">
              <img
                src={IMAGES.decor.florMacrame}
                alt=""
                aria-hidden
                className="pointer-events-none absolute -left-2 top-1/2 hidden h-24 w-auto -translate-y-1/2 opacity-55 sm:block md:h-28 lg:-left-6 lg:h-32"
              />
              <img
                src={IMAGES.decor.florMacrame}
                alt=""
                aria-hidden
                className="pointer-events-none absolute -right-2 top-1/2 hidden h-24 w-auto -translate-y-1/2 -scale-x-100 opacity-55 sm:block md:h-28 lg:-right-6 lg:h-32"
              />

              <span
                className="pointer-events-none absolute left-1/2 top-[58%] -z-10 h-[72%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/18 blur-3xl"
                aria-hidden
              />

              <AssetImage
                src={IMAGES.hero.mockup}
                alt="Kit NossoAxé — guias de Ebós, Banhos e Ervas Sagradas"
                width={1920}
                height={1080}
                className="relative z-[1] block h-auto w-full max-w-[min(100%,22rem)] object-contain drop-shadow-[0_28px_56px_rgba(33,67,50,0.22)] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
              />
            </div>

            <img
              src={IMAGES.decor.faixa}
              alt=""
              aria-hidden
              className="mx-auto mt-3 h-2 w-full max-w-sm rotate-180 object-cover object-center opacity-60 sm:h-2.5"
            />
          </Reveal>

          <Reveal delay={50} className="mx-auto w-full max-w-lg lg:max-w-none">
            <PriceCard buttonText="Quero meu kit agora" variant="final" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
