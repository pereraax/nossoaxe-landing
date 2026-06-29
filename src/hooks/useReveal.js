import { useEffect, useState } from 'react'

export const REVEAL_OBSERVER_OPTIONS = {
  threshold: 0.18,
  rootMargin: '0px 0px -10% 0px',
}

export function useReveal(ref, { disabled = false, once = true, ...options } = {}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (disabled) {
      setVisible(true)
      return undefined
    }

    const el = ref.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setVisible(false)
        }
      },
      { ...REVEAL_OBSERVER_OPTIONS, ...options },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [disabled, once, ref])

  return visible
}
