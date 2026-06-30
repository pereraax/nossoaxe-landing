import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import Reveal, { RevealGroup } from '../ui/Reveal'
import CheckoutCTA from '../ui/CheckoutCTA'
import { SectionLabel, SectionTitle } from '../ui/SectionLabel'
import { IMAGES } from '../../config/assets'

const faqs = [
  {
    q: 'Recebo imediatamente?',
    a: 'Sim. Após a confirmação do pagamento, o acesso é enviado por e-mail em instantes, com link para download dos PDFs.',
  },
  {
    q: 'É PDF?',
    a: 'Sim. Os dois guias são entregues em formato PDF digital, compatíveis com celular, tablet e computador.',
  },
  {
    q: 'Funciona no celular?',
    a: 'Sim. O material foi estruturado pensando na consulta mobile — layout claro, organizado e fácil de navegar.',
  },
  {
    q: 'Serve para iniciantes?',
    a: 'Sim. A linguagem é acessível e o conteúdo está organizado por finalidade, ideal para quem está aprendendo ou busca referência.',
  },
  {
    q: 'Como recebo?',
    a: 'Você recebe um e-mail com o link de acesso logo após a aprovação do pagamento. Basta baixar e consultar quando quiser.',
  },
  {
    q: 'Posso imprimir?',
    a: 'Sim. Por ser PDF, você pode imprimir as páginas que desejar para consulta offline, se preferir.',
  },
  {
    q: 'Tem garantia?',
    a: 'Sim. Você tem 7 dias de garantia incondicional. Se o material não atender suas expectativas, solicite o reembolso dentro desse prazo.',
  },
]

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border-2 bg-gradient-to-br from-green-deep via-green to-green-deep shadow-[0_12px_40px_rgba(21,41,33,0.2)] transition-all duration-300 sm:rounded-[1.375rem] ${
        isOpen
          ? 'border-gold/45 shadow-[0_16px_48px_rgba(21,41,33,0.28)]'
          : 'border-gold/25 hover:border-gold/35'
      }`}
    >
      <img
        src={IMAGES.decor.faixa}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-2.5 w-full object-cover object-center opacity-65 sm:h-3"
      />

      <button
        type="button"
        onClick={onToggle}
        className="relative flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-[1.125rem]"
        aria-expanded={isOpen}
      >
        <span className="pr-2 font-medium leading-snug text-white sm:text-[1.0625rem] md:text-lg">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
            isOpen
              ? 'border-gold/50 bg-gold/25'
              : 'border-gold/30 bg-gold/15'
          }`}
        >
          <Plus className="h-4 w-4 text-gold-light" strokeWidth={2.25} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="border-t border-white/12 px-5 pb-4 pt-2 text-sm leading-relaxed text-white/82 sm:px-6 sm:pb-5 md:text-base">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section-gap">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Dúvidas</SectionLabel>
          <SectionTitle>Perguntas frequentes</SectionTitle>
        </Reveal>

        <RevealGroup className="mx-auto mt-8 max-w-2xl space-y-3 sm:mt-10 sm:space-y-3.5">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q}>
                <FaqItem
                  item={item}
                  isOpen={isOpen}
                  onToggle={() => setOpen(isOpen ? -1 : i)}
                />
              </Reveal>
            )
          })}
        </RevealGroup>

        <Reveal delay={60}>
          <CheckoutCTA className="mt-7 sm:mt-8" fullWidth />
        </Reveal>
      </div>
    </section>
  )
}
