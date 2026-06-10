import type { Metadata } from 'next'
import { Users, Eye, Megaphone, FlaskConical, Heart } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import TeamGrid from '@/components/sections/TeamGrid'
import { team } from '@/lib/team'

export const metadata: Metadata = {
  title: 'About Us | Inclusive Canada Foundation',
  description: 'Learn about our mission, founding story, values, and the team behind Inclusive Canada Foundation.',
}

const values = [
  {
    icon: Eye,
    title: 'Transparency and Accountability',
    description: 'We strive to maintain transparency in our operations and ensure accountability to our stakeholders, funders, and the communities we serve.',
    color: '#128341',
  },
  {
    icon: Megaphone,
    title: 'Advocacy for Change',
    description: 'We advocate for systemic changes that empower all communities and address barriers to inclusivity at every level of society.',
    color: '#E30613',
  },
  {
    icon: FlaskConical,
    title: 'Research and Insights',
    description: 'We use evidence-based approaches to understand community needs, measure our impact, and continuously improve our programs.',
    color: '#0097A7',
  },
  {
    icon: Heart,
    title: 'Community Empowerment',
    description: 'We build capacity within communities so that individuals and families can drive their own inclusion and create lasting change.',
    color: '#FF8C00',
  },
]

const initiatives = [
  'Community Engagement Project',
  'Inclusive Sports Program',
  'Education For All Campaign',
  'Health Awareness Initiative',
  'Art And Culture Showcase',
]

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel color="#128341" className="mb-3 block">Our Story</SectionLabel>
          <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-[#111827] tracking-tight mb-6">
            About Us
          </h1>
          <p className="text-[#6B7280] text-xl leading-relaxed max-w-2xl">
            Inclusive Canada Foundation is passionate about building a nation where diversity is celebrated and every individual has equitable opportunities.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 lg:py-24 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionLabel color="#128341" className="mb-3 block">Who We Are</SectionLabel>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-[#111827] tracking-tight mb-6">
                Building belonging,<br />
                <span className="text-[#128341]">not just access.</span>
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Inclusive Canada Foundation (ICF) is a registered nonprofit based in Surrey, BC. We work at the intersection of sport, education, health, and culture to remove barriers that prevent newcomers and marginalized communities from fully participating in Canadian society.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-8">
                Our approach is grounded in community engagement and evidence-based practice. We develop programs in partnership with the communities we serve, ensuring every initiative is relevant, accessible, and built to last.
              </p>
              <Button href="/contact" variant="primary">Get in touch</Button>
            </div>

            {/* Initiatives list */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#128341]/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#128341]" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#111827]">Our Initiatives</h3>
              </div>
              <ul className="space-y-3">
                {initiatives.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#6B7280] font-body">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{ backgroundColor: ['#128341','#E30613','#0097A7','#FF8C00','#128341'][i] }}
                    >
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel color="#128341" className="mb-3 block">Our Founding Story</SectionLabel>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-[#111827] tracking-tight mb-6">
              It started with cricket.
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Inclusive Canada Foundation grew out of a simple observation: sport has an extraordinary power to break down barriers. In 2021, through the Government of Canada's REO (Reaching Each and Every One) program, we launched our first newcomer cricket initiative in Surrey, BC.
            </p>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              In that first year alone, we supported over 40 newcomers through organized cricket, creating a platform for cultural exchange, community engagement, and personal growth. Through our partnership with Last Man Stands, the world's largest amateur cricket league, we gave these individuals access to a global network of sport and belonging.
            </p>
            <p className="text-[#6B7280] leading-relaxed mb-8">
              What began as a sports program quickly revealed a broader truth: to truly include someone, you need to address language barriers, financial constraints, social isolation, and skill development all at once. That insight became the foundation of our four-pillar model, and it drives everything we do today.
            </p>
            <Button href="/programs/sports" variant="secondary">See our sports programs</Button>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel color="#6B7280" className="mb-3 block">What Guides Us</SectionLabel>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-[#111827] tracking-tight">
              Our values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="bg-white rounded-2xl p-6 shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
                  style={{ borderTop: `4px solid ${v.color}` }}
                >
                  <div
                    className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4"
                    style={{ backgroundColor: `${v.color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: v.color }} />
                  </div>
                  <h3 className="font-display font-bold text-base text-[#111827] mb-2">{v.title}</h3>
                  <p className="font-body text-sm text-[#6B7280] leading-relaxed">{v.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel color="#128341" className="mb-3 block">The People Behind ICF</SectionLabel>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-[#111827] tracking-tight mb-3">
              Meet our team
            </h2>
            <p className="text-[#6B7280] font-body">
              Click on any team member to learn more about them.
            </p>
          </div>
          <TeamGrid members={team} />
        </div>
      </section>
    </>
  )
}
