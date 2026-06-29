import { motion } from 'framer-motion'
import PremiumImage from './PremiumImage'

export default function FloatingImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
      }}
      className={className}
    >
      <PremiumImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-full w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
      />
    </motion.div>
  )
}
