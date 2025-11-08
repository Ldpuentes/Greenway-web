// src/Pages/home/Home.jsx
import React, { Suspense, lazy, useMemo } from 'react'
import './Home.css'

// Above-the-fold
import Carrusel from '../../components/Home/Carrusel/Carrusel'
import Nosotros from '../../components/Home/Nosotros/Nosotros'
import ContactMini from '../../components/Contactanos/Contactanosmini.jsx'

// Below-the-fold
const Servicios = lazy(() =>
  import('../../components/Home/Servicios/Servicios')
)
const Casos = lazy(() => import('../../components/Home/Casos/Casos.jsx'))
const LlamadoAccion = lazy(() =>
  import('../../components/Home/LlamadoAccion/LlamadoAccion.jsx')
)

export default function Home() {
  const fallback = useMemo(() => <div style={{ minHeight: 240 }} />, [])

  return (
    // ✅ Sin key={location.key} - Framer Motion ya maneja las transiciones
    <main id='home' className='stage' role='main'>
      {/* HERO */}
      <section id='hero' aria-label='Presentación principal'>
        <Carrusel />
      </section>

      {/* SOBRE NOSOTROS */}
      <section id='sobre' aria-labelledby='sobre-heading'>
        <Nosotros />
      </section>

      {/* SERVICIOS (sin WhenVisible) */}
      <section id='servicios' aria-labelledby='servicios-heading'>
        <Suspense fallback={fallback}>
          <Servicios />
        </Suspense>
      </section>

      {/* CASOS (sin WhenVisible) */}
      <section id='casos' aria-labelledby='casos-heading'>
        <Suspense fallback={fallback}>
          <Casos />
        </Suspense>
      </section>

      {/* CTA (sin WhenVisible) */}
      <aside id='cta' aria-labelledby='cta-heading'>
        <Suspense fallback={fallback}>
          <LlamadoAccion />
        </Suspense>
      </aside>

      {/* CONTACTO */}
      <ContactMini />
    </main>
  )
}
