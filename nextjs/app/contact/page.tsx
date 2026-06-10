import type { Metadata } from 'next'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Inclusive Canada Foundation',
  description: 'Get in touch with Inclusive Canada Foundation. We are based in Surrey, BC and available Monday to Friday, 9 AM to 5 PM PT.',
}

const contactInfo = [
  {
    icon: MapPin,
    label: 'Office location',
    value: 'Surrey, BC, Canada',
    href: 'https://maps.google.com/?q=Surrey+BC+Canada',
  },
  {
    icon: Mail,
    label: 'Email us',
    value: 'help@inclusivecanada.com',
    href: 'mailto:help@inclusivecanada.com',
  },
  {
    icon: Phone,
    label: 'Call us',
    value: '+1-778-863-8693',
    href: 'tel:+17788638693',
  },
  {
    icon: Clock,
    label: 'Hours of operation',
    value: 'Monday to Friday, 9 AM to 5 PM PT',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel color="#128341" className="mb-3 block">Reach Out</SectionLabel>
          <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-[#111827] tracking-tight mb-5">
            Contact Us
          </h1>
          <p className="text-[#6B7280] text-xl leading-relaxed max-w-2xl">
            Get in touch with us for more information or support regarding diversity and inclusion initiatives.
          </p>
        </div>
      </section>

      {/* Map + Form */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Left — map + contact info */}
            <div className="space-y-6">
              {/* Google Maps embed — Surrey, BC */}
              <div className="rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.08)] h-72 lg:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83338.74491696506!2d-122.90133455!3d49.1042920!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9e0c805a609%3A0x43e1b37b69d8b37e!2sSurrey%2C%20BC!5e0!3m2!1sen!2sca!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Inclusive Canada Foundation location — Surrey, BC"
                />
              </div>

              {/* Contact info cards */}
              <div className="bg-[#F3F4F6] rounded-2xl p-6 space-y-5">
                <h2 className="font-display font-bold text-lg text-[#111827]">Contact information</h2>
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#128341]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#128341]" />
                    </div>
                    <div>
                      <p className="text-xs font-body font-medium uppercase tracking-widest text-[#9CA3AF] mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm font-body text-[#111827] hover:text-[#128341] transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-body text-[#111827]">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.07)] p-8 lg:p-10">
              <h2 className="font-display font-bold text-2xl text-[#111827] mb-2">Send us a message</h2>
              <p className="text-[#6B7280] text-sm mb-7">
                We typically respond within 1 to 2 business days.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
