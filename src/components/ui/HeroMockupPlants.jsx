import { motion, useReducedMotion } from 'framer-motion'
import { IMAGES } from '../../config/assets'

const PEEK = 0.52
const HIDDEN = 0.92
const CYCLE_DURATION = 7
const HOLD_START = 0.24
const HOLD_END = 0.74

function peekOffset(isLeft) {
  return isLeft ? -PEEK : PEEK
}

function hiddenOffset(isLeft) {
  return isLeft ? -HIDDEN : HIDDEN
}

export default function HeroPlant({ side = 'left' }) {
  const isLeft = side === 'left'
  const reduceMotion = useReducedMotion()

  const peek = peekOffset(isLeft)
  const hidden = hiddenOffset(isLeft)

  return (
    <div
      className={`pointer-events-none absolute bottom-[7%] z-[2] h-36 w-11 overflow-hidden sm:bottom-[6%] sm:h-44 sm:w-12 md:h-48 md:w-14 ${
        isLeft ? 'left-0' : 'right-0'
      }`}
      aria-hidden
    >
      <motion.img
        src={IMAGES.hero.plant}
        alt=""
        draggable={false}
        initial={false}
        style={{
          transformOrigin: isLeft ? 'left bottom' : 'right bottom',
        }}
        animate={
          reduceMotion
            ? { x: `${peek * 100}%`, scaleX: isLeft ? 1 : -1 }
            : {
                x: [`${hidden * 100}%`, `${peek * 100}%`, `${peek * 100}%`, `${hidden * 100}%`],
                scaleX: isLeft ? 1 : -1,
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: CYCLE_DURATION,
                times: [0, HOLD_START, HOLD_END, 1],
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 1.4,
                delay: isLeft ? 0 : CYCLE_DURATION * 0.45,
              }
        }
        className={`absolute bottom-0 h-full w-auto max-w-none select-none ${
          isLeft ? 'left-0' : 'right-0'
        }`}
      />
    </div>
  )
}
