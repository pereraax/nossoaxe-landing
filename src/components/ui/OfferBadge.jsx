import { Flame } from 'lucide-react'

export default function OfferBadge({ className = '' }) {
  return (
    <div className={`relative mx-auto w-fit ${className}`}>
      <span
        className="pointer-events-none absolute -inset-x-6 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent sm:block"
        aria-hidden
      />

      <div className="offer-badge-glow relative flex items-center gap-2.5 rounded-full border-2 border-gold/45 bg-gradient-to-b from-gold/22 via-gold/10 to-white/80 px-4 py-2 shadow-[0_6px_28px_rgba(184,137,45,0.22)] sm:gap-3 sm:px-6 sm:py-2.5">
        <span
          className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/40"
          aria-hidden
        />

        <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-green-deep to-green shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_4px_12px_rgba(21,41,33,0.35)] sm:h-9 sm:w-9">
          <span
            className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-gold/55 ring-offset-1 ring-offset-gold/15"
            aria-hidden
          />
          <Flame
            className="relative h-4 w-4 text-gold-light drop-shadow-[0_0_6px_rgba(212,168,85,0.55)] sm:h-[1.125rem] sm:w-[1.125rem]"
            strokeWidth={2.25}
          />
        </span>

        <div className="flex min-w-0 flex-col items-start gap-0.5 pr-0.5 sm:pr-1">
          <span className="font-display text-[10px] font-bold uppercase leading-none tracking-[0.26em] text-green-deep sm:text-[11px]">
            Oferta especial
          </span>
          <span className="font-body text-[9px] font-semibold uppercase leading-none tracking-[0.32em] text-gold sm:text-[10px]">
            de lançamento
          </span>
        </div>

        <span
          className="hidden h-4 w-px shrink-0 bg-gradient-to-b from-transparent via-gold/50 to-transparent sm:block"
          aria-hidden
        />
        <span
          className="hidden font-display text-sm leading-none text-gold/70 sm:block"
          aria-hidden
        >
          ✦
        </span>
      </div>
    </div>
  )
}
