import anime from 'animejs'

/* =========================================================
   SERVICE: Llamado a la Acción (CTA)
   ========================================================= */

/**
 * Animación principal de entrada.
 * Se ejecuta una vez cuando la sección entra en el viewport.
 */
export function initCTAAnimation(sectionEl) {
  if (!sectionEl) return

  const title = sectionEl.querySelector('.cta-title')
  const sub = sectionEl.querySelector('.cta-sub')
  const btn = sectionEl.querySelector('.cta-btn')

  // Desactivamos si el usuario prefiere menos movimiento
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    sectionEl.style.opacity = 1
    title.style.opacity = 1
    sub.style.opacity = 1
    btn.style.opacity = 1
    return
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Timeline de entrada
          anime
            .timeline({ easing: 'easeOutQuad', duration: 650 })
            .add({ targets: sectionEl, opacity: [0, 1], translateY: [60, 0] })
            .add(
              { targets: title, opacity: [0, 1], translateY: [30, 0] },
              '-=500'
            )
            .add(
              { targets: sub, opacity: [0, 1], translateY: [20, 0] },
              '-=480'
            )
            .add({ targets: btn, scale: [0.9, 1], opacity: [0, 1] }, '-=400')

          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.25 }
  )

  observer.observe(sectionEl)
}

/**
 * Efecto "sheen" o brillo que atraviesa el botón al hacer hover.
 * Usa un span temporal (.cta-sheen) que se anima con anime.js.
 */
export function bindCTAButtonHover() {
  const btn = document.querySelector('.cta-btn')
  if (!btn) return

  btn.addEventListener('mouseenter', () => {
    // Evita duplicar si ya hay un sheen activo
    if (btn.querySelector('.cta-sheen')) return

    const sheen = document.createElement('span')
    sheen.classList.add('cta-sheen')
    btn.appendChild(sheen)

    anime({
      targets: sheen,
      translateX: ['-120%', '120%'],
      opacity: [0, 1, 0],
      duration: 1000,
      easing: 'easeOutQuad',
      complete: () => sheen.remove(),
    })
  })
}
