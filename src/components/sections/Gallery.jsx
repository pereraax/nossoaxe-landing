import { FadeUp } from '../ui/Animate'
import PremiumImage from '../ui/PremiumImage'
import SectionTitle from '../ui/SectionTitle'
import { IMAGES } from '../../config/assets'

export default function Gallery() {
  return (
    <section className="section-padding section-textured overflow-hidden">
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
            src={IMAGES.previewEbos}
            alt="Prévia das páginas do Guia Prático de Ebós e Banhos"
            width={1024}
            height={576}
            className="mx-auto w-full max-w-3xl shadow-card"
          />
        </FadeUp>

        <FadeUp delay={0.12}>
          <PremiumImage
            src={IMAGES.previewErvas}
            alt="Prévia das páginas do Guia das Ervas Sagradas"
            width={1024}
            height={576}
            className="mx-auto mt-8 w-full max-w-3xl shadow-card"
          />
        </FadeUp>
      </div>
    </section>
  )
}
