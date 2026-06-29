import { Children, cloneElement, isValidElement, useRef } from 'react'
import { useReveal } from '../../hooks/useReveal'

export const STAGGER_MS = 50

function isRevealElement(type) {
  return (
    type === Reveal ||
    type?.displayName === 'Reveal' ||
    type?.displayName === 'FadeIn'
  )
}

export function RevealGroup({ children, className = '', as: Tag = 'div', ...props }) {
  let staggerCounter = 0

  const processed = Children.map(children, (child) => {
    if (!isValidElement(child)) return child

    if (!isRevealElement(child.type) || child.props.staggerIndex != null) return child

    const next = cloneElement(child, { staggerIndex: staggerCounter })
    staggerCounter += 1
    return next
  })

  return (
    <Tag className={className} {...props}>
      {processed}
    </Tag>
  )
}

export default function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  staggerIndex = 0,
  disabled = false,
  style,
  ...props
}) {
  const ref = useRef(null)
  const visible = useReveal(ref, { disabled })
  const totalDelay = delay + staggerIndex * STAGGER_MS

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' visible' : ''}${className ? ` ${className}` : ''}`}
      style={{
        '--reveal-delay': `${totalDelay}ms`,
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  )
}

Reveal.displayName = 'Reveal'
