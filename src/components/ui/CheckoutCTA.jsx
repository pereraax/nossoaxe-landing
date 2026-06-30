import Button from './Button'

export default function CheckoutCTA({
  className = '',
  size = 'lg',
  label = 'Comprar',
  fullWidth = false,
}) {
  return (
    <div className={`flex justify-center px-1 ${className}`}>
      <Button
        size={size}
        variant="green"
        fullWidth={fullWidth}
        breathe
        className={fullWidth ? '!max-w-md' : 'sm:!max-w-xs'}
      >
        {label}
      </Button>
    </div>
  )
}
