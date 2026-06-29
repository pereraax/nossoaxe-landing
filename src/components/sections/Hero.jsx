import Reveal from '../ui/Reveal'
import AssetImage from '../ui/AssetImage'
import Button from '../ui/Button'
import { PRICE_SECTION_ID } from '../../config/checkout'
import PriceCard from '../ui/PriceCard'
import HeroTrustBar from '../ui/HeroTrustBar'
import HeroPlant from '../ui/HeroMockupPlants'
import { IMAGES } from '../../config/assets'

export default function Hero() {
  return (
    <section className="relative touch-pan-y overflow-x-clip pb-12 md:pb-16 lg:pb-20">
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
            className="block h-auto w-full max-w-[min(100%,24rem)] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
          />
        </Reveal>
      </div>

      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center md:max-w-4xl">
          <Reveal className="mt-3 md:mt-4" delay={40}>
            <span className="inline-block rounded-full border border-gold/40 bg-gold/12 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-gold shadow-sm">
              Kit NossoAxé
            </span>

            <h1 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] text-green sm:text-[2.35rem] md:mt-5 md:text-5xl md:leading-[1.08] lg:text-[3.125rem]">
              O{' '}
              <span className="relative inline-block text-gold">
                Kit Completo
                <span
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gold/35"
                  aria-hidden
                />
              </span>{' '}
              <br className="hidden sm:block" />
              <span className="sm:mt-1 sm:inline-block">
                de Ebós, Banhos e Ervas Sagradas
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl font-subtitle text-xl font-medium leading-snug text-green/85 md:mt-5 md:text-2xl md:leading-snug">
              Tudo organizado em um único material para você consultar{' '}
              <span className="relative inline-block font-bold text-gold">
                sempre que precisar
                <span
                  className="absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full bg-gold/40"
                  aria-hidden
                />
              </span>
              .
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-5 md:mt-6" delay={70}>
        <HeroTrustBar />
      </Reveal>

      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center md:max-w-4xl">
          <Reveal className="mt-6 flex justify-center md:mt-8" delay={90}>
            <Button href={PRICE_SECTION_ID} size="xl" variant="green">
              Acessar o kit agora
            </Button>
          </Reveal>

          <Reveal className="mx-auto mt-10 max-w-lg md:mt-12 lg:max-w-xl" delay={110}>
            <PriceCard id="preco" variant="hero" buttonText="Quero receber agora" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
