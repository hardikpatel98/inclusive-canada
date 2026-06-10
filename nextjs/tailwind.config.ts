import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red:    '#E30613',
          green:  '#128341',
          teal:   '#0097A7',
          orange: '#FF8C00',
          gray:   '#6B7280',
          dark:   '#111827',
        },
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'sans-serif'],
        body:    ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter:  '-0.03em',
      },
    },
  },
  plugins: [],
}

export default config
