import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AssetImage from './AssetImage'
import { IMAGES } from '../../config/assets'

const INTERVAL_MS = 2800

export default function RotatingTopicLine({ items, intervalMs = INTERVAL_MS, className = '' }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (items.length <= 1) return undefined

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % items.length)
    }, intervalMs)

    return () => clearInterval(timer)
  }, [items.length, intervalMs])

  if (!items?.length) return null

  const phrase = items[active]

  return (
    <div
      className={`mx-auto mt-7 sm:mt-8 ${className}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="relative mx-auto flex min-h-[3.25rem] max-w-xl items-center justify-center sm:min-h-[3.75rem] md:min-h-[4.25rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={phrase}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -28 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 flex items-center justify-center gap-3 px-2 sm:gap-4"
          >
            <AssetImage
              src={IMAGES.icons.checkMarca}
              alt=""
              aria-hidden
              width={1350}
              height={1350}
              className="h-7 w-7 shrink-0 object-contain sm:h-8 sm:w-8 md:h-9 md:w-9"
            />
            <span className="font-display text-center text-[1.35rem] font-bold leading-tight text-green-deep sm:text-[1.65rem] md:text-[1.875rem] lg:text-[2rem]">
              {phrase}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {items.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-1.5 sm:mt-5">
          {items.map((item, index) => (
            <span
              key={item}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === active
                  ? 'w-6 bg-gold'
                  : 'w-1.5 bg-gold/25'
              }`}
              aria-hidden
            />
          ))}
        </div>
      )}
    </div>
  )
}
