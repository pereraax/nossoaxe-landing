import { CreditCard, Download, Mail, MousePointerClick, Sparkles } from 'lucide-react'
import { FadeUp } from '../ui/Animate'
import SectionTitle from '../ui/SectionTitle'

const steps = [
  { icon: MousePointerClick, label: 'Clique em Comprar' },
  { icon: CreditCard, label: 'Pagamento Seguro' },
  { icon: Mail, label: 'Receba no Email' },
  { icon: Download, label: 'Baixe os PDFs' },
  { icon: Sparkles, label: 'Comece Imediatamente' },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding section-textured bg-white/40">
      <div className="container-narrow">
        <FadeUp>
          <SectionTitle
            eyebrow="Simples e Rápido"
            title="Como funciona"
            subtitle="Em poucos passos você já terá acesso ao material completo."
          />
        </FadeUp>

        <div className="mx-auto max-w-sm">
          {steps.map(({ icon: Icon, label }, i) => (
            <FadeUp key={label} delay={i * 0.1}>
              <div className="flex flex-col items-center">
                <div className="flex w-full items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green text-white shadow-soft">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 rounded-2xl border border-green/8 bg-cream px-5 py-4 shadow-soft">
                    <span className="mr-2 font-heading text-lg font-bold text-gold">
                      {i + 1}
                    </span>
                    <span className="font-medium text-green">{label}</span>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="my-2 flex flex-col items-center text-gold/40">
                    <div className="h-6 w-px bg-gold/30" />
                    <span className="text-lg leading-none">↓</span>
                  </div>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
