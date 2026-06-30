import { useRef } from 'react'
import AnimatedPrice from './AnimatedPrice'
import AnimatedStrikethrough from './AnimatedStrikethrough'
import Button from './Button'
import { useReveal } from '../../hooks/useReveal'
import { PRICE } from '../../config/checkout'

export default function HeroPriceFocus() {
  const ref = useRef(null)
  const active = useReveal(ref, { threshold: 0.08, once: true })

  return (
    <div
      ref={ref}
      className="relative mx-auto mt-5 max-w-md overflow-hidden rounded-[1.75rem] border-2 border-gold/35 bg-gradient-to-b from-card via-white to-gold/[0.1] px-5 py-6 shadow-[0_22px_64px_rgba(33,67,50,0.16),0_0_0_1px_rgba(184,137,45,0.12)] sm:mt-6 sm:px-6 sm:py-7"
    >
      <span
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        aria-hidden
      />

      <p className="text-center font-body text-[11px] font-bold uppercase tracking-[0.26em] text-green/50 sm:text-xs">
        De
      </p>
      <p className="mt-1 text-center font-display text-[1.65rem] font-bold text-green/40 sm:text-3xl">
        <AnimatedStrikethrough active={active}>{PRICE.original}</AnimatedStrikethrough>
      </p>

      <p className="mt-4 text-center font-body text-[11px] font-bold uppercase tracking-[0.3em] text-gold sm:text-xs">
        Por apenas
      </p>

      <div className="mt-0.5">
        <AnimatedPrice active={active} size="hero" />
      </div>

      <p className="mt-2 text-center font-body text-sm font-medium text-muted sm:text-base">
        ou <span className="font-semibold text-green/85">{PRICE.installment}</span>
      </p>

      <div className="mt-5 sm:mt-6">
        <Button
          size="xl"
          variant="green"
          fullWidth
          breathe
          className="!max-w-none shadow-[0_10px_36px_rgba(33,67,50,0.35)]"
        >
          Comprar
        </Button>
      </div>
    </div>
  )
}
