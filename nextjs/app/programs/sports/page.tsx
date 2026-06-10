import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, CheckCircle2 } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Sports Programs | Inclusive Canada Foundation',
  description: 'Cricket leagues and sports programs for newcomers, juniors, universities, and corporates across BC. Powered by Last Man Stands.',
}

const leagues = [
  {
    id: 'newcomer',
    name: 'Newcomer Program',
    tagline: 'Breaking Barriers, Building Dreams',
    description:
      'Supported by the Government of Canada\'s REO (Reaching Each and Every One) program, our Newcomer Cricket Program removes language, financial, and social barriers so newcomers can play, connect, and build community from day one. In our first year we supported over 40 newcomers through organised cricket.',
    highlights: [
      'Government of Canada REO funding',
      'Cultural exchange through cricket',
      'Language and social integration support',
      'Coaching and mentorship network',
    ],
    color: '#128341',
    href: '/programs/sports/newcomer',
  },
  {
    id: 'junior',
    name: 'Junior Cricket Clinic',
    tagline: 'Developing the Next Generation',
    description:
      'Our Junior Cricket Clinic introduces young players to the sport in a safe, fun, and inclusive environment. We focus on skill development, teamwork, and building confidence, giving every child a chance to discover their love of cricket regardless of background or experience.',
    highlights: [
      'Open to all skill levels',
      'Qualified coaches and mentors',
      'Safe, inclusive environment',
      'Skill development and teamwork focus',
    ],
    color: '#E30613',
    href: '/programs/sports/junior',
  },
  {
    id: 'university',
    name: 'University League',
    tagline: 'Canadian University Last Man Stands Cricket League',
    description:
      'The University League brings together students from campuses across BC to compete in fast-paced 8-a-side LMS cricket. It\'s a platform for university students to stay active, build inter-campus friendships, and represent their institution on a global stage through LMS world rankings.',
    highlights: [
      '8-a-side format, fast and accessible',
      'Cross-campus competition',
      'LMS global rankings participation',
      'Social and networking opportunities',
    ],
    color: '#0097A7',
    href: '/programs/sports/university',
  },
  {
    id: 'corporate',
    name: 'Corporate League',
    tagline: 'Canadian Corporate Last Man Stands Cricket League',
    description:
      'The Corporate League gives organisations a powerful tool for team building, wellness, and diversity. Companies across BC compete in friendly LMS cricket matches that break down workplace barriers, foster cross-cultural connections, and build a sense of shared purpose beyond the office.',
    highlights: [
      'Team building and wellness',
      'Diverse workplace connections',
      'Flexible scheduling for busy professionals',
      'LMS global rankings participation',
    ],
    color: '#FF8C00',
    href: '/programs/sports/corporate',
  },
  {
    id: 'indoor',
    name: 'Indoor / Tape-Ball',
    tagline: 'Year-Round Cricket for Everyone',
    description:
      'Our Indoor and Tape-Ball cricket programs keep the community active year-round, regardless of BC\'s weather. Tape-ball cricket is a street-style format popular with South Asian communities, offering a low-barrier, high-energy way to play and stay connected through the winter months.',
    highlights: [
      'Year-round play regardless of weather',
      'Street-style tape-ball format',
      'Low barrier to entry',
      'Community favourite in the South Asian community',
    ],
    color: '#128341',
    href: '/programs/sports/indoor',
  },
  {
    id: 'other',
    name: 'Other Sports',
    tagline: 'Beyond Cricket',
    description:
      'While cricket is our cornerstone, ICF\'s Sports pillar extends to other sports that bring communities together. We support accessible sporting opportunities across disciplines, partnering with local organisations to create more spaces where newcomers and underserved communities can participate and belong.',
    highlights: [
      'Multi-sport community initiatives',
      'Partnerships with local sports clubs',
      'Focus on underserved communities',
      'Expanding program roster',
    ],
    color: '#6B7280',
    href: '/contact',
  },
]

