// TODO: Replace with real verified numbers before launch — never publish placeholder stats
export interface Stat {
  label: string
  value: number
  suffix?: string
  prefix?: string
}

export const impactStats: Stat[] = [
  { label: 'Players Supported', value: 40, suffix: '+' },
  { label: 'Matches Organized', value: 12, suffix: '+' },
  { label: 'Teams Formed',      value: 6,  suffix: '+' },
  { label: 'Communities Reached', value: 3, suffix: '+' },
]
