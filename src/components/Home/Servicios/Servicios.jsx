import { useEffect } from 'react'
import initServiciosAnimations from './Servicios.service'
import './Servicios.css'

// Importa tus imágenes desde assets
import genikaImg from '../../../assets/erp.webp'
import pulseImg from '../../../assets/Control.webp'
import plImg from '../../../assets/4pl.webp'
import devImg from '../../../assets/desarrollo.webp'

export default function Servicios() {
  useEffect(() => {
    initServiciosAnimations()
  }, [])

  return (
    <section className='svc' aria-labelledby='svc-title'>
      {/* Header centrado */}
      <header className='svc-header centered'>
        <h2 id='svc-title'>Productos y Servicios</h2>
        <p className='svc-intro'>
          Soluciones listas para operar y servicios a medida para que tu
          operación avance con control, visibilidad y velocidad.
        </p>
      </header>

      {/* ======= PRODUCTOS ======= */}
      <section className='svc-group' aria-labelledby='svc-prod-title'>
        <h3 id='svc-prod-title' className='visually-hidden'>
          Productos
        </h3>

        <article id='genika' className='svc-row' data-anim='row'>
          <figure
            className='svc-media'
            data-anim='media'
            aria-label='Genika WMS / ERP'
          >
            <img src={genikaImg} alt='Genika WMS / ERP' loading='lazy' />
          </figure>
          <div className='svc-copy' data-anim='copy'>
            <h4>Genika — WMS / ERP</h4>
            <p className='svc-pre'>
              Gestión integral de inventarios, órdenes y trazabilidad. Conecta
              compras, bodega y ventas en tiempo real con una sola plataforma.
            </p>
          </div>
        </article>

        <article id='pulse' className='svc-row reverse' data-anim='row'>
          <figure
            className='svc-media'
            data-anim='media'
            aria-label='Pulse productividad con biometría'
          >
            <img
              src={pulseImg}
              alt='Pulse — productividad con biometría'
              loading='lazy'
            />
          </figure>
          <div className='svc-copy' data-anim='copy'>
            <h4>Pulse — Productividad con biometría</h4>
            <p className='svc-pre'>
              Supervisa productividad y asistencia con precisión. Indicadores
              claros para equipos distribuidos y operaciones exigentes.
            </p>
          </div>
        </article>
      </section>

      {/* ======= SERVICIOS ======= */}
      <section className='svc-group' aria-labelledby='svc-serv-title'>
        <h3 id='svc-serv-title'>Servicios</h3>

        <article id='4pl' className='svc-row' data-anim='row'>
          <figure
            className='svc-media'
            data-anim='media'
            aria-label='4PL y brokeraje'
          >
            <img src={plImg} alt='4PL y brokeraje' loading='lazy' />
          </figure>
          <div className='svc-copy' data-anim='copy'>
            <h4>4PL y Brokeraje</h4>
            <p className='svc-pre'>
              Orquestamos tu cadena de punta a punta: proveedores, transporte,
              aduanas y pagos. Operaciones seguras, trazables y con visibilidad
              total.
            </p>
          </div>
        </article>

        <article id='desarrollo' className='svc-row reverse' data-anim='row'>
          <figure
            className='svc-media'
            data-anim='media'
            aria-label='Desarrollo de soluciones tecnológicas'
          >
            <img
              src={devImg}
              alt='Desarrollo de soluciones tecnológicas'
              loading='lazy'
            />
          </figure>
          <div className='svc-copy' data-anim='copy'>
            <h4>Desarrollo de soluciones tecnológicas</h4>
            <p className='svc-pre'>
              Construimos plataformas a medida que se integran con ERPs, WMS,
              3PLs y marketplaces. Escalables, seguras y con propiedad
              tecnológica.
            </p>
          </div>
        </article>
      </section>

      {/* Botón único centrado */}
      <nav className='svc-nav' aria-label='Explorar más'>
        <a className='svc-cta svc-cta--primary' href='/servicios'>
          Ver más
        </a>
      </nav>
    </section>
  )
}
