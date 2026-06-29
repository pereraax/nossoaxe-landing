import { PRICE } from '../../config/checkout'
import useCountdown from '../../hooks/useCountdown'

function CountdownUnit({ value }) {
  return (
    <span className="inline-flex min-w-[1.25rem] items-center justify-center rounded bg-white/10 px-1 py-0.5 text-center font-mono text-[10px] font-semibold tabular-nums text-white sm:min-w-[1.35rem] sm:text-[11px]">
      {value}
    </span>
  )
}

export default function TopBar() {
  const { h, m, s } = useCountdown()

  return (
    <div className="edge-bleed relative border-b border-white/10 bg-green-deep pt-[env(safe-area-inset-top,0px)]">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 py-2 sm:gap-x-3 sm:py-2.5">
        <p className="text-center text-[11px] font-medium leading-snug text-white/90 sm:text-xs">
          Kit + bônus das Ervas por{' '}
          <strong className="font-semibold text-gold-light">{PRICE.current}</strong>
          <span className="mx-1.5 text-white/35">·</span>
          <span className="text-white/80">encerra em</span>
        </p>

        <div
          className="inline-flex shrink-0 items-center gap-0.5 font-mono sm:gap-1"
          aria-live="polite"
          aria-label={`Tempo restante: ${h} horas, ${m} minutos e ${s} segundos`}
        >
          <CountdownUnit value={h} />
          <span className="text-[10px] font-semibold leading-none text-white/60 sm:text-[11px]">:</span>
          <CountdownUnit value={m} />
          <span className="text-[10px] font-semibold leading-none text-white/60 sm:text-[11px]">:</span>
          <CountdownUnit value={s} />
        </div>
      </div>
    </div>
  )
}
