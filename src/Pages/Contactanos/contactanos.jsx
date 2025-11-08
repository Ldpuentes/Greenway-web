import React, { useRef, useState } from 'react'
import { useQuienesSomosFX } from '../../Pages/quienesSomos/quienessomos.js'
import './contactanos.css'
import Brokerajew from '../../assets/Brokerajew.png'
import { enviarFormulario } from './contactService.js'
import Toast from './Toast.jsx'

export default function Contactanos() {
  const ref = useRef(null)
  useQuienesSomosFX(ref)

  const [mensajeSistema, setMensajeSistema] = useState('')
  const [enviando, setEnviando] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setMensajeSistema('')
    setEnviando(true)

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    // enviar al backend
    const respuesta = await enviarFormulario(data)
    setEnviando(false)

    if (respuesta.ok) {
      setMensajeSistema(respuesta.message)
      e.target.reset()
    } else {
      setMensajeSistema(respuesta.message || 'Error al guardar')
    }
  }

  return (
    <section className='contact' id='contacto' ref={ref}>
      {/* Fondo decorativo */}
      <div className='contact-bg' aria-hidden='true' />

      {/* Encabezado */}
      <header className='contact-header' data-anim='fade-up'>
        <span className='badge'>GreenWay</span>
        <h1>
          <span>Contáctanos</span>
        </h1>
        <p>
          Cuéntanos brevemente tu necesidad: operamos con enfoque en
          <strong> transacciones seguras</strong>,{' '}
          <strong>acceso a mercados</strong>, <strong>gestión de riesgo</strong>{' '}
          y <strong>cumplimiento</strong>.
        </p>
      </header>

      {/* Layout 2 columnas */}
      <div className='contact-grid'>
        {/* FORMULARIO */}
        <form
          className='contact-form'
          onSubmit={handleSubmit}
          data-anim='fade-left'
        >
          <div className='form-grid'>
            {/* Nombre */}
            <div className='field'>
              <label htmlFor='nombre'>Nombre completo</label>
              <div className='input-wrap'>
                <span className='i'>👤</span>
                <input
                  id='nombre'
                  name='nombre'
                  type='text'
                  required
                  placeholder='Tu nombre'
                />
              </div>
            </div>

            {/* Empresa */}
            <div className='field'>
              <label htmlFor='empresa'>Empresa / Organización</label>
              <div className='input-wrap'>
                <span className='i'>🏢</span>
                <input
                  id='empresa'
                  name='empresa'
                  type='text'
                  required
                  placeholder='Ej: Impresistem'
                />
              </div>
            </div>

            {/* Email */}
            <div className='field'>
              <label htmlFor='email'>Correo electrónico</label>
              <div className='input-wrap'>
                <span className='i'>✉️</span>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  placeholder='correo@ejemplo.com'
                />
              </div>
            </div>

            {/* Teléfono */}
            <div className='field'>
              <label htmlFor='telefono'>Número de teléfono</label>
              <div className='input-wrap'>
                <span className='i'>📞</span>
                <input
                  id='telefono'
                  name='telefono'
                  type='tel'
                  required
                  placeholder='+57 300 000 0000'
                />
              </div>
            </div>

            {/* Select Feria (origen) */}
            <div className='field'>
              <label htmlFor='origen'>Feria</label>
              <div className='input-wrap'>
                <span className='i'>🎪</span>
                <select id='origen' name='origen' defaultValue=''>
                  <option value='' disabled>
                    Selecciona ubicación
                  </option>
                  <option value='Miami'>Miami</option>
                  <option value='Cartagena'>Cartagena</option>
                  <option value='Medellín'>Medellín</option>
                </select>
              </div>
            </div>

            {/* Mensaje */}
            <div className='field field-full'>
              <label htmlFor='mensaje'>
                Mensaje breve (máximo 500 caracteres)
              </label>
              <div className='input-wrap text'>
                <span className='i'>📝</span>
                <textarea
                  id='mensaje'
                  name='mensaje'
                  rows='4'
                  maxLength='500'
                  required
                  placeholder='Cuéntanos en pocas líneas...'
                />
              </div>
            </div>
          </div>

          {/* Botón de envío */}
          <button
            type='submit'
            className='btn-send'
            aria-label='Enviar mensaje'
            disabled={enviando}
          >
            {enviando ? 'Enviando...' : 'Enviar mensaje'}
          </button>

          {/* Toast flotante */}
          {mensajeSistema && (
            <Toast
              message={mensajeSistema}
              type={mensajeSistema.includes('éxito') ? 'ok' : 'error'}
              onClose={() => setMensajeSistema('')}
            />
          )}
        </form>

        {/* PANEL VISUAL */}
        <aside className='contact-aside' aria-label='Información de contacto'>
          <div className='aside-card' data-anim='pop'>
            <div
              className='aside-hero'
              style={{
                backgroundImage: `url(${Brokerajew})`,
              }}
            ></div>

            <div className='aside-body'>
              <h3>Hablemos de tu caso</h3>
              <ul className='ticks'>
                <li>Transacciones seguras con evidencia</li>
                <li>Acceso a mercados internacionales</li>
                <li>Gestión de riesgo y cumplimiento</li>
              </ul>

              <div className='contact-cards'>
                <div className='ccard' data-anim='fade-up' data-delay='80'>
                  <span className='cc-ico'>📧</span>
                  <div>
                    <strong>Correo</strong>
                    <p>comercial@greenway.com</p>
                  </div>
                </div>
                <div className='ccard' data-anim='fade-up' data-delay='140'>
                  <span className='cc-ico'>📍</span>
                  <div>
                    <strong>Ubicación</strong>
                    <p>Estados Unidos Miami - Florida</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
