import { useState, useEffect, useCallback } from 'react'

export function useExitIntent(enabled = true) {
  const [show, setShow] = useState(false)

  const dismiss = useCallback(() => setShow(false), [])

  useEffect(() => {
    if (!enabled) return

    const key = 'nossoaxe-exit-shown'
    if (sessionStorage.getItem(key)) return

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !sessionStorage.getItem(key)) {
        setShow(true)
        sessionStorage.setItem(key, 'true')
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [enabled])

  return { show, dismiss }
}
