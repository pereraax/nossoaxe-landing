import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { CHECKOUT_URL } from '../../config/checkout'

const styles = {
  green: `
    bg-green text-white
    shadow-[0_6px_24px_rgba(33,67,50,0.28)]
    hover:bg-green-light hover:shadow-[0_8px_32px_rgba(33,67,50,0.32)]
  `,
  outline: `
    border-2 border-green bg-transparent text-green
    hover:bg-green hover:text-white
  `,
  /** @deprecated use green */
  gold: `
    bg-green text-white
    shadow-[0_6px_24px_rgba(33,67,50,0.28)]
    hover:bg-green-light
  `,
}

const sizes = {
  sm: 'px-5 py-2.5 text-sm gap-2 min-h-[44px]',
  md: 'px-7 py-3.5 text-sm gap-2 min-h-[48px] md:text-base',
  lg: 'px-8 py-4 text-base gap-2.5 min-h-[52px]',
  xl: 'px-8 py-4 text-base gap-2.5 min-h-[54px] md:px-9 md:py-[1.125rem] md:text-lg md:min-h-[58px]',
}

const glowPulse = {
  scale: [1, 1.025, 1],
  transition: {
    duration: 2.6,
    repeat: Infinity,
    ease: [0.42, 0, 0.58, 1],
  },
}

function openExternalUrl(url) {
  const opened = window.open(url, '_blank', 'noopener,noreferrer')
  if (!opened) window.location.assign(url)
}

export default function Button({
  children,
  variant = 'green',
  size = 'md',
  className = '',
  href = CHECKOUT_URL,
  showArrow = true,
  icon = null,
  fullWidth = false,
  animated = true,
  onClick,
  ...props
}) {
  const isPrimary = variant === 'green' || variant === 'gold'
  const isHashLink = typeof href === 'string' && href.startsWith('#')
  const isExternalLink = typeof href === 'string' && /^https?:\/\//.test(href)
  const widthClass = fullWidth ? 'w-full' : 'mx-auto w-auto max-w-[min(100%,17.5rem)] sm:max-w-xs md:max-w-sm'
  const glowClass = animated && isPrimary ? 'btn-glow-loop' : ''

  const handleClick = (event) => {
    onClick?.(event)
    if (event.defaultPrevented || isHashLink || !isExternalLink) return

    event.preventDefault()
    openExternalUrl(href)
  }

  return (
    <motion.a
      href={href}
      target={isExternalLink ? '_blank' : undefined}
      rel={isExternalLink ? 'noopener noreferrer' : undefined}
      onClick={handleClick}
      animate={animated && isPrimary ? glowPulse : undefined}
      whileHover={{ y: animated ? -2 : -1, scale: animated && isPrimary ? 1.03 : 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`
        inline-flex items-center justify-center rounded-full font-semibold
        transition-colors duration-300
        ${styles[variant] ?? styles.green} ${glowClass} ${sizes[size]} ${widthClass} ${className}
      `}
      {...props}
    >
      {icon}
      {children}
      {showArrow && <ArrowRight className="h-4 w-4 shrink-0 md:h-5 md:w-5" strokeWidth={2.5} />}
    </motion.a>
  )
}
