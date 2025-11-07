import anime from 'animejs'

/* =========================
   KPIs (coherentes con tu negocio)
   ========================= */
export const DATA_KPIS = [
  {
    id: 1,
    label: 'Proyectos entregados',
    from: 0,
    to: 110,
    suffix: '',
    accent: '#2CB6C0',
  },
  {
    id: 2,
    label: 'Reducción promedio de costos',
    from: 0,
    to: 18,
    suffix: '%',
    accent: '#1E73B6',
  },
  {
    id: 3,
    label: 'Lead time reducido',
    from: 0,
    to: 12,
    suffix: '%',
    accent: '#0B3D6E',
  },
  {
    id: 4,
    label: 'Integraciones API',
    from: 0,
    to: 34,
    suffix: '',
    accent: '#2CB6C0',
  },
  {
    id: 5,
    label: 'Carriers negociados',
    from: 0,
    to: 22,
    suffix: '',
    accent: '#1E73B6',
  },
  {
    id: 6,
    label: 'Mejora de SLA',
    from: 0,
    to: 15,
    suffix: '%',
    accent: '#0B3D6E',
  },
]

/* =========================
   Animaciones con anime.js
   ========================= */

/** Entrada de los tiles al entrar al viewport */
export function revealTiles() {
  const tiles = document.querySelectorAll('.kpi-tile')
  if (!tiles.length) return

  const io = new IntersectionObserver(
    entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          anime({
            targets: e.target,
            translateY: [20, 0],
            opacity: [0, 1],
            delay: i * 60,
            duration: 500,
            easing: 'easeOutQuad',
          })
          io.unobserve(e.target)
        }
      })
    },
    { threshold: 0.15 }
  )

  tiles.forEach(t => io.observe(t))
}

/** Conteo de números (solo cuando la sección entra en viewport) */
export function runCountersOnce() {
  const section = document.querySelector('.casos-kpis')
  if (!section) return

  let played = false
  const io = new IntersectionObserver(
    entries => {
      if (played) return
      entries.forEach(e => {
        if (e.isIntersecting) {
          played = true
          const counters = section.querySelectorAll('[data-kpi-to]')
          counters.forEach(el => animateNumber(el))
          io.disconnect()
        }
      })
    },
    { threshold: 0.35 }
  )

  io.observe(section)
}

/** Anima un número con sufijo opcional (%, etc.) */
function animateNumber(el) {
  const to = Number(el.getAttribute('data-kpi-to') || '0')
  const suffix = el.getAttribute('data-kpi-suffix') || ''
  const isInt = suffix === '' // si no tiene %, dejamos entero por estética

  anime({
    targets: { val: 0 },
    val: to,
    duration: 1400,
    easing: 'easeOutCubic',
    round: isInt ? 1 : 10, // % con un decimal se ve bien; enteros redondos
    update: a => {
      const v = isInt
        ? Math.round(a.animations[0].currentValue)
        : a.animations[0].currentValue.toFixed(1)
      el.textContent = isInt ? `${v}${suffix}` : `${v}${suffix}`
    },
  })
}

/** Hover sutil con “profundidad” */
export function bindTileHover() {
  document.querySelectorAll('.kpi-tile').forEach(tile => {
    tile.addEventListener('mouseenter', () => {
      anime({
        targets: tile,
        scale: 1.015,
        duration: 180,
        easing: 'easeOutQuad',
      })
    })
    tile.addEventListener('mouseleave', () => {
      anime({
        targets: tile,
        scale: 1,
        duration: 160,
        easing: 'easeOutQuad',
      })
    })
  })
}
