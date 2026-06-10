'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'

const navLinks = [
  { label: 'About',    href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact',  href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128341] rounded-md">
            <Image
              src="/logo/logo-icon.png"
              alt="Inclusive Canada Foundation"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <div className="leading-none">
              <span className="font-display font-bold text-[#E30613] text-[13px] block leading-tight tracking-wide">Inclusive Canada</span>
              <span className="font-display font-bold text-[#128341] text-[20px] block leading-tight">Foundation</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128341] ${
                  pathname === link.href
                    ? 'text-[#128341] bg-[#128341]/8'
                    : 'text-[#111827] hover:text-[#128341] hover:bg-[#128341]/8'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" variant="primary">Get involved</Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-[#111827] hover:bg-[#F3F4F6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128341]"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[#F3F4F6] px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2.5 rounded-xl text-sm font-body font-medium text-[#111827] hover:text-[#128341] hover:bg-[#128341]/8 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Button href="/contact" variant="primary" className="w-full">Get involved</Button>
          </div>
        </div>
      )}
    </header>
  )
}
