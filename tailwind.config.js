/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f6f2ea',
        'paper-nav': '#f9f6f0',
        'paper-card': '#fffdf8',
        ink: '#1c1a17',
        'body-dark': '#2b271f',
        body: '#3a352b',
        muted: '#6b6459',
        faint: '#8a7f6c',
        border: '#e2dac9',
        'border-mid': '#e8e0cf',
        'border-light': '#ddd2ba',
        oxblood: '#8a2b1e',
        'oxblood-tint': '#f2e4e1',
        tag: '#f1ece0',
        'nav-ink': '#4a4438',
        dashed: '#cdc3ae',
      },
      fontFamily: {
        serif: ['Spectral', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        reading: '720px',
        about: '900px',
        news: '800px',
        contact: '760px',
        site: '1280px',
      },
    },
  },
  plugins: [],
};
