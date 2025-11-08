import React, { useEffect } from 'react'
import './Toast.css'

export default function Toast({
  message,
  type = 'ok',
  onClose,
  duration = 4000,
}) {
  useEffect(() => {
    const t = setTimeout(() => onClose && onClose(), duration)
    return () => clearTimeout(t)
  }, [onClose, duration])

  return (
    <div className={`gw-toast ${type === 'ok' ? 'ok' : 'error'}`}>
      <span className='gw-toast-msg'>{message}</span>
      <button
        type='button'
        className='gw-toast-close'
        aria-label='Cerrar notificación'
        onClick={onClose}
      >
        ×
      </button>
    </div>
  )
}
