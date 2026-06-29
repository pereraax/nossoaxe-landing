import { Check, Gift, Lock, ShieldCheck } from 'lucide-react'
import { useRef } from 'react'
import AnimatedPrice from './AnimatedPrice'
import AnimatedStrikethrough from './AnimatedStrikethrough'
import OfferBadge from './OfferBadge'
import Button from './Button'
import { useReveal } from '../../hooks/useReveal'
import { PRICE } from '../../config/checkout'
import { IMAGES } from '../../config/assets'

const perks = [
  'Guia Prático de Ebós e Banhos — kit principal',
  'Ebós, banhos, defumações e oferendas organizados',
  'PDF digital com acesso imediato no e-mail',
  'Material ilustrado para consulta rápida no celular',
  'Linguagem clara, respeitosa e fácil de entender',
  'Compatível com celular, tablet e computador',
]

export default function PriceCard({
  id,
  className = '',
  buttonText = 'Quero receber agora',
  variant = 'hero',
}) {
  const isHero = variant === 'hero'
  const cardRef = useRef(null)
  const priceActive = useReveal(cardRef, { rootMargin: '0px', threshold: 0.12 })

  return (
    <div
      ref={cardRef}
      id={id}
      className={`
        relative overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-b from-card via-white to-gold/[0.06]
        shadow-[0_20px_60px_rgba(33,67,50,0.14),0_8px_24px_rgba(184,137,45,0.12)]
        transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-price-hover)]
        ${isHero ? 'p-8 md:p-11 lg:p-12' : 'p-8 md:p-10'}
        ${className}
      `}
    >
      <img
        src={IMAGES.decor.faixa}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-3 w-full object-cover object-center opacity-90 sm:h-3.5"
      />
      <img
        src={IMAGES.decor.faixa}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-3 w-full rotate-180 object-cover object-center opacity-90 sm:h-3.5"
      />

      <img
        src={IMAGES.decor.florMacrame}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -left-3 bottom-8 hidden h-24 w-auto opacity-80 sm:block md:h-28 lg:h-32"
      />
      <img
        src={IMAGES.decor.florMacrame}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-3 bottom-8 hidden h-24 w-auto -scale-x-100 opacity-80 sm:block md:h-28 lg:h-32"
      />

      <div className="relative z-[1] pt-2">
        <OfferBadge className="mb-5 sm:mb-6" />

        <p className="text-center font-body text-xs font-bold uppercase tracking-[0.24em] text-green/50 sm:text-sm">
          De
        </p>
        <p className="mt-1 text-center font-display text-2xl font-bold text-green/45 sm:text-3xl md:text-[2rem]">
          <AnimatedStrikethrough active={priceActive}>
            {PRICE.original}
          </AnimatedStrikethrough>
        </p>

        <p className="mt-5 text-center font-body text-xs font-bold uppercase tracking-[0.28em] text-gold sm:text-sm">
          Por apenas
        </p>

        <div className="mt-1">
          <AnimatedPrice active={priceActive} size={isHero ? 'hero' : 'default'} />
        </div>

        <p className="mt-3 text-center font-body text-base font-medium text-muted sm:text-lg">
          ou <span className="font-semibold text-green/80">{PRICE.installment}</span>
        </p>

        <p className="mx-auto mt-4 w-fit rounded-full bg-green px-4 py-1.5 text-center text-xs font-bold uppercase tracking-wide text-white sm:text-[13px]">
          Você economiza {PRICE.savings}
        </p>

        <ul className="mx-auto mt-6 max-w-md space-y-2.5 text-left">
          {perks.map((perk) => (
            <li key={perk} className="flex items-start gap-2.5 text-sm font-semibold text-green sm:text-[15px]">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green text-white">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {perk}
            </li>
          ))}
        </ul>

        <div className="bonus-glow-loop relative mx-auto mt-5 max-w-md overflow-visible rounded-2xl border-2 border-gold bg-gradient-to-br from-gold/20 via-gold/10 to-white p-4 pb-5 sm:p-5 sm:pb-6">
          <span className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-green-deep text-gold-light ring-2 ring-gold/45 sm:left-4 sm:top-4 sm:h-8 sm:w-8">
            <Check className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={3} />
          </span>

          <div className="mb-4 flex justify-center pt-1">
            <span className="bonus-badge-glow inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-green-deep sm:text-[11px]">
              <Gift className="h-3.5 w-3.5" strokeWidth={2.5} />
              Bônus exclusivo
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-5">
            <div className="flex shrink-0 items-center justify-center self-center">
              <img
                src={IMAGES.bonus.cover}
                alt="Capa do bônus — Guia das Ervas Sagradas"
                width={240}
                height={427}
                className="h-auto w-[6.25rem] -translate-y-1 object-contain drop-shadow-[0_14px_32px_rgba(33,67,50,0.28)] sm:w-[7rem] sm:-translate-y-1.5 md:w-28"
              />
            </div>

            <div className="min-w-0 flex-1 text-left">
              <p className="font-display text-base font-bold leading-snug text-green-deep sm:text-lg md:text-xl">
                + Bônus: Guia das Ervas Sagradas
              </p>
              <p className="mt-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-gold sm:text-xs">
                Incluso grátis hoje
              </p>
              <p className="mt-1.5 text-sm font-bold text-green/60 line-through sm:text-[15px]">
                Valor: {PRICE.ervasOriginal}
              </p>
              <p className="mt-2.5 text-xs font-semibold leading-relaxed text-green/90 sm:text-sm">
                Propriedades, combinações, preparos e cuidados com ervas sagradas — seu
                complemento ideal ao kit principal.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button size="xl" variant="green">
            {buttonText}
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-green/8 pt-5 text-xs text-muted sm:text-sm">
          <span className="flex items-center gap-1.5">
            <Lock className="h-4 w-4 text-gold" strokeWidth={2} />
            Compra 100% segura
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-gold" strokeWidth={2} />
            Garantia de 7 dias
          </span>
        </div>
      </div>
    </div>
  )
}
