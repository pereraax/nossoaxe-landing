import { animate, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { PRICE } from '../../config/checkout'

const REPEAT_MS = 8000

function formatAmount(value) {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export default function AnimatedPrice({
  target = PRICE.currentValue,
  start = 0,
  duration = 2.2,
  size = 'hero',
  active = true,
}) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [amount, setAmount] = useState(formatAmount(prefersReducedMotion ? target : start))
  const [done, setDone] = useState(prefersReducedMotion)
  const [pulseKey, setPulseKey] = useState(0)
  const controlsRef = useRef(null)
  const intervalRef = useRef(null)

  const isHero = size === 'hero'
  const currencyClass = isHero
    ? 'mt-2 text-xl font-bold text-gold sm:mt-3 sm:text-2xl md:text-[1.75rem]'
    : 'mt-1.5 text-lg font-bold text-gold sm:text-xl'
  const amountClass = isHero
    ? 'text-[4.25rem] font-extrabold leading-none tracking-[-0.04em] sm:text-[5.25rem] md:text-[6.25rem] lg:text-[6.75rem]'
    : 'text-[3.5rem] font-extrabold leading-none tracking-[-0.04em] sm:text-[4.25rem] md:text-[5rem]'

  useEffect(() => {
    const stopAnimation = () => {
      controlsRef.current?.stop()
      controlsRef.current = null
    }

    const clearLoop = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    if (prefersReducedMotion) {
      stopAnimation()
      clearLoop()
      setAmount(formatAmount(target))
      setDone(true)
      return undefined
    }

    if (!active) {
      stopAnimation()
      clearLoop()
      setAmount(formatAmount(start))
      setDone(false)
      return undefined
    }

    const runCount = () => {
      stopAnimation()
      setDone(false)
      setAmount(formatAmount(start))

      controlsRef.current = animate(start, target, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (value) => setAmount(formatAmount(value)),
        onComplete: () => {
          setDone(true)
          setPulseKey((key) => key + 1)
        },
      })
    }

    runCount()
    intervalRef.current = setInterval(runCount, REPEAT_MS)

    return () => {
      stopAnimation()
      clearLoop()
    }
  }, [active, duration, prefersReducedMotion, start, target])

  return (
    <div className="relative mx-auto w-fit" aria-live="polite">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[85%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-2xl"
        animate={done ? { opacity: 1, scale: 1 } : { opacity: 0.35, scale: 0.9 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      <motion.div
        key={pulseKey}
        className="flex items-start justify-center gap-0.5 sm:gap-1"
        style={{ transformOrigin: 'center center' }}
        initial={{ scaleX: 1, scaleY: 1 }}
        animate={
          done && pulseKey > 0 && !prefersReducedMotion
            ? { scaleX: [1, 1.08, 1], scaleY: [1, 1.045, 1] }
            : { scaleX: 1, scaleY: 1 }
        }
        transition={{
          duration: 0.55,
          ease: [0.45, 0.05, 0.55, 0.95],
        }}
      >
        <span className={`font-body ${currencyClass}`}>R$</span>
        <span className={`font-body tabular-nums text-green-deep ${amountClass}`}>{amount}</span>
      </motion.div>
    </div>
  )
}
