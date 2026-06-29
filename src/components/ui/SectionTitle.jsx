export default function SectionTitle({ eyebrow, title, subtitle, light = false, center = true }) {
  const align = center ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`mb-10 md:mb-14 max-w-2xl ${align}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-medium uppercase tracking-[0.2em] ${
            light ? 'text-gold-light' : 'text-gold'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight ${
          light ? 'text-white' : 'text-green'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? 'text-white/80' : 'text-text-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
