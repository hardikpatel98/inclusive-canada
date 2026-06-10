'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16 lg:pt-20">
      {/* Subtle background texture — four quadrant color washes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#128341]/4 rounded-bl-[120px]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#0097A7]/4 rounded-tr-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <SectionLabel className="mb-4 block">
                Fostering Diversity and Inclusion in Canada
              </SectionLabel>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display font-extrabold text-5xl lg:text-[3.5rem] xl:text-6xl text-[#111827] tracking-tightest leading-none mb-6"
            >
              Empowering{' '}
              <span className="text-[#128341]">Communities</span>
              <br />
              Through Inclusion.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-[#6B7280] text-lg leading-relaxed mb-8 max-w-lg"
            >
              Inclusive Canada Foundation builds belonging through Sports, Education, Health, and Culture, for every newcomer, family, and community.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-wrap gap-3"
            >
              <Button href="/contact" variant="primary">Get involved</Button>
              <Button href="/programs" variant="secondary">See our programs</Button>
            </motion.div>

            {/* Four pillar color pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {[
                { label: 'Sports',    color: '#128341' },
                { label: 'Education', color: '#E30613' },
                { label: 'Health',    color: '#0097A7' },
                { label: 'Culture',   color: '#FF8C00' },
              ].map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-1.5 text-xs font-body font-medium px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: `${p.color}15`, color: p.color }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.color }} />
                  {p.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Logo mark — large, animated */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full bg-[#128341]/10 blur-3xl scale-110" />
              <div className="absolute inset-0 rounded-full bg-[#E30613]/6 blur-2xl scale-95" />
              <Image
                src="/logo/logo-icon.png"
                alt="Inclusive Canada Foundation logo mark"
                width={420}
                height={420}
                priority
                className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-[420px] xl:h-[420px] drop-shadow-[0_20px_60px_rgba(18,131,65,0.18)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
