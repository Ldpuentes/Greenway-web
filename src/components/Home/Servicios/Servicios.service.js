import anime from 'animejs'

export default function initServiciosAnimations() {
  // Header
  anime({
    targets: '.svc-header',
    opacity: [0, 1],
    translateY: [12, 0],
    easing: 'easeOutQuad',
    duration: 520,
  })

  // Intersección para filas
  const io = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const row = entry.target
        if (row.classList.contains('is-animated')) return
        row.classList.add('is-animated')

        const media = row.querySelector("[data-anim='media'] img")
        const copy = row.querySelector("[data-anim='copy']")
        const isReverse = row.classList.contains('reverse')
        const mediaX = isReverse ? 60 : -60
        const copyX = isReverse ? -40 : 40

        anime
          .timeline({ easing: 'easeOutQuad', duration: 600 })
          .add({
            targets: media,
            opacity: [0, 1],
            translateX: [mediaX, 0],
            scale: [1.04, 1],
          })
          .add({
            targets: copy,
            opacity: [0, 1],
            translateX: [copyX, 0],
            offset: '-=300',
          })

        io.unobserve(row)
      })
    },
    { threshold: 0.25 }
  )

  document.querySelectorAll('.svc-row').forEach(r => io.observe(r))
}
