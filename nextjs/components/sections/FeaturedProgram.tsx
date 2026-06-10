'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { CheckCircle2 } from 'lucide-react'

const highlights = [
  'Organized cricket creating a platform for cultural exchange',
  'Supported by the Government of Canada REO program',
  "Partnership with Last Man Stands, the world's largest amateur cricket league",
  'Language, financial, and social integration barriers removed',
  'Coaching, mentorship, and community networks for newcomers',
]

export default function FeaturedProgram() {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <SectionLabel color="#128341" className="mb-4 block">Featured Program</SectionLabel>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-[#111827] tracking-tight mb-4">
              Breaking Barriers,{' '}
              <span className="text-[#128341]">Building Dreams</span>
            </h2>
            <p className="text-[#6B7280] text-lg leading-relaxed mb-6">
              Cricket is more than a sport. It&apos;s a catalyst for belonging. Through our Newcomer Cricket Program, supported by the Government of Canada&apos;s REO initiative, we&apos;ve brought together newcomers from across Surrey to play, connect, and thrive.
            </p>
            <p className="text-[#6B7280] leading-relaxed mb-8">
              In our first year alone, we supported over 40 newcomers through organized cricket, creating friendships, building confidence, and providing a supportive network for people navigating life in a new country.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#6B7280]">
                  <CheckCircle2 className="w-4 h-4 text-[#128341] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button href="/programs/sports" variant="secondary">Join a cricket league</Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_16px_48px_rgba(18,131,65,0.15)] bg-[#128341]">
              {/* Replace with real cricket photo before launch */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#128341] to-[#0d5c2e]">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="opacity-30" aria-hidden="true">
                  <circle cx="32" cy="32" r="28" stroke="white" strokeWidth="2" />
                  <path d="M20 44 L32 20 L44 44" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="32" cy="32" r="4" fill="white" opacity="0.5" />
                </svg>
                <span className="text-white/40 text-xs font-body uppercase tracking-widest">Cricket photo coming soon</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#128341]/60 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <div className="font-display font-extrabold text-3xl text-[#128341]">40+</div>
              <div className="text-xs font-body font-medium uppercase tracking-widest text-[#6B7280] mt-1">Newcomers in Year 1</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
