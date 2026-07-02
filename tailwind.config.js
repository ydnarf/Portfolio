/** @type {import('tailwindcss').Config} */
// Tokens de la dirección estética «TRAZA».
// Todos los colores del sitio salen de aquí — nunca hex hardcodeado en clases.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        carbon: '#0C0E0D', // fondo base — negro con matiz verde frío
        grafito: '#161A18', // superficies elevadas
        hueso: '#EDE6DA', // texto principal — blanco cálido
        cobre: {
          DEFAULT: '#C87E4D', // acento primario: CTAs, links, la traza
          bright: '#DA9260', // estado hover del cobre
        },
        patina: '#5E8C7B', // acento secundario: tags, estados, ramas
        humo: '#8B928D', // texto secundario, anotaciones
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
