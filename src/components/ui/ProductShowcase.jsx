import AssetImage from './AssetImage'
import Reveal from './Reveal'
import RotatingTopicLine from './RotatingTopicLine'
import { IMAGES } from '../../config/assets'

export default function ProductShowcase({
  image,
  alt,
  title,
  description,
  tags,
  badge = null,
  subtitle = null,
  delay = 0,
  children = null,
  className = '',
}) {
  return (
    <Reveal delay={delay} className={`relative mx-auto max-w-4xl px-2 sm:px-4 ${className}`}>
      <img
        src={IMAGES.decor.florMacrame}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -left-1 top-16 hidden h-28 w-auto opacity-55 sm:block md:h-32 lg:-left-8 lg:h-36"
      />
      <img
        src={IMAGES.decor.florMacrame}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-1 top-16 hidden h-28 w-auto -scale-x-100 opacity-55 sm:block md:h-32 lg:-right-8 lg:h-36"
      />

      <div className="relative mx-auto max-w-3xl">
        <img
          src={IMAGES.decor.faixa}
          alt=""
          aria-hidden
          className="mx-auto mb-3 h-2.5 w-full max-w-xl object-cover object-center opacity-75 sm:h-3"
        />

        <div className="relative overflow-hidden rounded-[1.75rem] border border-gold/20 bg-gradient-to-b from-gold/[0.08] via-cream/40 to-transparent px-5 pb-5 pt-4 sm:rounded-[2rem] sm:px-8 sm:pb-6 sm:pt-5">
          <div
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
            aria-hidden
          />

          <div className="relative mx-auto flex w-full max-w-[min(100%,20rem)] justify-center sm:max-w-md md:max-w-lg lg:max-w-xl">
            <span
              className="pointer-events-none absolute left-1/2 top-[55%] -z-10 h-[80%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/16 blur-3xl"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute inset-3 rounded-[1.25rem] border border-gold/15 sm:inset-4"
              aria-hidden
            />
            <AssetImage
              src={image}
              alt={alt}
              width={900}
              height={1200}
              className="relative z-[1] block h-auto w-full object-contain drop-shadow-[0_32px_72px_rgba(33,67,50,0.32)]"
            />
          </div>

          <img
            src={IMAGES.decor.faixa}
            alt=""
            aria-hidden
            className="mx-auto mt-3 h-2 w-full max-w-lg rotate-180 object-cover object-center opacity-60 sm:h-2.5"
          />
        </div>
      </div>

      <div className="relative mx-auto mt-4 max-w-2xl text-center sm:mt-5">
        {(badge || subtitle) && (
          <div className="mb-3 space-y-2 sm:mb-4 sm:space-y-2.5">
            {badge && (
              <p>
                <span className="inline-block rounded-full border-2 border-gold/55 bg-gradient-to-b from-gold/20 to-gold/10 px-6 py-2.5 text-xs font-extrabold uppercase tracking-[0.22em] text-gold shadow-[0_8px_24px_rgba(184,137,45,0.22)] sm:px-8 sm:py-3 sm:text-sm">
                  {badge}
                </span>
              </p>
            )}

            {subtitle && (
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-gold sm:text-base md:text-lg">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <h3 className="font-display text-[2rem] font-bold leading-[1.08] text-green-deep sm:text-[2.35rem] md:text-[2.75rem] lg:text-5xl">
          <span className="relative inline-block px-1">
            {title}
            <span
              className="absolute -bottom-1.5 left-1/2 h-1 w-[95%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-gold/50 to-transparent"
              aria-hidden
            />
          </span>
        </h3>

        <p className="mx-auto mt-4 max-w-xl text-base font-medium leading-relaxed text-green/80 sm:mt-5 sm:text-[1.0625rem] md:text-lg">
          {description}
        </p>

        {children}

        {tags?.length > 0 && <RotatingTopicLine items={tags} />}
      </div>
    </Reveal>
  )
}
