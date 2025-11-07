import { useEffect } from 'react'
import {
  DATA_KPIS,
  revealTiles,
  runCountersOnce,
  bindTileHover,
} from './Service.Casos.js'
import './Casos.css'

export default function Casos() {
  useEffect(() => {
    revealTiles()
    runCountersOnce()
    bindTileHover()
  }, [])

  return (
    <section className='casos-kpis' aria-labelledby='kpis-title'>
      <header className='casos-header centered'>
        <h2 id='kpis-title' className='title'>
          Resultados
        </h2>
        <p className='sub'>
          Impacto medible en operaciones, costos y servicio.
        </p>
      </header>

      <div className='kpi-grid'>
        {DATA_KPIS.map(k => (
          <article
            key={k.id}
            className='kpi-tile'
            style={{ ['--accent']: k.accent }}
          >
            <div
              className='kpi-number'
              data-kpi-to={k.to}
              data-kpi-suffix={k.suffix}
            >
              0
            </div>
            <div className='kpi-label'>{k.label}</div>

            {/* borde acento lateral */}
            <span className='kpi-accent' />
          </article>
        ))}
      </div>

      {/* Línea base (opcional) */}
      <ul className='kpi-bullets' aria-label='Resumen de capacidades'>
        <li>Brokeraje estratégico y negociación con carriers.</li>
        <li>4PL y torre de control con visibilidad end-to-end.</li>
        <li>Software a medida e integraciones API.</li>
        <li>Consultoría operativa, optimización y analítica.</li>
      </ul>
    </section>
  )
}
