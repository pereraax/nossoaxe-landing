import PremiumImage from './PremiumImage'
import { IMAGES } from '../../config/assets'

export default function GuaranteeSeal({ className = '' }) {
  return (
    <PremiumImage
      src={IMAGES.seloGarantia}
      alt="Garantia de 7 dias — compra segura"
      width={1024}
      height={576}
      className={`h-14 w-14 object-contain md:h-16 md:w-16 ${className}`}
    />
  )
}
