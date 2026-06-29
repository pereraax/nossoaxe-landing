import { motion } from 'framer-motion'
import Button from './Button'
import AssetImage from './AssetImage'
import { PRICE } from '../../config/checkout'
import { PLACEHOLDERS } from '../../config/assets'

export default function PriceBlock({ id, className = '' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`container-page ${className}`}
    >
      <div className="overflow-hidden rounded-[2rem] bg-green shadow-price md:rounded-[2.5rem]">
        <div className="grid gap-8 p-8 md:grid-cols-[1fr_auto_1fr] md:items-center md:p-12 lg:p-14">
          {/* Esquerda — valor riscado */}
          <div className="text-center md:text-left">
            <p className="text-sm text-white/60 line-through md:text-base">
              Valor total {PRICE.totalOriginal}
            </p>
            <p className="mt-2 font-subtitle text-lg text-gold-light md:text-xl">
              Economize 73%
            </p>
          </div>

          {/* Centro — preço gigante */}
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/70 md:text-sm">
              Hoje por apenas
            </p>
            <p className="mt-3 font-display text-5xl font-bold leading-none text-white md:text-7xl lg:text-8xl">
              {PRICE.current}
            </p>
            <p className="mt-3 text-sm text-white/75 md:text-base">ou {PRICE.installment}</p>
            <span className="mt-5 inline-block rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-light">
              Oferta por tempo limitado
            </span>
            <div className="mx-auto mt-8 max-w-md">
              <Button variant="gold" size="xl">
                Quero meu kit completo agora
              </Button>
            </div>
          </div>

          {/* Direita — selo */}
          <div className="flex flex-col items-center gap-4 md:items-end">
            <AssetImage
              src={PLACEHOLDERS.garantia.selo}
              alt="Garantia 7 dias"
              width={200}
              height={200}
              className="h-24 w-auto md:h-28"
            />
            <p className="max-w-[180px] text-center text-xs leading-relaxed text-white/70 md:text-right md:text-sm">
              Satisfação garantida ou seu dinheiro de volta em 7 dias.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
