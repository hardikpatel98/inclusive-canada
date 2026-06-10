import StatCounter from '@/components/ui/StatCounter'
import { impactStats } from '@/lib/stats'

export default function ImpactStats() {
  return (
    <section className="bg-[#111827] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {impactStats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              prefix={stat.prefix}
            />
          ))}
        </div>
        <p className="text-center text-white/30 text-xs font-body mt-8">
          Numbers reflect our 2021–2022 pilot season. Full data update in progress.
        </p>
      </div>
    </section>
  )
}
