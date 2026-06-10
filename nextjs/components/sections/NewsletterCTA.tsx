'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function NewsletterCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
    // TODO: wire to Resend or Mailchimp
  }

  return (
    <section className="py-16 lg:py-24 bg-[#128341]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto"
        >
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-3">
            Stay connected.
          </h2>
          <p className="text-white/75 text-lg leading-relaxed mb-8">
            Get updates on programs, events, and how you can help foster inclusion in your community.
          </p>

          {submitted ? (
            <div className="bg-white/15 rounded-2xl px-6 py-5 text-white font-body font-medium">
              Thank you. We&apos;ll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 rounded-full px-5 py-3 text-sm font-body text-[#111827] placeholder-[#9CA3AF] bg-white focus:outline-none focus:ring-2 focus:ring-white/60"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-[#E30613] text-white font-display font-semibold text-sm hover:bg-[#c4050f] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95 shadow-[0_4px_14px_rgba(0,0,0,0.2)]"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
