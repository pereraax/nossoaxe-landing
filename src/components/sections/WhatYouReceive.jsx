import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Button from '../ui/Button'
import AssetImage from '../ui/AssetImage'
import { SectionLabel, SectionTitle } from '../ui/SectionLabel'
import { PRICE } from '../../config/checkout'
import { PLACEHOLDERS } from '../../config/assets'

const checklist = [
  'Guia Prático de Ebós e Banhos',
  'Bônus: Guia das Ervas Sagradas',
  'Conteúdo organizado por intenção',
  'Acesso imediato em PDF',
  'Compatível com celular e computador',
  'Atualizações gratuitas',
]

const features = [
  { label: 'Acesso imediato', icon: PLACEHOLDERS.icons.acesso },
  { label: 'Material ilustrado', icon: PLACEHOLDERS.icons.ilustrado },
  { label: 'PDF premium', icon: PLACEHOLDERS.icons.pdf },
  { label: 'Garantia 7 dias', icon: PLACEHOLDERS.icons.garantia },
]

export default function WhatYouReceive() {
  return (
    <section id="conteudo" className="section-gap">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Conteúdo</SectionLabel>
          <SectionTitle>O que você recebe</SectionTitle>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center rounded-[2rem] border border-green/5 bg-card p-8 shadow-soft lg:col-span-1"
          >
            <AssetImage
              src={PLACEHOLDERS.mockup.kitCompleto}
              alt="Kit completo"
              width={600}
              height={400}
              className="w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-[2rem] border border-green/5 bg-card p-8 shadow-soft lg:col-span-1"
          >
            <ul className="space-y-4">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={2.5} />
                  <span className="text-text">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button variant="outline" size="sm">
                Ver conteúdo completo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-4 lg:col-span-1"
          >
            {features.map(({ label, icon }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-green/5 bg-card px-5 py-4 shadow-soft"
              >
                <AssetImage src={icon} alt="" width={36} height={36} className="h-9 w-9" />
                <span className="text-sm font-medium text-green">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <article className="overflow-hidden rounded-[2rem] border border-green/5 bg-card shadow-card">
            <AssetImage
              src={PLACEHOLDERS.mockup.livroPrincipal}
              alt="Livro principal"
              width={500}
              height={650}
              className="mx-auto w-full max-w-xs p-8"
            />
            <div className="border-t border-green/5 p-8">
              <h3 className="font-subtitle text-xl text-green">Kit Guia Prático de Ebós e Banhos</h3>
              <p className="mt-2 text-sm text-muted">
                Valor: <span className="line-through">{PRICE.kitOriginal}</span>
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-[2rem] border border-green/5 bg-card shadow-card">
            <AssetImage
              src={PLACEHOLDERS.mockup.livroBonus}
              alt="Livro bônus"
              width={500}
              height={650}
              className="mx-auto ml-auto w-full max-w-xs p-8 md:mr-8"
            />
            <div className="border-t border-green/5 p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold">Bônus</span>
              <h3 className="mt-1 font-subtitle text-xl text-green">Guia das Ervas Sagradas</h3>
              <p className="mt-2 text-sm text-muted">
                Valor: <span className="line-through">{PRICE.ervasOriginal}</span>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
