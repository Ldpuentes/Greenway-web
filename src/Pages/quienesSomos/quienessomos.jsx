// ==============================
// File: src/pages/QuienesSomos.jsx
// ==============================
import { useRef } from 'react'
import './quienessomos.css'
import { useQuienesSomosFX } from '../../Pages/quienesSomos/quienessomos.js'

export default function QuienesSomos() {
  const rootRef = useRef(null)
  useQuienesSomosFX(rootRef)

  return (
    <section ref={rootRef} className='gw-about'>
      {/* HERO */}
      <header className='gw-about__hero'>
        <div className='gw-about__badge'>GreenWay</div>
        <h1 className='gw-about__title'>
          Impulsamos <span>comercio seguro</span> y{' '}
          <span>crecimiento sostenible</span>
        </h1>
        <p className='gw-about__subtitle'>
          Facilitamos transacciones seguras, acceso a mercados globales y
          gestión de riesgo con cumplimiento.
        </p>
      </header>

      {/* MISION / VISION */}
      <section className='gw-about__mv'>
        <article className='card' data-anim='fade-up'>
          <h3>Misión</h3>
          <p>
            Conectar empresas con oportunidades globales mediante soluciones de
            corretaje, tecnología y acompañamiento experto que prioriza la
            seguridad, el cumplimiento y el impacto positivo.
          </p>
        </article>
        <article className='card' data-anim='fade-up' data-delay='100'>
          <h3>Visión</h3>
          <p>
            Ser el aliado latinoamericano de referencia para escalar negocios en
            mercados internacionales con operaciones confiables, ágiles y
            sostenibles.
          </p>
        </article>
      </section>

      {/* VALORES */}
      <section className='gw-about__values'>
        <h2 data-anim='fade-up'>Nuestros valores</h2>
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

      {/* QUÉ HACEMOS */}
      <section className='gw-about__what'>
        <div className='cols'>
          <div className='text' data-anim='fade-left'>
            <h2>Qué hacemos</h2>
            <ul>
              <li>Brokeraje y representación comercial.</li>
              <li>Inteligencia de mercados y aperturas internacionales.</li>
              <li>Gestión de riesgo, compliance y contratos.</li>
              <li>Operación logística y financiera con aliados.</li>
            </ul>
          </div>
          <div className='media' data-anim='pop'>
            <div className='blob' aria-hidden='true' />
            <img
              src='https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop'
              alt='Equipo de trabajo GreenWay'
            />
          </div>
        </div>
      </section>

      {/* HITOS */}
      <section className='gw-about__timeline'>
        <h2 data-anim='fade-up'>Hitos</h2>
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
        <div className='stat' data-anim='count' data-count='+30'>
          +50
        </div>
        <p>Aliados en la cadena de valor</p>
        <div className='stat' data-anim='count' data-count='12'>
          0
        </div>
        <p>Mercados objetivos</p>
        <div className='stat' data-anim='count' data-count='98%'>
          0%
        </div>
        <p>Índice de satisfacción</p>
      </section>

      {/* CTA */}
      <footer className='gw-about__cta' data-anim='fade-up'>
        <h3>¿Listo para expandirte con seguridad?</h3>
        <a className='btn btn--primary' href='#contacto'>
          Hablemos
        </a>
      </footer>
    </section>
  )
}
