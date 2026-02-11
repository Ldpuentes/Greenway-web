import React, { useState } from 'react'
import './contactanosmini.css'
import { sendContacto } from '../../services/leads.service.js' // ajusta la ruta

export default function ContactMini() {
  const [enviando, setEnviando] = useState(false)
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    setMensaje('')
    setEnviando(true)

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    // payload directo (sin modificar service)
    const payload = {
      ...data,
      source: 'contact-mini',
      proyecto: 'GreenWay',
    }

    const respuesta = await sendContacto(payload, [], {
      formId: 'contactoMini',
    })

    setEnviando(false)

    if (respuesta.ok) {
      setMensaje(respuesta.message)
      e.target.reset()
    } else {
      setMensaje(respuesta.message || 'Error al enviar.')
    }
  }

  return (
    <section className='contact-mini' id='contacto-mini'>
      <div className='cm-blob cm-blob--green' aria-hidden='true' />
      <div className='cm-blob cm-blob--blue' aria-hidden='true' />

      <div className='cm-wrap' data-anim='fade-up'>
        <div className='cm-head'>
          <span className='cm-badge'>GreenWay</span>
          <h2>
            ¿Listo para <span>comenzar</span>?
          </h2>
          <p>
            Te ayudamos con soluciones <strong>claras</strong>,{' '}
            <strong>seguras</strong> y enfocadas en{' '}
            <strong>cumplimiento</strong>.
          </p>
        </div>

        <form
          className='cm-form'
          onSubmit={handleSubmit}
          data-anim='pop'
          data-delay='80'
        >
          <label className='cm-input'>
            <span className='cm-ico' aria-hidden='true'>
              👤
            </span>
            <input type='text' name='nombre' placeholder='Tu nombre' required />
          </label>

          <label className='cm-input'>
            <span className='cm-ico' aria-hidden='true'>
              ✉️
            </span>
            <input
              type='email'
              name='email'
              placeholder='Correo electrónico'
              required
            />
          </label>

          <button
            type='submit'
            className='cm-btn'
            aria-label='Contactar'
            disabled={enviando}
          >
            {enviando ? 'Enviando...' : 'Contactar'}
            <span className='cm-arrow' aria-hidden='true'>
              →
            </span>
          </button>

          <small className='cm-note'>
            {mensaje || 'Respuesta en menos de 24h hábiles.'}
          </small>
        </form>
      </div>
    </section>
  )
}
