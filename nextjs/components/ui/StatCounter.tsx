'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

interface StatCounterProps {
  value: number
  label: string
  suffix?: string
  prefix?: string
}

export default function StatCounter({ value, label, suffix = '', prefix = '' }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { stiffness: 60, damping: 20 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, value, motionValue])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (v) => setDisplay(Math.round(v)))
    return unsubscribe
  }, [springValue])

  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-extrabold text-4xl lg:text-5xl text-white tabular-nums">
        {prefix}{display}{suffix}
      </div>
      <div className="mt-2 text-sm font-body font-medium uppercase tracking-widest text-white/60">
        {label}
      </div>
    </div>
  )
}
