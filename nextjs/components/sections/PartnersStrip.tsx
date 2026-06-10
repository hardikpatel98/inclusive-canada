import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'

const partners = [
  { name: 'Government of Canada',                    file: 'government-of-canada.jpg' },
  { name: 'Government of British Columbia',           file: 'government-of-bc.png' },
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

export default function PartnersStrip() {
  return (
    <section className="py-14 lg:py-20 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <SectionLabel color="#6B7280" className="mb-2 block">Supported By</SectionLabel>
          <h2 className="font-display font-bold text-2xl lg:text-3xl text-[#111827]">Our partners and funders</h2>
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
      </div>
    </section>
  )
}
