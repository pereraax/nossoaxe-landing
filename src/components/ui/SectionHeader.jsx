export default function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="mb-8 text-center md:mb-10">
      {label && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold">{label}</p>
      )}
      <h2 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-3 max-w-md text-sm text-muted md:text-base">{subtitle}</p>}
    </div>
  )
}
