import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { CHECKOUT_URL, PRICE } from '../../config/checkout'
import { useScrollPast } from '../../hooks/useScrollPosition'

export default function StickyCTA() {
  const visible = useScrollPast(350)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-green/10 bg-white/95 px-4 py-3 shadow-elevated backdrop-blur-md md:hidden"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-heading text-xl font-bold text-green">{PRICE.current}</p>
              <p className="text-[10px] text-text-muted">{PRICE.installment}</p>
            </div>
            <motion.a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              className="inline-flex min-h-[48px] max-w-[190px] flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-green to-green-light px-5 py-3 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(31,61,46,0.35)]"
            >
              Comprar agora
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
