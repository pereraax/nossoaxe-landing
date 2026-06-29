import SectionHeader from '../ui/SectionHeader'
import { IMAGES } from '../../config/assets'

export default function Preview() {
  return (
    <section id="preview" className="section bg-white">
      <div className="wrap">
        <SectionHeader
          label="Prévia"
          title="Veja por dentro do material"
          subtitle="Páginas ilustradas, organizadas e fáceis de consultar."
        />

        <img
          src={IMAGES.galeriaPremium}
          alt="Páginas do material sobre mesa"
          width={1400}
          height={933}
          className="mx-auto w-full rounded-2xl border border-border object-contain shadow-lg"
          loading="lazy"
          decoding="async"
        />

        <div className="mt-6 space-y-6 md:mt-8">
          <img
            src={IMAGES.previewEbos}
            alt="Prévia — Guia de Ebós e Banhos"
            width={1400}
            height={788}
            className="w-full rounded-2xl border border-border object-contain shadow-card"
            loading="lazy"
            decoding="async"
          />
          <img
            src={IMAGES.previewErvas}
            alt="Prévia — Guia das Ervas Sagradas"
            width={1400}
            height={788}
            className="w-full rounded-2xl border border-border object-contain shadow-card"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
