import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import AssetImage from '../ui/AssetImage'
import { SectionLabel, SectionTitle, SectionSubtitle } from '../ui/SectionLabel'
import { PLACEHOLDERS } from '../../config/assets'

export default function InternalPages() {
  const [index, setIndex] = useState(0)
  const pages = PLACEHOLDERS.paginas

  const prev = () => setIndex((i) => (i === 0 ? pages.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === pages.length - 1 ? 0 : i + 1))

  return (
    <section id="preview" className="section-gap bg-card/50">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Prévia</SectionLabel>
          <SectionTitle>Veja por dentro do material</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Mais de 200 páginas com conteúdos práticos, ilustrados e fáceis de aplicar.
          </SectionSubtitle>
        </div>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-[2rem] border border-green/5 bg-card shadow-card"
            >
              <AssetImage
                src={pages[index]}
                alt={`Página interna ${index + 1}`}
                width={1200}
                height={800}
                className="w-full"
              />
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 rounded-full border border-green/10 bg-card p-3 shadow-soft transition hover:border-gold/30 md:-translate-x-6"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5 text-green" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 rounded-full border border-green/10 bg-card p-3 shadow-soft transition hover:border-gold/30 md:translate-x-6"
            aria-label="Próximo"
          >
            <ChevronRight className="h-5 w-5 text-green" />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {pages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-8 bg-gold' : 'w-2 bg-green/20 hover:bg-green/40'
                }`}
                aria-label={`Página ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
