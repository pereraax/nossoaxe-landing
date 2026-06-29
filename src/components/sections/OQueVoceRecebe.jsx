import ProductShowcase from '../ui/ProductShowcase'
import PricingCTA from '../ui/PricingCTA'
import Reveal from '../ui/Reveal'
import { SectionLabel, SectionTitle } from '../ui/SectionLabel'
import { IMAGES } from '../../config/assets'

const guiaPrincipal = [
  'Ebós',
  'Banhos',
  'Defumações',
  'Oferendas',
  'Proteção',
  'Prosperidade',
  'Limpeza',
]

const guiaErvas = [
  'Ervas e propriedades',
  'Combinações sagradas',
  'Conservação e cuidados',
  'Dicas práticas',
]

export default function OQueVoceRecebe() {
  return (
    <section className="section-gap">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>O que você recebe</SectionLabel>
          <SectionTitle>Dois guias, um único acesso</SectionTitle>
        </Reveal>

        <div className="mt-8 space-y-12 sm:mt-10 sm:space-y-14 lg:space-y-16">
          <ProductShowcase
            image={IMAGES.kit.livroPrincipal}
            alt="Guia Prático de Ebós e Banhos"
            title="Guia Prático de Ebós e Banhos"
            subtitle="Kit principal"
            description="Reúne conteúdos organizados sobre práticas tradicionais, apresentados de forma ilustrada e acessível para consulta imediata."
            tags={guiaPrincipal}
          />

          <div className="relative" aria-hidden>
            <div className="mx-auto h-px w-full max-w-xs bg-gradient-to-r from-transparent via-gold/35 to-transparent sm:max-w-sm" />
            <img
              src={IMAGES.decor.faixa}
              alt=""
              className="mx-auto mt-3 h-2.5 w-full max-w-md object-cover object-center opacity-70 sm:h-3"
            />
          </div>

          <ProductShowcase
            delay={40}
            image={IMAGES.bonus.mockup}
            alt="Guia das Ervas Sagradas — bônus exclusivo"
            badge="Bônus exclusivo"
            subtitle="Incluso grátis no kit"
            title="Guia das Ervas Sagradas"
            description="Apresenta propriedades, aplicações e formas de utilização das principais ervas — complementando perfeitamente o guia principal com referências práticas e organizadas."
            tags={guiaErvas}
          />
        </div>

        <Reveal delay={60}>
          <PricingCTA className="mt-8 sm:mt-10" />
        </Reveal>
      </div>
    </section>
  )
}
