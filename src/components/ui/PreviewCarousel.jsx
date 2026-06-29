import { useCallback, useEffect, useRef } from 'react'
import AssetImage from './AssetImage'

const AUTO_SPEED = 0.85
const RESUME_MS = 3000

export default function PreviewCarousel({ slides, ariaLabel = 'Prévia das páginas do material' }) {
  const scrollRef = useRef(null)
  const pauseUntilRef = useRef(0)
  const programmaticRef = useRef(false)
  const resumeTimerRef = useRef(null)

  const looped = [...slides, ...slides]

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
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

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
  }, [pauseForUser, wrapScroll])

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="preview-carousel-scroll cursor-grab overflow-x-auto overflow-y-visible py-3 active:cursor-grabbing sm:py-4"
        aria-label={ariaLabel}
      >
        <div className="flex w-max items-center gap-5 px-5 sm:gap-6 sm:px-8 md:gap-8 md:px-10">
          {looped.map((slide, i) => (
            <figure
              key={`${slide.src}-${i}`}
              className="group shrink-0 overflow-visible transition-transform duration-500 hover:-translate-y-1"
            >
              <AssetImage
                src={slide.src}
                alt={slide.alt}
                width={3120}
                height={1755}
                className="block h-auto w-[min(94vw,52rem)] max-w-none object-contain object-center sm:w-[min(88vw,54rem)] md:w-[52rem]"
              />
            </figure>
          ))}
        </div>
      </div>

      <p className="mt-4 text-center text-xs font-medium text-green/50 sm:text-sm">
        Deslize para explorar as páginas →
      </p>
    </div>
  )
}
