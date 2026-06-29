import { Check } from 'lucide-react'

function FeatureChip({ label }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 rounded-full border border-green/10 bg-white/70 px-5 py-2.5 shadow-sm">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green text-white">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
      <span className="whitespace-nowrap text-sm font-semibold text-green">{label}</span>
    </div>
  )
}

export default function FeatureSlider({ items }) {
  const looped = [...items, ...items]

  return (
    <div className="relative mt-8 w-full touch-pan-y overflow-hidden">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-cream to-transparent md:w-14"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-cream to-transparent md:w-14"
        aria-hidden
      />

      <div className="overflow-hidden py-1">
        <div className="feature-marquee-track flex w-max gap-3 md:gap-4">
          {looped.map((label, i) => (
            <FeatureChip key={`${label}-${i}`} label={label} />
          ))}
        </div>
      </div>
    </div>
  )
}
