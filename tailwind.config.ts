import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#2D5016',
        sage: '#7B9E5E',
        mint: '#E8F5E0',
        cream: '#FAF8F3',
        soil: '#5C3D2E',
        charcoal: '#1C1C1C',
      },
      fontFamily: {
        lexend: ['var(--font-lexend)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
