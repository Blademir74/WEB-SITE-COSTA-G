import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        costa: {
          sky: '#87CEEB',    // Azul cielo - Primario (Fondos)
          navy: '#1A3A52',   // Azul marino - Secundario (Títulos/Botones)
          gold: '#D4AF37',   // Dorado - Acento
          lime: '#32CD32',   // Verde - Bio-Sustentable
          light: '#F0F8FF',  // Fondo claro
          dark: '#1A1A1A',   // Texto principal
          charcoal: '#333333', // Texto secundario
          slate: '#F8FAFC',   // Fondos alternativos
        }
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'sans-serif'],
        display: ['var(--font-montserrat)', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'floating': '0 10px 40px -10px rgba(26, 58, 82, 0.15)',
      }
    },
  },
  plugins: [],
};
export default config;