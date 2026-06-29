import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Flame, ShoppingBag } from 'lucide-react'

const VISIBLE_MS = 5000
const CYCLE_MS = 10000
const INITIAL_DELAY_MS = 3500

const ACTIVITIES = [
  { name: 'Amanda S.', type: 'purchase' },
  { name: 'Jéssica M.', type: 'purchase' },
  { name: 'Flávia R.', type: 'checkout' },
  { name: 'Renata L.', type: 'purchase' },
  { name: 'Marcos P.', type: 'purchase' },
  { name: 'Camila F.', type: 'checkout' },
  { name: 'Patrícia O.', type: 'purchase' },
  { name: 'Bruno H.', type: 'purchase' },
  { name: 'Larissa T.', type: 'purchase' },
  { name: 'Diego N.', type: 'checkout' },
  { name: 'Aline C.', type: 'purchase' },
  { name: 'Rodrigo V.', type: 'purchase' },
  { name: 'Tatiane B.', type: 'purchase' },
  { name: 'Fernanda G.', type: 'checkout' },
  { name: 'Rafael D.', type: 'purchase' },
  { name: 'Bianca K.', type: 'purchase' },
  { name: 'Gustavo J.', type: 'purchase' },
  { name: 'Juliana E.', type: 'checkout' },
  { name: 'Simone W.', type: 'purchase' },
  { name: 'Thiago R.', type: 'purchase' },
  { name: 'Vanessa A.', type: 'purchase' },
  { name: 'Luciana M.', type: 'checkout' },
  { name: 'André F.', type: 'purchase' },
  { name: 'Carla S.', type: 'purchase' },
]

function activityMessage(type) {
  return type === 'checkout' ? 'está finalizando checkout...' : 'acabou de comprar'
}

export default function LivePurchasePopup() {
  const [visible, setVisible] = useState(false)
  const [index, setIndex] = useState(0)
  const timersRef = useRef([])

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }, [])

  const schedule = useCallback((fn, delay) => {
    const id = setTimeout(fn, delay)
    timersRef.current.push(id)
    return id
  }, [])

  useEffect(() => {
    let currentIndex = 0

    const cycle = () => {
      setIndex(currentIndex)
      setVisible(true)
      currentIndex = (currentIndex + 1) % ACTIVITIES.length

      schedule(() => {
        setVisible(false)
        schedule(cycle, CYCLE_MS - VISIBLE_MS)
      }, VISIBLE_MS)
    }

    schedule(cycle, INITIAL_DELAY_MS)

    return clearTimers
  }, [clearTimers, schedule])

  const activity = ACTIVITIES[index]
  const isCheckout = activity.type === 'checkout'

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key={`${index}-${activity.name}`}
          initial={{ opacity: 0, x: -56, y: 28, scale: 0.94 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          exit={{ opacity: 0, x: -32, y: 16, scale: 0.97 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-[max(1rem,env(safe-area-inset-left))] z-[55] w-[min(20rem,calc(100vw-2rem))] sm:bottom-6 sm:left-5"
          role="status"
          aria-live="polite"
        >
          <div className="live-purchase-popup relative overflow-hidden rounded-2xl border border-gold/35 bg-gradient-to-br from-green-deep via-green to-green-deep px-4 py-3.5 shadow-[0_16px_48px_rgba(21,41,33,0.45),0_0_0_1px_rgba(184,137,45,0.12)] sm:px-4 sm:py-4">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-gold/[0.06]"
              aria-hidden
            />
            <img
              src="/images/decor/faixa-ornamento.png"
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-2 w-full object-cover object-center opacity-40"
            />

            <div className="relative flex items-start gap-3">
              <div className="flex shrink-0 flex-col items-center gap-2 pt-0.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-light opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-light" />
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-green-deep shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_14px_rgba(0,0,0,0.25)]">
                  {isCheckout ? (
                    <ShoppingBag className="h-4 w-4 text-gold-light" strokeWidth={2.25} />
                  ) : (
                    <Check className="h-4 w-4 text-gold-light" strokeWidth={2.75} />
                  )}
                </span>
              </div>

              <div className="min-w-0 flex-1 pt-0.5">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-light/90">
                  Compra ao vivo
                </p>
                <p className="mt-1 text-sm leading-snug text-white sm:text-[0.9375rem]">
                  <span className="font-bold text-gold-light">{activity.name}</span>{' '}
                  {activityMessage(activity.type)}
                </p>
                <p className="mt-1.5 flex items-center gap-1.5 text-[10px] font-medium text-white/70 sm:text-[11px]">
                  <Flame className="h-3 w-3 shrink-0 text-gold/80" strokeWidth={2.25} />
                  Kit NossoAxé · agora
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
