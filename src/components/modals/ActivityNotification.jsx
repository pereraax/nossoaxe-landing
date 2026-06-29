import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

const NAMES = [
  'Flávia',
  'Amanda',
  'Carlos',
  'Juliana',
  'Fernanda',
  'Rafael',
  'Patrícia',
  'Marcos',
  'Camila',
  'Renata',
  'Bruno',
  'Larissa',
  'Diego',
  'Aline',
  'Gustavo',
  'Bianca',
  'Rodrigo',
  'Tatiane',
]

const PRODUCT = 'Guia Prático de Ebós e Banhos'
const VISIBLE_MS = 5000
const INITIAL_DELAY_MS = 3500
const MIN_INTERVAL_MS = 12000
const MAX_INTERVAL_MS = 18000

const randomInterval = () =>
  MIN_INTERVAL_MS + Math.random() * (MAX_INTERVAL_MS - MIN_INTERVAL_MS)

export default function ActivityNotification() {
  const [visible, setVisible] = useState(false)
  const [nameIndex, setNameIndex] = useState(0)
  const timersRef = useRef([])

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }, [])

  const schedule = useCallback(
    (fn, delay) => {
      const id = setTimeout(fn, delay)
      timersRef.current.push(id)
      return id
    },
    [],
  )

  useEffect(() => {
    let currentIndex = 0

    const cycle = () => {
      setNameIndex(currentIndex)
      setVisible(true)
      currentIndex = (currentIndex + 1) % NAMES.length

      schedule(() => {
        setVisible(false)
        schedule(cycle, randomInterval())
      }, VISIBLE_MS)
    }

    schedule(cycle, INITIAL_DELAY_MS)

    return clearTimers
  }, [clearTimers, schedule])

  const name = NAMES[nameIndex]

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key={nameIndex}
          initial={{ opacity: 0, x: -48, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          exit={{ opacity: 0, x: -24, y: 12, scale: 0.98 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed z-40 bottom-24 left-1/2 w-[min(360px,calc(100vw-2rem))] -translate-x-1/2 md:bottom-8 md:left-6 md:translate-x-0"
          role="status"
          aria-live="polite"
        >
          <div
            className="relative min-h-[90px] overflow-hidden rounded-[20px] border border-[#D4AF37]/20 p-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.45),0_8px_24px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl"
            style={{ backgroundColor: 'rgba(30, 59, 43, 0.92)' }}
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-[20px] bg-gradient-to-br from-white/[0.07] via-transparent to-[#D4AF37]/[0.04]"
              aria-hidden
            />

            <div className="relative flex gap-3">
              <div className="flex shrink-0 flex-col items-center gap-1.5 pt-0.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37] shadow-[0_4px_14px_rgba(212,175,55,0.35)]">
                  <Check className="h-[18px] w-[18px] text-white" strokeWidth={3} />
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[13px] leading-snug text-white md:text-sm">
                    <span className="font-bold text-[#D4AF37]">{name}</span>{' '}
                    acabou de garantir o Kit
                  </p>
                  <span className="shrink-0 whitespace-nowrap text-[10px] font-medium uppercase tracking-wide text-white/75 md:text-[11px]">
                    Agora mesmo
                  </span>
                </div>

                <p className="mt-0.5 truncate text-[11px] text-white/75 md:text-xs">
                  {PRODUCT}
                </p>

                <p className="mt-1.5 flex items-center gap-1 text-[10px] font-medium text-white/75 md:text-[11px]">
                  <span aria-hidden>⚡</span>
                  Entrega imediata
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
