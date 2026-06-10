'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { Pillar } from '@/lib/pillars'

interface PillarCardProps {
  pillar: Pillar
  index?: number
}

export default function PillarCard({ pillar, index = 0 }: PillarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-shadow duration-300"
      style={{ borderTop: `4px solid ${pillar.hex}` }}
    >
      <div className="mb-5">
        <Image
          src={pillar.image}
          alt={`${pillar.name} pillar icon`}
          width={56}
          height={56}
          className="w-14 h-14"
        />
      </div>

      <h3
        className="font-display font-bold text-xl mb-3"
        style={{ color: pillar.hex }}
      >
        {pillar.name}
      </h3>

      <p className="text-[#6B7280] text-base leading-relaxed mb-5">
        {pillar.description}
      </p>

      <Link
        href={pillar.path}
        className="inline-flex items-center gap-1.5 text-sm font-semibold font-body transition-[gap] duration-200 group-hover:gap-2.5"
        style={{ color: pillar.hex }}
      >
        Learn more
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  )
}
