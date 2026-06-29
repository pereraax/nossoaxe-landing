import { CHECKOUT_URL, PRICE } from '../../config/checkout'
import { useScrollPast } from '../../hooks/useScrollPosition'

export default function StickyBar() {
  const show = useScrollPast(400)

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white px-4 py-3 shadow-lg md:hidden">
      <div className="flex items-center gap-3">
        <div className="shrink-0">
          <p className="font-extrabold text-lg text-green">{PRICE.current}</p>
        </div>
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-[14px] bg-green py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-gold"
        >
          Comprar agora
        </a>
      </div>
    </div>
  )
}
