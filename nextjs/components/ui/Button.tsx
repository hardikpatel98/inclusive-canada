import Link from 'next/link'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display font-semibold text-sm transition-[transform,box-shadow,background-color,color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none'

  const variants = {
    primary:
      'bg-[#E30613] text-white hover:bg-[#c4050f] focus-visible:ring-[#E30613] shadow-[0_4px_14px_rgba(227,6,19,0.3)] hover:shadow-[0_6px_20px_rgba(227,6,19,0.4)]',
    secondary:
      'border-2 border-[#128341] text-[#128341] hover:bg-[#128341] hover:text-white focus-visible:ring-[#128341]',
    ghost:
      'text-[#128341] hover:bg-[#128341]/10 focus-visible:ring-[#128341]',
  }

  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  )
}
