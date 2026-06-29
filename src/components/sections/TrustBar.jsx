import { Check } from 'lucide-react'
import FadeIn from '../ui/FadeIn'

const items = [
  'Compra Segura',
  'Download imediato',
  'Compatível com celular',
  'PDF Digital',
  'Garantia de 7 dias',
]

export default function TrustBar() {
  return (
    <section className="border-y border-green/8 bg-white/40 py-5 backdrop-blur-sm">
      <FadeIn>
        <div className="container-page">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-12">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-green">
                <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </section>
  )
}
