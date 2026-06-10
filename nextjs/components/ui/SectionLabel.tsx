interface SectionLabelProps {
  children: React.ReactNode
  color?: string
  className?: string
}

export default function SectionLabel({ children, color = '#128341', className = '' }: SectionLabelProps) {
  return (
    <span
      className={`text-sm font-body font-medium uppercase tracking-widest ${className}`}
      style={{ color }}
    >
      {children}
    </span>
  )
}
