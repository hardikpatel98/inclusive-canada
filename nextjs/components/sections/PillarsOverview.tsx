import SectionLabel from '@/components/ui/SectionLabel'
import PillarCard from '@/components/ui/PillarCard'
import { pillars } from '@/lib/pillars'

export default function PillarsOverview() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <SectionLabel className="mb-3 block">What We Do</SectionLabel>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-[#111827] tracking-tight">
            Four pillars, one mission.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
