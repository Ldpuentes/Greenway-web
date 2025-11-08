import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  initCTAAnimation,
  bindCTAButtonHover,
} from './Service.LlamadoAccion.js'
import './LlamadoAccion.css'

export default function LlamadoAccion() {
  const ref = useRef(null)

  useEffect(() => {
    initCTAAnimation(ref.current)
    bindCTAButtonHover()
  }, [])

  return (
    <aside
      id='llamado-accion'
      ref={ref}
      className='cta-aside'
      aria-labelledby='cta-title'
    >
      <div className='cta-inner'>
        <h2 id='cta-title' className='cta-title'>
          Impulsa tu operación con soluciones Green Way
        </h2>
        <p className='cta-sub'>
          Integra tus procesos, optimiza tu cadena y alcanza nuevos niveles de
          eficiencia.
        </p>

        {/* ✅ Cambiado a Link para navegación React Router */}
        <Link to='/contactanos' className='cta-btn'>
          Contáctanos
        </Link>
      </div>
    </aside>
  )
}
