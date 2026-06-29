import Reveal from './Reveal'

export function FadeUp({ children, delay = 0, staggerIndex, className = '', as }) {
  const delayMs = delay < 1 && delay > 0 ? Math.round(delay * 1000) : delay

  return (
    <Reveal className={className} delay={delayMs} staggerIndex={staggerIndex} as={as}>
      {children}
    </Reveal>
  )
}

export function FadeLeft({ children, delay = 0, staggerIndex, className = '' }) {
  const delayMs = delay < 1 && delay > 0 ? Math.round(delay * 1000) : delay

  return (
    <Reveal className={className} delay={delayMs} staggerIndex={staggerIndex}>
      {children}
    </Reveal>
  )
}

export function ScaleIn({ children, delay = 0, staggerIndex, className = '' }) {
  const delayMs = delay < 1 && delay > 0 ? Math.round(delay * 1000) : delay

  return (
    <Reveal className={className} delay={delayMs} staggerIndex={staggerIndex}>
      {children}
    </Reveal>
  )
}
