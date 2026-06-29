import { useEffect, useState } from 'react'

const DURATION_MS = 8 * 60 * 1000
const STORAGE_KEY = 'nossoaxe-countdown-end'

function getEndTime() {
  const now = Date.now()
  const stored = sessionStorage.getItem(STORAGE_KEY)

  if (stored) {
    const end = Number(stored)
    if (end > now) return end
  }

  const end = now + DURATION_MS
  sessionStorage.setItem(STORAGE_KEY, String(end))
  return end
}

function formatTime(ms) {
  const safeMs = Math.max(0, ms)
  const totalSeconds = Math.floor(safeMs / 1000)
  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60

  return {
    h: String(h).padStart(2, '0'),
    m: String(m).padStart(2, '0'),
    s: String(s).padStart(2, '0'),
  }
}

export default function useCountdown() {
  const [remaining, setRemaining] = useState(() => getEndTime() - Date.now())

  useEffect(() => {
    const tick = () => setRemaining(getEndTime() - Date.now())
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return formatTime(remaining)
}
