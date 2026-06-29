import { useCallback, useEffect, useRef } from 'react'
import {
  BookOpen,
  Download,
  Search,
  ShieldCheck,
  Smartphone,
  TreeDeciduous,
} from 'lucide-react'

const AUTO_SPEED = 1.1
const RESUME_MS = 2800

const features = [
  { icon: TreeDeciduous, label: 'Conhecimento Ancestral' },
  { icon: BookOpen, label: 'Material Ilustrado' },
  { icon: Search, label: 'Consulta Rápida' },
  { icon: Smartphone, label: 'Linguagem Acessível' },
  { icon: Download, label: 'Acesso Imediato' },
]

function FeatureItem({ icon: Icon, label }) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-1 px-1 text-center sm:gap-1.5 sm:px-1.5">
      <Icon className="h-5 w-5 shrink-0 text-gold sm:h-6 sm:w-6" strokeWidth={1.75} />
      <span className="max-w-[4.75rem] text-[9px] font-bold uppercase leading-tight tracking-wide text-gold sm:max-w-[5.25rem] sm:text-[10px]">
        {label}
      </span>
    </div>
  )
}

function GuaranteeItem() {
  return (
    <div className="flex shrink-0 items-center gap-1.5 rounded-xl border border-gold/40 bg-gold px-2.5 py-1.5 sm:gap-2 sm:rounded-2xl sm:px-3 sm:py-2">
      <ShieldCheck className="h-5 w-5 shrink-0 text-green-deep sm:h-6 sm:w-6" strokeWidth={2} />
      <div className="whitespace-nowrap text-left leading-tight text-green-deep">
        <p className="text-[9px] font-extrabold uppercase tracking-wide sm:text-[10px]">
          Garantia de 7 dias
        </p>
        <p className="text-[8px] font-semibold uppercase tracking-wide opacity-85 sm:text-[9px]">
          Satisfação ou reembolso
        </p>
      </div>
    </div>
  )
}

export default function HeroTrustBar() {
  const scrollRef = useRef(null)
  const pauseUntilRef = useRef(0)
  const programmaticRef = useRef(false)
  const resumeTimerRef = useRef(null)

  const items = [
    ...features.map((f) => ({ type: 'feature', ...f })),
    { type: 'guarantee' },
  ]
  const looped = [...items, ...items]

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
    <div className="relative w-full bg-green-deep py-4 shadow-[0_10px_40px_rgba(0,0,0,0.28)] sm:py-5">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-green-deep to-transparent sm:w-12"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-green-deep to-transparent sm:w-12"
        aria-hidden
      />

      <div
        ref={scrollRef}
        className="trust-bar-scroll cursor-grab overflow-x-auto py-1 active:cursor-grabbing"
        aria-label="Benefícios do kit — deslize para explorar"
      >
        <div className="flex w-max items-center gap-1.5 sm:gap-2">
          {looped.map((item, i) =>
            item.type === 'guarantee' ? (
              <GuaranteeItem key={`guarantee-${i}`} />
            ) : (
              <FeatureItem key={`${item.label}-${i}`} icon={item.icon} label={item.label} />
            ),
          )}
        </div>
      </div>
    </div>
  )
}
