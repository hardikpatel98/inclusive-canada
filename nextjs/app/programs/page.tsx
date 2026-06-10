import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { pillars } from '@/lib/pillars'

export const metadata: Metadata = {
  title: 'Programs | Inclusive Canada Foundation',
  description: 'Explore ICF programs across Sports, Education, Health, and Culture — built for newcomers and communities across Canada.',
}

const statusMap: Record<string, { label: string; color: string }> = {
  sports:    { label: 'Active',       color: '#128341' },
  education: { label: 'Coming soon',  color: '#6B7280' },
  health:    { label: 'Coming soon',  color: '#6B7280' },
  culture:   { label: 'Coming soon',  color: '#6B7280' },
}

export default function ProgramsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel color="#128341" className="mb-3 block">What We Do</SectionLabel>
          <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-[#111827] tracking-tight mb-6">
            Our Programs
          </h1>
          <p className="text-[#6B7280] text-xl leading-relaxed max-w-2xl">
            Four pillars, one mission. Every program we run is built around the belief that genuine inclusion requires action across Sports, Education, Health, and Culture.
          </p>
        </div>
      </section>

      {/* Pillar cards — expanded */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar) => {
              const status = statusMap[pillar.id]
              return (
                <div
                  key={pillar.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300"
                  style={{ borderTop: `5px solid ${pillar.hex}` }}
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <Image
                        src={pillar.image}
                        alt={`${pillar.name} pillar`}
                        width={64}
                        height={64}
                        className="w-16 h-16"
                      />
                      <span
                        className="text-xs font-body font-semibold px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: `${status.color}15`,
                          color: status.color,
                        }}
                      >
                        {status.label}
                      </span>
                    </div>

                    <h2
                      className="font-display font-bold text-2xl mb-3"
                      style={{ color: pillar.hex }}
                    >
                      {pillar.name}
                    </h2>

                    <p className="text-[#6B7280] leading-relaxed mb-6 text-base">
                      {pillar.description}
                    </p>

                    {pillar.id === 'sports' ? (
                      <Link
                        href={pillar.path}
                        className="inline-flex items-center gap-2 font-body font-semibold text-sm rounded-full px-5 py-2.5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2"
                        style={{
                          backgroundColor: pillar.hex,
                          color: '#fff',
                        }}
                      >
                        Explore {pillar.name}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm font-body text-[#9CA3AF]">
                        Page coming soon
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
