import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración optimizada para despliegue en Coolify / Nginx / producción
export default defineConfig({
  plugins: [react()],

  // Configuración del servidor local (modo desarrollo)
  server: {
    host: true, // Permite acceder desde red local o contenedor
    port: 5173, // Puerto local en dev
  },

  // Configuración del build (modo producción)
  build: {
    outDir: 'dist', // Carpeta que se genera al hacer npm run build
    sourcemap: false, // No genera mapas de código (opcional)
    chunkSizeWarningLimit: 1000, // Evita warnings de bundle grande
  },

  // Base pública (asegura que las rutas funcionen en cualquier dominio)
  base: '/',

  // Preview (sirve el sitio en entorno de test local o contenedor)
  preview: {
    port: 3000, // Puerto de salida para Coolify o producción
    host: true, // Acepta conexiones externas
  },
})
