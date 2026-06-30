import { useEffect, useRef, useState } from 'react'
import AssetImage from './AssetImage'
import TestimonialStars from './TestimonialStars'
import { IMAGES } from '../../config/assets'

const PX_PER_SECOND = 28
const PAUSE_MS = 4000

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
  const trackRef = useRef(null)
  const pauseTimerRef = useRef(null)
  const [duration, setDuration] = useState(60)
  const [paused, setPaused] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const looped = [...reviews, ...reviews]

  useEffect(() => {
    const measure = () => {
      const el = trackRef.current
      if (!el) return
      const half = el.scrollWidth / 2
      if (half > 0) {
        setDuration(Math.max(36, half / PX_PER_SECOND))
      }
    }

    measure()

    const ro = new ResizeObserver(measure)
    if (trackRef.current) ro.observe(trackRef.current)

    window.addEventListener('load', measure, { once: true })

    return () => {
      ro.disconnect()
      window.removeEventListener('load', measure)
    }
  }, [reviews])

  useEffect(() => {
    const stepMs = Math.max(3000, (duration * 1000) / reviews.length)
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length)
    }, stepMs)

    return () => clearInterval(timer)
  }, [duration, reviews.length])

  const pauseBriefly = () => {
    setPaused(true)
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current)
    pauseTimerRef.current = setTimeout(() => {
      setPaused(false)
    }, PAUSE_MS)
  }

  useEffect(
    () => () => {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current)
    },
    [],
  )

  return (
    <div className="relative -mx-5 sm:-mx-6 lg:-mx-8">
      <div
        className="testimonials-marquee-viewport overflow-hidden py-2 sm:py-3"
        aria-label={ariaLabel}
        role="region"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={pauseBriefly}
      >
        <div
          ref={trackRef}
          className={`testimonials-marquee-track flex w-max items-stretch gap-4 px-5 sm:gap-5 sm:px-6 lg:gap-6 lg:px-8${paused ? ' is-paused' : ''}`}
          style={{ animationDuration: `${duration}s` }}
        >
          {looped.map((review, i) => (
            <TestimonialCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5 sm:mt-5">
        {reviews.map((review, index) => (
          <span
            key={review.name}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === activeIndex ? 'w-6 bg-gold' : 'w-1.5 bg-gold/25'
            }`}
            aria-hidden
          />
        ))}
      </div>

      <p className="mt-3 text-center text-xs font-medium text-green/50 sm:text-sm">
        Deslize ou toque para pausar momentaneamente →
      </p>
    </div>
  )
}
