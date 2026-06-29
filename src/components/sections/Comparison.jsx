import { X, Check } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const without = [
  'Material desorganizado',
  'Informações espalhadas',
  'Difícil consulta',
]

const withKit = [
  'Tudo organizado',
  'Fácil consulta',
  'Material ilustrado',
  'PDF Premium',
]

export default function Comparison() {
  return (
    <section className="section bg-surface">
      <div className="wrap">
        <SectionHeader title="Por que escolher o Kit?" />

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
            <h3 className="mb-4 text-center text-base font-bold text-muted">Sem o Kit</h3>
            <ul className="space-y-3">
              {without.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted">
                  <X className="h-5 w-5 shrink-0 text-red-400" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-green bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-center text-base font-bold text-green">Com o Kit</h3>
            <ul className="space-y-3">
              {withKit.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-green">
                  <Check className="h-5 w-5 shrink-0 text-gold" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
