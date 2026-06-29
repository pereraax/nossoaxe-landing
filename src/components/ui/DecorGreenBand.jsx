import { IMAGES } from '../../config/assets'

export default function DecorGreenBand({ flip = false, className = '' }) {
  return (
    <div
      aria-hidden
      className={`decor-green-band relative w-full overflow-hidden ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/12 via-transparent to-black/12" />

      <img
        src={IMAGES.decor.faixa}
        alt=""
        className={`relative block h-10 w-full object-cover object-center opacity-95 sm:h-12 md:h-14 lg:h-16 ${
          flip ? 'rotate-180' : ''
        }`}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold/25" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gold/20" />
    </div>
  )
}
