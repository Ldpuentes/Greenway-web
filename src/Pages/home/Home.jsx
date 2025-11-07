import './Home.css'
import Carousel from '../../components/Home/Carrusel/Carrusel'
import Nosotros from '../../components/Home/Nosotros/Nosotros'
import ContactMini from '../../components/Contactanos/Contactanosmini.jsx'

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
        <h2 id='servicios-heading'>Servicios</h2>
        <article>
          <p>
            Este es un <strong>article</strong> para un servicio individual.
          </p>
        </article>
        <article>
          <p>
            Otro <strong>article</strong> para otro servicio.
          </p>
        </article>
      </section>

      {/* CASOS DE ÉXITO */}
      <section id='casos' aria-labelledby='casos-heading'>
        <h2 id='casos-heading'>Casos de éxito</h2>
        <article>
          <p>
            Este es un <strong>article</strong> para un caso de éxito.
          </p>
        </article>
        <article>
          <p>
            Otro <strong>article</strong> de ejemplo.
          </p>
        </article>
      </section>

      {/* TESTIMONIOS */}
      <section id='testimonios' aria-labelledby='testimonios-heading'>
        <h2 id='testimonios-heading'>Testimonios</h2>
        <article>
          <blockquote>
            <p>
              “Este es un <strong>article</strong> para mostrar un testimonio.”
            </p>
          </blockquote>
        </article>
      </section>

      {/* CTA / ASIDE */}
      <aside id='cta' aria-labelledby='cta-heading'>
        <h2 id='cta-heading'>Llamado a la acción</h2>
        <p>
          Este es un <strong>aside</strong> para una llamada a la acción o
          información complementaria.
        </p>
      </aside>

      {/* CONTACTO */}
     
     <ContactMini/>
      
    </main>
  )
}
