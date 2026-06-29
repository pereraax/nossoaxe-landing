import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function Leaf({ className, delay = 0, parallax = 20 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax])

  return (
    <motion.div ref={ref} style={{ y }} className={`pointer-events-none absolute ${className}`}>
      <svg viewBox="0 0 80 120" fill="none" className="h-full w-full opacity-[0.12]">
        <path
          d="M40 5C40 5 10 35 10 65C10 90 25 110 40 115C55 110 70 90 70 65C70 35 40 5 40 5Z"
          fill="#1F3D2E"
        />
        <path d="M40 15V105" stroke="#B8893A" strokeWidth="1" opacity="0.5" />
        <path
          d="M40 40C30 45 20 55 15 65M40 55C50 60 60 70 65 80M40 75C28 78 18 85 12 95"
          stroke="#1F3D2E"
          strokeWidth="0.8"
          opacity="0.4"
        />
      </svg>
    </motion.div>
  )
}

export default function DecorativeLeaves() {
  return (
    <>
      <Leaf className="-left-4 top-20 h-16 w-10 md:h-24 md:w-14" parallax={15} />
      <Leaf className="right-0 top-1/3 h-20 w-12 md:h-28 md:w-16 rotate-45" parallax={25} />
      <Leaf className="bottom-20 left-1/4 h-14 w-9 md:h-20 md:w-12 -rotate-12" parallax={18} />
    </>
  )
}
