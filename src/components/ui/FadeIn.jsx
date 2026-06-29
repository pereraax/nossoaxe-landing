import Reveal from './Reveal'

/** @deprecated Prefer Reveal — mantido para compatibilidade */
export default function FadeIn({
  children,
  className = '',
  delay = 0,
  staggerIndex,
  direction: _direction,
  disabled = false,
  as,
  ...props
}) {
  const delayMs = delay < 1 && delay > 0 ? Math.round(delay * 1000) : delay

  return (
    <Reveal
      className={className}
      delay={delayMs}
      staggerIndex={staggerIndex}
      disabled={disabled}
      as={as}
      {...props}
    >
      {children}
    </Reveal>
  )
}

FadeIn.displayName = 'FadeIn'
