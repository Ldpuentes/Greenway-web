import React, { useRef } from 'react'
import { useQuienesSomosFX } from '../../Pages/quienesSomos/quienessomos.js'
import './pys.css'

import primera from '../../assets/primera.jpg'
import Cuarta from '../../assets/Cuarta.jpg'
import Quinta from '../../assets/Quinta.jpg'
import Sexta from '../../assets/Sexta.jpg'

import genikaImg from '../../assets/erp.webp'
import pulseImg from '../../assets/Control.webp'
import plImg from '../../assets/4pl.webp'
import devImg from '../../assets/desarrollo.webp'

import ContactMini from '../../components/Contactanos/Contactanosmini.jsx'

export default function ProductosServicios() {
  const rootRef = useRef(null)
  useQuienesSomosFX(rootRef)

  return (
    <section className='ps-section' ref={rootRef} id='servicios'>
      {/* ===== HERO VISUAL (TU ORIGINAL) ===== */}
      <div className='ps-hero-img' data-anim='fade-up'></div>

      <header className='ps-hero' data-anim='fade-up'>
        <span className='ps-badge'>GreenWay</span>
        <h1 className='is-gradient-text'>
          Productos & <span>Servicios</span>
        </h1>
        <p>
          Ejecutamos operaciones con <strong>transacciones seguras</strong>,
          habilitando <strong>acceso a mercados</strong> con
          <strong> gestión de riesgo</strong> y <strong>cumplimiento</strong>{' '}
          corporativo.
        </p>
      </header>

      {/* ===== LÍNEAS (TU ORIGINAL) ===== */}
      <section className='ps-lines'>
        <div className='ps-grid'>
          {/* Transacciones Seguras */}
          <article className='ps-card' data-anim='fade-left'>
            <div className='hero'>
              <img
                src={primera}
                alt='GreenWay - Operaciones seguras'
                className='hero-img'
              />
            </div>
            <div className='ps-card-content'>
              <h3>Transacciones seguras</h3>
              <p>
                Integridad, trazabilidad y evidencia operativa de extremo a
                extremo.
              </p>
              <ul>
                <li>Mapeo de flujo transaccional</li>
                <li>Checklist operativo y de evidencia</li>
                <li>Controles antes / durante / después</li>
              </ul>
            </div>
          </article>

          {/* Acceso a mercados */}
          <article className='ps-card' data-anim='fade-left' data-delay='80'>
            <div className='hero'>
              <img
                src={Quinta}
                alt='GreenWay - Acceso a mercados'
                className='hero-img'
              />
            </div>
            <div className='ps-card-content'>
              <h3>Acceso a mercados</h3>
              <p>
                Rutas claras y viables para operar en mercados internacionales.
              </p>
              <ul>
                <li>Ruta de mercado y actores</li>
                <li>Modelo de operación y roles</li>
                <li>Onboarding de contrapartes</li>
              </ul>
            </div>
          </article>

          {/* Gestión de riesgo */}
          <article className='ps-card' data-anim='fade-left' data-delay='160'>
            <div className='hero'>
              <img
                src={Cuarta}
                alt='GreenWay - Gestión de riesgo'
                className='hero-img'
              />
            </div>
            <div className='ps-card-content'>
              <h3>Gestión de riesgo</h3>
              <p>
                Mitigación operativa, legal y reputacional a nivel corporativo.
              </p>
              <ul>
                <li>Matriz de riesgo por proceso</li>
                <li>Alertas y controles</li>
                <li>Registro de incidentes</li>
              </ul>
            </div>
          </article>

          {/* Cumplimiento */}
          <article className='ps-card' data-anim='fade-left' data-delay='240'>
            <div className='hero'>
              <img
                src={Sexta}
                alt='GreenWay - Cumplimiento'
                className='hero-img'
              />
            </div>
            <div className='ps-card-content'>
              <h3>Cumplimiento</h3>
              <p>Documentación, políticas y procesos alineados a normativas.</p>
              <ul>
                <li>Políticas y procedimientos</li>
                <li>Checklists y evidencias</li>
                <li>Reportes y auditoría</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* ===== NUEVA SECCIÓN: PRODUCTOS / SERVICIOS (DESCRIPCIONES ROBUSTAS) ===== */}
      <section
        className='ps-showcase'
        aria-label='Productos y servicios detallados'
      >
        <h2 className='is-gradient-text'>Productos</h2>

        {/* Genika */}
        <article className='ps-row' data-anim='fade-up'>
          <figure className='ps-media' aria-label='Genika WMS / ERP'>
            <img src={genikaImg} alt='Genika WMS / ERP' loading='lazy' />
          </figure>
          <div className='ps-copy'>
            <h3>Genika — WMS / ERP</h3>
            <p>
              Plataforma de gestión de almacenes que centraliza el control de
              espacios, ubicaciones e inventarios en tiempo real. Permite
              visualizar la trazabilidad completa de cada lote, desde su ingreso
              o fabricación hasta su salida en el producto final o pedido
              asociado.
            </p>
            <p>
              Automatiza procesos clave (recepción, ubicación, picking, packing
              y despacho), reduciendo tiempos y errores. Con arquitectura
              modular e integraciones API, se adapta a operaciones logísticas o
              productivas manteniendo visibilidad y control del stock.
            </p>
            <ul className='ps-bullets'>
              <li>Trazabilidad total de lotes y movimientos de inventario.</li>
              <li>Gestión visual de espacios, ubicaciones y capacidad.</li>
              <li>Automatización de entradas, almacenamiento y salidas.</li>
              <li>Integración API con ERP, 3PL y transporte.</li>
              <li>
                Indicadores de rotación, exactitud e inventario disponible.
              </li>
            </ul>
          </div>
        </article>

        {/* Pulse */}
        <article className='ps-row reverse' data-anim='fade-up'>
          <figure
            className='ps-media'
            aria-label='Pulse productividad con biometría'
          >
            <img
              src={pulseImg}
              alt='Pulse — productividad con biometría'
              loading='lazy'
            />
          </figure>
          <div className='ps-copy'>
            <h3>Pulse — Productividad con biometría</h3>
            <p>
              Sistema de productividad que combina identificación biométrica,
              registro de tiempos y métricas operativas en un solo entorno.
              Diseñado para operaciones con personal en planta o campo, permite
              medir desempeño, asistencia y tiempos de ciclo con precisión.
            </p>
            <p>
              Su objetivo es ofrecer visibilidad accionable: identificar cuellos
              de botella, comparar metas con resultados reales y fortalecer la
              gestión del desempeño con datos objetivos. Incluye validaciones
              biométricas antifraude y reportes automáticos por área y proceso.
            </p>
            <ul className='ps-bullets'>
              <li>Identificación biométrica con validaciones antifraude.</li>
              <li>Medición de productividad por turno y proceso.</li>
              <li>Reportes automáticos y seguimiento de desempeño.</li>
              <li>Integración con nómina, ERP y tableros analíticos.</li>
            </ul>
          </div>
        </article>

        {/* Banda degradada de contraste */}
        <section className='ps-band' data-anim='fade-up' aria-hidden='false'>
          <h3>Integramos tecnología y gestión para acelerar tu operación</h3>
          <p>
            De la automatización de procesos a la visibilidad de punta a punta:
            conectamos plataformas, equipos y resultados para reducir fricción y
            aumentar el control operativo.
          </p>
        </section>

        <h2 className='is-gradient-text'>Servicios</h2>

        {/* 4PL y Brokeraje */}
        <article className='ps-row' data-anim='fade-up'>
          <figure className='ps-media' aria-label='4PL y brokeraje'>
            <img src={plImg} alt='4PL y brokeraje' loading='lazy' />
          </figure>
          <div className='ps-copy'>
            <h3>4PL y Brokeraje</h3>
            <p>
              Operamos como socio 4PL para orquestar la cadena de punta a punta:
              proveedores, transporte, aduanas, almacenaje y pagos. Definimos el
              modelo operativo, estandarizamos procedimientos y coordinamos la
              ejecución con visibilidad y trazabilidad total.
            </p>
            <p>
              Reducimos fricción y riesgo con homologación de contrapartes,
              reglas de control por etapa y evidencia operativa. Ideal para
              ejecutar operaciones internacionales con velocidad y cumplimiento.
            </p>
            <ul className='ps-bullets'>
              <li>Plan de operación, roles y gobernanza.</li>
              <li>Homologación KYC/KYB y gestión documental.</li>
              <li>Coordinación logística, aduanas y pagos.</li>
              <li>Reportes ejecutivos y seguimiento de controles.</li>
            </ul>
          </div>
        </article>

        {/* Desarrollo tecnológico */}
        <article className='ps-row reverse' data-anim='fade-up'>
          <figure
            className='ps-media'
            aria-label='Desarrollo de soluciones tecnológicas'
          >
            <img
              src={devImg}
              alt='Desarrollo de soluciones tecnológicas'
              loading='lazy'
            />
          </figure>
          <div className='ps-copy'>
            <h3>Desarrollo de soluciones tecnológicas</h3>
            <p>
              Construimos soluciones a medida que integran tus plataformas
              actuales (ERP, WMS, 3PL) con nuevos servicios de negocio.
              Priorizamos seguridad, escalabilidad y propiedad tecnológica para
              que el activo digital quede en tu empresa.
            </p>
            <p>
              Trabajamos con discovery funcional, arquitectura modular y APIs
              bien documentadas, liberando iteraciones frecuentes. Resultado:
              herramientas simples de usar, robustas por dentro y listas para
              crecer con la operación.
            </p>
            <ul className='ps-bullets'>
              <li>Integraciones API-first y documentación técnica.</li>
              <li>Gestión de identidades, permisos y auditoría.</li>
              <li>Observabilidad y métricas de disponibilidad.</li>
              <li>Propiedad intelectual y transferencia de conocimiento.</li>
            </ul>
          </div>
        </article>
      </section>

      {/* CTA final */}
      <ContactMini />
    </section>
  )
}
