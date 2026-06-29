import Reveal from '../ui/Reveal'
import TestimonialsCarousel from '../ui/TestimonialsCarousel'
import PricingCTA from '../ui/PricingCTA'
import { SectionLabel, SectionSubtitle, SectionTitle } from '../ui/SectionLabel'
import { IMAGES } from '../../config/assets'

const reviews = [
  {
    name: 'Camila R.',
    location: 'Salvador, BA',
    avatar: IMAGES.depoimentos.avatar1,
    text: 'Comecei a usar o guia há dois meses. Fiz o banho de arruda e alecrim e senti uma limpeza espiritual tão boa que chorei de alívio. Meu humor melhorou e as coisas começaram a fluir no meu dia a dia.',
  },
  {
    name: 'Sandra M.',
    location: 'Fortaleza, CE',
    avatar: IMAGES.depoimentos.avatar2,
    text: 'Estava desanimada com a vida profissional. Segui o ebó da canela e mel com fé e, em poucas semanas, recebi uma proposta de trabalho que eu nem esperava. Material respeitoso e muito claro.',
  },
  {
    name: 'Luciana S.',
    location: 'Belo Horizonte, MG',
    avatar: IMAGES.depoimentos.avatar3,
    text: 'Preparei a defumação de limpeza em casa seguindo o passo a passo. Senti o ambiente mais leve na mesma noite. Hoje durmo melhor e acordo com mais paz. Indico de coração.',
  },
  {
    name: 'Patrícia O.',
    location: 'São Paulo, SP',
    avatar: IMAGES.depoimentos.avatar4,
    text: 'Fiz o ebó de prosperidade indicado no material e consegui quitar uma dívida que me tirava o sono. Não foi sorte — foi orientação certa, fé e constância. O kit vale cada centavo.',
  },
  {
    name: 'Vera L.',
    location: 'Curitiba, PR',
    avatar: IMAGES.depoimentos.avatar5,
    text: 'O que mais me ajudou foi a organização: encontro o ebó certo na hora que preciso. Fiz limpeza espiritual com as ervas do guia e senti meu astral renovado. Estou de bem com a vida.',
  },
  {
    name: 'Renata F.',
    location: 'Recife, PE',
    avatar: IMAGES.depoimentos.avatar6,
    text: 'Depois de um período muito pesado emocionalmente, o banho espiritual do guia me trouxe um alívio que eu não sentia há meses. Gratidão por um conteúdo tão bem explicado e acessível.',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section-gap bg-white/30">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Depoimentos</SectionLabel>
          <SectionTitle>Quem já praticou com o guia</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Relatos de pessoas que usaram os ebós, banhos e defumações do material
            e sentiram resultados reais na espiritualidade e no dia a dia.
          </SectionSubtitle>
        </Reveal>

        <Reveal delay={30} className="mt-8 sm:mt-10">
          <TestimonialsCarousel reviews={reviews} />
        </Reveal>

        <Reveal delay={60}>
          <PricingCTA className="mt-8 sm:mt-10" />
        </Reveal>
      </div>
    </section>
  )
}
