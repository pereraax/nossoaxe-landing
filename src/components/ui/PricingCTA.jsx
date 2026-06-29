import Button from './Button'
import { PRICE_SECTION_ID } from '../../config/checkout'

export default function PricingCTA({
  className = '',
  size = 'lg',
  label = 'Acessar o kit agora',
  animated = true,
}) {
  return (
    <div className={`flex justify-center ${className}`}>
      <Button href={PRICE_SECTION_ID} size={size} variant="green" animated={animated}>
        {label}
      </Button>
    </div>
  )
}