export default function SportsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6">
            <Image
              src="/images/pillars/sports.png"
              alt="Sports pillar"
              width={72}
              height={72}
              className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 mt-1"
            />
            <div>
              <SectionLabel color="#128341" className="mb-3 block">Programs / Sports</SectionLabel>
              <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-[#111827] tracking-tight mb-5">
                Sports
              </h1>
              <p className="text-[#6B7280] text-xl leading-relaxed max-w-2xl">
                At Inclusive Canada Foundation, we believe sport is more than competition. It is a catalyst for belonging, community integration, social connection, and individual empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction + LMS */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionLabel color="#128341" className="mb-3 block">Our Approach</SectionLabel>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-[#111827] tracking-tight mb-5">
                Inclusive sport for <span className="text-[#128341]">every community.</span>
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Our Sports portfolio champions inclusive, accessible sporting opportunities that welcome people of all backgrounds, abilities, and life experiences. Through strategic partnerships and community-centred programs, we help reduce barriers and create spaces where everyone can play, connect, and thrive.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                We run programs across cricket formats designed for newcomers, juniors, university students, and corporate teams, all connected through our partnership with Last Man Stands, one of the world's largest amateur cricket networks.
              </p>
            </div>

            {/* LMS card */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-t-4 border-[#128341]">
              <SectionLabel color="#128341" className="mb-3 block">Our Key Partner</SectionLabel>
              <h3 className="font-display font-bold text-2xl text-[#111827] mb-4">Last Man Stands</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-5">
                <a
                  href="https://lastmanstandsdei.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#128341] font-semibold hover:underline"
                >
                  Last Man Stands (LMS)
                </a>
                {' '}is one of the world's largest and most innovative amateur cricket formats, designed to make cricket fun, fast-paced, and accessible for everyone. Played as 8-a-side, two-hour matches, LMS removes traditional barriers to participation and brings the joy of cricket to communities globally.
              </p>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                In Canada, LMS has become a cornerstone of inclusive sport, welcoming players from diverse cultures, ages, and skill levels to take part in organised cricket, build new friendships, and strengthen local communities through sport.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="https://www.lastmanstands.com/recent-lms-results/canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-body font-semibold text-[#128341] hover:underline focus-visible:outline-none"
                >
                  <ExternalLink className="w-4 h-4" />
                  Fixtures and results
                </a>
                <a
                  href="https://www.lastmanstands.com/lms-cricket-rankings/canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-body font-semibold text-[#128341] hover:underline focus-visible:outline-none"
                >
                  <ExternalLink className="w-4 h-4" />
                  LMS World Rankings Canada
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leagues grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel color="#128341" className="mb-3 block">All Programs</SectionLabel>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-[#111827] tracking-tight">
              Our cricket leagues and programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leagues.map((league) => (
              <div
                key={league.id}
                className="bg-white rounded-2xl p-6 shadow-[0_2px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.11)] transition-shadow duration-300 flex flex-col"
                style={{ borderTop: `4px solid ${league.color}` }}
              >
                <div className="mb-4">
                  <span
                    className="inline-block text-xs font-body font-semibold px-2.5 py-1 rounded-full mb-3"
                    style={{ backgroundColor: `${league.color}15`, color: league.color }}
                  >
                    {league.tagline}
                  </span>
                  <h3
                    className="font-display font-bold text-xl mb-3"
                    style={{ color: league.color }}
                  >
                    {league.name}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {league.description}
                  </p>
                </div>

                <ul className="space-y-2 mt-auto pt-4 border-t border-[#F3F4F6]">
                  {league.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#6B7280]">
                      <CheckCircle2
                        className="w-3.5 h-3.5 mt-0.5 shrink-0"
                        style={{ color: league.color }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="py-16 bg-[#128341]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
            Ready to play?
          </h2>
          <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
            Register for any of our leagues or get in touch to find the right program for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary">Register now</Button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 border-2 border-white text-white font-display font-semibold text-sm hover:bg-white hover:text-[#128341] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
