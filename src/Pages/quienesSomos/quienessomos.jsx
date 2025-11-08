import { useRef } from 'react'
import './quienessomos.css'
import { useQuienesSomosFX } from '../../Pages/quienesSomos/quienessomos.js'
import ContactMini from '../../components/Contactanos/Contactanosmini.jsx'

// 🔽 Ajusta las rutas/nombres a los de tus assets reales
import heroTeam from '../../assets/hero-team.jpg'
import opsLogistics from '../../assets/ops-logistics.jpg'

export default function QuienesSomos() {
  const rootRef = useRef(null)
  useQuienesSomosFX(rootRef)

  return (
    <section ref={rootRef} className='gw-about'>
      {/* HERO con imagen lateral */}
      <header className='gw-about__hero' data-anim='fade-up'>
        <div className='gw-about__hero-text'>
          <div className='gw-about__badge'>GreenWay</div>

          {/* Título con degradado corporativo */}
          <h1 className='gw-about__title is-gradient-text'>
            Impulsamos <span>comercio seguro</span> y{' '}
            <span>crecimiento sostenible</span>
          </h1>

          <p className='gw-about__subtitle'>
            Facilitamos transacciones seguras, acceso a mercados globales y
            gestión de riesgo con cumplimiento.
          </p>
        </div>

        <div className='gw-about__hero-media' data-anim='pop' data-delay='80'>
          <div
            className='gw-about__hero-img'
            style={{ backgroundImage: `url(${heroTeam})` }}
            aria-hidden='true'
          />
        </div>
      </header>

      {/* MISION / VISION */}
      <section className='gw-about__mv'>
        <article className='card' data-anim='fade-up'>
          <h3 className='is-gradient-text'>Misión</h3>
          <p>
            Conectar empresas con oportunidades globales mediante soluciones de
            corretaje, tecnología y acompañamiento experto que prioriza la
            seguridad, el cumplimiento y el impacto positivo.
          </p>
        </article>
        <article className='card' data-anim='fade-up' data-delay='100'>
          <h3 className='is-gradient-text'>Visión</h3>
          <p>
            Ser el aliado latinoamericano de referencia para escalar negocios en
            mercados internacionales con operaciones confiables, ágiles y
            sostenibles.
          </p>
        </article>
      </section>

      {/* VALORES */}
      <section className='gw-about__values'>
        <h2 className='is-gradient-text' data-anim='fade-up'>
          Nuestros valores
        </h2>
        <div className='grid'>
          <article className='value -h' data-anim='fade-up'>
            <h4>Confianza</h4>
            <p>
              Transparencia, trazabilidad y confidencialidad en cada operación.
            </p>
          </article>
          <article className='value' data-anim='fade-up' data-delay='60'>
            <h4>Excelencia</h4>
            <p>Procesos claros, métricas y mejora continua.</p>
          </article>
          <article className='value' data-anim='fade-up' data-delay='120'>
            <h4>Cumplimiento</h4>
            <p>Normativa local e internacional, KYC/KYB y gestión de riesgo.</p>
          </article>
          <article className='value' data-anim='fade-up' data-delay='180'>
            <h4>Sostenibilidad</h4>
            <p>Decisiones con enfoque ambiental y social.</p>
          </article>
        </div>
      </section>

      {/* FRANJA CON FONDO DEGRADADO (matiz visual) */}
      <section className='gw-about__band' data-anim='fade-up'>
        <h3>Conectamos mercados con seguridad y velocidad</h3>
        <p>
          Brokeraje, inteligencia comercial y cumplimiento para que tus
          operaciones internacionales avancen sin fricción.
        </p>
      </section>

      {/* QUÉ HACEMOS con mosaico de imagen */}
      <section className='gw-about__what'>
        <div className='cols'>
          <div className='text' data-anim='fade-left'>
            <h2 className='is-gradient-text'>Qué hacemos</h2>
            <ul>
              <li>Brokeraje y representación comercial.</li>
              <li>Inteligencia de mercados y aperturas internacionales.</li>
              <li>Gestión de riesgo, compliance y contratos.</li>
              <li>Operación logística y financiera con aliados.</li>
            </ul>
          </div>

          <div className='media' data-anim='pop'>
            <div className='blob' aria-hidden='true' />
            <div className='media-grid'>
              <img
                src={opsLogistics}
                alt='Operación logística y coordinación'
                className='media-main'
              />
            </div>
          </div>
        </div>
      </section>

      {/* HITOS */}
      <section className='gw-about__timeline'>
        <h2 className='is-gradient-text' data-anim='fade-up'>
          Hitos
        </h2>
        <ol className='timeline'>
          <li data-anim='fade-up'>
            <span className='dot' /> Fundación de GreenWay
          </li>
          <li data-anim='fade-up' data-delay='80'>
            <span className='dot' /> Primeras aperturas de mercado regional
          </li>
          <li data-anim='fade-up' data-delay='160'>
            <span className='dot' /> Marco de compliance y risk management
          </li>
          <li data-anim='fade-up' data-delay='240'>
            <span className='dot' /> Alianzas con operadores logísticos y
            financieros
          </li>
        </ol>
      </section>

      {/* KPI / MÉTRICAS */}
      <section className='gw-about__stats'>
        <div className='stat' data-anim='count' data-count='+50'>
          +50
        </div>
        <p>Aliados en la cadena de valor</p>

        <div className='stat' data-anim='count' data-count='12'>
          12
        </div>
        <p>Mercados objetivos</p>

        <div className='stat' data-anim='count' data-count='98%'>
          98%
        </div>
        <p>Índice de satisfacción</p>
      </section>

      {/* CTA MINI */}
      <ContactMini />
    </section>
  )
}
