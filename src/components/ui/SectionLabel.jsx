export function SectionLabel({ children }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8a6520]">
      {children}
    </p>
  )
}

export function SectionTitle({ children, className = '' }) {
  return (
    <h2
      className={`font-display text-3xl font-bold leading-[1.15] text-green-deep md:text-4xl lg:text-[2.65rem] ${className}`}
    >
      {children}
    </h2>
  )
}

export function SectionSubtitle({ children, className = '' }) {
  return (
    <p
      className={`mt-4 max-w-2xl text-base font-medium leading-relaxed text-green/85 md:text-lg md:leading-relaxed ${className}`}
    >
      {children}
    </p>
  )
}
