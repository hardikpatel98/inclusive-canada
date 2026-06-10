import type { Metadata } from 'next'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Partners and Funders | Inclusive Canada Foundation',
  description: 'Inclusive Canada Foundation is proud to work with government bodies, community organisations, and corporate partners across BC.',
}

const partners = [
  { name: 'Government of Canada',                    file: 'government-of-canada.jpg' },
  { name: 'Government of British Columbia',          file: 'government-of-bc.png' },
  { name: 'City of Surrey',                          file: 'city-of-surrey.png' },
  { name: 'City of Burnaby',                         file: 'city-of-burnaby.jpg' },
  { name: 'City of Vancouver',                       file: 'city-of-vancouver.png' },
  { name: 'Vancouver Board of Parks and Recreation', file: 'vancouver-parks-recreation.png' },
  { name: 'Sport for Life',                          file: 'sport-for-life.png' },
  { name: 'viaSport BC',                             file: 'viasport.png' },
  { name: 'Khalsa Credit Union',                     file: 'khalsa-credit-union.png' },
  { name: 'CPRA / ACPL',                             file: 'cpra.png' },
  { name: 'Vancouver and District Cricket Association', file: 'vdca.png' },
  { name: 'University Canada West',                  file: 'ucw.jpg' },
  { name: 'Hong Mall',                               file: 'hong-mall.png' },
  { name: 'MISSS',                                   file: 'misss.png' },
  { name: 'Canadian Tire Jumpstart',                 file: 'jumpstart.png' },
  { name: 'PICS',                                    file: 'pics.png' },
  { name: 'ISU',                                     file: 'isu.png' },
  { name: 'AIS',                                     file: 'ais.png' },
  { name: "L'Occitane",                              file: 'loccitane.png' },
]

const partnerTypes = [
  {
    title: 'Government Funders',
    description: 'Federal, provincial, and municipal government partners who fund and enable our programs through grants, partnerships, and community investment.',
    color: '#128341',
  },
  {
    title: 'Community Organisations',
    description: 'Non-profits, sports federations, and community groups who co-deliver programs, share expertise, and help us reach the communities who need us most.',
    color: '#0097A7',
  },
  {
    title: 'Corporate Partners',
    description: 'Businesses who support our mission through sponsorship, in-kind contributions, and corporate league participation.',
    color: '#FF8C00',
  },
]

export default function PartnersPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel color="#128341" className="mb-3 block">Our Network</SectionLabel>
          <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-[#111827] tracking-tight mb-6">
            Partners and Funders
          </h1>
          <p className="text-[#6B7280] text-xl leading-relaxed max-w-2xl">
            Our work is made possible by a network of government bodies, community organisations, and corporate partners who share our commitment to building inclusive communities across Canada.
          </p>
        </div>
      </section>

      {/* Partner types */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerTypes.map((type) => (
              <div
                key={type.title}
                className="bg-[#F3F4F6] rounded-2xl p-6"
                style={{ borderTop: `4px solid ${type.color}` }}
              >
                <h3 className="font-display font-bold text-lg text-[#111827] mb-2">{type.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners grid */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionLabel color="#6B7280" className="mb-2 block">Supported By</SectionLabel>
            <h2 className="font-display font-bold text-2xl lg:text-3xl text-[#111827]">Our current partners</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-xl p-4 flex items-center justify-center h-28 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-200"
              >
                <Image
                  src={`/images/partners/${p.file}`}
                  alt={p.name}
                  width={180}
                  height={80}
                  className="object-contain max-h-16 w-full grayscale hover:grayscale-0 transition-[filter] duration-300"
                />
              </div>
            ))}
          </div>

          <p className="text-center text-[#9CA3AF] text-xs font-body mt-6">
            All logos are property of their respective organisations.
          </p>
        </div>
      </section>

      {/* Become a partner CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111827] rounded-2xl p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <SectionLabel color="#128341" className="mb-3 block">Work With Us</SectionLabel>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
                Become a partner
              </h2>
              <p className="text-white/70 leading-relaxed">
                Whether you are a government body, community organisation, or business, there are meaningful ways to support inclusion in your community. We welcome funding partnerships, in-kind contributions, and collaborative program delivery.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end">
              <Button href="/contact" variant="primary">Get in touch</Button>
              <Button href="mailto:help@inclusivecanada.com" variant="secondary" className="border-white text-white hover:bg-white hover:text-[#111827]">
                Email us directly
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
