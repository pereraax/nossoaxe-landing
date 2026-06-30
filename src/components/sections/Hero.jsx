import Reveal from '../ui/Reveal'
import AssetImage from '../ui/AssetImage'
import HeroPriceFocus from '../ui/HeroPriceFocus'
import HeroTrustStrip from '../ui/HeroTrustStrip'
import PriceCard from '../ui/PriceCard'
import HeroPlant from '../ui/HeroMockupPlants'
import { IMAGES } from '../../config/assets'

const heroBadges = [
  'Acesso imediato',
  'PDF Digital',
  'Consulta rápida',
  'Garantia de 7 dias',
]

export default function Hero() {
  return (
    <section className="relative touch-pan-y overflow-x-clip pb-8 md:pb-12 lg:pb-14">
      <div className="container-page relative pt-1 md:pt-2">
        <HeroPlant side="left" />
        <HeroPlant side="right" />

        <Reveal className="relative z-[1] flex justify-center">
          <AssetImage
            src={IMAGES.hero.mockup}
            alt="Kit NossoAxé — guias de Ebós, Banhos e Ervas Sagradas"
            width={1920}
            height={1080}
            priority
            className="block h-auto w-full max-w-[min(100%,29rem)] sm:max-w-xl md:max-w-2xl lg:max-w-[44rem] xl:max-w-[46rem]"
          />
        </Reveal>
      </div>

      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center md:max-w-4xl">
          <Reveal className="mt-3 md:mt-4" delay={30}>
            <span className="inline-block rounded-full border border-gold/40 bg-gold/12 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-gold shadow-sm">
              Kit NossoAxé
            </span>

            <h1 className="mt-3 font-display text-[1.75rem] font-bold leading-[1.12] text-green sm:text-[2.15rem] md:mt-4 md:text-[2.65rem] md:leading-[1.1] lg:text-[2.85rem]">
              Todo o conhecimento sobre Ebós, Banhos e Ervas Sagradas em um único Kit.
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-[0.9375rem] font-medium leading-relaxed text-green/85 sm:mt-4 sm:text-base md:text-lg md:leading-relaxed">
              Receba acesso imediato a dois eBooks ilustrados com orientações organizadas
              sobre ebós, banhos, ervas, defumações e oferendas. Um material prático para
              consultar sempre que precisar.
            </p>

            <ul className="mx-auto mt-4 flex max-w-lg flex-wrap items-center justify-center gap-2 sm:mt-5 sm:gap-2.5">
              {heroBadges.map((badge) => (
                <li
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gold/25 bg-white/50 px-3 py-1.5 text-[11px] font-semibold text-green-deep sm:px-3.5 sm:text-xs"
                >
                  <span className="text-gold" aria-hidden>
                    ✓
                  </span>
                  {badge}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={50}>
            <HeroPriceFocus />
          </Reveal>
        </div>
      </div>

      <Reveal delay={70}>
        <HeroTrustStrip />
      </Reveal>

      <div className="container-page">
        <Reveal className="mx-auto mt-6 max-w-lg md:mt-8 lg:max-w-xl" delay={90}>
          <PriceCard id="preco" variant="hero" buttonText="Quero receber agora" />
        </Reveal>
      </div>
    </section>
  )
}
