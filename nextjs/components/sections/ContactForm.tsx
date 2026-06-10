'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle2 } from 'lucide-react'

interface FormValues {
  name: string
  email: string
  subject: string
  message: string
  consent: boolean
}

const subjects = [
  'General Inquiry',
  'Partnership',
  'Grant Inquiry',
  'Program Registration',
  'Volunteer',
  'Media',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()

  const onSubmit = async (data: FormValues) => {
    // TODO: wire to Resend or form backend
    // For now, build a mailto fallback
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\n${data.message}`
    )
    window.location.href = `mailto:help@inclusivecanada.com?subject=${encodeURIComponent(data.subject)}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-[#128341]/10 flex items-center justify-center">
          <CheckCircle2 className="w-7 h-7 text-[#128341]" />
        </div>
        <h3 className="font-display font-bold text-xl text-[#111827]">Message sent</h3>
        <p className="text-[#6B7280] text-sm max-w-xs">
          Thank you for reaching out. We will get back to you within 1 to 2 business days.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-body text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#128341] focus:border-transparent transition'
  const errorClass = 'mt-1 text-xs text-[#E30613] font-body'

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-body font-medium text-[#111827] mb-1.5">
          Your name <span className="text-[#E30613]">*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="First and last name"
          className={inputClass}
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-body font-medium text-[#111827] mb-1.5">
          Email address <span className="text-[#E30613]">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className={inputClass}
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' },
          })}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-body font-medium text-[#111827] mb-1.5">
          Subject <span className="text-[#E30613]">*</span>
        </label>
        <select
          id="subject"
          className={`${inputClass} appearance-none cursor-pointer`}
          {...register('subject', { required: 'Please select a subject' })}
          defaultValue=""
        >
          <option value="" disabled>Select a subject</option>
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.subject && <p className={errorClass}>{errors.subject.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-body font-medium text-[#111827] mb-1.5">
          Message <span className="text-[#E30613]">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us how we can help..."
          className={`${inputClass} resize-none`}
          {...register('message', {
            required: 'Message is required',
            minLength: { value: 10, message: 'Message must be at least 10 characters' },
          })}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          className="mt-0.5 h-4 w-4 rounded border-[#E5E7EB] text-[#128341] focus:ring-[#128341] cursor-pointer shrink-0"
          {...register('consent', { required: 'You must consent to submit this form' })}
        />
        <label htmlFor="consent" className="text-xs font-body text-[#6B7280] cursor-pointer leading-relaxed">
          I consent to have this website store my submitted information so the team can respond to my inquiry.
        </label>
      </div>
      {errors.consent && <p className={errorClass}>{errors.consent.message}</p>}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#E30613] text-white px-6 py-3 font-display font-semibold text-sm hover:bg-[#c4050f] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E30613] focus-visible:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none shadow-[0_4px_14px_rgba(227,6,19,0.3)]"
      >
        <Send className="w-4 h-4" />
        {isSubmitting ? 'Sending...' : 'Send message'}
      </button>
    </form>
  )
}
