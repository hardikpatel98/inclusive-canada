import Hero from '@/components/sections/Hero'
import ImpactStats from '@/components/sections/ImpactStats'
import PillarsOverview from '@/components/sections/PillarsOverview'
import MissionStatement from '@/components/sections/MissionStatement'
import FeaturedProgram from '@/components/sections/FeaturedProgram'
import PartnersStrip from '@/components/sections/PartnersStrip'
import NewsletterCTA from '@/components/sections/NewsletterCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <PillarsOverview />
      <MissionStatement />
      <FeaturedProgram />
      <PartnersStrip />
      <NewsletterCTA />
    </>
  )
}
