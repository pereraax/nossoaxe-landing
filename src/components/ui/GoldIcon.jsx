import PremiumImage from './PremiumImage'
import { IMAGES } from '../../config/assets'

const LABELS = {
  prosperidade: 'Prosperidade',
  protecao: 'Proteção',
  amor: 'Amor',
  trabalho: 'Trabalho',
  banhos: 'Banhos',
  defumacoes: 'Defumações',
}

export default function GoldIcon({ name, className = '' }) {
  const src = IMAGES.icons[name]
  const label = LABELS[name] ?? name

  return (
    <PremiumImage
      src={src}
      alt={label}
      width={200}
      height={200}
      className={`h-20 w-auto max-w-full md:h-24 ${className}`}
    />
  )
}
