import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAMES = [
  'Flávia', 'Amanda', 'Carlos', 'Juliana', 'Fernanda', 'Rafael',
  'Patrícia', 'Marcos', 'Camila', 'Renata', 'Bruno', 'Larissa',
]

const INTERVAL = 15000
const VISIBLE = 5000

export default function ActivityPopup() {
  const [visible, setVisible] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let hideTimer
    let idx = 0

    const cycle = () => {
      setIndex(idx)
      setVisible(true)
      idx = (idx + 1) % NAMES.length

      hideTimer = setTimeout(() => {
        setVisible(false)
        setTimeout(cycle, INTERVAL)
      }, VISIBLE)
    }

    const start = setTimeout(cycle, 4000)
    return () => {
      clearTimeout(start)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-20 left-4 z-50 max-w-[300px] md:bottom-6"
          role="status"
        >
          <div className="flex items-center gap-3 rounded-[14px] bg-green px-4 py-3.5 shadow-lg">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <p className="text-sm text-white">
              <span className="font-semibold">{NAMES[index]}</span> acabou de garantir seu Kit.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
