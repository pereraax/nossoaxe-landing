import { useCallback, useEffect, useRef } from 'react'
import AssetImage from './AssetImage'
import TestimonialStars from './TestimonialStars'
import { IMAGES } from '../../config/assets'

const AUTO_SPEED = 0.45
const RESUME_MS = 4000

function TestimonialCard({ review }) {
  return (
    <article className="testimonial-card group relative flex h-full w-[min(88vw,21.5rem)] shrink-0 flex-col overflow-hidden rounded-[1.625rem] border-2 border-gold/30 bg-gradient-to-b from-card via-white to-gold/[0.09] p-6 shadow-[0_18px_52px_rgba(33,67,50,0.12),0_0_0_1px_rgba(184,137,45,0.1)] transition-all duration-500 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_24px_64px_rgba(33,67,50,0.16),0_0_28px_rgba(184,137,45,0.12)] sm:w-[min(42vw,22rem)] sm:p-7 lg:w-[min(30vw,23rem)]">
      <img
        src={IMAGES.decor.faixa}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-2.5 w-full object-cover object-center opacity-80"
      />

      <span
        className="pointer-events-none absolute right-4 top-5 font-display text-5xl leading-none text-gold/15 sm:right-5 sm:text-6xl"
        aria-hidden
      >
        &ldquo;
      </span>

      <div className="relative flex items-center gap-3.5 pt-1">
        <div className="shrink-0 rounded-full bg-gradient-to-br from-gold/35 to-gold/10 p-0.5 shadow-[0_6px_18px_rgba(184,137,45,0.22)]">
          <AssetImage
            src={review.avatar}
            alt={`Foto de ${review.name}`}
            width={112}
            height={112}
            className="h-14 w-14 rounded-full object-cover ring-2 ring-white sm:h-[3.75rem] sm:w-[3.75rem]"
          />
        </div>

        <div className="min-w-0">
          <p className="font-display text-base font-bold text-green-deep sm:text-[1.0625rem]">
            {review.name}
          </p>
          <p className="text-[11px] font-medium text-green/55 sm:text-xs">{review.location}</p>
          <TestimonialStars className="mt-1.5" />
        </div>
      </div>

      <p className="relative mt-5 flex-1 text-sm leading-[1.75] text-green-deep/88 sm:text-[0.9375rem]">
        &ldquo;{review.text}&rdquo;
      </p>
    </article>
  )
}

export default function TestimonialsCarousel({ reviews, ariaLabel = 'Depoimentos de clientes' }) {
  const scrollRef = useRef(null)
  const pauseUntilRef = useRef(0)
  const programmaticRef = useRef(false)
  const resumeTimerRef = useRef(null)

  const looped = [...reviews, ...reviews]

  const pauseForUser = useCallback(() => {
    pauseUntilRef.current = Date.now() + RESUME_MS
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = setTimeout(() => {
      pauseUntilRef.current = 0
    }, RESUME_MS)
  }, [])

  const wrapScroll = useCallback((el) => {
    const half = el.scrollWidth / 2
    if (half <= 0) return
    if (el.scrollLeft >= half - 1) el.scrollLeft -= half
    if (el.scrollLeft <= 0) el.scrollLeft += half
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const half = el.scrollWidth / 2
    if (half > 0) el.scrollLeft = half * 0.15

    let frameId = 0

    const tick = () => {
      if (Date.now() >= pauseUntilRef.current) {
        programmaticRef.current = true
        el.scrollLeft += AUTO_SPEED
        wrapScroll(el)
      }
      frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)

    const onScroll = () => {
      if (programmaticRef.current) {
        programmaticRef.current = false
        return
      }
      pauseForUser()
      wrapScroll(el)
    }

    el.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(frameId)
      el.removeEventListener('scroll', onScroll)
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    }
  }, [pauseForUser, wrapScroll, reviews.length])

  return (
    <div className="relative -mx-5 sm:-mx-6 lg:-mx-8">
      <div
        ref={scrollRef}
        className="preview-carousel-scroll cursor-grab overflow-x-auto overflow-y-visible py-2 active:cursor-grabbing sm:py-3"
        aria-label={ariaLabel}
        role="region"
      >
        <div className="flex w-max items-stretch gap-4 px-5 sm:gap-5 sm:px-6 lg:gap-6 lg:px-8">
          {looped.map((review, i) => (
            <TestimonialCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>

      <p className="mt-4 text-center text-xs font-medium text-green/50 sm:text-sm">
        Deslize para ver mais depoimentos →
      </p>
    </div>
  )
}
