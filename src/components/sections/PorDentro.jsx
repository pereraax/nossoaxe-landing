import Reveal from '../ui/Reveal'
import PreviewCarousel from '../ui/PreviewCarousel'
import PricingCTA from '../ui/PricingCTA'
import { SectionLabel, SectionSubtitle } from '../ui/SectionLabel'
import { IMAGES } from '../../config/assets'

export default function PorDentro() {
  return (
    <section id="por-dentro" className="relative overflow-x-clip section-gap-sm md:section-gap">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
        aria-hidden
      />

      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Por dentro</SectionLabel>

          <h2 className="font-display text-3xl font-bold leading-[1.12] text-green-deep md:text-4xl lg:text-[2.75rem]">
            Veja como é{' '}
            <span className="relative inline-block text-gold">
              por dentro!
              <span
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gold/35"
                aria-hidden
              />
            </span>
          </h2>

          <SectionSubtitle className="mx-auto">
            Páginas reais do material — organizadas, ilustradas e prontas para consulta
            imediata no celular ou no computador.
          </SectionSubtitle>
        </Reveal>

        <Reveal className="relative left-1/2 mt-8 w-screen -translate-x-1/2 md:mt-10" delay={50}>
          <PreviewCarousel slides={IMAGES.porDentro.paginas} />
        </Reveal>

        <Reveal delay={70}>
          <PricingCTA className="mt-8 sm:mt-10" />
        </Reveal>
      </div>
    </section>
  )
}
