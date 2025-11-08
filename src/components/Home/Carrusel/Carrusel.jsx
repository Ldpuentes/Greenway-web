// src/components/Home/Carrusel/Carrusel.jsx
import { Link } from 'react-router-dom'
import './Carrusel.css'
import Carousel from './service.carrusel'

// Importa desde /src/assets
import Innovacion from '../../../assets/Innovación.webp'
import Brokeraje from '../../../assets/Brokeraje.webp'
import Comercial from '../../../assets/Comercial.webp'
import Alianzas from '../../../assets/Alianzas.webp'

export default function Carrusel() {
  const { slideRef, nextRef, prevRef } = Carousel({ interval: 6000 })

  return (
    <div className='container'>
      <div className='slide' ref={slideRef}>
        {/* Slide 1 — Innovación Sostenible */}
        <div className='item' style={{ backgroundImage: `url(${Innovacion})` }}>
          <div className='content'>
            <div className='name'>Innovación Sostenible</div>
            <div className='des'>
              Conectamos innovación, tecnología y sostenibilidad para
              transformar los negocios globales y generar valor económico,
              social y ambiental.
            </div>
            <Link className='seeMore' to='/productosservicios'>
              <button>Ver más</button>
            </Link>
          </div>
        </div>

        {/* Slide 2 — Brokeraje Internacional */}
        <div className='item' style={{ backgroundImage: `url(${Brokeraje})` }}>
          <div className='content'>
            <div className='name'>Brokeraje Internacional</div>
            <div className='des'>
              Conectamos proveedores y compradores confiables, gestionando
              logística y pagos para transacciones seguras a escala global.
            </div>
            <Link className='seeMore' to='/productosservicios'>
              <button>Ver más</button>
            </Link>
          </div>
        </div>

        {/* Slide 3 — Inteligencia Comercial */}
        <div className='item' style={{ backgroundImage: `url(${Comercial})` }}>
          <div className='content'>
            <div className='name'>Inteligencia Comercial</div>
            <div className='des'>
              Proveemos estudios de mercado, precios, demanda y competencia para
              decisiones informadas y reducción de riesgos.
            </div>
            <Link className='seeMore' to='/productosservicios'>
              <button>Ver más</button>
            </Link>
          </div>
        </div>

        {/* Slide 4 — Alianzas Estratégicas */}
        <div className='item' style={{ backgroundImage: `url(${Alianzas})` }}>
          <div className='content'>
            <div className='name'>Alianzas Estratégicas</div>
            <div className='des'>
              Estructuramos redes y colaboraciones globales para acelerar la
              internacionalización y el crecimiento sostenible.
            </div>
            <Link className='seeMore' to='/productosservicios'>
              <button>Ver más</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Controles manuales */}
      <div className='button'>
        <button className='prev' ref={prevRef}>
          ◁
        </button>
        <button className='next' ref={nextRef}>
          ▷
        </button>
      </div>
    </div>
  )
}
