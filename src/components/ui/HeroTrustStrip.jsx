import { Lock, ShieldCheck, Smartphone, Zap } from 'lucide-react'

const items = [
  { icon: Lock, label: 'Compra 100% segura' },
  { icon: Zap, label: 'Acesso imediato' },
  { icon: Smartphone, label: 'Funciona no celular' },
  { icon: ShieldCheck, label: 'Garantia de 7 dias' },
]

export default function HeroTrustStrip() {
  return (
    <div className="edge-bleed mt-6 border-y border-gold/15 bg-[#F3EBDD] sm:mt-7">
      <div className="container-page py-3.5 sm:py-4">
        <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5 sm:grid-cols-4 sm:gap-4">
          {items.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-1.5 text-center sm:gap-2"
            >
              <Icon className="h-4 w-4 shrink-0 text-gold" strokeWidth={2.25} />
              <span className="text-[11px] font-semibold leading-tight text-green-deep sm:text-xs">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
