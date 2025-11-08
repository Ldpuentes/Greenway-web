// src/services/contactService.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function enviarFormulario(data) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const error = await response.json()
      return {
        ok: false,
        message: error.details || error.error || 'Error al guardar',
      }
    }

    const result = await response.json()
    return { ok: true, message: 'Registro guardado con éxito ✅', data: result }
  } catch (err) {
    console.error('Error de conexión:', err)
    return { ok: false, message: 'Error de conexión con el servidor ❌' }
  }
}
