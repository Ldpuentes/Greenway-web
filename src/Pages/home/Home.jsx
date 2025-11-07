import './Home.css'
import Carousel from '../../components/Home/Carrusel/Carrusel'
import Nosotros from '../../components/Home/Nosotros/Nosotros'
import Servicios from '../../components/Home/Servicios/Servicios'
import ContactMini from '../../components/Contactanos/Contactanosmini.jsx'
import Casos from '../../components/Home/Casos/Casos.jsx'
import LlamadoAccion from '../../components/Home/LlamadoAccion/LlamadoAccion.jsx'

export default function Home() {
  return (
    <main id='home' className='stage' role='main'>
      {/* HERO / CARRUSEL */}
      <section id='hero' aria-label='Presentación principal'>
        <Carousel />
      </section>

      {/* SOBRE NOSOTROS */}
      <section id='sobre' aria-labelledby='sobre-heading'>
        <Nosotros />
      </section>

      {/* SERVICIOS */}
      <section id='servicios' aria-labelledby='servicios-heading'>
        <article>
          <Servicios />
        </article>
      </section>

      {/* CASOS DE ÉXITO */}
      <section id='casos' aria-labelledby='casos-heading'>
        <article>
          <Casos />
        </article>
      </section>

      {/* CTA / ASIDE */}
      <aside id='cta' aria-labelledby='cta-heading'>
        <LlamadoAccion />
      </aside>

      {/* CONTACTO */}

      <ContactMini />
    </main>
  )
}
