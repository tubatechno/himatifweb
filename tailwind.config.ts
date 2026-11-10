import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#14183A', 600: '#3A4080' },
        signal: '#FFD23F',
        coral: '#FF5C4D',
        azure: '#2F5BFF',
        mist: '#F3F6FB',
        danger: '#C8261A',
        ok: '#12805C'
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"Public Sans"', 'system-ui', 'sans-serif']
      }
    }
  }
} satisfies Config
