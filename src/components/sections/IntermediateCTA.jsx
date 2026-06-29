import { FadeUp } from '../ui/Animate'
import Button from '../ui/Button'
import PremiumImage from '../ui/PremiumImage'
import { PRICE } from '../../config/checkout'
import { IMAGES } from '../../config/assets'

export default function IntermediateCTA() {
  return (
    <section className="relative overflow-hidden section-padding">
      <div className="absolute inset-0" aria-hidden>
        <PremiumImage
          src={IMAGES.bgCta}
          alt=""
          width={1024}
          height={576}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="container-narrow relative z-10 text-center">
        <FadeUp>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Leve hoje mesmo o seu Kit completo.
          </h2>

          <PremiumImage
            src={IMAGES.kitCompleto}
            alt="Kit Completo NossoAxé"
            width={1024}
            height={682}
            className="mx-auto mt-8 w-full max-w-xl shadow-elevated md:max-w-2xl"
          />

          <div className="mt-8 inline-block rounded-2xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-sm">
            <p className="font-heading text-4xl md:text-5xl font-bold text-white">
              {PRICE.current}
            </p>
            <p className="mt-2 text-sm text-white/70">ou {PRICE.installment}</p>
          </div>

          <div className="mt-8">
            <Button variant="gold" size="lg" className="min-w-[280px]">
              Quero Receber Agora
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
