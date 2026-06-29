import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Button from '../ui/Button'
import { PRICE } from '../../config/checkout'

export default function ExitModal({ show, onDismiss }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={onDismiss}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-cream shadow-elevated"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-modal-title"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />

            <button
              onClick={onDismiss}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-text-muted transition hover:bg-green/10 hover:text-green"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-8 pt-10 text-center">
              <p className="text-xs font-medium uppercase tracking-widest text-gold">Espere!</p>
              <h2
                id="exit-modal-title"
                className="mt-3 font-heading text-2xl md:text-3xl font-semibold text-green leading-tight"
              >
                Ainda dá tempo de garantir seu Kit.
              </h2>

              <div className="mt-6 rounded-2xl bg-white p-5 shadow-soft border border-green/5">
                <p className="font-heading text-4xl font-bold text-green">{PRICE.current}</p>
              </div>

              <div className="mt-6 flex justify-center">
                <Button size="lg">
                  Quero Aproveitar
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
