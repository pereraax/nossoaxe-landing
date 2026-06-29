import { FadeUp } from '../ui/Animate'
import PremiumImage from '../ui/PremiumImage'
import SectionTitle from '../ui/SectionTitle'
import { IMAGES } from '../../config/assets'

export default function Proof() {
  return (
    <section id="prova" className="section-padding bg-white/50">
      <div className="container-wide">
        <FadeUp>
          <SectionTitle
            eyebrow="Prévia"
            title="Veja por dentro"
            subtitle="Páginas organizadas, com visual elegante e fácil leitura."
          />
        </FadeUp>

        <FadeUp delay={0.08}>
          <PremiumImage
            src={IMAGES.galeriaPremium}
            alt="Galeria premium com páginas do material sobre mesa de madeira"
            width={1400}
            height={933}
            className="mx-auto w-full max-w-[900px] shadow-elevated"
          />
        </FadeUp>

        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 md:gap-8">
          <FadeUp delay={0.12}>
            <PremiumImage
              src={IMAGES.previewEbos}
              alt="Prévia das páginas do Guia Prático de Ebós e Banhos"
              width={1400}
              height={788}
              className="mx-auto w-full shadow-card"
            />
          </FadeUp>
          <FadeUp delay={0.16}>
            <PremiumImage
              src={IMAGES.previewErvas}
              alt="Prévia das páginas do Guia das Ervas Sagradas"
              width={1400}
              height={788}
              className="mx-auto w-full shadow-card"
            />
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
