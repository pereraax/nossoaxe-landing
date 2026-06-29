import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import AssetImage from '../ui/AssetImage'
import FadeIn from '../ui/FadeIn'
import { SectionLabel, SectionTitle, SectionSubtitle } from '../ui/SectionLabel'
import { IMAGES } from '../../config/assets'

export default function ComoPorDentro() {
  const paginas = IMAGES.galeria.paginas
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i === 0 ? paginas.length - 1 : i - 1))
  const next = () => setActive((i) => (i === paginas.length - 1 ? 0 : i + 1))

  return (
    <section className="section-gap overflow-hidden">
      <div className="container-page">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <SectionLabel>Como é por dentro</SectionLabel>
          <SectionTitle>Organizado para consulta rápida</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Todo o conteúdo foi organizado para consulta rápida, facilitando encontrar
            aquilo que você procura sempre que precisar.
          </SectionSubtitle>
        </FadeIn>

        <FadeIn delay={0.15} className="relative mt-14">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-green/8 bg-card shadow-card">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <AssetImage
                  src={paginas[active]}
                  alt={`[PLACEHOLDER] Página interna ${active + 1}`}
                  width={900}
                  height={1200}
                  className="mx-auto w-full object-contain"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-5">
              <button
                type="button"
                onClick={prev}
                aria-label="Página anterior"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-green/10 bg-white/90 text-green shadow-soft transition-all hover:border-gold/30 hover:text-gold md:h-12 md:w-12"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 md:pr-5">
              <button
                type="button"
                onClick={next}
                aria-label="Próxima página"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-green/10 bg-white/90 text-green shadow-soft transition-all hover:border-gold/30 hover:text-gold md:h-12 md:w-12"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {paginas.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Ir para página ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-gold' : 'w-2 bg-green/20 hover:bg-green/40'
                }`}
              />
            ))}
          </div>

          <div className="mt-10 hidden gap-4 md:grid md:grid-cols-3">
            {paginas.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(i)}
                className={`overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                  i === active
                    ? 'border-gold shadow-card'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <AssetImage
                  src={src}
                  alt={`Miniatura página ${i + 1}`}
                  width={300}
                  height={400}
                  className="w-full object-cover"
                />
              </button>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
