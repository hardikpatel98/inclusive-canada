'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, Linkedin } from 'lucide-react'
import type { TeamMember } from '@/lib/team'

interface TeamGridProps {
  members: TeamMember[]
}

function TeamModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={member.name}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#111827]/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal card — max height + scroll on content side */}
      <div className="relative bg-white rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.25)] w-full max-w-2xl overflow-hidden max-h-[88vh] flex flex-col">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128341]"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-[#6B7280]" />
        </button>

        <div className="flex flex-col sm:flex-row flex-1 min-h-0">
          {/* Left column: photo + green name strip below */}
          <div className="sm:w-56 shrink-0 flex flex-col">
            {/* Photo — fixed height, face anchored to top */}
            <div className="relative w-full h-52 sm:h-60">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 224px"
              />
            </div>
            {/* Green name strip — below photo, fills remaining column height */}
            <div className="bg-[#128341] px-4 py-3 flex-1 flex flex-col justify-center">
              <p className="font-display font-bold text-white text-sm leading-tight">{member.name}</p>
              <p className="font-body text-white/80 text-xs mt-0.5">{member.role}</p>
            </div>
          </div>

          {/* Content — scrolls if bio is long */}
          <div className="flex-1 p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <h3 className="font-display font-bold text-2xl text-[#111827] mb-1">{member.name}</h3>
              <p className="font-body text-sm font-medium text-[#128341] uppercase tracking-widest mb-4">{member.role}</p>
              <p className="font-body text-[#6B7280] text-sm leading-relaxed">{member.bio}</p>
            </div>

            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-body font-semibold text-white bg-[#0A66C2] hover:bg-[#004182] rounded-full px-4 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2] w-fit"
              >
                <Linkedin className="w-4 h-4" />
                View on LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TeamGrid({ members }: TeamGridProps) {
  const [selected, setSelected] = useState<TeamMember | null>(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {members.map((member) => (
          <button
            key={member.id}
            onClick={() => setSelected(member)}
            className="group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128341] rounded-2xl"
            aria-label={`View ${member.name}'s profile`}
          >
            {/* Card */}
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-[0_2px_16px_rgba(0,0,0,0.08)] group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.16)] transition-shadow duration-300">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Name label overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#128341] px-3 py-2 translate-y-0">
                <p className="font-display font-bold text-white text-sm leading-tight truncate">{member.name}</p>
              </div>
            </div>
            {/* Role below card */}
            <p className="mt-2 text-sm font-body text-[#6B7280] font-medium px-1">{member.role}</p>
          </button>
        ))}
      </div>

      {selected && <TeamModal member={selected} onClose={close} />}
    </>
  )
}
