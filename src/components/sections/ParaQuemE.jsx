import AssetImage from '../ui/AssetImage'
import Reveal, { RevealGroup } from '../ui/Reveal'
import PricingCTA from '../ui/PricingCTA'
import { SectionLabel, SectionTitle, SectionSubtitle } from '../ui/SectionLabel'
import { IMAGES } from '../../config/assets'

const audience = [
  'Quem deseja aprender com respeito à tradição',
  'Quem já pratica e busca referência confiável',
  'Quem valoriza conteúdo organizado e acessível',
  'Quem precisa consultar rapidamente no dia a dia',
  'Quem deseja compreender melhor ervas e práticas tradicionais',
]

export default function ParaQuemE() {
  return (
    <section className="section-gap">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Para quem é</SectionLabel>
          <SectionTitle>Ideal para quem busca clareza</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Se você se identifica com a espiritualidade afro-brasileira e deseja
            um material confiável para consulta, este kit foi pensado para você.
          </SectionSubtitle>
        </Reveal>

        <RevealGroup
          as="ul"
          className="mx-auto mt-8 flex w-fit max-w-full flex-col gap-3.5 sm:mt-9 sm:gap-4"
        >
          {audience.map((item) => (
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

        <Reveal delay={60}>
          <PricingCTA className="mt-8 sm:mt-10" />
        </Reveal>
      </div>
    </section>
  )
}
