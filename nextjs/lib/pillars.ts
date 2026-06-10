export interface Pillar {
  id: string
  name: string
  colorVar: string
  hex: string
  icon: string
  image: string
  description: string
  path: string
}

export const pillars: Pillar[] = [
  {
    id: 'sports',
    name: 'Sports',
    colorVar: '--pillar-sports',
    hex: '#128341',
    icon: 'Trophy',
    image: '/images/pillars/sports.png',
    description:
      'Cricket leagues and sport programs that remove barriers to participation, build friendships across cultures, and give newcomers a sense of belonging from day one.',
    path: '/programs/sports',
  },
  {
    id: 'education',
    name: 'Education',
    colorVar: '--pillar-education',
    hex: '#E30613',
    icon: 'BookOpen',
    image: '/images/pillars/education.png',
    description:
      'Workshops, training programs, and skill-building initiatives that equip community members with the tools they need to thrive in Canadian society.',
    path: '/programs/education',
  },
  {
    id: 'health',
    name: 'Health',
    colorVar: '--pillar-health',
    hex: '#0097A7',
    icon: 'HeartPulse',
    image: '/images/pillars/health.png',
    description:
      'Youth mental health programs and wellness resources that address the unique challenges newcomers face during their integration journey.',
    path: '/programs/health',
  },
  {
    id: 'culture',
    name: 'Culture',
    colorVar: '--pillar-culture',
    hex: '#FF8C00',
    icon: 'Music',
    image: '/images/pillars/culture.png',
    description:
      'Community celebrations, cultural showcases, and cross-cultural exchange events that honour diversity and strengthen the social fabric of our communities.',
    path: '/programs/culture',
  },
]
