export default function AssetImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  ...props
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={`object-contain ${className}`}
      {...props}
    />
  )
}
