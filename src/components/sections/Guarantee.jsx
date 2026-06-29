import { ShieldCheck } from 'lucide-react'
import AssetImage from '../ui/AssetImage'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { IMAGES } from '../../config/assets'
import { PRICE_SECTION_ID } from '../../config/checkout'

const trustPoints = [
  'Reembolso simples e rápido',
  'Sem burocracia',
  'Risco zero para você',
]

export default function Guarantee() {
  return (
    <section className="section-gap-sm">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border-2 border-gold/30 bg-gradient-to-br from-green-deep via-green to-green-deep px-7 py-12 text-center shadow-[0_28px_80px_rgba(21,41,33,0.32)] sm:px-10 sm:py-14 md:px-16 md:py-20">
            <img
              src={IMAGES.decor.faixa}
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-3 w-full object-cover object-center opacity-70 sm:h-3.5"
            />
            <img
              src={IMAGES.decor.faixa}
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-3 w-full rotate-180 object-cover object-center opacity-70 sm:h-3.5"
            />

            <div
              className="pointer-events-none absolute -left-16 -top-16 h-52 w-52 rounded-full bg-gold/12 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl"
              aria-hidden
            />

            <div className="relative mx-auto flex max-w-[min(88vw,16rem)] justify-center sm:max-w-[20rem] md:max-w-[24rem] lg:max-w-[28rem] xl:max-w-[32rem]">
              <span
                className="pointer-events-none absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/30 blur-3xl"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute left-1/2 top-1/2 h-[118%] w-[118%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/20"
                aria-hidden
              />
              <AssetImage
                src={IMAGES.selos.garantia}
                alt="Selo de garantia 7 dias"
                width={768}
                height={768}
                className="relative z-[1] h-56 w-56 object-contain drop-shadow-[0_28px_64px_rgba(0,0,0,0.5)] sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 xl:h-[28rem] xl:w-[28rem]"
              />
            </div>

            <p className="relative mt-5 text-[11px] font-bold uppercase tracking-[0.3em] text-gold-light sm:mt-6 sm:text-xs">
              Garantia incondicional
            </p>

            <h2 className="relative mt-3 font-display text-[1.85rem] font-bold leading-[1.12] text-white sm:text-4xl md:text-[2.75rem] lg:text-[3.125rem]">
              Você compra com{' '}
              <span className="relative inline-block text-gold-light">
                tranquilidade
                <span
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gold/40"
                  aria-hidden
                />
              </span>
            </h2>

            <p className="relative mx-auto mt-6 max-w-lg text-base leading-[1.8] text-white/85 md:max-w-xl md:text-lg md:leading-[1.75]">
              <span className="font-semibold text-gold-light">7 dias de garantia.</span>{' '}
              Caso o material não atenda suas expectativas, basta solicitar o reembolso
              dentro desse prazo — sem burocracia e sem riscos para você.
            </p>

            <ul className="relative mx-auto mt-7 flex max-w-md flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:mt-8 sm:gap-x-6">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/88 sm:text-sm"
                >
                  <ShieldCheck className="h-4 w-4 shrink-0 text-gold-light" strokeWidth={2.25} />
                  {point}
                </li>
              ))}
            </ul>

            <div className="relative mx-auto mt-10 flex justify-center sm:mt-11">
              <Button
                href={PRICE_SECTION_ID}
                variant="green"
                size="md"
                animated={false}
                className="!mx-0 !max-w-none whitespace-nowrap !px-6 !py-3 !text-sm !min-h-0 sm:!px-7 sm:!text-[0.9375rem] !bg-white !text-green-deep !shadow-[0_10px_32px_rgba(0,0,0,0.22)] hover:!bg-cream hover:!text-green-deep"
              >
                Quero acessar com garantia
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
