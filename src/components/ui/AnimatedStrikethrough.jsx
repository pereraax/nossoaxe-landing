import { motion } from 'framer-motion'

export default function AnimatedStrikethrough({
  children,
  active = true,
  className = '',
  lineClassName = 'bg-green/55',
}) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    return (
      <span className={`relative inline-block line-through decoration-green/50 decoration-2 ${className}`}>
        {children}
      </span>
    )
  }

  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <motion.span
        aria-hidden
        className={`pointer-events-none absolute left-[-3%] top-[54%] h-[2.5px] w-[106%] -translate-y-1/2 rounded-full sm:h-[3px] ${lineClassName}`}
        style={{ transformOrigin: 'left center', rotate: -4 }}
        initial={{ scaleX: 0, opacity: 0.9 }}
        animate={active ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0.9 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
      />
    </span>
  )
}
