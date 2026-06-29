import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          400: '#94a3b8',
          300: '#cbd5e1',
          200: '#e2e8f0'
        },
        accent: {
          blue: '#2563eb',
          cyan: '#06b6d4'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(37, 99, 235, 0.2), 0 20px 45px rgba(2, 6, 23, 0.35)'
      }
    }
  },
  plugins: []
} satisfies Config;
