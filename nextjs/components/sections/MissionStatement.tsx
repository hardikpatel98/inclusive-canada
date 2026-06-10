'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function MissionStatement() {
  return (
    <section className="py-16 lg:py-24 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-[#111827] tracking-tight leading-tight mb-8"
          >
            "We don&apos;t just open doors.
            <br />
            <span className="text-[#128341]">We build the rooms.</span>"
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-[#6B7280] text-lg leading-relaxed mb-8"
          >
            Inclusive Canada Foundation is a registered nonprofit dedicated to removing barriers and building genuine belonging, not just access, for newcomers and marginalized communities across Canada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-body font-semibold text-[#128341] hover:gap-3 transition-[gap] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128341] rounded"
            >
              About us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
