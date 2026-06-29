import { Check } from 'lucide-react'
import AssetImage from '../ui/AssetImage'
import FadeIn from '../ui/FadeIn'
import { SectionTitle } from '../ui/SectionLabel'
import { IMAGES } from '../../config/assets'

const items = [
  'Guia Prático de Ebós',
  'Guia das Ervas',
  'PDF Digital',
  'Acesso imediato',
  'Material ilustrado',
]

export default function KitCompleto() {
  return (
    <section className="section-gap">
      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="left">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-green/3 blur-2xl" aria-hidden />
              <AssetImage
                src={IMAGES.kit.completo}
                alt="[PLACEHOLDER] Kit completo — livro principal, bônus, tablet e celular"
                width={1000}
                height={800}
                className="relative mx-auto w-full max-w-xl object-contain"
              />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              O Kit Completo
            </p>
            <SectionTitle>Tudo o que você recebe</SectionTitle>

            <ul className="mt-10 space-y-4">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-green/6 bg-white/50 px-5 py-4 transition-colors duration-300 hover:border-gold/20 hover:bg-white"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/12">
                    <Check className="h-4 w-4 text-gold" strokeWidth={2.5} />
                  </span>
                  <span className="font-medium text-green">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
