/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: 'var(--color-primary, #0f172a)',
          secondary: 'var(--color-secondary, #1e293b)',
          accent: 'var(--color-accent, #0284c7)',
          bg: 'var(--color-bg, #ffffff)',
          surface: 'var(--color-surface, #f8fafc)',
          card: 'var(--color-card, #ffffff)',
          text: 'var(--color-text, #090d16)',
          muted: 'var(--color-text-secondary, #64748b)',
          border: 'var(--color-border, #e2e8f0)',
          btn: 'var(--btn-bg, #0284c7)',
          btnText: 'var(--btn-text, #ffffff)',
          btnHover: 'var(--btn-hover, #0369a1)',
        }
      },
      borderRadius: {
        theme: 'var(--radius, 0.75rem)',
      },
      fontFamily: {
        heading: 'var(--font-heading, "Inter", sans-serif)',
        body: 'var(--font-body, "Inter", sans-serif)',
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        elevated: '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
        glow: '0 0 25px -5px rgba(2, 132, 199, 0.25)',
      }
    },
  },
  plugins: [],
}

