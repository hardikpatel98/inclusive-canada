import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'

const programLinks = [
  { label: 'Sports',    href: '/programs/sports' },
  { label: 'Education', href: '/programs/education' },
  { label: 'Health',    href: '/programs/health' },
  { label: 'Culture',   href: '/programs/culture' },
]

const orgLinks = [
  { label: 'About Us',  href: '/about' },
  { label: 'Impact',    href: '/impact' },
  { label: 'Partners',  href: '/partners' },
  { label: 'Contact',   href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo/logo-icon.png"
                alt="Inclusive Canada Foundation"
                width={44}
                height={44}
                className="rounded-full"
              />
              <div className="leading-none">
                <span className="font-display font-bold text-[#E30613] text-[13px] block leading-tight tracking-wide">Inclusive Canada</span>
                <span className="font-display font-bold text-[#128341] text-[20px] block leading-tight">Foundation</span>
              </div>
            </div>
            <p className="text-white/60 text-sm font-body leading-relaxed mb-5">
              Empowering Communities Through Inclusion. Building belonging through Sports, Education, Health, and Culture.
            </p>
            <p className="text-white/40 text-xs font-body">
              © {new Date().getFullYear()} Inclusive Canada Foundation
            </p>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-4">Our Programs</h3>
            <ul className="space-y-2.5">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm font-body transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-4">Organization</h3>
            <ul className="space-y-2.5">
              {orgLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm font-body transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about#privacy" className="text-white/60 hover:text-white text-sm font-body transition-colors duration-150">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/about#terms" className="text-white/60 hover:text-white text-sm font-body transition-colors duration-150">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#128341] mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm font-body">Surrey, BC, Canada</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#128341] mt-0.5 shrink-0" />
                <a href="mailto:help@inclusivecanada.com" className="text-white/60 hover:text-white text-sm font-body transition-colors">
                  help@inclusivecanada.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#128341] mt-0.5 shrink-0" />
                <a href="tel:+17788638693" className="text-white/60 hover:text-white text-sm font-body transition-colors">
                  +1-778-863-8693
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#128341] mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm font-body">Monday–Friday, 9 AM–5 PM PT</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
