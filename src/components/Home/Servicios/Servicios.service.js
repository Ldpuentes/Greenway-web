import anime from 'animejs'

export default function initServiciosAnimations(root) {
  const rootEl = root
  const header = rootEl.querySelector('.svc-header')
  const rows = Array.from(rootEl.querySelectorAll('.svc-row'))

  const reduceMotion =
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Helpers visibles/ocultos
  const show = el => {
    if (!el) return
    el.style.opacity = '1'
    el.style.transform = 'none'
    el.style.scale = '1'
  }
  const hide = el => {
    if (!el) return
    el.style.opacity = '0'
  }

  // Estado inicial: ocultamos SOLO imagen; el texto queda visible si algo falla
  if (header) {
    header.style.opacity = '0'
    header.style.transform = 'translateY(12px)'
  }
  rows.forEach(row => {
    row.classList.remove('is-animated')
    const media = row.querySelector("[data-anim='media'] img")
    const copy = row.querySelector("[data-anim='copy']")
    hide(media)
    // El texto NO lo oculto completamente; lo dejo semivisible por seguridad
    if (copy) {
      copy.style.opacity = '1'
      copy.style.transform = 'none'
    }
    if (media) {
      media.style.transform = 'translateX(0)'
      media.style.scale = '1.04'
    }
  })

  // Reduce motion → mostrar todo sin animar
  if (reduceMotion) {
    if (header) show(header)
    rows.forEach(row => {
      const media = row.querySelector("[data-anim='media'] img")
      const copy = row.querySelector("[data-anim='copy']")
      show(media)
      show(copy)
      row.classList.add('is-animated')
    })
    return () => {}
  }

  // Animación de header
  if (header) {
    anime({
      targets: header,
      opacity: [0, 1],
      translateY: [12, 0],
      easing: 'easeOutQuad',
      duration: 520,
    })
  }

  // Stagger simple por filas (sin IO, siempre corre al montar)
  rows.forEach((row, i) => {
    const media = row.querySelector("[data-anim='media'] img")
    const copy = row.querySelector("[data-anim='copy']")
    const isReverse = row.classList.contains('reverse')
    const mediaX = isReverse ? 60 : -60
    const copyX = isReverse ? -40 : 40

    // Si por lo que sea no hay anime, igualmente mostramos
    show(copy)

    anime
      .timeline({
        easing: 'easeOutQuad',
        duration: 600,
        delay: 120 * i, // stagger por fila
      })
      .add(
        media
          ? {
              targets: media,
              opacity: [0, 1],
              translateX: [mediaX, 0],
              scale: [1.04, 1],
            }
          : {}
      )
      .add(
        copy
          ? {
              targets: copy,
              translateX: [copyX, 0],
              opacity: [1, 1], // ya visible
              offset: media ? '-=300' : 0,
            }
          : {}
      )

    row.classList.add('is-animated')
  })

  // Seguridad extra: si a los 600ms algo quedó oculto, muéstralo sin animar
  const safety = setTimeout(() => {
    rows.forEach(row => {
      const media = row.querySelector("[data-anim='media'] img")
      const copy = row.querySelector("[data-anim='copy']")
      if (media && getComputedStyle(media).opacity === '0') show(media)
      if (copy && getComputedStyle(copy).opacity === '0') show(copy)
    })
  }, 600)

  const onVisibility = () => {
    if (document.visibilityState !== 'visible') {
      anime.running.forEach(inst => inst.pause())
    }
  }
  document.addEventListener('visibilitychange', onVisibility)

  return () => {
    clearTimeout(safety)
    document.removeEventListener('visibilitychange', onVisibility)
    if (header) anime.remove(header)
    rows.forEach(row => {
      const media = row.querySelector("[data-anim='media'] img")
      const copy = row.querySelector("[data-anim='copy']")
      if (media) anime.remove(media)
      if (copy) anime.remove(copy)
    })
  }
}
