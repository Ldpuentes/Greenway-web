const ENDPOINT_URL = 'https://leads.appfastway.com/Leads/public/leads/ingest'
const PUBLIC_KEY = 'key_landing_abc'

function safeJsonParse(text) {
  try {
    return { ok: true, data: JSON.parse(text) }
  } catch {
    return { ok: false, data: null }
  }
}

/**
 * Envío estándar:
 * multipart/form-data
 * - pageUrl
 * - formId
 * - payload (JSON)
 * - files (0..N)
 *
 * @param {object} payload
 * @param {File[]=} files
 * @param {object=} opts
 * @param {string=} opts.formId
 */
export async function sendContacto(payload, files = [], opts = {}) {
  const fd = new FormData()

  // metadata fija
  fd.append('pageUrl', window.location.href)
  fd.append('formId', opts.formId || 'contactoMaterial')

  // payload JSON
  fd.append('payload', JSON.stringify(payload || {}))

  // archivos
  if (Array.isArray(files)) {
    files.forEach(file => {
      if (file) fd.append('files', file)
    })
  }

  const headers = {
    'x-api-key': PUBLIC_KEY,
  }

  let res
  try {
    res = await fetch(ENDPOINT_URL, {
      method: 'POST',
      headers,
      body: fd,
    })
  } catch (err) {
    console.error('[sendContacto] fetch error:', err)
    return {
      ok: false,
      status: 0,
      message: 'No fue posible conectar con el servidor.',
    }
  }

  const status = res.status
  const text = await res.text()
  const parsed = safeJsonParse(text)

  // respuesta JSON estándar del backend
  if (parsed.ok && parsed.data && typeof parsed.data === 'object') {
    const data = parsed.data
    const ok = res.ok && data.ok === true

    return {
      ok,
      status,
      message:
        data.message ||
        (ok
          ? '¡Información enviada! Te contactaremos pronto.'
          : 'El servidor no pudo procesar la solicitud.'),
      leadId: data.leadId || data.id,
      notification: data.notification,
      fieldErrors: data.fieldErrors || data.errors,
    }
  }

  // fallback por status HTTP
  if (res.ok) {
    return { ok: true, status, message: 'Solicitud enviada correctamente.' }
  }

  let message = 'No pudimos enviar tu solicitud.'
  if (status === 400) message = 'Revisa los datos enviados.'
  if (status === 401 || status === 403) message = 'No autorizado.'
  if (status === 404) message = 'Endpoint no encontrado.'
  if (status >= 500) message = 'Error interno del servidor.'

  return { ok: false, status, message }
}
